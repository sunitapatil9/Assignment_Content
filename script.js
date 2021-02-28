
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;
var sortarr =[];

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}
//gridView
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/**
 * ajax call for getting page 1 details
 */
$.ajax({
    type: 'GET',
    url : 'https://reqres.in/api/users?page=1',
    success : function(response){
        sortarr = [];
        console.log("response si s");
        console.log(response);
        var userdata = response.data;
        console.log("userdata");
        console.log(userdata);
        console.log(userdata.length);
        html ="<td></td>"
        var userdetail ;
        var arr = [];
        for(var i=0;i<= userdata.length-1 ;i++){
             userdetail = userdata[i];
            console.log("'userdata is;' ");
            console.log(userdetail);
            console.log(userdetail.id);
            arr.push(userdetail);
        }
        
        $.map(arr,function(value,key){
            console.log("key " , key);
            console.log("value " ,value);
            sortarr.push(value);
       $("#content").append(" <div class=row'><div class='column'><p><img src="+value.avatar+"></p><p class='sortbyname'>"+value.first_name+" "+value.last_name+"</p><p>"+value.email+"</p></div></div>");
        });
    }
});

/**
 * sorting content with name and email
 */
function sortByKeyAsc(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

/**
 * sorting content details by selecting email and name
 */
function sortfirstname(){
    var res="";
    console.log(sortarr)
    var conceptName = $('#idforname').val();
    if( conceptName === "first_name"){

       res =  sortByKeyAsc(sortarr , 'first_name');
      $("#content").html('');
      for(var i=0 ; i<res.length;i++){
        $('#content').append(" <div class=row'><div class='column'><p><img src="+res[i].avatar+"></p><p class='sortbyname'>"+res[i].first_name+" "+res[i].last_name+"</p><p>"+res[i].email+"</p></div></div>");
      }
    }
    else if(conceptName === "Email"){
      res =  sortByKeyAsc(sortarr , 'email');
      $("#content").html('');
      for(var i=0 ; i<res.length;i++){
      
      console.log(res[i].first_name);
        $('#content').append(" <div class=row'><div class='column'><p><img src="+res[i].avatar+"></p><p class='sortbyname'>"+res[i].first_name+" "+res[i].last_name+"</p><p>"+res[i].email+"</p></div></div>");
      }
    }
    else{
        $("#content").html('');
        $.ajax({
            type: 'GET',
            url : 'https://reqres.in/api/users?page=1',
            success : function(response){
                sortarr =[];
                console.log("response si s");
                console.log(response);
                var userdata = response.data;
                console.log("userdata");
                console.log(userdata);
                console.log(userdata.length);
                html ="<td></td>"
                var userdetail ;
                var arr = [];
                for(var i=0;i<= userdata.length-1 ;i++){
                     userdetail = userdata[i];
                    console.log("'userdata is;' ");
                    console.log(userdetail);
                    console.log(userdetail.id);
                    arr.push(userdetail);
                }
                $.map(arr,function(value,key){
                    console.log("key " , key);
                    console.log("value " ,value);
                    sortarr.push(value);
               $("#content").append(" <div class=row'><div class='column'><p><img src="+value.avatar+"></p><p class='sortbyname'>"+value.first_name+" "+value.last_name+"</p><p>"+value.email+"</p></div></div>");
                });
            }
        });

    }

}