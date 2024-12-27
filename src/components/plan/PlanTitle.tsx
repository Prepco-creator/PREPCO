import { PlanTitleProps } from '@/types'
import React from 'react'

const PlanTitle: React.FC<PlanTitleProps> = ({ title }) => {

    return (
        <section>
            <h1 className='text-stroke-primary text-custom-96 text-center'>{title}</h1>
        </section>
    )
}

export default PlanTitle