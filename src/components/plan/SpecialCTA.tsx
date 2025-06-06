import React from 'react'

const SpecialCTA = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 mb-10 relative">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 rounded-xl blur-sm opacity-70 transform -rotate-1"></div> */}
            <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-102 border-2 border-white overflow-hidden mx-4">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-800 opacity-20 rounded-full -ml-6 -mb-6"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div className="text-white text-center md:text-left md:max-w-md">
                        <h3 className="text-2xl font-bold mb-3">Unlock Special Offer</h3>
                        <p className="text-lg font-medium">Book a call with our health advisor & get the Coupon Code</p>
                    </div>


                    <a target='_blank' href="https://calendly.com/bdm-prepcohealthcare/30min" className="w-full md:w-auto">
                        <button className="bg-white text-teal-700 py-4 px-8 rounded-lg font-bold shadow-lg transform transition hover:scale-105 hover:bg-teal-50 w-full md:w-auto text-lg flex items-center justify-center gap-2">
                            <span>Book Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SpecialCTA