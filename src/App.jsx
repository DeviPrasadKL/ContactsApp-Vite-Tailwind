import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from '../src/Components/Navbar.jsx'
import './App.css'
import Contacts from './Components/Contacts'
import Maps from './Components/Maps.jsx'
import CreateContacts from './Components/CreateContacts.jsx'
import EditContact from './Components/EditContact.jsx'

function App() {

  return (
    <div className='flex  bg-slate-100 max-sm:block'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Maps />} />
          <Route path='/ContactsApp-Vite-Tailwind/' element={<Contacts />} />
          <Route path='/add-contacts' element={<CreateContacts />} />
          <Route path='/edit-contacts/:id' element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
