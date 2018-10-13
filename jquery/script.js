 $(function() {
     $(".hover").mouseenter(function() {
         $(this).children(":first").finish()
         var fontSize = parseInt($(this).children(":first").css("font-size"));
         console.log("font size before:" + fontSize)
         fontSize = fontSize + 8 + "px";
         $(this).children(":first").animate({
             fontSize: fontSize

         })
         console.log("font size after:" + fontSize)


     })
     $(".hover").mouseleave(function() {
         $(this).children(":first").finish()
         var fontSize = parseInt($(this).children(":first").css("font-size"));
         console.log(fontSize)
         fontSize = fontSize - 8 + "px";
         $(this).children(":first").animate({
             fontSize: fontSize
         })

     })
     
     
     
     
     
     $(".smhover").mouseenter(function() {
         $(this).children(":first").finish()
         var fontSize = parseInt($(this).children(":first").css("font-size"));
         console.log("font size before:" + fontSize)
         fontSize = fontSize + 2 + "px";
         $(this).children(":first").animate({
             fontSize: fontSize

         })
         console.log("font size after:" + fontSize)


     })
     $(".smhover").mouseleave(function() {
         $(this).children(":first").finish()
         var fontSize = parseInt($(this).children(":first").css("font-size"));
         console.log(fontSize)
         fontSize = fontSize - 2 + "px";
         $(this).children(":first").animate({
             fontSize: fontSize
         })

     })
     

     // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      $('.navbar-collapse').collapse('hide');
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



// from https://www.inserthtml.com/2013/03/custom-html5-video-player/

 });
 