$(document).ready(function(){
  $("#ch3form").on('submit', function(){
    var checked = false;
    $('[name="standing"]').each(function(){
      if ((this.checked) == true){
        $('[name="fruit"]').each(function(){
          if ((this.checked) == true){
            return checked=true;
          }
        })
      }
    })
    if(checked==false){
      alert('You must select a standing and a fruit!');
      return checked;
    }
    else{
      return checked;
    }
  })
});
