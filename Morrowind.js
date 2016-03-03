$(document).ready(function(){
  $('.azura').append('<div class = "hircine"></div>');
  var daedricPrince = $('.azura').children().last();
  daedricPrince.append('<button class = "dunmer">Generate</button>');
  $('.dunmer').on('click', alduin);

});
var mehrunesDagon = 0;

function alduin (){
  $('.hircine').append("<div class = 'sheogorath'></div>");
  var jyggalag = $('.hircine').children().last();
  jyggalag.append('<button class = "meridia">Delete</button>');
  jyggalag.append('<button class = "clavicusVile">Change</button>');

  $('.meridia').on('click', molagBal);
  $('.clavicusVile').on('click', malacath);

  mehrunesDagon++;
  $('.boethiah').text("Times button has been pushed: " + mehrunesDagon);
}

function molagBal(){
  $(this).parent().remove();

}

function malacath(){
  $(this).parent().toggleClass('.nocturnal');
}
