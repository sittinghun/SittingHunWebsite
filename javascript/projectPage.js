$(document).ready(function () {

    //adding 3d effect to project cover

    $('.pCover').plate({
        inverse: true,
        maxRotation: 3,
    });

    $('.pObject').plate({
        maxRotation: 4,
    });


    //showing rest of page content on cover click
    $('.pCover').click(function () {
        $(this).fadeOut(50);
    })

});
