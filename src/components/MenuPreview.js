/**
 * Reusable primitive for rendering menu categories.
 * Extracts the duplicated logic from the main MenuPreview body.
 *
 * @param {Object} props
 * @param {string} props.title - Category Header
 * @param {Array<{name: string, price: string}>} props.items - Array of item objects
 */
function MenuCategory({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <h3 className="text-3xl font-playfair font-bold text-brand-chocolate mb-6 border-b-2 border-brand-brown/10 pb-4">
        {title}
      </h3>
      <ul className="space-y-6 flex flex-col">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-end group">
            <span className="text-xl font-medium text-brand-brown group-hover:text-brand-accent transition-colors">
              {item.name}
            </span>
            <span className="flex-grow border-b border-dashed border-brand-brown/20 mx-4 mb-2"></span>
            <span className="text-lg font-bold text-brand-accent bg-white/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/30">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * MenuPreview section demonstrating rendering structured JSON object arrays.
 * Code has been refactored for readability and component reusability.
 */
export default function MenuPreview({ menuData }) {
  return (
    <section id="menu" className="py-24 px-8 bg-brand-light relative overflow-hidden">
      {/* Decorative overlapping geometric glows ensuring the glassmorphism pops */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-brand-brown/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-brown mb-6 drop-shadow-sm">
          Cafe Menu Preview
        </h2>
        <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg mb-16">
          Pair your decadent desserts with our perfectly crafted beverages and fresh morning pastries.
        </p>
        
        {/* Massive Master Container utilizing deep glass mechanics */}
        <div className="bg-white/20 backdrop-blur-3xl p-6 md:p-12 rounded-[3rem] shadow-2xl border border-white/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left relative z-10">
            <MenuCategory title="Pastries" items={menuData?.Pastries} />
            <MenuCategory title="Beverages" items={menuData?.Beverages} />
          </div>
          <div className="mt-16 text-center relative z-10">
            <button className="bg-white/30 backdrop-blur-lg border-2 border-white text-brand-brown px-10 py-3 rounded-full text-lg font-bold hover:bg-brand-brown hover:text-white transition duration-300 shadow-xl">
              Explore Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
