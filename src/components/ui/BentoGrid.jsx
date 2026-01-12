import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils'

export const BentoGrid = ({ children, className }) => (
  <div className={cn(
    "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
    className
  )}>
    {children}
  </div>
)

export const BentoGridItem = ({ title, description, header, icon, className }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={cn(
      "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200",
      "shadow-input dark:shadow-none p-4 dark:bg-[#1C1F26] dark:border-white/[0.2]",
      "bg-[#16181D] border border-transparent justify-between flex flex-col space-y-4",
      className
    )}
  >
    {header}
    <div className="group-hover/bento:translate-x-2 transition duration-200">
      {icon}
      <div className="font-sans font-bold text-[#FAFAFA] mb-2 mt-2">
        {title}
      </div>
      <div className="font-sans font-normal text-[#B4B4B9] text-xs">
        {description}
      </div>
    </div>
  </motion.div>
)