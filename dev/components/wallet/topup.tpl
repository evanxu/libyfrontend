<div class="wallet-topup">
  <div class="box-title wallet-topup-box">
    <h3>
      <i class="iconfont">&#xe604;</i>
      <span>我的授信账户充值</span>
    </h3>
  </div>
  <div class="wallet-topup-content">
  <form class="form" action="javascript:;">
    <div class="form-item">
      <span class="form-title">充值账户：</span>
      <p>150****6386_m1215</p>
    </div>
    <div class="form-item">
      <span class="form-title">收款方：</span>
      <p>广州立白企业集团有限公司</p>
    </div>
    <div class="form-item">
      <span class="form-title">充值金额：</span>
      <input type="tel" class="input" placeholder="输入充值金额" name="">
    </div>
    <div class="form-item form-bank-choice">
      <span class="form-title">选择账户：</span>
      <input type="hidden" name="">
      <-- include('topup-banklist.tpl') -->
    </div>
    <div class="form-item">
      <span class="form-title">支付金额：</span>
      <p class="wallet-topup-amount" id="J-wallettopupAmount">￥1500000.00</p>
    </div>
    <div class="form-item">
      <span class="form-title">支付密码：</span>
      <input type="password" class="input" placeholder="输入支付密码" name="">
    </div>
    <div class="form-item">
      <label>
        <input type="checkbox" class="input-check" name="">
        <span>
          <i class="iconfont">&#xe62a;</i>
        </span>
        <span class="wallet-topup-accept">
          同意<a href="javascript:;">《立白经销商付费协议》</a>
        </span>
      </label>
    </div>
    <div class="wallet-topup-btn">
      <input type="button" value="立即充值" name="" class="button button-blue button-radius mr30">
      <a href="javascript:history.go(-1)" class="button button-grey button-radius">取消充值</a>
    </div>
  </form>
  </div>
</div>
