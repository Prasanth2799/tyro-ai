import { ShieldCheck } from "lucide-react";

const Hero = () => {
  const scrollToAnalyzer = () => {
    document
      .getElementById("analyzer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          <ShieldCheck size={18} />
          AI-Powered Scam Detection
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Stay One Step Ahead
          <br />
          <span className="text-indigo-400">
            of Online Scams
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Paste suspicious SMS, WhatsApp, Email or Social Media messages.
          TyroAI analyzes them using AI and tells you whether they are safe,
          suspicious, or likely a scam—with detailed explanations.
        </p>

        <button
          onClick={scrollToAnalyzer}
          className="mt-10 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold transition hover:bg-indigo-500"
        >
          Analyze a Message
        </button>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <span>⚡ Instant Analysis</span>
          <span>🔒 Privacy Focused</span>
          <span>🤖 AI Powered</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;