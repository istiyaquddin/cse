/**
 * C PROGRAMMING MIDTERM HANDBOOK - STUDENT TRACKER ENGINE
 * Tracks all official syllabus topics across Chapters 1, 2, and 3,
 * the 50-problem matrix, and MCQ scores with localStorage persistence.
 */

const Tracker = (function() {
  const STORAGE_KEY = 'c_midterm_handbook_tracker_v2';
  
  let state = {
    syllabusProgress: {}, // { 'ch1_1': true, 'ch2_3': true, ... }
    problemStatus: {},    // { 'p1_1': 'solved' | 'practicing' | 'unsolved' }
    quizAnswers: {},      // { 0: { selected: 1, isCorrect: true } }
    activeChapterId: 1,
    theme: 'dark'
  };

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        state = Object.assign(state, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('LocalStorage unavailable, running in-memory:', e);
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save to LocalStorage:', e);
    }
    notify();
  }

  function notify() {
    window.dispatchEvent(new CustomEvent('tracker:updated', { detail: getMetrics() }));
  }

  // --- SYLLABUS TOPIC CHECKLIST ---
  function toggleSyllabusTopic(topicId) {
    if (state.syllabusProgress[topicId]) {
      delete state.syllabusProgress[topicId];
    } else {
      state.syllabusProgress[topicId] = true;
    }
    save();
    return !!state.syllabusProgress[topicId];
  }

  function isSyllabusTopicCompleted(topicId) {
    return !!state.syllabusProgress[topicId];
  }

  function getChapterCompletedCount(chapterId) {
    let count = 0;
    HandbookData.syllabus.forEach(t => {
      if (t.chapterId === chapterId && state.syllabusProgress[t.id]) {
        count++;
      }
    });
    return count;
  }

  // --- ACTIVE CHAPTER SELECTION ---
  function setActiveChapter(chapId) {
    state.activeChapterId = parseInt(chapId);
    save();
  }

  function getActiveChapter() {
    return state.activeChapterId || 1;
  }

  // --- PROBLEM STATUS ---
  function cycleProblemStatus(problemId) {
    const current = state.problemStatus[problemId] || 'unsolved';
    let next = 'unsolved';
    if (current === 'unsolved') next = 'practicing';
    else if (current === 'practicing') next = 'solved';
    else next = 'unsolved';

    state.problemStatus[problemId] = next;
    save();
    return next;
  }

  function getProblemStatus(problemId) {
    return state.problemStatus[problemId] || 'unsolved';
  }

  // --- QUIZ RECORDS ---
  function recordQuizAnswer(qIndex, selectedOption, isCorrect) {
    state.quizAnswers[qIndex] = {
      selected: selectedOption,
      isCorrect: isCorrect
    };
    save();
  }

  function getQuizAnswer(qIndex) {
    return state.quizAnswers[qIndex];
  }

  // --- THEME ---
  function setTheme(theme) {
    state.theme = theme;
    save();
  }

  function getTheme() {
    return state.theme || 'dark';
  }

  // --- ROADMAP MUST-SOLVE ITEMS ---
  function toggleRoadmapItem(itemId) {
    state.roadmapProgress = state.roadmapProgress || {};
    if (state.roadmapProgress[itemId]) {
      delete state.roadmapProgress[itemId];
    } else {
      state.roadmapProgress[itemId] = true;
    }
    save();
    return !!state.roadmapProgress[itemId];
  }

  function isRoadmapItemCompleted(itemId) {
    state.roadmapProgress = state.roadmapProgress || {};
    return !!state.roadmapProgress[itemId];
  }

  function getRoadmapProgressCount() {
    state.roadmapProgress = state.roadmapProgress || {};
    return Object.keys(state.roadmapProgress).length;
  }

  // --- RESET ALL ---
  function resetAll() {
    state.syllabusProgress = {};
    state.problemStatus = {};
    state.quizAnswers = {};
    state.roadmapProgress = {};
    save();
  }

  // --- MASTER READINESS METRICS ---
  function getMetrics() {
    const totalSyllabus = HandbookData.syllabus.length;
    const completedSyllabus = Object.keys(state.syllabusProgress).length;
    const syllabusPercent = totalSyllabus > 0 ? Math.min(100, Math.round((completedSyllabus / totalSyllabus) * 100)) : 0;

    // Per Chapter (Dynamically calculated)
    const ch1Total = HandbookData.syllabus.filter(t => t.chapterId === 1).length;
    const ch1Done = getChapterCompletedCount(1);
    const ch2Total = HandbookData.syllabus.filter(t => t.chapterId === 2).length;
    const ch2Done = getChapterCompletedCount(2);
    const ch3Total = HandbookData.syllabus.filter(t => t.chapterId === 3).length;
    const ch3Done = getChapterCompletedCount(3);

    const totalProblems = HandbookData.problems.length;
    let solvedProblemsCount = 0;
    let practicingCount = 0;
    for (let key in state.problemStatus) {
      if (state.problemStatus[key] === 'solved') solvedProblemsCount++;
      else if (state.problemStatus[key] === 'practicing') practicingCount++;
    }
    const problemPercent = Math.min(100, Math.round((solvedProblemsCount / totalProblems) * 100));

    const quizAnswers = Object.values(state.quizAnswers);
    const totalQuiz = quizAnswers.length;
    const quizCorrectCount = quizAnswers.filter(answer => answer.isCorrect).length;
    const quizPercent = totalQuiz > 0 ? Math.round((quizCorrectCount / totalQuiz) * 100) : 0;

    // Overall Readiness: 50% Syllabus Coverage + 50% Problem Solving
    const overallReadiness = Math.round(
      (syllabusPercent * 0.50) + (problemPercent * 0.50)
    );

    let grade = 'Beginner';
    let gradeColor = '#94A3B8';
    if (overallReadiness >= 90) { grade = 'A+ (95%+ Ready)'; gradeColor = '#10B981'; }
    else if (overallReadiness >= 75) { grade = 'A (Midterm Ready)'; gradeColor = '#38BDF8'; }
    else if (overallReadiness >= 50) { grade = 'B (Good Progress)'; gradeColor = '#F59E0B'; }
    else if (overallReadiness >= 25) { grade = 'C (Keep Practicing)'; gradeColor = '#A855F7'; }

    return {
      totalSyllabus,
      completedSyllabus,
      syllabusPercent,
      ch1Total, ch1Done,
      ch2Total, ch2Done,
      ch3Total, ch3Done,
      totalProblems,
      solvedProblemsCount,
      practicingCount,
      problemPercent,
      totalQuiz,
      quizCorrectCount,
      quizPercent,
      overallReadiness,
      grade,
      gradeColor
    };
  }

  load();

  return {
    toggleSyllabusTopic,
    isSyllabusTopicCompleted,
    getChapterCompletedCount,
    setActiveChapter,
    getActiveChapter,
    cycleProblemStatus,
    getProblemStatus,
    recordQuizAnswer,
    getQuizAnswer,
    setTheme,
    getTheme,
    resetAll,
    getMetrics,
    toggleRoadmapItem,
    isRoadmapItemCompleted,
    getRoadmapProgressCount
  };
})();
