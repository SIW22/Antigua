import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PuzzleCreate from '../pages/PuzzleCreate'
import PuzzleShow from '../pages/PuzzleShow'
import PuzzleList from '../pages/PuzzleList'

export default (
	<Switch>
		<Route exact path='/' component={ Home } />
		<Route path='/puzzles/new' component={ PuzzleCreate } />
		<Route path='/puzzles/:id' component={ PuzzleShow } />
		<Route path='/puzzles' component={ PuzzleList } />
	</Switch>
)