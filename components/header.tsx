"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Award,
  BookOpen,
  Mail,
  MapPin,
  Menu,
  Phone,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Polivalente
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/educacao"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Educação
            </Link>
            <Link
              href="/sobre"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/saeb"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              SAEB
            </Link>
            <Link
              href="/contato"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </Link>
            <Button
              size="sm"
              onClick={() => {
                window.location.href = "https://wa.me/32999312345";
              }}
            >
              Matricule-se
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Polivalente
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/educacao"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-foreground"
                  >
                    <BookOpen className="w-5 h-5 text-primary" />
                    Educação
                  </Link>
                  <Link
                    href="/sobre"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-foreground"
                  >
                    <Users className="w-5 h-5 text-primary" />
                    Sobre
                  </Link>
                  <Link
                    href="/saeb"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-foreground"
                  >
                    <Award className="w-5 h-5 text-primary" />
                    SAEB
                  </Link>
                  <Link
                    href="/contato"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-foreground"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    Contato
                  </Link>
                </nav>

                <div className="border-t pt-6">
                  <Button
                    className="w-full"
                    onClick={() => {
                      window.location.href = "https://wa.me/32999312345";
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Matricule-se via WhatsApp
                  </Button>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    Contato Rápido
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>(32) 99931-2345</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>contato@polivalente.edu.br</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-primary mt-0.5" />
                      <span>
                        Rua da Educação, 123
                        <br />
                        Centro - Cidade, Estado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
