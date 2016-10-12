;(function($){
  var defaults = {
    title: {},
    formatter: "", //"{d}%"
    data: null
  };

  function Chart($obj, options){
    this.ele = $obj[0];
    this.settings = $.extend(defaults, options);
    console.log(this.settings.styleColor[0]);
    this.init();
  }

  Chart.prototype = {
    init: _init,
    drawChart: _drawChart,
    makeChartItem: _makeChartItem,
    queryData: _queryData,
    getChartOption: _getChartOption
  };

  function _init(){
    var chart = echarts.init(this.ele);
    var chartOption;
    var $promise;
    var that = this;


    if(that.settings.ajax){
      $promise = that.queryData(that.settings.ajax);
      $promise.done(function(data){
        that.drawChart(chart, data);
      })
    }else if(that.settings.data){
      that.drawChart(chart, that.settings.data);
    }else{
      return false;
    }
  };

  function _drawChart(chart, data){
    var that = this;

    that.settings.chartItem = that.makeChartItem(data);
    chartOption = that.getChartOption(that.settings);
    chart.setOption(chartOption);

    if(that.settings.callback && typeof that.settings.callback == 'function'){
      that.settings.callback(data);
    }
  }

  function _queryData(config){
    return $.ajax({
       url: config.url,
       type: 'get',
       dataType: 'json',
       data: config.data,
       beforeSend: function(){

       }
    });
  };

  function _makeChartItem(data){
    var newData = [];
    var obj = {};
    var that = this;
    /* for example
    [{
      value: value,
      name: 'name'
    }]
     */
    for(var i = 0, len = data.length; i < len; i++){
      obj = {
        value: data[i].value,
        name: data[i].name,
        label: {
          normal: {
            show: i == 0 ? true : false,
            shiftY: 10
          }
        }
      };
      if(that.settings.styleColor){
        obj.itemStyle = {
          normal: {
            color: that.settings.styleColor[i]
          },
          emphasis: {
            color: that.settings.styleColor[i]
          }
        }
      }
      newData.push(obj);
    }
    return newData;
  }

  function _getChartOption(options){
    var title;
    var obj;

    obj = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}({d}%)"
      },
      series: [{
        //name:'访问来源',
        type:'pie',
        center: ['50%', '50%'],
        radius: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
              show: false,
              position: 'center',
              formatter: options.formatter,
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
        }
      }]
    };

    if(options.title){
      /*
      {
        text: text,
        color: color,
        fontSize: font-size,
        fontWeight: font-weight,
        pos: {
          left: left,
          top: top
        }
      }
       */
      title = options.title;
      obj.title = {
        text: title.text,
        textStyle: {
          color: title.color || '#898989',
          fontSize: title.fontSize || 12,
          fontWeight: title.fontWeight || 400
        },
        left: title.pos.left || 'center',
        top: title.pos.top || 'center'
      };
    };

    obj.series[0].data = options.chartItem;
    return obj;
  }


  $.fn.extend({
    drawChart: function(options){
      console.log($(this));
      return new Chart($(this), options);
    }
  });
})(jQuery);
