import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function EducacaoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Instituto Profissional</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/educacao" className="text-foreground font-medium">
                Educação
              </Link>
              <Link href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </Link>
              <Link href="/saeb" className="text-muted-foreground hover:text-foreground transition-colors">
                SAEB
              </Link>
              <Link href="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
              <Button size="sm">Matricule-se</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Excelência em Educação Profissional
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Nossa Filosofia <span className="text-primary">Educacional</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Conheça nossa abordagem inovadora que combina teoria sólida, prática intensiva e conexão direta com o
              mercado de trabalho para formar profissionais de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Metodologia Inovadora</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa metodologia é baseada em três pilares fundamentais: aprendizado prático, teoria aplicada e
                desenvolvimento de competências socioemocionais. Acreditamos que a educação profissional deve preparar o
                aluno para os desafios reais do mercado.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Aprendizado Baseado em Projetos</h3>
                    <p className="text-muted-foreground">
                      Os alunos trabalham em projetos reais desde o primeiro dia, aplicando imediatamente os
                      conhecimentos adquiridos em situações práticas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Turmas Reduzidas</h3>
                    <p className="text-muted-foreground">
                      Mantemos turmas pequenas para garantir atenção individualizada e acompanhamento personalizado do
                      desenvolvimento de cada aluno.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Avaliação Contínua</h3>
                    <p className="text-muted-foreground">
                      Sistema de avaliação contínua que acompanha o progresso do aluno e identifica pontos de melhoria
                      em tempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-classroom-students-learning-technology.jpg"
                alt="Estudantes em ambiente de aprendizado moderno"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Levels Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Níveis de Ensino</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos educação completa desde o ensino fundamental até cursos profissionalizantes, preparando nossos
              alunos para o futuro com excelência acadêmica.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ensino Fundamental 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Ensino Fundamental 2</h3>
                    <p className="text-muted-foreground">6º ao 9º ano</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Nossa proposta para o ensino fundamental 2 combina o currículo tradicional com metodologias
                  inovadoras, preparando os alunos para os desafios do ensino médio e desenvolvendo competências
                  essenciais para o século XXI.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Metodologia STEAM</h4>
                      <p className="text-sm text-muted-foreground">
                        Integração de Ciências, Tecnologia, Engenharia, Artes e Matemática
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Projetos Interdisciplinares</h4>
                      <p className="text-sm text-muted-foreground">
                        Conexão entre diferentes áreas do conhecimento através de projetos práticos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Tecnologia Educacional</h4>
                      <p className="text-sm text-muted-foreground">
                        Uso de ferramentas digitais para potencializar o aprendizado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Desenvolvimento Socioemocional</h4>
                      <p className="text-sm text-muted-foreground">
                        Foco no desenvolvimento de habilidades sociais e emocionais
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Principais Disciplinas:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <span>• Língua Portuguesa</span>
                    <span>• Matemática</span>
                    <span>• Ciências</span>
                    <span>• História</span>
                    <span>• Geografia</span>
                    <span>• Inglês</span>
                    <span>• Educação Física</span>
                    <span>• Artes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ensino Médio */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Ensino Médio</h3>
                    <p className="text-muted-foreground">1º ao 3º ano</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Nosso ensino médio prepara os estudantes para o ENEM, vestibulares e para o mercado de trabalho,
                  oferecendo uma formação sólida e diversificada com foco no desenvolvimento integral do aluno.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Preparação para ENEM</h4>
                      <p className="text-sm text-muted-foreground">
                        Simulados, redação e revisões intensivas para o exame nacional
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Itinerários Formativos</h4>
                      <p className="text-sm text-muted-foreground">
                        Escolha de áreas de aprofundamento conforme interesse do aluno
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Orientação Vocacional</h4>
                      <p className="text-sm text-muted-foreground">
                        Apoio na escolha da carreira e planejamento do futuro acadêmico
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Projeto de Vida</h4>
                      <p className="text-sm text-muted-foreground">
                        Desenvolvimento de competências para o planejamento pessoal e profissional
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Áreas de Conhecimento:</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                    <span>• Linguagens e suas Tecnologias</span>
                    <span>• Matemática e suas Tecnologias</span>
                    <span>• Ciências da Natureza e suas Tecnologias</span>
                    <span>• Ciências Humanas e Sociais Aplicadas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transition Section */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Transição para Cursos Profissionalizantes</h3>
              <p className="text-muted-foreground mb-6">
                Após concluir o ensino médio, nossos alunos têm acesso direto aos nossos cursos técnicos e
                profissionalizantes, com metodologia integrada e aproveitamento de conhecimentos adquiridos.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Conhecer Cursos Profissionalizantes
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Formação</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos cursos em diversas áreas, sempre alinhados com as demandas do mercado e as tendências
              tecnológicas mais atuais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tecnologia da Informação</h3>
                <p className="text-muted-foreground mb-4">
                  Desenvolvimento web, mobile, análise de sistemas e segurança da informação.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Desenvolvimento Web Full Stack
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Desenvolvimento Mobile
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Análise de Sistemas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Design e Criatividade</h3>
                <p className="text-muted-foreground mb-4">
                  Design gráfico, UI/UX, marketing visual e produção audiovisual.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Design Gráfico Profissional
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Produção Audiovisual
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing e Negócios</h3>
                <p className="text-muted-foreground mb-4">
                  Marketing digital, e-commerce, gestão empresarial e empreendedorismo.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Marketing Digital Avançado
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Gestão de E-commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Empreendedorismo Digital
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Saúde e Bem-estar</h3>
                <p className="text-muted-foreground mb-4">
                  Técnico em enfermagem, cuidados com idosos e primeiros socorros.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Técnico em Enfermagem
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Cuidador de Idosos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Primeiros Socorros
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gestão e Administração</h3>
                <p className="text-muted-foreground mb-4">
                  Administração empresarial, recursos humanos e gestão financeira.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Administração Empresarial
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Gestão de Recursos Humanos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Gestão Financeira
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Técnico Industrial</h3>
                <p className="text-muted-foreground mb-4">
                  Mecânica automotiva, eletrônica industrial e manutenção predial.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Mecânica Automotiva
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Eletrônica Industrial
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Manutenção Predial
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Processo de Aprendizagem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa metodologia é estruturada em etapas que garantem o desenvolvimento progressivo e consistente de cada
              aluno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnóstico Inicial</h3>
              <p className="text-muted-foreground">
                Avaliamos o conhecimento prévio e identificamos as necessidades específicas de cada aluno.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fundamentação Teórica</h3>
              <p className="text-muted-foreground">
                Construção sólida dos conceitos fundamentais através de aulas dinâmicas e interativas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prática Intensiva</h3>
              <p className="text-muted-foreground">
                Aplicação prática dos conhecimentos através de projetos reais e simulações profissionais.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certificação</h3>
              <p className="text-muted-foreground">
                Avaliação final e certificação reconhecida pelo mercado e órgãos competentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Diferenciais da Nossa Educação</h2>
            <p className="text-xl text-muted-foreground">O que nos torna únicos na formação profissional</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Horários Flexíveis</h3>
                <p className="text-muted-foreground">
                  Turmas nos períodos manhã, tarde e noite para se adequar à sua rotina.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Professores Especialistas</h3>
                <p className="text-muted-foreground">
                  Profissionais atuantes no mercado com vasta experiência prática.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Certificação Reconhecida</h3>
                <p className="text-muted-foreground">Diplomas e certificados reconhecidos pelo MEC e pelo mercado.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Suporte ao Aluno</h3>
                <p className="text-muted-foreground">
                  Acompanhamento pedagógico e suporte técnico durante todo o curso.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Conexão com o Mercado</h3>
                <p className="text-muted-foreground">
                  Parcerias com empresas para estágios e oportunidades de emprego.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Material Atualizado</h3>
                <p className="text-muted-foreground">
                  Conteúdo sempre atualizado com as últimas tendências e tecnologias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme sua Carreira com Nossa Educação</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já transformaram suas vidas através da nossa metodologia de ensino
            inovadora e eficaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Ver Cursos Disponíveis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Agendar Visita
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
                <span className="text-lg font-bold">Instituto Profissional</span>
              </div>
              <p className="text-muted-foreground">
                Transformando vidas através da educação profissional de qualidade.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Páginas</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/educacao" className="hover:text-foreground transition-colors">
                    Educação
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-foreground transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/saeb" className="hover:text-foreground transition-colors">
                    SAEB
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-foreground transition-colors">
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
            <p>&copy; 2025 Instituto Profissional Avançado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
