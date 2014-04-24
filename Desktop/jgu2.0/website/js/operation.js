$(document).ready(function(){



/* tournaments accordion functions and filters */


$('.search').on("click",function(){
  var yearstateseason = $('.yearstateseason').val();
  var regionsaz = $('.regionsaz').val();
  var regionsten = $('.regionsten').val();
  var regionsok = $('.regionsok').val();
  var regionska = $('.regionska').val();

  if (yearstateseason == "" ) {
    alert("Please Choose a Year, State, and Region to see your tournament results");
  } else {
      var indiresults = json_data.indiresults;
      var standings = json_data2.standings;  
      display_standings(standings, indiresults);
      //display_indi(indiresults);
  }
});



var display_standings = function(standings, indiresults) {
  function groupPerRegion(criteria) {
    var obj = [];
    for ( var k = 0; k < indiresults.length; k++) {
      if ( indiresults[k]['region'] === criteria) {
        obj.push(indiresults[k])
      }
    }

    return obj;
  }

  var standing;
  $('.accord').slideUp('fast', function() {
    $('.accord').empty();
    for (var i = 0; i < standings.length; i++) {
      if (standings[i].year === $('.yearstateseason').val()) {
        standing = ich.standings_tpl(standings[i]);
        var obj = groupPerRegion(standings[i]['region']);

        $('.accord').append(standing);

        for ( var n = 0; n < obj.length; n++) {
          var indiresult = ich.indiresults_tpl(obj[n]);
          $('.accord').append(indiresult);
        }
      }
    }

    $('.accord').slideDown('fast');





      $(".accordion1tourn" ).accordion({
          event: 'click',
          collapsible: true,
          active: false,
          heightStyle: "content",
          animate: 1500,
              icons: {
                "header": "closedacctourn",
                "activeHeader": "openacctourn"
            } 
      });

        $(".accordiontourn" ).accordion({
            event: 'click',
            collapsible: true,
            active: false,
            heightStyle: "content",
            animate: 1500, 
            
        });


    });
};




/* accordion function for parents and players */


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







/* footer slider controls*/

  $('.slider2').bxSlider({
    slideWidth: 200,
    minSlides: 3,
    maxSlides: 7,
    slideMargin: 10
  });

    /*tournament filter dropdown region function*/

    $('.yearstateseason').on('change', function(e) {
    var selected = $(this).find('option:selected').text();
    if (selected === '2014 Summer - Tennessee'){
        $(".regionsten").show();
        $(".regionsok").hide();
        $(".regionsaz").hide();
    } else if (selected === "2014 Summer - Oklahoma"){
         $(".regionsok").show();
         $(".regionsten").hide();
          $(".regionsaz").hide();
    } else if (selected === "2014 Spring - Arizona"){
         $(".regionsaz").show();
          $(".regionsten").hide();
           $(".regionsok").hide();

    }

    });



/* coaches form submission*/

      $('.secondtiersubmit').click(function(e) {  
      $('.forgetpasswordbox').submit();

    });

      $('.loginbutton').click(function(e) {  
      $('.coacheslogin').submit();

    });

       $('.secondtiersubmituser').click(function(e) {  
      $('.forgetuseridbox').submit();

    });

      $('.secondtiersubmituserreg').click(function(e) {  
      $('.registrationcodebox').submit();

    });  



   $('.secondtiersubmitregform').click(function(e) {  
      $('.registrationform').submit();

    });  

/* coaches lost password, user id, registration and creat account forms */

      $('.createaccountbutton').click(function(e) {  
      $(".registrationcodebox").show();
      $(".forgetuseridbox").hide();
      $(".forgetpasswordbox").hide();
      $(".coacheslogin").hide();


    });


      $('.forgotpassword').click(function(e) {  
      $(".forgetpasswordbox").show();
      $(".forgetuseridbox").hide();
      $(".registrationcodebox").hide();
      $(".coacheslogin").hide();


    });

      $('.forgotuserid').click(function(e) {  
      $(".forgetuseridbox").show();
      $(".forgetpasswordbox").hide();
      $(".coacheslogin").hide();
      $(".registrationcodebox").hide();
    });



      $('.xbox').click(function(e) {  
      $(".forgetpasswordbox").hide();
      $(".coacheslogin").show();

    });
       
      $('.xboxu').click(function(e) {  
      $(".forgetuseridbox").hide();
      $(".coacheslogin").show();

    });   

      $('.xboxr').click(function(e) {  
      $(".registrationcodebox").hide();
      $(".coacheslogin").show();

    });   
      $('.xboxrf').click(function(e) {  
      $(".registrationform").hide();
      $(".coacheslogin").show();

    });   




       $('.needregister').click(function(e) {  
      $(".registrationform").show();
      $(".forgetuseridbox").hide();
      $(".registrationcodebox").hide();
      $(".coacheslogin").hide();


    });


     $('.teammanagement').click(function(e) {  
      $(".whitebottomframe").show();
      $(".whitebottomframe2").hide();
      $(".whitebottomframe3").hide();
    

 });  



    $('.schedule').click(function(e) {  
      $(".whitebottomframe2").show();
      $(".whitebottomframe").hide();
      $(".whitebottomframe3").hide();
    

 });



     $('.rulesregulations').click(function(e) {  
      $(".whitebottomframe3").show();
      $(".whitebottomframe2").hide();
      $(".whitebottomframe").hide();
    

 });  
  


$('.loginbutton').click(function () {
    $('.coacheslogin').submit();
});



/* parents and players youtube video function*/
  
    $('.coverplayer').click(function() {
    $('.coverplayer').hide();
    $(".jguvideo").fadeIn("slow");
});












});


