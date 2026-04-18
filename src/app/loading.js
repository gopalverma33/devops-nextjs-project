export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-8">
      <div className="w-16 h-16 border-4 border-brand-light border-t-brand-brown rounded-full animate-spin mb-8"></div>
      <h2 className="font-playfair text-3xl font-bold text-brand-brown animate-pulse">
        Baking your experience...
      </h2>
      <p className="text-brand-brown/60 mt-4 max-w-sm text-center">
        Please wait while we prepare our stunning galleries and menus from the kitchen.
      </p>
    </div>
  );
}
