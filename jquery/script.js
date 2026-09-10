// document.getElementById("message").innerHTML = "Hello World!";

$(document).ready(function () {
  //   $("#message").html("Hello World!");
  //   $("#myForm").submit(function (e) {
  //     e.preventDefault();
  //     var inputValue = $("#inputField").val();
  //     alert(inputValue);
  //   });
  //   $("#inputField").val("Name");

  //   $("#hide").click(function () {
  //     $("#textcontent").hide(1000);
  //   });

  //   $("#show").click(function () {
  //     $("#textcontent").show(1000, function () {
  //       alert("Text is shown");
  //     });
  //   });

  //   $("#hide").click(function () {
  //     $("#textcontent").fadeOut(1000);
  //   });

  //   $("#show").click(function () {
  //     $("#textcontent").fadeIn(5000);
  //   });

  $("#hide").click(function () {
    $("#textcontent").slideUp(1000);
  });

  $("#show").click(function () {
    $("#textcontent").slideDown(5000);
  });
});
