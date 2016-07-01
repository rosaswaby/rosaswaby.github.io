function navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

function projects_hover(project_image) {
    var project_image_src = project_image.src;
    // alert(project_image.src);
    project_image_src =  project_image_src.split(".png").pop();
    var new_src = project_image_src + "_hover.png";
    project_image.src = new_src;
    // testing out switching images
    // alert(project_image.src);
}

function projects_mouseaway(project_image) {
  var project_image_src = project_image.src;
  // alert(project_image.src);
  project_image_src =   project_image_src.split("_hover.png").pop();
  var new_src = project_image_src + ".png";
  project_image.src = new_src;
  // testing out switching images
  // alert(project_image.src);
}

// skills tab js

$("#tab1_content").show();
$("#tab2_content").hide();
$("#tab3_content").hide();
$("#tab4_content").hide();

$("#tab1").click(function() {
    $("#tab1_content").show();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
});

$("#tab2").click(function() {
    $("#tab2_content").show();
    $("#tab1_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
});

$("#tab3").click(function() {
    $("#tab3_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab4_content").hide();
});

$("#tab4").click(function() {
    $("#tab4_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
});
