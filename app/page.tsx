"use client";

import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BookOpen,
  Code,
  Cpu,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py</a>-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {"✨ Educação Fundamental 2 e Ensino Médio de Excelência"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Prepare-se para o <span className="text-primary">futuro</span> com
              educação inovadora
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Ensino Fundamental 2 e Ensino Médio com foco em tecnologia,
              robótica e informática. Formamos estudantes preparados para os
              desafios do século XXI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={() => {
                  window.location.href = "../educacao";
                }}
              >
                Conheça Nossos Cursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                12+
              </div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                850+
              </div>
              <div className="text-muted-foreground">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Aprovação ENEM</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-muted-foreground">
                Laboratórios Equipados
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ensino" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Níveis de Ensino
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Educação completa do 6º ano ao 3º ano do Ensino Médio com foco em
              tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Ensino Fundamental 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">6º ao 9º ano</Badge>
                  <Badge variant="outline">Fundamental 2</Badge>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Ensino Fundamental 2
                </h3>
                <p className="text-muted-foreground mb-6">
                  Base sólida em todas as disciplinas com introdução à
                  tecnologia e pensamento computacional. Preparação para o
                  Ensino Médio com metodologias ativas e projetos
                  interdisciplinares.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Matemática e Ciências com laboratórios</li>
                  <li>• Língua Portuguesa e Literatura</li>
                  <li>• História, Geografia e Filosofia</li>
                  <li>• Inglês e Espanhol</li>
                  <li>• Introdução à Programação</li>
                  <li>• Educação Física e Artes</li>
                </ul>
                <Button className="w-full">
                  Saiba Mais sobre o Fundamental 2
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Ensino Médio */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Award className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">1º ao 3º ano</Badge>
                  <Badge variant="outline">Ensino Médio</Badge>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ensino Médio</h3>
                <p className="text-muted-foreground mb-6">
                  Preparação completa para ENEM e vestibulares com foco em
                  tecnologia. Cursos técnicos integrados em Informática e
                  projetos de Robótica.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Preparação intensiva para ENEM</li>
                  <li>• Curso Técnico em Informática</li>
                  <li>• Laboratório de Robótica</li>
                  <li>• Programação e Desenvolvimento</li>
                  <li>• Projetos de Iniciação Científica</li>
                  <li>• Orientação Vocacional</li>
                </ul>
                <Button className="w-full">
                  Saiba Mais sobre o Ensino Médio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cursos-especiais" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cursos Especiais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Programas diferenciados que preparam nossos alunos para o futuro
              tecnológico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Robótica */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Cpu className="w-12 h-12 text-primary" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">6º ano ao 3º EM</Badge>
                  <Badge variant="outline">Extracurricular</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Robótica Educacional
                </h3>
                <p className="text-muted-foreground mb-4">
                  Desenvolvimento de projetos com Arduino, sensores e
                  programação. Participação em competições nacionais de
                  robótica.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Programação em C++ e Python</li>
                  <li>• Montagem de circuitos</li>
                  <li>• Projetos com Arduino e Raspberry Pi</li>
                  <li>• Competições de robótica</li>
                </ul>
                <Button className="w-full">
                  Inscrever-se
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Informática para Ensino Médio */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Code className="w-12 h-12 text-primary" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Ensino Médio</Badge>
                  <Badge variant="outline">Técnico Integrado</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Curso Técnico em Informática
                </h3>
                <p className="text-muted-foreground mb-4">
                  Formação técnica completa em desenvolvimento de sistemas,
                  redes de computadores e suporte técnico.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Programação Web (HTML, CSS, JavaScript)</li>
                  <li>• Banco de Dados e SQL</li>
                  <li>• Redes de Computadores</li>
                  <li>• Manutenção de Hardware</li>
                </ul>
                <Button className="w-full">
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Laboratórios */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Microscope className="w-12 h-12 text-primary" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Todos os níveis</Badge>
                  <Badge variant="outline">Infraestrutura</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Laboratórios Especializados
                </h3>
                <p className="text-muted-foreground mb-4">
                  Espaços equipados com tecnologia de ponta para aprendizado
                  prático e desenvolvimento de projetos.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  <li>• Lab. de Informática (40 computadores)</li>
                  <li>• Lab. de Robótica e Maker</li>
                  <li>• Lab. de Ciências e Química</li>
                  <li>• Lab. de Física e Matemática</li>
                </ul>
                <Button className="w-full">
                  Conheça os Labs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Educação Inovadora e Tecnológica
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Há mais de 12 anos oferecemos educação de qualidade do Ensino
                Fundamental 2 ao Ensino Médio. Nossa metodologia combina o
                currículo tradicional com tecnologia avançada, preparando
                estudantes para os desafios do futuro.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tecnologia Integrada</h3>
                    <p className="text-muted-foreground">
                      Programação, robótica e informática fazem parte do
                      currículo regular
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Professores Especializados
                    </h3>
                    <p className="text-muted-foreground">
                      Equipe qualificada com formação em tecnologia e pedagogia
                      moderna
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Resultados Comprovados
                    </h3>
                    <p className="text-muted-foreground">
                      98% de aprovação no ENEM e reconhecimento em competições
                      de robótica
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-classroom-students-learning-technology.jpg"
                alt="Estudantes em laboratório de tecnologia"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos alunos e pais dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias de sucesso que nos motivam a continuar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                role: "Mãe de aluno do 8º ano",
                text: "Meu filho desenvolveu muito interesse por tecnologia. Os projetos de robótica são incríveis!",
                rating: 5,
              },
              {
                name: "Carlos Santos",
                role: "Ex-aluno - Engenharia USP",
                text: "O curso técnico em informática me deu uma base sólida. Entrei na universidade muito bem preparado.",
                rating: 5,
              },
              {
                name: "Maria Costa",
                role: "Aluna do 2º ano EM",
                text: "Adoro as aulas de programação! Já desenvolvi meu primeiro aplicativo no laboratório.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prepare seu filho para o futuro!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Matrículas abertas para 2025. Garanta uma vaga na melhor educação
            tecnológica da região. Venha conhecer nossa infraestrutura e
            metodologia inovadora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Agendar Visita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para esclarecer suas dúvidas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-muted-foreground">(11) 3456-7890</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="text-muted-foreground">
                      contato@colegioavancado.com.br
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Endereço</div>
                    <div className="text-muted-foreground">
                      Rua da Tecnologia, 456
                      <br />
                      Centro - São Paulo, SP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">
                  Solicite Informações
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nome do Responsável
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nível de Interesse
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Selecione o nível</option>
                      <option>Ensino Fundamental 2 (6º ao 9º ano)</option>
                      <option>Ensino Médio (1º ao 3º ano)</option>
                      <option>Curso Técnico em Informática</option>
                      <option>Robótica Educacional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="Conte-nos sobre seu interesse..."
                    ></textarea>
                  </div>
                  <Button className="w-full">
                    Enviar Mensagem
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">Colégio Avançado</span>
              </div>
              <p className="text-muted-foreground">
                Educação inovadora do Fundamental 2 ao Ensino Médio com foco em
                tecnologia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Páginas</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href="/educacao"
                    className="hover:text-foreground transition-colors"
                  >
                    Educação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="hover:text-foreground transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saeb"
                    className="hover:text-foreground transition-colors"
                  >
                    SAEB
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="hover:text-foreground transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ensino</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Fundamental 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Ensino Médio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Técnico em Informática
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Robótica
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>(11) 3456-7890</li>
                <li>contato@colegioavancado.com.br</li>
                <li>
                  Rua da Tecnologia, 456
                  <br />
                  Centro - São Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Colégio Avançado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
