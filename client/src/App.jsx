import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/tasks' element={<h1>Home tasks</h1>} />
        <Route path='/add-tasks' element={<h1>new tasks</h1>} />
        <Route path='/tasks/:id' element={<h1>update page</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />

      </Routes>

    </>
  )
}

export default App
