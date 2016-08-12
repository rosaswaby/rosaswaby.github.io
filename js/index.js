function navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}


// active tabs function in skills section
function activeTab(id_name) {
  var x;
  x = document.getElementsByClassName("tab");

   for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor= "#17171e";
    }

  document.getElementById(id_name).style.backgroundColor = "#ff9bb4";
}
// skills js
$(document).ready(function() {

  // on initial page loading
  $("#tab1_content").show();
  $("#tab2_content").hide();
  $("#tab3_content").hide();
  $("#tab4_content").hide();
  $("#tab1").css("background-color", "#ff9bb4");

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

});

function projects_hover(project_image) {
    var project_image_src = project_image.src;
    project_image_src =  project_image_src.split(".png").shift();
    var new_src = project_image_src + "_hover.png";

    project_image.src = new_src;

}

function projects_mouseaway(project_image) {
  var project_image_src = project_image.src;
  project_image_src =   project_image_src.split("_hover.png").shift();
  var new_src = project_image_src + ".png";
  project_image.src = new_src;
}

// fading for project images
$("#project_images").hover(function(){
    $("this").fadeOut();
});



// change nav bar color when scrolling
// var a = $(".navbar").offset().top;

// $(document).scroll(function(){
//     if($(this).scrollTop() > a)
//     {
//        $('.navbar').css({"background-color":"#ff9bb4"});
//     } else {
//        $('.navbar').css({"background-color":"transparent"});
//     }
// });
