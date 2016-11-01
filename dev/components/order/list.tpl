<div class="order-list">
  <ul class="order-list-tab">
    <li class="curr">
      <a href="javascript:;">我的订单</a>
    </li>
    <li>
      <a href="javascript:;" class="nolink">我的退货单</a>
    </li>
  </ul>
  <div class="order-list-content">
    <div class="order-list-subtab">
      <a href="javascript:;" class="curr">全部订单</a>
      <a href="javascript:;">待处理<span class="red ml5">11</span></a>
      <a href="javascript:;">申请交货<span class="red ml5">0</span></a>
      <a href="javascript:;">待发货<span class="red ml5">6</span></a>
      <a href="javascript:;">待收货<span class="red ml5">1</span></a>
    </div>
    <div class="order-list-filter">
      <form class="form">
        <span class="order-list-filter-text">生成时间：</span>
        <div class="form-datepicker order-list-filter-date">
          <input type="text" class="input" placeholder="请选择起始时间" name="">
        </div>
        <span class="order-list-filter-text">-</span>
        <div class="form-datepicker order-list-filter-date">
          <input type="text" class="input" placeholder="请选择结束时间" name="">
        </div>

        <input type="button" class="button button-blue button-xsmall button-inline" value="确定">
        <div class="form-search order-list-filter-search">
          <input type="text" class="input" placeholder="请输入订单号" name="">
        </div>
      </form>
    </div>
    <-- include('list-item.tpl') -->
  </div>

  <-- include('../common/pagination.tpl') -->
</div>
