 $(function() {
            $(".hover").mouseenter(function() {
                var fontSize = parseInt($(this).children(":first").css("font-size"));
                console.log(fontSize)
                fontSize = fontSize + 10 + "px";
                $(this).children(":first").animate({
                    fontSize: fontSize
                })

            })
            $(".hover").mouseleave(function() {
                var fontSize = parseInt($(this).children(":first").css("font-size"));
                console.log(fontSize)
                fontSize = fontSize - 10 + "px";
                $(this).children(":first").animate({
                    fontSize: fontSize
                })

            })



        });