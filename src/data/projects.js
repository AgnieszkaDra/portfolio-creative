import order from '../assets/projects/pharmacy/order.png'
import drug from '../assets/projects/pharmacy/leki.png'
import sew from '../assets/projects/sewPortfolio1.png'
import posts1 from '../assets/projects/posts1.png'
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
import skills from '../assets/projects/skills.png'
import portfolio1 from '../assets/projects/portfolio1.png'

const pharmacyRed = getComputedStyle(document.documentElement).getPropertyValue('--color-pharmacy-red');
const pharmacyPink = getComputedStyle(document.documentElement).getPropertyValue('--color-pharmacy-pink');
const sewBeige = getComputedStyle(document.documentElement).getPropertyValue('--color-sew-beige');
const sewNavy = getComputedStyle(document.documentElement).getPropertyValue('--color-sew-navy');
const postsTurcoise = getComputedStyle(document.documentElement).getPropertyValue('--color-posts-turcoise');
const postsGreen = getComputedStyle(document.documentElement).getPropertyValue('--color-posts-green');
const postsGrey = getComputedStyle(document.documentElement).getPropertyValue('--color-posts-grey');

export const projects = {
    categories: [
        {
            name: 'Pharmacy Website',
            id: '01',
            imageUrl: drug,
            imageUrl2: order,
            description: 'This is a website, which has written two times.First time using pure JS(website in refactoring) and second time using React.',
            features: ['useful website', 'unicate form to order'],
            githubUrl: 'https://github.com/AgnieszkaDra/PharmacyWebsite-react',
            viewUrl1: 'https://luminous-dusk-95a487.netlify.app/',
            mainColor: pharmacyRed,
            background1: pharmacyPink,
            background2: 'white'
        },
        {
            name: 'Sew Portfolio',
            id: '02',
            imageUrl: sew,
            description: 'It will be first comercial project',
            features: ['TypeScript + React', 'open categories'],
            githubUrl: 'https://github.com/AgnieszkaDra/SewPortfolioPage',
            viewUrl1: 'https://merry-bombolone-6f9da6.netlify.app/',
            mainColor: sewNavy,
            background1: sewBeige,
            background2: 'white'
        },
        {
            name: 'Opening Posts',
            id: '03',
            imageUrl: posts1,
            description: 'It will be first comercial project',
            features: ['working with API', 'Vue technology', 'Pinia'],
            githubUrl: 'https://github.com/AgnieszkaDra/OpeningPosts--Vue',
            viewUrl1: 'https://tubular-strudel-c363fe.netlify.app/#/',
            mainColor: postsTurcoise,
            background1: postsGrey,
            background2: postsGreen
        },
      

        {
            name: 'Calculator Task',
            id: '04',
            imageUrl: calculator1,
            imageUrl2: calculator2,
            githubUrl: 'https://github.com/AgnieszkaDra/Calculator-task',
            viewUrl1: 'https://lively-faun-5a14eb.netlify.app/',
            description: 'Base calculator, which has written in Vanilla JS technology.',
            features: ['useful calculator', 'visible previous operations'],
            mainColor: 'rgb(66, 230, 219)'
        },
        {
            name: 'Calculator Game',
            id: '05',
            imageUrl: game1,
            imageUrl2: game2,
            githubUrl: 'https://github.com/AgnieszkaDra/Calculator-game',
            viewUrl1: 'https://splendorous-creponne-6e9cb4.netlify.app/',
            description: 'Simple game similar to  Sinal game',
            features: ['useful calculator', 'visible previous operations', 'still in writing'],
            mainColor: ' rgb(159, 189, 189)'
        },
        {
            name: 'Basic page in React',
            id: '06',
            imageUrl: basicPage,
            imageUrl2: basic2,
            viewUrl1: 'https://mellifluous-profiterole-46d3ae.netlify.app/',
            githubUrl: 'https://github.com/AgnieszkaDra/Basic-Page-React',
            description: 'Basic page which has been writing in React.',
            features: ['original dropdown menu', 'No framework was used to create the slider.'],
            mainColor: '#e4007c'
        },
        {
            name: 'Basic page in HTML,SCSS,JS',
            id: '07',
            imageUrl: basic3,
            imageUrl2: basic4,
            viewUrl1: 'https://timely-narwhal-bfa32d.netlify.app/',
            githubUrl: 'https://github.com/AgnieszkaDra/Basic-page-HTML-SCSS-JS',
            description: 'A basic webpage created using HTML for structure, SCSS for styling, and JavaScript for functionality.',
            features: ['basic code', 'Swiper JS library'],
            mainColor: '#e4007c'
        },
        {
            name: 'CV in React',
            id: '08',
            imageUrl: CV1,
            imageUrl2: CV2,
            viewUrl1: '',
            githubUrl: 'https://github.com/AgnieszkaDra/CV-React',
            viewUrl1: 'https://profound-madeleine-0a5635.netlify.app/',
            description: 'CV with function to download and save as PDF file',
            features: ['nice and useful CV example'],
            mainColor: 'rgb(88, 196, 219)'
        },
        {
            name: 'Skills',
            id: '09',
            imageUrl: skills,
            imageUrl2: '',
            viewUrl1: '',
            githubUrl: 'https://github.com/AgnieszkaDra/Skills',
            viewUrl1: 'https://unrivaled-ganache-7814ff.netlify.app/',
            description: '',
            features: ['chartJS library'],
            mainColor: '#e4007c'
        },
        {
            name: 'Portfolio',
            id: '10',
            imageUrl: portfolio1,
            imageUrl2: '',
            viewUrl1: '',
            githubUrl: 'https://github.com/AgnieszkaDra/portfolio-creative',
            viewUrl1: 'https://lucent-bublanina-ff1d8a.netlify.app/',
            description: 'Portfolio',
            features: ['React-routing'],
            mainColor: '#e4007c'
        },
    ]
}

export default projects

