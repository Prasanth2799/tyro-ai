import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const ResultCard = ({ result }) => {
  const isSafe = result.status === "Safe";
  const isSuspicious = result.status === "Suspicious";

  const borderColor = isSafe
    ? "border-green-500/20"
    : isSuspicious
    ? "border-yellow-500/20"
    : "border-red-500/20";

  const bgColor = isSafe
    ? "bg-green-500/10"
    : isSuspicious
    ? "bg-yellow-500/10"
    : "bg-red-500/10";

  const textColor = isSafe
    ? "text-green-400"
    : isSuspicious
    ? "text-yellow-400"
    : "text-red-400";

  const Icon = isSafe ? ShieldCheck : ShieldAlert;

  return (
    <section className="bg-slate-950 px-6 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className={`rounded-3xl border ${borderColor} bg-slate-900 p-8 shadow-xl`}>
          <div className="flex items-center gap-4">
            <div className={`rounded-full ${bgColor} p-4`}>
              <Icon className={textColor} size={32} />
            </div>

            <div>
              <h2 className={`text-3xl font-bold ${textColor}`}>
                {result.status}
              </h2>

              <p className="text-slate-400">
                {result.category}
              </p>
            </div>

            <div className={`ml-auto rounded-xl ${bgColor} px-5 py-3`}>
              <span className={`text-3xl font-bold ${textColor}`}>
                {result.confidence}%
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-950 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">
              AI Summary
            </h3>

            <p className="text-slate-300">
              {result.summary}
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
                <AlertTriangle className="text-yellow-400" />
                Reasons
              </h3>

              <ul className="space-y-4">
                {result.reasons?.map((reason, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <CheckCircle2
                      className="mt-1 text-green-400"
                      size={18}
                    />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-semibold text-white">
                Recommendation
              </h3>

              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-slate-300">
                {result.recommendation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;