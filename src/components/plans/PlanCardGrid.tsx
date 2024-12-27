import React from 'react'
import { PlanProps } from '@/types'



const PlanCardGrid: React.FC<{ plans: PlanProps[] }> = ({ plans }) => {

  console.log(plans)

  return (
    <section>
      plan page
    </section>
  )
}

export default PlanCardGrid