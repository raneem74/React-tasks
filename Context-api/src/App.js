import './App.css';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import { Suspense, lazy } from "react";
import MoviesModule from './Modules/MoviesModule';
const Movies =lazy(()=>import("./components/Movies"))
const Navbar =lazy(()=>import("./components/Navbar"))
const AddMovie =lazy(()=>import("./components/AddMovie"))
const NotFound =lazy(()=>import("./components/NotFound"))



function App() {
  return (
    <>

    <Suspense fallback={<div>Loading........</div>}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          
          <Route path="/*" element={<MoviesModule></MoviesModule>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>

        
        </Routes>
      </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;
