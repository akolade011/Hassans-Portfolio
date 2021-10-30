



var getButton = document.querySelector(".navbar-toggler");


  
    var showText = function (target, message, index, interval) {   
      if (index < message.length) {
        $(target).append(message[index++]);
     
        setTimeout(function () { showText(target, message, index, interval); }, interval);
       
      }
    }
    $(function () {
      showText("#messgSlide", " Front End Developer", 0, 150); 
    
      
    });
    
    