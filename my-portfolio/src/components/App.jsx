import '../App.sass';
import Nav from './Nav'
import Home from './Home'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Email from './Email'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
     <>

<Route path="/" component={Nav} />
<Route path="/" exact component={Home} />
<Route to="/" component={AboutMe} />
<Route to="/" component={Skills} />
<Route to="/" component={Projects} />
<Route to="/" component={Email} />
     </>
  )
}

export default App;
