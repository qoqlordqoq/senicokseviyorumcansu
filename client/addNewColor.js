if(Meteor.isClient){

  ProfileImages = new FS.Collection("ProfileImages", {
    stores: [new FS.Store.GridFS("ProfileImages")]
  });

  UserImages = new Mongo.Collection("UserImages");

  Meteor.subscribe('ProfileImages');

  Meteor.subscribe('UserImages');

  Template.deneme.helpers({
    UserImages: function() {
      var URL = UserImages.find({});
      return URL;
    }
  });

  Template.seniseviyorum.helpers({
    UserImages: function() {
      var URL = UserImages.find({});
      return URL;
    }
  });
  Template.seniseviyorum.events({
    "submit .add-new-color": function(event) {
        var file = $('#profileImage').get(0).files[0];
          if (file) {

            fsFile = new FS.File(file);

            ProfileImages.insert(fsFile, function(err, result){

                var imageLoc = '/cfs/files/ProfileImages/'+result._id;

                UserImages.insert({
                  userId: Meteor.userId(),
                  image: imageLoc,
                });

                Bert.alert("Resim Yükleme Başarılı!", "success", "growl-top-right");
          
            });
          } 

    return false // prevent submit
  }
  });

  Template.deneme.helpers({
    showColors: function(){
      return Color.find({}, {sort: {colorName: 1}});
    },
  });

  Template.addNewColor.events({
    "submit .add-new-color": function(event) {
        var file = $('#profileImage').get(0).files[0];
        var isim = $("#isim").val();
        var renkkodu = $("#renkkodu").val();

        if(isim == "" || renkkodu == ""){
          Bert.alert("Lütfen Tüm Boşlukları Doldurun!", "warning", "growl-top-right");
        }else {
          if (file) {

            fsFile = new FS.File(file);

            ProfileImages.insert(fsFile, function(err, result){

                var imageLoc = '/cfs/files/ProfileImages/'+result._id;

                UserImages.insert({
                  colorName: isim,
                  colorCode: renkkodu,
                  userId: Meteor.userId(),
                  image: imageLoc,
                });

                Bert.alert("Resim Yükleme Başarılı!", "success", "growl-top-right");
          
            });
          }          
        }
        event.target.isim.value = "";
        event.target.renkkodu.value = "";

    return false // prevent submit
  }

  });
}
