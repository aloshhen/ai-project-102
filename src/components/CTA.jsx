import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <div className="py-24 bg-[#16181D]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#5E6AD2] to-[#8B95E8] bg-clip-text text-transparent">
          Ready to Transform Your Coffee Experience?
        </h2>
        
        <p className="text-xl text-[#B4B4B9] max-w-2xl mx-auto mb-8">
          Join our community and unlock a world of personalized, intelligent coffee brewing.
        </p>
        
        <div className="flex justify-center space-x-4">
          <button className="flex items-center bg-[#5E6AD2] text-white px-8 py-4 rounded-lg hover:bg-[#7580DD] transition-colors text-lg">
            Get Started Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>
          
          <button className="flex items-center bg-[#1C1F26] text-[#B4B4B9] px-8 py-4 rounded-lg hover:bg-[#16181D] transition-colors text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA