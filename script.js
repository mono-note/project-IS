$(function () {
  $('#inputBirthday').datepicker({
    autoclose: true,
    todayHighlight: true,
    orientation: "bottom right"
  });

  $('.card .card-img').each(function () {
    $(this).on('click',function () {
      delBorder($('.card .card-img'))
      addBorder($(this))
    })
  })
  function delBorder($item) {
    $item.each(function () {
      $(this).css({'border':'none','opacity':'1'})
    })
  }
  function addBorder($item) {
    $item.css({
      'border': '3px solid #263238',
      'opacity':'.8'
    })
  }
});

// insert > usernamer,password to user table
// insert > user info to customer table