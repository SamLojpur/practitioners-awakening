// SVG.extend(SVG.Element, {
//     // alias clone method
//     deepClone: function () {
//         return this.clone()
//     }

// })

// SVG.extend(SVG.G, {
//     // clone object with its children
//     deepClone: function () {
//         var clone = this.parent().group()

//         this.each(function () {
//             clone.add(this.deepClone())
//         })

//         return clone
//     }

// })

// var randomProperty = function (obj) {
//     var keys = Object.keys(obj)
//     return obj[keys[keys.length * Math.random() << 0]]
// };

import SVG from './node_modules/@svgdotjs/svg.js/src/svg.js'
console.log(SVG)

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

const PRIMARY_DARK = '#00001e'
const PRIMARY = '#0e1554'
// eslint-disable-next-line no-unused-vars
const PRIMARY_LIGHT = '#362f6e'
// eslint-disable-next-line no-unused-vars
const SECONDARY_DARK = '#c6a700'
const SECONDARY = '#fdd835'
const SECONDARY_LIGHT = '#ffff6b'

const BG_COLOR = PRIMARY_DARK
const RING_COLOR = PRIMARY
const SHAPE_COLOR = SECONDARY_LIGHT
const CIRCLE_COLOR = SECONDARY_LIGHT

const SYMBOL_NAME_TO_STRING_MAP = {
  fate:
    'm 1,-2 -0.65695,0.8015 -1.83025,-0.83434 v 3.38615 3.38615 l 1.83025,-0.83434 0.65695,0.8015',
  war: 'm -2,-2 1.5607,-1.56071 v 6.77516 -6.77516 l 1.56071,1.56071',
  time: 'm -2,-3 3.68718,6.27525 h -3.68718 l 3.68718,-6.27525 z',
  death:
    'm 0,-4 v 6.77252 m 1.35033,-6.46251 -1.35033,2.43015 -1.35034,-2.44752',
  nature:
    'm -1,3 0.80618,-2.99122 c -0.59196,-0.30114 -1.09404,-0.93705 -1.09506,-1.54128 -10e-4,-0.81993 0.9165,-1.74362 1.73642,-1.74224 0.8172,0.001 1.72616,0.92504 1.72479,1.74224 -0.001,0.55532 -0.42383,1.21401 -0.951,1.54128 l 0.83227,2.98985',
  light:
    'm 0,-3 v 6.26508 m 0.004,-5.05959 c -0.86557,-0.01 -1.82077,0.99072 -1.81117,1.8563 0.009,0.84659 0.96458,1.78535 1.81117,1.77575 0.82761,-0.009 1.73118,-0.94814 1.74034,-1.77575 0.009,-0.84702 -0.89332,-1.8467 -1.74034,-1.8563 z',
  myrrh:
    'm 1,-3 v 4.38769 l -1.79338,1.83691 -1.88044,-1.83691 v -4.38769 l 2.52273,2.19107 -0.64229,0.70794 -0.66887,-0.70794 z',
  oil:
    'm 0,3 c 1.81015,0.49036 3.22692,-1.20006 2.2085,-3.37853 -0.90867,1.19399 -2.02588,2.21938 -2.2085,3.37853 z m -0.77849,-0.56445 c 1.3727,-2.76581 3.73768,-3.86315 1.56252,-5.54102 -0.62757,1.79529 -3.60819,3.13845 -1.56252,5.54102 z',
  iron:
    'm -5,-4 v 1.27771 h -1.03466 l -1.62842,-1.27771 z m 0.58112,-0.33068 h 5.17579 v 0.84256 c -4.71877,1.75654 -2.14219,2.94803 -0.62257,4.39405 v 0.64813 h -5.57229 v -0.97219 c 1.60529,-1.18306 2.59585,-2.28913 1.01907,-3.10858 z',
  spice:
    'm 0,0 0.48292,0.4788 -0.48292,0.48706 -0.49119,-0.48706 z m 7.14675,-0.0661 0.48293,0.4788 -0.48293,0.48705 -0.49118,-0.48705 z m -2.59324,-2.27319 0.48293,0.4788 -0.48293,0.48706 -0.49118,-0.48706 z m -4.03263,6.19962 1.40337,-1.70882 -0.72645,-0.95759 -2.19587,2.66641 z m 0.90806,0 h 6.00974 l -2.87422,-3.97943 z',
  quartz:
    'm 2,1 1.10345,-1.47228 -1.18992,-1.59489 -1.03184,1.50634 z m -0.57381,-3.88035 -0.5767,-0.82798 -2.20567,3.23605 2.20567,3.18775 0.59726,-0.87299 -1.53105,-2.35501 z',
  ash: 'm -2,3 -5.63539,-6.14769 7.10663,-0.11823 -3.67811,3.84888',
  alchohol:
    'm -2,-3 c 0.40293,1.31325 -2.00785,1.88621 0.0325,2.39648 m -2.99708,-2.32713 3.19108,5.63032 1.95879,-5.64133 h 1.14341 l -3.1022,5.64133',
  honey: 'm 0,-1 v 2.00799 m 1.48828,-1.03943 h -7.34691 l 2.26786,2.26786',
  milk: 'm -8,-3 3.65486,6.3304 3.57463,-6.32315 z',
  meat:
    'm -1,-2 c 0,0 0.61087,-0.57309 1.07233,-0.50286 0.46146,0.0702 1.309,0.62767 1.29887,1.92333 -0.0101,1.29567 -2.93683,4.40489 -2.93683,4.40489 h 0.60689 c 0,0 -2.98411,-3.10922 -2.99424,-4.40489 -0.0101,-1.29566 0.83741,-1.85309 1.29887,-1.92332 0.46146,-0.0702 1.07234,0.50285 1.07234,0.50285',
  bread:
    'm -2,-0.5 2.656087,-2.627575 m -5.278862,0.0048 4.144486,4.218714 -1.645429,1.645418 0.07426,-5.938361',
  coin:
    'm 2,3 c 0,0 0.45956,-0.53289 0.76224,-0.50207 0.3487,0.0355 0.74354,0.39304 0.74354,0.74355 0,0.94512 -2.00491,1.05979 -2.00491,2.00491 0,0.36303 0.40749,0.75251 0.7701,0.7701 0.22612,0.011 0.4795,-0.20964 0.52446,-0.43152 0.0431,-0.21285 -0.0672,-0.41245 -0.35959,-0.4445 m -6.80774,-1.63813 h 6.75554 l -3.25746,-3.72972 z',
  darkness:
    'm -3,0 h -3.75103 l 1.87552,-3.24849 z m 1.87552,-3.24847 -3.75103,6.49698 -3.75104,-6.49698 z',
  molasses:
    'm -2.5,-1 5.12823,1.65373 m 0.26727,-2.93996 c -3.02755,0.61657 -1.12444,4.46346 -3.99234,5.54584 m 2.10475,-6.1472 c -2.67906,0.7699 -0.83355,4.24565 -3.842,5.26187',
  holly:
    'm 0,-4 c -0.01478,0.659237 -0.09318,1.199372 -0.287404,1.729855 0.163695,-0.06423 0.419915,-0.22432 0.534331,-0.385506 0.653677,0.593032 1.693112,1.13873 2.498834,1.326343 0.05784,0.403305 0.130773,0.805602 0.308213,1.146758 0.07758,-0.519706 0.132793,-0.982714 0.594357,-1.555887 -0.71899,-0.458031 -1.731715,-1.306154 -1.991096,-2.006079 -0.588968,0.0973 -1.140657,-0.08735 -1.657235,-0.255484 z m 0.251636,2.126687 c -0.479182,0.313213 -1.086242,0.479955 -1.700673,0.575676 0.291608,0.510476 0.653526,1.013929 0.502811,1.570963 0.772795,0.134412 1.47243,0.415146 2.027267,0.98547 0.590524,-0.329237 1.196605,-0.531496 1.835547,-0.473356 -0.325938,-0.508508 -0.630391,-1.027416 -0.719852,-1.654163 -0.744948,-0.185083 -1.354558,-0.527857 -1.9451,-1.00459 z m 4.093529,1.484988 c -0.375098,0.0024 -0.789478,0.43055 -0.785478,0.805636 0.0034,0.360997 0.4095,0.763777 0.770498,0.760677 0.37275,-0.0036 0.78283,-0.427717 0.78083,-0.800468 -0.002,-0.360996 -0.40486,-0.768145 -0.76585,-0.765845 z m -1.368097,1.747428 c -0.375094,0.0023 -0.789381,0.430556 -0.785481,0.805635 0.0034,0.361011 0.409498,0.765094 0.770495,0.761194 0.372735,-0.0036 0.782827,-0.428242 0.780827,-0.800985 -0.002,-0.361004 -0.404846,-0.768144 -0.765841,-0.765844 z m 2.202937,0.331403 c -0.37509,0.0024 -0.78948,0.430556 -0.78548,0.805635 0.003,0.360996 0.4095,0.763777 0.7705,0.760677 0.37275,-0.0036 0.78283,-0.427716 0.78083,-0.800467 -0.002,-0.361005 -0.40484,-0.768145 -0.76585,-0.765845 z'
}

const OUTER = ['fate', 'war', 'time', 'death', 'coin']
const MID = ['oil', 'spice', 'quartz', 'holly', 'myrrh']
const INNER = ['milk', 'honey', 'molasses', 'ash', 'alchohol', 'meat', 'bread']

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
)
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
)

const RING_ROTATION_PERIOD = 30000
const SYMBOL_ROTATION_PERIOD = 9000
const RING_ROTATION_DEGREES = 360
const SYMBOL_ROTATION_DEGREES = -360
const SIZE_X = 1200
const SIZE_Y = 830
const PIVOT_X = SIZE_X / 2
const PIVOT_Y = SIZE_Y / 2
const STARFIELD_X_OFFSET = -2000

const STARFIELD_X = 1920
const STARFIELD_Y = 1080

var draw = SVG('svg.magic-circle').attr({ margin: 0 }).size(SIZE_X, SIZE_Y)
var starfieldDraw = SVG('svg.stars').attr({
  style: 'background-color:' + BG_COLOR,
  margin: 0
})
var star = starfieldDraw.symbol().circle(2).fill('white')
makeStarfield(star, 100, 80000)
makeStarfield(star, 200, 160000)
makeStarfield(star, 200, 320000)

const coreCircle = draw
  .circle(100)
  .attr({
    fill: 'none',
    stroke: SECONDARY_LIGHT,
    'stroke-width': 6
  })
  .translate(PIVOT_X - 50, PIVOT_Y - 50)

let popup = makeCircledSymbol(60, '').translate(120, 150).scale(3.5)

const innerSymbolGroups = INNER.map((symbolString) => {
  return makeCircledSymbol(60, SYMBOL_NAME_TO_STRING_MAP[symbolString])
})
const ringGroup = makeRing(PIVOT_X, PIVOT_Y, 300, innerSymbolGroups, 60)
ringGroup
  .rotate(-90, PIVOT_X, PIVOT_Y)
  .animate(RING_ROTATION_PERIOD, 0, 'now')
  .ease('-')
  .loop(0)
  .rotate(-RING_ROTATION_DEGREES, PIVOT_X, PIVOT_Y)

ringGroup.remember('circledShapes').forEach((triangle) =>
  triangle
    .animate(SYMBOL_ROTATION_PERIOD, 0, 'now')
    .ease('-')
    .loop(0)
    .rotate(SYMBOL_ROTATION_DEGREES, 0, 0)
)

const midSymbolGroups = MID.map((symbolString) => {
  return makeCircledSymbol(60, SYMBOL_NAME_TO_STRING_MAP[symbolString])
})
const ringGroup2 = makeRing(PIVOT_X, PIVOT_Y, 500, midSymbolGroups, 60)
ringGroup2
  .rotate(-90, PIVOT_X, PIVOT_Y)
  .animate(RING_ROTATION_PERIOD, 0, 'now')
  .ease('-')
  .loop(0)
  .rotate(RING_ROTATION_DEGREES, PIVOT_X, PIVOT_Y)

ringGroup2.remember('circledShapes').forEach((triangle) =>
  triangle
    .animate(SYMBOL_ROTATION_PERIOD, 0, 'now')
    .ease('-')
    .loop(0)
    .rotate(-SYMBOL_ROTATION_DEGREES, 0, 0)
)

const outerSymbolGroups = OUTER.map((symbolString) => {
  return makeCircledSymbol(60, SYMBOL_NAME_TO_STRING_MAP[symbolString])
})
const ringGroup3 = makeRing(PIVOT_X, PIVOT_Y, 750, outerSymbolGroups, 60)
ringGroup3
  .rotate(-90, PIVOT_X, PIVOT_Y)
  .animate(RING_ROTATION_PERIOD, 0, 'now')
  .ease('-')
  .loop(0)
  .rotate(-RING_ROTATION_DEGREES, PIVOT_X, PIVOT_Y)

ringGroup3.remember('circledShapes').forEach((triangle) =>
  triangle
    .animate(SYMBOL_ROTATION_PERIOD, 0, 'now')
    .ease('-')
    .loop(0)
    .rotate(SYMBOL_ROTATION_DEGREES, 0, 0)
)

function makeStarfield (starSvg, count, duration) {
  const starfieldGroup = starfieldDraw.group()

  const timeline = new SVG.Timeline()
  for (let i = 0; i < count; i++) {
    starfieldDraw
      .use(starSvg)
      .scale(getRandomArbitrary(0.5, 1.5))
      .translate(
        getRandomArbitrary(
          Math.min(0, STARFIELD_X_OFFSET),
          STARFIELD_X + Math.max(0, STARFIELD_X_OFFSET)
        ),
        STARFIELD_Y
      ) // prolly needs +n% for diagonal screen being longer than non-diagonal
      .timeline(timeline)
      .animate(duration, getRandomArbitrary(0, duration), 'start')
      .ease('-')
      .translate(-STARFIELD_X_OFFSET, -STARFIELD_Y - 2)
      .loop(0, false, 0)
  }
  timeline.seek(duration)
  return starfieldGroup
}

function makeCircledSymbol (r, symbolString) {
  const SCALE_FACTOR = 1.2
  const circledShapeGroup = draw.group()

  // eslint-disable-next-line no-unused-vars
  const shape = circledShapeGroup
    .path(symbolString)
    .scale((r / 60) * 5)
    .stroke({ color: SHAPE_COLOR, width: 0.5, linejoin: 'round' })
    .attr({ 'fill-opacity': 0 })
    .rotate(90)

  const shapeHolder = circledShapeGroup
    .circle(r)
    .translate(-r / 2, -r / 2)
    .stroke({ color: RING_COLOR, width: 6, linejoin: 'round' })
    .attr({ 'fill-opacity': 0 })

  circledShapeGroup.on('mouseover', function () {
    this.animate(300, '<>')
      .stroke(CIRCLE_COLOR)
      .scale(SCALE_FACTOR)
    this.remember('mask').animate(300, '<>')
      .scale(SCALE_FACTOR)
    shapeHolder.animate(300, '<>').stroke(CIRCLE_COLOR)
  })
  circledShapeGroup.on('mouseout', function () {
    this.animate(300, '<>')
      .stroke(RING_COLOR)
      .scale(1 / SCALE_FACTOR)
    this.remember('mask').animate(300, '<>')
      .scale(1 / SCALE_FACTOR)
    shapeHolder.animate(300, '<>').stroke(RING_COLOR)
  })
  circledShapeGroup.on('click', function () {
    this.animate(500, '<>').rotate(360)
    popup.remove()
    popup = makeCircledSymbol(60, symbolString)
      .translate(120, 150)
      .scale(3.5)
      .rotate(-90)
  })
  return circledShapeGroup
}

function makeRing (cx, cy, r, symbolList, symbolR) {
  var ringGroup = draw.group()
  // let ring_color = SVG.Color.random('vibrant')
  const n = symbolList.length
  const plot = regularPolygonPoints(n, r)
  const angles = regularPolygonAngles(n)

  // outer ring
  const ring = ringGroup.circle(r)
  ring
    .translate(cx - r / 2, cy - r / 2)
    .fill('none')
    .stroke({ color: RING_COLOR, width: 6, linejoin: 'round' })

  // polygon ring
  const polyRing = ringGroup.polygon().plot(plot)
  polyRing
    .translate(cx, cy)
    .fill('none')
    .stroke({ color: RING_COLOR, width: 6, linejoin: 'round' })

  // const circledShapes = plot.map(([x, y]) => {

  // })

  const maskGroup = draw.symbol().group()
  const maskRing = ring.clone().fill('#fff').stroke('none').scale(1.1)
  maskGroup.add(maskRing)

  maskGroup.back()

  const circledShapes = plot.map(([x, y]) => {
    const maskCircle = maskGroup
      .circle(symbolR)
      .translate(-symbolR / 2, -symbolR / 2)
      .fill('#000')
      .stroke('none')
      .translate(cx + x, cy + y)

    return symbolList.pop()
      .addTo(ringGroup)
      .rotate(angles.shift())
      .translate(cx + x, cy + y)
      .remember('mask', maskCircle, true)
  })
  ringGroup.remember('circledShapes', circledShapes)
  ringGroup.remember('maskGroup', maskGroup)

  // ringGroup.use(maskGroup)

  ring.maskWith(ringGroup.use(maskGroup).translate(-cx + r / 2, -cy + r / 2))
  polyRing.maskWith(ringGroup.use(maskGroup).translate(-cx, -cy))

  // ring.maskWith(maskGroup.clone().translate(-cx + r / 2, -cy + r / 2))
  // console.log(ring.masker().first())
  // polyRing.maskWith(maskGroup.clone().translate(-cx, -cy))
  // ring.masker().first().children().translate(30, 0)
  // maskGroup.remove()

  return ringGroup
}

function regularPolygonPoints (n, r) {
  const plot = []
  for (let i = 0; i < n; i++) {
    const theta = (2 * Math.PI * i) / n
    plot.push([(Math.cos(theta) * r) / 2, (Math.sin(theta) * r) / 2])
  }
  return plot
}
function regularPolygonAngles (n) {
  const angles = []
  for (let i = 0; i < n; i++) {
    const theta = (360 * i) / n
    angles.push(theta)
  }
  return angles
}
