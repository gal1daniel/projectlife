import React from 'react'
import Spline from '@splinetool/react-spline/next';

const Zephyr = () => {
  return (
    <section className="bg-opacity-30 py-5 sm:py-10 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="order-1 lg:order-2">
            <Spline
              scene="https://prod.spline.design/hmrIfVg6BNKFUJZx/scene.splinecode" 
            />
          </div>
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl font-thin text-white sm:text-4xl xl:text-6xl">Zephyr-5T7</h1>
            <p className="mt-4 text-base font-extralight text-zinc-500 sm:text-xl">Zephyr-5T7 is known for its diverse and resilient ecosystem, adapted to the planet's unique day-night cycle and strong winds. The flora and fauna have evolved various strategies to thrive in the planet's dynamic environment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Zephyr