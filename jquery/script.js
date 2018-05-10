 $(function() {
     $(".hover").mouseenter(function() {
         $(this).children(":first").finish()
         var fontSize = parseInt($(this).children(":first").css("font-size"));
         console.log("font size before:" + fontSize)
         fontSize = fontSize + 10 + "px";
         $(this).children(":first").animate({
             fontSize: fontSize

         })
         console.log("font size after:" + fontSize)


     })
     $(".hover").mouseleave(function() {
         $(this).children(":first").finish()
         var fontSize = parseInt($(this).children(":first").css("font-size"));
         console.log(fontSize)
         fontSize = fontSize - 10 + "px";
         $(this).children(":first").animate({
             fontSize: fontSize
         })

     })

     //  NOT MY CODE 
     $('a[href*="#"]')
         // Remove links that don't actually link to anything
         .not('[href="#"]')
         .not('[href="#0"]')
         .click(function(event) {
             $('.navbar-collapse').collapse('hide');

             // On-page links
             if (
                 location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                 location.hostname == this.hostname
             ) {
                 // Figure out element to scroll to
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 // Does a scroll target exist?
                 if (target.length) {
                     // Only prevent default if animation is actually gonna happen
                     event.preventDefault();
                     $('html, body').animate({
                         scrollTop: target.offset().top
                     }, 1000, function() {
                         // Callback after animation
                         // Must change focus!
                         var $target = $(target);
                         $target.focus();
                         if ($target.is(":focus")) { // Checking if the target was focused
                             return false;
                         }
                         else {
                             $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                             $target.focus(); // Set focus again
                         };
                     });
                 }
             }
         });


 });
 