<div class="order-success">
  <div class="order-title">
    <a href="/views/homepage.html">
      <img src="/src/images/bg/bg-logo.png" width="100%">
    </a>
    <span class="order-title-text">订单提交成功</span>
    <div class="order-progress">
      <i class="order-progress-curr" style="width:66.66%;">
      <!-- order-progress-curr根据当前的步骤决定，33.33% * setp -->
      </i>
      <ul class="order-progress-step">
        <li class="order-progress-step-item0 active">
          <span>1</span>
          <p>我的购物车</p>
        </li>
        <li class="order-progress-step-item1 active">
          <span>2</span>
          <p>确认订单信息</p>
        </li>
        <li class="order-progress-step-item2 active">
          <span>3</span>
          <p>订单提交成功</p>
        </li>
        <li class="order-progress-step-item3">
          <span>4</span>
          <p>生成交货单</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="order-success-content">

    <h2><i class="iconfont">&#xe612;</i>您已成功保存订单，请及时提交交货单！</h2>
    <p class="order-success-text">
      <span class="order-success-text-title">收货地址：</span>
      <span>
      上海市杨浦区内环以北北京东路180号广澳大厦2单元11室
      <br>邓志勇 15021511111
      </span>
    </p>
    <p class="order-success-text"><span class="order-success-text-title">您可以<a href="javascript:;">继续购物</a>,</span><span>或者去我的订单查看订单，并对该订单进行修改或提交交货单。</span></p>

<!--     <p class="order-success-text"><span >实付款：</span><span><span class="currency">￥</span>150,000.00</span></p> -->

    <div class="order-success-btn">
      <a href="/views/order-waybill.html" class="button button-blue button-radius mr30">提交交货单</a>
      <a href="/views/order-detail.html" class="button button-grey button-radius">查看订单</a>
    </div>

  </div>
</div>

<-- include('order-promotion.tpl') -->
