// Waits for HTML to be ready before executing jQuery
$(document).ready(function() {
    $("img.CS").show();
    $("img.WD").show();
    $("img.D").show();

    $("#cs_button").css("background-color", "#ef9ea4");
    $("#wd_button").css("background-color", "#ef9ea4");
    $("#d_button").css("background-color", "#ef9ea4");

    // $("#my_skills").click(function() {
    //     $("#wd_button").css("background-color", "#ef9ea4");
    //     $("#d_button").css("background-color", "#ef9ea4");
    //     $("#cs_button").css("background-color", "#ef9ea4");
    //     $("img.CS").show();
    //     $("img.WD").show();
    //     $("img.D").show();
    // });

    $("#cs_button").click(function() {
        $("#wd_button").css("background-color", "white");
        $("#d_button").css("background-color", "white");
        $("#cs_button").css("background-color", "#ef9ea4");
        $("img.CS").show();
        $("img.WD").hide();
        $("img.D").hide();
    });

    $("#wd_button").click(function() {
        $("#cs_button").css("background-color", "white");
        $("#d_button").css("background-color", "white");
        $("#wd_button").css("background-color", "#ef9ea4");
        $("img.WD").show();
        $("img.CS").hide();
        $("img.D").hide();
    });

    $("#d_button").click(function() {
        $("#wd_button").css("background-color", "white");
        $("#cs_button").css("background-color", "white");
        $("#d_button").css("background-color", "#ef9ea4");
        $("img.D").show();
        $("img.CS").hide();
        $("img.WD").hide();
    });


});
