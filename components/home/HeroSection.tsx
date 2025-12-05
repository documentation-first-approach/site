'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Download, BookOpen, Play } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const lines = useMemo(() => [
    { text: '$ /feature user can create a task with title', delay: 50, color: 'input' },
    { text: '→ analyzing requirement...', delay: 30, color: 'neutral-600' },
    { text: '→ complexity: LOW', delay: 30, color: 'neutral-600', highlight: 'LOW' },
    { text: '→ creating specification...', delay: 30, color: 'neutral-600' },
    { text: '  ✓ changes/create-task-001/spec.md', delay: 20, color: 'neutral-500' },
    { text: '  ✓ changes/create-task-001/tasks.md', delay: 20, color: 'neutral-500' },
    { text: '→ implementing...', delay: 30, color: 'neutral-600' },
    { text: '  ✓ src/task-management/tasks/criar-task.ts', delay: 20, color: 'neutral-500' },
    { text: '  ✓ src/task-management/tasks/Task.ts', delay: 20, color: 'neutral-500' },
    { text: '  ✓ tests passing (95% coverage)', delay: 20, color: 'neutral-500' },
    { text: 'done!', delay: 40, color: 'white' },
  ], []);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      // Animation complete - restart after delay
      const restartTimeout = setTimeout(() => {
        setTerminalLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(restartTimeout);
    }

    if (!isTyping) return;

    const currentLine = lines[currentLineIndex];
    const typingDelay = currentLine.delay;

    if (currentCharIndex < currentLine.text.length) {
      // Typing character by character
      const timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingDelay);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next line
      const timeout = setTimeout(() => {
        setTerminalLines([...terminalLines, currentLine.text]);
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, isTyping, terminalLines, lines]);

  const renderLine = (text: string, index: number) => {
    const line = lines.find(l => l.text === text);
    if (!line) return null;

    if (line.color === 'input') {
      return (
        <div key={index}>
          <span className="text-neutral-600">$ </span>
          <span className="text-neutral-300">{text.replace('$ ', '')}</span>
        </div>
      );
    }

    if (line.highlight) {
      const parts = text.split(line.highlight);
      return (
        <div key={index} className={`text-${line.color}`}>
          {parts[0]}<span className="text-white">{line.highlight}</span>{parts[1]}
        </div>
      );
    }

    return (
      <div key={index} className={`text-${line.color}`}>
        {text}
      </div>
    );
  };

  const currentLine = lines[currentLineIndex];
  const currentText = currentLine ? currentLine.text.slice(0, currentCharIndex) : '';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="container relative mx-auto px-4 md:px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small context text */}
          <p className="text-sm font-mono text-neutral-600 mb-16">
            {t('badge')}
          </p>

          {/* Main headline - Very simple, professional */}
          <h1 className="text-5xl md:text-7xl font-mono font-normal tracking-tight mb-8 text-white leading-tight">
            {t('title')}
          </h1>

          {/* Subtitle - Clear value prop */}
          <p className="text-lg md:text-xl font-mono text-neutral-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>

          {/* Simple CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 justify-center px-8 py-3 bg-white text-black font-mono text-sm hover:bg-neutral-200 transition-colors"
            >
              <Download className="h-4 w-4" />
              {t('cta.install')}
            </Link>
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-800 text-neutral-400 font-mono text-sm hover:border-neutral-600 hover:text-neutral-300 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              {t('cta.docs')}
            </Link>
            <button
              className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-800 text-neutral-400 font-mono text-sm hover:border-neutral-600 hover:text-neutral-300 transition-colors cursor-pointer"
              aria-label={t('cta.demo')}
            >
              <Play className="h-4 w-4" />
              {t('cta.demo')}
            </button>
          </div>

          {/* Terminal demo - Real terminal style */}
          <div className="max-w-3xl mx-auto">
            <div className="border border-neutral-800 bg-black overflow-hidden">
              {/* Terminal header - minimal */}
              <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2 bg-neutral-950/30">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-neutral-800" />
                  <div className="h-3 w-3 rounded-full bg-neutral-800" />
                  <div className="h-3 w-3 rounded-full bg-neutral-800" />
                </div>
                <span className="text-xs font-mono text-neutral-700 ml-3">~/project</span>
              </div>

              {/* Terminal content - animated typewriter style */}
              <div className="p-4 font-mono text-sm text-left min-h-[295px]">
                <div className="space-y-1">
                  {/* Render completed lines */}
                  {terminalLines.map((line, index) => renderLine(line, index))}

                  {/* Render current line being typed */}
                  {currentLine && currentCharIndex > 0 && (
                    <div>
                      {currentLine.color === 'input' ? (
                        <>
                          <span className="text-neutral-600">$ </span>
                          <span className="text-neutral-300">
                            {currentText.replace('$ ', '')}
                            <span className="animate-pulse">▊</span>
                          </span>
                        </>
                      ) : currentLine.highlight && currentText.includes(currentLine.highlight) ? (
                        <span className={`text-${currentLine.color}`}>
                          {currentText.split(currentLine.highlight)[0]}
                          <span className="text-white">{currentLine.highlight}</span>
                          {currentText.split(currentLine.highlight)[1]}
                          <span className="animate-pulse">▊</span>
                        </span>
                      ) : (
                        <span className={`text-${currentLine.color}`}>
                          {currentText}
                          <span className="animate-pulse">▊</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Simple stats - no boxes, just text */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-mono font-normal text-white mb-4">85%</div>
              <div className="text-sm font-mono text-neutral-500">{t('metrics.hallucinations')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-mono font-normal text-white mb-4">78%</div>
              <div className="text-sm font-mono text-neutral-500">{t('metrics.rework')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-mono font-normal text-white mb-4">80%+</div>
              <div className="text-sm font-mono text-neutral-500">{t('metrics.coverage')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-mono font-normal text-white mb-4">&lt;10%</div>
              <div className="text-sm font-mono text-neutral-500">{t('metrics.error')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
