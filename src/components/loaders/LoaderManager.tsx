'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SimplePrepcoLoader from '../comman/SimplePrepcoLoader';

export default function LoaderManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true); // Tracks loading state for both preloading and navigation
  const [initialLoadComplete, setInitialLoadComplete] = useState(false); // Tracks whether the initial page load has completed

  // Effect for handling the preloading state
  useEffect(() => {
    const preloadTimeout = setTimeout(() => {
      setIsLoading(false); // End loading after timeout
      setInitialLoadComplete(true); // Mark initial load as complete
    }, 3000); // Simulated preload delay

    return () => clearTimeout(preloadTimeout); // Cleanup on component unmount
  }, []);

  // Handle the internal navigation state
  useEffect(() => {
    if (initialLoadComplete) {
      setIsLoading(true); // Start loader for internal navigation
      const navTimeout = setTimeout(() => {
        setIsLoading(false); // Stop loader after navigation delay
      }, 3000); // Adjust delay based on your needs

      return () => clearTimeout(navTimeout); // Cleanup on navigation change
    }
  }, [pathname, initialLoadComplete]);

  return (
    <>
      {/* Show loader during both preloading and internal navigation */}
      {isLoading && <SimplePrepcoLoader />}

      {/* Render main content once loading is complete */}
      {!isLoading && children}
    </>
  );
}
