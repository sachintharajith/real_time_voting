/**
 * @author Sachintha
 */
$(document).ready(function(){
	
	var messages = [];
    var socket = io.connect('http://localhost:3000');
   
    socket.on('message', function (data) {
        if(data.message) {
           console.log(data.message)
        } else {
            console.log("There is a problem:", data);
        }
    });
    
 	
    /*
    $("#send").click(function() {
    	sendMessage();
    });	
	
	function sendMessage() {
		if(! $("#name").val()) {
            alert("Please type your name!");
        }else{
        var text = field.value;
        socket.emit('send', { message: text, username: $("#name").val() });
        $("#field").val('');	
        }
        
	}*/
})