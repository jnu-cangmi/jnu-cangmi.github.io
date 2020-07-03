var dataList=[
    {name:"南海诸岛",value:0},
    {name: '北京', value: 0},
    {name: '天津', value: 0},
    {name: '上海', value: 0},
    {name: '重庆', value: 14},
    {name: '河北', value: 45},
    {name: '河南', value: 38},
    {name: '云南', value: 88},
    {name: '辽宁', value: 0},
    {name: '黑龙江', value: 20},
    {name: '湖南', value: 40},
    {name: '安徽', value: 20},
    {name: '山东', value: 0},
    {name: '新疆', value: 32},
    {name: '江苏', value: 0},
    {name: '浙江', value: 0},
    {name: '江西', value: 24},
    {name: '湖北', value: 28},
    {name: '广西', value: 33},
    {name: '甘肃', value: 58},
    {name: '山西', value: 36},
    {name: '内蒙古', value: 31},
    {name: '陕西', value: 56},
    {name: '吉林', value: 8},
    {name: '福建', value: 0},
    {name: '贵州', value: 66},
    {name: '广东', value: 0},
    {name: '青海', value: 42},
    {name: '西藏', value: 74},
    {name: '四川', value: 66},
    {name: '宁夏', value: 8},
    {name: '海南', value: 5},
    {name: '台湾', value: 0},
    {name: '香港', value: 0},
    {name: '澳门', value: 0}
]
var mychart1 = echarts.init(document.getElementById('mychart1'));


option = {
    title: {
        left: 'center',
        text: '中国贫困县数量分布图（2014年）',
        top:'top',
        textStyle: {
            fontSize: 17,
        }
    },
    
    tooltip: {
        formatter:function(params,ticket, callback){
            return params.seriesName+'<br />'+params.name+'：'+params.value
        }//数据格式化
    },
    
    visualMap: {
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['100','0'],//取值范围的文字
        inRange: {
            color: ['#ffffff', '#B65458']//取值范围的颜色
        },
        show:true//图注
    },
    geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom:1.23,//视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize:'10',
                color: 'rgba(0,0,0,0.7)'   //地图上文字颜色
            }
        },
        itemStyle: {
            normal:{
                borderColor: 'rgba(0, 0, 0, 0.2)'    //省界限颜色
            },
            emphasis:{
                areaColor: '#F3B329',//鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'  //阴影颜色
            }
        }
    },
    series : [
        {
            name: '贫困县数量',
            type: 'map',
            geoIndex: 0,
            data:dataList
        }
    ]
};
mychart1.setOption(option);