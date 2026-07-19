import { useState, useEffect, useRef } from "react";
import { analyzeMessage } from "../services/ai";
import Hero from "../components/home/Hero";
import MessageAnalyzer from "../components/analyzer/MessageAnalyzer";
import ResultCard from "../components/analyzer/ResultCard";
import Features from "../components/home/Features";

const Home = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
const resultRef = useRef(null);
useEffect(() => {
  if (result && resultRef.current) {
    resultRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [result]);
const handleAnalyze = async () => {
  console.log("Clicked Analyze");
  console.log("Message:", message);

  if (!message.trim()) {
    console.log("Empty message");
    return;
  }

  try {
    setLoading(true);

    const result = await analyzeMessage(message);

    console.log("AI Result:", result);

    setResult({
      message,
      ...result,
    });
  } catch (e) {
    console.error(e);
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      <Hero />

      <MessageAnalyzer
  message={message}
  setMessage={setMessage}
  loading={loading}
  onAnalyze={handleAnalyze}
/>

      {result && (
  <div ref={resultRef}>
    <ResultCard result={result} />
  </div>
)}

      <Features />
    </>
  );
};

export default Home;