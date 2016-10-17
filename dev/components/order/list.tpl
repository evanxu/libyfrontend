<div class="order-list">
  <ul class="order-list-tab">
    <li class="curr">
      <a href="javascript:;">我的订单</a>
    </li>
    <li>
      <a href="javascript:;">我的退货单</a>
    </li>
  </ul>
  <div class="order-list-content">
    <div class="order-list-subtab">
      <a href="javascript:;" class="curr">全部订单</a>
      <a href="javascript:;">已创建</a>
      <a href="javascript:;">已审核</a>
      <a href="javascript:;">待处理</a>
      <a href="javascript:;">部分发货</a>
      <a href="javascript:;">已发货</a>
      <a href="javascript:;">已签收</a>
    </div>
    <div class="order-list-filter">
      <form class="form">
        <span>生成时间：</span>
        <input type="text" class="input" placeholder="请选择起始时间" name="">
        <i class="iconfont">&#xe610;</i>
        -
        <input type="text" class="input" placeholder="请选择结束时间" name="">
        <i class="iconfont">&#xe610;</i>
        <input type="button" class="button button-blue button-xsmall button-inline" value="确定">
        <div class="order-list-filter-search">
          <input type="text" class="input" placeholder="请输入订单号" name="">
          <i class="iconfont">&#xe61c;</i>
        </div>
      </form>
    </div>
    <-- include('list-item.tpl') -->
  </div>
  
  <-- include('../common/pagination.tpl') -->
</div>