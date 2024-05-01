// Simple parallax effect

$('.parallax').each(function() {
  var $obj = $(this);

  $(window).scroll(function() {
    var yPos = -($(window).scrollTop() / $obj.data('speed')),
        bgPos = '50% ' + yPos + 'px';
      
    $obj.css('background-position', bgPos);
  }); 
});

// This will get the scroll direction

var currPos = $(window).scrollTop(), 
  scrollDirection;

$(window).scroll(function() {
  var scroll = $(window).scrollTop(); 

  scrollDirection = scroll > currPos ? 'down' : 'up';
  currPos = scroll;
});

// This will change classes on scroll

$('.menu ul li a').each(function() {
 var link = $(this),
     href = $(link.attr('href'));

  $(window).scroll(function() {
      var h = href.height(),
          pos = href.position().top,
          scrollPos = $(window).scrollTop();
    
      /*if (scrollDirection === 'down' && scrollPos >= (pos - h/3) && scrollPos < pos && !disableAutomaticScroll) {
        $('html, body').animate({scrollTop: pos});
      }
    
      if (scrollDirection === 'up' && scrollPos <= (pos + h - h/3) && scrollPos > pos && !disableAutomaticScroll) {
        $('html, body').animate({scrollTop: pos});
      }*/
    
      if (scrollPos >= (pos - h/3) && scrollPos < (pos + h - h/3)) {
        $('.menu ul li a').removeClass('active');
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
  });
});

// This will disable anchors and scroll to elements basically

var disableAutomaticScroll = false;

$('.menu a[href^="#"]').click(function(e) {
  e.preventDefault();
  var anchor = $(this).attr('href'),
      anchorPos = $(anchor).position().top;

  disableAutomaticScroll = true;
  $('html, body').animate({scrollTop: anchorPos}, 1000, 'easeInOutBack', setTimeout(function() {
    disableAutomaticScroll = false;
  }, 700));
});