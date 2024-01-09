export default function getStudentsByLocation(arr, city) {
  if (arr instanceof Array) {
    return arr.filter((el) => el.location === city);
  }
  return [];
}
