// Waits for HTML to be ready before executing jQuery
$(document).ready(function() {
    $("img.CS").show();
    $("img.WD").show();
    $("img.D").show();

    $("#cs_button").css("background-color", "#ef9ea4");
    $("#wd_button").css("background-color", "#ef9ea4");
    $("#d_button").css("background-color", "#ef9ea4");

    $("#my_skills").click(function() {

      $("#wd_button").css("background-color", "white");
      $("#d_button").css("background-color", "white");
      $("#cs_button").css("background-color", "white");

      $("#c").attr('src', "images/skills/c.png")
      $("#python").attr('src', "images/skills/python.png")
      $("#java").attr('src', "images/skills/java.png")

      $("#html").attr('src', "images/skills/html.png")
      $("#css").attr('src', "images/skills/css.png")
      $("#php").attr('src', "images/skills/php.png");
      $("#mysql").attr('src', "images/skills/mysql.png");

      $("#photoshop").attr('src', "images/skills/photoshop.png")
      $("#indesign").attr('src', "images/skills/indesign.png")

    });


    $("#cs_button").click(function() {
        $("#wd_button").css("background-color", "white");
        $("#d_button").css("background-color", "white");
        $("#cs_button").css("background-color", "#ef9ea4");

        $("#c").attr('src', "images/skills/c_pink.png")
        $("#python").attr('src', "images/skills/python_pink.png")
        $("#java").attr('src', "images/skills/java_pink.png")

        $("#html").attr('src', "images/skills/html.png")
        $("#css").attr('src', "images/skills/css.png")
        $("#php").attr('src', "images/skills/php.png");
        $("#mysql").attr('src', "images/skills/mysql.png");

        $("#photoshop").attr('src', "images/skills/photoshop.png")
        $("#indesign").attr('src', "images/skills/indesign.png")

    });

    $("#wd_button").click(function() {
        $("#cs_button").css("background-color", "white");
        $("#d_button").css("background-color", "white");
        $("#wd_button").css("background-color", "#ef9ea4");

        $("#html").attr('src', "images/skills/html_pink.png")
        $("#css").attr('src', "images/skills/css_pink.png")
        $("#php").attr('src', "images/skills/php_pink.png");
        $("#mysql").attr('src', "images/skills/mysql_pink.png");

        $("#c").attr('src', "images/skills/c.png")
        $("#python").attr('src', "images/skills/python.png")
        $("#java").attr('src', "images/skills/java.png")

        $("#photoshop").attr('src', "images/skills/photoshop.png")
        $("#indesign").attr('src', "images/skills/indesign.png")
    });

    $("#d_button").click(function() {
        $("#wd_button").css("background-color", "white");
        $("#cs_button").css("background-color", "white");
        $("#d_button").css("background-color", "#ef9ea4");

        $("#html").attr('src', "images/skills/html.png")
        $("#css").attr('src', "images/skills/css.png")
        $("#php").attr('src', "images/skills/php.png");
        $("#mysql").attr('src', "images/skills/mysql.png")

        $("#c").attr('src', "images/skills/c.png")
        $("#python").attr('src', "images/skills/python.png")
        $("#java").attr('src', "images/skills/java.png")

        $("#photoshop").attr('src', "images/skills/photoshop_pink.png")
        $("#indesign").attr('src', "images/skills/indesign_pink.png")
    });


});
