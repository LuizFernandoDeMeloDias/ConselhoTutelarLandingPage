import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#2e1a51] px-6 py-12">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-10 text-center shadow-2xl shadow-black/40">
        <h1 className="mb-4 text-6xl font-black text-white">404</h1>
        <p className="mb-6 text-xl text-slate-300">Oops! Página não encontrada</p>
        <a href="/" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
