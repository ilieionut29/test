const { d3, Splitting } = window
/**
 * Meanderer class. Accepts a path, container, height, width, and change handler.
 * Although it doesn't need a handler. We can just call get path and let it do that.
 * The checks can be handled outside. We don't need to do it inside.
 */
class Meanderer {
  container
  height
  path
  threshold
  width
  constructor({ height, path, threshold = 0.2, width }) {
    this.height = height
    this.path = path
    this.threshold = threshold
    this.width = width
    // With what we are given create internal references
    this.aspect_ratio = width / height
    // Convert the path into a data set
    this.path_data = this.convertPathToData(path)
    this.maximums = this.getMaximums(this.path_data)
    this.range_ratios = this.getRatios(this.maximums, width, height)
  }
  // This is relevant for when we want to interpolate points to
  // the container scale. We need the minimum and maximum for both X and Y
  getMaximums = data => {
    const X_POINTS = data.map(point => point[0])
    const Y_POINTS = data.map(point => point[1])
    return [
      Math.max(...X_POINTS), // x2
      Math.max(...Y_POINTS), // y2
    ]
  }
  // Generate some ratios based on the data points and the path width and height
  getRatios = (maxs, width, height) => [maxs[0] / width, maxs[1] / height]

  /**
   * Initially convert the path to data. Should only be required
   * once as we are simply scaling it up and down. Only issue could be upscaling??
   * Create high quality paths initially
   */
  convertPathToData = path => {
    // To convert the path data to points, we need an SVG path element.
    const svgContainer = document.createElement('div')
    // To create one though, a quick way is to use innerHTML
    svgContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">
                              <path d="${path}"/>
                            </svg>`
    const pathElement = svgContainer.querySelector('path')
    // Now to gather up the path points using the SVGGeometryElement API 👍
    const DATA = []
    // Iterate over the total length of the path pushing the x and y into
    // a data set for d3 to handle 👍
    for (let p = 0; p < pathElement.getTotalLength(); p++) {
      const { x, y } = pathElement.getPointAtLength(p)
      DATA.push([x, y])
    }
    return DATA
  }

  /**
   * This is where the magic happens.
   * Use ratios etc. to interpolate our data set against our container bounds.
   */
  generatePath = (containerWidth, containerHeight) => {
    const {
      height,
      width,
      aspect_ratio: aspectRatio,
      path_data: data,
      maximums: [maxWidth, maxHeight],
      range_ratios: [widthRatio, heightRatio],
      threshold,
    } = this
    const OFFSETS = [0, 0]
    // Get the aspect ratio defined by the container
    const newAspectRatio = containerWidth / containerHeight
    // We only need to start applying offsets if the aspect ratio of the container is off 👍
    // In here we need to work out which side needs the offset. It's whichever one is smallest in order to centralize.
    // What if the container matches the aspect ratio...
    if (Math.abs(newAspectRatio - aspectRatio) > threshold) {
      // We know the tolerance is off so we need to work out a ratio
      // This works flawlessly. Now we need to check for when the height is less than the width
      if (width < height) {
        const ratio = (height - width) / height
        OFFSETS[0] = (ratio * containerWidth) / 2
      } else {
        const ratio = (width - height) / width
        OFFSETS[1] = (ratio * containerHeight) / 2
      }
    }
    // Create two d3 scales for X and Y
    const xScale = d3
      .scaleLinear()
      .domain([0, maxWidth])
      .range([OFFSETS[0], containerWidth * widthRatio - OFFSETS[0]])
    const yScale = d3
      .scaleLinear()
      .domain([0, maxHeight])
      .range([OFFSETS[1], containerHeight * heightRatio - OFFSETS[1]])
    // Map our data points using the scales
    const SCALED_POINTS = data.map(POINT => [
      xScale(POINT[0]),
      yScale(POINT[1]),
    ])
    return d3.line()(SCALED_POINTS)
  }
}

const CONTAINER = document.querySelector('.container-staycool')
const PATH =
  'M56.374 0C25.143 0 0 23.65 0 53.028v126.43c0 4.793 4.102 8.652 9.198 8.652h35.604v44.654c0 4.684 5.16 8.456 11.571 8.456 6.41 0 11.572-3.772 11.572-8.456V188.11h35.605c5.095 0 9.198-3.86 9.198-8.652V53.028C112.748 23.651 87.605 0 56.374 0z'
const WIDTH = 112.748
const HEIGHT = 241.22

const responsivePath = new Meanderer({
  path: PATH,
  width: WIDTH,
  height: HEIGHT,
})

const setPath = () => {
  const scaledPath = responsivePath.generatePath(
    CONTAINER.offsetWidth,
    CONTAINER.offsetHeight
  )
  CONTAINER.style.setProperty('--path', `"${scaledPath}"`)
}
Splitting()

const SizeObserver = new ResizeObserver(setPath)
SizeObserver.observe(CONTAINER)
