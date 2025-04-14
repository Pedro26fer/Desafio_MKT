"use client";

import Head from 'next/head';
import Input from './components/Input';
import Button from './components/Button';
import { useRouter } from 'next/navigation'; // Updated import
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (user === 'spotmkt' && pass === '123') {
      router.push('/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Head><title>Login - SPOT MKT</title></Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary gap-6">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm h-[50vh] flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold text-center mb-6">Entrar</h2>
          <Input placeholder="Usuário" onChange={(e) => setUser(e.target.value)} />
          <Input type="password" placeholder="Senha" className="mt-4" onChange={(e) => setPass(e.target.value)} />
          {error && <p className="text-red-500 mt-2">Usuário ou senha incorretos.</p>}
          <Button className="mt-6 w-full" onClick={handleLogin}>Entrar</Button>
        </div>
      </div>
    </>
  );
}