import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';
import service4 from '../assets/images/service-4.png';

interface IData {
  id: number;
  path: string;
  title: string;
  content: string;
}

export const ServiceData: IData[] = [
  {
    id: 1,
    path: service1,
    title: 'Scan and Identify',
    content:
      'Users can scan artworks, books, buildings, or other cultural objects using their phones camera, and the app will automatically identify the respective work or object.',
  },
  {
    id: 2,
    path: service2,
    title: 'Detailed Information',
    content:
      'Once the object is scanned and identified, the app provides users with detailed information about it',
  },
  {
    id: 3,
    path: service3,
    title: 'Educational Experience',
    content:
      'The app can also offer additional educational content about the scanned artworks or objects, including information about historical context, artistic style, significance, and influences.',
  },
  {
    id: 4,
    path: service4,
    title: 'Additional Content',
    content:
      'In addition to basic information, the app can also offer supplementary content such as videos, artist interviews, image galleries, and other relevant resources.',
  },
];
