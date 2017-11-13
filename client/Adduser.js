import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import './Adduser.html'


Template.adduser.events({

'click .btn':function () {
	// body...

var c=$('#name').val();
var d=$('#age').val();

users.insert({name:c,age:d});


}


});