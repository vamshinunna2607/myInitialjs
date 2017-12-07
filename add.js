
var listOfStates = [];
function createList()
        {
            //  alert("inside the function");
            $("#displayStatesHere").empty();
            $.getJSON('states.json', function (results)
            {
                var displayStatesHere = document.getElementById("displayStatesHere");
                //create table
                var table = document.createElement(table);
                //setting an id
                table.setAttribute("id", "myTable");
        
                //append it to the div area
                displayStatesHere.appendChild(table);
        
                //loop through JSON
                $.each(results, function (index) {
                    //test by printing it in console
                    console.log("json is", JSON.stringify(results[index]));
                    //create row and give an id
                    var trow = document.createElement("tr"); 
                    trow.setAttribute("id","myRow");  
                    //create two columns, one for state and other for location                 
                    var tdState = document.createElement("td");
                    tdState.innerHTML = results[index].stateName;
                    
                    var tdLocation =document.createElement("td");
                    tdLocation.innerHTML = results[index].location;  

                    table.appendChild(trow);
                    trow.appendChild(tdState);
                    trow.appendChild(tdLocation);
                    // document.getElementById("myRow").addEventListener("click",function(){
                    //     window.alert("hello");
                     
                    //  }, false);
                    tdState.addEventListener("click",function(){
                        // alert(tdState.innerHTML);
                        $("#thirdColumn").empty();
                        var stateSelected = tdState.innerHTML;
                        console.log(stateSelected);
                        listOfStates.push(stateSelected);
                        console.log(listOfStates);
                        $("#thirdColumn").text(listOfStates);
                    },false);

                })
            })
        }
        document.getElementById("displayFunction").onclick = function(){

            window.location.href = "nextPage.html";
        }
        
         sessionStorage.setItem("statelist", listOfStates);
         document.getElementById("newPageId").innerHTML= sessionStorage.getItem("statelist");
        
       


        




        
        