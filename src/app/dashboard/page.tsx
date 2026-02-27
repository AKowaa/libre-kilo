"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Libre</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Olá, Motorista</span>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="py-4">
              <p className="text-sm text-gray-500 mb-1">Corridas Hoje</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4">
              <p className="text-sm text-gray-500 mb-1">Ganhos Hoje</p>
              <p className="text-2xl font-bold text-lime-600">R$ 285,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4">
              <p className="text-sm text-gray-500 mb-1">Pontos de Participação</p>
              <p className="text-2xl font-bold text-blue-600">1.250</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4">
              <p className="text-sm text-gray-500 mb-1">Avaliação</p>
              <p className="text-2xl font-bold text-gray-900">4.9</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-gray-900">Ações Rápidas</h2>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Iniciar Jornada
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Ver Histórico de Corridas
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Ganhos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-gray-900">Status da Conta</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Ativo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Assinatura</span>
                  <span className="text-gray-900 font-medium">Premium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Próximo pagamento</span>
                  <span className="text-gray-900">15/03/2026</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Rides */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Corridas Recentes</h2>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Data</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Origem</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Destino</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Valor</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">27/02/2026</td>
                    <td className="py-3 px-4 text-gray-600">Av. Paulista, 1000</td>
                    <td className="py-3 px-4 text-gray-600">Shopping Eldorado</td>
                    <td className="py-3 px-4 text-lime-600 font-medium">R$ 32,50</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        Concluída
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">27/02/2026</td>
                    <td className="py-3 px-4 text-gray-600">Terminal Intermodal</td>
                    <td className="py-3 px-4 text-gray-600">Aeroporto Guarulhos</td>
                    <td className="py-3 px-4 text-lime-600 font-medium">R$ 85,00</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        Concluída
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-900">26/02/2026</td>
                    <td className="py-3 px-4 text-gray-600">Centro Comercial</td>
                    <td className="py-3 px-4 text-gray-600">Rua Augusta, 500</td>
                    <td className="py-3 px-4 text-lime-600 font-medium">R$ 24,00</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        Concluída
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
