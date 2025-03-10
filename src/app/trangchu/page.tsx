import Image from "next/image";
import Header from "./tieude/page";
import Footer from "./footter/page";
import Sidebar from "./sidebar/page";
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Header */}
      <Header />

      <div className="grid grid-cols-[250px_1fr] flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to My Website11</h2>
          <p className="text-gray-700">This is the main content area where you can add more details.</p>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}