$(document).ready(function () {

    $('.container').nested({
        gutter: 10,
        minColumn: 1,
        minWidth: 190,
    });

    var scrollCount = 0;

    $('.Wrap').scroll(function (scrollCount) {
        scrollCount + 1;
        return scrollCount;
    });

    if (scrollCount >= 1) {
        var scrollCount = true;
        console.log('scrollCount = true')
        return scrollCount;
    } else {
        console.log('scrollCount = false')
    };

    if (scrollCount) {
        $('.container').append('<div class="box size11"></div><div class="box size12"></div><div class="box size21"></div><div class="box size12"></div><div class="box size12"></div> <div class = "box size12" > < /div><div class = "box size11" > < /div> <div class = "box size12" > < /div> <div class = "box size21" > < /div> <div class = "box size12" > < /div> <div class = "box size12" > < /div> <div class = "box size11" > < /div> <div class = "box size11" > < /div>');
    } else {
        console.log('Not Scrolled');
    };

});