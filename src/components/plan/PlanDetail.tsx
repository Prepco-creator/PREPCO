import { PlanDetailProps } from '@/types'
import React from 'react'
import HealthPackagesGrid from './HealthPackagesGrid'

const PlanDetail: React.FC<PlanDetailProps> = ({ title, bigDescription, healthPackages }) => {
    return (
        <section className='flex flex-col gap-8 text-center p-16'>
            <h1 className='capitalize text-custom-40 text-primary'>Enhanced {title} for everyone</h1>
            <p className='text-custom-20-2 text-secondaryDark'>{bigDescription}</p>
            <HealthPackagesGrid healthPackages={healthPackages} />
        </section>
    )
}

export default PlanDetail