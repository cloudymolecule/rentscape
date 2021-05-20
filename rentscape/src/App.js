import './App.css'
import MenuLeft from './components/MenuLeft'

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='nav'>
          <div className='menu-left'>
            <MenuLeft />
          </div>
          <div className='logo'></div>
          <div className='menu-right'>
            menu-right
          </div>
        </div>
        <div className='notifications'>
          notifications
        </div>
        <div className='display'>
          display
        </div>
        <div className='footer'>
          footer
        </div>
      </div>
    </div>
  )
}

export default App
