import type { Metadata } from "next";
import { Martian_Mono } from 'next/font/google';
import './globals.css';

// Configure the font with maximum weight for bold text
const martianMono = Martian_Mono({ 
  subsets: ['latin'],
  weight: ['700'], // Using the maximum available weight (700) for boldest text
  variable: '--font-martian-mono',
});

export const metadata: Metadata = {
  title: "Octopuss AI",
  description: "Building a personal AI assistant server where the LLM runs locally on a rasbaripi with all data stored locally for complete privacy on rasbaripi. You can interact with your personal server via text, image, voice etc. making it feel like your own private AI that's always available and secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={martianMono.variable}>
      <body className="font-mono font-bold antialiased bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}