import React from 'react'
import { Coffee, Twitter, Instagram, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0D0E12] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8 text-[#5E6AD2]" />
              <span className="text-xl font-bold">CoffeeEco</span>
            </div>
            <p className="text-[#B4B4B9]">Revolutionizing coffee through intelligent technology and personalized experiences.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#FAFAFA] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#B4B4B9] hover:text-[#5E6AD2]">Features</a></li>
              <li><a href="#" className="text-[#B4B4B9] hover:text-[#5E6AD2]">About</a></li>
              <li><a href="#" className="text-[#B4B4B9] hover:text-[#5E6AD2]">Pricing</a></li>
              <li><a href="#" className="text-[#B4B4B9] hover:text-[#5E6AD2]">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#FAFAFA] mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#B4B4B9] hover:text-[#5E6AD2]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#B4B4B9] hover:text-[#5E6AD2]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#B4B4B9] hover:text-[#5E6AD2]">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-[#B4B4B9] text-sm mt-4">© 2024 CoffeeEco. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer