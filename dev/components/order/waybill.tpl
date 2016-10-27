<div class="order-waybill">
  <div class="order-title">
    <a href="homepage.html">
      <img src="../src/images/bg/bg-logo.png" width="100%">
    </a>
    <span class="order-title-text">生成交货单</span>
    <div class="order-progress">
      <i class="order-progress-curr" style="width:100%">
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
        <li class="order-progress-step-item2 active">
          <span>3</span>
          <p>订单提交成功</p>
        </li>
        <li class="order-progress-step-item3 active">
          <span>4</span>
          <p>生成交货单</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="order-waybill-content">
    <div class="box-title">
      <h3>
        <i class="iconfont">&#xe604;</i>
        <span>订单详情</span>
      </h3>
    </div>
    <form class="form">
      <div class="order-waybill-info">
        <div class="order-waybill-info-top">
          <p><span>订单编号：</span><span>15109860</span></p>
          <p><span>订单类型：</span><span>Z001</span></p>
          <p><span>订单状态：</span><span>已创建</span></p>
          <p><span>请求发货日期：</span><span>2016-09-06</span></p>
        </div>
        <div class="order-waybill-info-top">
          <p><span>客户名称：</span><span>十堰万界贸易有限公司</span></p>
          <p><span>送达方：</span><span>刘晓雪：沈阳苏家屯迎春街232号</span></p>
          <p><span>送货地址：</span><span>沈阳苏家屯迎春街232号(6009603)</span></p>
          <p><span>承运方：</span><span>沈阳苏家屯迎春街232号(6009603)</span></p>
        </div>
        <div class="order-waybill-info-btm">
          <p><span>总数量(件)：</span><span>15000</span></p>
          <p><span>总吨位(吨)：</span><span>19950</span></p>
          <p><span>总体积(立方米)：</span><span>69000</span></p>
        </div>
        <div class="order-waybill-info-btm">
          <p><span>已发货总数量(件)：</span><span>0</span></p>
          <p><span>已发货总吨位(吨)：</span><span>0</span></p>
          <p><span>已发货总体积(立方米)：</span><span>0</span></p>
        </div>
        <div class="order-waybill-info-btm">
          <p><span>吨位上限：</span><span>13</span></p>
          <p><span>吨位下限：</span><span>5</span></p>
          <p><span>方数上限：</span><span>55</span></p>
        </div>
      </div>
      <div class='order-waybill-lists'>
        <p class="order-waybill-lists-title">商品信息</p>
        <div class="order-waybill-menu">
          <div class="order-waybill-menu-product">商品简介</div>
          <div class="order-waybill-menu-price">单价</div>
          <div class="order-waybill-menu-quantity">数量</div>
          <div class="order-waybill-menu-discount">优惠方式</div>
          <div class="order-waybill-menu-total">金额</div>
        </div>
        <-- include('waybill-item.tpl') -->
      </div>

      <div class="order-waybill-remark">
        备注：无备注
      </div>

      <div class="order-waybill-topup">
        <span class="mr20">金额： <strong><span class="currency">￥</span>120,000.00</strong></span>
        <span class="mr20">授信金额：<strong class="fs16 red"><span class="currency">￥</span>1,109.00</strong></span>
        <span>已发货金额：<strong><span class="currency">￥</span>0.00</strong></span>
        <a href="wallet-topup.html" class="button button-blue button-medium">充 值</a>
      </div>

      <div class="order-waybill-checkout">
        <a href="javascript:;">
          <i class="iconfont">&#xe62c;</i>
          <span>返回上一步</span>
        </a>
        <!-- demo页面，临时加入onclick事件 -->
        <input type="button" class="button button-red" value="提交交货单" onclick="javascript:location.href='order-success.html'">
      </div>
    </form>
  </div>
</div>
