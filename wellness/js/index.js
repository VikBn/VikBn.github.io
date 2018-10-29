// $(document).ready(function() {
//   $('select').niceSelect();
// });


// $('input').checks({
//   class_radio: 'ico-radio',
//   class_checkbox: 'ico-checkbox',
//   class_checked: 'sed',
//   class_disabled: 'disabled',
//   types: ['radio', 'checkbox']
// });


// var label = $('.sidebar__confirm').find('label');
// console.log(label);
//
//
// label.on('click', function(){
//   var input = $(this).parent().find('.ico-checkbox');
//   console.log(input);
//   input.toggleClass('sed');
// })


$(document).ready(function(){
  $('[type="checkbox"]').checkBo();
});

$(function(){

  var proInner = $('#pro-block');
  var enterpriseInner = $('#enterprise-block');

  // problock
  var proCheckbox = proInner.find('[type="checkbox"]');
  proCheckbox.on('change', function(){
    var btn = proInner.find('[data-type="pro"]');
    if (proCheckbox.is(':checked')) {
      btn.removeClass('disabled');
    } else {
      btn.addClass('disabled')
    }
  })

  // enterprise
  var enterCheckbox = enterpriseInner.find('[type="checkbox"]');
  enterCheckbox.on('change', function(){
    var btn = enterpriseInner.find('[data-type="enterprise"]');
    if (enterCheckbox.is(':checked')) {
      btn.removeClass('disabled');
    } else {
      btn.addClass('disabled')
    }
  })




})

// btn.on('click', function(){
//
//   if ($(this).data('type') == 'pro') {
//
//   }
//
//   if ($(this).data('type') == 'enterprise') {
//     let allCheckbox = enterpriseInner.find('[type="checkbox"]');
//     if (allCheckbox.is(':checked')) {
//       console.log('nice');
//     }
//
//   }





// })
