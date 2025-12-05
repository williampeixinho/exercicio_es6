const MINIMUM_PASSING_GRADE = 6;

const students = [
  { name: 'Ana', grade: 8 },
  { name: 'Bruno', grade: 5 },
  { name: 'Carlos', grade: 6 },
  { name: 'Daniela', grade: 9 },
  { name: 'Eduardo', grade: 4 },
  { name: 'Fernanda', grade: 10 },
];

const getApprovedStudents = (list) =>
  list.filter(({ grade }) => grade >= MINIMUM_PASSING_GRADE);

const printApprovedStudents = (list) => {
  const approved = getApprovedStudents(list);

  console.log(`Alunos aprovados (nota ≥ ${MINIMUM_PASSING_GRADE}):`);
  approved.forEach(({ name, grade }) => console.log(`- ${name}: ${grade}`));

  if (!approved.length) {
    console.log('Nenhum aluno aprovado.');
  }
};

printApprovedStudents(students);
