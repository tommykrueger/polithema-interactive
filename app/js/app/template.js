export default class Template {

  constructor ( data = {} ) {

    this.data = data;
    this._template = null;

    if (data)
      this.render();

  }

  setData (data = {}) {

    this.data = data;

  }

  template () {

    let data = this.data;

  }


  getTemplate () {

    return this._template;

  }


  /**
   * Inject the template with data
   */
  render () {

    if (this.data) {

      this.template();
      return this.getTemplate();

    }

  }

}
