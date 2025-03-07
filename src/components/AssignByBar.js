import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState, useEffect, useContext } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
// import styles from "../dashboardTicket.module.css"
// import { ThemeContext } from "contexts/Theme";

const AssignByBar = ({ tableData = [], title = "Assign By" }) => {
  // useContext(ThemeContext)
  const colors = ["#345af4", "#292659", "#d1503f"];

  // const asignData = [
  //   {
  //     name: "Open",
  //     data: [5, 5, 6, 5, 5, 8, 10, 5, 10],
  //   },
  //   {
  //     name: "In Progress",
  //     data: [15, 12, 15, 18, 15, 10, 15, 5, 15],
  //   },
  //   {
  //     name: "Resolved",
  //     data: [12, 12, 12, 10, 20, 12, 20, 15, 15],
  //   },
  // ];

  const asignData = [
    {
      name: "Open",
      data: [5, 5, 6, 5, 5, 8, 10, 5, 10],
    },
    {
      name: "In Progress",
      data: [15, 12, 15, 18, 15, 10, 15, 5, 15],
    },
    {
      name: "Resolved",
      data: [12, 12, 12, 10, 20, 12, 20, 15, 15],
    },
  ];

  const getMaxValue = () => {
    let maxDataValue = Math.max(...asignData.flatMap((series) => series.data));
    return Math.ceil(maxDataValue * 1.2); // Tambah 20% supaya tidak terlalu dekat
  };

  // const [mode, setMode] = useState('light')

  // useEffect(() => {
  //     getThemeMode()
  // },[])

  // useEffect(() => {
  //   getThemeMode()
  // })

  // const getThemeMode = () => {
  //     const storedConfigData = localStorage.getItem('theme');
  //     const config = storedConfigData ? JSON.parse(storedConfigData) : {};
  //     if(config.mode){
  //         setMode(config.mode)
  //     } else {
  //         const configTheme = {mode:'light'}
  //         localStorage.setItem('theme', JSON.stringify(configTheme))
  //     }
  // }

  // const generateColor = () => {
  //   return mode === 'light'? '#525252' : '#d6d6d6'
  // }

  const barcharts = {
    chart: {
      type: "column",
      // height: 240,
      height: 200,
      marginTop: 80,
      marginBottom: 30,
      backgroundColor: "transparent",
    },
    // xAxis: {
    //   categories: tesTableData?.map((item) => item.name),
    //   labels: { style: { fontSize: 12, color: "#525252" }, rotation: 0 },
    // },
    xAxis: {
      categories: [
        "Putri",
        "Aliyah",
        "Bryan",
        "Adil",
        "Mario",
        "Dion",
        "Fahrul",
        "Ghozi",
        "Ari",
      ],
      crosshair: true,
      accessibility: {
        description: "Developer",
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        style: {
          color: "#525252",
        },
      },
      minorGridLineWidth: 0,
      gridLineWidth: 1,
      alternateGridColor: null,
      tickInterval: 5,
      max: getMaxValue(),
    },
    credits: {
      enabled: false,
    },
    title: {
      text: title || "",
      align: "left",
      style: {
        // fontFamily: "Montserrat, sans-serif",
        fontWeight: "600",
        fontSize: "24px",
        color: "#000",
      },
    },
    legend: {
      enabled: true,
      align: "left",
      verticalAlign: "top",
      layout: "horizontal",
      y: -20,
      x: -8,
      itemStyle: {
        fontSize: "12px",
        color: "#525252",
      },
      symbolRadius: 0,
    },
    navigation: {
      menuItemStyle: {
        fontSize: 21,
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderRadius: 3,
        borderWidth: 0,
        // pointWidth: 25,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          color: "#525252",
        },
        maxPointWidth: 35,
      },
    },
    colors: colors.map((item) => item),
    // series: [
    //   {
    //     name: "Total",
    //     color: colors.map((item) => item),
    //     colorByPoint: true,
    //     data: tesTableData?.map((item) => item.value),
    //   },
    // ],
    series: asignData,
    tooltip: {
      backgroundColor: "#2b2b2b",
      borderColor: "#2b2b2b",
      borderRadius: "10",
      style: {
        color: "white",
      },
    },
    responsive: {
      rules: [
        {
          condition: { minWidth: 1850 },
          chartOptions: {
            chart: {
              height: 270,
              marginTop: 110,
              marginBottom: 50,
            },
            title: {
              style: { fontSize: "1.875rem" },
            },
            legend: {
              x: -6,
              itemStyle: { fontSize: "1.2rem" }, // Ukuran teks legend lebih kecil
            },
            plotOptions: {
              column: {
                dataLabels: {
                  style: {
                    fontSize: "1.1rem",
                  },
                },
                maxPointWidth: 43,
              },
            },
          },
        },
      ],
    },

    lang: {
      downloadPDF: "Download",
    },

    exporting: {
      buttons: {
        contextButton: {
          symbol: "menuball",
          menuItems: ["downloadPDF"],
        },
      },
    },
  };

  const highChart_Props_Style = {
    width: "100%",
    // marginTop: "-15px",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={barcharts}
        containerProps={{ style: highChart_Props_Style }}
      />
    </div>
  );
};

export default AssignByBar;
