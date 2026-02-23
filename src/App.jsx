// importiamo pages
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"

// importiamo layout
import DefaultLayout from "./layouts/DefaultLayout"

// importiamo components
import MainHeader from "./components/MainHeader"

// importiamo comp libreria rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/films" element={<HomePage />} />
          <Route path="/films/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )


}

export default App
