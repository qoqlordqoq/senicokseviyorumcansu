import { Template } from 'meteor/templating';

Template.deneme.events({
  "click .renk": function(event) {
    var text = $(event.target).text();

    if(text == "1"){
      document.getElementById("div").style.backgroundImage = "url('orjinal.png')";
    }else if(text == "a"){
      document.getElementById("div").style.backgroundImage = "url('pattern.jpg')";
    }else if(text == "b"){
      document.getElementById("div").style.backgroundImage = "url('kirmizi-foto2.png')";
    }else if(text == "c"){
      document.getElementById("div").style.backgroundImage = "url('pattern2.jpg')";
    }else if(text == "d"){
      document.getElementById("div").style.backgroundImage = "url('dallar.jpg')";
    }else if(text == "e"){
      document.getElementById("div").style.backgroundImage = "url('siyah-kumas.jpg')";
    }else if(text == "f"){
      document.getElementById("div").style.backgroundImage = "url('turuncu-kumas.jpg')";
    }else if(text == "g"){
      document.getElementById("div").style.backgroundImage = "url('desen.jpg')";
    }else if(text == "2"){
      document.getElementById("div").style.backgroundImage = "url('/cfs/files/ProfileImages/zQFN3QGKDYmH7xw58')";
    }

  },

});

Template.deneme.onCreated( () => {

});


Template.mobilya.helpers({

});

Template.mobilya.events({
  "click .renk": function(event) {
    var text = $(event.target).text();

    if(text == "kırmızı"){
      document.getElementById("resim").src="kırmızı.png";
    }else if(text == "mavi"){
      document.getElementById("resim").src="mavi.png";
    }else if(text == "yesil"){
      document.getElementById("resim").src="yesil.png";
    }else if(text == "sari"){
      document.getElementById("resim").src="sari.png";
    }else if(text == "white"){
      document.getElementById("resim").src="yan-beyaz.png";
    }else if(text == "orjinal"){
      document.getElementById("resim").src="kanepe.png";
    }

  },

  "change .secim": function(event) {
    var text = $( "#myselect option:selected" ).text();

    if(text == "-"){
      document.getElementById("yuzeyRenkler").style.display = "none";
      document.getElementById("yanRenkler").style.display = "none";
      document.getElementById("orjinal").style.display = "block";
    }
    if(text == "Yüzey"){
      document.getElementById("yuzeyRenkler").style.display = "block";
      document.getElementById("yanRenkler").style.display = "none";
      document.getElementById("orjinal").style.display = "none";
    }
    if(text == "Yanlar"){
      document.getElementById("yuzeyRenkler").style.display = "none";
      document.getElementById("yanRenkler").style.display = "block";
      document.getElementById("orjinal").style.display = "none";
    }
  },

  "click .selam": function(event) {
    var text = $(event.target).text();
    alert(text);
  },


});
