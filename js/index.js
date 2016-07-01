function navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

function projects_hover(image) {
    var image_src = image.src;
    image_src = image_src.split(".").pop();
    image_src = image_src + "_hover.png";
    image.src = new_src;
    testing out switching images
    alert(image.src);
}

function projects_mouseaway(image) {
    var image_src = image.src;
    image_src = image_src.split("_hover").pop();
    image_src = image_src + ".png";
    image.src = new_src;
    testing out switching images
    alert(image.src);
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
