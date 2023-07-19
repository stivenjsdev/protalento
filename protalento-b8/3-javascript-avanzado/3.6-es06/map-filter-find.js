// MAP FILTER FIND
const students = [
    { id: 1, name: "John", grade: 90 },
    { id: 2, name: "Jane", grade: 85 },
    { id: 3, name: "Alex", grade: 95 },
    { id: 4, name: "Sarah", grade: 80 },
  ];
  
  // Encuentra al estudiante con ID = 2
  const studentId2 = students.find(
    (elemento) => elemento.id === 2
  );
  
  const studentGrade = students.find(
    (elemento) => elemento.grade >= 90
  );
  
  console.log(studentId2);
  console.log(studentGrade);
  
  // Encontrar a los estudiantes con una calificacion mayor o igual a 90
  const studentMore90 = students.filter(
    (student) => student.grade >= 90
  );
  console.log(studentMore90);
  
  // Crear un arreglo con unicamente los nombres de los estudiantes
  const studentNames = students.map(
    (student) => student.grade
  );
  console.log(studentNames);
  
  const studentNames2 = studentMore90.map((element) => element.name)
  console.log(studentNames2);
  
  
  
  
  