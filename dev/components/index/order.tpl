<div class="index-order fl">
  <div class="box-title">
    <h3>
      <i class="iconfont">&#xe604;</i>
      <span>我的订单</span>
    </h3>
    <a class="view-more" href="order-list.html">
      查看全部》
    </a>
  </div>
  <ul class="index-order-tab" id="J-indexOrderTab">
    <li>
        <p class="index-order-count">13</p>
        <p class="text-grey">已创建</p>
    </li>
    <li class="curr">
        <p class="index-order-count">2</p>
        <p class="text-grey">待处理</p>
    </li>
    <li>
        <p class="index-order-count">1</p>
        <p class="text-grey">已审核</p>
    </li>
    <li>
        <p class="index-order-count">2</p>
        <p class="text-grey">部分发货</p>
    </li>
    <li>
        <p class="index-order-count">1</p>
        <p class="text-grey">已发货</p>
    </li>
    <li>
        <p class="index-order-count">1</p>
        <p class="text-grey">已签收</p>
    </li>
  </ul>
  <div id="J-indexOrderDetail">
    <ul class="index-order-lists">
      <li class="index-order-item">
        <div class="index-order-img">
          <img src="../src/images/temp/p1.jpg" alt="">
          <img src="../src/images/temp/p2.jpg" alt="">
        </div>
        <div class="index-order-address">
          <p>沈阳市苏家屯迎春街238号（1002255）</p>
          <p class="text-grey">刘晓雪  13092890922</p>
          <p class="text-light">下单时间：2016-09-11</p>
        </div>
        <div class="index-order-quantity">
          <p class="text-grey">数量</p>
          <p>1000</p>
        </div>
        <div class="index-order-amount">
          <p class="text-grey">总金额</p>
          <p class="text-red">￥28099.00</p>
        </div>
      </li>
      <li class="index-order-item">
        <div class="index-order-img">
          <img src="../src/images/temp/p1.jpg" alt="">
          <img src="../src/images/temp/p2.jpg" alt="">
        </div>
        <div class="index-order-address">
          <p>沈阳市苏家屯迎春街238号（1002255）</p>
          <p class="text-grey">刘晓雪  13092890922</p>
          <p class="text-light">下单时间：2016-09-11</p>
        </div>
        <div class="index-order-quantity">
          <p class="text-grey">数量</p>
          <p>1000</p>
        </div>
        <div class="index-order-amount">
          <p class="text-grey">总金额</p>
          <p class="text-red">￥28099.00</p>
        </div>
      </li>
    </ul>
  </div>
</div>
<script type="text/javascript">
$(function(){
  $('#J-indexOrderTab li').on('click', function(){
    var $this = $(this);
    var index = $this.index();
    $this.addClass('curr').siblings().removeClass('curr');

    // some other code here
  })
});
</script>
