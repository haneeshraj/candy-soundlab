import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import App from './App'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import HomePage from './pages/auth/HomePage'
import AboutPage from './pages/auth/AboutPage'
import ContactPage from './pages/auth/ContactPage'
import DiscographyPage from './pages/auth/DiscographyPage'
import SnippetPage from './pages/auth/SnippetPage'

import DashboardPage from './pages/manager/DashboardPage'
import ManageArtistsPage from './pages/manager/ManageArtistsPage'
import ReleaseListPage from './pages/manager/ReleaseListPage'
import ManageReleasePage from './pages/manager/ManageReleasePage'
import UploadReleasePage from './pages/manager/UploadReleasePage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/discography" element={<DiscographyPage />} />
      <Route path="/snippet" element={<SnippetPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/manage-artists" element={<ManageArtistsPage />} />
      <Route path="/release-list" element={<ReleaseListPage />} />
      <Route path="/manage-release" element={<ManageReleasePage />} />
      <Route path="/upload-release" element={<UploadReleasePage />} />

      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
