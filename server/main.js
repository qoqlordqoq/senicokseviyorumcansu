import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 Color = new Mongo.Collection('color');
 UserImages = new Mongo.Collection("UserImages");

 ProfileImages = new FS.Collection("ProfileImages", {
    stores: [new FS.Store.GridFS("ProfileImages")]
 });

   Meteor.methods({
  });


  UserImages.allow({
    insert: function() {
      return true;
    },
    update: function(userId, doc, fields, modifier){
      return true;
    }
  });

    ProfileImages.allow({
    insert: function(userId, doc){
      return true;
    },
    update: function(userId, doc, fields, modifier){
      return true;
    },
    download: function(){
      return true;
    }
  });
    
  Meteor.publish("ProfileImages", function(){
    return ProfileImages.find();
  });

  Meteor.publish("UserImages", function(){
    return UserImages.find();
  });

});
