/**
 * Created by wuqq on 2016/8/11.
 */
    //index选项卡
    $(document).ready(function(){
        $('#box').find('li').hover(function(){
           // console.log($('#box').find('a'));
            $('.lunboBox').eq($(this).index()).addClass('active');
            $('.lunboBox').eq($(this).index()).siblings().removeClass('active');
           // console.log($('.lunboBox').eq($(this).index()).siblings())
            //$('.ac-line').eq($(this).index()).addClass('active');
            //$('.ac-line').eq($(this).index()).parent().siblings().find('.ac-line').removeClass('active');
            $('.ac-line').removeClass('active');
            $('.ac-line').eq($(this).index()).addClass('active');
        });

        //放小图的时候 让在大图的位置显示
        $('.lunbo-smPic').hover(function(){
            var url=$(this).attr("src");
            var url1=$('.lunbo-bigPic').attr("src");
           // console.log(url);

            if($('.lunbo-smPic')){
                $('.lunbo-bigPic').attr('src',url);
            }
            else if($('#box').find('li')){
                $('.lunbo-bigPic').attr('src',url1);
            }



        });

        //$('#box').find('li').hover(function(){
        //    var url1=$('.lunbo-bigPic').attr("src");
        //    $('.lunbo-bigPic').attr('src',url1);
        //}

        $('#header-ul').find('li').hover(function(){
            $('.header-line').removeClass('active');
            $('.header-line').eq($(this).index()).addClass('active');
        //    console.log( $('header-line').eq($(this).index()).parent().parent().siblings().find('.header-line'))
        //    $('header-line').eq($(this).index()).parent().parent().siblings().find('.header-line').removeClass('active');
        })

    //播放视频切换
        $('.sm-img').click(function(){
            $('source').attr('src',$(this).next().text());
            $('#vidioPlay')[0].load();
            //$('#vidioPlay')[0].play();
        });
    });


    //物流旋转图
        window.onload=function(){
            var oUl=document.getElementById('rotateImg');
            var aLi=oUl.getElementsByTagName('li');
            var aImg=oUl.getElementsByTagName('img');

            var rotate=50;

                for(var i=0;i<aImg.length;i++){
                    var angle=rotate*i;
                    var time=i;
                    aLi[i].style.transform='rotate('+angle+'deg)';
                    aImg[i].style.transform='rotate(-'+angle+'deg)';
                    aLi[i].style.transition=time+'s';
                    aImg[i].style.transition=time+'s';
                    //aLi[i].style.animationDelay=0.5*i+'s';
                    //aImg[i].style.animationDelay=0.5*i+'s';

            }

        }



