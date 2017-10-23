$(document).ready(function(){
  //alert('test');
  $('input[name="firstname"]').val('welcome');
  console.log($('input[name="firstname"]').val());
  $('input[name="lastname"]').on('change',function(){ prepend(this, 'change')});
  $('input[name="lastname"]').on('mouseenter',function(){ prepend(this, 'mouseenter')});
  function prepend(content, eventchange) {
    $(content).prepend('<div class="append-lastname">'+eventchange+'</div>'); 
   }

$('input[name="firstname"]').hover(function() {
    $( this ).toggleClass( "hover" );
});

});
