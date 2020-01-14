$("document").ready(function(){
            var $popup = $(".popup"),
                $popup_btn = $(".popup .popup-content img");
            $popup_btn.click(function() {
                $popup.slideUp();               
            
            })
    
    var $tab_shuttle = $(".main-wrap .main-content .main-shuttle"),
            $tab_singleticket = $(".main-wrap .main-content .main-singleticket"),
            $tab_freedom = $(".main-wrap .main-content .main-freedom"),
            $tab_list = $(".main-wrap .main-content .main-text .tabs li");
            
            $tab_shuttle.eq(0).show();
     
     
        var tab_content = [$tab_shuttle, $tab_singleticket, $tab_freedom];
     
        $tab_list.click(function(){
        var h = $(this).index();
            $tab_shuttle.hide();
            $tab_freedom.hide();
            $tab_singleticket.hide();
            tab_content[h].show();
        $tab_list.removeClass("active").eq(h).addClass("active")
            
        })
    
    $(window).resize(function(){
    if($(window).width() > 640){
     var p = 0;
            
        $(".event .event-content").click(function(){
            var q = $(".event .event-content .eventarrow img").index(this);
            
            if(q == 0){
                p--;
                if(p < 0)p = 2;
            }else{
                p++;
                if(p > 2) p = 0;
            }
            $(".event .event-content .event-box").hide().eq(p).show();
        })
    } else{
        $(".event .event-content .event-box").show();
    }
    });
    
     var ch = 0;
            
        $(".bottom .travel .travel-content").click(function(){
            var i = $(".bottom .travel .travel-content .arrow img").index(this);
            
            if(i == 0){
                ch--;
                if(ch < 0)ch = 2;
                
            }else{
                ch++;
                if(ch > 2) ch = 0;
                
            }
            $(".bottom .travel .travel-content .travel-box").hide().eq(ch).show();
        })
        
  $(window).scroll(function(){
    var current = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
    $(".indicator").width(current + "%")
  })  
})
    

