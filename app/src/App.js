// @ts-ignore
import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Posts from './pages/Posts';

import './styles/App.css';

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<AppRouter/>
		</BrowserRouter>
	)
}

export default App;
