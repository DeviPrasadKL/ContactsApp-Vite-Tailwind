import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from '../src/Components/Navbar.jsx'
import './App.css'
import Contacts from './Components/Contacts'
import Maps from './Components/Maps.jsx'
import CreateContacts from './Components/CreateContacts.jsx'
import EditContact from './Components/EditContact.jsx'

function App() {

  return (
    <div className=' bg-slate-100 flex max-sm:block'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Maps />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/add-contacts' element={<CreateContacts />} />
          <Route exact path='/edit-contacts/:id' element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
