import React from 'react'
import Verdant from "@/components/Verdant";
import Aqua from "@/components/Aqua";
import TerraNova from "@/components/TerraNova";
import Zephyr from "@/components/Zephyr";
import { StarsBackground } from "@/components/ui/stars-background";

const Planets = () => {
  return (
    <section>
      <div className='relative z-10'>
        <Verdant />
        <Aqua />
        <TerraNova />
        <Zephyr />
      </div>
        <StarsBackground />
    </section>
  )
}

export default Planets