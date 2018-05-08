 $(function() {
            $(".hovering").mouseenter(function() {
                var fontSize = parseInt($(this).prev().css("font-size"));
                console.log(fontSize)
                fontSize = fontSize + 10 + "px";
                $(this).prev().animate({
                    fontSize: fontSize
                })

            })
            $(".hovering").mouseleave(function() {
                var fontSize = parseInt($(this).prev().css("font-size"));
                console.log(fontSize)
                fontSize = fontSize - 10 + "px";
                $(this).prev().animate({
                    fontSize: fontSize
                })

            })



        });