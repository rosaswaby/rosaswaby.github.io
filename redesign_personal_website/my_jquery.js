// Waits for HTML to be ready before executing jQuery
$(document).ready(function() {
    $("img.CS").show();
    $("img.WD").show();
    $("img.D").show();

    $("#cs_button").css("background-color", "pink");
    $("#wd_button").css("background-color", "pink");
    $("#d_button").css("background-color", "pink");

    $("#cs_button").click(function() {
        $("#wd_button").css("background-color", "white");
        $("#d_button").css("background-color", "white");
        $("#cs_button").css("background-color", "pink");
        $("img.CS").show();
        $("img.WD").hide();
        $("img.D").hide();
    });

    $("#wd_button").click(function() {
        $("#cs_button").css("background-color", "white");
        $("#d_button").css("background-color", "white");
        $("#wd_button").css("background-color", "pink");
        $("img.WD").show();
        $("img.CS").hide();
        $("img.D").hide();
    });

    $("#d_button").click(function() {
        $("#wd_button").css("background-color", "white");
        $("#cs_button").css("background-color", "white");
        $("#d_button").css("background-color", "pink");
        $("img.D").show();
        $("img.CS").hide();
        $("img.WD").hide();
    });


});
