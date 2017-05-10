import React, {Component} from 'react';
import '../css/style.css';
import AppBar from 'material-ui/AppBar';

const styles =
{
	app: {
        background: '#5CA59F ',
        marginTop: '-8px'
    }
};

class App extends Component {
	render() {
		return(
               <AppBar style={styles.app}
                title="Digital Academy"
                onLeftIconButtonTouchTap={this.handleToggle}
               />
			  );
	         }
          }

export default App;