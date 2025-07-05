import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      {/* Hype Line */}
      <div className="bg-[#FCA311] text-[#14213D] py-4 text-center text-xl md:text-2xl font-bold tracking-wide">
         Droppers 💛 Docengo — Failed once? 💔 Win twice 💪 with Docengo 🚀
      </div>

      {/* Actual Footer */}
      <footer className="bg-[#14213D] text-white py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#FCA311] mb-4">Docengo</h2>
            <p className="text-sm text-[#E5E5E5]">
            1 Mentor. 5 Students.
Unlimited Clarity. Relentless Mentorship.
From NEET to JEE — we break confusion, build confidence, and deliver results.
Docengo isn’t a platform. It’s your launchpad. 🚀
            </p>
            <a
              href="mailto:info@docengo.com"
              className="inline-block mt-4 text-[#FCA311] hover:underline text-sm"
            >
              info@docengo.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-[#E5E5E5]">
              <li><a href="/about" className="hover:text-[#FCA311]">About Us</a></li>
              <li><a href="/neet" className="hover:text-[#FCA311]">NEET Courses</a></li>
              <li><a href="/jee" className="hover:text-[#FCA311]">JEE Courses</a></li>
              <li><a href="/foundation" className="hover:text-[#FCA311]">Competitive Exams</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex items-center gap-4 text-xl">
              <a href="https://www.instagram.com/docengo1?igsh=cHRubGl6OG04ZWo3" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-[#FCA311]" />
              </a>
              <a href="https://www.linkedin.com/company/docengo-educational-company/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-[#FCA311]" />
              </a>
              <a href="https://www.facebook.com/share/19PEjoUfgx/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-[#FCA311]" />
              </a>
              <a href="https://t.me/docengoeducation" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="hover:text-[#FCA311]" />
              </a>
              <a href="https://wa.me/918882153238" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-[#FCA311]" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-sm text-[#E5E5E5] mb-4">Get updates on courses, sessions, and exclusive tips.</p>
            <a
              href="mailto:info@docengo.com"
              className="inline-block bg-[#FCA311] text-[#14213D] font-bold py-2 px-4 rounded-full hover:bg-[#e08b00] transition"
            >
              Contact Us →
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-[#E5E5E5] border-t border-[#E5E5E5]/20 pt-4">
          © {new Date().getFullYear()} Docengo. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
