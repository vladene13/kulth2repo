import team1 from '../assets/images/MariusPas.png';
import team2 from '../assets/images/RobertSzasz.png';
import team3 from '../assets/images/VladEne.png';
import team4 from '../assets/images/AndreiSimion.png';

interface IData {
  id: number;
  path: string;
  title: string;
  subtitle: string;
  content: string;
}

export const ServiceData2: IData[] = [
  {
    id: 1,
    path: team1,
    title: 'Marius Pasculea',
    subtitle:'prima etP',
    content:
      'CEO',
  },
  {
    id: 2,
    path: team2,
    title: 'Robert Szasz',
    subtitle: '',
    content:
      'CTO',
  },
  {
    id: 3,
    path: team3,
    title: 'Vlad Ene',
    subtitle:'' ,
    content:
      'VP of Engineering Front-End',
  },
  {
    id: 4,
    path: team4,
    title: 'Andrei Simion',
    subtitle:'' ,
    content:
      'VP of Engineering Back-End',
  },
];
