import Plan from '@/components/plan/Plan';
import { mockData } from '@/data/plans'; // Import plans data
import formatToHyphenated from '@/utils/fomatPathName';
import React from 'react';

export async function generateStaticParams(): Promise<{ planName: string }[]> {
  return mockData.map((plan) => ({ planName: formatToHyphenated(plan.title) })); // Assuming 'name' is the key
}

const Page = () => {
  return <Plan />;
};

export default Page;
