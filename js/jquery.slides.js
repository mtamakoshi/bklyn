$(document).ready(function() {
    slideit(imagesArray);
});


var imagesArray = ["/images/bk2.jpg", "/images/bk3.jpg", "/images/bk4.jpg", "/images/bk5.jpg", "/images/bk6.jpg", "/images/bk7.jpg"];

function slideit(images) {
    var currentImage = $('#slides img').attr('src');
    var imageIndex = images.indexOf(currentImage);
    console.log(imageIndex);
    if (images.length === (imageIndex + 1)) {
        imageIndex = 0;
    } else {
        imageIndex = imageIndex + 1;
    }
    $('#slides img').attr('src', images[imageIndex]);
    setTimeout(function() {slideit(images);}, 2500);
}















// $(document).ready(function() {
//     slideit(imagesArray);
// });

// var imagesArray = ["/images/bk2.jpg", "/images/bk3.jpg", "/images/bk4.jpg", "/images/bk5.jpgg", "/images/bk6.jpg", "/images/bk7.jpg"];

// function slideit(images) {
//     var currentImage = $('#slides').attr('src');
//     var imageIndex = images.indexOf(currentImage);
//     console.log(imageIndex);
//     if (images.length === (imageIndex + 1)) {
//         imageIndex = 0;
//     } else {
//         imageIndex = imageIndex + 1;
//     }
//     $('#slides').attr('src', images[imageIndex]);
//     setTimeout(function() {slideit(images);}, 3000);
// }