import { Button } from "@/components/common/button/button.component";
import { Card, CardContent } from "@/components/common/card/card.component";
import { User, MapPin, Calendar, Plus, Search } from "lucide-react";
import { useState } from "react";

// Dados simulados de artistas
const artistasSimulados = [
  {
    id: 1,
    nome: "Banda Horizonte",
    categoria: "Música",
    genero: "Rock Alternativo",
    descricao:
      "Banda independente de Uberlândia que mistura rock alternativo com elementos regionais.",
    contato: "bandahorizonte@email.com",
    instagram: "@bandahorizonte",
    proximosEventos: [
      {
        titulo: "Show no Parque do Sabiá",
        data: "2025-05-20",
        local: "Parque do Sabiá",
      },
    ],
    imagem: "/banda-horizonte.jpg", // Imagem fictícia
  },
  {
    id: 2,
    nome: "Coletivo Teatral Máscaras",
    categoria: "Teatro",
    genero: "Teatro Contemporâneo",
    descricao:
      "Grupo de teatro independente com foco em produções contemporâneas e experimentais.",
    contato: "coletivo.mascaras@email.com",
    instagram: "@coletivomascaras",
    proximosEventos: [
      {
        titulo: "Peça: 'Entre Muros'",
        data: "2025-05-25",
        local: "Centro Cultural UFU",
      },
    ],
    imagem: "/coletivo-mascaras.jpg", // Imagem fictícia
  },
  {
    id: 3,
    nome: "DJ Mariana Luz",
    categoria: "Música",
    genero: "Eletrônica / House",
    descricao:
      "DJ e produtora musical especializada em música eletrônica e house music.",
    contato: "marianaluz.dj@email.com",
    instagram: "@marianaluz.dj",
    proximosEventos: [
      {
        titulo: "Noite Eletrônica",
        data: "2025-06-01",
        local: "Club XYZ",
      },
    ],
    imagem: "/dj-mariana.jpg", // Imagem fictícia
  },
  {
    id: 4,
    nome: "Coletivo Fotográfico Olhar Urbano",
    categoria: "Artes Visuais",
    genero: "Fotografia Urbana",
    descricao:
      "Grupo de fotógrafos que documenta a vida urbana e as transformações da cidade de Uberlândia.",
    contato: "olharurbano@email.com",
    instagram: "@olharurbano",
    proximosEventos: [
      {
        titulo: "Exposição: 'Cidade em Movimento'",
        data: "2025-06-10",
        local: "Galeria Municipal",
      },
    ],
    imagem: "/olhar-urbano.jpg", // Imagem fictícia
  },
];

// Categorias para filtro
const categorias = [
  "Todas",
  "Música",
  "Teatro",
  "Dança",
  "Artes Visuais",
  "Literatura",
];

export default function ArtistasPage() {
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  // Filtrar artistas por categoria
  const artistasFiltrados =
    filtroCategoria === "Todas"
      ? artistasSimulados
      : artistasSimulados.filter(
          (artista) => artista.categoria === filtroCategoria,
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

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-6">Espaço do Artista</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Conheça os artistas independentes de Uberlândia e seus próximos
          eventos.
        </p>

        {/* Ações */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-3">
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
          <div className="flex gap-3">
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Buscar Artistas
            </Button>
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              Cadastrar-se como Artista
            </Button>
          </div>
        </div>

        {/* Lista de Artistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {artistasFiltrados.map((artista) => (
            <Card key={artista.id} className="overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full h-48 bg-muted flex items-center justify-center relative">
                  {/* Placeholder para imagem - em um projeto real, usaria Image do Next.js */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{artista.nome}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="bg-primary/80 px-2 py-0.5 rounded-full text-xs">
                          {artista.categoria}
                        </span>
                        <span>{artista.genero}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {artista.descricao}
                  </p>

                  <div className="text-sm mb-4">
                    <div className="font-medium mb-2">Contato:</div>
                    <div className="text-muted-foreground">
                      {artista.contato}
                    </div>
                    <div className="text-muted-foreground">
                      {artista.instagram}
                    </div>
                  </div>

                  {artista.proximosEventos &&
                    artista.proximosEventos.length > 0 && (
                      <div className="text-sm mb-4">
                        <div className="font-medium mb-2">
                          Próximos Eventos:
                        </div>
                        {artista.proximosEventos.map((evento, index) => (
                          <div
                            key={index}
                            className="mb-2 p-2 bg-muted/50 rounded-md"
                          >
                            <div className="font-medium">{evento.titulo}</div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {formatarData(evento.data)}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {evento.local}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  <div className="flex justify-end">
                    <Button>Ver Perfil Completo</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Cadastro */}
        <div className="bg-muted/50 rounded-lg p-8 my-12">
          <h2 className="text-2xl font-bold mb-4">Cadastre-se como Artista</h2>
          <p className="text-muted-foreground mb-6">
            Você é um artista independente de Uberlândia? Cadastre-se na nossa
            plataforma para divulgar seu trabalho, eventos e conectar-se com o
            público local.
          </p>
          <div className="flex justify-end">
            <Button>
              <User className="h-4 w-4 mr-2" />
              Criar Perfil de Artista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
