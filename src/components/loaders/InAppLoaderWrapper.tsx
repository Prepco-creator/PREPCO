'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeartRate from '../comman/HeartBeat';

export default function InAppLoaderWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeEnd = () => {
      timeout = setTimeout(() => setLoading(false), 3000); // Simulate a delay or loading time
    };

    // Listen to route changes
    router.prefetch(pathname); // Preloads the next route
    handleRouteChangeStart();
    handleRouteChangeEnd();

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname, router]);

  return (
    <>
      {loading && (
        <div className="in-app-loader">
          <HeartRate />
        </div>
      )}
      {children}
    </>
  );
}
