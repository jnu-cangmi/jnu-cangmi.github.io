var dom = document.getElementById("mychart5");
var mychart5 = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '2012-2019新农合人均补助标准',
        left: 'center',
        textStyle: {
            fontSize: 15,
        }
    },
    xAxis: {
        type: 'category',
        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        type: 'value',
        min: 200,
        name:'单位：元',
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
        name: '新农合人均补助标准',
        data: [240, 280, 320, 380, 420, 450, 490, 520],
        type: 'line',
        /*lineStyle: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowBlur: 10,
            shadowOffsetY: 10
        }, */
    }],

};


mychart5.setOption(option, true);