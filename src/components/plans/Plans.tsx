import React from 'react'
import Banner from '../comman/Banner'
import PlanCardGrid from './PlanCardGrid'
import mockData from '@/data/plans'

const Plans = () => {
  return (
    <section>
      <Banner title="Our Plans" />
      <PlanCardGrid plans={mockData} />
    </section>
  )
}

export default Plans