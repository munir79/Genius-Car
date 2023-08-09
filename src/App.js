
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Main from './Component/Main';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Out from './Chekout/Out';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },{
          path:'/signUp',
          element:<SignUp></SignUp>
        },{
         path:'/out/:id',
         element:<Out></Out>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        }
      ]
    }
  ])
  return (
    <div data-theme="retro" className='  max-w-screen-xl mx-auto ' >

<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
