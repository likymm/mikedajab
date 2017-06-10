$(function() {

    showContact();

    function showContact() {
        $('html').removeClass();
        $('.tab.contact').show();
        setTimeout(function() {
            $('html').addClass('show-contact');    
        }, 1000);
    }
});