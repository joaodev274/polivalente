import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Entre em <span className="text-primary">Contato</span> Conosco
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Estamos aqui para esclarecer suas dúvidas e ajudá-lo a dar o
              próximo passo em sua carreira profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-muted-foreground">(11) 3456-7890</p>
                <p className="text-muted-foreground">(11) 99999-8888</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-muted-foreground">
                  contato@institutoprofissional.com.br
                </p>
                <p className="text-muted-foreground">
                  matriculas@institutoprofissional.com.br
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Endereço</h3>
                <p className="text-muted-foreground">Rua da Educação, 123</p>
                <p className="text-muted-foreground">Centro - São Paulo, SP</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Horário</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 22h
                </p>
                <p className="text-muted-foreground">Sábado: 8h às 17h</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Preencha o formulário ao lado ou entre em contato através dos
                nossos canais. Nossa equipe está pronta para atendê-lo e
                esclarecer todas as suas dúvidas sobre nossos cursos e processos
                de matrícula.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Departamentos</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Secretaria:</strong> (11) 3456-7890
                    </p>
                    <p>
                      <strong>Coordenação Acadêmica:</strong> (11) 3456-7891
                    </p>
                    <p>
                      <strong>Financeiro:</strong> (11) 3456-7892
                    </p>
                    <p>
                      <strong>Suporte ao Aluno:</strong> (11) 3456-7893
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">
                  Envie sua Mensagem
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Curso de Interesse
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                        <option>Selecione um curso</option>
                        <option>Desenvolvimento Web</option>
                        <option>Design Gráfico</option>
                        <option>Marketing Digital</option>
                        <option>Administração</option>
                        <option>Enfermagem</option>
                        <option>Mecânica Automotiva</option>
                        <option>Outros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Selecione o assunto</option>
                      <option>Informações sobre cursos</option>
                      <option>Processo de matrícula</option>
                      <option>Valores e formas de pagamento</option>
                      <option>Horários e turmas</option>
                      <option>Certificação</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="Descreva sua dúvida ou solicitação..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-muted-foreground"
                    >
                      Desejo receber informações sobre novos cursos e promoções
                    </label>
                  </div>

                  <Button className="w-full" size="lg">
                    Enviar Mensagem
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-lg text-muted-foreground">
              Venha nos visitar! Estamos localizados no centro de São Paulo, com
              fácil acesso por transporte público.
            </p>
          </div>

          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold">Mapa Interativo</p>
              <p className="text-muted-foreground">
                Rua da Educação, 123 - Centro, São Paulo - SP
              </p>
            </div>
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
                <span className="text-lg font-bold">
                  Instituto Profissional
                </span>
              </div>
              <p className="text-muted-foreground">
                Transformando vidas através da educação profissional de
                qualidade.
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
              <h4 className="font-semibold mb-4">Cursos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Desenvolvimento Web</li>
                <li>Design Gráfico</li>
                <li>Marketing Digital</li>
                <li>Administração</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>(11) 3456-7890</li>
                <li>contato@institutoprofissional.com.br</li>
                <li>
                  Rua da Educação, 123
                  <br />
                  Centro - São Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2025 Instituto Profissional Avançado. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
