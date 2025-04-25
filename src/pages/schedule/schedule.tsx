import { Button } from "@/components/common/button/button.component";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/common/card/card.component";
import {
  Calendar,
  Filter,
  MapPin,
  Clock,
  Music,
  Theater,
  Film,
} from "lucide-react";
import { useState } from "react";

// Dados simulados de eventos
const eventosSimulados = [
  {
    id: 1,
    titulo: "Festival de Jazz",
    descricao:
      "Festival com apresentações de diversos artistas de jazz locais e nacionais.",
    data: "2025-05-15",
    hora: "19:00",
    local: "Teatro Municipal",
    endereco: "Av. Rondon Pacheco, 7070 - Tibery",
    categoria: "Música",
    imagem: "/jazz-festival.jpg", // Imagem fictícia
  },
  {
    id: 2,
    titulo: "Exposição de Arte Contemporânea",
    descricao: "Mostra de artistas contemporâneos de Uberlândia e região.",
    data: "2025-05-10",
    hora: "10:00",
    local: "Galeria de Arte Municipal",
    endereco: "Praça Clarimundo Carneiro, 67 - Centro",
    categoria: "Exposição",
    imagem: "/exposicao-arte.jpg", // Imagem fictícia
  },
  {
    id: 3,
    titulo: "Teatro: 'A Vida Como Ela É'",
    descricao: "Peça baseada nos contos de Nelson Rodrigues.",
    data: "2025-05-20",
    hora: "20:00",
    local: "Centro Cultural UFU",
    endereco: "Av. João Naves de Ávila, 2121 - Santa Mônica",
    categoria: "Teatro",
    imagem: "/teatro-nelson.jpg", // Imagem fictícia
  },
  {
    id: 4,
    titulo: "Feira Gastronômica",
    descricao: "Evento com diversos food trucks e restaurantes locais.",
    data: "2025-05-25",
    hora: "16:00",
    local: "Parque do Sabiá",
    endereco: "Av. Anselmo Alves dos Santos, 1600 - Santa Mônica",
    categoria: "Gastronomia",
    imagem: "/feira-gastronomica.jpg", // Imagem fictícia
  },
  {
    id: 5,
    titulo: "Festival de Cinema Independente",
    descricao: "Mostra de filmes independentes produzidos em Minas Gerais.",
    data: "2025-06-05",
    hora: "18:00",
    local: "Cine UFU",
    endereco: "Av. João Naves de Ávila, 2121 - Santa Mônica",
    categoria: "Cinema",
    imagem: "/cinema-independente.jpg", // Imagem fictícia
  },
];

// Categorias para filtro
const categorias = [
  "Todas",
  "Música",
  "Exposição",
  "Teatro",
  "Gastronomia",
  "Cinema",
];

export default function AgendaPage() {
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  // Filtrar eventos por categoria
  const eventosFiltrados =
    filtroCategoria === "Todas"
      ? eventosSimulados
      : eventosSimulados.filter(
          (evento) => evento.categoria === filtroCategoria,
        );

  // Função para formatar data
  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Ícone por categoria
  const getIconeCategoria = (categoria: string) => {
    switch (categoria) {
      case "Música":
        return <Music className="h-5 w-5" />;
      case "Teatro":
        return <Theater className="h-5 w-5" />;
      case "Cinema":
        return <Film className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-6">Agenda Cultural</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Confira os próximos eventos culturais e artísticos de Uberlândia.
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center mr-4">
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium">Filtrar por:</span>
          </div>
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={filtroCategoria === categoria ? "default" : "outline"}
              size="sm"
              onClick={() => setFiltroCategoria(categoria)}
            >
              {categoria}
            </Button>
          ))}
        </div>

        {/* Lista de Eventos */}
        <div className="grid grid-cols-1 gap-6">
          {eventosFiltrados.map((evento) => (
            <Card key={evento.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-muted h-48 md:h-auto flex items-center justify-center relative">
                  {/* Placeholder para imagem - em um projeto real, usaria Image do Next.js */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {getIconeCategoria(evento.categoria)}
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {evento.categoria}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatarData(evento.data)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {evento.hora}
                      </span>
                    </div>
                    <CardTitle>{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {evento.descricao}
                    </p>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{evento.local}</div>
                        <div>{evento.endereco}</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button>Ver Detalhes</Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Calendário */}
        <div className="bg-muted/50 rounded-lg p-8 my-12">
          <h2 className="text-2xl font-bold mb-4">Calendário de Eventos</h2>
          <p className="text-muted-foreground mb-6">
            Visualize todos os eventos em formato de calendário para planejar
            melhor sua agenda cultural. Em uma versão completa, esta seção
            incluiria um calendário interativo com todos os eventos.
          </p>
          <div className="h-64 bg-muted rounded-md flex items-center justify-center border">
            <p className="text-muted-foreground">
              Calendário interativo seria exibido aqui
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Ver Calendário Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
