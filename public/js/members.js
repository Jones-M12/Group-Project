$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".searchItem").on("submit", function(event) {
    var food_name = $(this).children(".food_name").val();
    console.log(food_name);
    

    // Send the PUT request.
    $.ajax("/api/meals/" ,  {
      method: "POST",
      data: {
        foodName: food_name,
        mealName: "breakfast"
      }
    }).then(
      function() {
        console.log("Food Item Added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".lunchSearchItem").on("submit", function(event) {
    var lunchItem = $(this).children(".lunchItem").val();
    console.log(lunchItem);
    

    // Send the PUT request.
    $.ajax("/api/meals/" ,  {
      method: "POST",
      data: {
        foodName: lunchItem,
        mealName: "lunch"
      }
    }).then(
      function() {
        console.log("Food Item Added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".dinnerSearchItem").on("submit", function(event) {
    var dinnerItem = $(this).children(".dinnerItem").val();
    console.log(dinnerItem);
    

    // Send the PUT request.
    $.ajax("/api/meals/" ,  {
      method: "POST",
      data: {
        foodName: dinnerItem,
        mealName: "dinner"
      }
    }).then(
      function() {
        console.log("Food Item Added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  

  $(".delBtn").on("click", function(event) {
    // event.preventDefault();
    // event.stopPropagation();
    var delete_item = $(this).children(".delete_item").val();
    console.log(delete_item);
    // var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/meals/" , {
      method: "DELETE",
      data: {
      id: delete_item,
      
      }
    }).then(
      function() {
        console.log("deleted food item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

//Format to create the current day displayed on the calendar


var currentMoment= function() { 
  var now = moment().format('LLLL');
console.log(currentMoment);

$("#currentDay").text(now)
}
currentMoment()
setInterval(currentMoment, 60000)



