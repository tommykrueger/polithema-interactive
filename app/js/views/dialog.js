import View from '../app/view';

// base template
//import DialogTemplate from '../templates/dialog';

// nested templates
//import TemplateLevelStart from '../templates/dialog/level_start';
//import TemplateLevelCompleted from '../templates/dialog/level_completed';


export default class Dialog extends View {


  constructor ( options = {} ) {

    super();

    this.classes = {
      TemplateLevelStart,
      TemplateLevelCompleted
    }

    this.app = options.app;
    this.data = options.data;

    this.className = '.dialog';

    this.prepareTemplate();
    this.render();
    this.initEvents();

  }


  prepareTemplate () {

    // render main template with nested template
    if (this.data.template) {

      let nestedTemplate = new this.classes[this.data.template](this.data);
      this.data.content = nestedTemplate.html();

    }

    this.$template = new DialogTemplate(this.data);

  }


  render () {

    $('body').find(this.className).remove();
    $('body').append(this.$template);

    this.resizeToContent();

  }


  initEvents () {


    this.$template.find('[data-handler]').each((i, item) => {

      $(item).on( $(item).data('event') , (e) => {

        e.preventDefault();

        let $btn = $(e.currentTarget);
        let action = $btn.data('action');

        this.app[action]();
        this.close();

      });

    });


    /*
    this.$template.find('.button-round').on('click', (e) => {

      let $btn = $(e.currentTarget);
      let resolution = $btn.data('resolution');

      this.$template.find('.button-round').not(this).removeClass('active');
      $btn.toggleClass('active');

      this.action.scope.setResolution(resolution);

      this.$template.find('.action-btn').removeClass('hidden');

    });
    */

    /*
    this.$template.find('.action-btn').on('click', (e) => {

      this.close();
      this.action.scope[this.action.function]();

    });
    */

    /*
    this.actions.forEach( (action) => {

      $(action.id).on('click', (e) => {
        e.preventDefault();

        this.app[action.action]();
        this.close();

      });

    });
    */

  }


  resizeToContent() {

    let contentWidth = this.$template.outerWidth();
    let contentHeight = this.$template.outerHeight();

    this.$template.css({
      left: $(window).width() / 2 - (contentWidth/2),
      top: $(window).height() / 2 - (contentHeight/2)
    });

  }


  close () {

    this.$template.remove();

  }

}
