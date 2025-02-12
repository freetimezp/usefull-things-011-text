$(function () {
    var welcomeSection = $('.welcome-section');
    var enterButton = welcomeSection.find('.enter-button');

    setTimeout(function () {
        welcomeSection.removeClass('content-hidden');
    }, 800);

    enterButton.on('click', function (e) {
        e.preventDefault();
        welcomeSection.addClass('content-hidden').fadeOut();
    });
});