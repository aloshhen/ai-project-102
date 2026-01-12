import React from 'react'
import { Zap, Coffee, Server } from 'lucide-react'

const About = () => {
  return (
    <div className="py-24 bg-[#0D0E12]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#5E6AD2] to-[#8B95E8] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-[#B4B4B9] max-w-2xl mx-auto">
            Transforming your coffee experience through innovative technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#16181D] p-8 rounded-xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-[#5E6AD2]" />
            <h3 className="text-2xl font-bold mb-4 text-[#FAFAFA]">Smart Selection</h3>
            <p className="text-[#B4B4B9]">AI analyzes your taste profile to recommend perfect coffee blends</p>
          </div>
          
          <div className="bg-[#16181D] p-8 rounded-xl text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-[#5E6AD2]" />
            <h3 className="text-2xl font-bold mb-4 text-[#FAFAFA]">Custom Roasting</h3>
            <p className="text-[#B4B4B9]">Personalized roasting process tailored to your unique preferences</p>
          </div>
          
          <div className="bg-[#16181D] p-8 rounded-xl text-center">
            <Server className="w-12 h-12 mx-auto mb-4 text-[#5E6AD2]" />
            <h3 className="text-2xl font-bold mb-4 text-[#FAFAFA]">Cloud Brewing</h3>
            <p className="text-[#B4B4B9]">Control and monitor your brewing process from anywhere</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About