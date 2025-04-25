import { Button } from "@/components/common/button/button.component";
import { Card, CardContent } from "@/components/common/card/card.component";
import { MapPin, Info, ExternalLink } from "lucide-react";

// Dados simulados de pontos turísticos
const pontosTuristicos = [
  {
    id: 1,
    nome: "Parque do Sabiá",
    descricao:
      "Maior área verde da cidade, com lagos, pistas para caminhada, zoológico e diversas opções de lazer.",
    endereco: "Av. Anselmo Alves dos Santos, 1600 - Santa Mônica",
    imagem: "/parque-sabia.jpg", // Imagem fictícia
  },
  {
    id: 2,
    nome: "Mercado Municipal",
    descricao:
      "Centro gastronômico e cultural com diversos produtos regionais, restaurantes e artesanato.",
    endereco: "Av. Getúlio Vargas, 728 - Centro",
    imagem: "/mercado-municipal.jpg", // Imagem fictícia
  },
  {
    id: 3,
    nome: "Museu Municipal",
    descricao:
      "Espaço cultural que preserva a história e memória da cidade através de exposições permanentes e temporárias.",
    endereco: "Praça Clarimundo Carneiro, 67 - Centro",
    imagem: "/museu-municipal.jpg", // Imagem fictícia
  },
  {
    id: 4,
    nome: "Teatro Municipal",
    descricao:
      "Principal espaço para apresentações artísticas da cidade, com programação diversificada.",
    endereco: "Av. Rondon Pacheco, 7070 - Tibery",
    imagem: "/teatro-municipal.jpg", // Imagem fictícia
  },
];

// Dados simulados de centros culturais
const centrosCulturais = [
  {
    id: 1,
    nome: "Casa da Cultura",
    descricao:
      "Espaço dedicado à promoção de atividades culturais, exposições e oficinas artísticas.",
    endereco: "Praça Coronel Carneiro, 89 - Centro",
    imagem: "/casa-cultura.jpg", // Imagem fictícia
  },
  {
    id: 2,
    nome: "Centro Cultural UFU",
    descricao:
      "Espaço cultural da Universidade Federal de Uberlândia com exposições, teatro e eventos culturais.",
    endereco: "Av. João Naves de Ávila, 2121 - Santa Mônica",
    imagem: "/centro-cultural-ufu.jpg", // Imagem fictícia
  },
];

export default function TurismoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-6">Turismo e Cultura</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Descubra os principais pontos turísticos e centros culturais de
          Uberlândia.
        </p>

        <h2 className="text-2xl font-bold mb-6 mt-12">Pontos Turísticos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pontosTuristicos.map((ponto) => (
            <Card key={ponto.id} className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center relative">
                {/* Placeholder para imagem - em um projeto real, usaria Image do Next.js */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">
                    {ponto.nome}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{ponto.descricao}</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{ponto.endereco}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Info className="h-4 w-4 mr-2" />
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-12">Centros Culturais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {centrosCulturais.map((centro) => (
            <Card key={centro.id} className="overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center relative">
                {/* Placeholder para imagem - em um projeto real, usaria Image do Next.js */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">
                    {centro.nome}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{centro.descricao}</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{centro.endereco}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Info className="h-4 w-4 mr-2" />
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 my-12">
          <h2 className="text-2xl font-bold mb-4">Mapa Cultural</h2>
          <p className="text-muted-foreground mb-6">
            Explore o mapa interativo com todos os pontos turísticos e centros
            culturais de Uberlândia. Em uma versão completa, esta seção
            incluiria integração com Google Maps ou OpenStreetMap.
          </p>
          <div className="h-64 bg-muted rounded-md flex items-center justify-center border">
            <p className="text-muted-foreground">
              Mapa interativo seria exibido aqui
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver Mapa Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
