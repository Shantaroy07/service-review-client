import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AllServices from '../Pages/Allservices/AllServices';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Review from '../Pages/Review/Review';
import SignUp from '../Pages/SignUp/SignUp';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';

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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('https://assignment-server-eight.vercel.app/services')
            },

            {
                path: '/details/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`https://assignment-server-shantaroy07.vercel.app/services/${params.id}`)
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addReview',
                element: <Review></Review>
            },

        ]
    }
]);

export default router;