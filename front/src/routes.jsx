import React from 'react'
import {HashRouter, Route, Redirect } from 'react-router-dom'

import Todo from '../src/todo/todo'
import About from '../src/about/about'

export default props => (
    <HashRouter>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </HashRouter>


)