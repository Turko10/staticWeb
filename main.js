
//Para declarar un array
var particiapants = [];

//Para declarar una funcion
const showParticipants = (data) => {
    //let para definir una variable
    let arrayAuxiliar = [];

    data.forEach(element => {
        arrayAuxiliar.push(element.name);
    });

    //$("#users").text("Participants: " + arrayAuxiliar);
    $("#users").html("<string>Participants: </string>" + arrayAuxiliar);

}




const getWinner = (data) => {

    const aleat = Math.floor(Math.random() * data.length);
    $("#selected").html("<strong>Seleccionado: </strong>" + data[aleat].name);

}


$(document).ready(function () {


    //jsonplaceholder.typicode.com/users

    $.ajax({

        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",
        success: function (response) {

            particiapants = response;

            showParticipants(participants);


        }, error: function (error) {
            console.log(error);
            alert(error);
        }

    });

    $(".btn").click(function () {


        getWinner(participants);
        
    });



});