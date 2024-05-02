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
        <h1 className="tittle">Luxes en la ultima semana</h1>
        <span className="wrapper-chart-button">
         {/*  <button className="button-chart">1 semana</button> */}
{/*           <button className="button-chart">8 horas</button> */}
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
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> Luxes<br/>',
            },

            series: [
              {
                name: "Día",
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
                    y: 18.3,
                    color:"#243980",
                    drilldown: "Firefox",
                  },
                  {
                    name: "J",
                    y: 13.7,
                    color:"#243980",
                    drilldown: "Edge",
                  },
                  {
                    name: "V",
                    y: null,
                    color:"#243980",
                    drilldown: "Opera",
                  },
                  {
                    name: "S",
                    y: null,
                    color:"#243980",
                    drilldown: "Internet Explorer",
                  },
                  {
                    name: "D",
                    y: null,
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
