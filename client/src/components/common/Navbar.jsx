import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-indigo-600 p-2">
            <ShieldCheck size={20} className="text-white" />
          </div>

          <span className="text-xl font-bold text-white">
            Tyro<span className="text-indigo-400">AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/how-it-works"
            className="text-slate-300 transition hover:text-indigo-400"
          >
            How it Works
          </Link>

          <a
            href="https://github.com/Prasanth2799/tyro-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-indigo-500 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;