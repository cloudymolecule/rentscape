import { Route, Switch } from 'react-router'
import './App.css'
import Main from './containers/Main'
import NewProperty from './containers/NewProperty'
import About from './containers/About'

function App() {
  return (
    <div className='wrapper'>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/add-property" component={NewProperty} />
          <Route exact path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default App
