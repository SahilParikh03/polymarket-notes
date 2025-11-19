import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const LandingHeader = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleGetApp = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo and Brand */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/polynote-logo.svg"
              alt="Polynote Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="text-lg font-normal text-gray-900">Polynote</span>
          </button>

          {/* Right Side - Navigation */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('overview')}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('plans')}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Plans
            </button>
            <a
              href="https://x.com/polynote_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Twitter/X"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <Button
              onClick={handleGetApp}
              variant="outline"
              className="text-sm border-gray-300 hover:bg-gray-50"
            >
              Get the app
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
