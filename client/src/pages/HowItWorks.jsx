import {
  ClipboardPaste,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: <ClipboardPaste size={28} />,
    title: "Paste Suspicious Message",
    description:
      "Copy any SMS, WhatsApp, Email or Social Media message and paste it into TyroAI.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "AI Analysis",
    description:
      "Gemini AI examines phishing patterns, suspicious URLs, urgency, impersonation, scams and fraud indicators.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Instant Report",
    description:
      "Receive an AI-generated report with risk score, category, explanation and safety recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            How TyroAI Works
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Detect phishing, fraud and scam messages in seconds using AI.
            Simply paste your message and let TyroAI do the investigation.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                {step.icon}
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {index + 1}. {step.title}
              </h2>

              <p className="mt-4 text-slate-400">
                {step.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-indigo-400">
                <CheckCircle2 size={18} />
                <span>Simple & Secure</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;