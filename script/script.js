'use strict'
/* ---------main-menu------------ */
$('.main-menu a').on('mouseover', function(){
    $(this).parent().closest('li').css({'border-bottom':'1px solid  #18cfab'})
});
$('.main-menu a').on('mouseout', function(){
    $(this).parent().closest('li').css({'border-bottom':'0'})
});
/* ---------Our Services--------- */
$('#btn-web-design').addClass('btn-service-active');
$('#web-design-info').css('display','flex');

$('.our-service').on('mouseover', 'button', function (){
    $(this).addClass('btn-service-hover');
});

$('.our-service').on('mouseout', 'button', function (){
    $(this).removeClass('btn-service-hover');
});

$('.our-service').on('click', 'button', function (){
    let btnName = $(this).text();
    let count = 0;
    let result;
    $('.btn-service').each( function(){
        $(this).removeClass('btn-service-active');
        if($(this).text() === btnName){
            result = count;
        }
        count++;
    });
    $('.service-review').each( function(){
        $(this).hide();
    });
    count = 0;
    $('.service-review').each( function(){
        if(count === result){
            $(this).css({'display':'flex'});
        }
        count++;
    });
    $(this).addClass('btn-service-active');
})
/* ------Our Amazing Work------ */
let btnWork = $('#btn-work');
btnWork.addClass('btn-work-active');

let listOfImgs = [{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design1.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design2.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design3.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design4.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design5.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design6.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design7.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design8.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design9.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design10.jpg'},
{group: 'Graphic Design', src: './img/our-work/graphic-design/graphic-design11.jpg'},
{group: 'Web Design', src: './img/our-work/web-design/web-design1.jpg'},
{group: 'Web Design', src: './img/our-work/web-design/web-design2.jpg'},
{group: 'Web Design', src: './img/our-work/web-design/web-design3.jpg'},
{group: 'Web Design', src: './img/our-work/web-design/web-design4.jpg'},
{group: 'Web Design', src: './img/our-work/web-design/web-design5.jpg'},
{group: 'Web Design', src: './img/our-work/web-design/web-design6.jpg'},
{group: 'Web Design', src: './img/our-work/web-design/web-design7.jpg'},
{group: 'Landing Pages', src: './img/our-work/landing-page/landing-page1.jpg'},
{group: 'Landing Pages', src: './img/our-work/landing-page/landing-page2.jpg'},
{group: 'Landing Pages', src: './img/our-work/landing-page/landing-page3.jpg'},
{group: 'Landing Pages', src: './img/our-work/landing-page/landing-page4.jpg'},
{group: 'Landing Pages', src: './img/our-work/landing-page/landing-page5.jpg'},
{group: 'Landing Pages', src: './img/our-work/landing-page/landing-page6.jpg'},
{group: 'Landing Pages', src: './img/our-work/landing-page/landing-page7.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress1.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress2.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress3.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress4.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress5.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress6.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress7.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress8.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress9.jpg'},
{group: 'Wordpress', src: './img/our-work/wordpress/wordpress10.jpg'}];

let count = 0;
for(let i of listOfImgs){
    if (count == 11){
        $('.btn-load-more').css({'display': 'block'});
        break;
    }
    $('.work-examples').append($('<img></img>').attr('src', i.src));
    count++;
}

$('.our-work-content').on('mouseover', 'button', function (){
    $(this).addClass('btn-work-hover');
});

$('.our-work-content').on('mouseout', 'button', function(){
    $(this).removeClass('btn-work-hover');
});

$('.our-work-content').on('click', 'button', function(){
    let btnName = $(this).text();
    $('.btn-work-content').each( function(){
        $(this).removeClass('btn-work-active');
        if($(this).text() == btnName && $(this).text() != 'All'){
            $('.our-work-content img').remove();
            $('#btn-load-work').hide();
            for(let i of listOfImgs){
                if (i.group == btnName){
                    $('.work-examples').append($('<img></img>').attr('src', i.src));
                } 
            }
        } else if($(this).text() == 'All'){
            count = 0;
            $('.our-work-content img').remove();
            $('#btn-load-work').hide();
            for(let i of listOfImgs){
                if (count == 11){
                    $('.btn-load-more').css({'display': 'block'});
                    break;
                }
                $('.work-examples').append($('<img></img>').attr('src', i.src));
                count++;
            }
        }
    });
    
    if ($(this).is(".btn-load-more")){
        let animation = $('#animation');
        animation.css({'display': 'flex'});
        setTimeout(()=> { 
            count = 0;
            for(let i of listOfImgs){
                if (count >= 11){
                    let img = $('<img></img>');
                    img.attr('src', i.src);
                    $('.work-examples').append(img);
                } 
                count++;
            }
            $(this).hide();
            animation.hide();
            btnWork.addClass('btn-work-active');
        }, 2200);
    } else if ($(this).is('.btn-work-link') || $(this).is('.btn-work-search')){
        btnWork.addClass('btn-work-active');
    } else $(this).addClass('btn-work-active');
});
/* -------About theHam-slider------ */
$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        arrows: false,
        fade: true,
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
    });
});
/* -----------Gallery--------- */
let gallery = ['./img/gallery/sunset.jpg','./img/gallery/sunsett.jpg','./img/gallery/tomato.jpg','./img/gallery/torrent.jpg',
'./img/gallery/tomatoes.jpg','./img/gallery/wintry.jpg','./img/gallery/wood.jpg','./img/gallery/background.jpg','./img/gallery/british-columbia.jpg',
'./img/gallery/cat.jpg','./img/gallery/christmas-motif.jpg','./img/gallery/cobblestones.jpg','./img/gallery/coffee.jpg','./img/gallery/dawn.jpg',
'./img/gallery/evolution.jpg','./img/gallery/factory-building.jpg','./img/gallery/fire.jpg','./img/gallery/frozen.jpg','./img/gallery/fruit.jpg',
'./img/gallery/geyser.jpg','./img/gallery/helicopter.jpg','./img/gallery/rails.jpg','./img/gallery/ivy.jpg','./img/gallery/nature-flower.jpg'];

let picsInPic = ['./img/gallery/pic-in-a-pic/autumn.jpg','./img/gallery/pic-in-a-pic/black-cat.jpg','./img/gallery/pic-in-a-pic/face.jpg',
'./img/gallery/pic-in-a-pic/leaf.jpg','./img/gallery/pic-in-a-pic/leaf2.jpg','./img/gallery/pic-in-a-pic/manhole-cover.jpg',
'./img/gallery/pic-in-a-pic/meteora.jpg','./img/gallery/pic-in-a-pic/northern-lights.jpg','./img/gallery/pic-in-a-pic/open-fire.jpg',
'./img/gallery/pic-in-a-pic/portrait.jpg','./img/gallery/pic-in-a-pic/seed-head.jpg','./img/gallery/pic-in-a-pic/setting-sun.jpg',
'./img/gallery/pic-in-a-pic/sun.jpg','./img/gallery/pic-in-a-pic/sunrise.jpg','./img/gallery/pic-in-a-pic/sunset.jpg',
'./img/gallery/pic-in-a-pic/tree-tops.jpg','./img/gallery/pic-in-a-pic/wave.jpg','./img/gallery/pic-in-a-pic/wheat.jpg'];

let picsStart = 0;
let calc = 0;
for(let i = 0; i < gallery.length; i++){
    $('.gallery-grid').append($('<img></img>').addClass('gallery-item gallery-size-img').attr('src', gallery[i]));
    calc++;
    if(calc == 7) break;
}

$('.gallery-grid').imagesLoaded( function() {
    $('.gallery-content').on('click', 'button', function(){
        let animation = $('#load-animation');
        animation.css({'display': 'flex'});
        setTimeout(()=>{ 
            setTimeout(function(){
                let reload = $('.gallery-grid');
                reload.masonry('reloadItems');
                reload.masonry();
            },500);
            for(let i = calc; i < gallery.length; i++){
                $('.gallery-grid').append($('<img></img>').addClass('gallery-item gallery-size-img').attr('src', gallery[i]));
                if(calc%8 == 0){
                    let pics = $('<div></div>').addClass('gallery-item pics-in-pic');
                    for(let i = picsStart; i < picsStart+9; i++){
                        pics.append($('<img></img>').addClass('pic-size').attr('src', picsInPic[i]));
                    }
                    $('.gallery-grid').append(pics);
                    picsStart += 9;
                }
                calc++;
                if(calc == 14) break;
            }
            if(calc == gallery.length) $(this).hide();
            animation.hide();
        }, 2200);
    });
    $(document).ready(function(){
        $('.gallery-grid').masonry({
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-size-img',
            percentPosition: true
        });
    });
});