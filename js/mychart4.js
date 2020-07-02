var dom = document.getElementById("mychart4");
var mychart4 = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '2010-2020中央财政专项扶贫资金投入',
        left: 'center',
        textStyle: {
            fontSize: 15,
        }
    },
    xAxis: {
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
        type: 'value',
        min: 10,
        name:'单位：亿元',
        axisLine: {show:false},
        axisTick: {show:false},
        splitLine:{show:false},
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    lineStyle: {
        width: 2,
        color:'#ee522f',
        // shadowColor: 'rgba(0,0,0,0.1)',
        // shadowBlur: 10,
        // shadowOffsetY: 10,
    },
    series: [{
        name: '扶贫专项资金',
        data: [222.68, 272.00, 332.05, 394.00, 432.87, 467.45, 670, 860.95, 1060.95, 1260.95, 1396.36],
        type: 'line',
        /*lineStyle: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowBlur: 10,
            shadowOffsetY: 10
        }, */
    }],

};


mychart4.setOption(option, true);