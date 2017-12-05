import React from 'react';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

var myDataSource = {
    "chart": {
        "caption": "Analisis Dolar - Euro",
        "subcaption": "Ultimas 12 semanas",
        "linethickness": "2",
        "numberPrefix": "BsF.",
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
        "seriesname": "Dolar",
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
    }, {
        "seriesname": "Euro",
        "data": [{
            "value": "1174600"
        }, {
            "value": "1222800"
        }, {
            "value": "1075600"
        }, {
            "value": "978700"
        }, {
            "value": "1053500"
        }, {
            "value": "1117000"
        }, {
            "value": "831600"
        }, {
            "value": "834200"
        }, {
            "value": "823000"
        }, {
            "value": "850500"
        }, {
            "value": "632200"
        }, {
            "value": "609500"
        }, {
            "value": "630600"
        }, {
            "value": "635800"
        }, {
            "value": "496900"
        }, {
            "value": "438100"
        }, {
            "value": "431300"
        }, {
            "value": "330000"
        }, {
            "value": "276900"
        }, {
            "value": "302900"
        }]
    }]
};

var barChartConfigs = {
    id: "bar-chart",
    renderAt: "chart-container",
    type: "msline",
    width: "100%",
    height: 300,
    dataFormat: "json",
    dataSource: myDataSource
};

export const DolarToday = () => (


    <div className='grid'>
        <div className='icon'>icon</div>
        <div className='title'>DolarToday <span>(Price per U.S Dolar in Venezuela)</span></div>
        <div className='info'>
            <div className='date'>
                Diciembre 4, 2017 09:33 AM
            </div>
            <div className='price'>
                $ 103.024.27 Bs.F
            </div>
            <div className='price'>
                € 122.598.88 Bs.F
            </div>
            <div className='trm'>
                $TRM 3005.76 / 1 VEF = 0.025
            </div>
        </div>
        <div className='graph'><ReactFC {...barChartConfigs} /></div>
    </div>
);