// 1800        1440
// 1650        1320
// 1500        1200
// 1350        1080
// 1200        960
// 1050        840
// 900         720
var c15 = [1800, 1650, 1500, 1350, 1200, 1050, 900]
var c68 = [1440, 1320, 1200, 1080, 960, 840, 720]


function random() {
  var max = c15.length
  var min = 0;
  return Math.floor(Math.random() * (+max - +min) + +min);
}
var dayPerCourt = []

for (var d = 0; d < 30; d++) { 
  var court = []
  var sum = 0
  for (var i = 0; i < 8; i++) {
    if (i > 5) {
      var s = c68[random()]
      court.push(s);
      sum += s
    } else {
      var s = c15[random()]
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
  <th scope="row">`+day+`</th>
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