import React from 'react'
import Spline from '@splinetool/react-spline/next';

const Verdant = () => {
  return (
    <section className="bg-opacity-30 py-5 sm:py-10 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="order-1 lg:order-1">
            <Spline
              scene="https://prod.spline.design/NRQ-hV6tz6EoGjbH/scene.splinecode" 
            />
          </div>
          <div className="order-2 lg:order-2">
            <h1 className="text-2xl font-thin text-white sm:text-4xl xl:text-6xl">Verdant-7X3</h1>
            <p className="mt-4 text-base font-extralight text-zinc-500 sm:text-xl">Verdant-7X3 is known for its lush, green ecosystem that covers nearly 85% of its surface. The planet's unique atmospheric composition and slightly stronger magnetic field than Earth's have resulted in the evolution of photosynthetic organisms that utilize a broader spectrum of light, including some ultraviolet wavelengths.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Verdant