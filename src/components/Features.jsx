import React from 'react'
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid'
import { Zap, Coffee, Server, Globe } from 'lucide-react'

const Features = () => {
  return (
    <div className="py-24 bg-[#16181D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#5E6AD2] to-[#8B95E8] bg-clip-text text-transparent">
            Innovative Coffee Features
          </h2>
          <p className="text-xl text-[#B4B4B9] max-w-2xl mx-auto">
            Experience coffee like never before with our cutting-edge technology
          </p>
        </div>
        
        <BentoGrid>
          <BentoGridItem
            title="Smart Brewing"
            description="AI-powered brewing recommendations tailored to your taste"
            icon={<Zap className="w-8 h-8 text-[#5E6AD2]" />}
          />
          <BentoGridItem
            title="Global Sourcing"
            description="Direct trade connections with sustainable coffee farmers"
            icon={<Globe className="w-8 h-8 text-[#5E6AD2]" />}
          />
          <BentoGridItem
            title="Cloud Connectivity"
            description="Track and control your brewing process from anywhere"
            icon={<Server className="w-8 h-8 text-[#5E6AD2]" />}
          />
          <BentoGridItem
            title="Personalized Roasting"
            description="Custom roasting profiles based on your preferences"
            icon={<Coffee className="w-8 h-8 text-[#5E6AD2]" />}
          />
        </BentoGrid>
      </div>
    </div>
  )
}

export default Features