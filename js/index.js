
$(function () {
    var cacheQuery = null;
    var mySwiper = new Swiper ('.container1', {
      direction: 'vertical',  
      onTouchMove:function (mySwiper) {
        var index = mySwiper.activeIndex
        $(mySwiper.slides).each(function (i,v) {
          if (i!==index) {
            $(v).find('.once').hide()
          }
        })
      }, 
      onSlideChangeStart: function (mySwiper) {
            var index = mySwiper.activeIndex
            cacheQuery = $(mySwiper.slides[index]).find('.once')
            cacheQuery.hide()
        },
        onSlideChangeEnd: function (mySwiper) {
            cacheQuery.show()
        }
    })     
    // 音乐
    $('.music img').click(function () {
      if ($(this).hasClass('animateRotating')) {
        $(this).removeClass('animateRotating')
        $('#mp3').get(0).pause()
      }else{
        $(this).addClass('animateRotating')
        $('#mp3').get(0).play()
      }
    })  
  })
  
