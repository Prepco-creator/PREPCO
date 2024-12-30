'use client'

import React from 'react'
import Banner from '../comman/Banner'
import formatToHyphenated from '@/utils/fomatPathName'
import mockData from '@/data/plans'
import { PlanProps } from '@/types'
import Hero from './Hero'
import PlanTitle from './PlanTitle'
import Features from './Features'
import MarqueeTags from '../comman/MarqueeTags'
import tags from '@/data/tags'
import PlanDetail from './PlanDetail'
import healthPackageDetails from '@/data/healthPackageDetails'

const Plan: React.FC<{ planName: string }> = ({ planName }) => {

    const plan = mockData?.find((data: PlanProps) =>
        planName === formatToHyphenated(data.title)
    );

    if (!plan) {
        return <div>Plan not found</div>;
    }

    return (
        <section>
            <Banner title={plan.title} />
            <Hero
                title={plan.title}
                duration={plan.duration}
                pricing={plan.pricing}
            />
            <PlanTitle title={plan.title} />
            <Features membersCount={plan.membersCount} description={plan.description} duration={plan.duration} features={plan.features} />
            <MarqueeTags tagClassName='bg-accent-2 px-2' className='py-16' tags={tags} />
            <PlanDetail title={plan.title} bigDescription={plan.bigDescription as string} healthPackages={healthPackageDetails} />
        </section>
    );
}

export default Plan;
