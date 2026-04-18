import Hero from "@/components/Hero";
import CakeGallery from "@/components/CakeGallery";
import MenuPreview from "@/components/MenuPreview";
import Footer from "@/components/Footer";
import { getCakes, getMenu } from "@/lib/api";

export default async function Home() {
  // Fetch data cleanly from our api layer
  // In a real application, these might be actual fetch calls (or DB queries)
  const [cakesData, menuData] = await Promise.all([
    getCakes(),
    getMenu()
  ]);

  return (
    <main className="flex flex-col min-h-screen font-sans bg-brand-cream">
      {/* Premium Hero component overlay */}
      <Hero />

      {/* Interactive / Client Filtered Cake Gallery */}
      <div id="gallery">
        <CakeGallery initialCakes={cakesData} />
      </div>

      {/* Menu Options Section */}
      <MenuPreview menuData={menuData} />

      {/* Footer component */}
      <Footer />
    </main>
  );
}
