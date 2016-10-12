<div class="index-chart">
  <div class="box-title">
    <h3>
      <i class="iconfont">&#xe61a;</i>
      <span>我的报表</span>
    </h3>
  </div>
  <div class="index-chart-content">
    <div class="index-chart-left chart-box">
      <p class="chart-title">17年销售目标：10000元</p>
      <div id="J-indexChartLeft" class="chart-detail"></div>
      <div class="chart-other">
        <div class="chart-finish chart-finish-blue"><span class="with-bg">已完成</span><span class="with-border">目标</span></div>
        <p><strong class="fs16">8103.00</strong><span class="fs12">元</span><p>
      </div>
    </div>
    <div class="index-chart-right" id="J-indexChartRight">

    </div>
  </div>
</div>
<script type="text/javascript">
    (function(){

      //pie chart
      var chart = echarts.init(document.getElementById('J-indexChartLeft'));
      var optionPie = {
        title: {
          text: '完成目标率',
          textStyle: {
            color: '#898989',
            fontSize: 12,
            fontWeight: 400
          },
          left: 'center',
          top: '150'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}({d}%)"
        },
        series: [
          {
            //name:'访问来源',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: "{d}%",
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
                value: 73,
                name: '已完成',
                label: {
                  normal: {
                    show: true,
                    shiftY: 10
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#04a1e9'
                  },
                  emphasis: {
                    color: '#04a1e9'
                  }
                }
              },
              {
                value: 27,
                name: '未完成',
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
      //
      //line chart
      var chartLine = echarts.init(document.getElementById('J-indexChartRight'));
      var optionLine = {
          tooltip: {
              trigger: 'axis'
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisLine: {
                lineStyle: {
                  color: '#7a8290'
                }
              }
          },
          yAxis: {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#7a8290'
                }
              }
          },
          series: [
              {
                  name:'已完成',
                  type:'line',
                  lineStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0, color: '#ff8400'
                      }, {
                        offset: 1, color: '#e31406'
                      }], false)
                  }},
                  areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0, color: '#ff8400'
                    }, {
                      offset: 1, color: '#e00707'
                    }], false),
                    opacity: 0.2
                  }},
                  data:[120, 132, 101, 134, 90, 230, 210, 301, 134, 90, 230, 210]
              },
              {
                  name:'未完成',
                  type:'line',
                  lineStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0, color: '#68dfa7'
                      }, {
                        offset: 1, color: '#1b9ad2'
                      }], false)
                  }},
                  areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0, color: '#5ae6b7'
                    }, {
                      offset: 1, color: '#0ea4df'
                    }], false),
                    opacity: 0.1
                  }},
                  data:[220, 82, 91, 234, 290, 330, 310, 60, 434, 190, 30, 110]
              }
          ]
      };
      chartLine.setOption(optionLine);
      //line chart over
    })();


  </script>
