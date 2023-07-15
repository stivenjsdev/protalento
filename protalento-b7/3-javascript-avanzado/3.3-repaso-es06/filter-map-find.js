//find, map, filter
const students = [
    { id: 1, name: "John", grade: 90 },
    { id: 2, name: "Jane", grade: 85 },
    { id: 3, name: "Alex", grade: 95 },
    { id: 4, name: "Sarah", grade: 80 },
  ];
  
  // Encontrar al estudiante que tiene el id = 2
  
  const selectedStudent = students.find( 
      student => student.id === 2);
  
  console.log(selectedStudent);
  
  const ninetyOrMore = students.filter( student => student.grade >= 90);
  console.log(ninetyOrMore);
  
  const studentNames = students.map( student => student.name);
  console.log(studentNames);  