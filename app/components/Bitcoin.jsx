import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

var myDataSource = {
    "chart": {
        "caption": "Analisis Bitcoin",
        "subcaption": "Ultimas 12 semanas",
        "linethickness": "2",
        "numberPrefix": "$.",
        "showvalues": "0",
        "formatnumberscale": "1",
        "labeldisplay": "ROTATE",
        "slantlabels": "1",
        "divLineAlpha": "40",
        "anchoralpha": "0",
        "animation": "1",
        "legendborderalpha": "20",
        "drawCrossLine": "1",
        "crossLineColor": "#0d0d0d",
        "crossLineAlpha": "100",
        "tooltipGrayOutColor": "#80bfff",
        "theme": "zune",
        "bgColor": "#ffffff",
        "showBorder": "0"
    },
    "categories": [{
        "category": [{
            "label": "Q1'12"
        }, {
            "label": "Q2'12"
        }, {
            "label": "Q3'12"
        }, {
            "label": "Q4'12"
        }, {
            "label": "Q1'13"
        }, {
            "label": "Q2'13"
        }, {
            "label": "Q3'13"
        }, {
            "label": "Q4'13"
        }, {
            "label": "Q1'14"
        }, {
            "label": "Q2'14"
        }, {
            "label": "Q3'14"
        }, {
            "label": "Q4'14"
        }, {
            "label": "Q1'15"
        }, {
            "label": "Q2'15"
        }, {
            "label": "Q3'15"
        }, {
            "label": "Q4'15"
        }, {
            "label": "Q1'16"
        }, {
            "label": "Q2'16"
        }, {
            "label": "Q3'16"
        }, {
            "label": "Q4'16"
        }]
    }],
    "dataset": [{
        "seriesname": "Bitcoin",
        "data": [{
            "value": "716000"
        }, {
            "value": "771700"
        }, {
            "value": "687800"
        }, {
            "value": "698300"
        }, {
            "value": "826100"
        }, {
            "value": "938300"
        }, {
            "value": "892800"
        }, {
            "value": "904300"
        }, {
            "value": "979600"
        }, {
            "value": "1069600"
        }, {
            "value": "1006600"
        }, {
            "value": "1075300"
        }, {
            "value": "1170500"
        }, {
            "value": "1192100"
        }, {
            "value": "1100500"
        }, {
            "value": "974200"
        }, {
            "value": "936200"
        }, {
            "value": "979900"
        }, {
            "value": "887400"
        }, {
            "value": "1020600"
        }]
    }]
};

var barChartConfigs = {
    id: "bitcoin-chart",
    renderAt: "chart-container2",
    type: "msline",
    width: "100%",
    height: 300,
    dataFormat: "json",
    dataSource: myDataSource
};

export const Bitcoin = () => (


    <div className='grid'>
        <div className='icon bitcoin-dark'><img src="https://cdn1.iconfinder.com/data/icons/free-98-icons/32/money-bag_2-128.png" alt="bitcoin"/></div>
        <div className='title bitcoin-light'>Bitcoin <span>(Precio por bitcoin)</span></div>
        <div className='info'>
            <div className='date'>
                Diciembre 4, 2017 09:33 AM
            </div>
            <div className='price'>
                $ 103.024.27 Bs.F
            </div>
            <div className='trm'>
                +0.025
            </div>
        </div>
        <div className='graph'><ReactFC {...barChartConfigs} /></div>
    </div>
);
