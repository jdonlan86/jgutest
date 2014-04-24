
$(document).ready(function(){

   $( ".accordionpar" ).accordion({
        event: 'click',
        collapsible: true,
        active: false,
        heightStyle: "content",
        animate: 1500, 
        icons: {
            "header": "closedaccpar",
            "activeHeader": "openaccpar"
        }
   
    });

   $( ".accordion" ).accordion({
        event: 'click',
        collapsible: true,
        active: false,
        heightStyle: "content",
        animate: 1500, 
        icons: {
            "header": "closedacc",
            "activeHeader": "openacc"
        }
   
    });




});