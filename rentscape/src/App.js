import './App.css'
import MenuLeft from './components/MenuLeft'
import MenuRight from './components/MenuRight'
import Properties from './containers/Properties'

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='nav'>
          <div className='logo'></div>
          <div className='menu-left'>
            <MenuLeft />
          </div>
          <div className='menu-right'>
            <MenuRight />
          </div>
        </div>
        <div className='notifications'>
          notifications
        </div>
        <div className='display'>
          <Properties />
        </div>
        <div className='footer'>
          footer
        </div>
      </div>
    </div>
  )
}

export default App
