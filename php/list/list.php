<html>
<head>
</head>
<style>
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
//$('li').hide();
   $('ul li').hide();  
 
  InOut($('ul li:first'));

});


function InOut(elem) { 
 var item =elem;
console.log(item);
if(item.length==0){

InOut($('ul li:first'));

}
 elem.delay().fadeIn().delay().fadeOut(function() {       
//var len =elem.length(); 
//console.log($(this).selector());
InOut(elem.next());
      }   
 );

}

});
 
</script>
</body>
</html>
