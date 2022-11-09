import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AllServices from '../Pages/Allservices/AllServices';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('https://assignment-server-eight.vercel.app/services')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

        ]
    }
]);

export default router;