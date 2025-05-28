

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import { ThemeProvider } from './components/theme-provider'
import Layout from './layouts/Layout'

function App() {

  return (
    <>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

                        <Layout >
                          <Home />
                          <About />
                          <Projects />
                          <Contact />
                        </Layout>
                  </ThemeProvider>

    </>
  )
}

export default App
