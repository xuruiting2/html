/**
 * Created by Lenovo on 2019/8/8.
 */
$(function(){
    $(".carousel").carousel();//给轮播图最外边的最大的外包设置轮播图开始函数
    $(".an").click(function(){
        $("#tc").css({top:"13%"});
    })
});
$(function(){
    $("#jum5 .main > div").hover(
        function(){
            $(this).find("h3").animate({top:"40%"},300);
        },
        function(){
            $(this).find("h3").animate({top:"-50%"},200)
        })
});
$(function(){
    $(".body_right").css({display:"none"});
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st>0){
            $(".body_right").css({display:"block"})
        }
        else {
            $(".body_right").css({display:"none"})
        }
    })
});
$(function(){
    var h = $(window).height();
    var w = $(window).width();
    $(".arrow-wrap").css({width:w,height:h})
});
$(function(){
    var v1 = $(".luo-wrap .img0");//要隐藏的图片
    var v2;//要显示的图片
    $(".arrow-right").click(function(e){
        $(".arrow-left").css({display:"block"})
        var v1 = $(".img0");//要隐藏的图片
        var v2;//要显示的图片
        v2=v1.next();
        v1.animate({opacity:"0"},1000,function(){
            v1.removeClass("img0")
        });
        v2.animate({opacity:"1"},1000,function(){
            v2.addClass("img0")
        })
        var b = $(".img0").index();
        $(".arrow-text").find("span").text(b+2);
        if(b == 10){
            $(".arrow-right").css({display:"none"})
        }
    });
    $(".arrow-left").click(function(e){
        var v1 = $(".img0");//要隐藏的图片
        var v2;//要显示的图片
        $(".arrow-right").css({display:"block"})
        v2=v1.prev();
        v1.animate({opacity:"0"},1000,function(){
            v1.removeClass("img0")
        });
        v2.animate({opacity:"1"},1000,function(){
            v2.addClass("img0")
        });
        var b = $(".img0").prev().index();
        $(".arrow-text").find("span").text(b+1);
        if(b == 0){
            $(".arrow-left").css({display:"none"})
        }
    });
    $(".arrow-close").on("click",1000,function(){
        $(".arrow-wrap").css({zIndex:"0"}).animate({opacity:"0"});
    });
    $("#jum5 .main div").on("click",function(e){
        $(".arrow-wrap").css({zIndex:"1000"}).animate({opacity:"1"},1000);
    })
});


//调滚动条开始
$(function(){
    var h = $(window).height();
    $(".index-wrap").height(h);
    var h0 = $("#jum1").innerHeight();
    var h1 = $("#jum2").innerHeight();
    var h2 = $("#jum3").innerHeight();
    var h3 = $("#jum4").innerHeight();
    var h4= $("#jum5").innerHeight();
    var h5 = $(".form").innerHeight();
    $("#dj2").click(function(){
        $(".index-wrap").animate({scrollTop:h0+"px"},600);
        //alert(h0)
    })
});
//调滚动条结束

