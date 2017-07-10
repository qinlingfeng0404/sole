var swiperH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    paginationClickable: true,
    spaceBetween: 50,

    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
    }, 
    onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
});
var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination-v',
    paginationClickable: true,
    direction: 'vertical',
    spaceBetween: 50,
 
    onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
});
(function(){
    var oMu = document.getElementsByClassName('music')[0];
    var oMus = document.getElementById('omus');
    var oI = 1;
    oMus.play();
    oMu.onclick = function(){
        oI++;
        if(oI%2 == 0){
            oMu.className = 'music iconfont';
            oMus.load();
        }else{
            oMu.className = 'music rotate iconfont';
            oMus.play();
        }
    }
})();