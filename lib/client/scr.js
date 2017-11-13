
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './scr.html';



Template.srcuser.helpers({

userinfo:function() {
	// body...
   
   var info=Session.get("keyword");
   return users.find({name:info});
}

});


Template.srcuser.events({


'click .srcbtn':function(){

var keyword=$('#ccname').val();

 
 Session.set("keyword",keyword);

console.log(keyword);



}


});