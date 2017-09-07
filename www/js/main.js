
$( document ).ready(function() {
    console.log( "ready!" );
    $('#addPlug').click(function(){
        $("#addPlug").val("Scanning .....")
        $.post('./ui',$( "#add" ).serialize())            
        .done(function () {
            setTimeout(function () {document.location.href = document.location.href;},2000)
        })
        .fail(function() {
            alert( "Please provide a subnet to scan in the form XXX.XXX.XXX" );
        });
    }); 
});
