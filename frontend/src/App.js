import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import Login from './views/login'

//Views

function App() {
	return (
			<BrowserRouter>
				<Fragment>
					<Navbar></Navbar>
					<Routes>
						<Route path='/login' element={<Login/>}></Route>
						<Route path='/home' element={<Main/>}></Route>
					</Routes>
				</Fragment>
			</BrowserRouter>
	);
}

export default App;