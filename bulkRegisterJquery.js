function CallAjax( emailNext, setNext, fnameNext, lnameNext )
{
    //event.preventDefault();
    //initialize record object
    var record = {
     email: emailNext,
     set: setNext,
     fname: fnameNext,
     lname: lnameNext,
    };

   // ajax call
    $.ajax({
         type: 'POST',
         dataType: 'json',
         url: 'http://3920project.azurewebsites.net/api/register/?type=json',
         data: record,
         success: function(msg){
                     alert("Student registered, code: " + msg);
                     //alert( "student email: " + email + " set: " + set + " has been registered! code: " + msg);
                  }
    });
}
