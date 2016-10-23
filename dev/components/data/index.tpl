<div class="data-center">
  <div class="box-title">
    <h3>
      <i class="iconfont">&#xe604;</i>
      <span>我的数据</span>
    </h3>
  </div>
  <ul class="data-center-chart clearfix" id="J-promotionFeeChart">
    <li>
      <p class="chart-title">立白周年庆活动</p>
      <div class="chart-detail J-chart" data-title="立白周年庆活动" data-id="10293892" data-total="8300.00"  data-unfinished="2300.00"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue">
          <span class="with-bg">已完成</span>
          <span class="with-border">2700000.00元</span>
        </div>
      </div>
    </li>
    <li>
      <p class="chart-title">立白中秋节活动</p>
      <div class="chart-detail J-chart" data-title="立白中秋节活动" data-id="10293892" data-total="4300.00"  data-unfinished="2320.00"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue chart-finish-orange">
          <span class="with-bg">已完成</span>
          <span class="with-border">500000.00元</span>
        </div>
      </div>
    </li>
    <li>
      <p class="chart-title">立白端午节活动</p>
      <div class="chart-detail J-chart" data-title="立白端午节活动" data-id="10293892" data-total="32300.00"  data-unfinished="4200.00"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue chart-finish-green">
          <span class="with-bg">已完成</span>
          <span class="with-border">700000.00元</span>
        </div>
      </div>
    </li>
    <li>
      <p class="chart-title">立白周年庆活动</p>
      <div class="chart-detail J-chart" data-title="立白周年庆活动" data-id="10293892" data-total="6300.00"  data-unfinished="200.00"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue">
          <span class="with-bg">已完成</span>
          <span class="with-border">320000.00元</span>
        </div>
      </div>
    </li>
    <li>
      <p class="chart-title">立白中秋节活动</p>
      <div class="chart-detail J-chart" data-title="立白中秋节活动" data-id="10293892" data-total="44300.00"  data-unfinished="12320.00"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue chart-finish-orange">
          <span class="with-bg">已完成</span>
          <span class="with-border">2000000.00元</span>
        </div>
      </div>
    </li>
    <li>
      <p class="chart-title">立白端午节活动</p>
      <div class="chart-detail J-chart" data-title="立白端午节活动" data-id="10293892" data-total="2300.00"  data-unfinished="400.00"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue chart-finish-green">
          <span class="with-bg">已完成</span>
          <span class="with-border">1700000.00元</span>
        </div>
      </div>
    </li>
  </ul>
</div>
<script type="text/javascript">
$(function(){
  var url = '/data/data-center.json';
  var styleColor1 = ['#04a1e9', '#ffa917', '#8dc63f'];
  var styleColor2 = '#ebebeb';
  var title = {
    text: '完成目标率',
    color: '#898989',
    pos: {
      top: '150'
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
