import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import ActivityList from './components/activity';
import PMF from './components/pmf';
import Demo from './components/demo'
import Contact from './components/contact';


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap js-fullheight">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <ActivityList></ActivityList>
          {/*<PMF></PMF>*/}
          <Demo></Demo>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
