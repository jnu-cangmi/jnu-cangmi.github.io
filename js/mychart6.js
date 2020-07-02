var dom = document.getElementById("mychart6");
var mychart6 = echarts.init(dom);
var app = {};
option = null;

    option = {
        // title:{
        // text: '农村基础设施覆盖率',
        // left: 'center',
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        
        legend: {
            data: ['通电话', '通有线电视信号', '通宽带', '主干道路面硬化', '通客运班车'],
            itemGap: 15,
            left:'center'
        },
        grid: {
            top: '12%',
            left: '2%',
            right: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [2013,2014,2015,2016,2017,2018]
            }
        ],
        yAxis: [
            {
                type: 'value',
                name:'单位: %'
            }
        ],
        series: [
            {
                name: '通电话',
                type: 'bar',
                data: [93.3, 95.2, 97.6, 98.2, 98.5, 99.2],
                itemStyle: {
                    color:'#dbdbdb',
                },
            },
            {
                name: '通有线电视信号',
                type: 'bar',
                data: [70.7, 75, 79.3, 81, 86.5, 88.1],
                itemStyle: {
                    color:'#ed7d31',
                },
            },
            {
                name: '通宽带',
                type: 'bar',
                data: [41.5, 48, 56.3, 63.4, 71, 81.9],
                itemStyle: {
                    color:'#a5a5a5',
                },
            },
            {
                name: '主干道路面硬化',
                type: 'bar',
                data: [59.5, 64.7, 73, 77.9, 81.1, 82.6],
                itemStyle: {
                    color:'#ffc000',
                },
            },
            {
                name: '通客运班车',
                type: 'bar',
                data: [38.8, 42.7, 47.8, 49.9, 51.2, 54.7],
                itemStyle: {
                    color:'#beb34b',
                },
            }
        ]
    };

    mychart6.setOption(option);