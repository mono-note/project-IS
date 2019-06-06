// 1800        1440
// 1650        1320
// 1500        1200
// 1350        1080
// 1200        960
// 1050        840
// 900         720
var c15 = [900,1050,1200,1350,1500,1650, 1800] 
var c68 = [720,840,960,1080,1200,1320,1440]


function random(sat) {
  var max = c15.length
  var min = 0;
  if(sat!=0){
    max =sat;
  }
  return Math.floor(Math.random() * (+max - +min) + +min);
}
var dayPerCourt = []

for (var d = 1; d <= 31; d++) {
  var court = []
  var sum = 0
  var sat =0;
  var week = 2;
  if(d != 4 && d!= 5 && d!= 11&& d!= 12&& d!= 18&& d!= 19&& d!= 5&& d!= 25&& d!= 26){
    sat =2
  }
  for (var i = 0; i < 8; i++) {
    if (i > 5) {
      var s = c68[random(sat)]
      court.push(s);
      sum += s
    } else {
      var s = c15[random(sat)]
      court.push(s);
      sum += s
    }
  }
  dayPerCourt.push({
    court:court,
    sum:sum
  })
}
var txt='';
var Amount=0

dayPerCourt.forEach(function(val,idx){
  var day =idx+1;
  var td='';
  txt += `
  <tr>
  <th scope="row">`+day+`/03</th>
  `
  val.court.forEach(function(data,i){
    td += `<td>`+formatNumber(data)+`</td>`
    if(i==7){
      td += `<td>`+formatNumber(val.sum)+`</td>`
    }
  });
  txt+=td+`</tr>`
  Amount += val.sum
})

console.log(Amount);
$(function () {
$('#nav-report1 tbody').append(txt)
})