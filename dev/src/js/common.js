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
//
//for demo, will be delete while dev
$(function(){
  if(location.href.indexOf('account') > 0){
    $('.header-mobile').hide();
    $('.content').css('margin-top', '-0.5rem');
  }else if(location.href.indexOf('homepage') > 0){
    $('.header-mobile-search').show();
    $('.header-mobile-menu').show();
  }else{
    $('.header-mobile-search').hide();
    $('.header-mobile-back').show();
    $('.header-mobile-title').show().text(document.title);
  };

  if(location.href.indexOf('homepage') > 0){
    $('.footer-mobile-homepage').addClass('curr').siblings().removeClass('curr');
  }else if(location.href.test(/order-(cart||waybill||check||success||save)/g)){
    console.log(1);
  };
});




