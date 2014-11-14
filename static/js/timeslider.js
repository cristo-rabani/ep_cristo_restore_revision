
$(document).on('click', '.js-repeat-revision', function(e){
  var rev = BroadcastSlider.getSliderPosition();
  var padId = $(e.target).closest('a[data-pad]').data('pad');
  if(rev && padId){
    window.location = '/restore/'+padId+'/'+rev;
  } else{
    console.error('Missing pad or revision');
  }
});
