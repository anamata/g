
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


//The plugin function is called in $(window).on("load") so it executes after all page elements (like images) are loaded. 

$(window).on("load",function(){
        $(".body-wrap").mCustomScrollbar();
});
/*/*
click(function(){alert("sdas")})


function klikniete(e: Event) {

    alert("kliklem");
    e.preventDefault();
}*/
