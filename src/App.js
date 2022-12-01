
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';
import { PhotoView } from 'react-photo-view/dist/react-photo-view';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
