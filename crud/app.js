var students = [];

class Student {
  constructor(first,last,year) {
    this.first = first;
    this.last = last;
    this.year = year;
  }
  titleString() {
    return this.last +
      ", " +
      this.first +
      " (" + this.year + ")";
  }
}


function studentListItem(student) {
  // <div class="ui styled fluid accordion">
  //   <div class="title">
  //     <i class="dropdown icon"></i>
  //     Last, First, (year)
  //   </div>
  //   <div class="content">
  //     <p class="transition hidden">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  //   </div>
  // </div>
  var studentDiv = $(document.createElement("div"))
  // Build HTML that fits the above pattern. Use jQuery tools to help.
  // Append the resulting HTML to #students-list.
  $('.ui.accordion')
    .accordion();
}

function updateList() {
  $("#students-list").empty();
  // Rebuild Student List Items for each student.
  // Re-add event listeners to remove buttons.
  $(".remove").click(function(){
    removeStudent($(this).data("student"));
  });
}

function removeStudent(student) {
  // Remove student from students array.
  // Update the list to reflect the change.
}

$("#add-student").submit(function(e) {
  e.preventDefault();
  // Get values from form
  // Make a Student object out of the results
  // Push results to array
  // Add HTML to the list
  // Clear form
});
