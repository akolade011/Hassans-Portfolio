



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
    
    


    //form section

    window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
    formbutton("create", {
      action: "https://formspree.io/f/xdoyrqkq",
      title: "How can we help?",
      fields: [
        { 
          type: "email", 
          label: "Email:", 
          name: "email",
          required: true,
          placeholder: "your@email.com"
        },
        {
          type: "textarea",
          label: "Message:",
          name: "message",
          placeholder: "Enter a Message",
        },
        { type: "submit" }      
      ],
      styles: {
        title: {
          backgroundColor: "gray"
        },
        button: {
          backgroundColor: "gray"
        }
      }
    });