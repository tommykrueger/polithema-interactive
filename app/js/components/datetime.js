
export default class Datetime {

  constructor ( options = {} ) {

    //this.startDate = new Date(this.game.scenario.getStartDate());
    //this.currentDate = this.startDate;

    this.oldTime = 0;

    this.weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    this.timeShift = (60 * 60);
    this.initControls();

  }


  setStartDate (d) {
    this.startDate = new Date(d);
    this.currentDate = this.startDate;
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

      $('.datetime-weekday').html( this.getWeekday() );
      $('.datetime-date').html( this.getDate() );
      $('.datetime-time').html( this.getTime() + ':00 Uhr' );

    //}

  }


  // elapsedTime since game start in milliseconds
  update ( elapsedTime ) {

    let dt = this.startDate.getTime() + (elapsedTime * this.timeShift);
    this.currentDate = new Date(dt);
    this.render();

  }


  getCurrentDate () {

    return this.currentDate;

  }


  getWeekday () {

    return /*App.__(*/ this.weekdays[ this.currentDate.getDay() - 1 ] /*);*/

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
