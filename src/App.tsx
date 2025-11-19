
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ErrorBoundary from "@/components/ErrorBoundary";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Notebook from "./pages/Notebook";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<ErrorBoundary><Landing /></ErrorBoundary>} />
      <Route path="/auth" element={<ErrorBoundary><Auth /></ErrorBoundary>} />
      <Route
        path="/dashboard"
        element={
          <ErrorBoundary>
            <ProtectedRoute fallback={<Navigate to="/auth" replace />}>
              <Dashboard />
            </ProtectedRoute>
          </ErrorBoundary>
        }
      />
      <Route
        path="/notebook"
        element={
          <ErrorBoundary>
            <ProtectedRoute fallback={<Navigate to="/auth" replace />}>
              <Notebook />
            </ProtectedRoute>
          </ErrorBoundary>
        }
      />
      <Route
        path="/notebook/:id"
        element={
          <ErrorBoundary>
            <ProtectedRoute fallback={<Navigate to="/auth" replace />}>
              <Notebook />
            </ProtectedRoute>
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<ErrorBoundary><NotFound /></ErrorBoundary>} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
