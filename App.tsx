/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from "react";
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trash2,
  Search, 
  Award,
  BookMarked,
  Languages,
  Eye,
  EyeOff,
  Compass,
  Check,
  AlertCircle
} from "lucide-react";
import { EXERCISES, CompactSentence, ExerciseSection } from "./data";

// Type definitions for interactive states
interface SelectedAnswers {
  [key: string]: string; // key is sentenceId_blankId -> selected answer
}

interface RevealedSentences {
  [sentenceId: string]: boolean; // key is sentenceId -> whether translation/solution is expanded
}

// Custom segment parser for the bracket notation [blankId|hint|correctAnswer|distractors|explanation]
interface ParseResult {
  segments: {
    type: "text" | "blank";
    text?: string;
    blankId?: string;
    hint?: string;
    correctAnswer?: string;
    choices?: string[];
    explanation?: string;
  }[];
  allCorrect: Record<string, string>; // blankId -> correctAnswer
  allExplanations: Record<string, string>; // blankId -> explanation
}

export default function App() {
  // Application State
  const [activeSectionId, setActiveSectionId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<SelectedAnswers>({});
  const [revealedSolutions, setRevealedSolutions] = useState<RevealedSentences>({});
  const [activePopover, setActivePopover] = useState<{ sentenceId: string; blankId: string } | null>(null);
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // References
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setActivePopover(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Parse sentence function memoized for performance
  const parsedSentencesMap = useMemo(() => {
    const map: Record<string, ParseResult> = {};
    EXERCISES.forEach((sec) => {
      sec.sentences.forEach((sen) => {
        const segments: ParseResult["segments"] = [];
        const allCorrect: Record<string, string> = {};
        const allExplanations: Record<string, string> = {};

        const regex = /\[([^\]]+)\]/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(sen.text)) !== null) {
          const matchIndex = match.index;
          if (matchIndex > lastIndex) {
            segments.push({
              type: "text",
              text: sen.text.substring(lastIndex, matchIndex),
            });
          }

          const parts = match[1].split("|");
          if (parts.length >= 3) {
            const blankId = parts[0];
            const hint = parts[1];
            const correctAnswer = parts[2];
            const distractorsStr = parts[3] || "";
            const explanation = parts[4] || "";

            const distractors = distractorsStr.split(",").map((s) => s.trim()).filter(Boolean);
            // Deduplicate choices
            const choices = Array.from(new Set([correctAnswer, ...distractors])).sort(() => Math.random() - 0.5);

            allCorrect[blankId] = correctAnswer;
            allExplanations[blankId] = explanation;

            segments.push({
              type: "blank",
              blankId,
              hint,
              correctAnswer,
              choices,
              explanation,
            });
          }
          lastIndex = regex.lastIndex;
        }

        if (lastIndex < sen.text.length) {
          segments.push({
            type: "text",
            text: sen.text.substring(lastIndex),
          });
        }

        map[sen.id] = { segments, allCorrect, allExplanations };
      });
    });
    return map;
  }, []);

  // Compute stats
  const stats = useMemo(() => {
    let totalBlanksCount = 0;
    let answeredCorrectlyOverall = 0;
    const sectionStats: Record<number, { total: number; answered: number; correct: number }> = {};

    EXERCISES.forEach((sec) => {
      let secTotal = 0;
      let secAnswered = 0;
      let secCorrect = 0;

      sec.sentences.forEach((sen) => {
        const parsed = parsedSentencesMap[sen.id];
        if (parsed) {
          parsed.segments.forEach((seg) => {
            if (seg.type === "blank" && seg.blankId) {
              secTotal++;
              totalBlanksCount++;
              const userAns = userAnswers[`${sen.id}_${seg.blankId}`];
              if (userAns) {
                secAnswered++;
                if (userAns === seg.correctAnswer) {
                  secCorrect++;
                  answeredCorrectlyOverall++;
                }
              }
            }
          });
        }
      });

      sectionStats[sec.id] = {
        total: secTotal,
        answered: secAnswered,
        correct: secCorrect,
      };
    });

    return {
      totalBlanksCount,
      answeredCorrectlyOverall,
      sectionStats,
    };
  }, [userAnswers, parsedSentencesMap]);

  // Handle Search Filtering
  const filteredExercises = useMemo(() => {
    if (!searchQuery.trim()) return EXERCISES;
    const query = searchQuery.toLowerCase();
    return EXERCISES.map((sec) => {
      const matchingSentences = sec.sentences.filter((sen) => {
        const parsed = parsedSentencesMap[sen.id];
        // match spanish text (plain without bracket info) or armenian translation
        const plainSpanish = parsed 
          ? parsed.segments.map(s => s.type === "text" ? s.text : s.blankId).join(" ")
          : sen.text;
        return (
          plainSpanish.toLowerCase().includes(query) ||
          sen.translation.toLowerCase().includes(query) ||
          sen.explanation.toLowerCase().includes(query) ||
          sec.title.toLowerCase().includes(query)
        );
      });
      return {
        ...sec,
        sentences: matchingSentences,
      };
    }).filter((sec) => sec.sentences.length > 0);
  }, [searchQuery, parsedSentencesMap]);

  const activeSection = useMemo(() => {
    return EXERCISES.find((sec) => sec.id === activeSectionId) || EXERCISES[0];
  }, [activeSectionId]);

  // Action: Select option for a blank
  const handleSelectOption = (sentenceId: string, blankId: string, optionValue: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`${sentenceId}_${blankId}`]: optionValue,
    }));
    setActivePopover(null);
  };

  // Action: Reset Section Answers
  const handleResetSection = (sectionId: number) => {
    const sec = EXERCISES.find((s) => s.id === sectionId);
    if (!sec) return;
    const keysToRemove: string[] = [];
    sec.sentences.forEach((sen) => {
      const parsed = parsedSentencesMap[sen.id];
      if (parsed) {
        parsed.segments.forEach((seg) => {
          if (seg.type === "blank" && seg.blankId) {
            keysToRemove.push(`${sen.id}_${seg.blankId}`);
          }
        });
      }
    });

    setUserAnswers((prev) => {
      const updated = { ...prev };
      keysToRemove.forEach((key) => delete updated[key]);
      return updated;
    });

    // Collapse solutions for this section
    setRevealedSolutions((prev) => {
      const updated = { ...prev };
      sec.sentences.forEach((sen) => {
        updated[sen.id] = false;
      });
      return updated;
    });
  };

  // Action: Reset All Answers and Solutions Completely
  const handleResetAll = () => {
    setUserAnswers({});
    setRevealedSolutions({});
    setActivePopover(null);
  };

  // Action: Reset single sentence answers
  const handleResetSentence = (sentenceId: string) => {
    const keysToRemove: string[] = [];
    const parsed = parsedSentencesMap[sentenceId];
    if (parsed) {
      parsed.segments.forEach((seg) => {
        if (seg.type === "blank" && seg.blankId) {
          keysToRemove.push(`${sentenceId}_${seg.blankId}`);
        }
      });
    }
    setUserAnswers((prev) => {
      const updated = { ...prev };
      keysToRemove.forEach((key) => delete updated[key]);
      return updated;
    });
    setRevealedSolutions((prev) => ({
      ...prev,
      [sentenceId]: false,
    }));
  };

  // Toggle reveling solution for single sentence
  const toggleSentenceReveal = (sentenceId: string, e?: React.MouseEvent) => {
    // If clicking a selection button or popover inside, prevent expanding
    if (e) {
      const target = e.target as HTMLElement;
      if (target.closest(".blank-interactive-btn") || target.closest(".popover-container")) {
        return;
      }
    }
    setRevealedSolutions((prev) => ({
      ...prev,
      [sentenceId]: !prev[sentenceId],
    }));
  };

  // Render highlighted correct spanish text
  const renderCompletedSpanish = (senId: string) => {
    const parsed = parsedSentencesMap[senId];
    if (!parsed) return "";
    return parsed.segments.map((seg, idx) => {
      if (seg.type === "text") {
        return <span key={idx}>{seg.text}</span>;
      } else {
        return (
          <span 
            key={idx} 
            className="font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 mx-0.5"
          >
            {seg.correctAnswer}
          </span>
        );
      }
    });
  };

  const currentSectionStats = stats.sectionStats[activeSectionId] || { total: 0, answered: 0, correct: 0 };
  const overallPercentage = Math.round((stats.answeredCorrectlyOverall / (stats.totalBlanksCount || 1)) * 100);

  return (
    <div className="min-h-screen bg-bento-bg text-bento-text font-sans flex flex-col selection:bg-bento-accent/15 selection:text-bento-accent">
      
      {/* Top Stylish Bento Header */}
      <header className="bg-bento-card border-b border-bento-border sticky top-0 z-40 shadow-[0_1px_2px_0_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-bento-accent rounded-xl text-white shadow-md shadow-bento-accent/15">
              <Languages className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-display text-bento-text tracking-tight flex items-center gap-2">
                Español Master <span className="text-bento-accent">Արմ</span>
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Իսպաներենի քերականության ինտերակտիվ վարժություններ
              </p>
            </div>
          </div>

          {/* Search bar and Badge info */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Որոնել բառեր կամ կանոններ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-bento-border bg-bento-bg hover:bg-slate-50/80 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-bento-accent/55 transition-all font-medium placeholder:text-slate-450 text-bento-text"
              />
            </div>
            <span className="shrink-0 text-[11px] bg-bento-accent/10 text-bento-accent px-3 py-1.5 rounded-full font-bold tracking-wide">
              Spanish-Armenian Bridge
            </span>
          </div>
        </div>
      </header>

      {/* Main Container styled as a high density Bento Grid Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* Sidebar Navigation - Bento Box Left */}
        <aside className="w-full lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
          
          {/* General Progress Card - Bento Container */}
          <div className="bg-bento-card rounded-2xl p-5 border border-bento-border shadow-bento">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">ԸՆԴՀԱՆՈՒՐ ԱՌԱՋԸՆԹԱՑ</span>
              <Award className="w-4 h-4 text-bento-accent" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900">{stats.answeredCorrectlyOverall}</span>
              <span className="text-xs text-slate-400 font-bold">/ {stats.totalBlanksCount} ճիշտ</span>
            </div>
            {/* Elegant horizontal bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-bento-accent h-full rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${overallPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-2 text-xs text-slate-500 font-semibold mb-4">
              <span>{overallPercentage}% հաջողված</span>
              <span>{stats.totalBlanksCount} հարց</span>
            </div>

            <button
              onClick={handleResetAll}
              className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-rose-200/50 hover:border-rose-300"
            >
              <Trash2 className="w-4 h-4 shrink-0 text-rose-600" />
              <span>Ջնջել բոլոր արդյունքները</span>
            </button>
          </div>

          {/* Exercise List / Navigation Sidebar - Bento Container */}
          <div className="bg-bento-card rounded-2xl border border-bento-border p-4 flex flex-col gap-2 shadow-bento">
            <h3 className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase px-2 mb-2 flex items-center justify-between">
              <span>ՄՈԴՈՒԼՆԵՐ / MODULES</span>
              <BookMarked className="w-4 h-4 text-slate-400" />
            </h3>

            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-2 scrollbar-none snap-x">
              {filteredExercises.map((sec) => {
                const isActive = sec.id === activeSectionId;
                const secStats = stats.sectionStats[sec.id] || { total: 0, answered: 0, correct: 0 };
                const secPercent = secStats.total > 0 ? Math.round((secStats.correct / secStats.total) * 100) : 0;
                
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    className={`w-72 lg:w-full flex-shrink-0 text-left p-3.5 rounded-xl transition-all flex items-center justify-between pointer-events-auto snap-center border ${
                      isActive
                        ? "bg-slate-50 border-l-4 border-bento-accent border-y-bento-border border-r-bento-border font-semibold shadow-xs"
                        : "bg-bento-card hover:bg-[#f8fafc]/50 text-slate-700 border-transparent hover:border-bento-border"
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 max-w-[80%]">
                      <span className={`text-[10px] font-extrabold ${isActive ? "text-bento-accent" : "text-bento-accent/80"}`}>
                        ՎԱՐԺՈՒԹՅՈՒՆ {sec.id}
                      </span>
                      <span className="text-xs font-bold truncate tracking-tight text-bento-text">{sec.title.replace(/^\d+\.\s*/, '')}</span>
                    </div>

                    {/* Badge showing topic answers */}
                    <div className="flex flex-col items-end shrink-0 select-none">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive 
                          ? "bg-bento-accent/10 text-bento-accent" 
                          : secStats.correct === secStats.total && secStats.total > 0
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-150"
                          : "bg-slate-100 text-slate-600"
                      }`}>
                        {secStats.correct} / {secStats.total}
                      </span>
                      {secStats.total > 0 && (
                        <span className="text-[10px] font-semibold mt-0.5 text-slate-400">
                          {secPercent}%
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Content Area - Bento Grid Right */}
        <section className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          
          {/* Active Topic Description - Bento Card */}
          <div className="bg-bento-card rounded-2xl p-6 border border-bento-border shadow-bento flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-bento-accent font-extrabold text-[10px] tracking-wider uppercase mb-1">
                <Compass className="w-4 h-4" />
                <span>ԹԵՄԱՅԻ ԳՐԱՄԱՏԻԿԱ / TOPIC STUDY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-bento-text tracking-tight leading-snug">
                {activeSection.title}
              </h2>
              <p className="text-slate-750 text-base sm:text-lg mt-3 leading-relaxed font-medium">
                {activeSection.description}
              </p>
            </div>

            {/* Quick Actions Panel */}
            <div className="flex md:flex-col items-stretch gap-2.5 self-center md:self-auto w-full md:w-auto">
              <button
                onClick={() => handleResetSection(activeSectionId)}
                className="flex-1 md:flex-none py-2 px-4 bg-slate-100/80 hover:bg-slate-200/80 text-bento-text rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-transparent hover:border-slate-300/40"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>Սկզբնական վիճակ</span>
              </button>

              <button
                onClick={() => setShowAllTranslations(prev => !prev)}
                className={`flex-1 md:flex-none py-2 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  showAllTranslations 
                    ? "bg-bento-accent/10 text-bento-accent hover:bg-bento-accent/15 border border-bento-accent/30"
                    : "bg-slate-100/80 hover:bg-slate-200 hover:text-bento-text text-bento-text"
                }`}
              >
                {showAllTranslations ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showAllTranslations ? "Թաքցնել թարգմ." : "Բոլոր թարգմ."}</span>
              </button>
            </div>
          </div>

          {/* Section progress loader - Bento Card */}
          <div className="bg-bento-card rounded-2xl px-5 py-3.5 border border-bento-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-bento">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-bento-correct animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ԱՅՍ ԹԵՄԱՅԻ ԱՌԱՋԸՆԹԱՑԸ</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-64">
              <span className="text-xs font-extrabold text-slate-500 whitespace-nowrap">
                {currentSectionStats.correct} / {currentSectionStats.total} ճիշտ
              </span>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-bento-correct h-full rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${currentSectionStats.total > 0 ? (currentSectionStats.correct / currentSectionStats.total) * 100 : 0}%` }}
                ></div>
              </div>
              <span className="text-xs font-extrabold text-slate-800">
                {currentSectionStats.total > 0 ? Math.round((currentSectionStats.correct / currentSectionStats.total) * 100) : 0}%
              </span>
            </div>
          </div>

          {/* List of Sentences - Staggered Bento style container list */}
          <div className="flex flex-col gap-4">
            {activeSection.sentences.length === 0 ? (
              <div className="bg-slate-50 border border-dashed border-bento-border rounded-2xl p-12 text-center text-slate-500">
                <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="font-semibold">Տվյալներով ոչինչ չգտնվեց</p>
                <p className="text-xs mt-1">Փորձեք փոխել որոնման բառերը</p>
              </div>
            ) : (
              activeSection.sentences.map((sen, index) => {
                const parsed = parsedSentencesMap[sen.id];
                const isRevealed = revealedSolutions[sen.id] || showAllTranslations;

                return (
                  <div
                    id={`card_${sen.id}`}
                    key={sen.id}
                    className={`bg-bento-card rounded-2xl border transition-all duration-200 ${
                      isRevealed 
                        ? "border-bento-accent/40 shadow-[0_4px_16px_rgba(79,70,229,0.06)]" 
                        : "border-bento-border hover:border-slate-300 shadow-bento"
                    }`}
                  >
                    
                    {/* Sentence Body Area */}
                    <div 
                      onClick={(e) => toggleSentenceReveal(sen.id, e)}
                      className="p-5 sm:p-6 cursor-pointer select-none"
                    >
                      <div className="flex items-start justify-between gap-4">
                        
                        {/* Sentence content with interactive fields */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                              ՆԱԽԱԴԱՍՈՒԹՅՈՒՆ {index + 1}
                            </span>
                            {parsed.segments.some(seg => seg.type === 'blank' && !!userAnswers[`${sen.id}_${seg.blankId}`]) && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleResetSentence(sen.id);
                                }}
                                title="Մաքրել պատասխանները"
                                className="py-1 px-2.5 hover:bg-rose-50 text-rose-600 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer border border-transparent hover:border-rose-250/50"
                              >
                                <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
                                <span>Մաքրել</span>
                              </button>
                            )}
                          </div>

                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed py-2 flex flex-wrap items-center gap-x-3 gap-y-5">
                            {parsed.segments.map((seg, idx) => {
                              if (seg.type === "text") {
                                return (
                                  <span key={idx} className="text-[#1e293b] font-medium leading-relaxed">
                                    {seg.text}
                                  </span>
                                );
                              } else {
                                const bId = seg.blankId!;
                                const ansKey = `${sen.id}_${bId}`;
                                const userVal = userAnswers[ansKey];
                                const isAnswered = !!userVal;
                                const isCorrect = isAnswered && userVal === seg.correctAnswer;
                                const isPopoverOpen = activePopover?.sentenceId === sen.id && activePopover?.blankId === bId;

                                return (
                                  <div 
                                    key={idx} 
                                    className="relative inline-block popover-container"
                                  >
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (isPopoverOpen) {
                                          setActivePopover(null);
                                        } else {
                                          setActivePopover({ sentenceId: sen.id, blankId: bId });
                                        }
                                      }}
                                      className={`blank-interactive-btn flex items-center gap-2.5 focus:outline-hidden text-lg sm:text-xl md:text-2xl font-black px-3.5 py-2 rounded-xl transition-all border outline-hidden ${
                                        isAnswered
                                          ? isCorrect
                                            ? "bg-emerald-50/70 text-emerald-800 border-bento-correct/40 shadow-2xs ring-2 ring-emerald-50/30"
                                            : "bg-rose-50/70 text-rose-800 border-bento-wrong/40 shadow-2xs ring-2 ring-rose-50/30 animate-shake"
                                          : isPopoverOpen
                                          ? "bg-bento-accent/10 text-bento-accent border-bento-accent ring-2 ring-bento-accent/10"
                                          : "bg-amber-50/45 hover:bg-amber-100/50 text-amber-950 border-amber-250 border-dashed hover:border-amber-400 shadow-2xs"
                                      }`}
                                    >
                                      {/* Dots or actual Answer value */}
                                      <span className="underline decoration-slate-400 underline-offset-4 font-black text-xl sm:text-2xl md:text-3xl text-bento-accent">
                                        {isAnswered ? userVal : "․․․․․․․․․․"}
                                      </span>

                                      {/* Prompt infinitive note */}
                                      <span className="text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-lg px-2.5 py-1 shadow-2xs shrink-0">
                                        {seg.hint}
                                      </span>

                                      {/* Visual right check status marker */}
                                      {isAnswered && (
                                        isCorrect ? (
                                          <CheckCircle2 className="w-4 h-4 text-bento-correct shrink-0 animate-ping shadow-xs rounded-full p-0.5" style={{ animationIterationCount: 1, animationDuration: '0.6s' }} />
                                        ) : (
                                          <XCircle className="w-4 h-4 text-bento-wrong shrink-0" />
                                        )
                                      )}
                                    </button>

                                    {/* Interactive Dropdown choices popover */}
                                    {isPopoverOpen && (
                                      <div
                                        ref={popoverRef}
                                        className="absolute left-0 top-full mt-2 bg-bento-card border border-bento-border rounded-xl shadow-xl p-2 z-50 w-64 flex flex-col gap-1 anim-fade-in"
                                      >
                                        <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest px-2 pb-1.5 border-b border-bento-border flex items-center justify-between">
                                          <span>ԸՆՏՐԵՔ ՃԻՇՏԸ / OPTIONS:</span>
                                          <span className="italic font-bold text-bento-accent">{seg.hint}</span>
                                        </div>
                                        <div className="flex flex-col gap-1 mt-1.5 animate-fade-in">
                                          {seg.choices?.map((opt, oIdx) => (
                                            <button
                                              key={oIdx}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleSelectOption(sen.id, bId, opt);
                                              }}
                                              className="w-full text-left p-2.5 rounded-lg hover:bg-[#f1f5f9] hover:text-bento-accent active:bg-slate-205 text-sm font-bold border border-transparent hover:border-bento-border transition-all flex items-center justify-between text-slate-700"
                                            >
                                              <span>{opt}</span>
                                              {userVal === opt && <Check className="w-4 h-4 text-bento-accent" />}
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>

                        {/* Accordion toggle indicator */}
                        <div className="shrink-0 pt-1">
                          <div className={`p-1.5 rounded-full border transition-colors ${
                            isRevealed 
                              ? "bg-bento-accent/10 border-bento-accent/30 text-bento-accent" 
                              : "bg-slate-50 border-slate-150 text-slate-400"
                          }`}>
                            {isRevealed ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                        </div>

                      </div>

                      {/* Display per-blank dynamic feedback comments */}
                      {parsed.segments.some(seg => seg.type === 'blank' && !!userAnswers[`${sen.id}_${seg.blankId}`]) && (
                        <div className="mt-3.5 py-2.5 px-3 bg-slate-50/50 border border-slate-100 rounded-xl flex flex-col gap-1.5 divide-y divide-slate-100/50">
                          {parsed.segments.map((seg, idx) => {
                            if (seg.type !== 'blank') return null;
                            const userAns = userAnswers[`${sen.id}_${seg.blankId}`];
                            if (!userAns) return null;
                            const isCorrect = userAns === seg.correctAnswer;

                            return (
                              <div key={idx} className="text-xs leading-relaxed pt-1.5 first:pt-0 font-medium">
                                <span className={`font-bold mr-1 ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
                                  {userAns} ({seg.hint}): {isCorrect ? "✓ Correcto / Ճիշտ է" : "✗ Incorrecto / Սխալ է"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Accordion dropdown details: Armenian Translation and Solution */}
                    {isRevealed && (
                      <div className="border-t border-bento-border bg-[#f8fafc]/40 rounded-b-2xl p-5 sm:p-6 flex flex-col gap-5 box-border">
                        
                        {/* Armenian Translation WITHOUT answers */}
                        <div>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                            ԱՐՏԱՀԱՅՏՈՒԹՅԱՆ ՀԱՅԵՐԵՆ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆԸ
                          </h4>
                          <blockquote className="border-l-4 border-bento-accent pl-4 py-3 text-bento-arm font-extrabold text-xl sm:text-2xl md:text-3xl leading-relaxed bg-white rounded-r-lg shadow-xs border-y border-r border-[#e2e8f0]">
                            {sen.translation}
                          </blockquote>
                        </div>

                        {/* Complete sentence and correct answer solution */}
                        <div className="bg-white border border-bento-border rounded-xl p-5 shadow-xs">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">
                            ՃԻՇՏ ՊԱՏԱՍԽԱՆԸ / RESPUESTA CORRECTA
                          </h4>

                          <div className="text-xl sm:text-2xl md:text-3xl text-slate-900 font-bold leading-relaxed">
                            {renderCompletedSpanish(sen.id)}
                          </div>
                        </div>

                      </div>
                    )}

                  </div>
                );
              })
            )}
          </div>

        </section>

      </main>

      {/* Modern Compact Bento Footer */}
      <footer className="bg-bento-card py-8 text-slate-400 border-t border-bento-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm font-bold text-bento-accent mb-1">
            Español Master Արմ - Իսպաներենի Ինտերակտիվ Գրամատիկայի Տեղեկատու
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
            Պատրաստված է հատուկ իսպաներենի քերականությունը յուրացնելու համար: Բոլոր իրավունքները պաշտպանված են &copy; 2026:
          </p>
        </div>
      </footer>

    </div>
  );
}
