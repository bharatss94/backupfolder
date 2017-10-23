$(function() {    

getMessages = function() {       
 var feedback = $.ajax({
        type: "POST",
        url: "online.php",
        async: false
    }).success(function(){
        setTimeout(function(){getMessages();}, 1000);
    }).responseText;
    }   
 getMessages();
})
