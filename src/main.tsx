import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Whitelist from './pages/Whitelist';
import WaitlistSuccess from './pages/WaitlistSuccess';
import Privacy from './pages/Privacy';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Whitelist />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/waitlist-success" element={<WaitlistSuccess />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
