import Template from "../app/template.js";


export default class TestTemplate extends Template {


  constructor ( data = {} ) {

    super(data);

  }


  template () {

    let data = this.data;

    this._template = `
      
      <div class="test">${data.title}</div>
      
    `;

  }


}