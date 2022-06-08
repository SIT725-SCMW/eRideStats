const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};
const retrieveLocation = () => {
  $.get("/api/location", (response) => {
    if (response.statusCode == 200) {
      console.log(response);
      addLocation(response.data);
    } else {
      console.log(response);
    }
  });
};
const addLocation = (items) => {
  let num = 0;
  let ostring = '<div class="input-field col s12"> <select name="distanceCoffee" id="distanceCoffee">';
  items.forEach((item) => {
    let coffee= item.coffee? "Has coffee!":"No coffee :(";
    let itemToAppend = '<option value=' + (++num) + '>Distance is '+distance(item.ev_location.longitude,item.ev_location.latitude)+' m and '+coffee+'</option>';
    ostring += itemToAppend; itemToAppend
  });
  $("#divCheckbox").append(ostring + '</select><label>Materialize Select</label></div>');
};
function distance(lon2, lat2) {
  let lon1 = -37.84401; let lat1 = 145.11216;
  lon1 = lon1 * Math.PI / 180;
  lon2 = lon2 * Math.PI / 180;
  lat1 = lat1 * Math.PI / 180;
  lat2 = lat2 * Math.PI / 180;

  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1) * Math.cos(lat2)
    * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers
  let r = 6371;

  // calculate the result
  return Math.round(c * r);
}
const addProjectToApp = (project) => {
  $.ajax({
    url: "/api/project",
    data: project,
    type: "POST",
    success: (result) => {
      alert(result.message);
      location.reload();
    },
  });
};
let idVar = 0;
const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.image = $("#image").val();
  formData.link = $("#link").val();
  formData.description = $("#description").val();

  console.log("Form Data Submitted: ", formData);
  addProjectToApp(formData);
};

const getProject = () => {
  $.get("/api/project", (response) => {
    if (response.statusCode == 200) {
      console.log(response);
      addCards(response.data);
    } else {
      console.log(response);
    }
  });
};


const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card sticky-action medium">' +
      '<div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' +
      item.image +
      '">' +
      "</div>" +
      '<div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span>' +
      '<p><a href="#">' +
      item.link +
      "</a></p>" +
      "</div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text grey-text text-darken-4">' +
      item.description +
      "</p>";
    "</div>" + "</div>" + "</div>";
    $("#card-section").append(itemToAppend);
  });
};



let socket = io();

socket.on("number", (msg) => {
  $("#heading").html("Welcome to SIT 725 Week 7: " + msg);
});

$(document).ready(function () {
  getProject();
  retrieveLocation();
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  $('select').formSelect();
  $(".modal").modal();
});
