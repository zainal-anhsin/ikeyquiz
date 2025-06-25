export interface DataType {
  key: React.Key;
  name: string;
  customGroup: { cg1: boolean; cg2: boolean };
  category: { liveQuiz: boolean; kosaKata: boolean };
  classroom: string;
  group: string;
  email: string;
  action: string;
}

const names = [
  'Ali Baba', 'Siti Nurhaliza', 'John Doe', 'Jane Smith', 'Michael Tan',
  'Nur Aisyah', 'Ahmad Zaki', 'Emily Wong', 'Fatimah Zahra', 'Adam Lee',
  'Samantha Lim', 'Hafiz Rahman', 'Chong Wei', 'Aina Sofia', 'Zara Aziz'
];

const tableData: DataType[] = [
  {
    key: 'student-0',
    name: names[0],
    customGroup: { cg1: true, cg2: false },
    category: { liveQuiz: true, kosaKata: false },
    classroom: 'SSR',
    group: 'Standard 1',
    email: 'ali.baba@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-1',
    name: names[1],
    customGroup: { cg1: true, cg2: true },
    category: { liveQuiz: true, kosaKata: true },
    classroom: 'SER',
    group: 'Standard 2',
    email: 'siti.nurhaliza@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-2',
    name: names[2],
    customGroup: { cg1: false, cg2: true },
    category: { liveQuiz: false, kosaKata: true },
    classroom: 'SSR',
    group: 'Standard 3',
    email: 'john.doe@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-3',
    name: names[3],
    customGroup: { cg1: true, cg2: false },
    category: { liveQuiz: true, kosaKata: false },
    classroom: 'SER',
    group: 'Standard 1',
    email: 'jane.smith@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-4',
    name: names[4],
    customGroup: { cg1: false, cg2: true },
    category: { liveQuiz: true, kosaKata: true },
    classroom: 'SSR',
    group: 'Standard 2',
    email: 'michael.tan@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-5',
    name: names[5],
    customGroup: { cg1: true, cg2: true },
    category: { liveQuiz: false, kosaKata: true },
    classroom: 'SER',
    group: 'Standard 3',
    email: 'nur.aisyah@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-6',
    name: names[6],
    customGroup: { cg1: true, cg2: false },
    category: { liveQuiz: true, kosaKata: false },
    classroom: 'SSR',
    group: 'Standard 1',
    email: 'ahmad.zaki@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-7',
    name: names[7],
    customGroup: { cg1: false, cg2: true },
    category: { liveQuiz: true, kosaKata: true },
    classroom: 'SER',
    group: 'Standard 2',
    email: 'emily.wong@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-8',
    name: names[8],
    customGroup: { cg1: true, cg2: true },
    category: { liveQuiz: false, kosaKata: true },
    classroom: 'SSR',
    group: 'Standard 3',
    email: 'fatimah.zahra@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-9',
    name: names[9],
    customGroup: { cg1: true, cg2: false },
    category: { liveQuiz: true, kosaKata: false },
    classroom: 'SER',
    group: 'Standard 1',
    email: 'adam.lee@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-10',
    name: names[10],
    customGroup: { cg1: false, cg2: true },
    category: { liveQuiz: true, kosaKata: true },
    classroom: 'SSR',
    group: 'Standard 2',
    email: 'samantha.lim@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-11',
    name: names[11],
    customGroup: { cg1: true, cg2: true },
    category: { liveQuiz: false, kosaKata: true },
    classroom: 'SER',
    group: 'Standard 3',
    email: 'hafiz.rahman@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-12',
    name: names[12],
    customGroup: { cg1: true, cg2: false },
    category: { liveQuiz: true, kosaKata: false },
    classroom: 'SSR',
    group: 'Standard 1',
    email: 'chong.wei@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-13',
    name: names[13],
    customGroup: { cg1: false, cg2: true },
    category: { liveQuiz: true, kosaKata: true },
    classroom: 'SER',
    group: 'Standard 2',
    email: 'aina.sofia@gmail.com',
    action: 'edit',
  },
  {
    key: 'student-14',
    name: names[14],
    customGroup: { cg1: true, cg2: true },
    category: { liveQuiz: false, kosaKata: true },
    classroom: 'SSR',
    group: 'Standard 3',
    email: 'zara.aziz@gmail.com',
    action: 'edit',
  },
];

export { tableData }; 