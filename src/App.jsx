import { BrowserRouter, Routes, Route } from "react-router-dom"
//  import provider contesto
import { BudgetModeProvider } from "./context/BudgetContext"

// importiamo le varie pages da usare nelle rotte
import HomePage from "./pages/HomePage"

// import del layout di ref
import DefaultLayout from "./Layout/Layout"

import Products from "./pages/Products"

function App() {


  return (
    <BudgetModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/prodotti" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetModeProvider>
  )
}

export default App
