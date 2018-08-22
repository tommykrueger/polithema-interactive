import Component from '../app/component';

// import TestTemplate from '../templates/test.template';

export default class Globe extends Component {


  constructor ( options = {} ) {

    super(options); 

    this.defaults = { 
      map: 'json/world-countries.json',
      scale: 240,
      graticules: 1,
      shading: 1,
      highlight: 1,
      gradient: 1,
      glow: 1,
      color: {
        domain: [1, 1000],
        min: '#0CE71F',
        max: '#e03030'
      },
    };

    this.options = Object.assign({}, this.defaults, options);

    this.width = $('.map-globe').width();
    this.height = $('.map-globe').height();

    //this.template = new TestTemplate({title: 'Jippi'});
    //console.log(this.template.render());

  }
  
  
  init() {

    this.projections = {
      mercator: d3.geo.mercator()
          .scale(this.options.scale)
          .translate([this.width / 2, this.height / 2])
          .clipAngle(90)
          .precision(.1),

      orthographic: d3.geo.orthographic()
          .scale(this.options.scale)
          .translate([this.width / 2, this.height / 2])
          .clipAngle(90)
          .precision(.1)
    };

    this.projection = this.projections.orthographic;
    this.currentProjection = 'orthographic';

    this.scale0 = this.projection.scale();

    this.path = d3.geo.path()
      .projection(this.projection)
      .pointRadius(2);


    this.line = d3.svg.line()
      .x((d) => { return this.projection([d[1], d[0]])[0]; })
      .y((d) => { return this.projection([d[1], d[0]])[1]; })
      .interpolate("cardinal")
      .tension(.0);

    this.scale0 = (this.width - 1) / 2 / Math.PI;

    this.zoom = d3.behavior.zoom()
      .translate([this.width / 2, this.height / 2])
      .scale(this.projection.scale())
      .scaleExtent([this.scale0, 4 * this.scale0])
      .on("zoom", this.zoomed.bind(this));


    this.svg = d3.select(".map-globe")
      .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .append("g")
          .call(this.zoom.bind(this))
          .on("dblclick.zoom", null);


    this.svg.append("rect")
      .attr("class", "frame")
      .attr("width", this.width)
      .attr("height", this.height);

    this.backgroundCircle = this.svg.append("circle")
      .attr('cx', this.width / 2)
      .attr('cy', this.height / 2)
      .attr('r', this.projection.scale())
      .attr('class', 'globe')
      .attr("filter", "url(#glow)")
      //.attr("fill", "url(#gradBlue)");

    this.oceanFill = this.svg.append("defs").append("radialGradient")
      .attr("id", "ocean_fill")
      .attr("cx", "75%")
      .attr("cy", "25%");
    this.oceanFill.append("stop").attr("offset", "5%").attr("stop-color", "#ddf");
    this.oceanFill.append("stop").attr("offset", "100%").attr("stop-color", "#9ab");

    this.globeHighlight = this.svg.append("defs").append("radialGradient")
      .attr("id", "globe_highlight")
      .attr("cx", "75%")
      .attr("cy", "25%");
    this.globeHighlight.append("stop")
      .attr("offset", "5%").attr("stop-color", "#ffd")
      .attr("stop-opacity","0.6");
    this.globeHighlight.append("stop")
      .attr("offset", "100%").attr("stop-color", "#ba9")
      .attr("stop-opacity","0.2");

    this.globeShading = this.svg.append("defs").append("radialGradient")
      .attr("id", "globe_shading")
      .attr("cx", "50%")
      .attr("cy", "40%");
    this.globeShading.append("stop")
      .attr("offset","50%").attr("stop-color", "#9ab")
      .attr("stop-opacity","0")
    this.globeShading.append("stop")
      .attr("offset","100%").attr("stop-color", "#3e6184")
      .attr("stop-opacity","0.3");


    this.oceanFillCircle = this.svg.append("circle")
      .attr("cx", this.width / 2).attr("cy", this.height / 2)
      .attr("r", this.projection.scale())
      .attr("class", "noclicks")
      .style("fill", "url(#ocean_fill)");

    this.globeHighlightCircle = this.svg.append("circle")
      .attr("cx", this.width / 2).attr("cy", this.height / 2)
      .attr("r", this.projection.scale())
      .attr("class","noclicks")
      .style("fill", "url(#globe_highlight)");

    this.globeShadingCircle = this.svg.append("circle")
      .attr("cx", this.width / 2).attr("cy", this.height / 2)
      .attr("r", this.projection.scale())
      .attr("class","noclicks")
      .style("fill", "url(#globe_shading)");


    this.globeMask = this.svg.append("defs")
      .append("mask")
      .attr("id", "myMask");


    if (this.options.graticules) {
      this.renderGraticules();
    }

    this.g = this.svg.append("g");


    this.maskPath = this.globeMask.append("path")
      .datum({type: "LineString", coordinates: [[-3, 40], [-0.1, 51], [35, 55], [46, 24]]})
      .attr("class", "mask")
      .attr('fill', '#ffffff')
      .attr("d", this.path)

    this.equator = this.g.append("path")
      .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
      .attr("class", "equator")
      .attr("d", this.path);


    this.features = [];
    this.rect;
    this.seazones;

    this.color = d3.scale.log()
      .domain(this.options.color.domain)
      //.domain([0, 0.5, 1].map(scale.invert));
      .interpolate(d3.interpolateRgb)
      .range(this.options.color.range);

    this.tooltip = d3.select("body")
      .append("div")
      .attr("id", "tooltip");


    this.afterRender();
    this.load();
    this.initControls();
  }


  renderGraticules() {

    this.graticules = this.svg.append("path")
      .datum(d3.geo.graticule())
      .attr("class", "graticule")
      .attr("d", this.path);

  }


  afterRender() {

    if ( typeof this.options.afterRender == 'function')
      this.options.afterRender.call(this);

  }


  initControls() {

    let self = this;

    /*
    d3.selectAll('.button')
      .on('click', function(e){

        self.projection = self.projections[ d3.select(this).attr('data-action') ];
        self.path = d3.geo.path().projection(self.projection).pointRadius(2);
        self.svg.call(self.zoom);
        self.redraw();

        self.currentProjection = d3.select(this).attr('data-action');

      });
      */

    this.svg.on("mousedown.log", function() {
      console.log(self.projections.orthographic.invert(d3.mouse(this)));
    });

  }


  liner ( lines ) {

    let linesPath = '';

    for (let i=0; i<=lines.length; i++) {

      if (lines[i] !== undefined && lines[i+1] !== undefined) {
        let l = [lines[i], lines[i+1]];
        linesPath += this.line(l);
      }

    }

    return linesPath;

  }


  load() {

    let requestMap = fetch(this.options.map).then((response) => {
      return response.json();
    });

    /*
    var requestData = fetch(this.options.file).then((response) => { 
      return response.json();
    });
    */

    Promise.all([requestMap]).then((values) => {

      this.countries = values[0];
      //this.data = values[1];
      this.render();

    });

  }


  render() {

    if ( typeof this.options.draw == 'function')
      this.options.draw.call(this);

  }


  zoomed() {

    if (this.currentProjection == 'orthographic') {
      this.projection
        .scale(d3.event.scale)
        .rotate([d3.event.translate[0] - this.width/2, (d3.event.translate[1] - this.height/2) * -1]);
    }

    else {
      this.projection
        .scale(d3.event.scale)
        .translate([d3.event.translate[0], d3.event.translate[1]]);
    }



    // space.scale(d3.event.scale * 3);
    this.backgroundCircle.attr('r', d3.event.scale);
    this.path.pointRadius(2 * d3.event.scale / this.scale0);

    //globe and stars spin in the opposite direction because of the projection mode
    //var spaceOrigin = [d3.event.translate[0] * -1, d3.event.translate[1] * -1];
    //space.origin(spaceOrigin);
    this.redraw();

  }


  redraw() {

    var self = this;

    if ( typeof this.options.redraw == 'function')
      this.options.redraw.call(this);


    this.maskPath.attr('d', this.path);
    this.equator.attr('d', this.path);

    this.graticules.attr("d", this.path);

    this.oceanFillCircle.attr('r', this.projection.scale());
    this.globeShadingCircle.attr('r', this.projection.scale());
    this.globeHighlightCircle.attr('r', this.projection.scale());

  }

  formatNumber(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

}
