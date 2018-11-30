const STUDENTS = [
  { id: 1, name: "Chris", hasGraduated: true },
  { id: 2, name: "Phil", hasGraduated: true },
  { id: 3, name: "Tony G", hasGraduated: false }
];

const PROJECTS = [
  { id: 1, name: "TheTrip", studentIds: [1, 2] },
  { id: 2, name: "Iunno", studentIds: [3] }
];

const getAllStudents = () => STUDENTS;
const getStudentById = id => STUDENTS.find(student => student.id === id);

const getAllProjects = () => PROJECTS;
const getProjectsByStudent = studentId =>
  PROJECTS.filter(project => project.studentIds.includes(studentId));

module.exports = {
  getAllStudents,
  getStudentById,
  getAllProjects,
  getProjectsByStudent
};
