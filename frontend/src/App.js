import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';

//Components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import Login from './views/login'
import DetalleNota from './views/detalleNota';
import AñadirNota from './views/añadirNota';
import NotFoundPage from './components/routing/NotFoundPage'
import store from './store';

//Views

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Fragment>
					<Navbar></Navbar>
					<Routes>
						<Route path='/login' element={<Login/>}></Route>
						<Route path='/home' element={<Main/>}></Route>
						<Route path='/detalleNota/:id' element={<DetalleNota/>}></Route>
						<Route path='/addNotice' element={<AñadirNota/>}></Route>
						<Route path='/*' element={<NotFoundPage/>}></Route>
					</Routes>
				</Fragment>
			</BrowserRouter>
		</Provider>
	);
}

export default App;