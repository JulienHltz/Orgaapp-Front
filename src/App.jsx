import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout component='home' />}></Route>
        <Route path='/connexion' element={<Layout component='login' />}></Route>
        <Route
          path='/materiel'
          element={<Layout component='equipement' />}
        ></Route>
        <Route path='/groupes' element={<Layout component='band' />}></Route>
        <Route
          path='/evenements'
          element={<Layout component='event' />}
        ></Route>
        <Route
          path='/utilisateurs'
          element={<Layout component='user' />}
        ></Route>
        <Route
          path='/utilisateurs/nouvel-utilisateur'
          element={<Layout component='newuser' />}
        ></Route>
        <Route
          path='/materiel/nouveau-matos'
          element={<Layout component='newequipment' />}
        ></Route>
        <Route
          path='/materiel/nouvel-etat'
          element={<Layout component='newhealth' />}
        ></Route>
        <Route
          path='/materiel/nouvelle-category'
          element={<Layout component='newcategory' />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
