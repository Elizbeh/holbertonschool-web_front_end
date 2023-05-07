var createClassRoom = function(numberOfStudents) {
  var studentSeat = function(seat) {
    return function () {
      return seat;
    };
  }

  var students = [];
  for (var i = 0; i < numberOfStudents; i++) {
    var seatNumber = i + 1;
    students.push(studentSeat(seatNumber));
  }
  return students;
} 

var classRoom = createClassRoom(10);
console.log(classRoom);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());