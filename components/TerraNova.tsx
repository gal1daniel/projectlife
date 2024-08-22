import React from 'react'
import Spline from '@splinetool/react-spline/next';

const TerraNova = () => {
  return (
    <section className="bg-opacity-30 py-5 sm:py-10 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="order-1 lg:order-1">
            <Spline
              scene="https://prod.spline.design/2nHDro4vDrn7EBcs/scene.splinecode" 
            />
          </div>
          <div className="order-2 lg:order-2">
            <h1 className="text-2xl font-thin text-white sm:text-4xl xl:text-6xl">Terra Nova-2X5</h1>
            <p className="mt-4 text-base font-extralight text-zinc-500 sm:text-xl">Terra Nova-2X5 hosts a rich and diverse ecosystem remarkably similar to Earth's. The planet's slightly higher CO2 levels have resulted in more abundant plant life, with forests and jungles covering a larger percentage of the land surface compared to Earth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TerraNova