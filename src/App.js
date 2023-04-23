import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes, 
  BrowserRouter,
  useRouteError,
} from "react-router-dom";
import Homepage from './components/homepage';
import Property from './components/property';
import About from './components/about';
import Error from './components/404';

function App() {

  const ErrorBoundary= () => {

    let error = useRouteError();
    console.error(error);
    return <div> Erreur 404 </div>
  }


  return (
   <BrowserRouter>

    <Routes>

      <Route path="/" element={<Homepage/>}  errorElement={<ErrorBoundary/>}/>
      <Route path="/properties/:id" element={<Property />} errorElement={<ErrorBoundary />}/>
      <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" exact={true} element={<Error />} />
    

    </Routes>
   
   </BrowserRouter>
    
  );
}

export default App;
