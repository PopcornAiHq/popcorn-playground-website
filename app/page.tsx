import AppFrame from "./components/AppFrame";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      {/* TODO: Need to show this at some point */}
      {/* <Nav /> */}

      {/* Section 1: Full-screen animated intro */}
      <AppFrame />

      {/* Section 2: Use cases slideshow */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-black/30 text-sm">Slideshow — coming soon</p>
      </section>

      {/* Section 3: Ethos */}
      <section className="min-h-screen flex items-center justify-center bg-[#fefabb]">
        <p className="text-black/30 text-sm">Ethos — coming soon</p>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center py-16 bg-black">
        <p className="text-white/30 text-sm">Footer — coming soon</p>
      </footer>
    </>
  );
}
