import Component from '../app/component';


export default class Test extends Component {

  constructor (options) {

    super(options);

    this.init();

  }


  init () {

    console.log('in test');

  }

}