/*
 *
 * App Container
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 *
*/

import React from 'react';
import { withRouter} from 'react-router-dom';
class App extends React.Component {
 constructor(props){
 	super(props)
 }

 render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
