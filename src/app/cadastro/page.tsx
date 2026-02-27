"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Link from "next/link";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular cadastro
    setTimeout(() => {
      setLoading(false);
      alert("Cadastro realizado com sucesso! Você será redirecionado.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Libre</h1>
          <p className="text-gray-600 mt-1">Crie sua conta de motorista</p>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Cadastrar</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Nome Completo"
                type="text"
                placeholder="João Silva"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label="Telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
              <Input
                label="CPF"
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
              <div className="flex items-start">
                <input type="checkbox" id="termos" className="mt-1 rounded border-gray-300 text-lime-500 focus:ring-lime-500" required />
                <label htmlFor="termos" className="ml-2 text-sm text-gray-600">
                  Eu aceito os{" "}
                  <a href="#" className="text-lime-600 hover:text-lime-700">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-lime-600 hover:text-lime-700">
                    Política de Privacidade
                  </a>
                </label>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Cadastrando..." : "Criar Conta"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-lime-600 hover:text-lime-700 font-medium">
                  Entre agora
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
