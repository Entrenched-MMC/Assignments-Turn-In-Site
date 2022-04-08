function turnIn(){
  function storeData(input_data){}
  
  function clearData(subject){
    if(storedData.1 == subject){
      storedData.1.1 = assignmentName;
      storedData.1.2 = classroom;
      storedData.1.3 = date;
      storedData.1.4 = due;
    }
    if(storedData.2 == subject){
      storedData.2.1 = assignmentName;
      storedData.2.2 = classroom;
      storedData.2.3 = date;
      storedData.2.4 = due;
    }
    if(storedData.3 == subject){
      
    }
  }
  
  var assignmentName = document.getElementById("assignmentName").value;
  var classroom = document.getElementById("class").value;
  var date = document.getElementById("dateTurnIn").value;
  var due = document.getElementById("dateDue").value;
  
  if(classroom == "math"){
  }
  
  storeData(assignmentData);
}
