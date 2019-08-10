import React, { Component } from 'react'
import './App.css'
import HomePage from './containers/HomePage.container'

class App extends Component {
	render () {
		return(
			<div>
				<h1>Hello</h1>
				<HomePage/>
			</div>
		)
	}
}

export default App