
// base classes
import Model from '../app/model';

// connected models
//import UserStatistic from '../models/user_statistic';


export default class User extends Model {


	constructor ( options = {} ) {

    super();

		this.user = options || null;
		this.url = this.utils.url('/users/update/' + this.user.id);

		this.initEvents();

	}


	initEvents () {

		$(document).on('levelCompleted', (e) => {

			console.log('save back user statistics on level completion');
			this.saveUserStatistic();

		});

	}


  saveUserStatistic () {

    if (this.user.id) {

      let userStatistic = new UserStatistic({
				user_id: this.user.id,
				level_id: 1,
				moves: 100,
				pushes: 100,
				time: 100
			});

			userStatistic.save();

    }

  }


}
