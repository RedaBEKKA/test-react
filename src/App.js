import Header from "./component/Header";
import MovieList from "./component/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    
        <Header />
        
          <Routes className="container">
            <Route path="/"  element={<MovieList />} />            
          </Routes>
        
      
    </BrowserRouter>
  );
}
export default App;
