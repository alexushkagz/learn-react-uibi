import { Navigate, Route, Routes } from 'react-router-dom';
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/', element: <Navigate to="/posts" replace />},
    {path: '/login', element: <Navigate to="/posts" replace />},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/error', element: <Error/>},
    {path: '*', element: <Navigate to="/error" replace />},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '*', element: <Navigate to="/login" replace />},
]