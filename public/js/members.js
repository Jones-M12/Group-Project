$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".searchItem").on("click", function(event) {
    var food_name = $(this).children(".food_name").val();
    console.log(food_name);
    

    // Send the PUT request.
    $.ajax("/api/foods/" + foodName, {
      method: "PUT",
      
    }).then(
      function() {
        console.log("Food Item Added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  

  $("#delete-food").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/foods/" + id, {
      method: "DESTROY"
    }).then(
      function() {
        console.log("deleted food item", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

