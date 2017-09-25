$(document).ready(function(){
  // call functions here
  $('form').on("submit", addItem)
});

function addItem(event){
    event.preventDefault();
    var item = $('#item').val();
    console.log('added');
    $('#list ol').append(`<li>${item}</li>`);
  }
