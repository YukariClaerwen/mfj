$('#top_step').on('click',function(){
    var step = parseFloat($(this).data("step")) + 1;
    $('.top_step[data-step='+ step+']').removeClass("d-none");
    $('.top__title').removeClass('d-block d-md-flex').hide();
    $('.top__intro-text').removeClass('d-md-block');
    $('.top__intro-link').hide();
    $(this).removeClass('animated infinite pulse btn btn-round').addClass('top_translate d-block')
})

$('#career-info').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var career = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.box_title').text(Careers[career]["title"]);
    modal.find('.box_img')
    .attr('src',Careers[career]["image"])
    .attr('alt',Careers[career]["title"])
    modal.find('.card-title').text(Careers[career]["brief_des"]);
    modal.find('.card-text').html(Careers[career]["des"]);
  })
$('.modal').on('shown.bs.modal', function(event){
    var modal =$(this);
    $('.scrollTo').each(function(){
        $(this).on('click',function(){
            var target = $(this).attr('href');
            modal.attr('target',target);
        })
    })
})
$('.modal').on('hidden.bs.modal',function(){
    var modal =$(this);
    var target = modal.attr("target")
    $("body").scrollTo(target,{
        duration: 800
    });
})
$('.modalFullscreen').on('show.bs.modal', function(event){
    $('#nav-white').addClass('scroll');
})

$(window).on('scroll', function(){
    $('#nav-white').addClass('scroll');
})