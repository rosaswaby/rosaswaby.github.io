function myFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

function myFunction(social_media_image) {
    var id = social_media_image.id;
    var new_src = "icons/" + id + "_clicked.png";
    social_media_image.src = new_src;
}

function mouseaway(my_image) {
    var id = my_image.id;
    my_image.src = "icons/" + id + ".png";

}

// jquery for skills section
// if ($(window).width() > 600) {
//     $("#skills_larger_browser").show();
//     $("#skills_smaller_browser").hide();
// } else {
//     $("#skills_larger_browser").hide();
//     $("#skills_smaller_browser").show();
// }

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

// --------------------------------------------------------------------------------

// $("#project1").hover(
//   function() {
//     $(this).attr("src", "http://cdn-6.dooziedog.com/dog_breeds/beagle/images/full/Beagle-Puppy.jpg");
//   },
//     function() {
//       $(this).attr("src", "http://i.imgur.com/Flk3FcN.png");
//   });
