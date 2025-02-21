'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import mockData from '@/data/plans';
import { PlanProps } from '@/types';
import { IndianRupee } from 'lucide-react';

const CheckoutForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const planId = searchParams.get("planId") as string;
    const plan = mockData?.find((data: PlanProps) => planId === data.id);

    // Redirect back if plan is not found
    useEffect(() => {
        if (!plan) {
            router.back();
        }
    }, [plan, router]);

    // State for form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    });

    // Check if all required fields are filled
    const isFormFilled = Object.values(formData).every(value => value.trim() !== '');

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 w-full mx-auto">
            {/* Left Section */}
            <div className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="border p-3 rounded-md w-full"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="border p-3 rounded-md w-full"
                        required
                    />
                </div>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="border p-3 rounded-md w-full mt-4"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="border p-3 rounded-md w-full mt-4"
                    required
                />
                <textarea
                    name="additionalInfo"
                    placeholder="Additional Information (Notes: Optional)"
                    className="border p-3 rounded-md w-full mt-4 h-24"
                    onChange={handleChange}
                ></textarea>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
                <div className="border-b pb-2 mb-4">
                    <div className="flex justify-between text-lg">
                        <span>Plan</span>
                        <span>Subtotal</span>
                    </div>
                </div>
                <div className="border-b pb-2 mb-4">
                    <div className="flex justify-between">
                        <span>{plan?.title}</span>
                        <span>
                            <IndianRupee size={18} className="inline" /> {plan?.discountPricing}
                        </span>
                    </div>
                </div>
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>
                        <IndianRupee size={18} className="inline" /> {plan?.discountPricing}
                    </span>
                </div>
                <button
                    className={`mt-6 w-full text-whit py-3 rounded-lg text-lg font-semibold transition ${
                        isFormFilled ? 'bg-teal-600 hover:bg-teal-700 text-white' : 'bg-gray cursor-not-allowed'
                    }`}
                    disabled={!isFormFilled}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutForm;
