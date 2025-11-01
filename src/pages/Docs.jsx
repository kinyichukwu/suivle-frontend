import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Navbar } from '../components/navbar/Navbar';
import './Docs.css';

const GITHUB_README_URL = 'https://raw.githubusercontent.com/kinyichukwu/suivle-frontend/main/README.md';

export default function Docs() {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(GITHUB_README_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch documentation');
        }

        const text = await response.text();
        setMarkdown(text);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching README:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReadme();
  }, []);

  return (
    <div className="bg-sui-bg min-h-screen overflow-hidden relative">
      <Navbar />

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-sui-blue/15 via-sui-blue-dark/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#936BF9]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#3DB3FC]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-sui-blue/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full text-white flex flex-col justify-center items-center pt-24 md:pt-32 lg:pt-36 pb-16 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
            <span className="text-sui-blue">Documentation</span>
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about <span className="text-sui-blue">Suivle</span> - from setup to advanced features.
            Build powerful blockchain visualizations with our comprehensive guides.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#getting-started"
            className="px-8 py-4 bg-gradient-to-r from-sui-blue to-sui-blue-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
          >
            Get Started
          </a>
          <a
            href="https://github.com/kinyichukwu/suivle-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/15 transition-all text-center flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="relative w-full px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {loading && (
            <div className="flex items-center justify-center py-32">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sui-blue mb-6"></div>
                <p className="text-white text-xl font-medium">Loading documentation...</p>
                <p className="text-white/60 text-sm mt-2">Fetching the latest guides and information</p>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center py-32">
              <div className="text-center max-w-lg bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-7xl mb-6">📄</div>
                <h2 className="text-white text-3xl font-bold mb-3">Unable to Load Documentation</h2>
                <p className="text-white/70 mb-6 leading-relaxed">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-4 bg-gradient-to-r from-sui-blue to-sui-blue-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {!loading && !error && markdown && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="markdown-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {markdown}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
