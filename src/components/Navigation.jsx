import React from 'react'
import { Coffee, Menu } from 'lucide-react'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#16181D]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="text-[#5E6AD2] w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">CoffeeEco</span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-[#B4B4B9] hover:text-[#5E6AD2] transition-colors">
            Features
          </a>
          <a href="#about" className="text-[#B4B4B9] hover:text-[#5E6AD2] transition-colors">
            About
          </a>
          <button className="bg-[#5E6AD2] text-white px-4 py-2 rounded-lg hover:bg-[#7580DD] transition-colors">
            Get Started
          </button>
        </div>
        
        <div className="md:hidden">
          <Menu className="text-[#B4B4B9] w-6 h-6" />
        </div>
      </div>
    </nav>
  )
}

export default Navigation