(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Class filter
    var classIsotope = $('.class-container').isotope({
        itemSelector: '.class-item',
        layoutMode: 'fitRows'
    });

    $('#class-filter li').on('click', function () {
        $("#class-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        classIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

$(document).ready(function(){
    $('footer1').prepend(`
    <footer1 id="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 notmargin" data-aos="fade-up">   
                        <div class="navbar margin-footer">
                            <ul class="footer__responsive">
                            <li class="footext">
                                <a href="productos.html"><strong style="color:white">Nuestros productos</strong></a>
                            </li>
                            <li   class="texto footext">
                                <a href="#"><strong style="color:white">¿Quiénes somos?</strong></a>
                            </li>
                            <li   class="texto footext">
                                <a href="contacto.html"><strong style="color:white">Contáctanos</strong></a>
                            </li>
                            <p class="copy">©️ Copyright-BOURVONIA</p>
                        </ul>
                        <ul class="footer__responsive2">
                            <li class="footext">
                                <p class="conection">Sigamos conectados</p>
                            </li>
                            <li   class="texto footext">
                                <img src="./img/footer/facebook.png" alt="" width="20px"><a href="#"><strong style="color:white">&nbsp &nbsp &nbsp Facebook</strong></a>
                            </li>
                            <li   class="texto footext">
                                <img src="./img/footer/instagram.png" alt="" width="25px"><a href="https://www.instagram.com/______bourvonia/"><strong style="color:white">&nbsp &nbsp Instagram</strong></a>
                            </li>
                            <p class="copy"> </p>
                        </ul>
                        <ul class="footer__responsive3">
                            <li class="footext">
                                <a href="productos.html"><strong style="color:white">Zona Norte: 351 393 2602</strong></a>
                            </li>
                            <li   class="texto footext">
                                <a href="productos.html"><strong style="color:white">Zona Sur: 351 606 3195</strong></a>
                            </li>
                            <li   class="texto footext">
                                <a href="productos.html"><strong style="color:white">bourvonia@gmail.com</strong></a>
                            </li>
                            <p class="copy"> </p>
                        </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </footer1>  `
    );
  }
  )