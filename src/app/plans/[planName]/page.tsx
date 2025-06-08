import Plan from '@/components/plan/Plan';
import { plans_v2 } from '@/data/plans-v2';
import formatToHyphenated from '@/utils/fomatPathName';
import React from 'react';

export async function generateStaticParams(): Promise<{ planName: string }[]> {
  return plans_v2.map((plan) => ({ planName: formatToHyphenated(plan.title) })); // Assuming 'name' is the key
}

const Page = () => {
  return <Plan />;
};

export default Page;
