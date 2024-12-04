import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';

import HomePage from './pages/Home/HomePage';
import AuthPage from './pages/Auth/AuthPage';

import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/admin/Users';
import Permissions from './pages/admin/Permissions';

import InstructorDashboard from './pages/Instructor/Dashboard';
import InstructorLearner from './pages/Instructor/Learner';
import InstructorRoadmaps from './pages/Instructor/Roadmaps';

import PageNotFound from './pages/PageNotFound';
import PageNotAuthorized from './pages/PageNotAuthorized';

// import { DarkModeProvider } from './context/DarkModeContext';

import HomeLayout from './ui/HomeLayout';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import ProfilePage from './pages/Profile/ProfilePage';
import { AuthProvider } from './contexts/auth/AuthContext';
import LearnerPage from './pages/Learner/LearnerPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              element={
                // <ProtectedRoute role="none">
                <HomeLayout />
                // </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />

              <Route
                path="profile"
                element={
                  <ProtectedRoute role="all">
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route element={<AppLayout />}>
              <Route
                path="admin/dashboard"
                element={
                  <ProtectedRoute role="0">
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="admin/users"
                element={
                  <ProtectedRoute role="0">
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path="admin/permissions"
                element={
                  <ProtectedRoute role="0">
                    <Permissions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="instructor/account"
                element={
                  <ProtectedRoute role="5">
                    <InstructorDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="instructor/profile"
                element={
                  <ProtectedRoute role="5">
                    <div>instructor/profile</div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="instructor/dashboard"
                element={
                  <ProtectedRoute role="5">
                    <InstructorDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="instructor/learner"
                element={
                  <ProtectedRoute role="5">
                    <InstructorLearner />
                  </ProtectedRoute>
                }
              />
              <Route
                path="instructor/roadmaps"
                element={
                  <ProtectedRoute role="5">
                    <InstructorRoadmaps />
                  </ProtectedRoute>
                }
              />

              <Route
                path="learner/home"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/certification"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/jobs"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/library"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/leaderboard"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/roadmaps"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/courses"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/practices"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/assessments"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="learner/tutorials"
                element={
                  <ProtectedRoute role="6">
                    <LearnerPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="login" element={<AuthPage />} />
            <Route path="signup" element={<AuthPage />} />
            <Route path="not-authorized" element={<PageNotAuthorized />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
