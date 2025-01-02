"use client";

import { Button } from "@/components/ui/button";
import { BentoGrid } from "@/components/BentoGrid";
import { BackgroundShapes } from "@/components/ui/background-shapes";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white">
      {/* Background with shapes */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-[#1E1E1E]" />
        <BackgroundShapes className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613918431703-aa2b56f8d893?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#B0B0B0] bg-clip-text text-transparent">
              Elevate Your Badminton League with Versus
            </h1>
            <p className="text-xl md:text-2xl text-[#B0B0B0] mb-8 max-w-3xl mx-auto">
              Visualize performance instantly. Validate player progress.
              Versatile Elo rankings.
            </p>
            <div className="flex gap-4 justify-center">
              {/* <Button
                size="lg"
                className="bg-[#FF8C00] hover:bg-[#FFA726] text-white px-8"
              >
                Coming Soon
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white"
              >
                Coming Soon
              </Button>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="relative py-4">
          <BentoGrid />
        </section>

        {/* Testimonial Section */}
        <section className="relative py-24">
          <div className="container mx-auto px-4 text-center relative z-10">
            <blockquote className="text-2xl italic text-[#F5F5F5] mb-4">
              "This is such a fun way to play our weekly leagues!"
            </blockquote>
            <footer className="text-[#B0B0B0]">- A Happy Moderator</footer>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-[#1E1E1E] py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[#B0B0B0] mb-8 md:mb-0">
                © 2025 Versus. All rights reserved.
              </div>
              <div className="flex gap-8">
                {/* <a href="#" className="text-[#B0B0B0] hover:text-[#FF8C00]">
                  Privacy Policy
                </a>
                <a href="#" className="text-[#B0B0B0] hover:text-[#FF8C00]">
                  Terms of Service
                </a> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
