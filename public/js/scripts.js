const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

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
let idVar=0;
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
    let itemToAppend2='<label><input name="group1" type="radio" value='+item.link.substr(item.link.lastIndexOf("@")+1,3)+ '><span style="color:white;font-weight:bold;">'+item.title+'&nbsp&nbsp&nbsp</span></label>';
    $("#card-section").append(itemToAppend);
    $("#car-options").append(itemToAppend2);
  });
  $("#car-options").append('<label class="input-field inline text-white"><input placeholder="km" id="howmany" type="text" class="validate  text-white" maxlength="4" size="4"><span class="text-white" style="color:white;font-weight:bold;">&nbsp&nbsp&nbsp</span></label>');
};



let socket = io();

socket.on("number", (msg) => {
  $("#heading").html("Welcome to SIT 725 Week 7: " + msg);
});

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  $("select").formSelect();
  getProject();
  
  $(".modal").modal();
  $('.dropdown-trigger').dropdown();
});
