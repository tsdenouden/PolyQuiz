import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App