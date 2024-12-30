import React from 'react'
import { PlanProps } from '@/types'
import PlanCard from './PlanCard'



const PlanCardGrid: React.FC<{ plans: PlanProps[] }> = ({ plans }) => {

  return (
    <section className='p-8 grid grid-cols-1 md:grid-cols-2 grid-cols-auto-fit gap-3'
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
    >
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