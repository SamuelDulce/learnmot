import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UsersPage from './pages/users/Userspages'
import HomePage from './pages/Homepages'
import UsersCreate from './pages/users/UsersCreate'
import UsersList from './pages/users/UsersList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/users' element={ <UsersPage /> } />
        <Route path='/insert/users' element={ <UsersCreate /> } />
        <Route path='/list/users' element={ <UsersList /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App