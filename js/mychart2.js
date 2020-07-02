var dom = document.getElementById("mychart2");
var mychart2 = echarts.init(dom);
var app = {};
option = {
    title: {
        text: '2010-2020中国贫困标准线',
        left: 'center',
        top:'top',
        textStyle: {
            fontSize: 17,
        }
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
    xAxis: {
        boundaryGap: false,
        splitLine: {show: false},
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014','2015', '2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
        type: 'value',
        min: 2000,
        name: '单位：元/年·人',
        splitLine: {show: false},
        axisLine: {show:false},
        axisTick: {show:false},
    },
    lineStyle: {
        width: 2,
        color:'#ee522f',
        // shadowColor: 'rgba(0,0,0,0.1)',
        // shadowBlur: 10,
        // shadowOffsetY: 10,
    },
    series: [
        {
            name: '贫困标准线',
            type: 'line',
            step: 'middle',
            data: [2300, 2536, 2625, 2736, 2800, 2968, 3146, 3335, 3535, 3747, 4000],
            lineStyle: {
                width: 2,
                // shadowColor: 'rgba(0,0,0,0.1)',
                // shadowBlur: 10,
                // shadowOffsetY: 10,
            },
        }
    ]
};
mychart2.setOption(option, true);