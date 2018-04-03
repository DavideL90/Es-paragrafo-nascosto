$(document).ready(function(){
  $('#hidden-paragrafo').hide();
  isHidden = true;
  $('#titolo-paragrafo').click(function(){
    if(isHidden){
      $('#hidden-paragrafo').fadeIn(1000);
      isHidden = false;
    }
    else{
      $('#hidden-paragrafo').fadeOut(1000);
      isHidden = true;
    }
  })
})
