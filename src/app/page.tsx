"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Libre</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-lime-600">Início</a>
              <a href="#" className="text-gray-600 hover:text-lime-600">Motoristas</a>
              <a href="#" className="text-gray-600 hover:text-lime-600">Sobre</a>
              <button className="bg-lime-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-lime-600 transition-colors">
                Entrar
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plataforma em Desenvolvimento
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A aplicação está sendo construída. Aqui você poderá gerenciar sua atividade como motorista parceiro.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Corridas */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Corridas</h3>
            <p className="text-gray-600">
              Gerencie suas corridas e visualize seu histórico de viagens.
            </p>
          </div>

          {/* Card 2 - Ganhos */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ganhos</h3>
            <p className="text-gray-600">
              Acompanhe seus ganhos e participação nos lucros da plataforma.
            </p>
          </div>

          {/* Card 3 - Perfil */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Perfil</h3>
            <p className="text-gray-600">
              Gerencie suas informações pessoais e configurações da conta.
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-lime-50 text-lime-700 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
            <span className="font-medium">Em desenvolvimento</span>
          </div>
        </div>
      </div>
    </main>
  );
}
