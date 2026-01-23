import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1a1d23] text-white md:px-20 px-6 ">
      {/* Top Section */}
      <div className="w-full py-14 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FA7E16] to-[#FE9619] rounded-md flex items-center justify-center">
              <span className="text-white md:text-2xl text-xl font-normal">B</span>
            </div>
            <h1 className="md:text-2xl text-xl font-medium uppercase">BuildCore</h1>
          </div>

          <p className="text-[#8F96A3] md:text-base text-sm leading-relaxed">
            Building tomorrow&apos;s landmarks today. <br />
            Your trusted partner in construction excellence since 1999.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="md:text-xl text-lg font-normal tracking-wider mb-4 uppercase">
            Quick Links
          </h2>
          <ul className="space-y-2 text-[#8F96A3] md:text-base text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="md:text-xl text-lg font-normal tracking-wider mb-4 uppercase">
            Services
          </h2>
          <ul className="space-y-2 text-[#8F96A3] md:text-base text-sm">
            <li>Commercial Construction</li>
            <li>Residential Projects</li>
            <li>Industrial Facilities</li>
            <li>Renovation</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="md:text-xl text-lg font-normal tracking-wider mb-4 uppercase">
            Newsletter
          </h2>
          <p className="text-[#8F96A3] md:text-base text-sm mb-4">
            Subscribe to get updates on our latest projects and industry insights.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-[#272c35] text-sm text-white placeholder:text-[#8F96A3] focus:outline-none"
            />
            <button className="px-5 py-2 bg-gradient-to-r from-[#FA7E16] to-[#FE9619] rounded-md text-base font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>

      <hr className="text-[#8F96A3] w-full"/>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-[#8F96A3] md:text-[13px] text-[8px] py-4 gap-2">
  <div className="md:text-start text-center">
    © {currentYear} BuildCore Construction. All rights reserved.
  </div>

  <div className="text-center md:text-end">
    UI/UX Design:{" "}
    <a
      href="https://mdmahfuz.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FA7E16] hover:underline"
    >
      Mahfuzur Rahman
    </a>{" "}
    (Figma) · Frontend Development:{" "}
    <a
      href="https://ashikapi.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FA7E16] hover:underline"
    >
      Ashik API
    </a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
