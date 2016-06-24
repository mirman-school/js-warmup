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

function populate() {
  $("#students-list").empty();
  for(s in students){
    studentListItem(students[s]);
  }
}

function removeStudent(student) {
  console.log("Removing " + student.titleString());
  var idx = students.indexOf(student);
  students.splice(idx,1);
  populate();
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
  studentDiv.addClass("ui styled fluid accordion");
  studentDiv
    .append(
      $(document.createElement("div"))
        .addClass("title")
        .append(
          $(document.createElement("i"))
            .addClass("dropdown icon")
        )
        .append(student.titleString())
    );
  studentDiv
    .append(
      $(document.createElement("div"))
        .addClass("content")
        .append(
          $(document.createElement("p"))
            .text("Just another student.")
        )
        .append(
          $(document.createElement("button"))
            .addClass("negative ui button remove")
            .text("Remove")
        )
    )
  studentDiv.data("student",student);
  studentDiv.find(".remove").click(function(){
    removeStudent($(this).parent().parent().data("student"));
  });
  $("#students-list").append(studentDiv);
  $('.ui.accordion')
    .accordion();
}

$("#add-student").submit(function(e) {
  e.preventDefault();
  let first = $("#first-name").val();
  let last = $("#last-name").val();
  let year = $("#year").val();
  let s = new Student(first,last,year);
  console.log(s);
  students.push(s);
  studentListItem(s);
  $("input").val("");
});
