$(document).ready(function() {
    //时间获取
    let startDate = new Date(2020, 1, 7); //日期
    setInterval(function() {
        let t = new Date() - startDate;
        let d = Math.floor(t / (60 * 60 * 24 * 1000))
        let h = Math.floor(t / (60 * 60 * 1000)) % 24
        let m = Math.floor(t / (60 * 1000)) % 60
        let s = Math.floor(t / 1000) % 60
        $('.timeDay').text(d)
        $('.timeHour').text(h)
        $('.timeMinute').text(m)
        $('.timeSecond').text(s)
    }, 1000)
    //动画
    //背景出现
    $(".background img").animate({
        opacity: 1
    }, 2000, function() {
        let i = 1;
        $(".title>div").each(function(index) {
            let that = this;
            $(that).animate({
                opacity: 1,
                top: '-=26px'
            }, i++ * 100);
        });
        $(".form").animate({
            opacity: 1,
            top: '+=10px'
        }, 300);

    });

    $("input.content").focus(function() {
        console.log(1)
        $(".text").animate({
            display:'block',
            opacity: 1,
            zIndex:10,
        }, 200);

    });

    $("input.content").blur(function() {
        $(".text").animate({
            display:'none',
            opacity: 0,
            zIndex: -10
        }, 200);
    });

    $(".text li").each(function() {
        let value = $(this)[0].innerHTML;
        $(this).click(function() {
            $(".content").val(value);
        })
    });

    //ajax
    $(".button").click(function() {
      modelShow("功能维护中哟");
        // $.ajax({
        //     url: "/shallow/sendmsg",
        //     type: 'POST',
        //     dataType: 'JSON',
        //     data: {
        //         content: $(".content").val()
        //     },
        //     success: function(data) {
        //         if (data.flag) {
        //             // alert('发送成功');
        //             modelShow("发送成功");
        //             //清空文本
        //             $(".content").val("")
        //         }
        //     },
        //     error: function(data, err) {
        //         modelShow("请求失败"+err);
        //         console.log('请求发送失败,ERROR:' + err);
        //     }
        // })
    });

    $(".model .x").click(function() {
        $('.model-panel').animate({
            opacity: 0,
            zIndex: -100
        }, 100)
    });
    let modelShow = function(msg) {
        $(".model-panel .model .msg").text(msg);
        $('.model-panel').animate({
            opacity: 1,
            zIndex: 999
        }, 200, function() {
            setTimeout(function() {
                $('.model-panel').animate({
                    opacity: 0,
                    zIndex: -100
                }, 200)
            }, 2000);
        })
    }


})
