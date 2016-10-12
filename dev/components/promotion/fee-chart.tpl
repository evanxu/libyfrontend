<ul class="promotion-fee-chart clearfix" id="J-promotionFeeChart">
  <li>
    <p class="chart-title">立白周年庆活动</p>
    <div class="chart-detail J-chart" data-title="立白周年庆活动" data-id="10293892" data-total="8300.00"  data-unfinished="2300.00"></div>
    <div class="chart-other">
      <p class="chart-finish"><span class="with-bg">已核销</span><span class="with-border">可核销</span></p>
      <p>可核销：<strong class="fs16">8103.00</strong><span class="fs12">元</span></p>
      <p>已核销：<strong class="fs16">2103.00</strong><span class="fs12">元</span></p>
    </div>
  </li>
  <li>
    <p class="chart-title">立白中秋节活动</p>
    <div class="chart-detail J-chart" data-title="立白中秋节活动" data-id="10293892" data-total="4300.00"  data-unfinished="2320.00"></div>
    <div class="chart-other">
      <p class="chart-finish"><span class="with-bg">已核销</span><span class="with-border">可核销</span></p>
      <p>可核销：<strong class="fs16">4300.00</strong><span class="fs12">元</span></p>
      <p>已核销：<strong class="fs16">2320.00</strong><span class="fs12">元</span></p>
    </div>
  </li>
  <li>
    <p class="chart-title">立白端午节活动</p>
    <div class="chart-detail J-chart" data-title="立白端午节活动" data-id="10293892" data-total="32300.00"  data-unfinished="4200.00"></div>
    <div class="chart-other">
      <p class="chart-finish"><span class="with-bg">已核销</span><span class="with-border">可核销</span></p>
      <p>可核销：<strong class="fs16">32300.00</strong><span class="fs12">元</span></p>
      <p>已核销：<strong class="fs16">4200.00</strong><span class="fs12">元</span></p>
    </div>
  </li>
  <li>
    <p class="chart-title">立白周年庆活动</p>
    <div class="chart-detail J-chart" data-title="立白周年庆活动" data-id="10293892" data-total="6300.00"  data-unfinished="200.00"></div>
    <div class="chart-other">
      <p class="chart-finish"><span class="with-bg">已核销</span><span class="with-border">可核销</span></p>
      <p>可核销：<strong class="fs16">6300.00</strong><span class="fs12">元</span></p>
      <p>已核销：<strong class="fs16">200.00</strong><span class="fs12">元</span></p>
    </div>
  </li>
  <li>
    <p class="chart-title">立白中秋节活动</p>
    <div class="chart-detail J-chart" data-title="立白中秋节活动" data-id="10293892" data-total="44300.00"  data-unfinished="12320.00"></div>
    <div class="chart-other">
      <p class="chart-finish"><span class="with-bg">已核销</span><span class="with-border">可核销</span></p>
      <p>可核销：<strong class="fs16">44300.00</strong><span class="fs12">元</span></p>
      <p>已核销：<strong class="fs16">12320.00</strong><span class="fs12">元</span></p>
    </div>
  </li>
  <li>
    <p class="chart-title">立白端午节活动</p>
    <div class="chart-detail J-chart" data-title="立白端午节活动" data-id="10293892" data-total="2300.00"  data-unfinished="400.00"></div>
    <div class="chart-other">
      <p class="chart-finish"><span class="with-bg">已核销</span><span class="with-border">可核销</span></p>
      <p>可核销：<strong class="fs16">2300.00</strong><span class="fs12">元</span></p>
      <p>已核销：<strong class="fs16">400.00</strong><span class="fs12">元</span></p>
    </div>
  </li>
</ul>
<script type="text/javascript">
$(function(){
  var url = '/data/promotion-fee.json';
  var styleColor1 = ['#04a1e9', '#ffa917', '#8dc63f'];
  var styleColor2 = '#ebebeb';
  var title = {
    text: '完成目标率',
    color: '#898989',
    pos: {
      top: '125'
    }
  };

  $('#J-promotionFeeChart').find('.J-chart').each(function(i){
    var $this = $(this);
    // var data = JSON.parse($this.data('para'));
    // var data = {
    //   "title": $this.data('title'),
    //   "id": $this.data('id')
    // };

    // $this.drawChart({
    //   title: title,
    //   formatter: '{d}%',
    //   ajax: {
    //     url: url,
    //     data: data
    //   },
    //   styleColor: [styleColor1[i % 3], styleColor2],
    //   callback: function(data){
    //     console.log(data);
    //   }
    // });
    var data = [{
      "value": parseInt($this.data('total')),
      "name": "可核销"
    },
    {
      "value": parseInt($this.data('unfinished')),
      "name": "已核销"
    }];
    $this.drawChart({
      title: title,
      formatter: '{d}%',
      data: data,
      styleColor: [styleColor1[i % 3], styleColor2]
    });

  });
});
</script>
