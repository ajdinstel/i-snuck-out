function loadPetData() {

  $.ajax({
    url: "https://spreadsheets.google.com/feeds/list/1OIJ9r6EIU498roS2SzIJxFzzLxtxuyd5hiwktWV6Jsg/od6/public/full?alt=json",
    context: document.body
  })
  .done(function(msg) {
    $( this ).addClass( "done" );

    console.log(msg);

    if (typeof msg !== 'undefined') {

      var dataObject = msg,
          templateName = '#pet-profile',
          outputContainer = '.pet-grid';

      $('#button1').hide();
      compileAndRenderTemplate(dataObject, templateName, outputContainer);
    }
  });

}

function compileAndRenderTemplate(dataObject, templateName, outputContainer) {

  console.log(templateName);
  console.log(outputContainer);
  console.log(dataObject);

  var theTemplateScript = $(templateName).html(),
      theTemplate = Handlebars.compile(theTemplateScript),
      theCompiledHtml = theTemplate(dataObject);

  $(outputContainer).html(theCompiledHtml);
  $(outputContainer).addClass('visible');



}

