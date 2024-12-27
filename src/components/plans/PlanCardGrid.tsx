import React from 'react'
import { PlanProps } from '@/types'
import PlanCard from './PlanCard'



const PlanCardGrid: React.FC<{ plans: PlanProps[] }> = ({ plans }) => {

  return (
    <section className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
      {
        plans?.map((plan: PlanProps, index: number) => (
          <PlanCard
            key={index}
            discountPricing={plan.discountPricing}
            id={plan.id}
            title={plan.title}
            category={plan.category}
            description={plan.description}
            isSpecial={plan.isSpecial}
            pricing={plan.pricing}
            duration={plan.duration}
            features={plan.features}
          />
        ))
      }
    </section>
  )
}

export default PlanCardGrid