import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container p-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Let's Connect Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Let&apos;s Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdEmail className="text-red-500 text-xl" />
                <span className="text-gray-300">yusak.daniwijaya@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-xl" />
                <span className="text-gray-300">+62 821-8638-3311</span>
              </div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-blue-500 text-xl" />
                <span className="text-gray-300">Malang, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Follow Me Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
              Follow Me
            </h3>
            <div className="flex gap-4">
              <Link 
                href="https://github.com/yusak-dani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#181818] hover:bg-[#2a2a2a] rounded-lg p-4 flex flex-col items-center gap-2 transition-colors"
              >
                <FaGithub className="text-white text-2xl" />
                <span className="text-gray-300 text-sm">GitHub</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/yusak-dani-wijaya-479a59325/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#181818] hover:bg-[#2a2a2a] rounded-lg p-4 flex flex-col items-center gap-2 transition-colors"
              >
                <FaLinkedin className="text-blue-500 text-2xl" />
                <span className="text-gray-300 text-sm">LinkedIn</span>
              </Link>
              <Link 
                href="https://www.instagram.com/yusakdan?igsh=djBwNWs5dXMyanoy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#181818] hover:bg-[#2a2a2a] rounded-lg p-4 flex flex-col items-center gap-2 transition-colors"
              >
                <FaInstagram className="text-pink-500 text-2xl" />
                <span className="text-gray-300 text-sm">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-600 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 Yusak Dani. Made using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
