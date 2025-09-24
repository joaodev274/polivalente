import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BookOpen,
  Heart,
  Lightbulb,
  Star,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              15+ Anos Transformando Vidas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Conheça Nossa <span className="text-primary">História</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Desde 2010, o Instituto Profissional Avançado tem sido referência
              em educação profissional, formando milhares de profissionais
              qualificados e transformando vidas através do conhecimento.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa Jornada
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fundado em 2010 por um grupo de educadores e profissionais
                experientes, o Instituto Profissional Avançado nasceu da
                necessidade de oferecer educação profissional de qualidade,
                alinhada com as demandas reais do mercado de trabalho.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Ao longo dos anos, expandimos nossa oferta de cursos,
                modernizamos nossa infraestrutura e desenvolvemos parcerias
                estratégicas com empresas líderes de mercado, sempre mantendo
                nosso compromisso com a excelência educacional.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    2.500+
                  </div>
                  <div className="text-muted-foreground">Alunos Formados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    95%
                  </div>
                  <div className="text-muted-foreground">
                    Taxa de Empregabilidade
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <div className="text-muted-foreground">Cursos Oferecidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground">
                    Empresas Parceiras
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-classroom-students-learning-technology.jpg"
                alt="História do Instituto Profissional"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que guiam nossa missão de transformar vidas através
              da educação profissional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Formar profissionais qualificados e competentes, oferecendo
                  educação de excelência que conecta teoria e prática,
                  preparando nossos alunos para os desafios do mercado de
                  trabalho.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a principal instituição de educação
                  profissional do país, referência em inovação pedagógica e
                  inserção profissional de nossos alunos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Excelência, inovação, ética, responsabilidade social e
                  compromisso com o desenvolvimento pessoal e profissional de
                  cada aluno.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profissionais experientes e apaixonados por educação, dedicados ao
              sucesso de cada aluno
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Carlos Silva</h3>
                <p className="text-primary mb-3">Diretor Geral</p>
                <p className="text-muted-foreground text-sm">
                  PhD em Educação, 20+ anos de experiência em gestão educacional
                  e desenvolvimento de currículos profissionalizantes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Profa. Ana Santos
                </h3>
                <p className="text-primary mb-3">Coordenadora Acadêmica</p>
                <p className="text-muted-foreground text-sm">
                  Mestre em Pedagogia, especialista em metodologias ativas de
                  ensino e avaliação educacional.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Eng. Roberto Lima
                </h3>
                <p className="text-primary mb-3">Coordenador Técnico</p>
                <p className="text-muted-foreground text-sm">
                  Engenheiro de Software, 15+ anos no mercado de TI,
                  especialista em desenvolvimento web e mobile.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Reconhecimentos
            </h2>
            <p className="text-xl text-muted-foreground">
              Prêmios e certificações que atestam nossa qualidade educacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Certificação MEC</h3>
              <p className="text-muted-foreground text-sm">
                Instituição credenciada pelo Ministério da Educação
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Prêmio Excelência</h3>
              <p className="text-muted-foreground text-sm">
                Melhor Instituição de Ensino Profissional 2023
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">ISO 9001</h3>
              <p className="text-muted-foreground text-sm">
                Certificação de qualidade em gestão educacional
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Selo ABMES</h3>
              <p className="text-muted-foreground text-sm">
                Associação Brasileira de Mantenedoras de Ensino Superior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa Infraestrutura
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ambientes modernos e equipamentos de última geração para
              proporcionar a melhor experiência de aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Salas de Aula Modernas</h3>
                <p className="text-muted-foreground">
                  Ambientes climatizados com projetores, sistema de som e
                  mobiliário ergonômico.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Laboratórios Especializados
                </h3>
                <p className="text-muted-foreground">
                  Labs de informática, eletrônica, enfermagem e mecânica com
                  equipamentos profissionais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Biblioteca Digital</h3>
                <p className="text-muted-foreground">
                  Acervo digital com milhares de livros, artigos e recursos
                  multimídia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Auditório</h3>
                <p className="text-muted-foreground">
                  Espaço para 200 pessoas com sistema audiovisual completo para
                  eventos e palestras.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Área de Convivência</h3>
                <p className="text-muted-foreground">
                  Espaços para descanso, estudo em grupo e networking entre
                  alunos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Estacionamento</h3>
                <p className="text-muted-foreground">
                  Estacionamento gratuito para alunos e visitantes com segurança
                  24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já transformaram suas vidas
            conosco. Sua jornada de sucesso começa aqui!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Conheça Nossos Cursos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Agende uma Visita
            </Button>
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
