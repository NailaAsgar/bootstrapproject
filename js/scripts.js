$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});
$(document).ready(function(){
    $("#modalButton").click(function(){
        $('#reserveModal').modal();       
    });
    $("#cancelButton").click(function(){
        $('#reserveModal').modal('hide');       
    });
    $("#closeButton").click(function(){
        $('#reserveModal').modal('hide');       
    });
});
$(document).ready(function(){
    $("#loginButton").click(function(){
        $('#loginModal').modal();
    });
    $("#loginCancel").click(function(){
        $('#loginModal').modal('hide');       
    }); 
    $("#loginClose").click(function(){
        $('#loginModal').modal('hide');       
    });    
});