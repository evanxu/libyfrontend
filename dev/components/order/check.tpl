<div class="order-check">
  <div class="order-title">
    <a href="homepage.html">
      <img src="../src/images/bg/bg-logo.png" width="100%">
    </a>
    <span class="order-title-text">确认订单信息</span>
    <div class="order-progress">
      <i class="order-progress-curr" style="width:33.33%">
      <!-- order-progress-curr根据当前的步骤决定，33.33% * (setp-1) -->
      </i>
      <ul class="order-progress-step">
        <li class="order-progress-step-item0 active">
          <span>1</span>
          <p>我的进货单</p>
        </li>
        <li class="order-progress-step-item1 active">
          <span>2</span>
          <p>确认订单信息</p>
        </li>
        <li class="order-progress-step-item2">
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
  <div class="order-check-content">
    <form class="form">
      <div class="order-check-info">
        <p class="order-check-title">确认收货信息</p>
        <div class="order-check-delivery">
          <div class="form-item form-item-block">
            <span class="form-title">收货方</span>
            <p>十堰万捷贸易有限公司</p>
          </div>
          <!-- <div class="form-item">
            <span class="form-title">选择承运商：</span>
            <ul class="order-check-delivery clearfix">
              <li class="iconfont">
                <label>
                  <input type="radio" name="delivery" checked>
                  <p>四平市通达运输邮箱公司</p>
                </label>
              </li>
              <li class="iconfont">
              <label>
                  <input type="radio" name="delivery">
                  <p>二平市运达运输邮箱公司</p>
                </label>
              </li>
              <li class="iconfont">
              <label>
                  <input type="radio" name="delivery">
                  <p>二平市快通运输邮箱公司</p>
                </label>
              </li>
            </ul>
          </div> -->
          <div class="form-item form-item-block">
            <span class="form-title">收货地址</span>
            <ul class="order-check-address clearfix">
              <li>
                <label>
                  <input type="radio" name="address" checked>
                  <div class="order-check-address-detail">
                    <p class="order-check-address-name">
                      <span>王小帅</span>
                      <span class="fr">18823645824</span>
                    </p>
                    <p>上海杨浦区内环以内</p>
                    <p>北京东路180号广澳大厦2单元11室</p>
                  </div>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="address">
                  <div class="order-check-address-detail">
                    <p class="order-check-address-name">
                      <span>王小帅</span>
                      <span class="fr">18823645824</span>
                    </p>
                    <p>上海杨浦区内环以内</p>
                    <p>北京东路180号广澳大厦2单元11室</p>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='order-check-lists'>
        <p class="order-check-title">确认商品信息</p>
        <div class="order-check-menu">
          <div class="order-check-menu-product">商品简介</div>
          <div class="order-check-menu-price">单价</div>
          <div class="order-check-menu-quantity">数量</div>
          <div class="order-check-menu-total">金额（元）</div>
        </div>
        <-- include('check-item.tpl') -->
      </div>

      <div class="order-check-sales">
        <span class="with-white-bg">立白</span><span class="with-blue-bg">满额换购</span>
        该订单满100元，即可参加3元换购Vichy精华水活动
        <div class="order-check-product-info">
          <span class="mr15">
            总吨位（吨）:<strong>1.000</strong>
          </span>
          <span>
            总体积（立方米）:<strong>1.000</strong>
          </span>
        </div>
      </div>

      <div class="order-check-remark clearfix">
        <div class="order-check-remark-left">
          备注：
          <input type="text" class="input" name="" placeholder="（选填）有什么特殊需求，告诉立白吧">
        </div>
        <ul class="order-check-remark-right">
          <li class="order-check-charge">
            <span class="order-check-charge-title">优惠：</span>
            <strong>-<span class="currency">￥</span>0.00</strong>
          </li>
          <li class="order-check-charge">
            <span class="order-check-charge-title">运费：</span>
            <strong><span class="currency">￥</span>0.00</strong>
          </li>
          <li class="order-check-charge">
            <span class="order-check-charge-title">应付总额：</span>
            <strong><span class="currency">￥</span>120,000.00</strong>
          </li>
        </ul>
      </div>
      <div class="order-check-payment clearfix">
        <div class="order-check-charge">
          <span class="order-check-charge-title">实付款：</span>
          <strong><span class="currency">￥</span>120,000.00</strong>
        </div>
      </div>

      <div class="order-check-topup">
        <span class="mr20">金额： <strong><span class="currency">￥</span>120,000.00</strong></span>
        <span class="mr20">授信金额：<strong class="fs16 red"><span class="currency">￥</span>1,109.00</strong></span>
        <span>已发货金额：<strong><span class="currency">￥</span>0.00</strong></span>
        <a href="wallet-topup.html" class="button button-blue button-medium">充 值</a>
      </div>

      <div class="order-check-checkout">
        <a href="order-cart.html">
          <i class="iconfont">&#xe62c;</i>
          <span>返回进货单修改</span>
        </a>
        <!-- demo页面，临时加入onclick事件 -->
        <input type="button" class="button button-red" value="保存订单" onclick="javascript:location.href='order-save.html'">
      </div>
    </form>
  </div>
</div>
