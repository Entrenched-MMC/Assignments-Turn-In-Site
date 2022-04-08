let turnIn = false;

function turnIn("className", "assignmentName", "Date", "dueDate") {
  if(turnIn == true) {
    let classroom = className;
    let assignment = assignmentName;
    let date = Date;
    let due = dueDate;
    let assignmentInfo = [classroom, assignment, date, due];
    saveAs(assignmentInfo, "assignment.txt")
  }
}

function write("class", "link", "date", "dueDate") {}
