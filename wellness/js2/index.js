$(document).ready(function(){
  $('[type="checkbox"]').checkBo();
});

$(function(){

  var proInner = $('#pro-block');
  var enterpriseInner = $('#enterprise-block');

  // pro block
  var proCheckbox = proInner.find('[type="checkbox"]');

  proCheckbox.on('change', function(){
    var btn = proInner.find('[data-type="pro"]');
    if (proCheckbox.is(':checked')) {
      btn.removeClass('disabled');
    } else {
      btn.addClass('disabled')
    }
  })

  // enterprise block
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
