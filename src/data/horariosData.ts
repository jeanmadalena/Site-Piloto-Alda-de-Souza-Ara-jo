export interface HorarioAula {
  horario: string; // e.g. "7H00"
  materia: string; // e.g. "História"
  codigo?: string; // e.g. "9"
}

export interface TurmaHorarioDia {
  dia: 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta';
  aulas: {
    [turma: string]: string; // e.g. "8ºA": "História - 9"
  };
}

export interface PeriodoHorario {
  horario: string; // "7H00", "7H50", etc.
  dias: TurmaHorarioDia[];
}

export const LISTA_MATERIAS = [
  { nome: 'L. Port.', completo: 'Língua Portuguesa', cor: 'bg-rose-100 text-rose-900 border-rose-300' },
  { nome: 'Mat.', completo: 'Matemática', cor: 'bg-blue-100 text-blue-900 border-blue-300' },
  { nome: 'História', completo: 'História', cor: 'bg-amber-100 text-amber-900 border-amber-300' },
  { nome: 'Geografia', completo: 'Geografia', cor: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
  { nome: 'Ciências', completo: 'Ciências', cor: 'bg-teal-100 text-teal-900 border-teal-300' },
  { nome: 'L. Inglesa', completo: 'Língua Inglesa', cor: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
  { nome: 'Arte', completo: 'Arte', cor: 'bg-purple-100 text-purple-900 border-purple-300' },
  { nome: 'Ed. Física', completo: 'Educação Física', cor: 'bg-orange-100 text-orange-900 border-orange-300' },
  { nome: 'Enr. Curric.', completo: 'Enriquecimento Curricular', cor: 'bg-cyan-100 text-cyan-900 border-cyan-300' },
];

export const TURMAS_MANHA = ['8ºA', '8ºB', '8ºC', '8ºD', '8ºE', '8ºF', '8ºG', '9ºA', '9ºB', '9ºC', '9ºD', '9ºE', '9ºF', '9ºG'];
export const TURMAS_TARDE = ['6ºA', '6ºB', '6ºC', '6ºD', '6ºE', '6ºF', '6ºG', '7ºA', '7ºB', '7ºC', '7ºD', '7ºE', '7ºF', '7ºG'];

export const HORARIOS_MANHA_GRID = [
  {
    dia: 'Segunda',
    aulas: [
      { hora: '7H00', turmas: { '8ºA': 'História - 9', '8ºB': 'Mat. - 15', '8ºC': 'Geografia - 3', '8ºD': 'L. Port. - 4', '8ºE': 'Ciências - 7', '8ºF': 'Arte - 5', '8ºG': 'L. Port. - 13', '9ºA': 'L. Port. - 1', '9ºB': 'Mat. - 2', '9ºC': 'Ciências - 10', '9ºD': 'Geografia - 14', '9ºE': 'L. Inglesa - 12', '9ºF': 'História - 11', '9ºG': 'Ed. Física - 8' } },
      { hora: '7H50', turmas: { '8ºA': 'Ciências - 7', '8ºB': 'Mat. - 15', '8ºC': 'Geografia - 3', '8ºD': 'L. Port. - 4', '8ºE': 'História - 9', '8ºF': 'Arte - 5', '8ºG': 'L. Port. - 13', '9ºA': 'L. Port. - 1', '9ºB': 'Mat. - 2', '9ºC': 'História - 11', '9ºD': 'Geografia - 14', '9ºE': 'L. Inglesa - 12', '9ºF': 'Ciências - 10', '9ºG': 'Ed. Física - 8' } },
      { hora: '8H40', turmas: { '8ºA': 'Ed. Física - 8', '8ºB': 'História - 9', '8ºC': 'L. Port. - 4', '8ºD': 'Ciências - 7', '8ºE': 'Mat. - 15', '8ºF': 'L. Port. - 13', '8ºG': 'Geografia - 3', '9ºA': 'Geografia - 14', '9ºB': 'Ciências - 7', '9ºC': 'L. Port. - 1', '9ºD': 'História - 11', '9ºE': 'Mat. - 2', '9ºF': 'L. Inglesa - 12', '9ºG': 'Enr. Curric. - 3' } },
      { hora: '9H30', turmas: { '8ºA': 'Ed. Física - 8', '8ºB': 'Ciências - 7', '8ºC': 'L. Port. - 4', '8ºD': 'História - 9', '8ºE': 'Mat. - 15', '8ºF': 'L. Port. - 13', '8ºG': 'Geografia - 3', '9ºA': 'Geografia - 14', '9ºB': 'História - 11', '9ºC': 'L. Port. - 1', '9ºD': 'Ciências - 10', '9ºE': 'Mat. - 2', '9ºF': 'L. Inglesa - 12', '9ºG': 'Enr. Curric. - 3' } },
      { hora: '10H35', turmas: { '8ºA': 'Geografia - 3', '8ºB': 'L. Port. - 4', '8ºC': 'Ciências - 7', '8ºD': 'Mat. - 15', '8ºE': 'L. Port. - 13', '8ºF': 'História - 11', '8ºG': 'Enr. Curric. - 3', '9ºA': 'Ciências - 10', '9ºB': 'L. Inglesa - 12', '9ºC': 'Mat. - 2', '9ºD': 'L. Port. - 1', '9ºE': 'Arte - 5', '9ºF': 'Ed. Física - 8', '9ºG': 'Geografia - 14' } },
      { hora: '11H25', turmas: { '8ºA': 'Geografia - 3', '8ºB': 'L. Port. - 4', '8ºC': 'História - 9', '8ºD': 'Mat. - 15', '8ºE': 'L. Port. - 13', '8ºF': 'Ciências - 10', '8ºG': 'Enr. Curric. - 3', '9ºA': 'História - 11', '9ºB': 'L. Inglesa - 12', '9ºC': 'Mat. - 2', '9ºD': 'L. Port. - 1', '9ºE': 'Arte - 5', '9ºF': 'Ed. Física - 8', '9ºG': 'Geografia - 14' } },
    ]
  },
  {
    dia: 'Terça',
    aulas: [
      { hora: '7H00', turmas: { '8ºA': 'Mat. - 15', '8ºB': 'L. Port. - 4', '8ºC': 'L. Inglesa - 12', '8ºD': 'Geografia - 3', '8ºE': 'História - 10', '8ºF': 'Ed. Física - 8', '8ºG': 'Arte - 5', '9ºA': 'Mat. - 2', '9ºB': 'L. Port. - 1', '9ºC': 'Ciências - 10', '9ºD': 'Enr. Curric. - 3', '9ºE': 'Geografia - 14', '9ºF': 'L. Port. - 13', '9ºG': 'Mat. - 9' } },
      { hora: '7H50', turmas: { '8ºA': 'Mat. - 15', '8ºB': 'L. Port. - 4', '8ºC': 'L. Inglesa - 12', '8ºD': 'Geografia - 3', '8ºE': 'História - 10', '8ºF': 'Ed. Física - 8', '8ºG': 'Arte - 5', '9ºA': 'Mat. - 2', '9ºB': 'L. Port. - 1', '9ºC': 'Ciências - 10', '9ºD': 'Enr. Curric. - 3', '9ºE': 'Geografia - 14', '9ºF': 'L. Port. - 13', '9ºG': 'Mat. - 9' } },
      { hora: '8H40', turmas: { '8ºA': 'Geografia - 3', '8ºB': 'História - 10', '8ºC': 'Mat. - 15', '8ºD': 'L. Port. - 4', '8ºE': 'Arte - 5', '8ºF': 'Mat. - 9', '8ºG': 'Ciências - 10', '9ºA': 'L. Inglesa - 12', '9ºB': 'Geografia - 14', '9ºC': 'Ed. Física - 8', '9ºD': 'Mat. - 2', '9ºE': 'L. Port. - 1', '9ºF': 'Enr. Curric. - 3', '9ºG': 'L. Port. - 13' } },
      { hora: '9H30', turmas: { '8ºA': 'Geografia - 3', '8ºB': 'História - 10', '8ºC': 'Mat. - 15', '8ºD': 'L. Port. - 4', '8ºE': 'Arte - 5', '8ºF': 'Mat. - 9', '8ºG': 'História - 11', '9ºA': 'L. Inglesa - 12', '9ºB': 'Geografia - 14', '9ºC': 'Ed. Física - 8', '9ºD': 'Mat. - 2', '9ºE': 'L. Port. - 1', '9ºF': 'Enr. Curric. - 3', '9ºG': 'L. Port. - 13' } },
      { hora: '10H35', turmas: { '8ºA': 'L. Port. - 4', '8ºB': 'Mat. - 15', '8ºC': 'Arte - 5', '8ºD': 'História - 10', '8ºE': 'L. Port. - 13', '8ºF': 'Enr. Curric. - 3', '8ºG': 'L. Inglesa - 12', '9ºA': 'Geografia - 14', '9ºB': 'Mat. - 2', '9ºC': 'L. Port. - 1', '9ºD': 'Ed. Física - 8', '9ºE': 'Ciências - 10', '9ºF': 'Mat. - 9', '9ºG': 'História - 11' } },
      { hora: '11H25', turmas: { '8ºA': 'L. Port. - 4', '8ºB': 'Mat. - 15', '8ºC': 'Arte - 5', '8ºD': 'História - 10', '8ºE': 'L. Port. - 13', '8ºF': 'Enr. Curric. - 3', '8ºG': 'L. Inglesa - 12', '9ºA': 'Geografia - 14', '9ºB': 'Mat. - 2', '9ºC': 'L. Port. - 1', '9ºD': 'Ed. Física - 8', '9ºE': 'História - 11', '9ºF': 'Mat. - 9', '9ºG': 'Ciências - 10' } },
    ]
  },
  {
    dia: 'Quarta',
    aulas: [
      { hora: '7H00', turmas: { '8ºA': 'L. Port. - 4', '8ºB': 'Geografia - 3', '8ºC': 'Mat. - 15', '8ºD': 'L. Inglesa - 12', '8ºE': 'Ed. Física - 8', '8ºF': 'L. Port. - 13', '8ºG': 'Mat. - 9', '9ºA': 'Ciências - 10', '9ºB': 'Enr. Curric. - 3', '9ºC': 'Mat. - 2', '9ºD': 'L. Port. - 1', '9ºE': 'História - 11', '9ºF': 'Geografia - 14', '9ºG': 'Arte - 5' } },
      { hora: '7H50', turmas: { '8ºA': 'L. Port. - 4', '8ºB': 'Geografia - 3', '8ºC': 'Mat. - 15', '8ºD': 'L. Inglesa - 12', '8ºE': 'Ed. Física - 8', '8ºF': 'L. Port. - 13', '8ºG': 'Mat. - 9', '9ºA': 'Ciências - 10', '9ºB': 'Enr. Curric. - 3', '9ºC': 'Mat. - 2', '9ºD': 'L. Port. - 1', '9ºE': 'História - 11', '9ºF': 'Geografia - 14', '9ºG': 'Arte - 5' } },
      { hora: '8H40', turmas: { '8ºA': 'L. Inglesa - 12', '8ºB': 'Mat. - 15', '8ºC': 'L. Port. - 4', '8ºD': 'Ed. Física - 8', '8ºE': 'Enr. Curric. - 3', '8ºF': 'Geografia - 3', '8ºG': 'L. Port. - 13', '9ºA': 'L. Port. - 1', '9ºB': 'Mat. - 2', '9ºC': 'História - 11', '9ºD': 'Ciências - 10', '9ºE': 'Geografia - 14', '9ºF': 'Arte - 5', '9ºG': 'Mat. - 9' } },
      { hora: '9H30', turmas: { '8ºA': 'L. Inglesa - 12', '8ºB': 'Mat. - 15', '8ºC': 'L. Port. - 4', '8ºD': 'Ed. Física - 8', '8ºE': 'Enr. Curric. - 3', '8ºF': 'Geografia - 3', '8ºG': 'L. Port. - 13', '9ºA': 'L. Port. - 1', '9ºB': 'Mat. - 2', '9ºC': 'História - 11', '9ºD': 'Ciências - 10', '9ºE': 'Geografia - 14', '9ºF': 'Arte - 5', '9ºG': 'Mat. - 9' } },
      { hora: '10H35', turmas: { '8ºA': 'Mat. - 15', '8ºB': 'Arte - 5', '8ºC': 'Enr. Curric. - 3', '8ºD': 'L. Port. - 4', '8ºE': 'Geografia - 3', '8ºF': 'Mat. - 9', '8ºG': 'Ed. Física - 8', '9ºA': 'Mat. - 2', '9ºB': 'L. Port. - 1', '9ºC': 'Geografia - 14', '9ºD': 'História - 11', '9ºE': 'Ciências - 10', '9ºF': 'L. Port. - 13', '9ºG': 'L. Inglesa - 12' } },
      { hora: '11H25', turmas: { '8ºA': 'Mat. - 15', '8ºB': 'Arte - 5', '8ºC': 'Enr. Curric. - 3', '8ºD': 'L. Port. - 4', '8ºE': 'Geografia - 3', '8ºF': 'Mat. - 9', '8ºG': 'Ed. Física - 8', '9ºA': 'Mat. - 2', '9ºB': 'L. Port. - 1', '9ºC': 'Geografia - 14', '9ºD': 'História - 11', '9ºE': 'Ciências - 10', '9ºF': 'L. Port. - 13', '9ºG': 'L. Inglesa - 12' } },
    ]
  },
  {
    dia: 'Quinta',
    aulas: [
      { hora: '7H00', turmas: { '8ºA': 'Ciências - 7', '8ºB': 'Geografia - 3', '8ºC': 'L. Port. - 4', '8ºD': 'Enr. Curric. - 3', '8ºE': 'Mat. - 15', '8ºF': 'L. Inglesa - 12', '8ºG': 'Ciências - 10', '9ºA': 'História - 11', '9ºB': 'Ed. Física - 8', '9ºC': 'L. Port. - 1', '9ºD': 'Arte - 5', '9ºE': 'Mat. - 2', '9ºF': 'Mat. - 9', '9ºG': 'L. Port. - 13' } },
      { hora: '7H50', turmas: { '8ºA': 'Ciências - 7', '8ºB': 'Geografia - 3', '8ºC': 'L. Port. - 4', '8ºD': 'Enr. Curric. - 3', '8ºE': 'Mat. - 15', '8ºF': 'L. Inglesa - 12', '8ºG': 'Ciências - 10', '9ºA': 'História - 11', '9ºB': 'Ed. Física - 8', '9ºC': 'L. Port. - 1', '9ºD': 'Arte - 5', '9ºE': 'Mat. - 2', '9ºF': 'Mat. - 9', '9ºG': 'L. Port. - 13' } },
      { hora: '8H40', turmas: { '8ºA': 'L. Port. - 4', '8ºB': 'L. Inglesa - 12', '8ºC': 'Ciências - 7', '8ºD': 'Mat. - 15', '8ºE': 'Geografia - 3', '8ºF': 'Ciências - 10', '8ºG': 'Mat. - 9', '9ºA': 'Arte - 5', '9ºB': 'L. Port. - 1', '9ºC': 'Mat. - 2', '9ºD': 'Geografia - 14', '9ºE': 'Enr. Curric. - 3', '9ºF': 'L. Port. - 13', '9ºG': 'História - 11' } },
      { hora: '9H30', turmas: { '8ºA': 'L. Port. - 4', '8ºB': 'L. Inglesa - 12', '8ºC': 'Ciências - 7', '8ºD': 'Mat. - 15', '8ºE': 'Geografia - 3', '8ºF': 'Ciências - 10', '8ºG': 'Mat. - 9', '9ºA': 'Arte - 5', '9ºB': 'L. Port. - 1', '9ºC': 'Mat. - 2', '9ºD': 'Geografia - 14', '9ºE': 'Enr. Curric. - 3', '9ºF': 'L. Port. - 13', '9ºG': 'História - 11' } },
      { hora: '10H35', turmas: { '8ºA': 'Enr. Curric. - 3', '8ºB': 'L. Port. - 4', '8ºC': 'Mat. - 15', '8ºD': 'Arte - 5', '8ºE': 'L. Inglesa - 12', '8ºF': 'L. Port. - 13', '8ºG': 'Geografia - 3', '9ºA': 'Ed. Física - 8', '9ºB': 'Ciências - 7', '9ºC': 'Geografia - 14', '9ºD': 'Mat. - 2', '9ºE': 'L. Port. - 1', '9ºF': 'História - 11', '9ºG': 'Mat. - 9' } },
      { hora: '11H25', turmas: { '8ºA': 'Enr. Curric. - 3', '8ºB': 'L. Port. - 4', '8ºC': 'Mat. - 15', '8ºD': 'Arte - 5', '8ºE': 'L. Inglesa - 12', '8ºF': 'L. Port. - 13', '8ºG': 'Geografia - 3', '9ºA': 'Ed. Física - 8', '9ºB': 'Ciências - 7', '9ºC': 'Geografia - 14', '9ºD': 'Mat. - 2', '9ºE': 'L. Port. - 1', '9ºF': 'História - 11', '9ºG': 'Mat. - 9' } },
    ]
  },
  {
    dia: 'Sexta',
    aulas: [
      { hora: '7H00', turmas: { '8ºA': 'Arte - 5', '8ºB': 'Ed. Física - 8', '8ºC': 'Geografia - 3', '8ºD': 'Mat. - 15', '8ºE': 'Ciências - 7', '8ºF': 'Mat. - 9', '8ºG': 'L. Port. - 13', '9ºA': 'Enr. Curric. - 3', '9ºB': 'História - 11', '9ºC': 'L. Inglesa - 12', '9ºD': 'Mat. - 2', '9ºE': 'L. Port. - 1', '9ºF': 'Ciências - 10', '9ºG': 'Geografia - 14' } },
      { hora: '7H50', turmas: { '8ºA': 'Arte - 5', '8ºB': 'Ed. Física - 8', '8ºC': 'Geografia - 3', '8ºD': 'Mat. - 15', '8ºE': 'Ciências - 7', '8ºF': 'Mat. - 9', '8ºG': 'L. Port. - 13', '9ºA': 'Enr. Curric. - 3', '9ºB': 'História - 11', '9ºC': 'L. Inglesa - 12', '9ºD': 'Mat. - 2', '9ºE': 'L. Port. - 1', '9ºF': 'Ciências - 10', '9ºG': 'Geografia - 14' } },
      { hora: '8H40', turmas: { '8ºA': 'Mat. - 15', '8ºB': 'Enr. Curric. - 3', '8ºC': 'História - 4', '8ºD': 'Ciências - 7', '8ºE': 'L. Port. - 13', '8ºF': 'Geografia - 3', '8ºG': 'História - 11', '9ºA': 'Mat. - 2', '9ºB': 'Geografia - 14', '9ºC': 'Arte - 5', '9ºD': 'L. Port. - 1', '9ºE': 'Ed. Física - 8', '9ºF': 'Mat. - 9', '9ºG': 'Ciências - 10' } },
      { hora: '9H30', turmas: { '8ºA': 'Mat. - 15', '8ºB': 'Enr. Curric. - 3', '8ºC': 'História - 4', '8ºD': 'Ciências - 7', '8ºE': 'L. Port. - 13', '8ºF': 'Geografia - 3', '8ºG': 'História - 11', '9ºA': 'Mat. - 2', '9ºB': 'Geografia - 14', '9ºC': 'Arte - 5', '9ºD': 'L. Port. - 1', '9ºE': 'Ed. Física - 8', '9ºF': 'Mat. - 9', '9ºG': 'Ciências - 10' } },
      { hora: '10H35', turmas: { '8ºA': 'História - 4', '8ºB': 'Ciências - 7', '8ºC': 'Ed. Física - 8', '8ºD': 'Geografia - 3', '8ºE': 'Mat. - 15', '8ºF': 'História - 11', '8ºG': 'Mat. - 9', '9ºA': 'L. Port. - 1', '9ºB': 'Arte - 5', '9ºC': 'Enr. Curric. - 3', '9ºD': 'L. Inglesa - 12', '9ºE': 'Mat. - 2', '9ºF': 'Geografia - 14', '9ºG': 'L. Port. - 13' } },
      { hora: '11H25', turmas: { '8ºA': 'História - 4', '8ºB': 'Ciências - 7', '8ºC': 'Ed. Física - 8', '8ºD': 'Geografia - 3', '8ºE': 'Mat. - 15', '8ºF': 'História - 11', '8ºG': 'Mat. - 9', '9ºA': 'L. Port. - 1', '9ºB': 'Arte - 5', '9ºC': 'Enr. Curric. - 3', '9ºD': 'L. Inglesa - 12', '9ºE': 'Mat. - 2', '9ºF': 'Geografia - 14', '9ºG': 'L. Port. - 13' } },
    ]
  }
];

export const HORARIOS_TARDE_GRID = [
  {
    dia: 'Segunda',
    aulas: [
      { hora: '12H30', turmas: { '6ºA': 'Enr. Curric. - 3', '6ºB': 'Mat. - 15', '6ºC': 'Geografia - 13', '6ºD': 'L. Inglesa - 12', '6ºE': 'L. Port. - 4', '6ºF': 'Mat. - 9', '6ºG': 'Ciências - 7', '7ºA': 'L. Port. - 1', '7ºB': 'Mat. - 2', '7ºC': 'Geografia - 3', '7ºD': 'Ed. Física - 8', '7ºE': 'L. Port. - 13', '7ºF': 'Arte - 5', '7ºG': 'Ciências - 10' } },
      { hora: '13H20', turmas: { '6ºA': 'Enr. Curric. - 3', '6ºB': 'Mat. - 15', '6ºC': 'Geografia - 13', '6ºD': 'L. Inglesa - 12', '6ºE': 'L. Port. - 4', '6ºF': 'Mat. - 9', '6ºG': 'Ciências - 7', '7ºA': 'L. Port. - 1', '7ºB': 'Mat. - 2', '7ºC': 'Geografia - 3', '7ºD': 'Ed. Física - 8', '7ºE': 'L. Port. - 13', '7ºF': 'Arte - 5', '7ºG': 'Ciências - 10' } },
      { hora: '14H25', turmas: { '6ºA': 'Ciências - 7', '6ºB': 'Geografia - 13', '6ºC': 'L. Port. - 4', '6ºD': 'História - 11', '6ºE': 'Mat. - 15', '6ºF': 'L. Port. - 13', '6ºG': 'L. Inglesa - 12', '7ºA': 'Mat. - 2', '7ºB': 'L. Port. - 1', '7ºC': 'Ed. Física - 8', '7ºD': 'Enr. Curric. - 3', '7ºE': 'Arte - 5', '7ºF': 'Geografia - 3', '7ºG': 'Mat. - 9' } },
      { hora: '15H15', turmas: { '6ºA': 'História - 11', '6ºB': 'Geografia - 13', '6ºC': 'L. Port. - 4', '6ºD': 'Ciências - 7', '6ºE': 'Mat. - 15', '6ºF': 'L. Port. - 13', '6ºG': 'L. Inglesa - 12', '7ºA': 'Mat. - 2', '7ºB': 'L. Port. - 1', '7ºC': 'Ed. Física - 8', '7ºD': 'Enr. Curric. - 3', '7ºE': 'Arte - 5', '7ºF': 'Geografia - 3', '7ºG': 'Mat. - 9' } },
      { hora: '16H05', turmas: { '6ºA': 'L. Inglesa - 12', '6ºB': 'L. Port. - 4', '6ºC': 'História - 11', '6ºD': 'Mat. - 15', '6ºE': 'Geografia - 13', '6ºF': 'Ed. Física - 8', '6ºG': 'L. Port. - 13', '7ºA': 'Geografia - 3', '7ºB': 'Ciências - 7', '7ºC': 'Mat. - 2', '7ºD': 'L. Port. - 1', '7ºE': 'Mat. - 9', '7ºF': 'Enr. Curric. - 3', '7ºG': 'Arte - 5' } },
      { hora: '16H55', turmas: { '6ºA': 'L. Inglesa - 12', '6ºB': 'L. Port. - 4', '6ºC': 'Ciências - 7', '6ºD': 'Mat. - 15', '6ºE': 'Geografia - 13', '6ºF': 'Ed. Física - 8', '6ºG': 'L. Port. - 13', '7ºA': 'Geografia - 3', '7ºB': 'História - 11', '7ºC': 'Mat. - 2', '7ºD': 'L. Port. - 1', '7ºE': 'Mat. - 9', '7ºF': 'Enr. Curric. - 3', '7ºG': 'Arte - 5' } },
    ]
  },
  {
    dia: 'Terça',
    aulas: [
      { hora: '12H30', turmas: { '6ºA': 'Mat. - 15', '6ºB': 'Enr. Curric. - 3', '6ºC': 'L. Port. - 4', '6ºD': 'Geografia - 13', '6ºE': 'História - 11', '6ºF': 'Ciências - 7', '6ºG': 'Arte - 5', '7ºA': 'Geografia - 3', '7ºB': 'Ed. Física - 8', '7ºC': 'Mat. - 2', '7ºD': 'Ciências - 10', '7ºE': 'L. Inglesa - 12', '7ºF': 'L. Port. - 13', '7ºG': 'Mat. - 9' } },
      { hora: '13H20', turmas: { '6ºA': 'Mat. - 15', '6ºB': 'Enr. Curric. - 3', '6ºC': 'L. Port. - 4', '6ºD': 'Geografia - 13', '6ºE': 'Ciências - 7', '6ºF': 'História - 11', '6ºG': 'Arte - 5', '7ºA': 'Geografia - 3', '7ºB': 'Ed. Física - 8', '7ºC': 'Mat. - 2', '7ºD': 'Ciências - 10', '7ºE': 'L. Inglesa - 12', '7ºF': 'L. Port. - 13', '7ºG': 'Mat. - 9' } },
      { hora: '14H25', turmas: { '6ºA': 'Geografia - 13', '6ºB': 'Ciências - 7', '6ºC': 'Mat. - 15', '6ºD': 'L. Port. - 4', '6ºE': 'Arte - 5', '6ºF': 'Mat. - 9', '6ºG': 'História - 11', '7ºA': 'Ed. Física - 8', '7ºB': 'Geografia - 3', '7ºC': 'Enr. Curric. - 3', '7ºD': 'Mat. - 2', '7ºE': 'Ciências - 10', '7ºF': 'L. Inglesa - 12', '7ºG': 'L. Port. - 13' } },
      { hora: '15H15', turmas: { '6ºA': 'Geografia - 13', '6ºB': 'História - 11', '6ºC': 'Mat. - 15', '6ºD': 'L. Port. - 4', '6ºE': 'Arte - 5', '6ºF': 'Mat. - 9', '6ºG': 'Ciências - 7', '7ºA': 'Ed. Física - 8', '7ºB': 'Geografia - 3', '7ºC': 'Enr. Curric. - 3', '7ºD': 'Mat. - 2', '7ºE': 'Ciências - 10', '7ºF': 'L. Inglesa - 12', '7ºG': 'L. Port. - 13' } },
      { hora: '16H05', turmas: { '6ºA': 'L. Port. - 4', '6ºB': 'Mat. - 15', '6ºC': 'Ed. Física - 8', '6ºD': 'Ciências - 7', '6ºE': 'Enr. Curric. - 3', '6ºF': 'Geografia - 13', '6ºG': 'Mat. - 9', '7ºA': 'História - 11', '7ºB': 'Mat. - 2', '7ºC': 'Arte - 5', '7ºD': 'L. Inglesa - 12', '7ºE': 'L. Port. - 13', '7ºF': 'Ciências - 10', '7ºG': 'Geografia - 3' } },
      { hora: '16H55', turmas: { '6ºA': 'L. Port. - 4', '6ºB': 'Mat. - 15', '6ºC': 'Ed. Física - 8', '6ºD': 'Ciências - 7', '6ºE': 'Enr. Curric. - 3', '6ºF': 'Geografia - 13', '6ºG': 'Mat. - 9', '7ºA': 'História - 11', '7ºB': 'Mat. - 2', '7ºC': 'Arte - 5', '7ºD': 'L. Inglesa - 12', '7ºE': 'L. Port. - 13', '7ºF': 'Ciências - 10', '7ºG': 'Geografia - 3' } },
    ]
  },
  {
    dia: 'Quarta',
    aulas: [
      { hora: '12H30', turmas: { '6ºA': 'História - 11', '6ºB': 'Arte - 5', '6ºC': 'Mat. - 15', '6ºD': 'L. Port. - 4', '6ºE': 'Ed. Física - 8', '6ºF': 'L. Port. - 13', '6ºG': 'Mat. - 9', '7ºA': 'Ciências - 7', '7ºB': 'Enr. Curric. - 3', '7ºC': 'L. Inglesa - 12', '7ºD': 'L. Port. - 1', '7ºE': 'História - 2', '7ºF': 'Ciências - 10', '7ºG': 'Geografia - 3' } },
      { hora: '13H20', turmas: { '6ºA': 'História - 11', '6ºB': 'Arte - 5', '6ºC': 'Mat. - 15', '6ºD': 'L. Port. - 4', '6ºE': 'Ed. Física - 8', '6ºF': 'L. Port. - 13', '6ºG': 'Mat. - 9', '7ºA': 'Ciências - 7', '7ºB': 'Enr. Curric. - 3', '7ºC': 'L. Inglesa - 12', '7ºD': 'L. Port. - 1', '7ºE': 'Ciências - 10', '7ºF': 'História - 2', '7ºG': 'Geografia - 3' } },
      { hora: '14H25', turmas: { '6ºA': 'L. Port. - 4', '6ºB': 'Mat. - 15', '6ºC': 'História - 11', '6ºD': 'Ed. Física - 8', '6ºE': 'L. Inglesa - 12', '6ºF': 'Geografia - 13', '6ºG': 'L. Port. - 13', '7ºA': 'Arte - 5', '7ºB': 'Ciências - 7', '7ºC': 'L. Port. - 1', '7ºD': 'História - 2', '7ºE': 'Geografia - 3', '7ºF': 'Mat. - 9', '7ºG': 'Ciências - 10' } },
      { hora: '15H15', turmas: { '6ºA': 'L. Port. - 4', '6ºB': 'Mat. - 15', '6ºC': 'História - 11', '6ºD': 'Ed. Física - 8', '6ºE': 'L. Inglesa - 12', '6ºF': 'Geografia - 13', '6ºG': 'L. Port. - 13', '7ºA': 'Arte - 5', '7ºB': 'Ciências - 7', '7ºC': 'L. Port. - 1', '7ºD': 'Ciências - 10', '7ºE': 'Geografia - 3', '7ºF': 'Mat. - 9', '7ºG': 'História - 2' } },
      { hora: '16H05', turmas: { '6ºA': 'Mat. - 15', '6ºB': 'História - 11', '6ºC': 'Ciências - 7', '6ºD': 'Enr. Curric. - 3', '6ºE': 'L. Port. - 4', '6ºF': 'Mat. - 9', '6ºG': 'Geografia - 13', '7ºA': 'L. Port. - 1', '7ºB': 'Arte - 5', '7ºC': 'História - 2', '7ºD': 'Geografia - 3', '7ºE': 'Ed. Física - 8', '7ºF': 'L. Port. - 13', '7ºG': 'L. Inglesa - 12' } },
      { hora: '16H55', turmas: { '6ºA': 'Mat. - 15', '6ºB': 'História - 11', '6ºC': 'Ciências - 7', '6ºD': 'Enr. Curric. - 3', '6ºE': 'L. Port. - 4', '6ºF': 'Mat. - 9', '6ºG': 'Geografia - 13', '7ºA': 'L. Port. - 1', '7ºB': 'Arte - 5', '7ºC': 'História - 2', '7ºD': 'Geografia - 3', '7ºE': 'Ed. Física - 8', '7ºF': 'L. Port. - 13', '7ºG': 'L. Inglesa - 12' } },
    ]
  },
  {
    dia: 'Quinta',
    aulas: [
      { hora: '12H30', turmas: { '6ºA': 'Ciências - 7', '6ºB': 'L. Port. - 4', '6ºC': 'L. Inglesa - 12', '6ºD': 'História - 11', '6ºE': 'Mat. - 15', '6ºF': 'Enr. Curric. - 3', '6ºG': 'Geografia - 13', '7ºA': 'Mat. - 2', '7ºB': 'Geografia - 3', '7ºC': 'L. Port. - 1', '7ºD': 'Arte - 5', '7ºE': 'História - 10', '7ºF': 'Mat. - 9', '7ºG': 'L. Port. - 13' } },
      { hora: '13H20', turmas: { '6ºA': 'Ciências - 7', '6ºB': 'L. Port. - 4', '6ºC': 'L. Inglesa - 12', '6ºD': 'História - 11', '6ºE': 'Mat. - 15', '6ºF': 'Enr. Curric. - 3', '6ºG': 'Geografia - 13', '7ºA': 'Mat. - 2', '7ºB': 'Geografia - 3', '7ºC': 'L. Port. - 1', '7ºD': 'Arte - 5', '7ºE': 'História - 10', '7ºF': 'Mat. - 9', '7ºG': 'L. Port. - 13' } },
      { hora: '14H25', turmas: { '6ºA': 'Arte - 5', '6ºB': 'Ciências - 7', '6ºC': 'Mat. - 15', '6ºD': 'Geografia - 13', '6ºE': 'L. Port. - 4', '6ºF': 'L. Inglesa - 12', '6ºG': 'Ed. Física - 8', '7ºA': 'Enr. Curric. - 3', '7ºB': 'História - 11', '7ºC': 'Mat. - 2', '7ºD': 'L. Port. - 1', '7ºE': 'Mat. - 9', '7ºF': 'L. Port. - 13', '7ºG': 'História - 10' } },
      { hora: '15H15', turmas: { '6ºA': 'Arte - 5', '6ºB': 'Ciências - 7', '6ºC': 'Mat. - 15', '6ºD': 'Geografia - 13', '6ºE': 'L. Port. - 4', '6ºF': 'L. Inglesa - 12', '6ºG': 'Ed. Física - 8', '7ºA': 'Enr. Curric. - 3', '7ºB': 'História - 11', '7ºC': 'Mat. - 2', '7ºD': 'L. Port. - 1', '7ºE': 'Mat. - 9', '7ºF': 'L. Port. - 13', '7ºG': 'História - 10' } },
      { hora: '16H05', turmas: { '6ºA': 'Ed. Física - 8', '6ºB': 'Geografia - 13', '6ºC': 'L. Port. - 4', '6ºD': 'Mat. - 15', '6ºE': 'História - 11', '6ºF': 'L. Port. - 13', '6ºG': 'Enr. Curric. - 3', '7ºA': 'L. Inglesa - 12', '7ºB': 'L. Port. - 1', '7ºC': 'Ciências - 7', '7ºD': 'Mat. - 2', '7ºE': 'Geografia - 3', '7ºF': 'História - 10', '7ºG': 'Mat. - 9' } },
      { hora: '16H55', turmas: { '6ºA': 'Ed. Física - 8', '6ºB': 'Geografia - 13', '6ºC': 'L. Port. - 4', '6ºD': 'Mat. - 15', '6ºE': 'História - 11', '6ºF': 'L. Port. - 13', '6ºG': 'Enr. Curric. - 3', '7ºA': 'L. Inglesa - 12', '7ºB': 'L. Port. - 1', '7ºC': 'Ciências - 7', '7ºD': 'Mat. - 2', '7ºE': 'Geografia - 3', '7ºF': 'História - 10', '7ºG': 'Mat. - 9' } },
    ]
  },
  {
    dia: 'Sexta',
    aulas: [
      { hora: '12H30', turmas: { '6ºA': 'L. Port. - 4', '6ºB': 'L. Inglesa - 12', '6ºC': 'Enr. Curric. - 3', '6ºD': 'Mat. - 15', '6ºE': 'Geografia - 13', '6ºF': 'Arte - 5', '6ºG': 'L. Port. - 13', '7ºA': 'História - 11', '7ºB': 'L. Port. - 1', '7ºC': 'Ciências - 7', '7ºD': 'Mat. - 2', '7ºE': 'Mat. - 9', '7ºF': 'Geografia - 3', '7ºG': 'Ed. Física - 8' } },
      { hora: '13H20', turmas: { '6ºA': 'L. Port. - 4', '6ºB': 'L. Inglesa - 12', '6ºC': 'Enr. Curric. - 3', '6ºD': 'Mat. - 15', '6ºE': 'Geografia - 13', '6ºF': 'Arte - 5', '6ºG': 'L. Port. - 13', '7ºA': 'Ciências - 7', '7ºB': 'L. Port. - 1', '7ºC': 'História - 1', '7ºD': 'Mat. - 2', '7ºE': 'Mat. - 9', '7ºF': 'Geografia - 3', '7ºG': 'Ed. Física - 8' } },
      { hora: '14H25', turmas: { '6ºA': 'Mat. - 15', '6ºB': 'L. Port. - 4', '6ºC': 'Geografia - 13', '6ºD': 'Arte - 5', '6ºE': 'Ciências - 7', '6ºF': 'História - 11', '6ºG': 'Mat. - 9', '7ºA': 'L. Port. - 1', '7ºB': 'Mat. - 2', '7ºC': 'Geografia - 3', '7ºD': 'História - 1', '7ºE': 'L. Port. - 13', '7ºF': 'Ed. Física - 8', '7ºG': 'Enr. Curric. - 3' } },
      { hora: '15H15', turmas: { '6ºA': 'Mat. - 15', '6ºB': 'L. Port. - 4', '6ºC': 'Geografia - 13', '6ºD': 'Arte - 5', '6ºE': 'Ciências - 7', '6ºF': 'História - 11', '6ºG': 'Mat. - 9', '7ºA': 'L. Port. - 1', '7ºB': 'Mat. - 2', '7ºC': 'Geografia - 3', '7ºD': 'História - 1', '7ºE': 'L. Port. - 13', '7ºF': 'Ed. Física - 8', '7ºG': 'Enr. Curric. - 3' } },
      { hora: '16H05', turmas: { '6ºA': 'Geografia - 13', '6ºB': 'Ed. Física - 8', '6ºC': 'Arte - 5', '6ºD': 'L. Port. - 4', '6ºE': 'Mat. - 15', '6ºF': 'Ciências - 7', '6ºG': 'História - 11', '7ºA': 'Mat. - 2', '7ºB': 'L. Inglesa - 12', '7ºC': 'L. Port. - 1', '7ºD': 'Geografia - 3', '7ºE': 'Enr. Curric. - 3', '7ºF': 'Mat. - 9', '7ºG': 'L. Port. - 13' } },
      { hora: '16H55', turmas: { '6ºA': 'Geografia - 13', '6ºB': 'Ed. Física - 8', '6ºC': 'Arte - 5', '6ºD': 'L. Port. - 4', '6ºE': 'Mat. - 15', '6ºF': 'Ciências - 7', '6ºG': 'História - 11', '7ºA': 'Mat. - 2', '7ºB': 'L. Inglesa - 12', '7ºC': 'L. Port. - 1', '7ºD': 'Geografia - 3', '7ºE': 'Enr. Curric. - 3', '7ºF': 'Mat. - 9', '7ºG': 'L. Port. - 13' } },
    ]
  }
];
