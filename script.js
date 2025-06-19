 // script.js
 $(document).ready(function(){
 if(window.WOW) new WOW().init();
 $('#lightbox').on('show.bs.modal',e=>{ $(e.relatedTarget).data('full-src') &&
 $(e.currentTarget).find('img').attr('src',$(e.relatedTarget).attr('data-full
src')); });
 $('.carousel').carousel({interval:4000});
 var btn=$('#scrollTopBtn'); $(window).scroll(()=>{ $(window).scrollTop()>300?
 btn.fadeIn():btn.fadeOut(); }); btn.click(()=>$('html,body').animate({scrollTop:
 0},600));
 $('a[href^="#"]').click(e=>{ var t=$($(e.target).attr('href')); if(t.length){
 e.preventDefault(); $('html,body').animate({scrollTop:t.offset().top-70},
 500);} });
 });