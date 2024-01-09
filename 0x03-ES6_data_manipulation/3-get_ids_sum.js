export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((acc, students) => acc + students.id, 0); 
  }
  return 0;
}
