import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/posts" replace />} />
			<Route path='/about' element={<About />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/posts/:id' element={<PostIdPage />} />
			<Route path='/error' element={<Error />} />
			<Route path="*" element={<Navigate to="/error" replace />} />
		</Routes>
	)
}

export default AppRouter