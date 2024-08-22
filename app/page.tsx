import Hero from "@/components/Hero";
import Planets from "@/components/Planets";
import NavBar from "@/components/NavBar";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main>
      <div className="relative z-20">
      <NavBar />
      <Hero />
      </div>
      <div className="relative z-10">
      <Planets />
      </div>
      <Waitlist />
    </main>
  );
}
