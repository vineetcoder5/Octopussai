'use client';

import Stars from '@/components/Stars';
import Image from 'next/image';

export default function Home() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vineetgupta3012@gmail.com', '_blank');
  };

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <Stars />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-4">
        {/* Logo */}
        <div className="w-full text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.jpg"
              alt="Octopuss AI Logo"
              width={140}
              height={140}
              className="rounded-full border-2 border-cyan-400/20 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/20"
              priority
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Octopuss AI
            </h1>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-2xl text-center space-y-8 mb-12">
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-bold max-w-3xl mx-auto">
            We are building a personal AI assistant server where the LLM runs locally on a rasbaripi with all data stored locally for complete privacy. You can interact with your personal server via text, image, voice etc. making it feel like your own private AI that&apos;s always available and secure.
          </p>
        </div>
        
        {/* Connect Button */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vineetgupta3012@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleEmailClick}
          className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Connect With Us
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>
    </main>
  );
}