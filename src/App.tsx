import { Suspense, lazy } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ManifestProvider } from './context/ManifestContext.tsx'
import ScoreBanner from './components/ScoreBanner.tsx'

const HomePage = lazy(() => import('./pages/HomePage.tsx'))
const GamePage = lazy(() => import('./pages/GamePage.tsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'))

function Loading() {
  return <div className="loading-spinner">Loading&hellip;</div>
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <ManifestProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ScoreBanner />
                  <Suspense fallback={<Loading />}>
                    <HomePage />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/games/:slug"
              element={
                <>
                  <ScoreBanner />
                  <Suspense fallback={<Loading />}>
                    <GamePage />
                  </Suspense>
                </>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Routes>
        </ManifestProvider>
      </Suspense>
    </HashRouter>
  )
}
