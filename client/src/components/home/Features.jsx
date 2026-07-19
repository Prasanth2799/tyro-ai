import {
  ClipboardPaste,
  BrainCircuit,
  ShieldAlert,
} from "lucide-react";

const features = [
  {
    icon: ClipboardPaste,
    title: "Paste Your Message",
    description:
      "Simply paste any suspicious SMS, email, WhatsApp, or social media message.",
  },
  {
    icon: BrainCircuit,
    title: "AI Threat Analysis",
    description:
      "Our AI examines language patterns, urgency, phishing tactics, and scam indicators.",
  },
  {
    icon: ShieldAlert,
    title: "Instant Risk Report",
    description:
      "Receive a confidence score, detailed reasoning, and recommended next steps.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How TyroAI Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Three simple steps to verify suspicious messages and
            protect yourself from scams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-indigo-500"
              >
                <div className="mb-6 inline-flex rounded-xl bg-indigo-500/10 p-4">
                  <Icon className="text-indigo-400" size={32} />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;