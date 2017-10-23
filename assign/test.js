$(document).ready(function(){

  //alert('test');
/*  $("#img1").mouseenter(function(){
        alert("You entered p1!");
   
});*/ $("#img1").on({
        mouseover: function(){
           alert('you have entered log in page');
        },  
        mouseout: function(){
          alert('you have leaved log in page');

        } 
      
    });
$("#fade").click(function(){
        $("#formfade").fadeToggle();     
       
    });
$("#blur").blur(function(){
        alert("This input field has lost its focus.");
    });


$("#animation").click(function(){
        $("#animateimage").animate({
            height: 'toggle'
        });
    });
 /* $("li").hover(function(e){
     console.log(e);
     switch(e.currentTarget.className) {
        case 'home':
           var color = "yellow";
        break;
        case 'tab1':
           var color = "red";
        break;
	 case 'tab2':
           var color = "green";
        break;
        case 'tab3':
           var color = "blue";
        break;     
} 
          console.log('color'+color);
        $('li.'+e.currentTarget.className).css({"background-color": color});
    });
*/


$("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
$("#chaining").click(function(){
        $("#slideimage").slideUp("slow").slideDown("slow");
    });

$("h3").bind("click", function(){
        alert("click here text  was clicked.");
    });

$('input[name="text"]').change(function(){
        alert("The text has been changed.");
    });
 $('input[name="firstname"]').keydown(function(){
        $('input[name="firstname"]').css("background-color", "grey")})
    .keyup(function(){
        $('input[name="firstname"]').css("background-color", "yellow")
    });

$("#append").on({mouseenter:function(){
        $("#append").append(" <b id='first'>hi</b>");
  },mouseleave:function(){
	$("#first").remove();}});
	
$("#prepend").mouseenter(function(){
        $("#prepend").prepend(" <b>hi</b>.");
    });

$("#val").click(function(){
        $('input[name="lastname"]').val("bharat");
});
$("#remove").click(function(){
	$("form").remove();
	});

});
