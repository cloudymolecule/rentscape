import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './containers/Main'
import NewProperty from './containers/NewProperty'
import About from './containers/About'
import PropertyDisplay from './components/PropertyDisplay'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/add-property" component={NewProperty} />
            
            <Route exact path='/properties/:id' render={routerProps => <PropertyDisplay {...routerProps}/>} /> 
            <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App



