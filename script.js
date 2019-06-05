$(function () {
  $('#inputBirthday').datepicker({
    autoclose: true,
    todayHighlight: true,
    orientation: "bottom right"
  });
  $('#inputReserveDate').datepicker({
    autoclose: true,
    todayHighlight: true,
  })
  .on('hide',function (e) {
    var k = new Date(e.date)
    var dd = k.getDate()+'/'+k.getMonth()+'/'+k.getFullYear()
    $('.getdate').html(dd)
   });

  $('.card .card-img').each(function () {
    $(this).on('click', function () {
      delBorder($('.card .card-img'))
      addBorder($(this))
    })
  })

  function delBorder($item) {
    $item.each(function () {
      $(this).css({
        'border': 'none',
        'opacity': '1'
      })
    })
  }

  function addBorder($item) {
    $item.css({
      'border': '3px solid #263238',
      'opacity': '.8'
    })
  }

  $.each(timecode, function (i, v) {
    let red = (v.status == '1') ? 'bg-danger' : ''
    $('.pickDate').append(`
    <div class="row ` + red + `" id="` + v.code + `">
      <div class="label col-sm-8 ">` + v.range + `</div>
      <div class="check col-sm-4 ` + red + `">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck` + i + `">
          <label class="custom-control-label" for="customCheck` + i + `"></label>
        </div>
      </div>
    </div>`
    )
  })

  $.each(timecode, function (i, v) {
    let red = (v.status == '1') ? 'bg-danger' : ''
    $('.showDate').append(
      '<div class="row ' + red + '" id="' + v.code + '"><div class="label col-sm-8 ">' + v.range + '</div></div>'
    )
  })

  $('.pickDate').each(function () {
    $(this).find('input').on('click', function () {
      if ($(this).prop('checked')) {

        $(this).parents().eq(2).children().addClass('bg-light')
      } else {
        $(this).parents().eq(2).children().removeClass('bg-light')
      }
    })
  })

  $('.btn.btn-primary').on('click', function () {
    var form_data = $("#formRegister").serializeArray()
    var zip = document.getElementById("inputAddressZip").value;
    var info1 = form_data.map(item => {
      if (item.name == "address") {
        item.value += " " + zip;
      }
      return item;
    })
    info1.pop()
    var obj = {}
    info1.map(item => {
      if (item.name == "firstname") {
        obj.firstname = item.value
      } else if (item.name == "lastname") {
        obj.lastname = item.value
      } else if (item.name == "username") {
        obj.username = item.value
      } else if (item.name == "password") {
        obj.password = item.value
      } else if (item.name == "email") {
        obj.email = item.value
      } else if (item.name == "phone") {
        obj.phone = item.value
      } else if (item.name == "birthdate") {
        obj.birthdate = item.value
      } else if (item.name == "address") {
        obj.address = item.value
      }
    })
    var jsonInfo = JSON.stringify(obj);
    //POST  jsonInfo
    console.log(jsonInfo);
  })
  $('.nav.nav-tabs').children().each(function(i){
    if($(this).hasClass('active')){
     $('.tab-content').children().eq(i).addClass('active show')
    }
  })
  var tp=0
  var td=0
  var a=0
  $('.table .txt-num').find('td').each(function(i){
    var num = parseInt($(this).text())
    if(i%3 ==0){
      tp = tp + parseInt($(this).text())
    } else if( i%3 == 1){
      td = td + parseInt($(this).text())
    } else if( i%3 == 2){
      var n1 = $(this).prev().prev().text().replace(/\,/g,'')
      var n2 = $(this).prev().text().replace(/\,/g,'')
      num = n1-n2
      a = a+num
    }    
    $(this).text(formatNumber(num))
  })
  $('.tp').text(formatNumber(tp))
  $('.td').text(formatNumber(td))
  $('.ta').text(formatNumber(a))
  var sumline=0
  $('.table .r-txt-1').find('td').each(function(i){    
    var num = parseInt($(this).text())
    sumline += num   
    if(i%9 == 8){
      num =sumline
      sumline =0;
    }
    $(this).text(formatNumber(num))
  })
  // console.log( $('.table .txt-num').find('td').text())
});

// insert > usernamer,password to user table
// insert > user info to customer table


var timecode = [{
  "code": "t1011",
  "range": "10.00-11.00",
  "status": "0"
}, {
  "code": "t1112",
  "range": "11.00-12.00",
  "status": "0"
}, {
  "code": "t1213",
  "range": "12.00-13.00",
  "status": "0"
}, {
  "code": "t1314",
  "range": "13.00-14.00",
  "status": "0"
}, {
  "code": "t1415",
  "range": "14.00-15.00",
  "status": "0"
}, {
  "code": "t1516",
  "range": "15.00-16.00",
  "status": "0"
}, {
  "code": "t1617",
  "range": "16.00-17.00",
  "status": "1"
}, {
  "code": "t1718",
  "range": "17.00-18.00",
  "status": "1"
}, {
  "code": "t1819",
  "range": "18.00-19.00",
  "status": "0"
}, {
  "code": "t1920",
  "range": "19.00-20.00",
  "status": "0"
}, {
  "code": "t2021",
  "range": "20.00-21.00",
  "status": "0"
}, {
  "code": "t2122",
  "range": "21.00-22.00",
  "status": "0"
}]

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}