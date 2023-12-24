import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './index.css';
import Dashboard from './components/pages/Dashboard';
import Layout from './components/layout/Layout'; // Importieren Sie Ihr Layout
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './helpers/ProtectedRoute';
import Settings from './components/pages/Settings';
import Posts from './components/pages/posts/Index';
import Post from './components/pages/posts/Show';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Hier wird der AuthProvider verwendet */}
      <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/posts" element={
              <ProtectedRoute>
                <Layout>
                  <Posts />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/posts/{id}" element={
              <ProtectedRoute>
                <Layout>
                  <Post />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } />
          </Routes>
      </Router>
    </AuthProvider> {/* Hier wird der AuthProvider verwendet */}
  </React.StrictMode>
);