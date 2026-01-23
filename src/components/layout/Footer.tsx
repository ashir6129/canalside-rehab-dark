import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001a3e] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div id="etl-logo-placeholder-footer" className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 text-[8px] text-white/30 text-center p-1">
              ETL LOGO
            </div>
            <h3 className="text-2xl font-serif font-bold">Canalside House<span className="text-[var(--accent)]">.</span></h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            A service by ETL Care - Providing a safe, structured, and therapeutic environment where individuals in early recovery can build foundations for sustainable, long-term sobriety.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-[var(--accent)] transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-[var(--accent)] transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-[var(--accent)] transition-colors"><Linkedin size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[var(--accent)]">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/programme" className="text-gray-400 hover:text-white transition-colors">Our Programme</Link></li>
            <li><Link href="/referral" className="text-gray-400 hover:text-white transition-colors">Professional Referrals</Link></li>
            <li><Link href="/families" className="text-gray-400 hover:text-white transition-colors">For Families</Link></li>
            <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Resource Centre</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[var(--accent)]">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 text-[var(--accent)]" size={20} />
              <span className="text-gray-400">Canalside Recovery Center,<br />London, United Kingdom</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[var(--accent)]" size={20} />
              <span className="text-gray-400">+44 123 456 7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[var(--accent)]" size={20} />
              <span className="text-gray-400">info@canalside-recovery.co.uk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} ETL Care - Canalside House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;