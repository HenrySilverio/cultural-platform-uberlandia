// src/pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/images/uberlandia1.jpg',
    '/images/uberlandia2.jpg',
    '/images/uberlandia3.jpg',
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const destaques = [
    {
      titulo: "Festival de Jazz",
      data: "15-17 Maio, 2025",
      local: "Teatro Municipal",
      imagem: "/images/jazz.jpg"
    },
    {
      titulo: "Exposição de Arte",
      data: "10-30 Maio, 2025",
      local: "Galeria Municipal",
      imagem: "/images/arte.jpg"
    },
    {
      titulo: "Feira Gastronômica",
      data: "25 Maio, 2025",
      local: "Parque do Sabiá",
      imagem: "/images/gastronomia.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Plataforma Cultural Uberlândia</title>
        <meta name="description" content="Plataforma digital para divulgação de atividades culturais, turísticas e artísticas de Uberlândia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section com Carrossel */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Placeholder para carrossel - em produção, use imagens reais */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Cultura Uberlândia
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 animate-fade-in-delay">
            Descubra, conecte-se e celebre a rica diversidade cultural 
            da cidade de Uberlândia
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
            <Link href="/schedule" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
              Explorar Eventos
            </Link>
            <Link href="/entertainers" className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
              Espaço do Artista
            </Link>
          </div>
        </div>
        
        {/* Indicadores do carrossel */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-10" : "bg-white/50"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Destaques Culturais</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Confira os principais eventos culturais que estão acontecendo em Uberlândia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destaques.map((destaque, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  {/* Placeholder para imagem - em produção, use Image do Next.js */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-light">
                    {destaque.titulo.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destaque.titulo}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{destaque.data}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{destaque.local}</span>
                  </div>
                  <Link 
                    href="/schedule" 
                    className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </div>
            ) )}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/schedule" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Ver todos os eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Pilares */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Pilares</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A Plataforma Cultural Uberlândia é construída sobre três pilares fundamentais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Turismo e Cultura</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mapeamento completo dos pontos turísticos e centros culturais da cidade, 
                com informações detalhadas e atualizadas.
              </p>
              <Link 
                href="/tourism" 
                className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Explorar →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Agenda Cultural</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Calendário completo e atualizado de eventos culturais, com sistema de 
                filtros e alertas personalizados.
              </p>
              <Link 
                href="/schedule" 
                className="inline-block text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium"
              >
                Ver agenda →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Espaço do Artista</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plataforma para artistas independentes divulgarem seu trabalho, 
                conectarem-se com o público e outros artistas.
              </p>
              <Link 
                href="/entertainers" 
                className="inline-block text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium"
              >
                Participar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Pontos Turísticos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-300">Eventos Mensais</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Artistas Cadastrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">5000+</div>
              <div className="text-gray-600 dark:text-gray-300">Usuários Ativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Faça Parte da Comunidade Cultural</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Junte-se a nós para promover e celebrar a cultura de Uberlândia. 
            Cadastre-se como artista ou explore os eventos da cidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/entertainers" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Cadastrar como Artista
            </Link>
            <Link 
              href="/schedule" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Explorar Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Sobre o Projeto */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Sobre o Projeto</h2>
            <p className="text-lg mb-4">
              A Plataforma Cultural Uberlândia é um projeto desenvolvido como parte do 
              Programa de Inovação e Empreendedorismo, vinculado às atividades de extensão 
              universitária previstas na matriz curricular do curso de Engenharia de Software.
            </p>
            <p className="text-lg mb-4">
              Nossa missão é centralizar e facilitar o acesso às informações sobre eventos 
              culturais e artísticos da cidade, além de oferecer um espaço para que artistas 
              independentes possam divulgar seu trabalho.
            </p>
            <p className="text-lg mb-8">
              Este projeto está alinhado com os Objetivos de Desenvolvimento Sustentável (ODS)  
              da ONU, especialmente os objetivos 4 (Educação de Qualidade), 8 (Trabalho Decente 
              e Crescimento Econômico) e 11 (Cidades e Comunidades Sustentáveis).
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600 dark:text-blue-300">4</span>
                </div>
                <span className="text-sm">Educação de Qualidade</span>
              </div>
              
              <div className="flex items-center bg-red-50 dark:bg-red-900/30 p-3 rounded-lg">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-red-600 dark:text-red-300">8</span>
                </div>
                <span className="text-sm">Trabalho Decente</span>
              </div>
              
              <div className="flex items-center bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-amber-600 dark:text-amber-300">11</span>
                </div>
                <span className="text-sm">Cidades Sustentáveis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adicione estilos CSS para animações */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 1s ease-out 0.3s forwards;
        }
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 1s ease-out 0.6s forwards;
        }
      `}</style>
    </>
  )
}
