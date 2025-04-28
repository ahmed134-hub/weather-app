import './App.css'
import Content from './components/content/content'
import WeatherProvider from './context/WeatherContext'

function App() {


  return (
    <WeatherProvider>
      <Content/>
    </WeatherProvider>
  )
}

export default App
