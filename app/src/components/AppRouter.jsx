import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
	const {isAuth, isLoading} = React.useContext(AuthContext);
	
	if(isLoading) {
		return <Loader/>
	}
	
	const routes = isAuth ? privateRoutes : publicRoutes;

	return (
		<Routes>
			{routes.map(route =>
				<Route
					path={route.path}
					element={route.element}
					key={route.path}
				/>
			)}
		</Routes>
	)
}

export default AppRouter