'use client'

import { ReactNode, useEffect, useState } from 'react';
import SimplePrepcoLoader from "@/components/comman/SimplePrepcoLoader";

interface PreloaderWrapperProps {
    children: ReactNode;
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulates a 2-second load
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="preloader">
                    <SimplePrepcoLoader />
                </div>
            ) : (
                children
            )}
        </>
    );
}

