import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"

const cities = [
    {name:"Amieirinha",population:4812946},
    {name:"Kinshasa",population:1027499},
    {name:"Blantyre",population:1992831},
    {name:"Pueblo Nuevo Viñas",population:6106658},
    {name:"Ko Si Chang",population:1258350},
    {name:"Rabak",population:5611054},
    {name:"Port-Cartier",population:2014142},
    {name:"Detroit",population:8927289},
    {name:"Medeiros Neto",population:6847563},
    {name:"Kushchëvskaya",population:4160962}
]

d3. select('.bars')
    .selectAll('rect')
    .data(cities)
    .join('rect')
    .attr('height', function(d){
        return d.population * 40e-6
    })
    .attr('width', 19)
    .attr('x', function(d, i){
        return i * 40
    })
    .attr('y', function(d){
        return 200 - d.population * 40e-6
    })

    /*
    .attr('height', 19)
    .attr('width', function(d){
        return d.population * 40e-6
    })
    .attr('y', function(d, i){
        return 20 * i
    }) */

d3.select('.labels')
    .selectAll('text')
    .data(cities)
    .join('text')
    .attr('y', function(d, i){
        return i * 40 + 10
    })
    .attr('text-anchor', 'start')
    .text(function(d){
        return d.name
    })

    /* No me salio como esperaba pero no me quejo :D */
