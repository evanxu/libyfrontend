$(function(){
  var url = location.href.split('/');
  var page = url[url.length - 1].split('-')[0];
  $('#J-catalogMarket').find('dd[rel="' + page + '"] a').addClass('curr');
});


//for temp use
$(function(){
	if(location.href.indexOf('homepage') > 0 || /[^html]$/.test(location.href)){
		$('.nav-subnav').show();
	}
});




//mobile common
//
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




//for demo, will be delete while dev
//
//
//
(function(){
  var mask = {
    show: function(options){
      var id = 'libyMask',
          color = 'rgba(0,0,0,0.8)';
      if(options){
        id = options.id || id;
        color = options.color || color;
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
          zIndex: '1500'
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
        width: '100%',
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

})(window);

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
