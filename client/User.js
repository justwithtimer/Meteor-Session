import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import'./User.html';

Template.userbox.helpers({

userlist:function () {
	// body...

	return users.find();

}



});


Template.userbox.events({

'click .remove':function(){


users.remove({_id:this._id});

}


});
