<div class="data-center">
  <div class="box-title">
    <h3>
      <i class="iconfont">&#xe604;</i>
      <span>我的数据</span>
    </h3>
  </div>
  <ul class="data-center-chart clearfix" id="J-promotionFeeChart">
    <li>
      <p class="chart-title">活动执行率</p>
      <div class="chart-detail J-chart" data-title="活动执行率" data-title1="已执行" data-title2="未执行" data-id="10293892" data-total="200"  data-unfinished="100"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue">
          <span class="with-bg">已执行</span>
          <span class="with-border">200</span>
        </div>
      </div>
    </li>
    <li>
      <p class="chart-title">分销率</p>
      <div class="chart-detail J-chart" data-title="分销率" data-title1="已分销" data-title2="未分销" data-id="10293892" data-total="100000.00"  data-unfinished="70000.00"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue chart-finish-orange">
          <span class="with-bg">已分销</span>
          <span class="with-border">100000.00元</span>
        </div>
      </div>
    </li>
    <li>
      <p class="chart-title">陈列率</p>
      <div class="chart-detail J-chart" data-title="陈列率" data-title1="已陈列" data-title2="未陈列" data-id="10293892" data-total="180"  data-unfinished="60"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue chart-finish-green">
          <span class="with-bg">陈列数</span>
          <span class="with-border">180</span>
        </div>
      </div>
    </li>
  </ul>
</div>

<script type="text/javascript" src="/src/vendor/js/echarts.js"></script>
<script type="text/javascript" src="/src/js/jquery.getChart.js"></script>
<script type="text/javascript">
$(function(){
 // var url = '/data/data-center.json';
  var styleColor1 = ['#04a1e9', '#ffa917', '#8dc63f'];
  var styleColor2 = '#ebebeb';

  //temp use
  //
  var top = 150;
  if(device == 'mobile'){
    top = 130;
  }

  var title = {
    text: '完成目标率',
    color: '#898989',
    pos: {
      top: top
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
      "name": $this.data('title1')
    },
    {
      "value": parseInt($this.data('unfinished')),
      "name": $this.data('title2')
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
