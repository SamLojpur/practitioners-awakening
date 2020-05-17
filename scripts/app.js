SVG.extend(SVG.Element, {
    // alias clone method
    deepClone: function () {
        return this.clone()
    }

})

SVG.extend(SVG.G, {
    // clone object with its children
    deepClone: function () {
        var clone = this.parent().group()

        this.each(function () {
            clone.add(this.deepClone())
        })

        return clone
    }

})


// var bg_color = SVG.Color.random('dark')
var bg_color = '#483D8B'


PIVOT_X = 430
PIVOT_Y = 430

var draw = SVG().addTo('body').size(860, 860).attr({ style: 'background-color:' + bg_color })
var core_circle = draw.ellipse(100, 100).attr({
    fill: 'none',
    stroke: SVG.Color.random('vibrant'),
    'stroke-width': 6
}).translate(PIVOT_X-50, PIVOT_Y-50);

var circle_group = draw.group()
triangle_ring = makeRing(circle_group, PIVOT_X, PIVOT_Y, 5, 300, makeCircledShape(3, 50, 1.30, -90))
circle_group.animate(9000, 0, 'now').ease('-').loop(0).rotate(-360, PIVOT_X, PIVOT_Y)
triangle_ring.forEach( triangle => triangle.animate(9000, 0, 'now').ease('-').loop(0).rotate(360, 0, 0) )

var circle_group2 = draw.group()
triangle_ring = makeRing(circle_group2, PIVOT_X, PIVOT_Y, 7, 500, makeCircledShape(4, 50, 1.30, 45))
circle_group2.animate(9000, 0, 'now').ease('-').loop(0).rotate(360, PIVOT_X, PIVOT_Y)
triangle_ring.forEach( triangle => triangle.animate(9000, 0, 'now').ease('-').loop(0).rotate(-360, 0, 0) )

var circle_group3 = draw.group()
triangle_ring = makeRing(circle_group3, PIVOT_X, PIVOT_Y, 5, 750, makeCircledShape(5, 50, 1.30, -90))
circle_group3.animate(9000, 0, 'now').ease('-').loop(0).rotate(-360, PIVOT_X, PIVOT_Y)
triangle_ring.forEach( triangle => triangle.animate(9000, 0, 'now').ease('-').loop(0).rotate(360, 0, 0) )


function makeCircledShape(n, r, scale, rotation) {
    circled_shape_group = draw.group()
    shape_holder_color = SVG.Color.random('vibrant')
    ring_color = SVG.Color.random('vibrant')

    polygon_plot = regularPolygonPoints(n, r)
    shape = circled_shape_group.polygon().plot(polygon_plot).rotate(rotation,0,0).fill('none').stroke({ color: shape_holder_color, width: 6, linejoin: 'round' });
    shape_holder = circled_shape_group.circle(r * scale).translate(-(r * scale) / 2, -(r * scale) / 2).fill('none').stroke({ color: ring_color, width: 6, linejoin: 'round' });
    circled_shape_group.translate(200,200)
    return circled_shape_group
}


function makeRing(ring_group, cx, cy, n, r, corner_decorator_group) {
    plot = regularPolygonPoints(n, r)
    angles = regularPolygonAngles(n)

    //outer ring
    ring = ring_group.circle(r)

    ring.translate(cx - r / 2, cy - r / 2).fill('none').stroke({ color: ring_color, width: 6, linejoin: 'round' })

    //polygon ring
    poly_ring = ring_group.polygon().plot(plot)
    poly_ring.translate(cx, cy).fill('none').stroke({ color: ring_color, width: 6, linejoin: 'round' })

    // circled_shapes = plot.map(([x, y]) => { return corner_decorator_group.deepClone().translate(cx + x, cy + y).rotate(angles.shift() ) })
    circled_shapes = plot.map(([x, y]) => { return corner_decorator_group.deepClone().translate(cx + x, cy + y) })
    circled_shapes.forEach((shape) => {ring_group.add(shape)})



    mask_group = ring_group.group()
    mask_ring = ring.clone().fill('#fff').stroke('none').scale(1.5)
    mask_group.add(mask_ring)
    plot.forEach(([x, y]) => {
        corner_decorator_group.children().forEach( (child) => {
            mask_group.add(child.clone().fill('#000').stroke('none').translate(cx + x, cy + y))
        })
    })
    mask_ring.back()
    console.log(mask_group.children())
    
    mask_group.front()
    ring.maskWith(mask_group.clone().translate(- cx + r / 2, - cy + r / 2))
    poly_ring.maskWith(mask_group.clone().translate(-cx, -cy))
    mask_group.remove()
    corner_decorator_group.remove()
    
    return circled_shapes
}


function regularPolygonPoints(n, r) {
    var plot = []
    for (i = 0; i < n; i++) {
        var theta = 2 * Math.PI * i / n
        plot.push([Math.cos(theta) * r / 2, Math.sin(theta) * r / 2])
    }
    return plot
}
function regularPolygonAngles(n) {
    var angles = []
    for (i = 0; i < n; i++) {
        var theta = 360 * i / n
        angles.push(theta)
    }
    return angles
}

// //shape holder
// shape_holder_color = SVG.Color.random('vibrant')
// shape_holders = plot.map( ([x,y]) => { return ring_group.circle(110 * 1.10).translate(x + cx - (110 * 1.10)/2,y + cy - (110 * 1.10)/2).fill('none').stroke({ color: ring_color, width: 6, linejoin: 'round' })} );

// //shape
// shape_color = SVG.Color.random('vibrant')
// shapes = plot.map( ([x,y]) => { return ring_group.polygon().plot(polygon_plot).translate(x + cx ,y + cy).fill('none').stroke({ color: shape_color, width: 6, linejoin: 'round' })} );


// circled_shapes.forEach(holder => {mask_group.add(holder.clone().fill('#000').stroke('none') )})

// var poly = circle2_group.polygon()
// poly.plot(regularPolygonPoints(5, 60)).translate(105,105).fill('none').stroke({ color: '#000', width: 6, linejoin: 'round' })
// poly.animate(3000, 0, 'now').ease('-').loop(0).rotate(-360, 0, 0)

/* var rect2 = rect2_svg.rect(50, 50).attr({
    fill: SVG.Color.random('vibrant')
}).move(110,110) */
// var star2 = rect2_svg.polygon('50 15, 100 100, 0 100')
// star2.fill('none').move(50, 50)
// star2.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
/* rect_svg.animate(6000,0,'now').ease('-').translate(600, 0) */
// poly.animate(3000).plot(regularPolygonPoints(3,60))