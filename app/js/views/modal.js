import View from '../app/view';

import Template from '../app/template';

export default class Modal extends View {

  constructor ( options = {} ) {

    super(options);

    this._template = ({content}) => `

      <div class="modal">

        <div class="modal__header">
          <button class="button button__close">&times;</button>
        </div>
        <div class="modal__content">${content}</div>
        <div class="modal__footer"><button class="button button__accept">Laden</button></div>

      </div>

    `;

  }


  setTemplate ( data ) {

    this._template(data);

  }


  render () {

    if (this._template)
      console.log(this._template);

    $('body').append(this._template);

  }


  setData (data) {

    let template = new Template({
      template: 'tooltipStarTemplate',
      data: data
    });

    this.$template.html( template.render() );

  }


  updatePosition (pos) {

    this.$template.css({
      left: pos.x + 18,
      top: pos.y
    });

  }


  remove (){

    this.$template.remove();

  }

  show () {

    this.$template.show();

  }

  hide () {

    this.$template.hide();

  }


}
