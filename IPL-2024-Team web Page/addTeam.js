
// Retrieve Data from Local Storage:

let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

// Form Submission Handling:

$("#addteamform").submit(function (e) {


    e.preventDefault();

//Extract Short Name from Full Name:

    let inp_val = $("#inp1").val();
    let shortName = '';
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }
//Create Data Object:
    let addData = {
        "id": localTeam.length,
        "teamFullName":$("#inp1").val() ,
        "sName": shortName,

        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),


    }
//Update Local Storage and Redirect:
   localTeam.push(addData);
   localStorage.setItem("teamArray", JSON.stringify(localTeam)); 

   location.href = `./teams.html?name=${addData.sName}`;
})