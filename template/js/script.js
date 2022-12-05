(function ($) {
  "use strict"; // Start of use strict

    if ($("#donate-modal").length && $(".buttonDonate").length  && $(".donate-modal-close").length) {
		$(document).on('click','.buttonDonate',function(){
			$("#donate-modal").show();
		});
		$(document).on('click','.donate-modal-close',function(){
			$("#donate-modal").hide();
		});
		$(document).on('click','body',function(e){
			if(e.target.id == $("#donate-modal").attr('id')) { $("#donate-modal").hide(); }
		});
	}
	
	$(document).on('click', '#donate-modal .crypto-item', function(){
		let parent = $(this).parents('.donate-card');
		parent.find('.cryptos-box-view').show();
		parent.find('.cryptos-box-view .coin-img').html('<img src="'+$(this).data('img')+'" />');
		parent.find('.cryptos-box-view .coin-id').html($(this).data('id'));
		parent.find('.cryptos-box-view .coin-address').html($(this).data('address'));
		parent.find('.cryptos-box-view .coin-qr-code').html('').qrcode({width: 160,height: 160,text: $(this).data('address')});
	});
	
	$(document).on('click', '#donate-modal .cryptos-box-view-close', function(){
		let parent = $(this).parents('.donate-card');
		parent.find('.cryptos-box-view').hide();
	});

	// smooth-scrolling
    function smoothScrolling($scrollLinks, $topOffset) {
        var links = $scrollLinks;
        var topGap = $topOffset;

        links.on("click", function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
                if (target.length) {
                    $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }
    
  smoothScrolling($(".menu-section-area a[href^='#']"), $(".menu-section-area >nav").innerHeight());
  /*======== Preloder ===========*/
  $.fakeLoader({
    bgColor: '#fff',
    spinner:"spinner1"
  });
  
   // Shuffle js filter and masonry Start
   if ($(".shuffle-wrapper").length) {
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });
   }
  // Dropdown Menu Script Start

  $('#mainNav ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
  });
  // Dropdown Menu Script End

  // mobile Menu area
  $('nav.mobile_menu').meanmenu({
    meanScreenWidth: '991'
  });
  $('nav.mean-nav li > a:first-child').on('click', function () {
    $('a.meanmenu-reveal').click();
  });
  // mobile Menu area

  // coming count down clock
	if ($("#clock").length) {
        function timeElapse(date){
            var current = Date();
            var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
            var days = Math.floor(seconds / (3600 * 24));
            if (days < 10) {
                days = "0" + days;
            }
            seconds = seconds % (3600 * 24);
            var hours = Math.floor(seconds / 3600);
            if (hours < 10) {
                hours = "0" + hours;
            }
            seconds = seconds % 3600;
            var minutes = Math.floor(seconds / 60);
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            seconds = seconds % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var html = '<div class="event-count-box"><div class="dash days_dash"><div class="digit">' + days + '</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-day') +'</span> </div><div class="event-count-box"><div class="dash hours_dash"><div class="digit">' + hours + '</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-hour') +'</span> </div><div class="event-count-box"><div class="dash minutes_dash"><div class="digit">' + minutes + '</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-minute') +'</span> </div><div class="event-count-box"><div class="dash seconds_dash"><div class="digit">' + seconds + '</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-second') +'</span> </div>';
            $('#clock').html(html);
        }

        $('#clock').countdown($('#clock').data('date'), function(event) {
            if(event.type == 'stoped'){
                var together = new Date($('#clock').data('date'));           
                together.setHours(0);                           
                together.setMinutes(0);             
                together.setSeconds(0);                 
                together.setMilliseconds(0);
                setInterval(function() {
                    timeElapse(together);
                }, 1000);
            }else{
                var $this = $(this).html(event.strftime(''
                + ' <div class="event-count-box"><div class="dash days_dash"><div class="digit">%D</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-day') +'</span> </div>'
                + ' <div class="event-count-box"><div class="dash hours_dash"><div class="digit">%H</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-hour') +'</span> </div>'
                + ' <div class="event-count-box"><div class="dash minutes_dash"><div class="digit">%M</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-minute') +'</span> </div>'
                + ' <div class="event-count-box"><div class="dash seconds_dash"><div class="digit">%S</div></div> <span class="dash_title d-block text-center text-capitalize color-pink">'+ $('#clock').data('text-second') +'</span> </div>'));
            }
        });
    }
    
    if ($("#wish-form").length) {
        $("#wish-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5
                },
                content: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: false,
                    email: true
                },
            },

            messages: {
                name: {
                    required: 'Vui lÃ²ng nháº­p tÃªn cá»§a báº¡n.',
                    minlength: 'TÃªn pháº£i lá»›n hÆ¡n 5 kÃ½ tá»±.',
                },
                content: {
                    required: 'Vui lÃ²ng nháº­p lá»i chÃºc.',
                    minlength: 'Lá»i chÃºc pháº£i lá»›n hÆ¡n 10 kÃ½ tá»±.',
                },
                email: {
                    email: 'Äá»‹a chá»‰ email khÃ´ng há»£p lá»‡.'
                }
            },

            submitHandler: function (form) {
                $("#loader").css("display", "inline-block");
                $.ajax({
                    type: "POST",
                    url: "/wish",
                    data: $(form).serialize(),
                    success: function (res) {
                        $( "#loader").hide();
                        if(!res.error){
                            $('.wish-box').scrollTop(0);
                            $('.wish-box').prepend('<div class="wish-box-item bg"><strong>'+$(form).find("input[name='name']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")+'</strong><p>'+$(form).find("textarea[name='content']").val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")+'</p></div>');
                            $( "#success").html(res.message).slideDown( "slow" );
                            setTimeout(function() {
                            $( "#success").slideUp( "slow" );
                            }, 5000);
                        }else{
                            $( "#error").html(res.message).slideDown( "slow" );
                            setTimeout(function() {
                            $( "#error").slideUp( "slow" );
                            }, 5000);
                        }

                        form.reset();
                    },
                    error: function() {
                        $( "#loader").hide();
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false;
            }

        });
    }

  // comming count down clock

  //Friends Says Slider
  var friends_slide = $('.friends-says-slider');
  friends_slide.owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    dots:true,
    nav:false,
    smartSpeed: 1e3,
    autoplayTimeout: 8e3,
    autoplaySpeed: 1e3,
    autoplayHoverPause: !0,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      992:{
        items:1
      }
    }
  });
  $('.friends_slide_nav .testi_next').on('click', function() {
    friends_slide.trigger('next.owl.carousel');
  });

  $('.friends_slide_nav .testi_prev').on('click', function() {
    friends_slide.trigger('prev.owl.carousel');
  });
  //Friends Says Slider

  //Partners Logo Slider
  var planners_slide = $('.planners-slider');
  planners_slide.owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    dots:false,
    nav:false,
    smartSpeed: 1e3,
    autoplayTimeout: 8e3,
    autoplaySpeed: 1e3,
    autoplayHoverPause: !0,
    responsive:{
      0:{
        items:2
      },
      600:{
        items:4
      },
      992:{
        items:6
      }
    }
  });
  //Partners Logo Slider

  // Veno Box
  $('.venobox').venobox();

  //Wedding Events Area Slider
  var wedding_slide = $('.wedding-events-slider');
  wedding_slide.owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    dots:false,
    nav:false,
    center: true,
    smartSpeed: 1e3,
    autoplayTimeout: 8e3,
    autoplaySpeed: 1e3,
    autoplayHoverPause: !0,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      992:{
        items:3
      }
    }
  });
  $('.wedding_slide_nav .testi_next').on('click', function() {
    wedding_slide.trigger('next.owl.carousel');
  });

  $('.wedding_slide_nav .testi_prev').on('click', function() {
    wedding_slide.trigger('prev.owl.carousel');
  });
  //Wedding Events Area Slider

  // Initialize WOW JS
  new WOW().init();

})(jQuery); // End of use strict