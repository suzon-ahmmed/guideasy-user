/**
 * bootstrap tooltip Module
 * 
 * @param void
 * @return void
 */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
})

/**
 * see mor function of flight ticket Module
 * 
 * @param void
 * @return void
 */
// function seeMore() {
//    const showMoreBtn = document.querySelector(".flight-show-more-btn");
//    const showMoreUi = document.querySelector(".details-content .right-details ul");
//    showMoreBtn.addEventListener("click", () => {
//       //Toggle Nav
//       showMoreUi.classList.toggle("scrole-ui");
//    });
// }
// seeMore();


/**
 * APEXCHARTS Module
 * 
 * @param void
 * @return void
 */
var optionsLine = {
   chart: {
     height: 328,
     type: 'line',
     zoom: {
       enabled: false
     },
     dropShadow: {
       enabled: true,
       top: 3,
       left: 2,
       blur: 4,
       opacity: 1,
     }
   },
   stroke: {
     curve: 'smooth',
     width: 2
   },
   // colors: ["#3F51B5", '#2196F3'],
   series: [{
       name: "Music",
       data: [1, 15, 26, 20, 33, 27]
     },
     {
       name: "Photos",
       data: [3, 33, 21, 42, 19, 32]
     },
     {
       name: "Files",
       data: [0, 39, 52, 11, 29, 43]
     }
   ],
   title: {
     text: 'Media',
     align: 'left',
     offsetY: 25,
     offsetX: 20
   },
   subtitle: {
     text: 'Statistics',
     offsetY: 55,
     offsetX: 20
   },
   markers: {
     size: 6,
     strokeWidth: 0,
     hover: {
       size: 9
     }
   },
   grid: {
     show: true,
     padding: {
       bottom: 0
     }
   },
   labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
   xaxis: {
     tooltip: {
       enabled: false
     }
   },
   legend: {
     position: 'top',
     horizontalAlign: 'right',
     offsetY: -20
   }
 }
 
 var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
 chartLine.render();


 var options = {
   series: [44, 55, 67, 83],
   chart: {
   height: 350,
   type: 'radialBar',
 },
 plotOptions: {
   radialBar: {
     dataLabels: {
       name: {
         fontSize: '22px',
       },
       value: {
         fontSize: '16px',
       },
       total: {
         show: true,
         label: 'Total',
         formatter: function (w) {
           // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
           return 249
         }
       }
     }
   }
 },
 labels: ['Holiday', 'Guide', 'Flight', 'Visa'],
 };

 var chart = new ApexCharts(document.querySelector("#chart-circle"), options);
 chart.render();



 var options = {
   series: [{
   name: 'TEAM A',
   type: 'column',
   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
 }, {
   name: 'TEAM B',
   type: 'area',
   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
 }, {
   name: 'TEAM C',
   type: 'line',
   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
 }],
   chart: {
   height: 313,
   type: 'line',
   stacked: false,
 },
 stroke: {
   width: [0, 2, 5],
   curve: 'smooth'
 },
 plotOptions: {
   bar: {
     columnWidth: '50%'
   }
 },
 
 fill: {
   opacity: [0.85, 0.25, 1],
   gradient: {
     inverseColors: false,
     shade: 'light',
     type: "vertical",
     opacityFrom: 0.85,
     opacityTo: 0.55,
     stops: [0, 100, 100, 100]
   }
 },
 labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
   '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
 ],
 markers: {
   size: 0
 },
 xaxis: {
   type: 'datetime'
 },
 yaxis: {
   title: {
     text: 'Points',
   },
   min: 0
 },
 tooltip: {
   shared: true,
   intersect: false,
   y: {
     formatter: function (y) {
       if (typeof y !== "undefined") {
         return y.toFixed(0) + " points";
       }
       return y;
 
     }
   }
 }
 };

 var chart = new ApexCharts(document.querySelector("#chart-bar"), options);
 chart.render();
