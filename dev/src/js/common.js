$(function(){
  var url = location.href.split('/');
  var page = url[url.length - 1].split('-')[0];
  $('#J-catalogMarket').find('dd[rel="' + page + '"] a').addClass('curr');
});

$(function(){
	if(location.href.indexOf('homepage') > 0){
		$('.nav-subnav').show();
	}
})



