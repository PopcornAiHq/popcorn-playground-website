import AppFrame from "./components/AppFrame";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      {/* Fixed background — visible through all sections */}
      <div
        className="fixed inset-0 -z-10"
        style={{ background: "url('/background.png') center / cover no-repeat" }}
      />

      {/* Section 1: Full-screen animated intro */}
      <AppFrame />

      {/* Section 2: Use cases slideshow */}
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-white text-sm">Use Cases</p>
      </section>

      {/* Section 3: Ethos */}
      <section className="min-h-screen flex items-center justify-center bg-[#FEFABB]/30">
        <p className="text-white text-sm">Chat Ethos</p>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center py-16 bg-black">
        <p className="text-white text-sm">Footer</p>
      </footer>
    </>
  );
}
