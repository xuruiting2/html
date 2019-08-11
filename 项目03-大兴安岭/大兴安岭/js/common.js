/**
 * Created by 刘艳东 on 19-7-29.
 */


$(function(){
    //special column
    $("#spacialColumn-header-nav #left-nav li a,#spacialColumn-header-nav #right-nav li .other").hover(
        function(){
            $(this).css({color:"#b8b8b8"})
        },
        function(){
            $(this).css({color:"white"});
        }
    );
    $("#spacialColumn-header-nav #right-nav li #login,#spacialColumn-header-nav #right-nav li #register").hover(
        function(){
            $(this).css({textDecoration:"underline"})
        },
        function(){
            $(this).css({textDecoration:""});
        }
    );
    $("#spacialColumn-main #main-nav li").hover(
        function(){
            $(this).css({backgroundColor:"green",transition:"all ease 2s"});
            //$("#spacialColumn-main #main-nav li a p").css({})
        },
        function(){
            $(this).css({backgroundColor:"",transition:""});
        }
    );
    $("#spacialColumn-main #main-nav li").hover(function(){
       $(this).find("i").css({transform:"rotateY(360deg)"})
    },
        function(){
            $(this).find("i").css({transform:"rotateY(0deg)"})
        }
    );
    $("#position a").hover(function(){
        $(this).css({textDecoration:"underline"})
    },
        function(){
            $(this).css({textDecoration:""})
        }
    );
    $("#special .ago").hover(function(){
        $("#spacialColumn-main .main .out-another").css({display:"block"});
        $("#spacialColumn-main .main .out").css({display:"none"});
        $("#special .ago").css({backgroundColor:"green",transition:"all 1s ease"});
        $("#special .ago a").css({color:"white"});
        $("#special .new").css({backgroundColor:"#e8e8e8"});
        $("#special .new a").css({color:"black"});
        });
    $("#special .new").hover(function(){
        $("#spacialColumn-main .main .out-another").css({display:"none"});
        $("#spacialColumn-main .main .out").css({display:"block"});
        $("#special .ago").css({backgroundColor:"#e8e8e8"});
        $("#special .ago a").css({color:"black"});
        $("#special .new").css({backgroundColor:"green",transition:"all 1s ease"});
        $("#special .new a").css({color:"white"});
    });
    $(".main .out div,.main .out-another div").hover(function(){
        $(this).css({boxShadow:"1px 1px 10px #949494,-1px -1px 10px #949494",transition:"all 1s ease",borderRadius:"10px"})
    },
        function(){
            $(this).css({boxShadow:""})
        }
    );
    $("#spacialColumn-main .main .out-another a").hover(function(){
        $(this).css({color:"red"})
    },
        function(){
            $(this).css({color:""})
        }
    );

    //counter fire
    $("#fire-header #fire-nav li").hover(function(){
        $(this).css({backgroundColor:"red"})
    },
        function(){
            $(this).css({backgroundColor:""})
        }
    );
    $("#fire-main .box .title a,#fire-main .box .more a,#fire-main .box h3 a").hover(function(){
            $(this).css({textDecoration:"underline"})
    },
        function(){
            $(this).css({textDecoration:""})
        }
    );
    $("#fire-main .box ul li a,#fire-main .box .forecast li p a,#fire-footer .fire-footer-nav li a,#fire-footer p a,.fire-wrap .welcome p span a").hover(function(){
        $(this).css({textDecoration:"underline",color:"red"})
    },
        function(){
            $(this).css({textDecoration:"",color:""})
        }
    );



    //enterpriseRelatedInformation
        //涉企信息目录
    $("#enterpriseRelate .catalog ul li").hover(function(){
           /* $(this).css({backgroundColor:"#77c37c"},function(){
                $(this).find("a").css({backgroundPosition:"0px -320px",color:"white",backgroundColor:"#77c37c"})
            });*/
            /*$("#enterpriseRelate .catalog ul li a").eq(0).css({backgroundPosition:"0px 0px"});*/
            $(this).css({backgroundColor:"#77c37c"});
            $(this).children().css({color:"white",backgroundColor:"#77c37c"})
    },
        function(){
            $(this).css({backgroundColor:""});
            $(this).children().css({color:"",backgroundColor:""})
        }
    );
    $("#enterpriseRelate .catalog ul li a").hover(function(){
            $(this).css({backgroundColor:"#77c37c",backgroundImage:"url('img/catalog-icon2.png')",transition:"all 1s ease"});
    },
        function(){
            $(this).css({backgroundColor:"",backgroundImage:"",transition:""});
        }
    );
    //涉企信息
    $(function(){
      $("#spacialColumn-main .main .list ul li a").mouseover(function(){
          $(this).css({textDecoration:"underline",color:"red"})
      });
      $("#spacialColumn-main .main .list ul li a").mouseout(function(){
                $(this).css({textDecoration:"",color:""})
      })
    });
    $("#spacialColumn-main .main .list .page ol li").mouseover(function(){
        $(this).not("#spacialColumn-main .main .list .page ol .not").css({border:"1px solid green"});
            $(this).children().css({color:"blue"})
    });
    $("#spacialColumn-main .main .list .page ol li").mouseout(function(){
        $(this).not("#spacialColumn-main .main .list .page ol .not").css({border:""});
        $(this).children().css({color:""})
    });

    //侧栏
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#jump li:eq(4)').fadeIn(400);
        } else {
            $('#jump li:eq(4)').fadeOut(800);
        }
    });
    $("#jump #up").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            500);
        return false;
    });
});
function showEWM(){
    document.getElementById("EWM").style.display = 'block';
}
function hideEWM(){
    document.getElementById("EWM").style.display = 'none';
}/*
function showcode(){
    document.getElementById("code").style.display = 'block';
}
function hidecode(){
    document.getElementById("code").style.display = 'none';
}*/
 /*$(function(){
    document.getElementById("backTop").onclick=function(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    };
     $(window).scroll(function() {
         if ($(window).scrollTop() > 900) {
             $("#backTop").fadeIn(900);
         } else {
             $("#backTop").fadeOut(1000);
         }
     });
 });*/
