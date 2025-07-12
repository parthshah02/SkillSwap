'use client'

import { SplineScene } from "./spline"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SplineDemo() {
  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12">
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Skill Exchange
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Experience the future of learning with our interactive 3D platform. Connect with experts, share knowledge, and grow together in a dynamic virtual environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-full">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
