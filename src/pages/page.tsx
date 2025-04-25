import { Button } from "@/components/common/button/button.component";
import { Card, CardContent } from "@/components/common/card/card.component";
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Cultura Uberlândia
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Sua plataforma digital para descobrir e divulgar atividades culturais,
          turísticas e artísticas da cidade de Uberlândia.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/agenda">Ver Agenda Cultural</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/artistas">Espaço do Artista</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          O que oferecemos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-6">
            <MapPinIcon className="h-12 w-12 text-primary mb-4" />
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-2">Turismo e Cultura</h3>
              <p className="text-muted-foreground mb-4">
                Descubra pontos turísticos, centros culturais e eventos em
                Uberlândia.
              </p>
              <Button asChild variant="link">
                <Link href="/turismo">Explorar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <CalendarIcon className="h-12 w-12 text-primary mb-4" />
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-2">Agenda Cultural</h3>
              <p className="text-muted-foreground mb-4">
                Calendário de eventos atualizados em tempo real para você não
                perder nada.
              </p>
              <Button asChild variant="link">
                <Link href="/agenda">Ver Agenda</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <UsersIcon className="h-12 w-12 text-primary mb-4" />
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-2">Espaço do Artista</h3>
              <p className="text-muted-foreground mb-4">
                Crie seu perfil, divulgue seus eventos e conecte-se com o
                público.
              </p>
              <Button asChild variant="link">
                <Link href="/artistas">Participar</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-muted/50 rounded-lg p-8 my-12">
        <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
        <p className="text-lg mb-4">
          A Plataforma Cultural Uberlândia é um projeto desenvolvido como parte
          do Programa de Inovação e Empreendedorismo, vinculado às atividades de
          extensão universitária previstas na matriz curricular do curso de
          Engenharia de Software.
        </p>
        <p className="text-lg mb-4">
          Nossa missão é centralizar e facilitar o acesso às informações sobre
          eventos culturais e artísticos da cidade, além de oferecer um espaço
          para que artistas independentes possam divulgar seu trabalho.
        </p>
        <p className="text-lg">
          Este projeto está alinhado com os Objetivos de Desenvolvimento
          Sustentável (ODS) da ONU, especialmente os objetivos 4 (Educação de
          Qualidade), 8 (Trabalho Decente e Crescimento Econômico) e 11 (Cidades
          e Comunidades Sustentáveis).
        </p>
      </section>
    </div>
  );
}
