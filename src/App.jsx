

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import { ThemeProvider } from './components/theme-provider'
import FullPageLayout from './layouts/Layout'

function App() {

  return (
    <>

                        <FullPageLayout >
                          <Home />
                          <About />
                          <Projects />
                          <Contact />
                        </FullPageLayout>

    </>
  )
}

export default App
