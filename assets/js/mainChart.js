window.onload = function() {

    var charts = [];

    var myChart = echarts.init(document.getElementById('fjztChart'));
    var color = ['#2B69BB', '#34C7E5', '#FFC400'];
    var chartData = [{
            name: '运行',
            value: 13,
            unit: '台',
        },
        {
            name: '故障',
            value: 6,
            unit: '台',
        },
        {
            name: '检修中',
            value: 3,
            unit: '台',
        },

    ];
    var arrName = [];
    var arrValue = [];
    var sum = 0;
    var pieSeries = [],
        lineYAxis = [];

    // 数据处理
    chartData.forEach((v, i) => {
        arrName.push(v.name);
        arrValue.push(v.value);
        sum = sum + v.value;
    });

    // 图表option整理
    chartData.forEach((v, i) => {
        pieSeries.push({
            name: '类型',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [65 - i * 13 + '%', 57 - i * 13 + '%'],
            center: ['30%', '50%'],
            label: {
                show: false,
            },
            data: [{
                    value: v.value,
                    name: v.name,
                },
                {
                    value: sum - v.value,
                    name: '',
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            ],
        });
        pieSeries.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 13 + '%', 57 - i * 13 + '%'],
            center: ['30%', '50%'],
            label: {
                show: false,
            },
            data: [{
                    value: 7.5,
                    itemStyle: {
                        color: '#032260',
                    },
                },
                {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: 'rgba(255,0,0,0)',
                    },
                },
            ],
        });
        v.percent = ((v.value / sum) * 100).toFixed(1) + '%';
        lineYAxis.push({
            value: i,
            textStyle: {
                rich: {
                    circle: {
                        color: color[i],
                        padding: [0, 5],
                    },
                },
            },
        });
    });

    option = {
        color: color,
        grid: {
            top: '15%',
            bottom: '54%',
            left: '30%',
            containLabel: false,
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: function(params) {
                    let item = chartData[params];
                    console.log(item);
                    return (
                        '{line|}{name|' +
                        item.name +
                        '}{value|' +
                        item.value +
                        '}{unit|台}'
                    );
                },
                interval: 0,
                inside: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    rich: {
                        line: {
                            width: 170,
                            height: 1,
                            borderType: "dashed",
                            borderColor: "rgba(250, 250, 255, 1)",
                            borderWidth: 0.5
                                // backgroundColor: { image: dashedPic },
                        },
                        name: {
                            color: '#CFDCFF',
                            fontSize: 14,
                            width: 120
                        },

                        value: {
                            color: '#2AD0FF',
                            fontSize: 22,
                            fontWeight: 500,
                            padding: [0, 0, 0, 20],
                        },
                        unit: {
                            fontSize: 14,
                        },
                    },
                },
                show: true,
            },
            data: lineYAxis,
        }, ],
        xAxis: [{
            show: false,
        }, ],
        series: pieSeries,
    };
    myChart.setOption(option);
    charts.push(myChart);

    myChart = echarts.init(document.getElementById('gfdcChart'));
    option = {
        tooltip: {
            trigger: 'axis',
            show: false,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        legend: {
            show: false
        },
        grid: {
            left: '3%',
            right: '20%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        xAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            show: false,
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            axisLine: { //y轴
                show: false
            },
            type: 'category',
            axisTick: {
                show: false
            },
            inverse: true,
            data: ['电厂一', '电厂二', '电厂三', '电厂四'],
            axisLabel: {
                color: '#A7D6F4',
                fontSize: 14,
            }
        }],
        series: [{
            name: '标准化',
            type: 'bar',
            barWidth: 15, // 柱子宽度
            label: {
                show: true,
                position: 'right', // 位置
                color: '#A7D6F4',
                fontSize: 14,
                distance: 15, // 距离
                formatter: '{c}' // 这里是数据展示的时候显示的数据
            }, // 柱子上方的数值
            itemStyle: {
                barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）

                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#51C5FD'
                }, {
                    offset: 1,
                    color: '#005BB1'
                }], false), // 渐变
            },
            data: [400, 380, 360, 340]
        }, ]
    };
    myChart.setOption(option);
    charts.push(myChart);

    myChart = echarts.init(document.getElementById('wtkChart'));

    var category = [{
            name: "风场三",
            value: 8000
        },
        {
            name: "风场二",
            value: 7000
        },
        {
            name: "风场五",
            value: 6500
        },
        {
            name: "风场一",
            value: 6000
        },
        {
            name: "风场七",
            value: 5400
        },
        {
            name: "风场四",
            value: 5200
        },
        {
            name: "风场六",
            value: 4800
        },
        {
            name: "风场八",
            value: 3900
        }
    ]; // 类别
    // var total = 10000; // 数据总数
    var datas = [];
    category.forEach(value => {
        datas.push(value.name, value.value);
    });
    option = {

        xAxis: {

            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        grid: {
            left: 80,
            top: 20, // 设置条形图的边距
            right: 80,
            bottom: 20
        },
        yAxis: [{
            type: "category",
            inverse: true,
            data: ['风场三', '风场二', '风场五', '风场一', '风场七', '风场四', '风场六', '风场八'],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: "#ADEBEF"
            }
        }],
        series: [{
                // 内
                type: "bar",
                barWidth: 18,
                legendHoverLink: false,
                silent: true,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var color;
                            if (params.dataIndex == 0) {
                                color = {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                            offset: 0,
                                            color: "#EB5118" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#F21F02" // 100% 处的颜色
                                        }
                                    ]
                                }
                            } else if (params.dataIndex == 1) {
                                color = {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                            offset: 0,
                                            color: "#FFA048" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#B25E14" // 100% 处的颜色
                                        }
                                    ]
                                }
                            } else if (params.dataIndex == 2) {
                                color = {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                            offset: 0,
                                            color: "#F8E972" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#E5C206" // 100% 处的颜色
                                        }
                                    ]
                                }
                            } else {
                                color = {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                            offset: 0,
                                            color: "#1588D1" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#0F4071" // 100% 处的颜色
                                        }
                                    ]
                                }
                            }
                            return color;
                        },
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: "{c}",
                        textStyle: {
                            color: "#A7D6F4",
                            fontSize: 14
                        }
                    }
                },
                data: category,
                z: 1,
                animationEasing: "elasticOut"
            },
            {
                // 分隔
                type: "pictorialBar",
                itemStyle: {
                    normal: {
                        color: "#061348"
                    }
                },
                symbolRepeat: "fixed",
                symbolMargin: 4,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [5, 21],
                symbolPosition: "start",
                symbolOffset: [0, -1],
                // symbolBoundingData: this.total,
                data: category,
                z: 2,
                animationEasing: "elasticOut"
            },



        ]
    };
    myChart.setOption(option);
    charts.push(myChart);


    myChart = echarts.init(document.getElementById('ticketsChart'));
    var colors = ['#2B69BB', '#FFC400', '#34C7E5', ];
    var value = ((735 / (735 + 1048)) * 100).toFixed(2) + '%';
    option = {
        color: colors,
        value1: value,
        tooltip: {
            trigger: 'item',
            extraCssText: 'width:160px;height:60px;'
        },
        legend: {
            right: "2%",
            orient: "vertical",
            itemGap: 12,
            bottom: "46%",

            textStyle: {
                color: "white",
            }
        },
        series: [{
            name: '来源',
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'center',
                formatter: '{a| 消缺率}' + '\n\r' + '{c|' + value + '}',
                // text: '{a|' + value + '}{c|' + title + '}',

                textStyle: {
                    rich: {
                        a: {
                            fontSize: 14,
                            fontWeight: 500,
                            color: '#579ff9'
                        },
                        c: {
                            fontSize: 22,
                            color: '#FFC400',
                            fontWeight: 500,
                            padding: [5, 0]
                        }
                    }
                }
            },

            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: '发生次数' },
                { value: 735, name: '消缺次数' },
            ]
        }]
    };
    myChart.setOption(option);
    charts.push(myChart);





    myChart = echarts.init(document.getElementById('lpChart'));
    option = {

        tooltip: {
            trigger: 'axis',
            extraCssText: 'width:160px;height:60px;',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '15%',
            right: '3%',
            left: '8%',
            bottom: '12%'
        },
        xAxis: [{
            type: 'category',
            data: ['9-1', '9-2', '9-3', '9-4', '9-5', '9-6', '9-7'],
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14
                },
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(0,186,255,.6)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [{
            type: 'bar',
            data: [80, 80, 97, 53, 95, 26, 72],
            barWidth: '14%',

            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#00D6F9',
                        fontSize: 20
                    }

                }
            }
        }]
    };
    myChart.setOption(option);
    charts.push(myChart);


    myChart = echarts.init(document.getElementById('powerChart'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)'
                        }],
                        global: false
                    }
                },
            },
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '3%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                show: true
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00'
                },
            },
            axisLabel: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            data: ['电厂一', '电厂二', '电厂三', '电厂四', '电厂五', '电厂六', 'XX风场', 'XX风场', 'XX风场', 'XX风场', 'XX风场', 'XX风场', 'XX风场'],

        }],

        yAxis: [{
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',

                },
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
                name: '计划发电量',
                type: 'line',
                smooth: false, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    normal: {
                        color: "#00b3f4",

                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00b3f4',
                    }
                },
                itemStyle: {
                    color: "#3ACEFD",
                    // borderColor: "#fff",
                    // borderWidth: 1,

                },
                tooltip: {
                    show: false
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,179,244,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,179,244,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,179,244, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 332.79]
            },
            {
                name: '实际发电量',
                type: 'line',
                smooth: false, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    normal: {
                        color: "#FBE160",
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FBE160',
                    }
                },

                itemStyle: {
                    color: "#FBE160",
                    // borderColor: "#fff",
                    // borderWidth: 1,

                },
                tooltip: {
                    show: false
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FBE16033'
                            },
                            {
                                offset: 1,
                                color: '#FBE16000'
                            }
                        ], false),

                    }
                },
                data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, 398.35, 214.02, 502.84, 205.97, 332.79, 281.55, 398.35],
            },
        ]
    };
    myChart.setOption(option);
    charts.push(myChart);

    window.onresize = function() {
        for (var i = 0; i < charts.length; i++) {
            charts[i].resize();
        }
    }
}