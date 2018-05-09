 $(function() {
            $(".hover").mouseenter(function() {
                $(this).children(":first").finish()
                var fontSize = parseInt($(this).children(":first").css("font-size"));
                console.log("font size before:"+fontSize)
                fontSize = fontSize + 10 + "px";
                $(this).children(":first").animate({
                    fontSize: fontSize

                })
                console.log("font size after:"+fontSize)


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



        });