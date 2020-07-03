var myMoney;
var ctx = document.getElementById("mychart3");
var mychart3 = new Chart(ctx, {
    type: 'horizontalBar',
    data:{
        datasets:[{
            label:"贫困标准线",
            backgroundColor: 'rgb(176, 162, 155, 0.7)',  
            borderColor:'rgb(176, 162, 155, 1)',
            borderWidth: 1,  
            data:[333]
        },{
            label:"你的生活费",
            backgroundColor: 'rgba(167, 163, 167, 1)',
            borderColor:'rgba(176, 162, 155, 1)',
            borderWidth: 1,
            data:[0]
        }],
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                },
            }]
        },

        legend: {
            position: 'bottom',
        },

        tooltips: {
            enabled: false,
        }

    }

});

function calMoney(e) {
    var evt = window.event || e;
    if (evt.keyCode == 13) {
        //回车后显示自己那条bar
        var myMoney=document.getElementById('number').value;
        mychart3.data.datasets[1].data = [myMoney];
        mychart3.update();
        //回车后显示你的生活费是几倍的贫困标准线
        var beishu=(myMoney/333).toFixed(1);
        var inserthtml="<div style='width:80%; max-width:500px; font-size:14px; color:rgb(80, 80, 80); line-height:28px; background-color:rgb(232, 232, 232); border-left:1.5px solid rgb(100, 100, 100); margin:40px auto 0 auto; padding: 10px 20px;'>你的生活费是贫困标准线的"+beishu+"倍，也就是说，你一个月的正常花销超过了仍未摆脱绝对贫困的人"+beishu+"个月的收入总和。</div>"
        document.getElementById("describe").innerHTML=inserthtml;

    }
}
