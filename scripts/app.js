// var bg_color = SVG.Color.random('dark')
var bg_color = 'white'

var draw = SVG().addTo('body').size(2000, 2000).attr({style: 'background-color:'+bg_color })
var circle_group = draw.group()
var core_circle = circle_group.ellipse(200, 200).attr({
    fill: 'none',
    stroke: SVG.Color.random('vibrant'),
    'stroke-width': 6
}).move(300, 300);
var circle2_group = circle_group.group()

circle_group.animate(3000, 0, 'now').ease('-').loop(0).rotate(-360, 400, 400)

triangle_ring = makeRing(circle_group, 400, 400, 5, 400, regularPolygon(3, 110))
console.log(triangle_ring)
triangle_ring.forEach( triangle => triangle.animate(3000, 0, 'now').ease('-').loop(0).rotate(-360, 0, 0) )


function makeRing(ring_group, cx, cy, n, r, polygon_plot) {
    // mask_test = ring_group.rect(2000,2000).fill('#000').opacity(0.5)
    //polygon
    plot = regularPolygon(n, r)
    
    //outer ring
    ring_color = SVG.Color.random('vibrant')
    ring = ring_group.circle(r)
    
    ring.translate(cy - r/2, cx - r/2).fill('none').stroke({ color: 'blue', width: 6, linejoin: 'round' })
    
    //polygon ring
    poly_ring = ring_group.polygon().plot(plot)
    poly_ring.translate(cy, cx ).fill('none').stroke({ color: ring_color, width: 6, linejoin: 'round' })

    //shape holder
    shape_holder_color = SVG.Color.random('vibrant')
    shape_holders = plot.map( ([x,y]) => { return ring_group.circle(110 * 1.10).translate(x + cx - (110 * 1.10)/2,y + cy - (110 * 1.10)/2).fill('none').stroke({ color: ring_color, width: 6, linejoin: 'round' })} );
    
    //shape
    shape_color = SVG.Color.random('vibrant')
    shapes = plot.map( ([x,y]) => { return ring_group.polygon().plot(polygon_plot).translate(x + cx ,y + cy).fill('none').stroke({ color: shape_color, width: 6, linejoin: 'round' })} );
    
    mask_group = ring_group.group()
    mask_ring = ring.clone().fill('#fff').stroke('none').scale(1.5)
    mask_group.add(mask_ring)
    shape_holders.forEach(holder => {mask_group.add(holder.clone().fill('#000').stroke('none') )})
    

    mask_group.front()
    core_circle.maskWith(a = mask_group.clone())
    ring.maskWith(b = mask_group.clone())
    b.animate(3000).translate(-200,-200)
    poly_ring.maskWith(c = mask_group.clone())
    c.animate(3000).translate(-400,-400)
    mask_group.remove()

    // mask_test.maskWith(mask_group)



    // mask = group.mask().add(poly_ring).add(ring)
    // ring_shapes.forEach(ring_shape => { mask.add(ring_shape) })
    // ring_shape_holder.forEach(shape => shape.maskWith(mask))
    
    return shapes
}


function regularPolygon(n, r) {
    var plot = []
    for (i = 0; i < n; i++) {
        var theta = 2*Math.PI*i/n
        plot.push( [Math.cos(theta)*r/2, Math.sin(theta)*r/2] )
    }
    console.log(plot)
    return plot
}



// var poly = circle2_group.polygon()
// poly.plot(regularPolygon(5, 60)).translate(105,105).fill('none').stroke({ color: '#000', width: 6, linejoin: 'round' })
// poly.animate(3000, 0, 'now').ease('-').loop(0).rotate(-360, 0, 0)

/* var rect2 = rect2_svg.rect(50, 50).attr({
    fill: SVG.Color.random('vibrant')
}).move(110,110) */
// var star2 = rect2_svg.polygon('50 15, 100 100, 0 100')
// star2.fill('none').move(50, 50)
// star2.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
/* rect_svg.animate(6000,0,'now').ease('-').translate(600, 0) */
// poly.animate(3000).plot(regularPolygon(3,60))