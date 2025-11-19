import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Asterisk, User, Volume2, GraduationCap, FileText, Lightbulb, Lock } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-normal mb-6">
          Understand{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            Anything
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your research and thinking partner, grounded in the information you trust, built with
          the latest AI models.
        </p>
        <Button
          onClick={() => navigate('/auth')}
          size="lg"
          className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full"
        >
          Try Polynote
        </Button>
      </section>

      {/* Subheading */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-normal mb-16">Your AI-Powered Research Partner</h2>
      </section>

      {/* Feature 1: Instant insights */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-normal">Instant insights</h3>
            </div>
            <p className="text-gray-600 text-lg">
              With all of your sources in place, Polynote gets to work and becomes a personalized AI expert in the
              information that matters most to you.
            </p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="w-full">
              <div className="bg-purple-400 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center text-sm font-medium">
                INSTANT STUDY GUIDE!
              </div>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-full px-6 py-3 text-white text-center">+ Add note</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800 rounded-full px-4 py-2 text-white text-sm text-center">Study guide</div>
                  <div className="bg-gray-800 rounded-full px-4 py-2 text-white text-sm text-center">Briefing doc</div>
                  <div className="bg-gray-800 rounded-full px-4 py-2 text-white text-sm text-center">FAQ</div>
                  <div className="bg-gray-800 rounded-full px-4 py-2 text-white text-sm text-center">Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: See the source */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gray-900 rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="w-full text-white">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-medium">Sources</h4>
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-xs">📄</div>
                  <span className="text-sm">Document 1</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-xs">📄</div>
                  <span className="text-sm">Document 2</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg opacity-50">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-xs">▶</div>
                  <span className="text-sm">Video Source</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center mb-4">
              <Asterisk className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-normal">See the source, not just the answer</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Gain confidence in every response because Polynote provides clear citations for its work, showing you the
              exact quotes from your sources.
            </p>
          </div>
        </div>
      </section>

      {/* Feature 3: Upload your sources */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-normal">Upload your sources</h3>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              Upload PDFs, websites, YouTube videos, audio files, Google Docs, Google Slides and more, and
              Polynote will summarize them and make interesting connections between topics, all powered by the latest
              AI models.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="w-full text-white">
              <div className="bg-gray-700/50 rounded-2xl p-4 mb-4 border border-green-500/30">
                <p className="text-sm mb-2">Can you summarize the main themes?</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-4">
                <h4 className="font-medium mb-2 text-sm">Here's a breakdown:</h4>
                <p className="text-sm text-gray-300">
                  The main themes include innovation, collaboration, and the importance of understanding complex
                  information through multiple perspectives...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Listen and learn */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gray-900 rounded-3xl p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-8 right-8 bg-yellow-300 text-black rounded-full w-32 h-32 flex items-center justify-center text-xs font-medium transform rotate-12">
              CREATE AUDIO
              <br />
              STUDY GUIDES
            </div>
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-gray-800 rounded-full px-6 py-4 text-white text-center flex items-center justify-between">
                <span className="text-sm">Audio Overview</span>
                <div className="w-16 h-8 bg-teal-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center mb-4">
              <Volume2 className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-normal">Listen and learn on the go</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Our new Audio Overview feature can turn your sources into engaging "Deep Dive" discussions with one click.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-normal text-center mb-16">How people are using Polynote</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Power study</h3>
            <p className="text-gray-600 mb-4">
              Upload lecture recordings, textbook chapters, and research papers. Ask Polynote to explain complex concepts
              in simple terms, provide real-world examples, and reinforce your understanding.
            </p>
            <p className="text-gray-500 italic text-sm">Learn faster and deeper.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Organize your thinking</h3>
            <p className="text-gray-600 mb-4">
              Upload your source material and let Polynote create a polished presentation outline, complete with key
              talking points and supporting evidence.
            </p>
            <p className="text-gray-500 italic text-sm">Present with confidence.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Spark new ideas</h3>
            <p className="text-gray-600 mb-4">
              Upload brainstorming notes, market research, and competitor research. Ask Polynote to identify trends,
              generate new product ideas, and uncover hidden opportunities.
            </p>
            <p className="text-gray-500 italic text-sm">Unlock your creative potential.</p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-normal mb-6">
            We value your privacy and do not use your personal data to train Polynote.
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Polynote does not use your personal data, including your source uploads, queries, and the responses from
            the model for training.
          </p>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                <Lock className="w-16 h-16 text-white" />
              </div>
              <div className="absolute top-0 right-[-80px] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute bottom-0 left-[-80px] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute bottom-[-20px] right-[-40px] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <Button
          onClick={() => navigate('/auth')}
          size="lg"
          className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full"
        >
          Get Started with Polynote
        </Button>
      </section>
    </div>
  );
};

export default Landing;
