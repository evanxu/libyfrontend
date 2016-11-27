//用户中心左侧导航。根据页面添加hover
$(function(){
  var url = location.href.split('/');
  var page = url[url.length - 1].split('-')[0];
  $('#J-catalogMarket').find('dd[rel="' + page + '"] a').addClass('curr');
});


//访问首页时，显示导航分类
$(function(){
	if(location.href.indexOf('homepage') > 0 || /[^html]$/.test(location.href)){
		$('.nav-subnav').show();
	}
});



//手机页面，显示导航头及搜索等
//for demo, will be delete while dev
$(function(){
  if($('body').width() > 540){
    return;
  };

  if(location.href.indexOf('account') > 0){
    $('.header-mobile').hide();
    $('.content').css('margin-top', '-0.5rem');
  }else if(location.href.indexOf('homepage') > 0 || /[^html]$/.test(location.href)){
    $('.header-mobile-search').show();
    $('.header-mobile-menu').show();
    $('.header-mobile-back').hide();
  }else{
    $('.header-mobile-search').hide();
    $('.header-mobile-menu').hide();
    $('.header-mobile-back').show();
    $('.header-mobile-title').show().text(document.title);
  };

  if(location.href.indexOf('homepage') > 0 || /[^html]$/.test(location.href)){
    $('.footer-mobile-homepage').addClass('curr').siblings().removeClass('curr');
  }


  $('.header-mobile, .footer-mobile').delay(0.5).css('transform', 'translateY(0)');
});




//定义mask/messageBox/cookie方法
//mask.show mask.hide
//messageBox.add messageBox.remove
//cookie.set cookie.get
(function(){
  var mask = {
    show: function(options){
      var id = 'libyMask',
          color = 'rgba(0,0,0,0.8)',
          zIndex = 1500;
      if(options){
        id = options.id || id;
        color = options.color || color;
        zIndex = options.zIndex || zIndex;
      }

      var mask = document.getElementById(id);

      if(!mask){
        var div = _createDom(id, {
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: color,
          zIndex: zIndex
        });
      }else{
        mask.style.background = color;
        _showDom(id);
      }
    },
    hide: function(){
      _hideDom(arguments[0] || 'libyMask');
    }
  };


  var messageBox = {
    add: function(options){

      var title = options.title || '系统提示',
          str = options.text || '开发中',
          timeout = options.time || 2000,
          color = options.color || null;

      var marginTop = '-50px';

      if(options.pic){
        marginTop = '-150px';
      }

      mask.show({
        color: color
      });

      var div = _createDom('libyMessage', {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '300px',
        marginLeft: '-150px',
        marginTop: marginTop,
        textAlign: 'center',
        color: '#fff',
        fontSize: '14px',
        zIndex: '1500'
      });

      var html = '';

      if(options.mobile){
        html += '<span style="background:rgba(0,0,0,0.8);padding:10px 15px;border-radius:5px;">' + str + '</span>';
      }else if(options.pc){
        html += '<div class="popup">';
        html += '<span class="J-popupClose" style="position:absolute;right:15px;top:10px;cursor:pointer">X</span>';
        html += '<p style="font-size:14px;padding-bottom:10px;border-bottom:1px solid #f6f6f6;text-align:left">' + title + '</p>';
        html += '<p style="padding:20px 0 10px">' + (options.pic ? '<img src="' + options.pic + '">' : str) + '</p>';
        if(!options.pic){
          html += '<p><span class="red">' + (timeout/1000) +'秒</span>窗口将后自动关闭</p>';
        }else{
          html += '<p>请使用手机扫描二维码</p>';
        }
        html +='</div>';
      }

      div.innerHTML = html
      this.setTimeout = setTimeout(this.remove, timeout);

    },
    remove: function(){
      mask.hide();

      clearTimeout(this.setTimeout);

      _clearDom('libyMessage');
    }
  };

  var cookie = {
    set: function(name,value){
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days*24*60*60*1000);
      document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    },

    get: function(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
      else
        return null;
    }
  }

  function _$(id){
    return document.getElementById(id);
  };

  function _setStyle(dom, style){
    for(var key in style){
      dom.style[key] = style[key];
    }
  };


  function _createDom(id, style){
    var dom = document.createElement('div');

    dom.id = id;

    if(style){
      _setStyle(dom, style);
    }

    document.body.appendChild(dom);

    return dom;
  };

  function _clearDom(id){
    var dom = _$(id);

    if(dom){
      document.body.removeChild(dom);
    }
  };

  function _hideDom(id){
    var dom = _$(id);

    if(dom){
      dom.style.display = 'none';
    }
  };

  function _showDom(id){
    var dom = _$(id);

    if(dom){
      dom.style.display = 'block';
    }
  };

  window.messageBox = messageBox;
  window.mask = mask;
  window.cookie = cookie;

})(window);

//没有连接的a标签，显示功能开发中
$(function(){
  $('.no-link, .nolink').on('click', function(){
    if($('body').width() < 540){
      messageBox.add({
        text: '页面或功能开发中，暂时无法展示',
        time: 2000,
        color: 'transparent',
        mobile: true
      });
    }else{
      messageBox.add({
        text: '页面或功能开发中，暂时无法展示',
        time: 2000,
        pc: true
      });
    }
  });

  $('body').on('click', '.J-popupClose, #libyMask', function(){
    messageBox.remove();
  });

  $('.J-siteNavMobile').on('click', function(){
    messageBox.add({
      title: '立构台手机版',
      pic: '/src/images/bg/mobile.png',
      time: 120000,
      pc: true
    });
  })
})





$(function(){
  var route;
  if(device == 'mobile'){
    route = {
      'product-list': {
        backPage: 'homepage'
      },
      'product-search': {
        backPage: 'homepage'
      },
      'product-detail': {
        backPage: 'product-list'
      },
      'order-cart': {
        backPage: 'account'
      },
      'order-check': {
        backPage: 'order-cart'
      },
      'order-save': {
        backPage: 'order-check'
      },
      'order-waybill': {
        backPage: 'order-save'
      },
      'order-success': {
        backPage: 'order-waybill'
      },
      'order-list': {
        backPage: 'account'
      },
      'order-detail': {
        backPage: 'order-list'
      },
      'order-delivery': {
        backPage: 'order-detail'
      },
      'wallet-status': {
        backPage: 'account'
      },
      'wallet-topup': {
        backPage: 'wallet-status'
      },
      'promotion-liby-activity': {
        backPage: 'account'
      },
      'promotion-liby-detail': {
        backPage: 'promotion-liby-activity'
      },
      'promotion-my-activity': {
        backPage: 'account'
      },
      'promotion-my-detail': {
        backPage: 'promotion-my-activity'
      },
      'promotion-add': {
        backPage: 'promotion-my-activity'
      },
      'promotion-fee': {
        backPage: 'account'
      },
      'storage-list': {
        backPage: 'account'
      },
      'store-list': {
        backPage: 'account'
      },
      'store-detail': {
        backPage: 'store-list'
      },
      'privileges-level': {
        backPage: 'account'
      },
      'privileges-detail': {
        backPage: 'privileges-level'
      },
      'data-center': {
        backPage: 'account'
      }
    }
/*
手机端后退按钮，根据当前页面文件名，设置上一页文件名
 */
    $('.header-mobile-back').on('click', function(){
      location.href = route[currPage].backPage + '.html';
    })
  }
});

 /*
  new user guide
   */
$(function(){
/*
生成guide实例，高亮对应的box，返回open & close方法
 */
  // if(device == 'mobile'){
  //   return false;
  // }

  function guideRoute($obj){

    var zIndex = 1999,
        maskId = 'howToUse',
        zIndexCurr = $obj.css('z-index'),
        position = $obj.css('position'),
        maskOpacity = 'opacityMask';

    function _open(config){
      mask.show({
        id: maskId,
        color: 'rgba(0,0,0,0.5)'
      });

      mask.show({
        id: maskOpacity,
        color: 'transparent',
        zIndex: zIndex + 1
      })

      if(position == 'static'){
        $obj.css('position', 'relative');
      }

      $obj.css('z-index', zIndex);

      if(position !== 'fixed'){
        $('html, body').delay(400).animate({
          scrollTop: $obj.offset().top - (config.offset.scroll || 100)
        });
      }else{
        if($obj.attr('class') == 'header-mobile'){
          $('#J-guideText').css({
            position: 'fixed',
            bottom: 'auto',
            right: 'auto',
            top: '0.6rem',
            left: '0.3rem'
          });
        }else{
          $('#J-guideText').css({
            position: 'fixed',
            bottom: '0.6rem',
            right: '0.2rem',
            top: 'auto',
            left: 'auto'
          });
        }
      };

      $('#J-guideText').css({
        opacity: 1,
        transform: 'translateX(-30px)'
      });

      $('#J-closeGuideMode').show();
    };

    function _close(){
      mask.hide(maskId);
      mask.hide(maskOpacity);
      $obj.css('z-index', zIndexCurr);
      $('#J-closeGuideMode').hide();
      $('#J-guideText').remove();
    }

    return ({
      open: _open,
      close: _close
    })
  }



/*
*指引,根据cookie及当前页面判断目前应该进入哪一个场景
*
*
*
*
*
*
 */
  function beginGuide(guide){
    var guideInstance,
        currGuideStep,
        currScene,
        $selector,
        img;

    currScene = cookie.get('scene');

    for(var i = 0, len = guide[currScene].route.length; i < len; i++){
      currGuideStep = guide[currScene].route[i];
      if(currGuideStep.page == currPage){
        if(currGuideStep.stay && currGuideStep.index != parseInt(cookie.get('nextIndex'))){
          continue;
        }
        currGuideStep.nextPage = i != (len - 1) ? guide[currScene].route[i + 1].page : false;
        currGuideStep.prevPage = i != 0 ? guide[currScene].route[i - 1].page : false;

        $selector = currGuideStep.selector;
        guideInstance = guideRoute($selector);
        break;
      }
    }

    //当页无场景，直接返回
    if(!guideInstance) return false;

    //处于指引模式时，生成指引描述，并打开指引; 否则关闭已打开的指引
    if(cookie.get('ifGuide') == 1){
      //guideRoute(guide[currScene].route[i-1].selector).close();
      img = new Image();

      if(currGuideStep.ifHtml){
        img.src = '/src/images/bg/guide/' + currGuideStep.bg + '.png';
        $('body').append(createHtml(currGuideStep, guide.style));
      }

      guideInstance.open(currGuideStep);

      if(!currGuideStep.stay){
        $(currGuideStep.selector).one('click', 'a', function(e){
          e.preventDefault();

          cookie.set('nextIndex', currGuideStep.index + 1);

          location.href = $(this).attr('href');
        });
      }
      //switchGuideBox('hide');
    }else{
      guideInstance.close();
      guideInstance = null;
      //switchGuideBox('show');
    }

    return guideInstance;
  }

/*
*生成步骤说明
*
*
*
*
*
*
 */
  function createHtml(obj, style){
    if($('#J-guideText').length){
      $('#J-guideText').remove();
    }

    var pos = {
      top: obj.selector.offset().top + obj.offset.top,
      left: obj.selector.offset().left + obj.offset.left
    }

    console.log(obj.selector.position().top);

    var html = '';
    html += '<div class="guide-description" id="J-guideText" style="top:' + pos.top + 'px;left:' + pos.left + 'px;' + style[obj.bg] + '">';
    html += obj.text;
    html += '<p>';

    if(obj.prevPage){
      if(obj.prevPage !== obj.page){
        html += '<a href="' + obj.prevPage + '.html" id="J-guideStayPrev" ';
      }else{
        html += '<a href="javascript:;" id="J-guideStayPrev" ';
      }
      html += 'data-next="' + obj.index + '" style="display:block;float:left;text-align:left;font-size:12px;color:#05a1e9">上一步</a>';
    }

    if(obj.nextPage){
      if(obj.nextPage !== obj.page){
        html += '<a href="' + obj.nextPage + '.html" id="J-guideStayNext" ';
      }else{
        html += '<a href="javascript:;" id="J-guideStayNext" ';
      }
      html += 'data-next="' + obj.index + '" style="display:block;float:right;text-align:right;font-size:12px;color:#05a1e9">我知道了，下一步</a>';
    }else{
      if(cookie.get('scene') != 'scene4'){
        html += '<a href="javascript:;" id="J-switchGuideScene" data-scene="' + cookie.get('scene') + '" style="display:block;float:right;text-align:right;font-size:12px;color:#05a1e9">进入下个场景</a>';
      }else{
        html += '<a href="javascript:;" class="J-closeGuideMode" data-scene="' + cookie.get('scene') + '" style="display:block;float:right;text-align:right;font-size:12px;color:#05a1e9">指引模式已结束，关闭</a>';
      }
    }

    html += '</p>';
    html += '<img width="28" src="/src/images/bg/guide/' + obj.arrow.url + '" style="position:absolute;top:' + obj.arrow.top + ';left:' + obj.arrow.left + ';right:' + obj.arrow.right + '" >';
    html += '</div>';

    return html;
  }

/*
*切换底部场景对话框
*
*
*
*
*
*
 */
  function switchGuideBox(status){
    if(arguments[1]){
      $('#J-guideBox').hide();
      $('#J-guideBoxSmall').hide();
    }
    if(status == 'hide'){
      $('#J-guideBox').addClass('guide-hide').show();
      $('#J-guideBoxSmall').removeClass('guide-hide').show();
    }else{
      $('#J-guideBoxSmall').addClass('guide-hide').show();
      $('#J-guideBox').removeClass('guide-hide').show();

      if(cookie.get('ifGuide') == '0' || !cookie.get('firstVisit')){
        $('.J-guideContent').eq(0).show();
        $('.J-guideContent').eq(1).hide();
      }else{
        $('.J-guideContent').eq(1).show();
        $('.J-guideContent').eq(0).hide();
      }
    }
  }


/*
场景1：普通下单场景（首页homepage > 列表product-list > 详情页product-detail > 下单流程order-cart * 5 > 订单详情order-detail > 查物流order-delivery）
场景2：日常运营场景（用户中心首页全面展示account*5 > 授信页展示wallet-status > 费用核销页展示promotion-fee）
场景3：一帮卖主场景（立白促销promotion-liby-activity > 促销详情页promotion-liby-detail > 商品详情页product-detail > 购物车促销体现order-cart * 5 > 下单完成）
场景4：二帮卖主场景（设置自己的促销promotion-my-activity >  提交成功promotion-add > SFA促销弹窗 > 促销详情展示执行率promotion-my-detail）
 */
  var guide;
  if(!isMobile()){
    //pc指引路径 pc route
    guide = {
      'scene1': {
        index: 0,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.nav-subnav'),
          ifHtml: true,
          bg: 'box1',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '在商品分类菜单中查看并点击想要的商品分类，可跳转到产品列表页查看该品类全部商品。',
          offset: {
            top: 10,
            left: 210,
            scroll: 50
          },
          stay: false
        },{
          index: 1,
          page: 'product-list',
          selector: $('.product-list-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-30px',
            right: 'auto'
          },
          text: '在产品列表页中点击想要查看的商品，可跳转到产品详情页。',
          offset: {
            top: 20,
            left: 320,
            scroll: 100
          },
          stay: false
        },{
          index: 2,
          page: 'product-detail',
          selector: $('.product-detail-introduce-description'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow4.png',
            top: '120px',
            left: 'auto',
            right: '-10px'
          },
          text: '选择商品数量后，将商品加入购物车，同时进入购物车。',
          offset: {
            top: 330,
            left: -240,
            scroll: 100
          },
          stay: false
        },{
          index: 3,
          page: 'order-cart',
          selector: $('.order-cart-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '可以选择下单商品，修改数量，并进行其他操作。',
          offset: {
            top: 100,
            left: 830,
            scroll: 400
          },
          stay: true
        },{
          index: 4,
          page: 'order-cart',
          selector: $('.order-cart-tool'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow6.png',
            top: '110px',
            left: 'auto',
            right: '30px'
          },
          text: '点击“结算”按钮进入下单流程。',
          offset: {
            top: -150,
            left: 880,
            scroll: 400
          },
          stay: false
        },{
          index: 5,
          page: 'order-check',
          selector: $('.order-check-delivery'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow2.png',
            top: '-10px',
            left: '60px',
            right: 'auto'
          },
          text: '确认收货方以及收货地址。',
          offset: {
            top: 220,
            left: 550,
            scroll: 100
          },
          stay: true
        },{
          index: 6,
          page: 'order-check',
          selector: $('.order-check-checkout'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow6.png',
            top: '110px',
            left: 'auto',
            right: '30px'
          },
          text: '点击“保存订单”按钮，完成下单操作。',
          offset: {
            top: -150,
            left: 800,
            scroll: 100
          },
          stay: false
        },{
          index: 7,
          page: 'order-save',
          selector: $('.order-success-content'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '8px',
            left: '0',
            right: 'auto'
          },
          text: '点击“提交交货单”按钮，提交发货申请。',
          offset: {
            top: 320,
            left: 500,
            scroll: 0
          },
          stay: false
        },{
          index: 8,
          page: 'order-waybill',
          selector: $('.order-waybill-checkout'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '148px',
            left: 'auto',
            right: '10px'
          },
          text: '确认订单信息及发货商品后，点击“提交交货单”按钮完成提交。',
          offset: {
            top: -170,
            left: 800,
            scroll: 100
          },
          stay: false
        },{
          index: 9,
          page: 'order-success',
          selector: $('.order-success-content'),
          ifHtml: true,
          bg: 'box1',
          arrow: {
            url: 'arrow2.png',
            top: '8px',
            left: '0',
            right: 'auto'
          },
          text: '此时下单已成功，交货单已提交，您可以点击“查看订单”按钮查看订单详情。',
          offset: {
            top: 330,
            left: 750,
            scroll: 0
          },
          stay: false
        },{
          index: 10,
          page: 'order-detail',
          selector: $('.order-detail-title-right a').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow4.png',
            top: '100px',
            left: 'auto',
            right: '0px'
          },
          text: '在订单详情页中，点击查看物流可以查看已发货商品的物流状态',
          offset: {
            top: -100,
            left: -240,
            scroll: 300
          },
          stay: false
        },{
          index: 11,
          page: 'order-delivery',
          selector: $('.order-delivery').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '120px',
            left: '-20px',
            right: 'auto'
          },
          text: '在订单详情页中，点击查看物流可以查看已发货商品的物流状态',
          offset: {
            top: 200,
            left: 580,
            scroll: 300
          },
          stay: false
        }]
      },
      'scene2': {
        index: 1,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.site-nav-right li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '10px'
          },
          text: '点击页面顶部“我的立购”链接，进入用户中心首页。',
          offset: {
            top: 10,
            left: -230,
            scroll: 50
          },
          stay: false
        },{
          index: 1,
          page: 'account',
          selector: $('.catalog-management'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '左侧是用户中心常用链接，可以跳转至相应的管理页面。',
          offset: {
            top: 10,
            left: 220,
            scroll: 50
          },
          stay: true
        },{
          index: 2,
          page: 'account',
          selector: $('.account-info, .account-order'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '这里可以看到用户等级及订单等信息。',
          offset: {
            top: 0,
            left: 550,
            scroll: 50
          },
          stay: true
        },{
          index: 3,
          page: 'account',
          selector: $('.account-wallet-content'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow4.png',
            top: '130px',
            left: 'auto',
            right: '-10px'
          },
          text: '这里可以查询授信余额、促销费用以及积分。',
          offset: {
            top: 0,
            left: -230,
            scroll: 50
          },
          stay: true
        },{
          index: 4,
          page: 'account',
          selector: $('.account-chart-content'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '25px',
            left: 'auto',
            right: '10px'
          },
          text: '这里可以看到当年销售完成情况。',
          offset: {
            top: 320,
            left: -100,
            scroll: 50
          },
          stay: true
        },{
          index: 5,
          page: 'account',
          selector: $('.catalog-market dd').eq(2),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '点击“我的钱包”，查看我的授信状态。',
          offset: {
            top: -60,
            left: 220,
            scroll: 150
          },
          stay: false
        },{
          index: 6,
          page: 'wallet-status',
          selector: $('.wallet-status-chart'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '25px',
            left: 'auto',
            right: '10px'
          },
          text: '这里显示我的总资产及授信余额情况。',
          offset: {
            top: 260,
            left: -100,
            scroll: 50
          },
          stay: true
        },{
          index: 7,
          page: 'wallet-status',
          selector: $('.catalog-market dd').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '点击“我的促销”，进入促销中心查看详情。',
          offset: {
            top: -60,
            left: 220,
            scroll: 50
          },
          stay: false
        },{
          index: 8,
          page: 'promotion-liby-activity',
          selector: $('.promotion-operate li').eq(2),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '点击“费用核销”，可以查看可用促销余额。',
          offset: {
            top: -60,
            left: 150,
            scroll: 50
          },
          stay: false
        },{
          index: 9,
          page: 'promotion-fee',
          selector: $('.promotion-fee-chart'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '25px',
            left: 'auto',
            right: '10px'
          },
          text: '这里显示我的可用促销余额及已核销款项等数据。',
          offset: {
            top: 260,
            left: -100,
            scroll: 50
          },
          stay: true
        }]
      },
      'scene3': {
        index: 2,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.site-nav-right li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '10px'
          },
          text: '点击页面顶部“我的立购”链接，进入用户中心首页。',
          offset: {
            top: 10,
            left: -230,
            scroll: 50
          },
          stay: false
        },{
          index: 1,
          page: 'account',
          selector: $('.catalog-market dd').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '点击“我的促销”，进入促销中心查看详情。',
          offset: {
            top: -60,
            left: 220,
            scroll: 150
          },
          stay: false
        },{
          index: 2,
          page: 'promotion-liby-activity',
          selector: $('.promotion-cont li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '当前的立白促销会展示在这里，您可以点击查看促销详情。',
          offset: {
            top: -60,
            left: 380,
            scroll: 150
          },
          stay: false
        },{
          index: 3,
          page: 'promotion-liby-detail',
          selector: $('.promotion-liby-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '这里会列出参与本次促销的商品，点击可查看商品详情。',
          offset: {
            top: 60,
            left: 280,
            scroll: 150
          },
          stay: false
        },{
          index: 4,
          page: 'product-detail',
          selector: $('.product-detail-introduce-description'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow4.png',
            top: '120px',
            left: 'auto',
            right: '-10px'
          },
          text: '选择商品数量后，将商品加入购物车，同时进入购物车。',
          offset: {
            top: 330,
            left: -240,
            scroll: 100
          },
          stay: false
        },{
          index: 5,
          page: 'order-cart',
          selector: $('.order-cart-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '可以选择下单商品，修改数量，并进行其他操作。',
          offset: {
            top: 100,
            left: 830,
            scroll: 400
          },
          stay: true
        },{
          index: 6,
          page: 'order-cart',
          selector: $('.order-coupon'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow5.png',
            top: '140px',
            left: '0px',
            right: 'auto'
          },
          text: '这里显示了当前已享用和为享用的优惠。',
          offset: {
            top: -170,
            left: 430,
            scroll: 400
          },
          stay: true
        },{
          index: 7,
          page: 'order-cart',
          selector: $('.order-cart-tool'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow6.png',
            top: '110px',
            left: 'auto',
            right: '30px'
          },
          text: '点击“结算”按钮即可进入下单流程。',
          offset: {
            top: -150,
            left: 880,
            scroll: 400
          },
          stay: false
        }]
      },
      'scene4': {
        index: 3,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.site-nav-right li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '10px'
          },
          text: '点击页面顶部“我的立购”链接，进入用户中心首页。',
          offset: {
            top: 10,
            left: -230,
            scroll: 50
          },
          stay: false
        },{
          index: 1,
          page: 'account',
          selector: $('.catalog-market dd').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '点击“我的促销”，进入促销中心查看详情。',
          offset: {
            top: -60,
            left: 220,
            scroll: 150
          },
          stay: false
        },{
          index: 2,
          page: 'promotion-liby-activity',
          selector: $('.promotion-operate li').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '点击“我的促销”，可以设置自己的促销政策。',
          offset: {
            top: -60,
            left: 150,
            scroll: 50
          },
          stay: false
        },{
          index: 3,
          page: 'promotion-my-activity',
          selector: $('.promotion-mine-add'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '点击“请新建促销”，可以创建新的促销政策。',
          offset: {
            top: -60,
            left: 380,
            scroll: 150
          },
          stay: true
        },{
          index: 4,
          page: 'promotion-add',
          selector: $('.promotion-add'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '140px',
            left: 'auto',
            right: '20px'
          },
          text: '按要求填写促销信息，并点击“确定”按钮提交。',
          offset: {
            top: -80,
            left: 0,
            scroll: 150
          },
          stay: false
        },{
          index: 5,
          page: 'promotion-my-activity',
          selector: $('.promotion-cont li').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow1.png',
            top: '70px',
            left: '-20px',
            right: 'auto'
          },
          text: '您新建的促销会在这里显示，单击可查看详情。',
          offset: {
            top: -60,
            left: 380,
            scroll: 150
          },
          stay: false
        },{
          index: 6,
          page: 'promotion-my-detail',
          selector: $('.promotion-mine-content'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '140px',
            left: 'auto',
            right: '20px'
          },
          text: '可以在这里查询我的促销执行率及门店执行情况。',
          offset: {
            top: -160,
            left: -150,
            scroll: 150
          },
          stay: false
        }]
      },
      'style': {
        box1:'padding:60px 30px;width:271px;height:182px;background:url(/src/images/bg/guide/box1.png)',
        box2:'padding:60px 50px 30px 30px;width:309px;height:191px;background:url(/src/images/bg/guide/box2.png)',
        box3:'padding:70px 40px 70px 30px;width:267px;height:159px;background:url(/src/images/bg/guide/box3.png)',
        box4:'padding:45px 30px;width:237px;height:99px;background:url(/src/images/bg/guide/box4.png)',
        box5:'padding:50px 65px 50px 25px;width:210px;height:155px;background:url(/src/images/bg/guide/box5.png)',
        box6:'padding:45px 60px 30px 85px;width:298px;height:135px;background:url(/src/images/bg/guide/box6.png)'
      }
    };
  }else{
    //手机指引路径 mobile route
    guide = {
      'scene1': {
        index: 0,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.header-mobile'),
          ifHtml: true,
          bg: 'box4',
          arrow: {
            url: 'arrow3.png',
            top: '0px',
            left: 'auto',
            right: '90px'
          },
          text: '可通过搜索功能查找商品。',
          offset: {
            top: 100,
            left: 50,
            scroll: 50
          },
          stay: false
        },{
          index: 1,
          page: 'product-list',
          selector: $('.product-list-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '10px',
            left: '0px',
            right: 'auto'
          },
          text: '在产品列表页中点击想要查看的商品，可跳转到产品详情页。',
          offset: {
            top: 280,
            left: 120,
            scroll: 100
          },
          stay: false
        },{
          index: 2,
          page: 'product-detail',
          selector: $('.product-detail-introduce-description .action'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '140px',
            left: 'auto',
            right: '10px'
          },
          text: '选择商品数量后，将商品加入购物车，同时进入购物车。',
          offset: {
            top: -170,
            left: 60,
            scroll: 0
          },
          stay: false
        },{
          index: 3,
          page: 'order-cart',
          selector: $('.order-cart-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '可以选择下单商品，对商品进行编辑操作。',
          offset: {
            top: 150,
            left: 30,
            scroll: 400
          },
          stay: true
        },{
          index: 4,
          page: 'order-cart',
          selector: $('.order-cart-tool'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow6.png',
            top: '110px',
            left: 'auto',
            right: '30px'
          },
          text: '点击“结算”按钮进入下单流程。',
          offset: {
            top: -150,
            left: 30,
            scroll: 400
          },
          stay: false
        },{
          index: 5,
          page: 'order-check',
          selector: $('.order-check-delivery'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow2.png',
            top: '-10px',
            left: '60px',
            right: 'auto'
          },
          text: '确认收货方以及收货地址。',
          offset: {
            top: 350,
            left: 50,
            scroll: 50
          },
          stay: true
        },{
          index: 6,
          page: 'order-check',
          selector: $('.order-check-checkout'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow6.png',
            top: '110px',
            left: 'auto',
            right: '30px'
          },
          text: '点击“保存订单”按钮，完成下单操作。',
          offset: {
            top: -150,
            left: 40,
            scroll: 100
          },
          stay: false
        },{
          index: 7,
          page: 'order-save',
          selector: $('.order-success-content'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow2.png',
            top: '-20px',
            left: '90px',
            right: 'auto'
          },
          text: '点击“提交交货单”按钮，提交发货申请。',
          offset: {
            top: 320,
            left: 40,
            scroll: 0
          },
          stay: false
        },{
          index: 8,
          page: 'order-waybill',
          selector: $('.order-waybill-checkout'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '148px',
            left: 'auto',
            right: '10px'
          },
          text: '确认订单信息及发货商品后，点击“提交交货单”按钮完成提交。',
          offset: {
            top: -190,
            left: 40,
            scroll: 100
          },
          stay: false
        },{
          index: 9,
          page: 'order-success',
          selector: $('.order-success-content'),
          ifHtml: true,
          bg: 'box1',
          arrow: {
            url: 'arrow3.png',
            top: '8px',
            left: 'auto',
            right: '10px'
          },
          text: '此时下单已成功，交货单已提交，您可以点击“查看订单”按钮查看订单详情。',
          offset: {
            top: 280,
            left: 40,
            scroll: 0
          },
          stay: false
        },{
          index: 10,
          page: 'order-detail',
          selector: $('.order-detail-lists-buttons a').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '10px',
            left: 'auto',
            right: '70px'
          },
          text: '在订单详情页中，点击查看物流可以查看已发货商品的物流状态',
          offset: {
            top: 20,
            left: -80,
            scroll: 300
          },
          stay: false
        },{
          index: 11,
          page: 'order-delivery',
          selector: $('.order-delivery-info'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '在订单详情页中，点击查看物流可以查看已发货商品的物流状态',
          offset: {
            top: 200,
            left: 40,
            scroll: 300
          },
          stay: false
        }]
      },
      'scene2': {
        index: 1,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.footer-mobile'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '140px',
            left: 'auto',
            right: '10px'
          },
          text: '点击页面底部“我”，进入用户中心首页。',
          offset: {
            top: -170,
            left: 30,
            scroll: 100
          },
          stay: false
        },{
          index: 1,
          page: 'account',
          selector: $('.account-info'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow2.png',
            top: '-10px',
            left: '150px',
            right: 'auto'
          },
          text: '这里可以看到用户等级信息。',
          offset: {
            top: 120,
            left: 30,
            scroll: 50
          },
          stay: true
        },{
          index: 2,
          page: 'account',
          selector: $('.account-order'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow2.png',
            top: '-10px',
            left: '130px',
            right: 'auto'
          },
          text: '这里将显示我的订单状态。',
          offset: {
            top: 130,
            left: 50,
            scroll: 100
          },
          stay: true
        },{
          index: 3,
          page: 'account',
          selector: $('.account-wallet'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '60px'
          },
          text: '这里可以查询授信余额、促销费用以及积分。',
          offset: {
            top: 100,
            left: 50,
            scroll: 100
          },
          stay: true
        },{
          index: 4,
          page: 'account',
          selector: $('.account-chart-content'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '25px',
            left: 'auto',
            right: '20px'
          },
          text: '这里可以看到当年销售完成情况。',
          offset: {
            top: 300,
            left: 30,
            scroll: 50
          },
          stay: true
        },{
          index: 5,
          page: 'account',
          selector: $('.account-wallet-content li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '10px',
            left: '20px',
            right: 'auto'
          },
          text: '点击“授信余额”可以查看我的授信状态。',
          offset: {
            top: 60,
            left: 60,
            scroll: 150
          },
          stay: true
        },{
          index: 6,
          page: 'wallet-status',
          selector: $('.wallet-status-chart'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '25px',
            left: 'auto',
            right: '10px'
          },
          text: '这里显示我的总资产及授信余额情况，也可以为账户充值。',
          offset: {
            top: 480,
            left: 60,
            scroll: 50
          },
          stay: false
        },{
          index: 7,
          page: 'account',
          selector: $('.account-wallet-content li').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '10px',
            left: '170px',
            right: 'auto'
          },
          text: '点击“促销费用”可以查看费用核销情况。',
          offset: {
            top: 60,
            left: -60,
            scroll: 150
          },
          stay: false
        },{
          index: 8,
          page: 'promotion-fee',
          selector: $('.promotion-fee-chart'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '15px',
            left: 'auto',
            right: '80px'
          },
          text: '这里显示我的可用促销余额及已核销款项等数据。',
          offset: {
            top: 350,
            left: 60,
            scroll: 50
          },
          stay: true
        }]
      },
      'scene3': {
        index: 2,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.footer-mobile'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '140px',
            left: 'auto',
            right: '10px'
          },
          text: '点击页面底部“我”，进入用户中心首页。',
          offset: {
            top: -170,
            left: 30,
            scroll: 100
          },
          stay: false
        },{
          index: 1,
          page: 'account',
          selector: $('.account-tool-lists li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '20px',
            left: '0px',
            right: 'auto'
          },
          text: '点击“我的促销”，进入促销中心查看详情。',
          offset: {
            top: 60,
            left: 70,
            scroll: 150
          },
          stay: false
        },{
          index: 2,
          page: 'promotion-liby-activity',
          selector: $('.promotion-cont li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '当前的立白促销会展示在这里，您可以点击查看促销详情。',
          offset: {
            top: 120,
            left: 20,
            scroll: 150
          },
          stay: false
        },{
          index: 3,
          page: 'promotion-liby-detail',
          selector: $('.promotion-liby-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '15px',
            left: '10px',
            right: 'auto'
          },
          text: '这里会列出参与本次促销的商品，点击可查看商品详情。',
          offset: {
            top: 200,
            left: 50,
            scroll: 150
          },
          stay: false
        },{
          index: 4,
          page: 'product-detail',
          selector: $('.product-detail-introduce-description .action'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '140px',
            left: 'auto',
            right: '10px'
          },
          text: '选择商品数量后，将商品加入购物车，同时进入购物车。',
          offset: {
            top: -170,
            left: 60,
            scroll: 0
          },
          stay: false
        },{
          index: 5,
          page: 'order-cart',
          selector: $('.order-cart-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '可以选择下单商品，对商品进行编辑操作。',
          offset: {
            top: 150,
            left: 30,
            scroll: 400
          },
          stay: true
        },{
          index: 6,
          page: 'order-cart',
          selector: $('.order-coupon-card').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '这里显示了当前已享用和为享用的优惠。',
          offset: {
            top: 140,
            left: 30,
            scroll: 100
          },
          stay: true
        },{
          index: 7,
          page: 'order-cart',
          selector: $('.order-cart-tool'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow6.png',
            top: '110px',
            left: 'auto',
            right: '30px'
          },
          text: '点击“结算”按钮进入下单流程。',
          offset: {
            top: -150,
            left: 30,
            scroll: 400
          },
          stay: false
        }]
      },
      'scene4': {
        index: 3,
        route: [{
          index: 0,
          page: 'homepage',
          selector: $('.footer-mobile'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow6.png',
            top: '140px',
            left: 'auto',
            right: '10px'
          },
          text: '点击页面底部“我”，进入用户中心首页。',
          offset: {
            top: -170,
            left: 30,
            scroll: 100
          },
          stay: false
        },{
          index: 1,
          page: 'account',
          selector: $('.account-tool-lists li').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '20px',
            left: '0px',
            right: 'auto'
          },
          text: '点击“我的促销”，进入促销中心查看详情。',
          offset: {
            top: 60,
            left: 70,
            scroll: 150
          },
          stay: false
        },{
          index: 2,
          page: 'promotion-liby-activity',
          selector: $('.promotion-operate li').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '10px',
            left: 'auto',
            right: '70px'
          },
          text: '点击“我的促销”，可以设置自己的促销政策。',
          offset: {
            top: 50,
            left: -50,
            scroll: 50
          },
          stay: false
        },{
          index: 3,
          page: 'promotion-my-activity',
          selector: $('.promotion-mine-add'),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '15px',
            left: 'auto',
            right: '30px'
          },
          text: '点击“请新建促销”，可以创建新的促销政策。',
          offset: {
            top: 90,
            left: 20,
            scroll: 150
          },
          stay: true
        },{
          index: 4,
          page: 'promotion-add',
          selector: $('.promotion-add-btn').last(),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow5.png',
            top: '140px',
            left: '40px',
            right: 'auto'
          },
          text: '按要求填写促销信息，并点击“确定”按钮提交。',
          offset: {
            top: -180,
            left: 70,
            scroll: 150
          },
          stay: false
        },{
          index: 5,
          page: 'promotion-my-activity',
          selector: $('.promotion-cont li').eq(1),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow2.png',
            top: '15px',
            left: '0px',
            right: 'auto'
          },
          text: '您新建的促销会在这里显示，单击可查看详情。',
          offset: {
            top: 140,
            left: 60,
            scroll: 150
          },
          stay: false
        },{
          index: 6,
          page: 'promotion-my-detail',
          selector: $('.promotion-mine-detail-wrapper'),
          ifHtml: true,
          bg: 'box6',
          arrow: {
            url: 'arrow3.png',
            top: '0px',
            left: 'auto',
            right: '40px'
          },
          text: '可以在这里查询我的促销执行率。',
          offset: {
            top: 180,
            left: 30,
            scroll: 150
          },
          stay: true
        },{
          index: 7,
          page: 'promotion-my-detail',
          selector: $('.promotion-mine-list-item').eq(0),
          ifHtml: true,
          bg: 'box3',
          arrow: {
            url: 'arrow3.png',
            top: '20px',
            left: 'auto',
            right: '20px'
          },
          text: '这里可以查询我的促销门店执行情况。',
          offset: {
            top: 80,
            left: 30,
            scroll: 150
          },
          stay: false
        }]
      },
      'style': {
        box1:'padding:60px 30px;width:271px;height:182px;background:url(/src/images/bg/guide/box1.png)',
        box2:'padding:60px 50px 30px 30px;width:309px;height:191px;background:url(/src/images/bg/guide/box2.png)',
        box3:'padding:70px 40px 70px 30px;width:267px;height:159px;background:url(/src/images/bg/guide/box3.png)',
        box4:'padding:45px 30px;width:237px;height:99px;background:url(/src/images/bg/guide/box4.png)',
        box5:'padding:50px 65px 50px 25px;width:210px;height:155px;background:url(/src/images/bg/guide/box5.png)',
        box6:'padding:45px 60px 30px 85px;width:298px;height:135px;background:url(/src/images/bg/guide/box6.png)'
      }
    };
  }

  var currGuideScene;  //当前场景实例，return from beginGuide

  (function(){
    //首次访问时，默认显示不指引并显示指引对话框
    if(!cookie.get('firstVisit')){
      switchGuideBox('show', true);
      cookie.set('ifGuide', '0');
      cookie.set('firstVisit', '1');
      cookie.set('nextIndex', '0');
      cookie.set('scene', 'scene1');
      return;
    }

    //如果处于指引模式，则显示场景切换框
    if(cookie.get('ifGuide') == '1'){
      $('.J-startGuideMode').eq(guide[cookie.get('scene')].index).addClass('guide-link-curr');
      if(!isMobile()){
        switchGuideBox('show', true);
      }
      currGuideScene = beginGuide(guide);
    }else{
      switchGuideBox('hide', true);
    }
  })();



  //底部场景按钮切换
  $('body').on('click', '.J-startGuideMode', function(){
    var $this = $(this),
        currScene = cookie.get('scene'),
        clickScene = ['scene1', 'scene2', 'scene3', 'scene4'][parseInt($this.data('scene'))];

    cookie.set('ifGuide', '1');
    cookie.set('scene', clickScene);
    cookie.set('nextIndex', '0');

    if(guide[clickScene].route[0].page != currPage){
      location.href = $this.data('firstscene') + '.html';
    }else{
      $this.addClass('guide-link-curr').siblings().removeClass('guide-link-curr');


      if(!isMobile()){
        switchGuideBox('show', true);
      }else{
        switchGuideBox('hide', true);
      }

      currGuideScene = beginGuide(guide);
    }

  });

  //关闭指引模式
  $('body').on('click', '.J-closeGuideMode', function(){
    cookie.set('ifGuide', '0');
    switchGuideBox('hide');
    $('.J-startGuideMode').removeClass('guide-link-curr');
    currGuideScene = beginGuide(guide);
  });

  //显示指引对话框
  $('body').on('click', '#J-showGuideBox', function(){
    switchGuideBox('show');
  });

  //关闭指引对话框
  $('body').on('click', '.J-closeGuideBox', function(){
    switchGuideBox('hide');
  });

  //接受指引模式
  $('body').on('click', '#J-acceptGuideMode', function(){
    // $('.J-startGuideMode').eq(0).trigger('click');
    cookie.set('ifGuide', '1');
    switchGuideBox('show');
  });

  //跳过指引模式
  $('body').on('click', '#J-rejectGuideMode', function(){
    $('.J-closeGuideBox').trigger('click');
  });

  $('body').on('click', '#J-guideStayNext', function(e){
    e.preventDefault();

    var $this = $(this),
        url = $this.attr('href');

    cookie.set('nextIndex', parseInt($this.data('next')) + 1);

    if(url.indexOf('javascript') > -1){
      if(currGuideScene){
        currGuideScene.close();
      }

      currGuideScene = beginGuide(guide);
    }else{
      location.href = url;
    }
  });

  $('body').on('click', '#J-guideStayPrev', function(e){
    e.preventDefault();

    var $this = $(this),
        url = $this.attr('href');
    cookie.set('nextIndex', parseInt($this.data('next')) - 1);

    if(url.indexOf('javascript') > -1){
      if(currGuideScene){
        currGuideScene.close();
      }

      currGuideScene = beginGuide(guide);
    }else{
      location.href = url;
    }
  });

  $('body').on('click', '#J-switchGuideScene', function(){
    var index = parseInt($(this).data('scene').replace('scene', ''));
    $('.J-startGuideMode').eq(index).trigger('click');
  });
});


