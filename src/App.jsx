import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from '../src/Components/Navbar.jsx'
import './App.css'
import Contacts from './Components/Contacts'
import Maps from './Components/Maps.jsx'
import CreateContacts from './Components/CreateContacts.jsx'
import EditContact from './Components/EditContact.jsx'

function App() {

  return (
    <div className=' bg-slate-100 flex max-sm:block h-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Maps />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/add-contacts' element={<CreateContacts />} />
          <Route path='/edit-contacts/:id' element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
