$(function(){

  "use strict"; // Using strict mode

  // Bind to the submit event of our form
  $("#form").submit(function(e){
    e.preventDefault();
    var $form = $(this);
    var required = $form.find('[required]');
    var serializedData = $form.serialize();
    var url = $('#form').attr('action');
    $form.find('#send, .form-control').prop('disabled', true);
  });
});
