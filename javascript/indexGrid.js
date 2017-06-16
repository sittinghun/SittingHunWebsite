$(document).ready(function () {

    $('.container').nested({
        gutter: 30,
        minColumn: 1,
        minWidth: 170,
    });

    $('.Wrap').scroll(function (scrollCount) {
        //add 1 if scrolled
        scrollCount = 0;
        scrollCount++;

        //define additional boxes for DOM
        var boxes = "<a href='projects/mothermoon/motherMoon.html'><div class='box size11' id='motherMoon'><div class='projectTitle'><p>Mother Moon</p></div></div></a><a href='projects/edovo/edovo.html'><div class=' box size11' id='edovo'><div class='projectTitle'><p>Edovo Connect</p></div></div></a><a href='projects/lowpoly/lowPoly.html'><div class='box size11' id='lowPoly'><div class='projectTitle'><p>Low Poly Animals</p></div></div></a><a href='projects/projected/projectED.html'><div class='box size21' id='projectED'><div class='projectTitle'><p>ProjectED Videos</p></div></div></a><a href='projects/digitalartist/digitalArtist.html'><div class='box size11' id='digitalArtist'><div class='projectTitle'><p>Digital Artist</p></div></div></a><a href='projects/hotsauce/hotSauce.html'><div class='box size21' id='hotSauce'><div class='projectTitle'><p>Hot Sauce, White Sauce</p></div></div></a><a href='projects/growing/growing.html'><div class='box size11' id='growing'><div class='projectTitle'><p>Growing in Pieces</p></div></div></a><a href='projects/eyesabove/eyesAbove.html'><div class='box size11' id='eyesAbove'><div class='projectTitle'><p>Eyes Above</p></div></div></a>";

        //if you've scrolled, append the additional boxes
        if (scrollCount == 1) {
            $('.container').append(boxes).nested('append', boxes);
            $(this).off('scroll');
        };

        highlightStart();
        highlightStop();
    });

    //jquery for styling follows
    function highlightStart() {
        $('.box').mouseenter(function () {
            $(this).css('box-shadow', '0px 0px 0px 2px #ff6666 inset');
            $(this).children().css({
                'background-color': '#ff6666' /*,'box-shadow':'none'*/
            });
            $(this).find('p').css('color', '#ffffff');
        });
    };

    function highlightStop() {
        $('.box').mouseleave(function () {
            $(this).css('box-shadow', '0 0 40px #cccccc');
            $(this).children().css({
                'background-color': '#ffffff' /*,'box-shadow':'0px 0px 0px 2px #e6e6e6 inset'*/
            });
            $(this).find('p').css('color', '#000000');
        });
    };

    highlightStart();
    highlightStop();

});
