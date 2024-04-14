import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './sass/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import About from './components/layout/About/About'
import Projects from './components/layout/Projects/Projects'
import Contact from './components/layout/Contact/Contact'
import Error from './components/layout/Error'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header className="header" />,
  },
  {
    path: '/home',
    element: <Header className="header" />,
  },
  {
    path: '/about',
    element: <About className="about" />,
  },
  {
    path: '/projects',
    element: <Projects className="projects" />,
  },
  {
    path: '/contact',
    element: <Contact className="contact" />,
  },
  {
    path: '*',
    element: <Error/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className={'container'}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()