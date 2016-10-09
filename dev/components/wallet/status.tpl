<div class="wallet-status">
  <ul class="wallet-tab">
    <li class="curr">
      <a href="#">经销商授信状态</a>
    </li>
    <li>
      <a href="#">我的返利</a>
    </li>
  </ul>
  <div class="wallet-status-chart">
    <div id="J-walletStatusChart" class="wallet-status-chart-detail"></div>
    <dl class="wallet-status-chart-text">
      <dt>
        <span class="fl">总资产：</span><strong class="fr">120000.00</strong>
      </dt>
      <dd>
        <span class="fl">授信余额：</span><span class="fr">70000.00</span>
      </dd>
      <dd>
        <span class="fl">消杀授信余额：</span><span class="fr">30000.00</span>
      </dd>
      <dd>
        <span class="fl">母婴授信余额：</span><span class="fr">10000.00</span>
      </dd>
      <dd>
        <span class="fl">洗护授信余额：</span><span class="fr">10000.00</span>
      </dd>
      <dd>
        <a href="#" class="button button-blue button-radius">账户充值</a>
      </dd>
    </dl>
  </div>
  <-- include('status-lists.tpl') -->
  查看全部做分页
</div>
<script type="text/javascript">
  (function(){
    var unit = '元';
    //pie chart
    var chart = echarts.init(document.getElementById('J-walletStatusChart'));
    var optionPie = {
      title: {
        text: '总资产(' + unit + ')',
        textStyle: {
          color: '#898989',
          fontSize: 12,
          fontWeight: 400
        },
        left: 'center',
        top: '110'
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
                  formatter: "120000.00",
                  textStyle: {
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
              value: 70,
              name: '授信余额',
              itemStyle: {
                normal: {
                  color: '#1990eb'
                },
                emphasis: {
                  color: '#1990eb'
                }
              },
              label: {
                normal: {
                  show: true
                }
              }
            },
            {
              value: 10,
              name: '消杀授信余额',
              itemStyle: {
                normal: {
                  color: '#ffc228'
                },
                emphasis: {
                  color: '#ffc228'
                }
              }
            },
            {
              value: 20,
              name: '母婴授信余额',
              itemStyle: {
                normal: {
                  color: '#ffecca'
                },
                emphasis: {
                  color: '#ffecca'
                }
              }
            },
            {
              value: 30,
              name: '洗护授信余额',
              itemStyle: {
                normal: {
                  color: '#8dc63f'
                },
                emphasis: {
                  color: '#8dc63f'
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
