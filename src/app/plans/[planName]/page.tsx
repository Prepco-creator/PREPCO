import Plan from '@/components/plan/Plan'
import React from 'react'

const page = async ({
  params,
}: {
  params: Promise<{ planName: string }>
}) => {

  const { planName } = await params;

  return (
    <Plan planName={planName} />
  )
}

export default page