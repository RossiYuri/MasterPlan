/**
 * Footer Component - Technical Corporate Design
 * 
 * Design Philosophy:
 * - Dark footer with technical feel
 * - Clear information hierarchy
 * - Contact information and links
 * - Copyright and legal
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  NAVIGATION_ITEMS,
} from "@/../../shared/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/image-removebg-preview_ec2df7b8.png"
                  alt="Masterplan Logo"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Engenharia multidisciplinar com foco em performance, segurança e
              conformidade industrial.
            </p>
            <p className="text-xs text-slate-500">
              Especialistas em óleo, gás e energia
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-poppins font-bold text-sm mb-4 text-white">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-bold text-sm mb-4 text-white">
              Serviços
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Levantamento de Campo</li>
              <li>Projetos Técnicos</li>
              <li>Assistência Técnica</li>
              <li>Comissionamento</li>
              <li>Adequação ANP</li>
              <li>Instalação Elétrica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-bold text-sm mb-4 text-white">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Jbm@masterplanrj.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors block"
              >
                <Mail className="w-4 h-4" />
                <span>Jbm@masterplanrj.com.br</span>
              </a>
              <a
                href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors block"
              >
                <Phone className="w-4 h-4" />
                <span>+55 (21) 96401-3871</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Niterói, RJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © {currentYear} {COMPANY_NAME}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <Link href="/politica-de-privacidade" className="hover:text-blue-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-blue-400 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
