
export default class EventTimeline {

  constructor ( options = {} ) {

    this.data = options.data;
    this._events = this.data.events;

    this.startDate  = new Date(this.data.start);
    this.endDate    = new Date(this.data.end);

    console.log(this.startDate);
    console.log(this.endDate);


    var x = d3.time.scale.utc()
      .domain([this.startDate, this.endDate])
      .range([0, 800]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .tickValues(
          d3.range(this.startDate, this.endDate, 1000 * 60 * 60 * 24)
          .map(function(d){
            return new Date(d)
          }))
        .tickFormat(function(n) { console.log(n.getDate()); return n.getDate() });

    var svg = d3.select("body").append("svg")
      .attr("width", '800px')
      .attr("height", '100px')
    .append("g")
      .attr("transform", "translate(" + 0 + "," + 0 + ")");

      svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + 2 + ")")
      .call(xAxis)
    .selectAll("text")
      .attr("y", 12)
      .attr("x", 0)
      .attr("dy", ".35em")
      //.attr("transform", "rotate(90)")
      .style("text-anchor", "middle");



  }



  initControls () {

    $('.datetime').on('click', (e) => {
      e.preventDefault();

      let $btn = $(e.currentTarget);
      this.game.togglePause();

    });


    $('.datetime-controls span').on('click', (e) => {

      e.preventDefault();
      let $btn = $(e.currentTarget);

      if ($btn.hasClass('datetime-controls-minus'))
        this.game.adjustSpeed(-1.0);
      else
        this.game.adjustSpeed(1.0);


    });

  }


  render () {

    //if (this.hasChanged()) {

      //$('.datetime-weekday').html( this.getWeekday() );
      //$('.datetime-date').html( this.getDate() );
      //$('.datetime-time').html( this.getTime() + ':00 Uhr' );

    //}

  }


  // elapsedTime since game start in milliseconds
  update ( elapsedTime ) {

    let dt = this.startDate.getTime() + (elapsedTime * this.timeShift);
    this.currentDate = new Date(dt);
    this.render();

  }

  getDate () {

    this.day = this.formatLeadingZero( this.currentDate.getDate() );
    this.month = this.formatLeadingZero( this.currentDate.getMonth() + 1 );
    this.year = this.currentDate.getFullYear();

    return this.day + '.' + this.month + '.' + this.year;

  }

  getTime () {

    return this.currentDate.getHours();

  }

  // return english format date string
  getDateString () {

    return this.year + '-' + this.month + '-' + this.day;

  }

  hasChanged () {

    if (this.getTime() != this.oldTime) {
      this.oldTime = this.getTime();
      return true;
    }

    return false;

  }

  formatLeadingZero (digit) {

    return (digit < 10) ? '0' + digit : digit;

  }

}
