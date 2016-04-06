$(window).load(function() {
    $('.flexslider').flexslider(
        {
            controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            prevText: "Previous",           //String: Set the text for the "previous" directionNav item
            nextText: "Next",
            direction: "horizontal",
            animation: "slide",
            slideshowSpeed: 5000, 
            animationSpeed: 1600,   
        });
    $('.banner-back').flexslider(
        {
            controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            prevText: "Previous",           //String: Set the text for the "previous" directionNav item
            nextText: "Next",
            direction: "horizontal",
            animation: "slide",
            slideshowSpeed: 5000,
            animationSpeed: 1600,  
        });
    $('.banner-front').flexslider(
        {
            controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            prevText: "Previous",           //String: Set the text for the "previous" directionNav item
            nextText: "Next",
            direction: "horizontal",
            slideshowSpeed: 5000,
            animationSpeed: 1600,  
        });
});
