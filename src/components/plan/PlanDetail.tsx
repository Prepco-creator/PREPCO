import { PlanDetailProps } from '@/types'
import React from 'react'
import HealthPackagesGrid from './HealthPackagesGrid'

const PlanDetail: React.FC<PlanDetailProps> = ({ healthPackages }) => {
    return (
        <section className='flex flex-col gap-6 lg:gap-8 text-center p-4 lg:p-16 bg-accent-2'>
            <h1 className='capitalize text-custom-20-bold lg:text-custom-40 text-primary'>Key Features And Detailed Benefits</h1>
            <HealthPackagesGrid healthPackages={healthPackages} />
        </section>
    )
}

export default PlanDetail