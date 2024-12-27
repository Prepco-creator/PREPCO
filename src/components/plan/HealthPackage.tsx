import { HealthPackageDetails } from '@/types'
import Image from 'next/image'
import React from 'react'

const HealthPackage: React.FC<{ healthPackage: HealthPackageDetails }> = ({ healthPackage }) => {
    return (
        <div className='p-5 bg-primary1 rounded-[30px] flex flex-col items-center justify-center gap-2'>
            <Image src={healthPackage.iconSrc} alt={healthPackage.id} width={60} height={60} />
            <h5 className='text-custom-20 font-extrabold text-primaryDark'>{healthPackage.title}</h5>
            <p className='text-custom-16 text-primaryDark'>{healthPackage.description}</p>
        </div>
    )
}

export default HealthPackage