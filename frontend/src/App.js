import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LandingPage from './pages/landingpage/landing'
import LoginPage from './pages/login'
import FetchStudySets from './pages/fetchStudySets'
import Home from './pages/home/home'
import Redirect from './components/redirect'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


const App = () => {
  let authorised=true
  const { user } = useSelector(state => state.user)
  if (!user) authorised=false

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/load" element={authorised? <FetchStudySets />: <Redirect />} />
      <Route path="/home/*" element={authorised?<Home />:  <Redirect />} />
    </Routes>
  )
}

export default App