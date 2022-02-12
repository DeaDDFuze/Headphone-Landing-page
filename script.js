let article = document.getElementById("promo");
let promo = document.getElementById("promoCode");

article.addEventListener( 'mouseover', function(e){
promo.style.opacity = "1"
} );
article.addEventListener('mouseout' , function(e){
    promo.style.opacity = "0"
});

promo.addEventListener( 'mouseover', function(e){
    promo.style.opacity = "1"
    promo.style.transform = "scale(90%)"
    } );
promo.addEventListener( 'mouseout', function(e){
    promo.style.opacity = "0"
    promo.style.transform = "scale(70%)"
    } );

