$(function() {

    showIntro();

    $('#btnShowSkills').click(function() {
        showSkills();
        return false;
    });

    function showIntro() {
        $('html').removeClass();
        $('.tab').fadeOut(1000);
        $('.tab.intro').show();
        setTimeout(function() {
            $('html').addClass('show-intro');    
        }, 1000);
    }

    function showSkills() {
        $('html').removeClass();
        $('.tab').fadeOut(1000);
        $('.tab.skills').show();
        setTimeout(function() {
            $('html').addClass('show-skills');    
        }, 1000);
    }
});