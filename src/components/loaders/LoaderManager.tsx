'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeartRate from '../comman/HeartBeat';
import SimplePrepcoLoader from '../comman/SimplePrepcoLoader';

export default function LoaderManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isPreloading, setIsPreloading] = useState(true); // Tracks initial preloading state
  const [isInAppLoading, setIsInAppLoading] = useState(false); // Tracks in-app navigation loader state
  const [initialLoadComplete, setInitialLoadComplete] = useState(false); // Tracks whether the initial page load has completed

  // Effect for handling the preloading state
  useEffect(() => {
    const preloadTimeout = setTimeout(() => {
      setIsPreloading(false); // End preloading after timeout
      setInitialLoadComplete(true); // Mark initial load as complete
    }, 3000); // Simulated preload delay

    return () => clearTimeout(preloadTimeout); // Cleanup on component unmount
  }, []);

  // Handle the internal navigation state
  useEffect(() => {
    const isFirstVisit = localStorage.getItem('firstVisit') === null;
    
    if (isFirstVisit) {
      // Set to localStorage so that subsequent reloads don't show preloader
      localStorage.setItem('firstVisit', 'false');
      return; // Skip on the first visit
    }

    // Only show in-app loader if we are not preloading
    if (!isPreloading && initialLoadComplete) {
      setIsInAppLoading(true); // Start in-app loader on navigation
      setTimeout(() => {
        setIsInAppLoading(false); // Stop in-app loader after delay
      }, 2000); // Adjust delay based on your needs
    }
  }, [pathname, isPreloading, initialLoadComplete]); // Re-run only when pathname or initial load state changes

  return (
    <>
      {/* Show Preloader until initial page load is complete */}
      {isPreloading && <SimplePrepcoLoader />}

      {/* Show In-App Loader only after preloading and during internal page navigation */}
      {!isPreloading && isInAppLoading && <HeartRate />}

      {/* Render main content once preloading and in-app loader are both complete */}
      {!isPreloading && !isInAppLoading && children}
    </>
  );
}

