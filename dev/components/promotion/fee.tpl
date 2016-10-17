<div class="promotion-fee">
  <div class="promotion-tab">
    <ul class="promotion-operate">
      <li><a href="promotion-liby-activity.html">立白促销</a></li>
      <li><a href="promotion-my-activity.html">我的促销</a></li>
      <li><a href="javascript:;" class="curr">费用核销</a></li>
    </ul>
  </div>
  <div class="promotion-fee-chart">
    <div id="J-promotionFeeChart" class="promotion-fee-chart-detail"></div>
    <dl class="promotion-fee-chart-text">
      <dt>
        <span class="fl">可用促销余额：</span><strong class="fr">￥100000.00</strong>
      </dt>
      <dd>
        <span class="fl">促销费用总额：</span><span class="fr">￥400000.00</span>
      </dd>
      <dd>
        <span class="fl">促销专款数：</span><span class="fr">共3个促销费用</span>
      </dd>
    </dl>
  </div>
  <div class="promotion-fee-lists">
  	<div class="promotion-fee-lists-tab" id="J-promotionFeeListsTab">
	    <a href="javascript:;" class="curr">全部核销明细</a>
	    <a href="javascript:;">待核销明细</a>
	    <a href="javascript:;">待审批明细</a>
	  </div>
	  <dl>
	  	<dt>
	      <p class="promotion-fee-item-name">核销名目</p>
	      <p class="promotion-fee-item-amount">总费用</p>
	      <p class="promotion-fee-item-price">核销费用</p>
	      <p class="promotion-fee-item-date">核销日期</p>
	      <p class="promotion-fee-item-status">状态</p>
	    </dt>
	    <dd class="promotion-fee-item">
	    	<p class="promotion-fee-item-name">立白周年大促</p>
	      <div class="promotion-fee-item-amount">
	      	<p class="fs16">￥50000.00</p>
    			<!--
    				下面i的长度为已核销费用比，已核销
    				< 50%, div = promotion-fee-bar-enough
    				> 50%, div = promotion-fee-bar-less
    				= 100%, div = promotion-fee-bar-none
    			 -->
	      	<div class="promotion-fee-bar promotion-fee-bar-none">
	      		<i style="width:100%"></i>
	      	</div>
	      	<p>已全部核销</p>
	      </div>
	      <div class="promotion-fee-item-price">
	      	<p>- ￥30000.00</p>
	      	<p>- ￥20000.00</p>
	      </div>
	      <div class="promotion-fee-item-date">
	      	<p>2016-09-10</p>
	      	<p>2016-09-20</p>
	      </div>
	      <div class="promotion-fee-item-status">
	      	<p>已完成</p>
	      	<p>已完成</p>
	      </div>
	    </dd>

	    <dd class="promotion-fee-item">
	    	<p class="promotion-fee-item-name">立白周年大促</p>
	      <div class="promotion-fee-item-amount">
	      	<p class="fs16">￥150000.00</p>
	      	<!--
	  				下面i的长度为已核销费用比，已核销
	  				< 50%, div = promotion-fee-bar-enough
	  				> 50%, div = promotion-fee-bar-less
	  				= 100%, div = promotion-fee-bar-none
	  			 -->
	      	<div class="promotion-fee-bar promotion-fee-bar-enough">
	      		<i style="width:30%"></i>
	      	</div>
	      	<p>可用余额 70%</p>
	      </div>
	      <div class="promotion-fee-item-price">
	      	<p>- ￥30000.00</p>
	      	<p>- ￥20000.00</p>
	      </div>
	      <div class="promotion-fee-item-date">
	      	<p>2016-09-10</p>
	      	<p>2016-09-20</p>
	      </div>
	      <div class="promotion-fee-item-status">
	      	<p>已完成</p>
	      	<p>已完成</p>
	      </div>
	    </dd>

	    <dd class="promotion-fee-item">
	    	<p class="promotion-fee-item-name">立白周年大促</p>
	      <div class="promotion-fee-item-amount">
	      	<p class="fs16">￥150000.00</p>
	      	<!--
	  				下面i的长度为已核销费用比，已核销
	  				< 50%, div = promotion-fee-bar-enough
	  				> 50%, div = promotion-fee-bar-less
	  				= 100%, div = promotion-fee-bar-none
	  			 -->
	      	<div class="promotion-fee-bar promotion-fee-bar-less">
	      		<i style="width:60%"></i>
	      	</div>
	      	<p>可用余额 40%</p>
	      </div>
	      <div class="promotion-fee-item-price">
	      	<p>- ￥30000.00</p>
	      	<p>- ￥20000.00</p>
	      	<p>- ￥40000.00</p>
	      </div>
	      <div class="promotion-fee-item-date">
	      	<p>2016-09-10</p>
	      	<p>2016-09-20</p>
	      	<p>2016-09-27</p>
	      </div>
	      <div class="promotion-fee-item-status">
	      	<p>已完成</p>
	      	<p>已完成</p>
	      	<p><strong>待审核</strong></p>
	      </div>
	    </dd>

	  </dl>
  </div>
</div>
<script type="text/javascript">
  (function(){
    var unit = '元';
    //pie chart
    var chart = echarts.init(document.getElementById('J-promotionFeeChart'));
    var optionPie = {
      title: {
        text: '已核销',
        textStyle: {
          color: '#898989',
          fontSize: 12,
          fontWeight: 400
        },
        left: 'center',
        top: '120'
      },
      tooltip: {
          trigger: 'item',
          formatter: "{b}: {c}" + unit + "({d}%)"
      },
      series: [
        {
          //name:'访问来源',
          type:'pie',
          center: ['50%', '50%'],
          radius: ['40%', '65%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center',
                  formatter: "{d}%",
                  textStyle: {
                  	color:'#04a1e9',
                    fontWeight: 'bolder',
                    fontSize: 22
                  }
              },
              emphasis: {
                show: false
              }
          },
          labelLine: {
              normal: {
                show: false
              }
          },
          data:[
            {
              value: 300000,
              name: '已核销费用',
              itemStyle: {
                normal: {
                  color: '#8dc63f'
                },
                emphasis: {
                  color: '#8dc63f'
                }
              },
              label: {
                normal: {
                  show: true,
                  shiftY: 10
                }
              }
            },
            {
              value: 100000,
              name: '未核销费用',
              itemStyle: {
                normal: {
                  color: '#ebebeb'
                },
                emphasis: {
                  color: '#ebebeb'
                }
              }
            }
          ]
        }
      ]
    };
    chart.setOption(optionPie);
    //pie chart over
  })()
</script>
