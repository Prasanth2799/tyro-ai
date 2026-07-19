import { ShieldAlert, Sparkles, ClipboardPaste, Eraser } from "lucide-react";

const MessageAnalyzer = ({
  message,
  setMessage,
  loading,
  onAnalyze,
}) => {
  const examples = [
    {
      title: "🏦 Bank Scam",
      text: "Dear Customer, your SBI account has been blocked. Verify immediately at https://fake-bank.com",
    },
    {
      title: "🎁 Lottery Scam",
      text: "Congratulations! You've won ₹50,000. Claim your prize by clicking this link.",
    },
    {
      title: "🔐 OTP Scam",
      text: "Your OTP for login is 482931. Never share this OTP with anyone.",
    },
  ];

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setMessage(text);
    } catch (err) {
      alert("Unable to access clipboard.");
    }
  };

  return (
    <section id="analyzer" className="bg-slate-950 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-indigo-400">
              <ShieldAlert className="mr-2" size={18} />
              AI Message Analyzer
            </div>

            <h2 className="text-4xl font-bold text-white">
              Analyze a Suspicious Message
            </h2>

            <p className="mt-4 text-slate-400">
              Paste any SMS, WhatsApp, Email or Social Media message below.
              TyroAI will analyze it for phishing, fraud and scam patterns.
            </p>
          </div>

          <textarea
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Paste your suspicious message here..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-5 text-white outline-none transition focus:border-indigo-500"
          />

          <div className="mt-3 flex justify-between text-sm text-slate-400">
            <span>{message.length} / 5000</span>

            <button
              onClick={() => setMessage("")}
              className="flex items-center gap-2 hover:text-red-400"
            >
              <Eraser size={16} />
              Clear
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={onAnalyze}
              disabled={!message.trim() || loading}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles size={18} />
              {loading ? "Analyzing..." : "Analyze Message"}
            </button>

            <button
              onClick={handlePaste}
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-3 text-white transition hover:border-indigo-500"
            >
              <ClipboardPaste size={18} />
              Paste from Clipboard
            </button>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-sm text-slate-400">
              Try an example:
            </p>

            <div className="flex flex-wrap gap-3">
              {examples.map((example) => (
                <button
                  key={example.title}
                  onClick={() => setMessage(example.text)}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-indigo-500 hover:text-white"
                >
                  {example.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageAnalyzer;