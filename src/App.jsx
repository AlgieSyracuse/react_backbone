import 'babel-polyfill';  // without Webpack, error in browser.
import 'whatwg-fetch';   // without Webpack, error in browser.
import React from 'react';  // ...
import ReactDOM from 'react-dom';

class MainApp extends React.Component {
	render() {
		return (
			<div>
				<h1> Hello </h1>
			</div>
		);
	}
}


const contentNode = document.getElementById('contents');
ReactDOM.render( <MainApp />, contentNode );



// HMR from webpack-dev
if (module.hot) {
	module.hot.accept();
}