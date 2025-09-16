import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ApplicationViewer from './pages/Employer/ApplicationViewer';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import EmployerProfilePage from './pages/Employer/EmployerProfilePage';
import JobPosting from './pages/Employer/JobPosting';
import ManageJobs from './pages/Employer/ManageJobs';
import JobDetails from './pages/JobSeeker/JobDetails';
import JobSeekerDashboard from './pages/JobSeeker/JobSeekerDashboard';
import SavedJobs from './pages/JobSeeker/SavedJobs';
import UserProfile from './pages/JobSeeker/UserProfile';
import LandingPage from './pages/LandingPage/LandingPage';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/find-jobs" element={<JobSeekerDashboard />} />
            <Route path="/job/:jobId" element={<JobDetails />} />
            <Route path="/saved-jobs" element={<SavedJobs />} />
            <Route path="/profile" element={<UserProfile />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute requiredROle="employer" />}>
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />
              <Route path="/pots-job" element={<JobPosting />} />
              <Route path="/manage-jobs" element={<ManageJobs />} />
              <Route path="/applicants" element={<ApplicationViewer />} />
              <Route path="/company-profile" element={<EmployerProfilePage />} />
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px"
            }
          }}  
        />
      </div>
  )
}

export default App
