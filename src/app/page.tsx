"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">Libre</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#como-funciona" className="text-white/70 hover:text-lime-400 transition-colors">Como Funciona</a>
              <a href="#socio-investidor" className="text-white/70 hover:text-lime-400 transition-colro">Ser Sócio</a>
              <a href="#projeccoess" className="text-white/70 hover:text-lime-400 transition-colors">Projeções</a>
              <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-300 transition-colors">
                QUERO ME TORNAR SÓCIO
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-lime-500/10 border border-lime-500/30 rounded-full text-lime-400 text-sm font-medium mb-8">
              🚀 A revolução da mobilidade está chegando
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Deixe de Ser a Rota.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                Seja o Dono do Mapa.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
              Esta não é uma promessa. É um plano de negócios. E estamos convidando você para se tornar um dos nossos primeiros sócios-fundadores e construir a Libre conosco.
            </p>

            {/* Revenue Split Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <h3 className="text-lg text-white/50 mb-6">A verdade que você sente no bolso todos os dias.</h3>
              <p className="text-2xl mb-6">Em uma corrida de <span className="text-lime-400 font-bold">R$ 50,00</span>, seu esforço é dividido assim:</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-lime-500/10 border border-lime-500/30 rounded-xl p-6">
                  <div className="text-4xl font-bold text-lime-400 mb-2">R$ 32,50</div>
                  <div className="text-white/70">(SEU)</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">R$ 17,50</div>
                  <div className="text-white/70">(PLATAFORMA)</div>
                </div>
              </div>
              
              <p className="mt-6 text-white/60">
                Você arca com 100% dos custos e riscos. A plataforma fica com até <span className="text-red-400 font-bold">40%</span> da sua receita bruta. 
                <span className="text-lime-400 font-bold"> Isso precisa mudar. E vai mudar agora.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all transform hover:scale-105">
                QUERO ME TORNAR SÓCIO-FUNDADOR
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
                Ver Detalhes do Investimento
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1, y: [0, 10, 0] } : {}}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Two Ways to Earn Section */}
      <section id="como-funciona" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Na Libre, Você Ganha de <span className="text-lime-400">Duas Formas</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              É crucial entender essa diferença. Ela é a base da nossa revolução.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Driver-Owner */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/30 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-lime-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">1. Ganhos como MOTORISTA-DONO</h3>
              <p className="text-lime-400 font-medium mb-6">O Direito de Quem Roda.</p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-lime-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Como você ganha?</p>
                    <p className="text-white/60">Dirigindo. Você acumula Pontos de Participação (PPs) e recebe sua fatia dos 80% do lucro operacional que a Libre distribui a cada trimestre.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-lime-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Quem tem direito?</p>
                    <p className="text-white/60">TODOS os motoristas com assinatura ativa na plataforma.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50">É a recompensa pela sua <span className="text-lime-400">CONTRIBUIÇÃO</span></p>
              </div>
            </motion.div>

            {/* Shareholder Investor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">2. Ganhos como SÓCIO-INVESTIDOR</h3>
              <p className="text-blue-400 font-medium mb-6">O Direito de Quem Acredita.</p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Como você ganha?</p>
                    <p className="text-white/60">Investindo. Você compra uma parte da empresa Libre S.A. e lucra com a valorização futura dela e com dividendos pagos aos acionistas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Quem tem direito?</p>
                    <p className="text-white/60">APENAS quem decidir investir nesta Oferta Inicial.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50">É a recompensa pela sua <span className="text-blue-400">CONFIANÇA</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Plan Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso Plano Para <span className="text-lime-400">Dominar São Paulo</span>
            </h2>
            <p className="text-xl text-white/60">
              Estamos captando R$ 2,5 Milhões para executar um plano de 6 meses focado e agressivo.
            </p>
          </motion.div>

          {/* Funding Allocation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Uso dos Recursos Captados</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="#3f3f46" strokeWidth="12" fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="#84cc16" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset="161.86" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">54%</span>
                  </div>
                </div>
                <p className="font-semibold">Aquisição</p>
                <p className="text-white/60 text-sm">Pagar os Hubs para homologar nossos 3.000 sócios-fundadores.</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="#3f3f46" strokeWidth="12" fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="#22c55e" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset="225.19" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">36%</span>
                  </div>
                </div>
                <p className="font-semibold">Operações</p>
                <p className="text-white/60 text-sm">Manter a equipe, o suporte e os servidores funcionando a todo vapor.</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="#3f3f46" strokeWidth="12" fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="#16a34a" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset="316.67" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">10%</span>
                  </div>
                </div>
                <p className="font-semibold">Tecnologia</p>
                <p className="text-white/60 text-sm">Melhorar o app e garantir conformidade legal total.</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-4">Meta: Validar o modelo, atingir o lucro operacional e preparar a expansão nacional.</p>
          </div>
        </div>
      </section>

      {/* Projections Section */}
      <section id="projeccoess" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Onde Podemos Chegar Juntos
            </h2>
            <p className="text-xl text-white/60">
              Nosso plano para chegar a 51.000 motoristas em 3 anos, com base no sucesso do piloto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 text-white/70 font-medium">Métrica</th>
                  <th className="text-center py-4 px-6">
                    <div className="inline-block bg-lime-500/20 text-lime-400 px-4 py-1 rounded-full text-sm">Ano 1 (SP)</div>
                  </th>
                  <th className="text-center py-4 px-6 text-white/70 font-medium">Ano 2</th>
                  <th className="text-center py-4 px-6 text-white/70 font-medium">Ano 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/70">Motoristas-Donos</td>
                  <td className="py-4 px-6 text-center font-bold text-lime-400">5.000</td>
                  <td className="py-4 px-6 text-center">17.000</td>
                  <td className="py-4 px-6 text-center">51.000</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/70">Receita Anual (Assinaturas)</td>
                  <td className="py-4 px-6 text-center font-bold text-lime-400">R$ 28 Milhões</td>
                  <td className="py-4 px-6 text-center">R$ 95 Milhões</td>
                  <td className="py-4 px-6 text-center">R$ 287 Milhões</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white/70">Lucro Distribuído aos Motoristas (80%)</td>
                  <td className="py-4 px-6 text-center font-bold text-lime-400">~ R$ 16 Milhões</td>
                  <td className="py-4 px-6 text-center">~ R$ 64 Milhões</td>
                  <td className="py-4 px-6 text-center">~ R$ 204 Milhões</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-white/40 text-sm"
          >
            Aviso: Projeções são estimativas baseadas em nosso plano de negócios e não garantem resultados futuros. O investimento tem riscos.
          </motion.p>
        </div>
      </section>

      {/* Investment Terms Section */}
      <section id="socio-investidor" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Os Termos da Sociedade: <span className="text-lime-400">Sua Oportunidade.</span>
            </h2>
            <p className="text-xl text-white/60">
              Estamos convidando você a se tornar dono de um pedaço da empresa que vai mudar tudo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-white/50 text-sm mb-2">Meta de Captação</p>
              <p className="text-3xl font-bold text-lime-400">R$ 2,5 mi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-white/50 text-sm mb-2">Valor da Empresa (Hoje)</p>
              <p className="text-3xl font-bold">R$ 10 mi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-white/50 text-sm mb-2">Participação Oferecida</p>
              <p className="text-3xl font-bold">20%</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-white/50 text-sm mb-2">Investimento Mínimo</p>
              <p className="text-3xl font-bold">R$ 500</p>
            </motion.div>
          </div>

          {/* Investment Potential */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/30 rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              O que um investimento de <span className="text-lime-400">R$ 1.000</span> pode se tornar?
            </h3>
            <p className="text-center text-white/70 mb-8">
              Ao investir R$ 1.000, você adquire 0,008% da Libre S.A. Se nosso plano for bem-sucedido e a empresa se valorizar, seu investimento cresce junto.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/50 rounded-xl p-6 text-center border border-white/10">
                <p className="text-white/50 text-sm mb-2">Cenário Conservador</p>
                <p className="text-4xl font-bold text-lime-400 mb-2">~ R$ 8.000</p>
                <p className="text-white/60 text-sm">Se a Libre atingir um valuation de R$ 100 Milhões em 3-5 anos.</p>
              </div>
              <div className="bg-black/50 rounded-xl p-6 text-center border border-white/10">
                <p className="text-white/50 text-sm mb-2">Cenário Otimista</p>
                <p className="text-4xl font-bold text-green-400 mb-2">~ R$ 40.000</p>
                <p className="text-white/60 text-sm">Se nos tornarmos um grande player, avaliado em R$ 500 Milhões.</p>
              </div>
            </div>
            
            <p className="text-center mt-6 text-white/40 text-sm">
              Aviso: Estes são exemplos hipotéticos para fins ilustrativos. O retorno não é garantido e o investimento em startups envolve alto risco, incluindo a perda total do capital investido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black via-lime-500/5 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              O Futuro da Mobilidade <span className="text-lime-400">Será Construído COM Você.</span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Esta é a sua chance de ter um lugar na mesa. De ser dono do seu futuro. De construir um legado.
            </p>
            <p className="text-2xl font-bold mb-12 text-lime-400">
              A hora de tomar o volante é agora.
            </p>
            
            <button className="bg-lime-400 text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-lime-300 transition-all transform hover:scale-105 shadow-lg shadow-lime-500/25">
              QUERO ME TORNAR SÓCIO-FUNDADOR
            </button>
            
            <p className="mt-8 text-white/50 text-sm">
              Você será redirecionado para a plataforma da Kria, nosso parceiro oficial de crowdfunding, para concluir seu investimento com segurança e em conformidade com a CVM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="text-2xl font-bold">Libre</span>
            </div>
            <p className="text-white/50 text-center md:text-right">
              Mobilidade que pertence a quem usa.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
            <p>© 2024 Libre S.A. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
