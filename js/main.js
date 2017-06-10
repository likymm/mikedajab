$(function() {
    
    $('.hamburger a').click(function() {
        showMainNav($(this));
        return false;
    }); 

    function showMainNav($this) {
        if ($this.hasClass('open')) {
            $this.removeClass('open');
            $('body').removeClass('fixed-elem');
            $('.main-nav ul').removeClass('open');
        } else {
            $this.addClass('open');
            $('body').addClass('fixed-elem');
            $('.main-nav ul').addClass('open');
        }
    }
});