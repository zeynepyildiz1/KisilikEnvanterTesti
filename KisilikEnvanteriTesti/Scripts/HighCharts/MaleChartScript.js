
$(document).ready(function () {

    $.getJSON("/Reporting/MaleGetData", function (data) {
        Highcharts.chart('malechart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Erkeklerin Kişilik Envanteri Dağılımı'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'INTJ',
                    y: data.INTJ
                   
                }, {
                    name: 'INTP',
                    y: data.INTP
                }, {
                    name: 'ENTJ',
                    y: data.ENTJ
                }, {
                    name: 'ENTP',
                    y: data.ENTP
                }, {
                    name: 'INFJ',
                    y: data.INFJ
                }, {
                    name: 'INFP',
                    y: data.INFP
                }, {
                    name: 'ENFJ',
                    y: data.ENFJ
                }, {
                    name: 'ENFP',
                    y: data.ENFP
                }, {
                    name: 'ISTJ',
                    y: data.ISTJ
                }, {
                    name: 'ISFJ',
                    y: data.ISFJ
                }, {
                    name: 'ESTJ',
                    y: data.ESTJ
                }, {
                    name: 'ESFJ',
                    y: data.ESFJ
                }, {
                    name: 'ISTP',
                    y: data.ISTP
                }, {
                    name: 'ISFP',
                    y: data.ISFP
                }, {
                    name: 'ESTP',
                    y: data.ESTP
                }, {
                    name: 'ESFP',
                    y: data.ESFP
                }]
            }]
        });
    });
});

