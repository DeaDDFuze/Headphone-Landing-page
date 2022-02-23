let article = document.getElementById("promo");
let promo = document.getElementById("promoCode");
let articleSet = document.getElementById("articleSet")

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


let shower = document.getElementById("Shower");
let No1 = document.getElementById("No1");
let pageArticle01 = document.getElementById("codeArticle01")

shower.addEventListener("click", function(e){
    promo.style.display = "none";
    No1.style.display = "none";
    pageArticle01.style.display = "flex";
    articleSet.style.flexDirection = "column"
    article.style.flexWrap = "wrap"
    

})