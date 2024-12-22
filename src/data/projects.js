import order from '../assets/projects/pharmacy/order.png'
import drug from '../assets/projects/pharmacy/leki.png'
import sew from '../assets/projects/sewPortfolio1.png'
import kanban from '../assets/projects/kanbanboard1.png'
import posts1 from '../assets/projects/posts1.png'
import basicPage from '../assets/projects/basicpage.png'
import basic2 from '../assets/projects/basic2.png'
import basic3 from '../assets/projects/basic3.png'
import basic4 from '../assets/projects/basic4.png'
import CV1 from '../assets/projects/CV1.png'
import CV2 from '../assets/projects/CV2.png'
import skills from '../assets/projects/skills.png'
import portfolio1 from '../assets/projects/portfolio1.png'

const pharmacyRed = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-pharmacy-red',
)
const pharmacyPink = getComputedStyle(
  document.documentElement,
).getPropertyValue('--color-pharmacy-pink')

const sewBeige = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-sew-beige',
)
const sewNavy = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-sew-navy',
)
const postsTurcoise = getComputedStyle(
  document.documentElement,
).getPropertyValue('--color-posts-turcoise')

const postsGreen = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-posts-green',
)
const postsGrey = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-posts-grey',
)

const kanbanPink = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-kanban',
)
const portfolioGreen = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-portfolio',
)

const colorContrast = getComputedStyle(document.documentElement).getPropertyValue(
  '--color-contrast',
)

const colorBasicPageReact= getComputedStyle(document.documentElement).getPropertyValue(
  '--color-basicPageReact-pink',
)

const colorBasicPageHTMLSCSS= getComputedStyle(document.documentElement).getPropertyValue(
  '--color-basicPageHTMLSCSS',
)

export const projects = {
  colorContrast: colorContrast,
  categories: [
    {
      name: 'Pharmacy Website',
      id: '01',
      imageUrl: drug,
      imageUrl2: order,
      description:
        'Unicate form to order drugs and medications',
      features: ['useful website', 'unicate form to order'],
      githubUrl: 'https://github.com/AgnieszkaDra/PharmacyWebsite-react',
      viewUrl1: 'https://luminous-dusk-95a487.netlify.app/',
      mainColor: colorContrast,
      background1: pharmacyRed,
      background2: 'white',
    },
    {
      name: 'Sew Portfolio',
      id: '02',
      imageUrl: sew,
      description: '',
      features: ['TypeScript + React', 'open categories'],
      githubUrl: 'https://github.com/AgnieszkaDra/SewPortfolioPage',
      viewUrl1: 'https://merry-bombolone-6f9da6.netlify.app/',
      mainColor: colorContrast,
      background1: sewBeige,
      background2: 'white',
    },
    {
      name: 'Kanban Board',
      id: '03',
      imageUrl: kanban,
      description: '',
      features: ['TypeScript + React', 'React-Query'],
      githubUrl: 'https://github.com/AgnieszkaDra/KanbanBoard-TypeScript',
      viewUrl1: 'https://preeminent-toffee-35c43f.netlify.app/',
      mainColor: kanbanPink,
      background1: sewBeige,
      background2: 'white',
    },
    {
      name: 'Opening Posts',
      id: '04',
      imageUrl: posts1,
      description: '',
      features: ['working with API', 'Vue technology', 'Pinia'],
      githubUrl: 'https://github.com/AgnieszkaDra/OpeningPosts--Vue',
      viewUrl1: 'https://tubular-strudel-c363fe.netlify.app/#/',
      mainColor: colorContrast,
      background1: postsGreen,
      background2: postsGreen,
    },
    {
      name: 'CV in React',
      id: '05',
      imageUrl: CV1,
      imageUrl2: CV2,
      viewUrl1: '',
      githubUrl: 'https://github.com/AgnieszkaDra/CV-React',
      viewUrl1: 'https://profound-madeleine-0a5635.netlify.app/',
      description: 'CV with function to download and save as PDF file',
      features: ['nice and useful CV example'],
      mainColor: colorContrast,
      background1: portfolioGreen,
      background2: 'white',
    },
    {
      name: 'Portfolio',
      id: '06',
      imageUrl: portfolio1,
      imageUrl2: '',
      viewUrl1: '',
      githubUrl: 'https://github.com/AgnieszkaDra/portfolio-creative',
      viewUrl1: 'https://lucent-bublanina-ff1d8a.netlify.app/',
      description: 'Portfolio',
      features: ['React-routing'],
      mainColor: colorContrast,
      background1: colorContrast,
      background2: 'white'
    },
    {
      name: 'Basic page in React',
      id: '07',
      imageUrl: basicPage,
      imageUrl2: basic2,
      viewUrl1: 'https://mellifluous-profiterole-46d3ae.netlify.app/',
      githubUrl: 'https://github.com/AgnieszkaDra/Basic-Page-React',
      description: 'Basic page which has been writing in React.',
      features: [
        'original dropdown menu',
        'No framework was used to create the slider.',
      ],
      mainColor: colorContrast,
      background1: colorBasicPageReact,
    },
    {
      name: 'Basic page in HTML,SCSS,JS',
      id: '08',
      imageUrl: basic3,
      imageUrl2: basic4,
      viewUrl1: 'https://timely-narwhal-bfa32d.netlify.app/',
      githubUrl: 'https://github.com/AgnieszkaDra/Basic-page-HTML-SCSS-JS',
      description:
        'A basic webpage created using HTML for structure, SCSS for styling, and JavaScript for functionality.',
      features: ['basic code', 'Swiper JS library'],
      mainColor: colorContrast,
      background1: colorBasicPageHTMLSCSS,
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
      mainColor: colorContrast,
      background1: colorContrast,
    },
  ],
}

export default projects
