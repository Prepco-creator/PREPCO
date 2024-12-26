import React from 'react'

interface CTAProps {
    className: string;
}

const CTA: React.FC<CTAProps> = ({ className }) => {


    return (
        <section className={`p-6 shadow-multi-layer flex items-center justify-center gap-12 rounded-full ${className}`}>
            <h1 className='flex-[3] text-custom-28 text-primary'>Find a local insurance agent</h1>
            <div>
                <img src="" alt="" />
                <p className='text-primary text-custom-20'>+98 928 82 929</p>
            </div>
            <div>
                <img src="" alt="" />
                <p className='text-primary text-custom-20'>xyz@company.com</p>
            </div>
            <button
                className="flex-[2] px-1 text-custom-20 py-4 bg-custom-gradient shadow-double-inset text-white font-semibold custom-border-radius"
            >
                Get a Quote
            </button>
        </section>
    )
}

export default CTA