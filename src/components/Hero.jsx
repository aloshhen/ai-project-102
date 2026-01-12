import React from 'react'
import { Zap, Coffee, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 bg-[#0D0E12]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-4 bg-[#16181D] px-4 py-2 rounded-full">
            <Zap className="w-5 h-5 text-[#5E6AD2] mr-2" />
            <span className="text-sm text-[#B4B4B9]">Next-gen Coffee Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#5E6AD2] to-[#8B95E8] bg-clip-text text-transparent">
            Revolutionize Your Coffee Experience
          </h1>
          
          <p className="text-xl text-[#B4B4B9] mb-8 max-w-2xl mx-auto">
            Discover a smarter, more connected way to enjoy your daily brew with our innovative coffee ecosystem.
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[#5E6AD2] text-white px-6 py-3 rounded-lg hover:bg-[#7580DD] transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[#16181D] text-[#B4B4B9] px-6 py-3 rounded-lg hover:bg-[#1C1F26] transition-colors"
            >
              <Coffee className="mr-2 w-5 h-5 text-[#5E6AD2]" />
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero