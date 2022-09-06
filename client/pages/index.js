import Nav from './components/Nav'
import HomeScreen from './components/HomeScreen'
import { useEffect } from 'react'
import { useUserContext } from './context/UserWrapper'
import axios from 'axios'

export default function Home() {
  const {user, setUser} = useUserContext()
  useEffect(()=> {
    axios.get("http://localhost:8000/api/user/relogin", {"withCredentials": true})
    .then(resp => {
      setUser(resp.data)
      // console.log(resp)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <Nav/>
      <HomeScreen/>
    </div>
  )
}
