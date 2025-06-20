import Header from "@/components/Header";
import WaveBackground from "@/components/WaveBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden">
      <Header />
      <WaveBackground />
    </main>
  )
}