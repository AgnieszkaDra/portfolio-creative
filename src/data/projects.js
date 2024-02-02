import pharmacy from '../assets/projects/pharmacy/pharmacy.png'
import drug from '../assets/projects/pharmacy/leki.webp'
import calculator1 from '../assets/projects/calculator1.png'
import calculator2 from '../assets/projects/calculator.png'
import game1 from '../assets/projects/game1.png'
import game2 from '../assets/projects/game2.png'
import basicPage from '../assets/projects/basicpage.png'
import basicPage2 from '../assets/projects/basicpage2.png'
import basic2 from '../assets/projects/basic2.png'
import basic3 from '../assets/projects/basic3.png'
import basic4 from '../assets/projects/basic4.png'
import CV1 from '../assets/projects/CV1.png'
import CV2 from '../assets/projects/CV2.png'
import { faHome } from '@fortawesome/free-solid-svg-icons';



export const projects = {
    categories: [
        {
            name: 'Pharmacy Website',
            id: '01',
            imageUrl: drug,
            imageUrl2: pharmacy,
            description: 'This is a website, which has written two times.First time using pure JS(website in refactoring) and second time using React.',
            features: ['useful website', 'unicate form to order'],
            githubUrl: 'https://github.com/AgnieszkaDra/PharmacyWebsite-react',
            // githubUrl2: 'https://github.com/AgnieszkaDra/Pharmacy-Website',
            viewUrl1: 'https://luminous-dusk-95a487.netlify.app/',
            // viewUrl2: 'https://hilarious-alpaca-f63944.netlify.app/',
            mainColor: 'red'

        },

        { 
            name: 'Calculator Task',  
            id:'02',
            imageUrl: calculator1,
            imageUrl2: calculator2,
            githubUrl:  'https://github.com/AgnieszkaDra/Calculator-task',
            viewUrl1: 'https://lively-faun-5a14eb.netlify.app/',
            description: 'Base calculator, which has written in Vanilla JS technology.',
            features: ['useful calculator', 'visible previous operations'],
            mainColor: 'rgb(66, 230, 219)'
        },
        { 
            name: 'Calculator Game',  
            id:'03',
            imageUrl: game1,
            imageUrl2: game2,
            githubUrl:  'https://github.com/AgnieszkaDra/Calculator-game',
            viewUrl1: 'https://splendorous-creponne-6e9cb4.netlify.app/',
            description: 'Simple game similar to  Sinal game https://www.calculators.org/games/sinal/',
            features: ['useful calculator', 'visible previous operations', 'still in writing'],
            mainColor: ' rgb(159, 189, 189)'
        },
        { 
            name: 'Basic page in React',  
            id:'04',
            imageUrl: basicPage,
            imageUrl2: basic2,
            viewUrl1: 'https://mellifluous-profiterole-46d3ae.netlify.app/',
            githubUrl:  'https://github.com/AgnieszkaDra/Basic-Page-React',
            description: 'Basic page which has been writing in React.',
            features: ['original dropdown menu', 'No framework was used to create the slider.'],
            mainColor: '#e4007c'
        },
        { 
            name: 'Basic page in HTML,SCSS,JS',  
            id:'05',
            imageUrl: basic3,
            imageUrl2: basic4,
            viewUrl1: 'https://timely-narwhal-bfa32d.netlify.app/',
            githubUrl:  'https://github.com/AgnieszkaDra/Basic-page-HTML-SCSS-JS',
            description: 'A basic webpage created using HTML for structure, SCSS for styling, and JavaScript for functionality.',
            features: ['basic code', 'Swiper JS library'],
            mainColor: '#e4007c'
        },
        { 
            name: 'CV in React',  
            id:'06',
            imageUrl: CV1,
            imageUrl2: CV2,
            viewUrl1: '',
            githubUrl:  'https://github.com/AgnieszkaDra/CV-React',
            viewUrl1: 'https://profound-madeleine-0a5635.netlify.app/',
            description: 'CV with function to download and save as PDF file',
            features: ['nice and useful CV example'],
            mainColor: 'rgb(88, 196, 219)'
        },
        { 
            name: 'Skills',  
            id:'07',
            imageUrl: '',
            imageUrl2: '',
            viewUrl1: '',
            githubUrl:  'https://github.com/AgnieszkaDra/Skills',
            viewUrl1: 'https://unrivaled-ganache-7814ff.netlify.app/',
            description: '',
            features: ['chartJS library'],
            mainColor: '#e4007c'
        },
        { 
            name: 'Portfolio',  
            id:'08',
            imageUrl: '',
            imageUrl2: '',
            viewUrl1: '',
            githubUrl:  'https://github.com/AgnieszkaDra/portfolio-creative',
            viewUrl1: 'https://lucent-bublanina-ff1d8a.netlify.app/',
            description: 'Portfolio',
            features: ['React-routing'],
            mainColor: '#e4007c'
        },
        // { name: 'projects', id:'03', text: 'envelope'},
        // { name: 'contact',  id:'04', text: 'contact'},
    ]
}

export default projects

