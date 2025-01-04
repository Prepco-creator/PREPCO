import { HealthPackageDetails } from '@/types'
import React from 'react'
import HealthPackage from './HealthPackage'

const HealthPackagesGrid: React.FC<{ healthPackages: HealthPackageDetails[] }> = ({ healthPackages }) => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
                healthPackages?.map((healthPackage: HealthPackageDetails, index: number) => (
                    <HealthPackage key={index} healthPackage={healthPackage} />
                ))
            }
        </section>
    )
}

export default HealthPackagesGrid