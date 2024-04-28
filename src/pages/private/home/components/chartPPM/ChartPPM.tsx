import React from "react";
import "./ChartPPM.Style.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartPPM {
  // Definir las propiedades del componente, si es necesario
}

const ChartPPM: React.FC<ChartPPM> = () => {
  // Resto del código del componente

  return (
    <div className="wrapper-chartppm">
      <div className="header">
        <h1 className="tittle">PPM Ultimas 8 horas</h1>
        <span className="wrapper-chart-button">
          <button className="button-chart">1 semana</button>
          <button className="button-chart">8 horas</button>
        </span>
      </div>
      <div className="wrapper-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              backgroundColor: "transparent",
              type: "column",
              width: 600, 
              height: 200,
            },
            colors: ["#04b431"],

            title: {
              align: "left",
              text: ``,
            },
            subtitle: {
              align: "left",
              text: "" /* click the columns to view details */,
            },
            accessibility: {
              announceNewData: {
                enabled: true,
              },
            },
            xAxis: {
              type: "category",
            },
            yAxis: {
              title: {
                text: "",
              },
            },
            legend: {
              enabled: false,
            },
            plotOptions: {
              series: {
                borderWidth: 0,
                dataLabels: {
                  enabled: true,
                  format: "{point.y:.1f}",
                },
              },
            },

            tooltip: {
              headerFormat:
                '<span style="font-size:12px">{series.name}</span><br>',
              pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> kWh<br/>',
            },

            series: [
              {
                name: "Horas",
                colorByPoint: true,
                data: [
                  {
                    name: "L",
                    y: 23.06,
                    color:"#243980",
                    drilldown: "Chrome",
                  },
                  {
                    name: "M",
                    y: 19.84,
                    color:"#243980",
                    drilldown: "Safari",
                  },
                  {
                    name: "W",
                    y: 4.18,
                    color:"#243980",
                    drilldown: "Firefox",
                  },
                  {
                    name: "J",
                    y: 4.12,
                    color:"#243980",
                    drilldown: "Edge",
                  },
                  {
                    name: "V",
                    y: 2.33,
                    color:"#243980",
                    drilldown: "Opera",
                  },
                  {
                    name: "S",
                    y: 3,
                    color:"#243980",
                    drilldown: "Internet Explorer",
                  },
                  {
                    name: "D",
                    y: 1.582,
                    color:"#243980",
                    drilldown: null,
                  },
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChartPPM;
