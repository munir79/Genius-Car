
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Main from './Component/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <div >

<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
