import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import NotFoundPage from './components/routing/NotFoundPage';

//Views

function App() {
	return (
			<BrowserRouter>
				<Fragment>
					<Navbar></Navbar>
					<Routes>
            			<Route path="/home" element={<Main/>} />
						<Route path="*" element={<NotFoundPage/>} />
					</Routes>
				</Fragment>
			</BrowserRouter>
	);
}

export default App;