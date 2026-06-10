import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy, useState } from 'react';
import useAuthStore from './store/authStore';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './ScrollToTop';
import './styles/accessibility.css';
import ScrollProgressBar from './components/ScrollProgressBar';

// PWA Components
import OfflineIndicator from './components/OfflineIndicator';
import UpdateNotification from './components/UpdateNotification';
import GuestWelcomeToast from './components/guest/GuestWelcomeToast';
import GuestOnboardingHint from './components/guest/GuestOnboardingHint';

import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
import KeyboardShortcutsModal from './components/common/KeyboardShortcutsModal';

