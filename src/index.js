import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';
import Programs from './programs';
import About from './aboutUs';
import Video from './video';
import Contact from './Contact.js';
import Showcase from './showcase.js';
import Flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';

ReactDOM.render(<div className="container-fluid">
	<MuiThemeProvider>
	<div>
	<App />
	<Video />
	<About />	
	<Programs />
	<Showcase />
	<Contact />
	</div>
  	</MuiThemeProvider></div>,
  document.getElementById('root')
);