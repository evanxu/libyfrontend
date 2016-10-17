<h3>返利进度：<span><strong>40</strong>%</span></h3>
<div class="wallet-rebate-progress" id="J-walletRebateProgress" data-money="1230">
<!-- data-money的值为当前消费 -->
  <i class="wallet-rebate-progress-curr" id="J-walletRebateProgressCurr">
    <!-- style中的数值为（当前积分与上一级金额差/下一等级与上一级金额差/4）的百分比 + 25%，
      如当前800w，则： （800-800）/（1600-800）*100% + 25% = 25%
      如当前1230w，则： （1230-800）/（1600-800）/4*100% + 25% = 38.4%
    -->
  </i>
  <ul class="wallet-rebate-step" id="J-walletRebateStep">
    <li class="wallet-rebate-step-item0">
      <span>0</span>
    </li>
    <li class="wallet-rebate-step-item1">
      <span>800</span>
    </li>
    <li class="wallet-rebate-step-item2">
      <span>1600</span>
    </li>
    <li class="wallet-rebate-step-item3">
      <span>2400</span>
    </li>
    <li class="wallet-rebate-step-item4">
      <span>5000</span>
    </li>
  </ul>
</div>
<script type="text/javascript">
$(function(){
  var $this = $('#J-walletRebateProgress');
  var money = $this.data('money');
  var level = [0, 800, 1600, 2400, 5000];
  var currLevel, currWidth;
  for(var i = 5; i > 0; --i){
    if(money > level[i]){
      currLevel = i;
      break;
    }
  };
  currWidth = currLevel == 4 ? '100%' : ((money - level[currLevel]) / (level[currLevel + 1] - level[currLevel]) / 4 + 0.25) * 100 + '%';

  $this.children('#J-walletRebateProgressCurr').css('width', currWidth);

  $('#J-walletRebateStep li:lt(' + (currLevel + 1) + ')').addClass('active');
  $('<div class="wallet-rebate-tip"></div>').text('已购买金额：' + money + 'w').css('left', currWidth).appendTo($this);
  $('<div class="wallet-rebate-subtip"></div>').text('再购买' +  (level[currLevel + 1] - money) + 'w商品可获得下一等级返利').css('left', 25 * (i + 1) + '%').appendTo($this);
});
</script>
