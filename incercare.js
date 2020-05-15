function set_varste() {
    sessionStorage.setItem('tip', "varste");
    console.log(sessionStorage.getItem('tip'));
    document.getElementById('bar').setAttribute ('data', "./BarChart.html");
    document.getElementById('line').setAttribute ('data', "./LineChart.html");
    document.getElementById('radar').setAttribute ('data', "./RadarChart.html");
}
function set_educatie() {
    sessionStorage.setItem('tip', "educatie");
    console.log(sessionStorage.getItem('tip'));
    document.getElementById('bar').setAttribute ('data', "./BarChartEducatie.html");
    document.getElementById('line').setAttribute ('data', "./LineChartEducatie.html");
    document.getElementById('radar').setAttribute ('data', "./RadarChartEducatie.html");
}
function set_medii() {
  sessionStorage.setItem('tip', "medii");
  console.log(sessionStorage.getItem('tip'));
  document.getElementById('bar').setAttribute ('data', "./BarChartMedii.html");
  document.getElementById('line').setAttribute ('data', "./LineChartMedii.html");
  document.getElementById('radar').setAttribute ('data', "./RadarChartMedii.html");
}
function set_rata() {
  sessionStorage.setItem('tip', "rata");
  console.log(sessionStorage.getItem('tip'));
  document.getElementById('bar').setAttribute ('data', "./BarChartRata.html");
  document.getElementById('line').setAttribute ('data', "./LineChartRata.html");
  document.getElementById('radar').setAttribute ('data', "./RadarChartRata.html");
}

