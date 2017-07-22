Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('deneme', {path: '/', data: {title: 'My title'}});
    this.route('addNewColor');
    this.route('seniseviyorum');
});
