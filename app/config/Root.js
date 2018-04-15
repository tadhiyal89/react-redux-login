import React from 'react';
import { IndexRoute,BrowserRouter as Router, Route, Switch,Render} from 'react-router-dom';
import Login from '../containers/login/Login.jsx';
import Search from '../containers/search/Search.jsx';
import ViewDetails from '../containers/details/Index.jsx';
import App from '../containers/app/Index.jsx';
import Test from '../containers/test/Index.jsx';
const Root = () => {
  return (
		<Router>
			<App>
			<Route path="/search" exact component={Search}/>
			<Route exact path="/details/:id"  component={ViewDetails}/>
			<Route path="/" exact component={Login}/>
			<Route path="/test" exact component={Test}/>
			</App>
		</Router>
  );
};
export default Root;

