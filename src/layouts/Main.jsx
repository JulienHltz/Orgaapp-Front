import LoginForm from '../components/LoginForm'
import Home from '../pages/Home'
import User from '../pages/User'
import NewUser from '../components/NewUser'
import Equipement from '../pages/Equipement'
import NewEquipment from '../components/NewEquipment'

const Main = ({ component }) => {
  return (
    <main>
      {component === 'login' && <LoginForm />}
      {component === 'home' && <Home />}
      {component === 'user' && <User />}
      {component === 'newuser' && <NewUser />}
      {component === 'equipement' && <Equipement />}
      {component === 'newequipment' && <NewEquipment />}
    </main>
  )
}

export default Main
