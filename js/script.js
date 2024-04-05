$( document ).ready(function() {
    let counted = 0;
    $(window).scroll(function() {
    
      let oTop = $('.mtkhub-bSeven').offset().top - window.innerHeight;
      console.log(oTop);
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.mtkhub-bSeven .counter').each(function() {
            let $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        counted = 1;
      }
    });


    let countedTwo = 0;
    $(window).scroll(function() {
    
      let oTop = $('.mtkhub-blog').offset().top - window.innerHeight;
      console.log(oTop);
      if (countedTwo == 0 && $(window).scrollTop() > oTop) {
        $('.mtkhub-blog .counter').each(function() {
            let $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 4000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        countedTwo = 1;
      }
    });
});