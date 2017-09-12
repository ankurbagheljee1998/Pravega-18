$(function(){
$("#show-menu-button").on('click', function() {
            if ($("#left-menu").hasClass("menu-hidden")) {
                $("#left-menu").animate({"width":"200px"}, 400).removeClass('menu-hidden').addClass('menu-shown');
                $("#show-menu-button").addClass('active');
            }
            else if($("#left-menu").hasClass("menu-shown")){
                $("#left-menu").animate({"width":"0px"}, 400,function(){
                    $("#left-menu").removeClass('menu-shown').addClass('menu-hidden');
                });
                $("#show-menu-button").removeClass('active');
            }
        });
});    