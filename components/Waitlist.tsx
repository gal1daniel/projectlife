"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const Waitlist = () => {
    const placeholders = [
        "Are you ready?",
        "A new beginning..",
        "Beyond the stars..",
        "Ready to start over?",
        "Earth 2.0",
      ];
     
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };

  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-white font-thin text-center font-sans">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-zinc-500 font-extralight max-w-lg mx-auto my-2 text-base text-center relative z-10">
        Ready for a fresh start? Join the waitlist for Life - your gateway to discovering the perfect place for your new beginning. Be among the first to reinvent your world. Your ideal location is waiting; all you need to do is sign up.
        </p>
        <div className="mt-4">
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Waitlist
