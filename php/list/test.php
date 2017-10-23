<html>
<head>
</head>
<style>
ul li{
display:none;
}
</style>
<body>
<form>
<label>Enter a range of number to print</label><input type="text" name="number" id="number"/><br/><br/>    
<input type="button" id="submit" value="submit"/>

</form>
<ul >

</ul>
<script src="jquery-3.2.1.js"></script>

<script>
$(document).ready(function(){
$("#submit").click(function(){
$('ul').html("");
var n=$("#number").val();
for (var i=1;i<=n;i++)
{

  $('ul').append("<li>"+i+"</li>");  
 
}

 /*   var shown = $('ul > li:first');
   shown.hide().delay(1000).fadeIn(1000).fadeOut(1000);
    setInterval(function(){
        if(shown.next().length){
            shown = shown.next();
             shown.hide().delay(1000).fadeIn(1000).fadeOut(1000);
        }
    },4000);*/
//$( 'ul > li:first' ).nextAll().fadeIn(1000).fadeOut(1000);
/*$( "li" ).each(function( index ) {
 // console.log( index + ": " + $( this ).text() );
   $(this).hide().delay(1000).fadeIn(1000).fadeOut(1000);
});
*/
/* $('li').each(function (index) {
    $(this).css('background-color', 'orange').text()
          
          .fadeOut(1500);
  });*/
//setInterval(function() {

//},2000);
var i=0;
repeat(i);
});

function repeat(i) {

    var list= $('ul li');
list.eq(i).delay(1000).fadeIn(1000).fadeOut(1000,function(){
i++;
var n=$('#number').val();
 if (i%n==0){
i=0;
}
repeat(i);

});
    

}

});
</script>
</body>
</html>
