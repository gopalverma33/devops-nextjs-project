import "./globals.css";

export const metadata = {
  title: "Chocolate Boutique",
  description: "Delicious Cakes & Cafe Treats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-brand-cream text-brand-brown">
        {children}
      </body>
    </html>
  );
}