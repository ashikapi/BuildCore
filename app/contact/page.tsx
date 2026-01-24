import React from 'react'
import InfoCard from './InfoCard';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineCall } from 'react-icons/md';
import { LuMailOpen } from 'react-icons/lu';

export default function ContactUs() {
    return (
        <div className='w-full h-full md:py-10  py-6 flex-1 justify-center items-center bg-[#111317]'>
            <div className='text-center space-y-5 md:px-20 px-6'>
                <h3 className='text-[#FA7A16] text-base font-semibold'>GET IN TOUCH</h3>
                <h1 className='max-w-3xl mx-auto md:text-6xl text-2xl font-normal text-[#FAFAFA]'>START YOUR PROJECT TODAY</h1>
                <p className='text-base text-[#8F96A3] font-normal'>Ready to bring your construction vision to life? Contact us for a free consultation and quote.</p>
            </div>
            <div className='md:flex justify-end items-center gap-48 w-full mt-10'>
                {/* Content */}
                <div className="md:px-20 px-6">
                    {/* Form */}
                    <div className="w-full bg-[#181B21] rounded-xl p-8 shadow-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Full Name" />
                                <Input label="Email Address" />
                                <Input label="Phone Number" />
                                <Input label="Project Type" />
                            </div>

                            <div>
                                <label className="block text-sm text-[#C5CAD3] mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full rounded-md bg-[#262A33] text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FA7A16]"
                                />
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#FA7E16] to-[#FE9619] text-white py-4 rounded-md md:text-2xl text-sm font-medium hover:opacity-90 transition">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                   
                </div>
                 <div className="space-y-6 md:px-0 px-6 mt-10 md:mt-0">
                    <InfoCard title="Visit Us" text={<>123 Construction Avenue <br /> New York, NY 10001</>} icon={<IoLocationOutline />} />
                    <InfoCard title="Call Us" text={<>(123) 456-7890 <br /> (123) 456-7891</>} icon={<MdOutlineCall />} />
                    <InfoCard title="Email Us" text={<>info@buildcore.com <br />projects@buildcore.com</>} icon={<LuMailOpen />} />
                </div>
                </div>

        </div>
    )
}


function Input({ label }: { label: string }) {
    return (
        <div>
            <label className="block text-sm text-[#FAFAFA] font-medium mb-2">{label}</label>
            <input
                type="text"
                className="w-full rounded-md bg-[#272C35] text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FA7E16]"
            />
        </div>
    );
}
