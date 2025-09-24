import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function SaebPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Sistema de Avaliação da Educação Básica
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              <span className="text-primary">SAEB</span> e Nossa Excelência
              Educacional
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Conheça como o Sistema de Avaliação da Educação Básica impacta
              nossa metodologia de ensino e como preparamos nossos alunos para
              os desafios educacionais e profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* What is SAEB */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O que é o SAEB?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                O Sistema de Avaliação da Educação Básica (SAEB) é um conjunto
                de avaliações externas em larga escala que permite ao Instituto
                Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira
                (INEP) realizar um diagnóstico da educação básica brasileira.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Avaliação Nacional</h3>
                    <p className="text-muted-foreground">
                      Diagnóstico da qualidade da educação básica no Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Indicadores Educacionais
                    </h3>
                    <p className="text-muted-foreground">
                      Produção de indicadores sobre fatores que incidem na
                      qualidade do ensino
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Políticas Públicas</h3>
                    <p className="text-muted-foreground">
                      Subsídio para formulação de políticas públicas
                      educacionais
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Língua Portuguesa</h3>
                    <p className="text-sm text-muted-foreground">
                      Leitura e interpretação
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Matemática</h3>
                    <p className="text-sm text-muted-foreground">
                      Resolução de problemas
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Ensino Médio</h3>
                    <p className="text-sm text-muted-foreground">
                      3ª série avaliada
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">IDEB</h3>
                    <p className="text-sm text-muted-foreground">
                      Índice de qualidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa Abordagem Baseada no SAEB
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Utilizamos os parâmetros do SAEB para fortalecer a base
              educacional de nossos alunos, garantindo uma formação profissional
              sólida e completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Reforço em Língua Portuguesa
                </h3>
                <p className="text-muted-foreground">
                  Desenvolvemos habilidades de leitura, interpretação e
                  comunicação escrita, fundamentais para qualquer área
                  profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Raciocínio Matemático
                </h3>
                <p className="text-muted-foreground">
                  Fortalecemos o raciocínio lógico e matemático, essencial para
                  resolução de problemas no ambiente profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Avaliação Contínua
                </h3>
                <p className="text-muted-foreground">
                  Implementamos sistema de avaliação contínua baseado nas
                  metodologias do SAEB para acompanhar o progresso dos alunos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Competências Básicas
                </h3>
                <p className="text-muted-foreground">
                  Garantimos que todos os alunos dominem as competências básicas
                  antes de avançar para conteúdos técnicos específicos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Preparação Integral
                </h3>
                <p className="text-muted-foreground">
                  Preparamos nossos alunos não apenas tecnicamente, mas também
                  com as habilidades fundamentais avaliadas pelo SAEB.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Qualidade Educacional
                </h3>
                <p className="text-muted-foreground">
                  Mantemos padrões elevados de qualidade educacional, alinhados
                  com os indicadores nacionais de excelência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Resultados
            </h2>
            <p className="text-xl text-muted-foreground">
              Os reflexos da nossa metodologia baseada em excelência educacional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Taxa de Aprovação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Empregabilidade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                4.8
              </div>
              <div className="text-muted-foreground">Avaliação dos Alunos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Educação de Qualidade com Base Sólida
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Venha fazer parte de uma instituição que valoriza tanto a formação
            técnica quanto as competências fundamentais da educação básica.
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
              Fale Conosco
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
