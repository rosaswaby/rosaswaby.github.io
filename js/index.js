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

// $("#project1").hover(
//   function() {
//     $(this).attr("src", "http://cdn-6.dooziedog.com/dog_breeds/beagle/images/full/Beagle-Puppy.jpg");
//   },
//     function() {
//       $(this).attr("src", "http://i.imgur.com/Flk3FcN.png");
//   });
