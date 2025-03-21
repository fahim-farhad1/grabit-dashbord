import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardLayOut from './Layouts/DashboardLayout/DashboardLayouts.jsx'
import Home from './Pages/Home/Home.jsx'
import Categories from './Pages/Categories/Categories.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashboardLayOut />}>
      <Route index path='dashboard' element={<Home />} />
      <Route  path='home' element={<Categories />} />

      </Route>
    </Routes>
  </BrowserRouter>,
)
