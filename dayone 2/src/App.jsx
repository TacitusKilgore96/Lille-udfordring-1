import Home from './components/Home'
import Contact from './components/Contact'
import News from './components/News'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  return (
    <section>

      <Home />
      <About/>
      <News newsInfo="desire" newsTitle="the one"/>
      <Contact contactTitle="Kontakt os">
        <h1>yis yis</h1>
        <p>lil yis yis</p>
      </Contact>
      <Newsletter />
      <Card cardTitle="Card Title Here" cardText="Card text goes here"/>

    </section>
  )
}

export default App
