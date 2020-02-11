document.addEventListener('DOMContentLoaded',function(){
    //main_menu 스크롤하면
    var $window = window,
        $body = document.querySelector('body'),
        $header = document.querySelector('.main_menu'),
        $headerClone = $header.innerHTML,
        $headerCloneContainer = document.createElement('div'),
        $threshod= $header.offsetTop + $header.offsetHeight;
        
        $headerCloneContainer.classList.add('main_menu_clone');
        $headerCloneContainer.innerHTML = $headerClone;
        $body.appendChild($headerCloneContainer);

        $window.addEventListener('scroll',function(){
            if ($window.pageYOffset > $threshod) {
                $headerCloneContainer.classList.add('visible');
            } else {
                $headerCloneContainer.classList.remove('visible');
            }

        }); //윈도우에 스크롤이 생기면 할 일



    //nav에 마우스 올리면 그것만 op:1 나머지는 0.5;
    var mainMenuList = document.querySelectorAll('.main_menu_wrap li');

        for(var i = 0; i<mainMenuList.length; i++){
            mainMenuList[i].addEventListener('mouseover', function(){
                for(var a = 0; a <mainMenuList.length; a++){
                    mainMenuList[a].style.opacity='0.5';
                }
                this.style.opacity=1;
            }); //mouse를 올리면 할일.
            mainMenuList[i].addEventListener('mouseleave', function(){
                for(var a = 0; a <mainMenuList.length; a++){
                    mainMenuList[a].style.opacity=1;
                }
            }); //mouse가 떠나면 할일.
        }

    //mainmenu toggle
    var $toggleBtn = document.querySelector('.hamburger-button'),
        $nav = document.querySelector('nav'),
        $innerBar = document.querySelector('.inner_bar'),
        $innerNav = document.querySelectorAll('.inner_nav > ul > li'),
        $innerPlus = document.querySelectorAll('.innner_add ul li'),
        $mainMenuClone = document.querySelector('.main_menu_clone');

        $toggleBtn.addEventListener('click',function(e){
            e.preventDefault;
            this.classList.toggle('active');
            $innerBar.classList.toggle('open');
            $nav.classList.toggle('active');

            for(var i =0; i<$innerNav.length; i++){
                $innerNav[i].classList.toggle('open');
            }
            for(var a =0; a<$innerPlus.length; a++){
                $innerPlus[a].classList.toggle('open');
            }
            if(this.classList.contains('active')){
                $mainMenuClone.style.display='none';
            }else{
                $mainMenuClone.style.display='flex';
            }

        });// toggleBtn을 누르면 할일.
        

    //news
    if(document.querySelectorAll('.slide_wrapper').length){
        var $slideWrap = document.querySelector('.slide_wrapper'), 
        $slides = document.querySelector('.slides'),
        $slide = document.querySelectorAll('.slides li'),
        currentIdx = 0,
        slideCount = $slide.length,
        slideWidth = 410,
        slideMargin = 70,
        
        // prevBtn = document.querySelector('.s_prev'),
        // nextBtn = document.querySelector('.s_next'),
        movetimer = undefined,
        $pagerBar = document.querySelector('.pager_bar'),
        $pagerBarInner = document.querySelector('.pager_bar_inner'),
        $pagerWidth = $pagerBar.offsetWidth / slideCount;
        $pagerlendth = [];
        

    $slides.style.width = (slideWidth+slideMargin)*slideCount -slideMargin +'px';
    var $item = document.querySelectorAll('.description .items');
        for(var i = 1; i <= slideCount; i++){
            $pagerlendth.push( $pagerWidth * i);
        }
        console.log($pagerlendth);
        function moveSlide(num){
            $slides.style.left= -num * 480 + 'px'; 
            for(var y =0; y <$slide.length; y++){
                $slide[y].classList.remove('active');
            }
            $slide[num].classList.add('active');
            $pagerBarInner.style.width = $pagerlendth[num] + 'px';
            for(var y =0; y <$item.length; y++){
                $item[y].classList.remove('active');
            }
            $item[num].classList.add('active');
            currentIdx = num;
        };
        moveSlide(0);
  
        function startAutoSlide(){
            movetimer = setInterval(function(){
                var $nextNum = (currentIdx+1)%slideCount;
                moveSlide($nextNum);
            },4000)
        }
        function stopAutoSlide(){
            clearInterval(movetimer);
        }
        startAutoSlide();

        $slideWrap.addEventListener('mouseenter',function(){
            stopAutoSlide();
        }); // 마우스가 들어오면 할 일

        $slideWrap.addEventListener('mouseleave',function(){
            startAutoSlide();
        }); // 마우스가 떠나면 할 일
    
    //news의 item을 클릭하면 슬라이드 이동
    for(var x=0; x < $item.length; x++){
        $item[x].addEventListener('click',function(event){
            
            var itemNum =event.currentTarget.getAttribute('data-num');
            console.log(itemNum);
            moveSlide(itemNum);
            stopAutoSlide();
        });
    }
    } //if문 

    var $site = document.querySelector('.site'),
        $dropbox = document.querySelector('.dropbox');


        $site.addEventListener('click',function(e){
            e.preventDefault();
            // $dropbox.slideDown();
            this.classList.toggle('active');
            // if($site.classList.contains('active')== true){
            //     $dropbox.slideDown();
            // }else{
            //     $dropbox.slideUp();
            // }
        }); //자회사 클릭하면 할 일


    

    // product_menu-bar
    var $productItems = document.querySelectorAll('.product_bar li'),
        $highlight = document.querySelector('.highlight');

        for(var i =0; i <$productItems.length;i++ ){
            $productItems[i].addEventListener('click',function(e){  
                e.preventDefault();
                var targetLeft = this.offsetLeft;
                $highlight.style.left = targetLeft +'px';
                for(var i =0; i < $productItems.length; i++){
                    $productItems[i].classList.remove('active');
                }
                this.classList.add('active');
            }); //클릭하면 생기는 일
        }

        //customer accordian
        var moreBtn = document.querySelectorAll('.cus_icon'),
            moreText = document.querySelectorAll('.cus_textarea');

        for(var a =0; a < moreBtn.length; a++){
            moreBtn[a].addEventListener('click', function(event){
                // for(var i = 0 ; i < moreText.length; i++){
                //     moreText[i].classList.remove('active');
                // }
                console.log(this.parentElement.nextElementSibling);
                this.classList.toggle('active');
                this.parentElement.nextElementSibling.classList.toggle('active');
            }); //moreBtn을 클릭하면 할 일!
        } 
        

    //HISTORY 스크롤
    if(document.querySelectorAll('main .history').length){
    var $history = document.querySelector('main .history'),
        $historyTitle = document.querySelector('.his_tt'),
        $historyWrap = document.querySelector('.his-slides'),
        $hisProgress = document.querySelector('.h_progress'),
        $historyOffset = $history.offsetTop,
        scrollAmount = window.pageYOffset;
    
        window.addEventListener('scroll',function(){
            scrollAmount = window.pageYOffset;
            if(scrollAmount > $historyOffset){
                $hisProgress.classList.add('scroll');
            }else{
                $hisProgress.classList.remove('scroll');
            }

        }); //윈도우에 스크롤하면 할 일 
    
    //form validation
    if($('.input_set').length){
        $('.input_set').validate({
            rules:{
                username:{
                    required:true,
                    minlength:2
                }
            },
            messages:{
                username:{
                    required:'이름을 필수입니다.',
                    minlength:'2글자 이상 입력하세요.'
                }
            }
    
        });
    }
    


        // fullpage customization
    $('.fullpage').fullpage({
        sectionSelector: '.vertical-scrolling', //각각의 화면단위 지정.
        navigation: true,
        slidesNavigation: true,
        css3: true,
        controlArrows: false,
        v2compatible: true,
        afterLoad: function(anchorLink, index){
            console.log("after Load  " + index);
            var $header = document.querySelector('.main_menu');
            deleteLog = true;
            if(index != 1){
                $header.style.display='none';
                $('.h_progress').addClass('scroll');
            }else{
                $header.style.display='flex';
                $('.h_progress').removeClass('scroll');
            }
        }
      }); 
    }


    //   지도구현
    function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

}); //document ready

  
    
    
  