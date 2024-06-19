import ReactImg from '../assets/images/ReactJS.jpg';
import MLImg from '../assets/images/ML Logo.jpeg';
import EconomicsImg from '../assets/images/EconomicLogo.webp';
import PythonImg from '../assets/images/Python.jpg';
import MathImg from '../assets/images/Math.png';
import AIImg from '../assets/images/AI Logooos.jpg';
import CalculusImg from '../assets/images/Calculus.jpg';

const courses = [
  { 
    id: 1, 
    title: 'React JS', 
    description: 'Learn the basics of React until Advanced.', 
    videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8?si=WERr-s4cRW1tFDZu"', 
    category: 'Computer Science', 
    imageUrl: ReactImg
  },
  { 
    id: 2, 
    title: 'Machine Learning', 
    description: 'Learn Machine Learning for Technology.', 
    videoUrl: 'https://www.youtube.com/embed/NWONeJKn6kc?si=qDlmVDh4dt5XRSP1', 
    category: 'Computer Science', 
    imageUrl: MLImg 
  },
  { 
    id: 3, 
    title: 'Introduction to Economics', 
    description: 'Basics of economics.', 
    videoUrl: 'https://www.youtube.com/embed/EJHPltmAULA?si=E4x0pVFuYskLDHr0', 
    category: 'Economy', 
    imageUrl: EconomicsImg 
  },
  { id: 4, 
    title: 'Python for Beginners', 
    description: 'Learn Python from scratch.', 
    videoUrl: 'https://www.youtube.com/embed/nLRL_NcnK-4?si=tQhCtjWwb3u4XPM4', 
    category: 'Computer Science', 
    imageUrl: PythonImg 
  },
  { 
    id: 5, 
    title: 'Math for Computer Science', 
    description: 'Learn Math is important for Computer Science Students.', 
    videoUrl: 'https://www.youtube.com/embed/2SpuBqvNjHI?si=zDuDRMuBR1arHwr3', 
    category: 'Mathematics', 
    imageUrl: MathImg 
  },
  { 
    id: 6, 
    title: 'Artificial Intelligent', 
    description: 'Learn AI.', 
    videoUrl: 'https://www.youtube.com/embed/mEsleV16qdo?si=MmFxRQL0BDgPmpyC', 
    category: 'Artificial Intelligent', 
    imageUrl: AIImg 
  },
  { 
    id: 7, 
    title: 'Calculus', 
    description: 'Calculus is easy to learn.', 
    videoUrl: 'https://www.youtube.com/embed/HfACrKJ_Y2w?si=zXTWDE04BUcknC0c', 
    category: 'Mathematics', 
    imageUrl: CalculusImg 
  },
];

export default courses;
