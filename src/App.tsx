import { HashRouter, Routes, Route } from 'react-router-dom'
import ScoreBanner from './components/ScoreBanner.tsx'
import HomePage from './pages/HomePage.tsx'
import GamePage from './pages/GamePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<><ScoreBanner /><HomePage /></>} />
        <Route path="/games/:slug" element={<><ScoreBanner /><GamePage /></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}
