
$(document).ready(

    function() {

        $("article > a").on( "click", function(e) {
            
            /* oznacz wybrany produkt */
            $( this ).parent().toggleClass("klikniete"); 
            
            /* overlay on + show animation */
            $(".overlay").addClass("showoverlay anim1"); 
            
            /* pasek od scrollowania listy produktow na razie niepotrzebny*/
            //TODO dodawac to tylko gdy jest scrollbar 
            $("body").addClass("hidescrollbar"); 


            //$("main").toggleClass("kliknietymain")


            e.preventDefault();
          });
        $(".closeoverlay").on( "click", function(e) {
            $( this ).parent().removeClass("klikniete");
            //$("main").toggleClass("kliknietymain");
            $("body").removeClass("hidescrollbar");
            $(".overlay").removeClass("showoverlay");
            //$("main").show();

            e.preventDefault();
        });  
    }
)



/*
click(function(){alert("sdas")})


function klikniete(e: Event) {

    alert("kliklem");
    e.preventDefault();
}*/
