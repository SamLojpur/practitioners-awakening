// import SVG from './node_modules/@svgdotjs/svg.js/src/svg.js'
// import { $, jQuery } from './node_modules/jquery/dist/jquery.js'

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

// const PRIMARY_DARK = '#00001e'
// const PRIMARY = '#0e1554'
// const PRIMARY_LIGHT = '#362f6e'
// const SECONDARY_DARK = '#c6a700'
// const SECONDARY = '#fdd835'
// const SECONDARY_LIGHT = '#ffff6b'
const PRIMARY_DARK = '#0C0C35'
const PRIMARY = '#1D1D7F'
const PRIMARY_LIGHT = '#362f6e'
const SECONDARY_DARK = '#c6a700'
const SECONDARY = '#fdd835'
const SECONDARY_LIGHT = '#ffff6b'

const BG_COLOR = PRIMARY_DARK
const RING_COLOR = PRIMARY
const SHAPE_COLOR = SECONDARY_LIGHT
const CIRCLE_COLOR = SECONDARY_LIGHT

const SYMBOL_NAME_TO_STRING_MAP = {
  fate: {
    svg: 'm 1,-2 -0.65695,0.8015 -1.83025,-0.83434 v 3.38615 3.38615 l 1.83025,-0.83434 0.65695,0.8015',
    description: 'Fate is represented by something woven. It is a requirement in all known awakenings',
    quote: 'Reminds me of the fates from greek legend? Also possible tie in to the Sight?'
  },
  war: {
    svg: 'm -2,-2 1.5607,-1.56071 v 6.77516 -6.77516 l 1.56071,1.56071',
    description: 'A knife is the most common choice here, and is a requirement in all known awakenings',
    quote: 'In all my research it seems a knife or small dagger is used exclusively, never a sword/mace/sling? War never changes I suppose...'
  },
  time: {
    svg: 'm -2,-3 3.68718,6.27525 h -3.68718 l 3.68718,-6.27525 z',
    description: 'Time is represented by a timepice, ranging from the classic hourglass depicted in the sigil, to the more esoteric metronome',
    quote: 'Oh! I just noticed: in my interview with the Blood Magus, he said the sacrifice played a role in each Circle of the \'Humanity\' Ring in his Awakening, but it seems he didn\'t bring up what was used as the timepiece.  I wonder if he neglected to mention it on purpose...'
  },
  death: {
    svg: 'm 0,-4 v 6.77252 m 1.35033,-6.46251 -1.35033,2.43015 -1.35034,-2.44752',
    description: 'Death is represented by a skull, or an effigy of a skull if a real one cannot be procured. Other bones have been known to be used in variants, but seem to result in practitioners will less influence over the domain of Death across the board.',
    quote: 'It seems like the skull represents the finality of death much better than bone, which could still be linked to a living creature if one isn\'t careful'
  },
  nature: {
    svg: 'm -1,3 0.80618,-2.99122 c -0.59196,-0.30114 -1.09404,-0.93705 -1.09506,-1.54128 -10e-4,-0.81993 0.9165,-1.74362 1.73642,-1.74224 0.8172,0.001 1.72616,0.92504 1.72479,1.74224 -0.001,0.55532 -0.42383,1.21401 -0.951,1.54128 l 0.83227,2.98985',
    description: ''
  },
  light: {
    svg: 'm 0,-3 v 6.26508 m 0.004,-5.05959 c -0.86557,-0.01 -1.82077,0.99072 -1.81117,1.8563 0.009,0.84659 0.96458,1.78535 1.81117,1.77575 0.82761,-0.009 1.73118,-0.94814 1.74034,-1.77575 0.009,-0.84702 -0.89332,-1.8467 -1.74034,-1.8563 z',
    description: ''
  },
  darkness: {
    svg: 'm -3,0 h -3.75103 l 1.87552,-3.24849 z m 1.87552,-3.24847 -3.75103,6.49698 -3.75104,-6.49698 z',
    description: 'Fate described'
  },
  deals: {
    svg: 'm 2,3 c 0,0 0.45956,-0.53289 0.76224,-0.50207 0.3487,0.0355 0.74354,0.39304 0.74354,0.74355 0,0.94512 -2.00491,1.05979 -2.00491,2.00491 0,0.36303 0.40749,0.75251 0.7701,0.7701 0.22612,0.011 0.4795,-0.20964 0.52446,-0.43152 0.0431,-0.21285 -0.0672,-0.41245 -0.35959,-0.4445 m -6.80774,-1.63813 h 6.75554 l -3.25746,-3.72972 z',
    description: 'The coin is in the unique position of being represented in two different Rings. Most often it finds a home in the Humanity Ring as mark of deals or exchange. Its not uncommon, however, for the coin to find a home in the Ring of Offerings as a gesture to the spirits. In cultures with less focus on trade and economics, the coin is often omitted altogether in favour of nature. In either case one will always find better results with a coin than paper currency.',
    quote: 'I wonder if this strangeness could tie into how the practitioner sees the value of money? Something to be offered to others (like food) v.s. a core part of being human.'
  },
  holly: {
    svg: 'm 0,-4 c -0.01478,0.659237 -0.09318,1.199372 -0.287404,1.729855 0.163695,-0.06423 0.419915,-0.22432 0.534331,-0.385506 0.653677,0.593032 1.693112,1.13873 2.498834,1.326343 0.05784,0.403305 0.130773,0.805602 0.308213,1.146758 0.07758,-0.519706 0.132793,-0.982714 0.594357,-1.555887 -0.71899,-0.458031 -1.731715,-1.306154 -1.991096,-2.006079 -0.588968,0.0973 -1.140657,-0.08735 -1.657235,-0.255484 z m 0.251636,2.126687 c -0.479182,0.313213 -1.086242,0.479955 -1.700673,0.575676 0.291608,0.510476 0.653526,1.013929 0.502811,1.570963 0.772795,0.134412 1.47243,0.415146 2.027267,0.98547 0.590524,-0.329237 1.196605,-0.531496 1.835547,-0.473356 -0.325938,-0.508508 -0.630391,-1.027416 -0.719852,-1.654163 -0.744948,-0.185083 -1.354558,-0.527857 -1.9451,-1.00459 z m 4.093529,1.484988 c -0.375098,0.0024 -0.789478,0.43055 -0.785478,0.805636 0.0034,0.360997 0.4095,0.763777 0.770498,0.760677 0.37275,-0.0036 0.78283,-0.427717 0.78083,-0.800468 -0.002,-0.360996 -0.40486,-0.768145 -0.76585,-0.765845 z m -1.368097,1.747428 c -0.375094,0.0023 -0.789381,0.430556 -0.785481,0.805635 0.0034,0.361011 0.409498,0.765094 0.770495,0.761194 0.372735,-0.0036 0.782827,-0.428242 0.780827,-0.800985 -0.002,-0.361004 -0.404846,-0.768144 -0.765841,-0.765844 z m 2.202937,0.331403 c -0.37509,0.0024 -0.78948,0.430556 -0.78548,0.805635 0.003,0.360996 0.4095,0.763777 0.7705,0.760677 0.37275,-0.0036 0.78283,-0.427716 0.78083,-0.800467 -0.002,-0.361005 -0.40484,-0.768145 -0.76585,-0.765845 z',
    description: 'The element of life. Not to be confused with nature from the Humanity ring, life is the power of the living. A desert, for example, could be natural, but certainly would not be rich in life. In North America this often is represented by leaves and berries of holly. The tradition has seen a recent decline in popularity, being replaced more and more frequently with iron.',
    quote: 'Iron vs Holly was the biggest question I recieved when discussing Awakenings all over the world. My advice? Choose the one you have access to. City practitioners should really be the only ones using iron, and a theory by a collegue of mine would even suggest that, to a sufficiently urban environment, iron represents life. If you want more info pick up a copy of <i style="font-style: normal;">Ferrum, the Fifth Element</i>.'
  },
  iron: {
    svg: 'm -5,-4 v 1.27771 h -1.03466 l -1.62842,-1.27771 z m 0.58112,-0.33068 h 5.17579 v 0.84256 c -4.71877,1.75654 -2.14219,2.94803 -0.62257,4.39405 v 0.64813 h -5.57229 v -0.97219 c 1.60529,-1.18306 2.59585,-2.28913 1.01907,-3.10858 z',
    description: 'Fate described'
  },
  myrrh: {
    svg: 'm 1,-3 v 4.38769 l -1.79338,1.83691 -1.88044,-1.83691 v -4.38769 l 2.52273,2.19107 -0.64229,0.70794 -0.66887,-0.70794 z',
    description: 'Myrrh, often burned as incence, stands for fire. It is a symbolic gift from Others that have the power to gift the power of flame',
    quote: 'I often think myrrh would be more tied to fire or even earth than air. I might dig a little deeper into why these elements are represented the way they are.'
  },
  oil: {
    svg: 'm 0,3 c 1.81015,0.49036 3.22692,-1.20006 2.2085,-3.37853 -0.90867,1.19399 -2.02588,2.21938 -2.2085,3.37853 z m -0.77849,-0.56445 c 1.3727,-2.76581 3.73768,-3.86315 1.56252,-5.54102 -0.62757,1.79529 -3.60819,3.13845 -1.56252,5.54102 z',
    description: 'Oil is the blood of the soil, and is given by others who offer the unyeilding power of earth',
    quote: 'Oil makes me think of fire instincitvely. I\'m assuming this is a tradition from a time before oil lamps but then why not water? Heck why not represent water with a bowl of water for that matter?'
  },
  spice: {
    svg: 'm 0,0 0.48292,0.4788 -0.48292,0.48706 -0.49119,-0.48706 z m 7.14675,-0.0661 0.48293,0.4788 -0.48293,0.48705 -0.49118,-0.48705 z m -2.59324,-2.27319 0.48293,0.4788 -0.48293,0.48706 -0.49118,-0.48706 z m -4.03263,6.19962 1.40337,-1.70882 -0.72645,-0.95759 -2.19587,2.66641 z m 0.90806,0 h 6.00974 l -2.87422,-3.97943 z',
    description: 'Spice is an aromatic, light and easily blown. It stands in for air in this ritual. It is a gift of the power of wind from the Others',
    quote: 'This one... kinda makes sense? Like, I wouldn\'t have ascribed any elements to spice ordinarily but if you pressed me I\'d probably say air. Still, I feel like I could think of better representations for the element of air than a pile of cumin...'
  },
  quartz: {
    svg: 'm 2,1 1.10345,-1.47228 -1.18992,-1.59489 -1.03184,1.50634 z m -0.57381,-3.88035 -0.5767,-0.82798 -2.20567,3.23605 2.20567,3.18775 0.59726,-0.87299 -1.53105,-2.35501 z',
    description: 'Crystals represnt the smooth, clear healing nature of water and ice. It is a gift from others of the elemental power of water',
    quote: 'This one is the worst offender to me. It\'s a crystal. A rock. It\'s literally earth. I\'m going to reach out to a few contacts and see if I can\'t figure out why the sprirts are so bad at elements.'
  },
  ash: {
    svg: 'm -2,3 -5.63539,-6.14769 7.10663,-0.11823 -3.67811,3.84888',
    description: "An offering to Others of cleanly burned vegetable ash.",
    quote: ''

    // description: 'An offering to Others of cleanly burned vegetable ash. The others who accept this offering are symbolically taking nothing, or very little from humanity. The least tamed and most Other Others tend to eat.',
    // quote: 'A lot of these seem like BS by the author. The only commonality I\'ve noticed between ash-taking Others is that they\'re scary motherfuckers...'
  },
  alcohol: {
    svg: 'm -2,-3 c 0.40293,1.31325 -2.00785,1.88621 0.0325,2.39648 m -2.99708,-2.32713 3.19108,5.63032 1.95879,-5.64133 h 1.14341 l -3.1022,5.64133',
    description: "An offering to Others of alcohol, commonly wine.",
    quote: ''

    // description: 'An offering to Others of the very human qualities of forgetfulness, disconnectedness, and madness.',
    // quote: 'I feel like this is taking too literal of an approach to drunkenness, theres proably a lot to be gained by looking into the cultural value of wine or beer throughot history instead'

  },
  honey: {
    svg: 'm 0,-1 v 2.00799 m 1.48828,-1.03943 h -7.34691 l 2.26786,2.26786',
    description: "An offering to Others of honey, commonly wine.",
    quote: ''
    // description: 'An offering to those Others of the parts of humanity that are healing, divine, and sickeningly sweet',
    // quote: 'Faerie creatures seem to be drawn to honey not because of its healing properties but because of its decadance and saccharine taste'
  },
  milk: {
    svg: 'm -8,-3 3.65486,6.3304 3.57463,-6.32315 z',
    description: "An offering to Others of milk. Pasturized cow's milk is fine but variants such as goats milk are acceptable. Human breast milk does not confer any noticable benefits and is usually not a worthwhile addition.",
    // description: 'An offering to those Others who need our protection and care',
    quote: 'The symbol appears to overlap with the elemenal symbol for water, so maybe they overlap thematically? I\'ll keep an eye out for any awakenings that substitute milk for water or similar.'
  },
  meat: {
    svg: 'm -1,-2 c 0,0 0.61087,-0.57309 1.07233,-0.50286 0.46146,0.0702 1.309,0.62767 1.29887,1.92333 -0.0101,1.29567 -2.93683,4.40489 -2.93683,4.40489 h 0.60689 c 0,0 -2.98411,-3.10922 -2.99424,-4.40489 -0.0101,-1.29566 0.83741,-1.85309 1.29887,-1.92332 0.46146,-0.0702 1.07234,0.50285 1.07234,0.50285',
    description: 'An offering to Others who gain power from flesh. Others tied to eating, bodies, or blood often accept an offering of meat.',
    quote: ''
    // quote: 'Seems simple enough, still squicks me out personally'
  },
  bread: {
    svg: 'm -2,-0.5 2.656087,-2.627575 m -5.278862,0.0048 4.144486,4.218714 -1.645429,1.645418 0.07426,-5.938361',
    description: 'An offering to Others of bread. Simple more natural breads are preferred when possible.',
    quote: ''
    // quote: 'I remember a shaman I spoke to in France: "Offer bread to the spirits. The ones that take it shall be your kin; the ones that don\'t would never have been". I\'ve tried to preserve the rhyme but it sounded better in French.'

  },
  molasses: {
    svg: 'm -2.5,-1 5.12823,1.65373 m 0.26727,-2.93996 c -3.02755,0.61657 -1.12444,4.46346 -3.99234,5.54584 m 2.10475,-6.1472 c -2.67906,0.7699 -0.83355,4.24565 -3.842,5.26187',
    description: 'An offering to the Others of molasses, or black treacle.',
    quote: 'Weird thematic link between honey and molasses, both are sweet and viscous. Both share a root word méli in ancient greek. The main difference would seem to be that humans make molasses ourselves, we only harvest honey.'
  }
}

const OUTER = ['fate', 'war', 'time', 'death', 'deals']
const MID = ['oil', 'spice', 'quartz', 'holly', 'myrrh']
const INNER = ['milk', 'honey', 'molasses', 'ash', 'alcohol', 'meat', 'bread']

const OTHER_INTERACTIONS = {
  miss: {in: 'fate', accepts: 'ash', offers: 'myrrh', out:'fate'},
  john: {in: 'war', accepts: 'bread', offers: 'oil', out:'war'},
  maricica: {in: 'fate', accepts: 'honey', offers: 'quartz', out:'deals'},
  goblins: {in: 'war', accepts: 'meat', offers: 'spice', out:'death'},
  toadswallow: {in: 'war', accepts: 'meat', offers: 'spice', out:'time'},
  guilherme: {in: 'time', accepts: 'honey', offers: null, out:'fate'},
  alpeana: {in: 'fate', accepts: 'molasses', offers: 'oil', out:'fate'},
  edith: {in: 'death', accepts: 'ash', offers: 'myrrh', out:'deals'},
  matthew: {in: 'time', accepts: 'alcohol', offers: 'oil', out:'death'},
  'hungry-choir': {in: 'death', accepts: 'meat', offers: null, out:'deals'},
}

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
const SIZE_X = 830
const SIZE_Y = 830
const PIVOT_X = SIZE_X / 2
const PIVOT_Y = SIZE_Y / 2

const STARFIELD_X = vw
const STARFIELD_Y = vh
const STARFIELD_X_OFFSET = 0

const SIZE_X_HIGHLIGHT = 250
const SIZE_Y_HIGHLIGHT = 250

var highlightDraw = SVG('svg.info').attr({ margin: 0 }).size(SIZE_X_HIGHLIGHT, SIZE_Y_HIGHLIGHT)
var draw = SVG('svg.magic-circle').attr({ margin: 0 }).size(SIZE_X, SIZE_Y)

var starfieldDraw = SVG('svg.stars').attr({
  style: 'background-color:' + BG_COLOR,
  margin: 0
})

//TODO gotta figure out rotating the stars
starfieldDraw.rotate(0, 0, 0).scale(1)

$('#stars').attr("viewBox", `0 0 ${STARFIELD_X} ${STARFIELD_Y}`);


var star = starfieldDraw.symbol().circle(2).fill('white')
makeStarfield(star, 50, 60000)
makeStarfield(star, 50, 32000)
makeStarfield(star, 100, 64000)

//TODO make a triangle core
const coreCircle = draw
  .circle(100)
  .attr({
    fill: 'none',
    stroke: SECONDARY_LIGHT,
    'stroke-width': 6
  })
  .translate(PIVOT_X - 50, PIVOT_Y - 50)

let popup = makeCircledSymbol(60, '')
popup.addTo(highlightDraw).translate(SIZE_X_HIGHLIGHT / 2, SIZE_Y_HIGHLIGHT / 2).scale(3.0)

const RING_LIST = [
  {
    'symbolName': INNER,
    'radius': 300,
    'rotationDegrees': -RING_ROTATION_DEGREES,
    'symbolDegrees': SYMBOL_ROTATION_DEGREES
  },
  {
    'symbolName': MID,
    'radius': 500,
    'rotationDegrees': RING_ROTATION_DEGREES,
    'symbolDegrees': -SYMBOL_ROTATION_DEGREES

  },
  {
    'symbolName': OUTER,
    'radius': 750,
    'rotationDegrees': -RING_ROTATION_DEGREES,
    'symbolDegrees': SYMBOL_ROTATION_DEGREES

  },
]

let ringGroupList = RING_LIST.map( ringProps => {
    const symbolGroups = ringProps['symbolName'].map((symbolString) => {
      return makeCircledSymbol(70, symbolString)
    })
    const ringGroup = makeRing(PIVOT_X, PIVOT_Y, ringProps['radius'], symbolGroups, 70).remember('ringProps', ringProps)
    let animation = ringGroup
      .rotate(-90, PIVOT_X, PIVOT_Y)
      .animate(RING_ROTATION_PERIOD, 0, 'now')
      .persist(true)
      .ease('-')
      .loop(0)
      .rotate(ringProps['rotationDegrees'], PIVOT_X, PIVOT_Y)
      ringGroup.remember('spinningAnimation', animation)
    
    ringGroup.remember('circledShapes').forEach((triangle) =>
      triangle
        .animate(SYMBOL_ROTATION_PERIOD, 0, 'now')
        .ease('-')
        .loop(0)
        .rotate(ringProps['symbolDegrees'], 0, 0)
    )

    return ringGroup
})

// ringGroupList.forEach ( ringGroup => {
//   ringGroup.remember('spinningAnimation').active(false)
//   ringGroup.remember('spinningAnimation').progress()

//   ringGroup.animate(800,0,'now').rotate(0, PIVOT_X, PIVOT_Y)
// })
$('.sidebar').delegate('a', 'click', function() {
  let [type, value] = $(this).attr('id').split(" ")
  if (type == "other") {
    const interactions = OTHER_INTERACTIONS[value]
    bringToTop(ringGroupList[0], interactions["accepts"])
    bringToTop(ringGroupList[1], interactions["offers"])
    bringToTop(ringGroupList[2], interactions["in"])
  }
  // if (type == "ritual") {

  // }
});

$(document).ready(function() {
  $( ".sidebar .nav-link" ).bind( "click", function(event) {
    let spinningAnimation = ringGroupList[0].remember('spinningAnimation')

    if (spinningAnimation.active() == true) {

      event.preventDefault();
      var clickedItem = $( this );
      $( ".sidebar .nav-link" ).each( function() {
          $( this ).removeClass( "active" );
      });
      clickedItem.addClass( "active" );
    }
  });
});



function makeStarfield (starSvg, count, duration) {
  const starfieldGroup = starfieldDraw.group()

  const timeline = new SVG.Timeline()
  for (let i = 0; i < count; i++) {
    starfieldGroup
      .use(starSvg)
      .scale(getRandomArbitrary(0.5, 1.5))
      .translate(
        getRandomArbitrary(0,STARFIELD_X
        ),
        STARFIELD_Y
      ) // prolly needs +n% for diagonal screen being longer than non-diagonal
      .timeline(timeline)
      .animate(duration, getRandomArbitrary(0, duration), 'start')
      .ease('-')
      .translate(0, -STARFIELD_Y - 2)
      // .translate(0, 0)
      .loop(0, false, 0)
  }
  timeline.seek(duration)
  return starfieldGroup
}

function makeCircledSymbol (r, symbolName) {
  let symbolSvg = ''
  let symbolObj = ''
  if (symbolName) {
    symbolObj = SYMBOL_NAME_TO_STRING_MAP[symbolName]
    // console.log(symbolName)
    if (symbolObj.constructor === Object) {
      symbolSvg = symbolObj.svg
      const cardSymbolDescription = symbolSvg.description
    } else {
      symbolSvg = symbolObj
    }
  }

  const SCALE_FACTOR = 1.2
  const circledShapeGroup = draw.group()
  circledShapeGroup.remember('symbolName', symbolName)

  // eslint-disable-next-line no-unused-vars
  const shape = circledShapeGroup
    .path(symbolSvg)
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
    if (this.remember('mask') !== undefined) {
      this.animate(300, '<>')
        .scale(SCALE_FACTOR)
      this.remember('mask').animate(300, '<>')
        .scale(SCALE_FACTOR)
      shapeHolder.animate(300, '<>').stroke(CIRCLE_COLOR)
    }
  })
  circledShapeGroup.on('mouseout', function () {
    if (this.remember('mask') !== undefined) {
      this.animate(300, '<>')
        .scale(1 / SCALE_FACTOR)
      this.remember('mask').animate(300, '<>')
        .scale(1 / SCALE_FACTOR)
      shapeHolder.animate(300, '<>').stroke(RING_COLOR)
    }
  })

  circledShapeGroup.on('click touchend', function () {
    if (this.remember('mask') !== undefined) {
      this.animate(500, '<>').rotate(360)
      popup.remove()
      popup = makeCircledSymbol(60, symbolName)
        .translate(SIZE_X_HIGHLIGHT / 2, SIZE_Y_HIGHLIGHT / 2)
        .scale(3.0)
        .rotate(-90)
        .addTo(highlightDraw)
      popup.animate(50).scale(1.2).animate().scale(1 / 1.2)
      popup.last().animate(50).stroke(CIRCLE_COLOR).animate().stroke(RING_COLOR)
      const capsSymbolName = symbolName.charAt(0).toUpperCase() + symbolName.slice(1)
      $('#cardSymbolName').html(capsSymbolName)
      $('#cardSymbolDescription').html(symbolObj.description)
      $('#cardSymbolQuote').html(symbolObj.quote)
    }
  })
  return circledShapeGroup
}

function bringToTop(ringGroup, symbolName) {
  let spinningAnimation = ringGroup.remember('spinningAnimation')

  if (spinningAnimation.active() == false) {
    return null
  }
  if (symbolName == null) {
    ringGroup.timeline().play()
    return null
  }
  let child = null;
  ringGroup.children().forEach(c => {
    if (c.remember('symbolName') == symbolName) {
      child = c
    }
  })
  if (child == null) {
    console.warn(`child with name ${symbolName} not found`)
  }
  let direction = Math.sign(ringGroup.remember('ringProps')['rotationDegrees'])
  let ringAngle = spinningAnimation.position() * 360
  let angle = (360 + direction * child.remember('angle'))
  let deltaAngle = direction * (360 - ((ringAngle + angle) % 360))
  spinningAnimation.persist(true)

  spinningAnimation.active(false)
  ringGroup.animate(1000,0,'now').rotate(deltaAngle, PIVOT_X, PIVOT_Y).after( (toTopAnimation) => {
    toTopAnimation.detail.reset()
    toTopAnimation.detail.unschedule()

    spinningAnimation.active(true)
    ringGroup.timeline().pause()
    if (direction < 0) {
      spinningAnimation.position(angle/360)
    } else {
      spinningAnimation.position(-(360 - angle)/360)
    }
  })
  return child
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

  const maskGroup = draw.symbol().group()
  const maskRing = ring.clone().fill('#fff').stroke('none').scale(1.1)
  maskGroup.add(maskRing)

  const circledShapes = plot.map(([x, y]) => {
    const maskCircle = maskGroup
      .circle(symbolR)
      .translate(-symbolR / 2, -symbolR / 2)
      .fill('#000')
      .stroke('none')
      .translate(cx + x, cy + y)

    return symbolList.pop()
      .addTo(ringGroup)
      .remember('angle', angles[0])
      .rotate(angles.shift())
      .translate(cx + x, cy + y)
      .remember('mask', maskCircle, true)
  })
  ringGroup.remember('circledShapes', circledShapes)
  ringGroup.remember('maskGroup', maskGroup)

  ring.maskWith(ringGroup.use(maskGroup).translate(-cx + r / 2, -cy + r / 2))
  polyRing.maskWith(ringGroup.use(maskGroup).translate(-cx, -cy))

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
