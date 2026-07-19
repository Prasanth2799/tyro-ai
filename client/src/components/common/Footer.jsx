import { ShieldCheck, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-indigo-400" size={22} />

              <span className="text-xl font-bold text-white">
                Tyro<span className="text-indigo-400">AI</span>
              </span>
            </div>

            <p className="mt-3 max-w-md text-sm text-slate-400">
              AI-powered scam detection platform that helps users identify
              phishing, fraud, and suspicious messages before they become
              victims.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Prasanth2799/tyro-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
            >
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 TyroAI. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="fill-red-500 text-red-500" />
            using React & AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;