import View from '../app/view';

export default class Timeline extends View {


  constructor ( options = {} ) {

    super();

    this.items = [];
    this.years = [];

    this.timeline = $('body').find('.timeline');

    this.collectTimelineItems();
    this.renderDateLimits();

  }


  collectTimelineItems () {

    this.elements = this.timeline.find('li');

    this.elements.each((i, el) => {

      let d = $(el).data('date');
      let date = new Date(d);

      if (d) {

        this.items.push({
          d: d,
          date: date
        });

      }


    });

  }


  renderDateLimits () {


    this.items.forEach((item, i) => {

      let year = item.date.getFullYear();

      if (this.years.indexOf(year) == -1) {
        this.years.push( year );
      }

      console.log(item);
    });

    console.log('years', this.years);

    this.years.forEach((y) => {

      let l = $(`<span class="timeline-limit"></span>`);
      let ly = $(`<span class="timeline-limit-year">${y}</span>`);
      l.append(ly);

      this.items.forEach((item) => {

        let date = item.date;

        if (y == date.getFullYear()) {

          let p = item.d;
          let y = new Date(date.getFullYear(), 0, 1);
          let y2 = new Date(date.getFullYear()+1, 0, 1);

          console.log(y, y2, date);

          // set margin
          let top = Math.round(((date - y) / (y2 - y)) * 100) + '%';
          let s = $(`<span class="timeline-event-date">${date}</span>`);

          console.log(top);

          s.css('top', top);

          l.append(s);
        }

      });

      this.timeline.find('.timeline-limits').append(l);

    });


  }


  render ($element = $('body')) {

    $element.append( this.$template );
    this.initEvents();

  }


  initEvents () {

    this.$template.on('click', (e) => {

      if (!this.isActive) return;

      let $btn = $(e.currentTarget);
      this.app.level[this.object][this.action]();

    });

  }


  remove () {

    this.$template.remove();

  }


  activate() {

    this.isActive = true;
    this.$template.addClass('button-animated');

  }


  deactivate() {

    this.isActive = false;
    this.$template.removeClass('button-animated');

  }

}
