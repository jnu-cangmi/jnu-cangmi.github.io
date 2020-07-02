var dom = document.getElementById("mychart9");
var mychart9 = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
            name: '牺牲原因',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 66, name: '车祸'},
                {value: 48, name: '疾病'},
                {value: 22, name: '意外灾害'},
                {value: 12, name: '过劳猝死'},
                {value: 3, name: '不详'},
                {value: 1, name: '其他'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};



mychart9.setOption(option, true);
