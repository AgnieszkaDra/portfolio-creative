import technology from '../assets/technology.png';
import idea from '../assets/idea.png'
import portfolio from '../assets/portfolio.png'
import chart from '../assets/chart.png'
import gallery from '../assets/gallery.png'
// import customizable from '../../src/images/customizable.png';
// import design from '../../src/images/design.png';

const te =  'I stumbled upon this website while searching for something entirely different, and I must say, it was a delightful discovery! The sleek and user-friendly design immediately caught my eye, making navigation a breeze';
const elser = 'But on the other hand the loading times are nothing short of agonizing, turning what should be a simple online visit into a test of patience.'

export const features = {
    list: [
      {
        image: technology,
        name: '',
        text: 'I am still learning frontend technologies and use them in growing my porftolio',
        source: 'https://pixabay.com/illustrations/technology-equipment-responsive-web-2468063/',
        id: 0
      },
      {
        image: idea,
        name: '',
        text: `I've got dillemma between learning new technologies or refactoring project's code which I know is not good enough`,
        source: 'https://www.pexels.com/photo/white-bubble-illustration-1111372/',
        id:1,
      },
      {
        image: portfolio,
        name: 'PORTFOLIO',
        text: `Now it's time for TypeScript...and plan to write website with this technology to my friend`,
        start:5,
        id:2
      },
      {
        image: chart,
        name: 'Put your data visible in your data',
        text: 'Give me chance and hire me to your project',
        start:5,
        id:3
      },
      // {
      //   image: gallery,
      //   name: '???',
      //   text: '',
      //   start:5,
      //   id:4
      // },
    
    ]
  }
  
  export default features