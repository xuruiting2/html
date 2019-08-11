/**
 * Created by Lenovo on 2019/7/30.
 */
$(function(){
    $(".index .yd ul li").hover(
        function(){
            var y = parseInt($(this).css("backgroundPosition-y"));
            var x = parseInt($(this).css("backgroundPosition-x"));
            $(this).css({backgroundPosition:0+"px "+ (y-937)+"px"});
    },
        function(){
            var y = parseInt($(this).css("backgroundPosition-y"));
            var x = parseInt($(this).css("backgroundPosition-x"));
            $(this).css({backgroundPosition:0+"px "+ (y+937)+"px"});
        })
    $(".yd ul li").eq(7).click(function(){
        $(".yd").css({display:"none"})
        $(".index .head_top").animate({left:"0px" ,top: "80px"},1000);
        $(".index .head_bottom").animate({left:"60%" ,top: "80px"},1000);
        $(".index .display_none").show();
        $(".index .head").animate({height:"228px"},1000);
    })
    $(".index .nav span").click(function(){
        $(".index .display_none").hide();
        $(".index .head_top").animate({left:"20%" ,top: "80px "},1000);
        $(".index .head_bottom").animate({left:"32%" ,top: "196px"},1000);
        $(".yd").show();
        $(".index .head").animate({height:"322px"},1000);
    })
    $(".index .pic_move .pic_middle .nav1 > ul >li").mouseover(function(){
        $(this).find("ul").css({display:"block"});
        $(this).siblings().find("ul").css({display:"none"});
        $(this).css({backgroundColor:"#198F21"})
        $(this).siblings().css({backgroundColor:"transparent"});
        $(this).children("a").css({color:"white"});
        $(this).siblings().children("a").css({color:"black"});
    })
});
$(function(){
     clear = setInterval("fun4()",2000)
});
var i = $(".pic_left section div").length-1;
var n = 1000;
var j  = -1;
function fun4(){
    if(i < 0){
        i = $(".pic_left section div").length-1;
        $(".pic_left section div").css({zIndex:1000});
        j  = -1;
    }
    n--;
        $(".pic_left section div").eq(i).animate({left:"460px"},1000,function(){
            $(this).css({zIndex:n});
            $(this).animate({left:"0px"},1000)
        });
        i--;
    j++;
    $(".index .pic_move .pic_left .point span").css({backgroundColor:"white",width:"9px"});
    $(".index .pic_move .pic_left .point span").eq(j).css({backgroundColor:"red",width:"13px"});
}
$(function(){
    $(".index .pic_move .pic_left .point span").on("mouseover",function(){
        clearInterval(clear);
        var s = $(this).index();
        $(".pic_left section div").eq(s).fadeIn(800);
        $(".pic_left section div").eq(s).siblings().css({display:"none"});
        $(this).css({backgroundColor:"red",width:"13px"});
        $(this).siblings().css({backgroundColor:"white",width:"9px"})
    })
})
$(function(){
    $(".index .zwgk ul li").hover(
        function(){
            var m = parseInt($(this).find("i").css("backgroundPosition-y"));
            var n = parseInt($(this).find("i").css("backgroundPosition-x"));
            $(this).find("i").css({backgroundPosition:(n-23)+"px "+m+"px"})
        },
        function(){
            var m = parseInt($(this).find("i").css("backgroundPosition-y"));
            var n = parseInt($(this).find("i").css("backgroundPosition-x"));
            $(this).find("i").css({backgroundPosition:(n+23)+"px "+m+"px"})
        })
})
$(function(){
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if( st < 500 ){
            $(".body_right ul li:nth-child(5)").css({display:"none"})
        }
        else {
            $(".body_right ul li:nth-child(5) ").css({display:"block"})
        }
    })
    $(".xxgk .middle .sfq dt").click(function(){
        $(this).next().toggle("blind",{direction:"up"},1000,function(){});
    });
    $(".dwzk .dw_bottom h2 span:first-child").click(function(){
        var i = parseInt($(".dwzk .dw_bottom p").css("fontSize"));
        $(".dwzk .dw_bottom p").css({fontSize:(i-2)+"px"})
    })
    $(".dwzk .dw_bottom h2 span:last-child").click(function(){
        var i = parseInt($(".dwzk .dw_bottom p").css("fontSize"));
        $(".dwzk .dw_bottom p").css({fontSize:(i+2)+"px"})
    })
});


//商程成开始部分
/**
 * Created by shangcc on 2019/7/28.
 */
$(function(){
    $(".zwgk_middle_zdly ul li").hover(function(){
            $(this).find("span").css({transform:"rotateY(360deg)"})

        },
        function(){
            $(this).find("span").css({transform:"rotateY(360deg)"})
        })
    $(".zwgk_middletopleft li").hover(function(){

            $(this).find("span")
                .stop(true,true).animate({width:"100%"},500)
            $(this).find("a").css({color:"white"});
            var x= $(this).find("i").css("backgroundPositionY");
            $(this).find("i").css({backgroundPositionY:parseFloat(x)-25+"px"});
        },
        function(){

            $(this).find("span")
                .stop(true,true).animate({width:"2%"},500)
            $(this).find("a").css({color:"#676767"});
            var x= $(this).find("i").css("backgroundPositionY");
            $(this).find("i").css({backgroundPositionY:parseFloat(x)+25+"px"});
        }
    )
    $(".zwgk_midmid_right .zwgk_midmid_rightlist1 ul li").hover(
        function(){
            var i=$(this).index();
            $(".zwgk_midmid_right .zwgk_midmid_rightlist1 .zwgk_midmid_riglist1text div ").css({display:"none"})
            $(".zwgk_midmid_right .zwgk_midmid_rightlist1 .zwgk_midmid_riglist1text div").eq(i).css({display:"block"})
            $(this).css({borderTop:"5px solid #247f16",borderLeft:"solid 1px #c9c9c9",
                borderRight:"solid 1px #c9c9c9",backgroundColor:"#ffffff",color:" #247f16" })
            $(this).siblings().css({borderTop:"",borderLeft:"",
                borderRight:"",backgroundColor:"" })
        }
    )
    $(".zwgk_midmid_right .zwgk_midmid_rightlist2 ul li").hover(
        function(){
            var i=$(this).index();
            $(".zwgk_midmid_right .zwgk_midmid_rightlist2 .zwgk_midmid_riglist2text div ").css({display:"none"})
            $(".zwgk_midmid_right .zwgk_midmid_rightlist2 .zwgk_midmid_riglist2text div").eq(i).css({display:"block"})
            $(this).css({borderTop:"5px solid #247f16",borderLeft:"solid 1px #c9c9c9",
                borderRight:"solid 1px #c9c9c9",backgroundColor:"#ffffff",color:" #247f16" })
            $(this).siblings().css({borderTop:"",borderLeft:"",
                borderRight:"",backgroundColor:"" })
        }
    )
    $(".zwgk_midmid_right .zwgk_midmid_rightlist3 ul li").hover(
        function(){
            var i=$(this).index();
            $(".zwgk_midmid_right .zwgk_midmid_rightlist3 .zwgk_midmid_riglist3text div ").css({display:"none"})
            $(".zwgk_midmid_right .zwgk_midmid_rightlist3 .zwgk_midmid_riglist3text div").eq(i).css({display:"block"})
            $(this).css({borderTop:"5px solid #247f16",borderLeft:"solid 1px #c9c9c9",
                borderRight:"solid 1px #c9c9c9",backgroundColor:"#ffffff",color:" #247f16" })
            $(this).siblings().css({borderTop:"",borderLeft:"",
                borderRight:"",backgroundColor:"" })
        }
    )
    $(".zwgk_midmid_right .zwgk_midmid_rightlist4 ul li").hover(
        function(){
            var i=$(this).index();
            $(".zwgk_midmid_right .zwgk_midmid_rightlist4 .zwgk_midmid_riglist4text div ").css({display:"none"})
            $(".zwgk_midmid_right .zwgk_midmid_rightlist4 .zwgk_midmid_riglist4text div").eq(i).css({display:"block"})
            $(this).css({borderTop:"5px solid #247f16",borderLeft:"solid 1px #c9c9c9",
                borderRight:"solid 1px #c9c9c9",backgroundColor:"#ffffff",color:" #247f16" })
            $(this).siblings().css({borderTop:"",borderLeft:"",
                borderRight:"",backgroundColor:"" })
        }
    )
    $(".zwgk_middle_bot .zwgk_middle_botnav li").hover(
        function(){
            var i=$(this).index();
            $(".zwgk_middle_bot .zwgk_middle_botlist div ").css({display:"none"})
            $(".zwgk_middle_bot .zwgk_middle_botlist div").eq(i).css({display:"block"})
            $(this).css({backgroundColor:"#1b9023" })
            $(this).find("a").css({color:" white"})
            $(this).siblings().css({borderTop:"",borderLeft:"",
                borderRight:"",backgroundColor:"" })
            $(".zwgk_middle_bot .zwgk_middle_botnav li a").sibling().css({color:"black"})
        }
        ,function(){
            $(".zwgk_middle_bot .zwgk_middle_botnav li a").css({color:"black"})
        }
    )


})
$(function(){
    $(".zwgk_qzqd_wrap .zwgk_qzqd_left .bd ul li").hover(function(){
            $(this).css({backgroundColor:"#198F21"})
            $(this).find("a").css({color:"white"},500)
        },
        function(){
            $(".zwgk_qzqd_wrap .zwgk_qzqd_left .bd ul li").css({backgroundColor:""})
            $(".zwgk_qzqd_wrap .zwgk_qzqd_left .bd ul li").eq(0).css({backgroundColor:"#198F21"})
            $(this).find("a").css({color:""},500)
        }
    );
});
$(function(){
    $(".bsfw_wrap .bsfw_middli_title span:first-child").click(function(){
        var a= parseInt($(".bsfw_wrap .bsfw_middli_text").css("fontSize"));
        $(".bsfw_wrap .bsfw_middli_text").css({fontSize:(a-3)+"px"})
        var b= parseInt($(".bsfw_wrap .bsfw_middli_text").css("lineHeight"));
        $(".bsfw_wrap .bsfw_middli_text").css({lineHeight:(a-3)+"px"})
    })
    $(".bsfw_wrap .bsfw_middli_title span:last-child").click(function(){
        var a= parseInt($(".bsfw_wrap .bsfw_middli_text").css("fontSize"));
        $(".bsfw_wrap .bsfw_middli_text").css({fontSize:(a+3)+"px"})
        var b= parseInt($(".bsfw_wrap .bsfw_middli_text").css("lineHeight"));
        $(".bsfw_wrap .bsfw_middli_text").css({lineHeight:(a+3)+"px"})
    })
})
//商程成结束部分

//李明燕开始的部分

$(function(){
    $(".map .content .aside ul li").click(
        function(){
            var i=$(this).index();
            $(".map .contain").css({display:"none"});
            $(".map .content .aside ul li").css({backgroundColor:"#e8e8e8"})
            $(".map .content .aside ul li").children().css({color:"#666"})
            $(".map .content .aside ul li").eq(i).css({backgroundColor:"#198f21"})
            $(".map .content .aside ul li").eq(i).children().css({color:"white",fontSize:"18px"})
            $(".contain").eq(i).css({display:"block"})
        }
    )
    $(".map .content .maincontain .contain4 li").hover(
        function(){
            $(this).find(".title").height(80)
        },
        function(){
            $(this).find(".title").height(50)
        }
    )
    $(".rwxa .content .video a").hover(
        function(){
            $(".rwxa .content .video img").css({opacity:"0.8"})
        },
        function(){
            $(".rwxa .content .video img").css({opacity:"1"})
        }
    )
    $(".rwxa .content .part2 ul li a").hover(function(){
            $(this).css({color:"green",fontSize:"20px"})
        },
        function(){
            $(this).css({color:"",fontSize:""})
        })
    var i=0;
    var time=setInterval(function(){
        i++;
        if(i<8){
            $(".rwxa  #list .photo").animate({marginLeft:(-i*400)+"px"},1000);
        }
        else {
            i=0;
        }
    },2000)
    var j=0;
    $(".rwxa  #list .next").click(
        function(){
            clearInterval(time);
            if(j<8) {
                j++;
                $(".rwxa  #list .photo").css({marginLeft:-400*j+"px"})
            }
            else {
                j=0;
                j++;
                $(".rwxa  #list .photo").css({marginLeft:-400*j+"px"})
            }

        }
    )
    var z=8;
    $(".rwxa  #list .pre").click(
        function(){
            clearInterval(time);
            if(z>0) {
                z--;
                $(".rwxa  #list .photo").css({marginLeft:-400*z+"px"})
            }
            else {
                z=8;
                z--;
                $(".rwxa  #list .photo").css({marginLeft:-400*z+"px"})
            }

        }
    )
})
//李明燕结束

//高迈开始

/**
* Created by gm229 on 2019/7/31.
*/
$(function(){
    $(".zc-foot button").click(function(){
        var v=$(".zc-bd1").val();
        $(".zc-bd dl dd span").eq(0).text("*")
        if(v==""){
            $(".zc-bd dl dd span").eq(v).text("用户名不能为空")
        }
        else if(v.length<5|| v.length>20){
            $(".zc-bd dl dd span").eq(0).text("用户名必须满足5到20位")
        }
    })
})
$(function(){
    $(".zc-main .zc-bd dl .xy a").on("click",function(){
        $(".zc-main .zc-bd .zc-fwtk").toggle({display:"block"})
        $(".zc-main .zc-right").css({height:"978px"})
    })
    $(".zc-main .zc-bd dl .xy input").on("click",function(){
        $(".zc-main .zc-bd .zc-fwtk").toggle({display:"none"})
        $(".zc-main .zc-right").css({height:""})
    })
})

$(function() {
    setInterval("ggn()", 4000)
})
function ggn(){
    var  v1=$(".xayw-box1 .text")//
    var  v2;//
    if(v1.next().length==0){
        v2=$(".xayw-box1 img:first")
    }
    else{
        v2=v1.next()
    }
    var i=v2.index()
    v1.animate({opacity:0},1000,function(){
        v1.removeClass("text")
    })
    v2.animate({opacity:1},1000,function(){
        v2.addClass("text")
    })
    $(".xayw-box ul li").css({backgroundColor:"#5fa856"})
    $(".xayw-box ul li").eq(i).css({backgroundColor:"#a8a84b"})
}
$(function(){
    $(".xwdt-first ul  h3").click(function(){
        $("ul .xayw").css({display:"none"});
        $(this).next().css({display:"block"})
    })
})
$(function(){
    $(".xwdt-third ul li").hover(function() {
        var v=$(this).index()
        $(".xwdt-third ul li div").eq(v).css({height:"100px",bottom:"13px"});
    }, function() {
        $(".xwdt-third ul li div").css({height:"",bottom:""});
    });
})
$(function(){
    $(".dl-foot button").click(function(){
        var x=$(".zc-bd1").val();
        $(".dl-bd dl dd span").eq(0).text("*")
        if(x==""){
            $(".dl-bd dl dd span").eq(x).text("用户名不能为空")
        }
        else if(x.length<5|| x.length>20){
            $(".dl-bd dl dd span").eq(0).text("用户名必须满足5-20位")
        }
    })
})
//高迈结束


//梁月开始

$(function () {

    zmhdFun();
    robotFun();
    letterFun();
    findFun();

    function zmhdFun(){
        $(".zmhd .picdiv li").hover(function () {
            $(this).find("span").stop().animate({top:"10px"}, 100).animate({top:"30px"}, 100).animate({top:"20px"}, 100);
        }, function () {
            $(this).find("span").stop();
        });
        var offset = 0;
        var timer;
        function play() {
            timer = setInterval(function () {
                offset -= 5;
                if(offset <= -1200) offset = 0;
                $(".zmhd .lunboBox ul").css({marginLeft:offset});
            },30);
        }
        play();
        $(".zmhd .lunboBox ul li").hover(function () {
            clearInterval(timer);
            $(this).siblings().fadeTo(100,0.5);
            $(this).fadeTo(100,1);
        }, function () {
            play();
            $(".zmhd .lunboBox ul li").fadeTo(100, 1);
        })

    }
    function robotFun(){
        $(".robot .menu1 li").mouseenter(function () {
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            var index = $(this).index();
            $(".robot .list2").find("ul").eq(index).siblings().removeClass("show");
            $(".robot .list2").find("ul").eq(index).addClass("show");
        });
        $(".robot .input input").on("input propertychange", function () {
            $(".robot .btn strong").html(40-$(this).val().length);
        })
    }
    function letterFun() {
        var timer = $(function () {
            var count = 3;
            var timer = setInterval(function () {
                count --;
                if(count == 0){
                    clearInterval(timer);
                    $(".letter .count").html("同意并进入下一步");
                }
                $(".letter .count span").html(count);
            }, 1000);
        })
    }

    function findFun() {
        var i = 1;
        $(".find .testImg").click(function () {
            i++;
            if(i==4) i=1;
            $(this).attr("src","images/yanzheng0"+i+".gif");
        });
        var reg = /^\d{11}$/;
        $(".find .box a").click(function () {
            console.log($(".find .box .number").val());
            var a = reg.test($(".find .box .number").val())
            if(!a){
                $(".find .box .jg").html("请输入11位数字");
            } else {
                $(".find .box .jg").html("");
            }
        });
    }


});
//梁月结束

//王开运js开始
//        $(".fw_list_2 .fw_scroll tr").carousel();
var spggnowMarginTop=0;
function spggmovebox(){
    spggnowMarginTop = spggnowMarginTop-1;
    if(spggnowMarginTop>-60){
        spggfatherbox.style.marginTop = spggnowMarginTop+"px";
    }else{
        spggfatherbox.style.marginTop = "0px";
        spggnowMarginTop = 0;
        var spggcopytext = spggfatherbox.getElementsByTagName("tr")[0].cloneNode(true);
        spggfatherbox.deleteRow(0);
        spggfatherbox.getElementsByTagName("tbody")[0].appendChild(spggcopytext);
    }
}
function spggscrollbox(){
    spggfatherbox = document.getElementById("spgglist");
    spggfatherbox.style.height = spggfatherbox.childNodes.length*60+"px";
    spggscrolling = setInterval(spggmovebox,100);
}
function spggstopscroll(){
    clearInterval(spggscrolling);
}
$(function(){
    $(".fw_con1 li").hover(
        function(){
            $(this).find(".fw_con2").css({display:"block"});
        },
        function(){
            $(this).find(".fw_con2").css({display:"none"});
        }
    )
})


$(function(){
    $(".bszn_allfont ").hover(
        function(){
            $(this).find("span").css({backgroundColor:"blue"});
        },
        function() {
            $(this).find("span").css({backgroundColor:""});
        }
    )
})
$(function(){
    $(".bszn_ul li a").hover(
        function(){
            $(this).find("div").css({display:"block"})
        },
        function(){
            $(this).find("div").css({display:""})
        }
    )
})
//王开运js结束
