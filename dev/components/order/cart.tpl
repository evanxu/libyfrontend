<div class="order-cart">
  <div class="order-title">
    <span>我的购物车</span>
    <div class="order-progress">
      <i class="order-progress-curr">
      </i>
      <ul class="order-progress-step">
        <li class="order-progress-step-item0 active">
          <span>1</span>
          <p>我的购物车</p>
        </li>
        <li class="order-progress-step-item1">
          <span>2</span>
          <p>填写核对订单信息</p>
        </li>
        <li class="order-progress-step-item2">
          <span>3</span>
          <p>成功提交运货单</p>
        </li>
        <li class="order-progress-step-item3">
          <span>4</span>
          <p>成功提交</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="order-cart-lists">
    <div class="order-cart-menu">
      <div class="order-cart-check">
        <label>
          <input type="checkbox" class="input-check" name="">
          <span>
            <i class="iconfont">&#xe62a;</i>
          </span>
          <span>全选</span>
        </label>
      </div>
      <div class="order-cart-menu-product">商品简介</div>
      <div class="order-cart-menu-price">单价</div>
      <div class="order-cart-menu-quantity">数量</div>
      <div class="order-cart-menu-total">金额（元）</div>
      <div class="order-cart-menu-action">操作</div>
    </div>
    <-- include('cart-item.tpl') -->
    <-- include('cart-item.tpl') -->
  </div>

  <div class="order-cart-sales">
    <span class="with-white-bg">立白</span><span class="with-blue-bg">满额换购</span>
    该订单满100元，即可参加3元换购Vichy精华水活动
  </div>

  <div class="order-cart-tool clearfix">
    <div class="order-cart-allpick">
      <label>
        <input type="checkbox" class="input-check" name="">
        <span>
          <i class="iconfont">&#xe62a;</i>
        </span>
        <span>全选</span>
      </label>
      <a href="javascript:;">删除</a>
      <a href="javascript:;">移入收藏夹</a>
    </div>
    <div class="order-cart-checkout">
      <span class="mr20">已选商品 <span class="red">2</span> 件</span>
      <span class="mr20">已优惠：<strong class="fs16">￥405.00</strong></span>
      <span>合计(不含运费)：<span class="red fs16">￥<strong>6,109.00</strong></span></span>
      <a href="order-check.html" class="button button-red button-medium">结 算</a>
    </div>
  </div>
</div>