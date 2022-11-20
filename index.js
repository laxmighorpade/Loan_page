var $modalPop = $('.modalLink');
var $scrolledPop = $('.scrolledLink');
var $slide = $('#slide');
var $modal = $('#modal');
var $close = $('.close');
var $toggleClose = $('.toggleClose');
var $appLink = $('.appLink');


function popitup(url) {
	newwindow=window.open(url,'name','height=300,width=500').close();
	if (window.focus) {newwindow.focus();}
	return false;
}

$('.mod').on('click', function() {
  $modal.hide( 'size', {'percent': 100, 'easing': 'easeInQuad'}, 200);  
  return false;
});

$('.slid').on('click', function() {
  $slide.slideToggle('fast', 'easeInQuad');  
  return false;
});

$modalPop.on('click', function() {
  $modal.show( 'size', {'percent': 100, 'easing': 'easeOutQuad'}, 200);
});

$close.on('click', function() {
  $modal.hide( 'size', {'percent': 100, 'easing': 'easeInQuad'}, 200);
});

$scrolledPop.on('click', function() {
  $slide.slideToggle('fast', 'easeInOutQuint');
});

$toggleClose.on('click', function() {
  $slide.slideToggle('fast', 'easeInQuad');
});

function floatLabel(inputType){
  $(inputType).each(function(){
    var $this = $(this);

    // on focus add cladd active to label
    $this.focus(function(){
      $this.next().addClass("active");
    });
    //on blur check field and remove class if needed
    $this.blur(function(){
      setTimeout(function() {
        if($this.val() === '' || 
           $this.val() === 'blank' || 
           $this.val() === '___-__-____' || 
           $this.val() === '(___)___-____' || 
           $this.val() === '(___) ___-____ x_____' || 
           $this.val() === '_ _ /_ _ /_ _ _ _ ' ) {
          $this.next().removeClass();
        }
      }, 200);
    });
  });
}


(function($){
  
	// add a class of "floatLabel to the input field
	floatLabel(".floatLabel");
  
  //nav toggle class
  $('.navToggle').click(function(){
    $('body').toggleClass('opened');
    event.preventDefault();
  });
  
  //input mask 
  $("#ssn").mask("999-99-9999",{completed:function(){}});
  $("#phone").mask("(999)999-9999");
  $("#phone2").mask("(999) 999-9999? x99999");
  $("#DOB,#DOP,#DOP2").mask("99/99/9999",{placeholder:"_ "});
  
  //date picker 
  $( "#PD2, #PD" ).datepicker({
    minDate: '+1'
    , maxDate: '+2m'
  });
  
  //form tabs
  $('.contact').parent().addClass('activeTab');
  $('.heading').on('click', function(){
    var $this = $(this);
    var $thisParent = $this.parent();
    if($thisParent.hasClass('activeTab')) {
      $thisParent.toggleClass('activeTab');
    } else {
      $('.form-group').removeClass('activeTab');
      $thisParent.toggleClass('activeTab');
    }
  });
  //form Nav
  $('.formNav a').on('click', function(){
    var $this = $(this);
    var thisProp = $this.prop('class');
    var grandParent = $this.closest('.form-group');
    var next = grandParent.next();
    var prev = grandParent.prev();
    
    if(thisProp === "next") {
      $('.form-group').removeClass('activeTab');
      $('html, body').stop().animate({
        scrollTop: $(next).offset().top
      }, 1000);
      next.toggleClass('activeTab');
      
      event.preventDefault()
    } else {
      $('.form-group').removeClass('activeTab');
      prev.toggleClass('activeTab');
      $('html, body').stop().animate({
        scrollTop: $('.activeTab').offset().top
      }, 1000);
      event.preventDefault()
    }
  });
})(jQuery);