export default function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Cultura Uberlândia</h3>
            <p className="text-sm text-muted-foreground">
              Plataforma digital para divulgação de atividades culturais,
              turísticas e artísticas da cidade de Uberlândia.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/turismo"
                  className="hover:text-primary transition-colors"
                >
                  Turismo e Cultura
                </a>
              </li>
              <li>
                <a
                  href="/agenda"
                  className="hover:text-primary transition-colors"
                >
                  Agenda Cultural
                </a>
              </li>
              <li>
                <a
                  href="/artistas"
                  className="hover:text-primary transition-colors"
                >
                  Espaço do Artista
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contato</h3>
            <p className="text-sm text-muted-foreground">
              Este projeto foi desenvolvido como parte do Programa de Inovação e
              Empreendedorismo da Universidade.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Cultura Uberlândia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
