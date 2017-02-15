$(document).ready(function() {
    
    
    $('#email').keyup(function() {
        var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
            $("#smsemail").text("please enter valid email");
            $("#smsemail").addClass("red");
        }
        if (validateEmail(sEmail)) {
            $("#smsemail").removeClass("red");
            $("#smsemail").text("email valid");
        }
        else {
            $("#smsemail").text("please enter valid email");
            $("#smsemail").addClass("red");
        }
    });
    
    
    
    $( "#wrapper" ).sortable();
    $( "#wrapper" ).disableSelection();
    
    
    $("#lname").keyup(function(){
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        $("#fullname").val(fname+" "+lname);
    });
    
    
    
    $("#conpass").keyup(function(){
        var pass = $("#password").val();
        var conpass = $("#conpass").val();
        
        if(pass==conpass){
            $("#mtch").removeClass("red");
            $("#mtch").text("Password matched!");
        }
        
        else{
            $("#mtch").text("Password don't matched!");
            $("#mtch").addClass("red");
        }
    });
    
    
    $("#male").draggable();
    $("#fmale").draggable();
    $("#droppable").droppable({
      drop: function(event, ui) {
        $(this)
          .addClass("lime")
          .html( "Dropped!" );
      }
    }); 
    
    
    
});




function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}