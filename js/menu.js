$(function () {
    $('.nav-menu')
        .mouseover(function () {
            $(this)
                .children('.sub-menu')
                .stop()
                .slideDown(500);
        })
        .mouseout(function () {
            $('.sub-menu')
                .stop()
                .slideUp();
        })
})
