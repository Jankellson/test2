/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Facebook, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Sākums", href: "#" },
    { name: "Procesi", href: "#procesi" },
    { name: "Pakalpojumi", href: "#pakalpojumi" },
    { name: "Raksti", href: "#raksti" },
    { name: "Kontakti", href: "#kontakti" },
  ];

  const steps = [
    { id: "01", title: "Iepazīšanās", img: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: "02", title: "Analīze", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: "03", title: "Plānošana", img: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: "04", title: "Rezultāts", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600&h=800" },
  ];

  const instagramImages = [
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400&h=400",
  ];

  return (
    <div className="min-h-screen selection:bg-peach selection:text-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-beige/80 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-tight">VITA.</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest hover:text-ink/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="px-6 py-2 border border-ink text-sm uppercase tracking-widest hover:bg-ink hover:text-beige transition-all">
              Pieteikties
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-beige absolute top-full left-0 w-full border-b border-ink/5 p-6 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-t-[100px] rounded-b-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=800&h=1200" 
                  alt="Uztura konsultante" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="md:col-span-7 md:-ml-24 z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-3xl"
              >
                <h1 className="text-5xl md:text-7xl leading-tight mb-6">
                  Sāksim kopā! <br />
                  <span className="italic font-light">Atklāj savu ceļu...</span>
                </h1>
                <p className="text-lg md:text-xl text-ink/80 mb-10 max-w-lg leading-relaxed">
                  Palīdzu sievietēm atrast līdzsvaru starp uzturu, pašsajūtu un ikdienas steigu, izmantojot zinātnē balstītu pieeju.
                </p>
                <button className="px-10 py-4 bg-ink text-beige rounded-full text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform">
                  Sākt pārmaiņas
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-peach/30 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-4xl md:text-5xl mb-8">Mana misija</h2>
                <div className="space-y-6 text-lg text-ink/80 leading-relaxed">
                  <p>
                    Es ticu, ka uzturs nav tikai kalorijas. Tā ir enerģija, garastāvoklis un ilgtermiņa veselība. Mana misija ir izglītot un iedvesmot Tevi pieņemt lēmumus, kas liek Tev justies lieliski katru dienu.
                  </p>
                  <p>
                    Bez stingrām diētām, bez aizliegumiem – tikai apzināta izvēle un mīlestība pret savu ķermeni.
                  </p>
                </div>
                <div className="mt-12 flex items-center space-x-4">
                  <div className="w-12 h-[1px] bg-ink"></div>
                  <span className="font-handwritten text-3xl">Vita Jēkabsone</span>
                </div>
              </motion.div>
              <div className="order-1 md:order-2 relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative z-10 rounded-3xl overflow-hidden shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800&h=600" 
                    alt="Veselīgs uzturs" 
                    className="w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-peach rounded-full -z-10 blur-3xl opacity-50"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white rounded-full -z-10 blur-2xl opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="procesi" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">Kā mēs strādājam</h2>
            <p className="text-ink/60 uppercase tracking-widest text-sm">4 soļi līdz Tavai jaunajai versijai</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors"></div>
                <div className="absolute top-6 left-6 text-white font-serif text-4xl opacity-50">{step.id}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-handwritten text-5xl md:text-7xl drop-shadow-lg">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="pakalpojumi" className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-peach rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl mb-8">Uztura konsultācija</h2>
              <p className="text-xl text-ink/70 mb-12 max-w-2xl mx-auto">
                Individuāls plāns, kas pielāgots Tavam dzīvesveidam, mērķiem un vēlmēm. Sāc savu ceļojumu jau šodien.
              </p>
              <button className="px-12 py-5 bg-ink text-beige rounded-full text-sm uppercase tracking-widest hover:bg-ink/90 transition-all shadow-xl">
                Pieteikties konsultācijai
              </button>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
            <h2 className="text-3xl">Sekot Instagram</h2>
            <a href="#" className="text-sm uppercase tracking-widest border-b border-ink">@vita_uzturs</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
            {instagramImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-square overflow-hidden rounded-xl shadow-md"
              >
                <img 
                  src={img} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontakti" className="bg-white py-16 border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-4xl font-serif mb-8">VITA.</div>
          <div className="flex space-x-8 mb-12">
            <a href="#" className="p-3 bg-beige rounded-full hover:bg-peach transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-beige rounded-full hover:bg-peach transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-beige rounded-full hover:bg-peach transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="text-sm text-ink/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Vita Jēkabsone. Visas tiesības aizsargātas.
          </div>
        </div>
      </footer>
    </div>
  );
}
