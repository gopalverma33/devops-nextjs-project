export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-16 pb-8 px-8 border-t-4 border-brand-accent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
        <div>
          <h2 className="font-playfair text-3xl font-bold mb-4 text-white">Chocolate Boutique</h2>
          <p className="text-brand-cream/80 leading-relaxed font-light">
            Crafting premium desserts and unforgettable experiences through artisanal baking techniques and the finest imported chocolates.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-brand-cream/80">
          <h3 className="font-semibold text-white tracking-widest uppercase mb-4 text-sm">Visit Us</h3>
          <p className="mb-1 font-light">123 Bakery Lane</p>
          <p className="mb-4 font-light">Sweet City, SC 12345</p>
          <p className="font-light">Mon - Sat: 7am - 8pm</p>
          <p className="font-light">Sunday: 8am - 4pm</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-white tracking-widest uppercase mb-4 text-sm">Connect</h3>
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-brand-cream hover:text-brand-accent transition-colors font-light">Instagram</a>
            <a href="#" className="text-brand-cream hover:text-brand-accent transition-colors font-light">Facebook</a>
            <a href="#" className="text-brand-cream hover:text-brand-accent transition-colors font-light">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-light text-brand-cream/40 border-t border-brand-cream/10 pt-8 mt-4">
        © {new Date().getFullYear()} Chocolate Boutique. All rights reserved.
      </div>
    </footer>
  );
}
