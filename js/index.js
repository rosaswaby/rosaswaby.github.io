function myFunction() {
  document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

function myFunction(social_media_image) {
  var new_src = social_media_image.id + "_clicked.png";
  social_media_image.src = new_src;
}

// $("#project1").hover(
//   function() {
//     $(this).attr("src", "http://cdn-6.dooziedog.com/dog_breeds/beagle/images/full/Beagle-Puppy.jpg");
//   },
//     function() {
//       $(this).attr("src", "http://i.imgur.com/Flk3FcN.png");
//   });
