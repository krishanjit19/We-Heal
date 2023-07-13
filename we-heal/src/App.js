import './App.scss';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Book from './pages/Book/Book';
import Tests from './pages/Tests/Tests';
import Tips from './pages/Tips/Tips';
import Success from './pages/Success/Success';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const Layout = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/tests',
        element: <Tests/>
      },
      {
        path: '/book',
        element: <Book/>
      },
      {
        path: '/tips',
        element: <Tips/>
      },
      {
        path: '/success',
        element: <Success/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
