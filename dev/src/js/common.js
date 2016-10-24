$(function(){
  var url = location.href.split('/');
  var page = url[url.length - 1].split('-')[0];
  $('#J-catalogMarket').find('dd[rel="' + page + '"] a').addClass('curr');
});

$(function(){
	if(location.href.indexOf('homepage') > 0){
		$('.nav-subnav').show();
	}
});




//mobile common

;(function(){

  var mask = {
    show: function(color){
      var mask = _$('LibyMask');
      if(!mask){

        _createDom('LibyMask', {
          position: 'fixed',
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
          background: color || 'rgba(0,0,0,0.5)',
          zIndex: '150',
          cursor: 'pointer'
        });

      }else{
        mask.style.background = color || 'rgba(0,0,0,0.5)';
        mask.style.display = 'block';
      }
    },
    hide: function(){
      _hideDom('LibyMask');
    }
  };

  // var waitingBox = {
  //   add: function(str){
  //     mask.show('transparent');

  //     var html = '<div id="floatingBarsG"><div id="rotateG_01" class="blockG"></div><div id="rotateG_02" class="blockG"></div><div id="rotateG_03" class="blockG"></div><div id="rotateG_04" class="blockG"></div><div id="rotateG_05" class="blockG"></div><div id="rotateG_06" class="blockG"></div><div id="rotateG_07" class="blockG"></div><div id="rotateG_08" class="blockG"></div></div>';

  //     var div = _createDom('BargwardWaiting', {
  //       position: 'fixed',
  //       left: '50%',
  //       top: '50%',
  //       width: '60px',
  //       height: '60px',
  //       background: 'rgba(0,0,0,0.5)',
  //       margin: '-30px 0 0 -30px',
  //       textAlign: 'center',
  //       color: '#fff',
  //       zIndex: '1500',
  //       borderRadius: '5px'
  //     });

  //     div.innerHTML = html;

  //   },
  //   remove: function(){
  //     mask.hide();

  //     _clearDom('BargwardWaiting');
  //   }
  // };

  // var messageBox = {
  //   add: function(str, time){
  //     var timeout = time || 3000;

  //     mask.show('transparent');

  //     var div = _createDom('BargwardMessage', {
  //       position: 'fixed',
  //       top: '50%',
  //       width: '100%',
  //       marginTop: '-20px',
  //       textAlign: 'center',
  //       color: '#fff',
  //       fontSize: '14px',
  //       zIndex: '1500'
  //     });

  //     div.innerHTML = '<span style="background:rgba(0,0,0,0.5);padding:10px 15px;border-radius:5px;">' + str + '</span>';

  //     setTimeout(this.remove, timeout);

  //   },
  //   remove: function(){
  //     mask.hide();

  //     _clearDom('BargwardMessage');
  //   }
  // };

  function loadJs(url, callback){
    var ga = document.createElement("script");

    ga.type = "text/JavaScript";
    ga.async = true;
    ga.src = url;
    ga.onload = ga.onreadystatechange = function(){
      if(!ga.readyState || ga.readyState == "loaded" || ga.readyState == "complete"){
        if(callback) callback();
      }
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
  };

  function Modal(config){
    this.id = config.id || '';
    this.class = config.class || '';
    this.style = config.style || '';
    this.dom = _createDom(this.id);

    this.initialize();
  };

  Modal.prototype = {
    constructor: Modal,

    initialize: function(){
      this._addClass()._addStyle();
    },

    show: function(html){
      mask.show();

      if(html){
        this.dom.innerHTML = html;
      }

      _showDom(this.id);
    },

    remove: function(){
      mask.hide();

      _clearDom(this.id);
    },

    hide: function(){
      mask.hide();

      _hideDom(this.id);
    },

    _addClass: function(){
      this.dom.className = this.class;

      return this;
    },

    _addStyle: function(){
      if(this.style){
        _setStyle(this.dom, this.style);
      }

      return this;
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

  window.modalMask = {
    show: mask.show,
    hide: mask.hide
  };

  return Liby = {
    mask: mask, //Bargward.mask.show(); Bargward.mask.hide();
    REG: REG,
    waiting: waitingBox, //Bargward.waiting.add();Bargward.waiting.remove();
    message: messageBox, //Bargward.message.add();Bargward.message.remove();
    loadJs: loadJs,
    Modal: Modal  //new Bargward.Modal(); .add().show().remove();
  };

})(window);





