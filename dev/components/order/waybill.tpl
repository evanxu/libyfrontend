<div class="order-waybill">
  <div class="order-title">
    <a href="homepage.html">
      <img src="../src/images/bg/bg-logo.png" width="100%">
    </a>
    <span class="order-title-text">提交运货单</span>
    <div class="order-progress">
      <i class="order-progress-curr" style="width:66.66%">
      <!-- order-progress-curr根据当前的步骤决定，33.33% * (setp-1) -->
      </i>
      <ul class="order-progress-step">
        <li class="order-progress-step-item0 active">
          <span>1</span>
          <p>我的进货单</p>
        </li>
        <li class="order-progress-step-item1 active">
          <span>2</span>
          <p>填写核对订单信息</p>
        </li>
        <li class="order-progress-step-item2 active">
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
          <dl><dt>订单编号：</dt><dd>15109860</dd></dl>
          <dl><dt>订单类型：</dt><dd>Z001</dd></dl>
          <dl><dt>订单状态：</dt><dd>已创建</dd></dl>
          <dl><dt>请求发货日期：</dt><dd>2016-09-06</dd></dl>
        </div>
        <div class="order-waybill-info-top">
          <dl><dt>客户名称：</dt><dd>十堰万界贸易有限公司</dd></dl>
          <dl><dt>送达方：</dt><dd>刘晓雪：沈阳苏家屯迎春街232号(6009603)</dd></dl>
          <dl><dt>送货地址：</dt><dd>沈阳苏家屯迎春街232号(6009603)</dd></dl>
          <dl><dt>承运方：</dt><dd>沈阳苏家屯迎春街232号(6009603)</dd></dl>
        </div>
        <div class="order-waybill-info-btm">
          <dl><dt>总数量(件)：</dt><dd>15000</dd></dl>
          <dl><dt>总吨位(吨)：</dt><dd>19950</dd></dl>
          <dl><dt>总体积(立方米)：</dt><dd>69000</dd></dl>
        </div>
        <div class="order-waybill-info-btm">
          <dl><dt>已发货总数量(件)：</dt><dd>0</dd></dl>
          <dl><dt>已发货总吨位(吨)：</dt><dd>0</dd></dl>
          <dl><dt>已发货总体积(立方米)：</dt><dd>0</dd></dl>
        </div>
        <div class="order-waybill-info-btm">
          <dl><dt>吨位上限：</dt><dd>13</dd></dl>
          <dl><dt>吨位下限：</dt><dd>5</dd></dl>
          <dl><dt>方数上限：</dt><dd>55</dd></dl>
        </div>
      </div>
      <div class='order-waybill-lists'>
        <p class="order-waybill-lists-title">商品信息</p>
        <div class="order-waybill-menu">
          <div class="order-waybill-menu-product">商品简介</div>
          <div class="order-waybill-menu-price">单价</div>
          <div class="order-waybill-menu-quantity">数量</div>
          <div class="order-waybill-menu-discount">优惠方式</div>
          <div class="order-waybill-menu-total">金额（元）</div>
        </div>
        <-- include('waybill-item.tpl') -->
      </div>

      <div class="order-waybill-remark">
        备注：无备注
      </div>

      <div class="order-waybill-topup">
        <span class="mr20">金额： <strong>￥120,000.00</strong></span>
        <span class="mr20">授信金额：<strong class="fs16 red">￥1,109.00</strong></span>
        <span>已发货金额：<strong>￥0.00</strong></span>
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
