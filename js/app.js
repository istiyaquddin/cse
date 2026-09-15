/**
 * C PROGRAMMING MIDTERM HANDBOOK - MAIN APPLICATION CONTROLLER
 * Controls:
 * 1. Official Midterm Examination Syllabus 3-Column Checklist (matching user's screenshot)
 * 2. Multi-Chapter Navigation & Lesson Reader (Chapters 1, 2, and 3)
 * 3. 50-Problem Practice Track Sheet
 * 4. Interactive Midterm MCQ Quiz Engine
 * 5. Code Clipboard Copy & GCC Run Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const chapterSelectBoxEl = document.getElementById('chapterSelectBox');
  const sidebarTopicListEl = document.getElementById('sidebarTopicList');
  const mainCanvasEl = document.getElementById('mainCanvas');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const navTabBtns = document.querySelectorAll('.nav-tab-btn');
  const runModalEl = document.getElementById('runModal');
  const closeRunModalBtn = document.getElementById('closeRunModal');
  const toastContainerEl = document.getElementById('toastContainer');

  // State
  let currentView = 'syllabus'; // 'syllabus' | 'theory' | 'track-sheet' | 'roadmap' | 'quiz' | 'mistakes' | 'prediction' | 'debuglab' | 'theory-qa' | 'flowcharts'
  let currentTopicId = 'ch1_1';
  let activeChapterId = Tracker.getActiveChapter() || 1;
  let activeProblemFilter = 'all';
  let activeQuizFilter = 'all';
  let activePredictionFilter = 'all';
  let activeDebugFilter = 'all';
  let activeQaFilter = 'all';
  let activeQaSearch = '';
  let activeFlowchartTab = 'flowcharts';

  // --- INITIALIZATION ---
  initTheme();
  renderChapterSelector();
  renderSidebar();
  renderCurrentView();
  updateReadinessUI();

  // Listen to tracker changes
  window.addEventListener('tracker:updated', () => {
    updateReadinessUI();
    if (currentView === 'syllabus') {
      renderSyllabusView();
    }
  });

  // Delegated click listener for any problem modal triggers across views
  if (mainCanvasEl) {
    mainCanvasEl.addEventListener('click', (e) => {
      const openBtn = e.target.closest('[data-open-modal]');
      if (openBtn) {
        e.stopPropagation();
        const pid = openBtn.dataset.openModal;
        openProblemPathModal(pid);
      }
    });
  }

  // --- THEME ENGINE ---
  function initTheme() {
    const savedTheme = Tracker.getTheme();
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    Tracker.setTheme(next);
    updateThemeIcon(next);
    showToast(`Switched to ${next.toUpperCase()} mode`);
  }

  function updateThemeIcon(theme) {
    if (themeToggleBtn) {
      themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // --- TOP NAVBAR NAVIGATION TABS ---
  navTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      window.location.hash = currentView;
      renderCurrentView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  function setActiveNavTab(viewName) {
    navTabBtns.forEach(b => {
      if (b.dataset.view === viewName) b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  // --- CHAPTER SELECTOR RENDERING ---
  function renderChapterSelector() {
    if (!chapterSelectBoxEl) return;
    chapterSelectBoxEl.innerHTML = '';

    HandbookData.chapters.forEach(chap => {
      const isCurrent = chap.id === activeChapterId;
      const completed = Tracker.getChapterCompletedCount(chap.id);
      const total = HandbookData.syllabus.filter(t => t.chapterId === chap.id).length;

      const btn = document.createElement('button');
      btn.className = `chapter-btn ${isCurrent ? 'active' : ''}`;
      btn.innerHTML = `
        <span>${chap.name}</span>
        <span style="font-size: 0.72rem; opacity: 0.85;">${completed}/${total}</span>
      `;

      btn.addEventListener('click', () => {
        activeChapterId = chap.id;
        Tracker.setActiveChapter(chap.id);
        
        // Find first topic of this chapter
        const firstTopic = HandbookData.syllabus.find(t => t.chapterId === activeChapterId);
        if (firstTopic) currentTopicId = firstTopic.id;

        renderChapterSelector();
        renderSidebar();
        if (currentView === 'theory') {
          renderTheoryView();
        }
      });

      chapterSelectBoxEl.appendChild(btn);
    });
  }

  // --- LEFT SIDEBAR TOPIC LIST ---
  function renderSidebar() {
    if (!sidebarTopicListEl) return;
    sidebarTopicListEl.innerHTML = '';

    const chapterTopics = HandbookData.syllabus.filter(t => t.chapterId === activeChapterId);

    chapterTopics.forEach(topic => {
      const isCompleted = Tracker.isSyllabusTopicCompleted(topic.id);
      const isActive = topic.id === currentTopicId && currentView === 'theory';

      const li = document.createElement('li');
      li.className = `topic-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
      li.dataset.topicId = topic.id;
      li.innerHTML = `
        <span style="display: flex; align-items: center; gap: 0.5rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${topic.number}.</span>
          <span>${topic.title}</span>
        </span>
        <div class="topic-status-dot" title="${isCompleted ? 'Completed' : 'Not completed'}"></div>
      `;

      li.addEventListener('click', () => {
        currentTopicId = topic.id;
        currentView = 'theory';
        setActiveNavTab('theory');
        renderSidebar();
        renderTheoryView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      sidebarTopicListEl.appendChild(li);
    });
  }

  // --- VIEW DISPATCHER ---
  function renderCurrentView() {
    if (currentView === 'syllabus') {
      renderSyllabusView();
    } else if (currentView === 'theory') {
      renderTheoryView();
    } else if (currentView === 'track-sheet') {
      renderTrackSheetView();
    } else if (currentView === 'roadmap') {
      renderRoadmapView();
    } else if (currentView === 'quiz') {
      renderQuizView();
    } else if (currentView === 'mistakes') {
      renderMistakesView();
    } else if (currentView === 'prediction') {
      renderOutputPredictionView();
    } else if (currentView === 'debuglab') {
      renderDebuggingLabView();
    } else if (currentView === 'theory-qa') {
      renderTheoryQuestionsView();
    } else if (currentView === 'flowcharts') {
      renderFlowchartsView();
    }
  }

  // =========================================================================
  // VIEW 1: OFFICIAL MIDTERM EXAMINATION SYLLABUS (MATCHING USER SCREENSHOT)
  // =========================================================================
  function renderSyllabusView() {
    const m = Tracker.getMetrics();

    // Group topics into the 3 columns
    const col1 = HandbookData.syllabus.filter(t => t.chapterId === 1);
    const col2 = HandbookData.syllabus.filter(t => t.chapterId === 2);
    const col3 = HandbookData.syllabus.filter(t => t.chapterId === 3);

    mainCanvasEl.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <h1 class="syllabus-hero-title">Midterm Examination Syllabus</h1>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: -1rem; margin-bottom: 1.5rem;">
          Official university curriculum track sheet. Click any checkbox to mark a topic as mastered. Click <strong>"Study ➔"</strong> to open its full lesson, visual memory diagrams, and code.
        </p>

        <!-- Progress Bar Card -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span style="font-weight: 700; font-size: 0.9rem;">Overall Syllabus Mastery</span>
            <span id="syllabusProgressCountText" style="font-weight: 800; color: var(--accent-cyan); font-family: var(--font-heading); font-size: 1.1rem;">
              ${m.completedSyllabus} / ${m.totalSyllabus} Topics (${m.syllabusPercent}%)
            </span>
          </div>
          <div class="track-progress-bar" style="height: 10px;">
            <div id="syllabusProgressFillBar" class="track-progress-fill" style="width: ${m.syllabusPercent}%;"></div>
          </div>
        </div>
      </div>

      <!-- 3-Column Syllabus Grid (Exact match of user screenshot) -->
      <div class="syllabus-grid">
        
        <!-- Column 1: Fundamentals -->
        <div class="syllabus-col-card">
          <div class="syllabus-col-header">
            <span>1. Fundamentals of Computer and C</span>
            <span class="syllabus-col-count" id="col1CountText">${m.ch1Done} / ${m.ch1Total}</span>
          </div>
          <div class="syllabus-items-list" id="col1List">
            ${renderSyllabusColumnRows(col1)}
          </div>
        </div>

        <!-- Column 2: Operators, Input and Output -->
        <div class="syllabus-col-card">
          <div class="syllabus-col-header">
            <span>2. Operators, Input and Output</span>
            <span class="syllabus-col-count" id="col2CountText">${m.ch2Done} / ${m.ch2Total}</span>
          </div>
          <div class="syllabus-items-list" id="col2List">
            ${renderSyllabusColumnRows(col2)}
          </div>
        </div>

        <!-- Column 3: Control Statements -->
        <div class="syllabus-col-card">
          <div class="syllabus-col-header">
            <span>3. Control Statements</span>
            <span class="syllabus-col-count" id="col3CountText">${m.ch3Done} / ${m.ch3Total}</span>
          </div>
          <div class="syllabus-items-list" id="col3List">
            ${renderSyllabusColumnRows(col3)}
          </div>
        </div>

      </div>
    `;

    bindSyllabusInteractions();
  }

  function renderSyllabusColumnRows(topicList) {
    return topicList.map(t => {
      const isDone = Tracker.isSyllabusTopicCompleted(t.id);
      return `
        <div class="syllabus-item-row ${isDone ? 'completed' : ''}" data-topic-id="${t.id}">
          <div class="syllabus-checkbox ${isDone ? 'checked' : ''}" data-action="check" title="Toggle Mastery"></div>
          <div class="syllabus-item-text" data-action="study">
            <div>${t.title}</div>
            <button class="syllabus-study-btn" data-action="study">Study Lesson ➔</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function bindSyllabusInteractions() {
    mainCanvasEl.querySelectorAll('.syllabus-item-row').forEach(row => {
      const topicId = row.dataset.topicId;
      
      // Clicking checkbox toggles completion
      const checkbox = row.querySelector('.syllabus-checkbox');
      checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        const newState = Tracker.toggleSyllabusTopic(topicId);
        checkbox.classList.toggle('checked', newState);
        row.classList.toggle('completed', newState);
        renderChapterSelector();
        renderSidebar();

        // Update progress bar and column counts live
        const m = Tracker.getMetrics();
        const progressCountEl = document.getElementById('syllabusProgressCountText');
        const fillEl = document.getElementById('syllabusProgressFillBar');
        if (progressCountEl) progressCountEl.innerHTML = `${m.completedSyllabus} / ${m.totalSyllabus} Topics (${m.syllabusPercent}%)`;
        if (fillEl) fillEl.style.width = `${m.syllabusPercent}%`;

        const c1Count = document.getElementById('col1CountText');
        const c2Count = document.getElementById('col2CountText');
        const c3Count = document.getElementById('col3CountText');
        if (c1Count) c1Count.textContent = `${m.ch1Done} / ${m.ch1Total}`;
        if (c2Count) c2Count.textContent = `${m.ch2Done} / ${m.ch2Total}`;
        if (c3Count) c3Count.textContent = `${m.ch3Done} / ${m.ch3Total}`;

        showToast(newState ? "Marked topic as mastered! 🎯" : "Topic reset to uncompleted");
      });

      // Clicking "Study Lesson" opens the lesson in Theory tab
      row.querySelectorAll('[data-action="study"]').forEach(el => {
        el.addEventListener('click', () => {
          const topic = HandbookData.syllabus.find(t => t.id === topicId);
          if (topic) {
            activeChapterId = topic.chapterId;
            Tracker.setActiveChapter(topic.chapterId);
            currentTopicId = topic.id;
            currentView = 'theory';
            setActiveNavTab('theory');
            renderChapterSelector();
            renderSidebar();
            renderTheoryView();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      });
    });
  }

  // =========================================================================
  // VIEW 2: THEORY & CONCEPTS (DETAILED LESSONS & RICH DOCUMENTATION)
  // =========================================================================
  function renderTheoryView() {
    const topic = HandbookData.syllabus.find(t => t.id === currentTopicId) || HandbookData.syllabus[0];
    const isCompleted = Tracker.isSyllabusTopicCompleted(topic.id);
    const chapName = HandbookData.chapters.find(c => c.id === topic.chapterId)?.name || '';

    // Calculate Prev and Next Topics for seamless book reading
    const allTopics = HandbookData.syllabus;
    const currentIndex = allTopics.findIndex(t => t.id === topic.id);
    const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
    const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;
    const relatedProblems = (HandbookData.problems || []).filter(p => p.topicId === topic.id);

    const keyConcepts = topic.keyConcept || [
      "Core theoretical mechanism evaluated in standard midterm examinations.",
      "Requires careful syntax precision and understanding of variable lifecycle.",
      "Essential foundation for solving complex algorithmic programming problems."
    ];

    mainCanvasEl.innerHTML = `
      <div class="study-container">
        
        <!-- 1. Hero / Header Card (Objective & What Is This Topic) -->
        <div class="study-card study-card-hero">
          <div class="study-card-meta">
            <span class="study-badge-chapter">${chapName}</span>
            <span class="study-badge-num">Topic ${topic.number} of ${HandbookData.syllabus.length}</span>
            <span class="study-badge-time">${topic.readingTime || '8 min study'}</span>
          </div>
          <h1 class="study-hero-title">${topic.title}</h1>
          <div class="study-objective-box">
            <div class="study-objective-tag">🎯 OBJECTIVE</div>
            <p class="study-objective-text">${topic.objective || topic.overview || 'Master foundational understanding and practical application.'}</p>
          </div>
          <div class="study-what-is-it-box">
            <div class="study-what-tag">💡 WHAT IS THIS TOPIC?</div>
            <p class="study-what-text">${topic.whatIsIt || topic.overview || 'Fundamental programming concept in ANSI C.'}</p>
          </div>
        </div>

        <!-- 2. Key Concept in 3 Lines -->
        <div class="study-card study-card-concept">
          <div class="study-card-header">
            <span class="study-icon">⚡</span>
            <h3 class="study-card-title">Key Concept in 3 Lines</h3>
            <span class="study-card-tag">Fast Revision</span>
          </div>
          <div class="study-concept-grid">
            ${keyConcepts.map((concept, idx) => `
              <div class="concept-item">
                <div class="concept-num">${idx + 1}</div>
                <div class="concept-text">${concept}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Core Rule & Formula Card -->
        ${topic.ruleFormula ? `
          <div class="study-card study-card-rule">
            <div class="study-card-header">
              <span class="study-icon">📐</span>
              <h3 class="study-card-title">Core Rule, Syntax & Formula</h3>
              <span class="study-card-tag rule-tag">Strict Syntax</span>
            </div>
            <div class="study-rule-content">
              <pre class="rule-pre"><code>${escapeHtml(topic.ruleFormula)}</code></pre>
            </div>
          </div>
        ` : ''}

        <!-- 4. Clean Compilable Working Example & Output -->
        <div class="study-card study-card-example">
          <div class="study-card-header">
            <span class="study-icon">💻</span>
            <h3 class="study-card-title">Clear Working Example</h3>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button class="code-copy-btn" id="studyCopyCodeBtn">
                <span>📋 Copy Code</span>
              </button>
              <button class="code-copy-btn" id="studyRunGuideBtn">
                <span>▶ GCC Guide</span>
              </button>
            </div>
          </div>
          <div class="example-split-layout">
            <div class="example-code-col">
              <div class="example-col-label">C Source Code (.c)</div>
              <pre class="code-pre"><code>${escapeHtml(topic.exampleCode || topic.code)}</code></pre>
            </div>
            <div class="example-output-col">
              <div class="example-col-label">Console Output</div>
              <pre class="output-pre"><code>${escapeHtml(topic.exampleOutput || topic.output || 'No direct terminal output.')}</code></pre>
            </div>
          </div>
        </div>

        <!-- 5. Exam Trap Card -->
        <div class="study-card study-card-trap">
          <div class="study-card-header">
            <span class="study-icon">⚠️</span>
            <h3 class="study-card-title">Most Common Exam Trap</h3>
            <span class="study-card-tag trap-tag">Watch Out!</span>
          </div>
          <div class="trap-body">
            <div class="trap-box">
              <strong>🚨 The Pitfall:</strong> ${topic.commonMistake ? topic.commonMistake.trap : (topic.examTraps || 'Pay close attention to semicolon placement and boundary conditions.')}
            </div>
            ${topic.commonMistake ? `
              <div class="trap-why-box">
                <strong>❓ Why it fails:</strong> ${topic.commonMistake.why}
              </div>
              <div class="trap-fix-box">
                <strong>✅ How to fix it:</strong> ${topic.commonMistake.fix}
              </div>
            ` : ''}
          </div>
        </div>

        <!-- 6. Quick Memory Trick Card -->
        ${topic.memoryTrick ? `
          <div class="study-card study-card-memory">
            <div class="study-card-header">
              <span class="study-icon">🧠</span>
              <h3 class="study-card-title">Quick Memory Trick</h3>
              <span class="study-card-tag memory-tag">Mnemonic</span>
            </div>
            <div class="memory-body">
              <div class="memory-quote">${topic.memoryTrick}</div>
            </div>
          </div>
        ` : ''}

        <!-- 7. Practice Question Card -->
        ${topic.practiceQuestion ? `
          <div class="study-card study-card-practice">
            <div class="study-card-header">
              <span class="study-icon">📝</span>
              <h3 class="study-card-title">Target Midterm Practice</h3>
              <span class="study-card-tag practice-tag">Self-Test</span>
            </div>
            <div class="practice-body">
              <div class="practice-question">${topic.practiceQuestion.q}</div>
              <details class="practice-hint-details">
                <summary class="practice-hint-summary">💡 Reveal Solution Logic & Hint</summary>
                <div class="practice-hint-content">${topic.practiceQuestion.hint}</div>
              </details>
            </div>
          </div>
        ` : ''}

        <!-- 8. Advanced Exploration & Memory Architecture (Collapsible) -->
        ${(topic.diagram || topic.techTable || topic.overview) ? `
          <details class="study-card-deepdive">
            <summary class="deepdive-summary">
              <span>🔬 Advanced Exploration, Memory Architecture & Tech Specs (Optional Deep-Dive)</span>
              <span style="font-size: 0.8rem; color: var(--accent-cyan);">Click to Expand ▼</span>
            </summary>
            <div class="deepdive-body">
              ${topic.diagram ? `
                <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.88rem;">Hardware & Memory Model Diagram:</div>
                <div class="diagram-card"><pre>${escapeHtml(topic.diagram)}</pre></div>
              ` : ''}
              ${topic.techTable ? `
                <div style="font-weight: 700; color: var(--accent-indigo); font-size: 0.88rem; margin-top: 1rem;">Technical Specifications:</div>
                <div class="doc-table-wrapper">${topic.techTable}</div>
              ` : ''}
              ${topic.overview ? `
                <div style="font-weight: 700; color: var(--text-primary); font-size: 0.88rem; margin-top: 1rem;">Extended Theoretical Overview:</div>
                <div class="deepdive-prose">${topic.overview}${topic.deepDive || ''}</div>
              ` : ''}
            </div>
          </details>
        ` : ''}

        <!-- 9. Specific 50-Problem Bank Practice Pathways -->
        ${relatedProblems.length > 0 ? `
          <div class="study-card" style="border-color: rgba(0, 210, 255, 0.25);">
            <div class="study-card-header">
              <span class="study-icon">⚡</span>
              <h3 class="study-card-title">Mapped 50-Problem Bank Practice Pathways</h3>
              <span class="study-card-tag">${relatedProblems.length} Problems</span>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.15rem;">
              The following problems from the 50-Problem Midterm Bank directly test this topic:
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
              ${relatedProblems.map(rp => `
                <div class="stat-pill" style="padding: 1.15rem; text-align: left; display: flex; flex-direction: column; justify-content: space-between; gap: 0.85rem; border: 1px solid var(--border-card);">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 800; color: var(--accent-cyan);">P-${rp.num.toString().padStart(2, '0')}</span>
                      <span class="diff-pill ${rp.difficultyClass}">${rp.difficultyLabel}</span>
                    </div>
                    <div style="font-weight: 700; color: var(--text-primary); font-size: 0.96rem; margin-bottom: 0.3rem;">${rp.title}</div>
                    <div style="font-size: 0.82rem; color: var(--text-muted);">${rp.focus}</div>
                  </div>
                  <button class="btn-open-path" data-open-modal="${rp.id}" style="align-self: flex-start;">
                    <span>⚡ Solve & View Path</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 10. Topic Practice Problem Bank (Levels 1 to 5) from Roadmap -->
        ${(topic.practiceProblems && topic.practiceProblems.length > 0) ? `
          <div class="study-card" style="border-color: rgba(56, 189, 248, 0.35);">
            <div class="study-card-header">
              <span class="study-icon">🎯</span>
              <h3 class="study-card-title">Topic Practice Problem Bank (Levels 1 to 5)</h3>
              <span class="study-card-tag">${topic.practiceProblems.length} Problems</span>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.15rem;">
              Progressive exercises from the <em>Topic-Wise Practice Roadmap</em>. Master all 5 tiers from foundational questions to exam challenges:
            </p>
            <div class="topic-practice-bank">
              ${topic.practiceProblems.map(p => `
                <div class="topic-prob-card">
                  <div class="topic-prob-meta">
                    <span class="topic-prob-id">Problem ${p.problemId || ''}</span>
                    <span class="diff-pill ${p.levelClass || 'diff-basic'}">${p.level || 'Practice'}</span>
                  </div>
                  <div class="topic-prob-statement">${escapeHtml(p.statement)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 10. Topic Action Controls -->
        <div style="margin-top: 2rem; padding: 1.5rem 0; border-top: 1px solid var(--border-divider); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <button id="toggleTopicCompleteBtn" class="filter-btn ${isCompleted ? 'active' : ''}" style="padding: 0.65rem 1.4rem; font-size: 0.9rem;">
            ${isCompleted ? '✓ Topic Mastered in Syllabus' : 'Mark as Mastered in Syllabus'}
          </button>
          <button id="backToSyllabusBtn" class="filter-btn" style="background: transparent;">
            📋 Back to Syllabus Track Sheet
          </button>
        </div>

        <!-- 11. Previous / Next Topic Navigation Footer -->
        <div class="topic-nav-footer">
          ${prevTopic ? `
            <div class="topic-nav-card" id="prevTopicBtn">
              <span class="topic-nav-lbl">← Previous Lesson</span>
              <span class="topic-nav-title">${prevTopic.number}. ${prevTopic.title}</span>
            </div>
          ` : '<div></div>'}
          ${nextTopic ? `
            <div class="topic-nav-card" id="nextTopicBtn" style="text-align: right;">
              <span class="topic-nav-lbl">Next Lesson →</span>
              <span class="topic-nav-title">${nextTopic.number}. ${nextTopic.title}</span>
            </div>
          ` : '<div></div>'}
        </div>

      </div>
    `;

    // Bind Copy Code Button
    const copyBtn = document.getElementById('studyCopyCodeBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const codeText = topic.exampleCode || topic.code;
        navigator.clipboard.writeText(codeText).then(() => {
          showToast("Code copied to clipboard! 📋");
        });
      });
    }

    // Bind Run Guide Modal Button
    const runBtn = document.getElementById('studyRunGuideBtn');
    if (runBtn) {
      runBtn.addEventListener('click', openRunModal);
    }

    // Toggle Mastery
    document.getElementById('toggleTopicCompleteBtn').addEventListener('click', () => {
      Tracker.toggleSyllabusTopic(topic.id);
      renderChapterSelector();
      renderSidebar();
      renderTheoryView();
      showToast(Tracker.isSyllabusTopicCompleted(topic.id) ? "Marked as mastered! 🎯" : "Topic reset");
    });

    // Back to Syllabus
    document.getElementById('backToSyllabusBtn').addEventListener('click', () => {
      currentView = 'syllabus';
      setActiveNavTab('syllabus');
      renderCurrentView();
    });

    // Prev / Next Topic Navigation
    if (prevTopic && document.getElementById('prevTopicBtn')) {
      document.getElementById('prevTopicBtn').addEventListener('click', () => {
        currentTopicId = prevTopic.id;
        activeChapterId = prevTopic.chapterId;
        Tracker.setActiveChapter(prevTopic.chapterId);
        renderChapterSelector();
        renderSidebar();
        renderTheoryView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if (nextTopic && document.getElementById('nextTopicBtn')) {
      document.getElementById('nextTopicBtn').addEventListener('click', () => {
        currentTopicId = nextTopic.id;
        activeChapterId = nextTopic.chapterId;
        Tracker.setActiveChapter(nextTopic.chapterId);
        renderChapterSelector();
        renderSidebar();
        renderTheoryView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // =========================================================================
  // VIEW 3: PRACTICE ROADMAP (6-PHASE PLAN & 35 MUST-SOLVE MIDTERM CHECKLIST)
  // =========================================================================
  function renderRoadmapView() {
    const mustSolveList = [
      { id: 'ms1', cat: '1. Fundamentals & Variables', title: 'Swap two numbers using a third temp variable', topicId: 'ch1_11' },
      { id: 'ms2', cat: '1. Fundamentals & Variables', title: 'Swap two numbers WITHOUT using any third variable (+, -)', topicId: 'ch1_11' },
      { id: 'ms3', cat: '1. Fundamentals & Variables', title: 'Average of 3 numbers using float explicit casting', topicId: 'ch1_9' },
      { id: 'ms4', cat: '1. Fundamentals & Variables', title: 'Fahrenheit to Celsius conversion formula C = (F-32)*5.0/9.0', topicId: 'ch1_11' },
      { id: 'ms5', cat: '1. Fundamentals & Variables', title: 'Calculate Simple Interest SI = P*R*T/100.0', topicId: 'ch1_13' },
      
      { id: 'ms6', cat: '2. Operators & Precedence', title: 'Time decomposition: Convert seconds into Hours, Minutes, Seconds', topicId: 'ch2_1' },
      { id: 'ms7', cat: '2. Operators & Precedence', title: 'Prefix vs Postfix increment output tracing (++a vs a++)', topicId: 'ch2_2' },
      { id: 'ms8', cat: '2. Operators & Precedence', title: 'Short-circuit evaluation tracing with && and ||', topicId: 'ch2_4' },
      { id: 'ms9', cat: '2. Operators & Precedence', title: 'Operator precedence evaluation table reduction', topicId: 'ch2_7' },
      { id: 'ms10', cat: '2. Operators & Precedence', title: 'Negative modulus sign rule (-17 % 5 vs 17 % -5)', topicId: 'ch2_1' },

      { id: 'ms11', cat: '3. Input / Output Mechanics', title: 'Read and print variables of 4 types (int, float, double, char)', topicId: 'ch2_11' },
      { id: 'ms12', cat: '3. Input / Output Mechanics', title: 'Fix the newline buffer trap when reading char after int', topicId: 'ch2_12' },
      { id: 'ms13', cat: '3. Input / Output Mechanics', title: 'Formatted table printing using %-10s, %5d, and %.2f', topicId: 'ch2_13' },

      { id: 'ms14', cat: '4. Decision Making (if, switch)', title: 'Check whether a number is Even or Odd', topicId: 'ch3_1' },
      { id: 'ms15', cat: '4. Decision Making (if, switch)', title: 'Check whether a number is Positive, Negative, or Zero', topicId: 'ch3_1' },
      { id: 'ms16', cat: '4. Decision Making (if, switch)', title: 'Find the Largest of Two numbers', topicId: 'ch3_1' },
      { id: 'ms17', cat: '4. Decision Making (if, switch)', title: 'Find the Largest of Three numbers using nested if-else', topicId: 'ch3_2' },
      { id: 'ms18', cat: '4. Decision Making (if, switch)', title: 'Check whether a year is a Leap Year', topicId: 'ch2_4' },
      { id: 'ms19', cat: '4. Decision Making (if, switch)', title: 'Student grading ladder (A, B, C, D, F)', topicId: 'ch3_1' },
      { id: 'ms20', cat: '4. Decision Making (if, switch)', title: 'Electricity slab bill calculation with multiple rates', topicId: 'ch3_2' },
      { id: 'ms21', cat: '4. Decision Making (if, switch)', title: 'Menu-driven arithmetic calculator using switch', topicId: 'ch3_3' },
      { id: 'ms22', cat: '4. Decision Making (if, switch)', title: 'Month number to days using switch fall-through', topicId: 'ch3_3' },

      { id: 'ms23', cat: '5. Loops & Algorithms', title: 'Sum of numbers from 1 to N', topicId: 'ch3_4' },
      { id: 'ms24', cat: '5. Loops & Algorithms', title: 'Factorial of N (N!)', topicId: 'ch3_5' },
      { id: 'ms25', cat: '5. Loops & Algorithms', title: 'Multiplication table of N (N x 1 ... N x 10)', topicId: 'ch3_5' },
      { id: 'ms26', cat: '5. Loops & Algorithms', title: 'Count the digits of an integer (n /= 10)', topicId: 'ch3_4' },
      { id: 'ms27', cat: '5. Loops & Algorithms', title: 'Sum of digits of an integer (582 => 15)', topicId: 'ch3_4' },
      { id: 'ms28', cat: '5. Loops & Algorithms', title: 'Reverse an integer arithmetically (1234 => 4321)', topicId: 'ch3_4' },
      { id: 'ms29', cat: '5. Loops & Algorithms', title: 'Check whether a number is a Palindrome (1221)', topicId: 'ch3_4' },
      { id: 'ms30', cat: '5. Loops & Algorithms', title: 'Check whether a number is a Prime Number', topicId: 'ch3_5' },
      { id: 'ms31', cat: '5. Loops & Algorithms', title: 'Check whether a number is an Armstrong Number (153 = 1³+5³+3³)', topicId: 'ch3_4' },
      { id: 'ms32', cat: '5. Loops & Algorithms', title: 'Generate the first N terms of Fibonacci Series (0, 1, 1, 2, 3, 5...)', topicId: 'ch3_5' },
      { id: 'ms33', cat: '5. Loops & Algorithms', title: 'Find the GCD of two numbers using Euclidean loop', topicId: 'ch3_4' },

      { id: 'ms34', cat: '6. Nested Loops & Patterns', title: 'Star right-angled triangle (increasing)', topicId: 'ch3_5' },
      { id: 'ms35', cat: '6. Nested Loops & Patterns', title: 'Symmetrical star pyramid (spaces + 2r-1 stars)', topicId: 'ch3_5' }
    ];

    const completedMustSolves = Tracker.getRoadmapProgressCount();

    mainCanvasEl.innerHTML = `
      <div class="content-header">
        <div class="content-badge-row">
          <span class="content-badge">Practice Roadmap</span>
          <span class="content-badge content-badge-sub">6-Phase Progression</span>
          <span class="content-badge" style="background: rgba(16, 185, 129, 0.12); color: var(--accent-mint); border-color: rgba(16, 185, 129, 0.3);">
            ${completedMustSolves} / 35 Must-Solves Done
          </span>
        </div>
        <h1 class="content-title">Midterm Practice Problem Roadmap</h1>
        <p class="content-lead">
          Your progressive roadmap from absolute zero logic to midterm exam excellence. Follow the 6 chronological phases, and check off the <strong>35 Core Midterm Problems</strong> as you master them on paper!
        </p>
      </div>

      <!-- 6-Phase Study Cards -->
      <div class="doc-section-title cyan">
        <span>The 6-Phase Chronological Strategy</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
        <div class="stat-pill" style="padding: 1.25rem; text-align: left;">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-cyan); text-transform: uppercase;">Phase 1 • Day 1 - 2</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0.3rem 0;">Foundations & Memory</div>
          <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">Hardware block diagrams, software types, data types, variable declarations, and byte sizes.</p>
        </div>

        <div class="stat-pill" style="padding: 1.25rem; text-align: left;">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-sky); text-transform: uppercase;">Phase 2 • Day 3 - 4</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0.3rem 0;">Operators, Precedence & I/O</div>
          <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">Arithmetic, ++a vs a++, relational/logical truth tables, short-circuiting, and formatted scanf/printf.</p>
        </div>

        <div class="stat-pill" style="padding: 1.25rem; text-align: left;">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-indigo); text-transform: uppercase;">Phase 3 • Day 5 - 6</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0.3rem 0;">Decision Making</div>
          <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">Multi-path branching: if, if-else, else-if ladder, nested if, leap years, and switch menus.</p>
        </div>

        <div class="stat-pill" style="padding: 1.25rem; text-align: left;">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-emerald); text-transform: uppercase;">Phase 4 • Day 7 - 9</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0.3rem 0;">Loops & Number Algorithms</div>
          <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">while, do-while, for loops: digit sum, reverse, palindrome, prime check, and Fibonacci series.</p>
        </div>

        <div class="stat-pill" style="padding: 1.25rem; text-align: left;">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-amber); text-transform: uppercase;">Phase 5 • Day 10 - 11</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0.3rem 0;">Nested Loops & Patterns</div>
          <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">2D coordinate thinking: rows vs columns, right triangles, pyramids, and Floyd's triangle.</p>
        </div>

        <div class="stat-pill" style="padding: 1.25rem; text-align: left;">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-rose); text-transform: uppercase;">Phase 6 • Day 12 - 14</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0.3rem 0;">Exam Simulation & Dry Run</div>
          <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">Paper trace tables, spotting and fixing exam code bugs, and full timed MCQ evaluation.</p>
        </div>
      </div>

      <!-- Core 35 Must-Solve Midterm Checklist -->
      <div class="doc-section-title indigo">
        <span>🔥 The 35 Midterm Must-Solve Core Checklist</span>
      </div>
      <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        Solve these 35 problems on pen and paper from memory. Click the checkbox to track your progress:
      </p>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${mustSolveList.map((item, idx) => {
          const isDone = Tracker.isRoadmapItemCompleted(item.id);
          return `
            <div class="syllabus-item-row ${isDone ? 'completed' : ''}" style="padding: 0.85rem 1rem;" data-ms-id="${item.id}">
              <div class="syllabus-checkbox ${isDone ? 'checked' : ''}" data-action="check-ms"></div>
              <div class="syllabus-item-text">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 700; color: var(--accent-cyan); display: block; text-transform: uppercase;">${item.cat}</span>
                  <span style="font-size: 0.92rem; font-weight: 600;">${idx + 1}. ${item.title}</span>
                </div>
                <button class="syllabus-study-btn" data-topic-target="${item.topicId}">
                  Study Topic ➔
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Bind Roadmap Checkboxes
    mainCanvasEl.querySelectorAll('[data-action="check-ms"]').forEach(box => {
      box.addEventListener('click', (e) => {
        e.stopPropagation();
        const row = box.closest('.syllabus-item-row');
        const msId = row.dataset.msId;
        const newState = Tracker.toggleRoadmapItem(msId);
        box.classList.toggle('checked', newState);
        row.classList.toggle('completed', newState);
        showToast(newState ? "Checked off must-solve problem! 🎯" : "Problem reset");
      });
    });

    // Bind "Study Topic ➔"
    mainCanvasEl.querySelectorAll('[data-topic-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.topicTarget;
        const topic = HandbookData.syllabus.find(t => t.id === targetId);
        if (topic) {
          activeChapterId = topic.chapterId;
          Tracker.setActiveChapter(topic.chapterId);
          currentTopicId = topic.id;
          currentView = 'theory';
          setActiveNavTab('theory');
          renderChapterSelector();
          renderSidebar();
          renderTheoryView();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }

  // =========================================================================
  // =========================================================================
  // VIEW 3: PRACTICE TRACK SHEET (50 PROBLEM BANK MATRIX WITH SPECIFIC PATHS)
  // =========================================================================
  function renderTrackSheetView() {
    mainCanvasEl.innerHTML = `
      <div class="content-header">
        <div class="content-badge">
          <span>Problem Solving Matrix</span>
          <span>•</span>
          <span>50 Practice Exercises</span>
        </div>
        <h1 class="content-title">50-Problem Midterm Practice Bank</h1>
        <p class="content-lead">
          Every single problem has an explicit <strong>Curriculum Pathway</strong>. Click any problem or <strong>[Path & Code 🔍]</strong> to view step-by-step logic, sample I/O, and verified C solutions.
        </p>
      </div>

      <div class="filter-bar">
        <div class="level-filters">
          <button class="filter-btn ${activeProblemFilter === 'all' ? 'active' : ''}" data-filter="all">All (50)</button>
          <button class="filter-btn ${activeProblemFilter === '1' ? 'active' : ''}" data-filter="1">Level 1: Very Basic</button>
          <button class="filter-btn ${activeProblemFilter === '2' ? 'active' : ''}" data-filter="2">Level 2: Basic</button>
          <button class="filter-btn ${activeProblemFilter === '3' ? 'active' : ''}" data-filter="3">Level 3: Exam Level</button>
        </div>
      </div>

      <div class="problem-table-container">
        <table class="problem-table">
          <thead>
            <tr>
              <th style="width: 55px;">ID</th>
              <th>Problem Statement & Focus</th>
              <th style="width: 200px;">Curriculum Pathway</th>
              <th style="width: 120px;">Difficulty</th>
              <th style="width: 110px;">Workspace</th>
              <th style="width: 130px;">Status</th>
            </tr>
          </thead>
          <tbody id="problemTableBody"></tbody>
        </table>
      </div>
    `;

    populateProblemTable();

    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeProblemFilter = btn.dataset.filter;
        populateProblemTable();
      });
    });
  }

  function populateProblemTable() {
    const tbody = document.getElementById('problemTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filtered = HandbookData.problems.filter(p => {
      if (activeProblemFilter === 'all') return true;
      const d = (p.difficulty || p.level || 1).toString();
      return d === activeProblemFilter;
    });

    filtered.forEach(p => {
      const status = Tracker.getProblemStatus(p.id);
      const tr = document.createElement('tr');
      tr.className = 'problem-row-clickable';
      const diff = p.difficulty || p.level || 1;
      const diffLabel = p.difficultyLabel || (diff === 1 ? 'Very Basic' : (diff === 2 ? 'Basic' : 'Exam Level'));
      const diffClass = p.difficultyClass || (diff === 1 ? 'diff-very-basic' : (diff === 2 ? 'diff-basic' : 'diff-exam'));
      const focus = p.focus || p.desc || 'General practice';
      const pathText = p.curriculumPath || 'Ch 1 ➔ Fundamentals';
      const pNumStr = p.num ? p.num.toString().padStart(2, '0') : p.id.replace('p1_', '');

      let statusLabel = '○ Unsolved';
      let statusClass = '';
      if (status === 'practicing') {
        statusLabel = '⏳ In Progress';
        statusClass = 'practicing';
      } else if (status === 'solved') {
        statusLabel = '✓ Solved';
        statusClass = 'solved';
      }

      tr.innerHTML = `
        <td style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">#${pNumStr}</td>
        <td>
          <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.2rem;">${p.title}</div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">${focus}</div>
        </td>
        <td>
          <button class="curriculum-path-badge" data-topic-jump="${p.topicId}" title="Jump to theory lesson: ${p.topicTitle || ''}">
            <span>📘</span> ${pathText}
          </button>
        </td>
        <td><span class="diff-pill ${diffClass}">${diffLabel}</span></td>
        <td>
          <button class="btn-open-path" data-open-modal="${p.id}" title="Open specific pathway & C solution">
            Path & Code 🔍
          </button>
        </td>
        <td>
          <button class="status-pill ${statusClass}" data-pid="${p.id}">
            ${statusLabel}
          </button>
        </td>
      `;

      // Click on curriculum path badge -> Jump directly to Theory lesson
      const pathBadge = tr.querySelector('.curriculum-path-badge');
      if (pathBadge) {
        pathBadge.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetTopicId = pathBadge.dataset.topicJump;
          const topic = HandbookData.syllabus.find(t => t.id === targetTopicId);
          if (topic) {
            activeChapterId = topic.chapterId;
            Tracker.setActiveChapter(topic.chapterId);
            currentTopicId = topic.id;
            currentView = 'theory';
            setActiveNavTab('theory');
            renderChapterSelector();
            renderSidebar();
            renderTheoryView();
            window.location.hash = `theory/${topic.id}`;
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      }

      // Click on Open Path button
      const openBtn = tr.querySelector('.btn-open-path');
      if (openBtn) {
        openBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openProblemPathModal(p.id);
        });
      }

      // Click on Status pill
      const pill = tr.querySelector('.status-pill');
      if (pill) {
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          const nextStatus = Tracker.cycleProblemStatus(p.id);
          populateProblemTable();
          updateReadinessUI();
          showToast(`Problem #${pNumStr}: ${nextStatus.toUpperCase()}`);
        });
      }

      // Row click opens the modal
      tr.addEventListener('click', () => {
        openProblemPathModal(p.id);
      });

      tbody.appendChild(tr);
    });
  }

  // --- PROBLEM SPECIFIC PATHWAY & SOLUTION WORKSPACE MODAL ---
  const problemModalOverlay = document.getElementById('problemModalOverlay');
  const closeProblemModalBtn = document.getElementById('closeProblemModal');
  const pmBreadcrumbs = document.getElementById('pmBreadcrumbs');
  const problemModalBody = document.getElementById('problemModalBody');

  function openProblemPathModal(problemId) {
    const p = HandbookData.problems.find(prob => prob.id === problemId);
    if (!p || !problemModalOverlay || !problemModalBody) return;

    if (pmBreadcrumbs) {
      pmBreadcrumbs.textContent = p.pathBreadcrumb || `Midterm Syllabus > Problem #${p.num}`;
    }

    const status = Tracker.getProblemStatus(p.id);
    let statusLabel = '○ Mark as Solved';
    let statusClass = '';
    if (status === 'practicing') {
      statusLabel = '⏳ In Progress';
      statusClass = 'practicing';
    } else if (status === 'solved') {
      statusLabel = '✓ Solved';
      statusClass = 'solved';
    }

    problemModalBody.innerHTML = `
      <!-- Curriculum Pathway Banner -->
      <div class="pm-pathway-banner">
        <div class="pm-pathway-info">
          <div class="pm-pathway-label">📘 Official Curriculum Pathway</div>
          <div class="pm-pathway-title">
            <span>${p.chapterName || 'Chapter'}</span>
            <span>➔</span>
            <span style="color: var(--accent-cyan);">${p.topicTitle || p.curriculumPath}</span>
          </div>
        </div>
        <button class="pm-jump-theory-btn" id="pmJumpTheoryBtn" data-target-topic="${p.topicId}">
          <span>📖 Jump to Theory Lesson</span>
        </button>
      </div>

      <!-- Problem Title & Meta Info -->
      <div class="pm-title-block">
        <h2 class="pm-title">P-${p.num.toString().padStart(2, '0')}: ${p.title}</h2>
        <div class="pm-meta-row">
          <span class="diff-pill ${p.difficultyClass}">${p.difficultyLabel}</span>
          <span class="pm-pill">⏱️ ${p.estTime}</span>
          <span class="pm-pill">🎯 Focus: ${p.focus}</span>
        </div>
      </div>

      <!-- Concept Card -->
      <div class="pm-section-card">
        <div class="pm-section-title">
          <span>🧠 Core Concept & Syllabus Objective</span>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
          ${p.concept || 'Algorithmic implementation and standard C language mechanics.'}
        </p>
      </div>

      <!-- Step-by-Step Logic Pathway -->
      <div class="pm-section-card">
        <div class="pm-section-title">
          <span>⚡ Algorithmic Thinking & Execution Pathway</span>
        </div>
        <div class="pm-step-list">
          ${(p.algorithmSteps || []).map((step, idx) => `
            <div class="pm-step-item">
              <span class="pm-step-num">${idx + 1}</span>
              <span>${step.replace(/^Step \d+:\s*/, '')}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Sample Input / Output -->
      <div class="pm-io-grid">
        <div class="pm-io-box">
          <div class="pm-io-header">Sample Input / Given Data</div>
          <div class="pm-io-content">${escapeHtml(p.sampleInput || 'N/A')}</div>
        </div>
        <div class="pm-io-box">
          <div class="pm-io-header">Expected Console Output</div>
          <div class="pm-io-content">${escapeHtml(p.sampleOutput || 'N/A')}</div>
        </div>
      </div>

      <!-- Verified C Solution Code -->
      <div class="pm-solution-container">
        <div class="pm-solution-header">
          <span class="pm-solution-lang">
            <span>💻</span> C (C99 / C11 Standard - GCC Verified)
          </span>
          <button class="pm-copy-btn" id="pmCopyCodeBtn">
            <span>📋 Copy Code</span>
          </button>
        </div>
        <pre class="pm-code-pre"><code>${escapeHtml(p.solutionCode || '// Code solution')}</code></pre>
      </div>

      <!-- Modal Footer Actions -->
      <div class="pm-footer">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <button class="status-pill ${statusClass}" id="pmStatusBtn" data-pid="${p.id}">
            ${statusLabel}
          </button>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Click status pill to cycle status</span>
        </div>
        <button class="btn btn-secondary" id="pmCloseModalBtn" style="padding: 0.45rem 1rem; font-size: 0.82rem;">
          Close Workspace
        </button>
      </div>
    `;

    problemModalOverlay.classList.add('active');
    problemModalOverlay.setAttribute('aria-hidden', 'false');

    // Wire up Jump to Theory
    const jumpBtn = document.getElementById('pmJumpTheoryBtn');
    if (jumpBtn) {
      jumpBtn.addEventListener('click', () => {
        closeProblemPathModal();
        const targetTopicId = jumpBtn.dataset.targetTopic;
        const topic = HandbookData.syllabus.find(t => t.id === targetTopicId);
        if (topic) {
          activeChapterId = topic.chapterId;
          Tracker.setActiveChapter(topic.chapterId);
          currentTopicId = topic.id;
          currentView = 'theory';
          setActiveNavTab('theory');
          renderChapterSelector();
          renderSidebar();
          renderTheoryView();
          window.location.hash = `theory/${topic.id}`;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    // Wire up Copy Code
    const copyBtn = document.getElementById('pmCopyCodeBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(p.solutionCode || '').then(() => {
          copyBtn.innerHTML = '<span>✓ Copied!</span>';
          copyBtn.style.color = 'var(--accent-mint)';
          showToast('C Solution copied to clipboard! 📋');
          setTimeout(() => {
            copyBtn.innerHTML = '<span>📋 Copy Code</span>';
            copyBtn.style.color = '';
          }, 2000);
        });
      });
    }

    // Wire up Status Toggle
    const statusBtn = document.getElementById('pmStatusBtn');
    if (statusBtn) {
      statusBtn.addEventListener('click', () => {
        const nextStatus = Tracker.cycleProblemStatus(p.id);
        openProblemPathModal(p.id); // re-render modal with new status
        populateProblemTable();
        updateReadinessUI();
        showToast(`Problem #${p.num}: ${nextStatus.toUpperCase()}`);
      });
    }

    // Wire up Close button
    const closeBtn = document.getElementById('pmCloseModalBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeProblemPathModal);
    }
  }

  function closeProblemPathModal() {
    if (!problemModalOverlay) return;
    problemModalOverlay.classList.remove('active');
    problemModalOverlay.setAttribute('aria-hidden', 'true');
    if (window.location.hash.startsWith('#problem/')) {
      window.location.hash = '#track-sheet';
    }
  }

  if (closeProblemModalBtn) {
    closeProblemModalBtn.addEventListener('click', closeProblemPathModal);
  }

  if (problemModalOverlay) {
    problemModalOverlay.addEventListener('click', (e) => {
      if (e.target === problemModalOverlay) closeProblemPathModal();
    });
  }

  // Keyboard Escape to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && problemModalOverlay && problemModalOverlay.classList.contains('active')) {
      closeProblemPathModal();
    }
  });

  // =========================================================================
  // VIEW 4: MIDTERM QUIZ (MCQS)
  // =========================================================================
  function renderQuizView() {
    const allMcqs = HandbookData.mcqs || [];
    const filteredMcqs = allMcqs.map((mcq, originalIdx) => ({ mcq, originalIdx })).filter(item => {
      if (activeQuizFilter === 'ch1') return item.mcq.chapterId === 1;
      if (activeQuizFilter === 'ch2') return item.mcq.chapterId === 2;
      if (activeQuizFilter === 'ch3') return item.mcq.chapterId === 3;
      return true;
    });

    const m = Tracker.getMetrics();

    mainCanvasEl.innerHTML = `
      <div class="content-header">
        <div class="content-badge">
          <span>Exam Simulator</span>
          <span>•</span>
          <span>${allMcqs.length} Questions</span>
        </div>
        <h1 class="content-title">Midterm MCQ Diagnostic Quiz</h1>
        <p class="content-lead">
          Test your knowledge under simulated university midterm conditions. Select an answer to see instant evaluation, correct rationale, and syllabus alignment.
        </p>
      </div>

      <!-- Chapter Filter Pills -->
      <div class="filter-pills-row">
        <button class="filter-pill ${activeQuizFilter === 'all' ? 'active' : ''}" data-quiz-filter="all">
          All Chapters (${allMcqs.length})
        </button>
        <button class="filter-pill ${activeQuizFilter === 'ch1' ? 'active' : ''}" data-quiz-filter="ch1">
          Ch 1: Fundamentals (${allMcqs.filter(q => q.chapterId === 1).length})
        </button>
        <button class="filter-pill ${activeQuizFilter === 'ch2' ? 'active' : ''}" data-quiz-filter="ch2">
          Ch 2: Operators & I/O (${allMcqs.filter(q => q.chapterId === 2).length})
        </button>
        <button class="filter-pill ${activeQuizFilter === 'ch3' ? 'active' : ''}" data-quiz-filter="ch3">
          Ch 3: Control Statements (${allMcqs.filter(q => q.chapterId === 3).length})
        </button>
      </div>

      <!-- Quiz Score Summary Card -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Quiz Progress & Accuracy:</span>
          <div style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: var(--accent-cyan);">
            ${m.quizCorrectCount} / ${allMcqs.length} Correct (${m.quizPercent}%)
          </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-secondary);">
          Grade: <strong style="color: ${m.gradeColor};">${m.grade}</strong>
        </div>
      </div>

      <div class="quiz-container" id="quizCardsContainer"></div>
    `;

    // Bind Filter Pills
    mainCanvasEl.querySelectorAll('[data-quiz-filter]').forEach(pill => {
      pill.addEventListener('click', () => {
        activeQuizFilter = pill.dataset.quizFilter;
        renderQuizView();
      });
    });

    const container = document.getElementById('quizCardsContainer');
    filteredMcqs.forEach(({ mcq, originalIdx }, displayIdx) => {
      const saved = Tracker.getQuizAnswer(originalIdx);
      const card = document.createElement('div');
      card.className = 'mcq-card';
      const options = mcq.options || mcq.opts || [];
      const explanation = mcq.explanation || mcq.explain || 'Review standard C language syntax specifications.';

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <div class="mcq-qnum">Question ${displayIdx + 1} of ${filteredMcqs.length} (Overall #${originalIdx + 1})</div>
          <span class="content-badge" style="font-size: 0.7rem;">Chapter ${mcq.chapterId || 1}</span>
        </div>
        <div class="mcq-question">${mcq.q}</div>
        <div class="mcq-options" data-qidx="${originalIdx}">
          ${options.map((opt, optIdx) => {
            let extraClass = '';
            if (saved) {
              if (optIdx === mcq.correct) extraClass = 'correct';
              else if (optIdx === saved.selected && !saved.isCorrect) extraClass = 'wrong';
            }
            return `
              <button class="mcq-opt-btn ${extraClass}" data-opt="${optIdx}" ${saved ? 'disabled' : ''}>
                <span style="font-weight: 700; color: var(--accent-cyan); font-family: var(--font-mono);">${String.fromCharCode(65 + optIdx)})</span>
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
        <div class="mcq-explanation ${saved ? 'show' : ''}">
          <strong>Technical Explanation:</strong> ${explanation}
        </div>
      `;

      card.querySelectorAll('.mcq-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = parseInt(btn.dataset.opt);
          const isCorrect = selected === mcq.correct;
          Tracker.recordQuizAnswer(originalIdx, selected, isCorrect);
          renderQuizView();
          showToast(isCorrect ? "Correct answer! 🎯" : "Incorrect. Check explanation!");
        });
      });

      container.appendChild(card);
    });
  }

  // =========================================================================
  // VIEW 5: COMMON MISTAKES & EXAM TRAPS
  // =========================================================================
  function renderMistakesView() {
    const traps = [
      {
        num: 1,
        title: "Accidental Semicolon After 'if', 'while', or '#define'",
        code: "if (x > 0); { printf(\"Positive\"); }  // BUG!\n#define PI 3.14159;                   // BUG!",
        fix: "Writing a semicolon immediately after if or while creates a null statement. The subsequent curly block executes unconditionally! For #define, the semicolon becomes part of the replacement text.",
        correct: "if (x > 0) { printf(\"Positive\"); }\n#define PI 3.14159"
      },
      {
        num: 2,
        title: "Integer Division Truncation (Decimal Discarded)",
        code: "int a = 5, b = 2;\nfloat avg = a / b;  // Yields 2.000000, NOT 2.5!",
        fix: "When both operands are integers, C performs integer division and strictly truncates towards zero. Promote at least one operand to float/double.",
        correct: "float avg = (float)a / b;  // or: float avg = 5.0f / 2;"
      },
      {
        num: 3,
        title: "Leading Zero Treated as an Octal Constant",
        code: "int pin = 052;  // Stores 42 in decimal, NOT 52!",
        fix: "In C, any integer literal starting with a leading 0 is parsed as Base-8 (Octal). 052 = 5*8 + 2 = 42. Never prepend zeros to decimal numbers.",
        correct: "int pin = 52;"
      },
      {
        num: 4,
        title: "Reading Uninitialized Local Variables (Garbage Values)",
        code: "int sum;\nfor (int i = 1; i <= 5; i++) sum += i;  // sum starts with random memory junk!",
        fix: "Local automatic variables on the stack are NOT initialized to 0. They contain random electrical junk leftover from previous function calls.",
        correct: "int sum = 0;"
      },
      {
        num: 5,
        title: "Character Literal 'A' vs String Literal \"A\"",
        code: "char ch = \"A\";  // COMPILE WARNING/ERROR! Pointer assigned to char",
        fix: "'A' in single quotes is a 1-byte character constant (ASCII 65). \"A\" in double quotes is a 2-byte array containing 'A' and the null terminator '\\0'.",
        correct: "char ch = 'A';       // 1 byte\nchar str[] = \"A\";    // 2 bytes"
      },
      {
        num: 6,
        title: "The Dangling Else Ambiguity Trap",
        code: "if (x > 10)\n    if (y > 5) printf(\"A\");\nelse printf(\"B\");  // Belongs to (y > 5), NOT (x > 10)!",
        fix: "Regardless of indentation, the C grammar strictly binds an 'else' to the nearest preceding unmatched 'if'. Always use explicit curly braces {}.",
        correct: "if (x > 10) {\n    if (y > 5) printf(\"A\");\n} else {\n    printf(\"B\");\n}"
      },
      {
        num: 7,
        title: "Forgetting 'break' in Switch Statements (Accidental Fall-Through)",
        code: "switch (choice) {\n    case 1: printf(\"One\");  // Missing break!\n    case 2: printf(\"Two\"); break;\n}",
        fix: "Without 'break', control executes into subsequent case blocks sequentially until the end of switch. Always terminate cases with break unless intentional.",
        correct: "switch (choice) {\n    case 1: printf(\"One\"); break;\n    case 2: printf(\"Two\"); break;\n}"
      },
      {
        num: 8,
        title: "Using Floating-Point Numbers or Variables in 'switch'",
        code: "float x = 2.5;\nswitch (x) { ... }  // COMPILE ERROR! Float illegal in switch\ncase n:             // COMPILE ERROR! Variables illegal in case",
        fix: "The switch expression and case labels must strictly be integral types (int, char, enum). Case labels must be compile-time constants.",
        correct: "Use if-else ladders for floating point conditions or range checks."
      },
      {
        num: 9,
        title: "The Leftover Newline '\\n' Buffer Trap in Character Input",
        code: "int age; char grade;\nscanf(\"%d\", &age);\nscanf(\"%c\", &grade);  // Immediately reads leftover '\\n' and skips input!",
        fix: "Pressing Enter after typing a number leaves '\\n' in stdin. The next %c reads that newline. Add a space before %c to discard whitespace.",
        correct: "scanf(\" %c\", &grade);  // Leading space skips whitespace/newlines!"
      },
      {
        num: 10,
        title: "Missing Address-of Operator '&' in scanf()",
        code: "int num;\nscanf(\"%d\", num);  // CRASH! Segmentation Fault",
        fix: "scanf requires the memory address where input must be stored. Passing num passes uninitialized garbage as an address, causing a memory crash.",
        correct: "scanf(\"%d\", &num);"
      },
      {
        num: 11,
        title: "Format Specifier Mismatch: %f vs %lf in scanf()",
        code: "double pi;\nscanf(\"%f\", &pi);  // Writes 4 bytes into an 8-byte double! Memory corrupted!",
        fix: "While printf accepts %f for double due to default argument promotion, scanf strictly requires %lf for double and %f for float!",
        correct: "scanf(\"%lf\", &pi);  // Mandatory %lf for double in scanf"
      },
      {
        num: 12,
        title: "Chained Relational Comparisons Trap (18 <= age <= 60)",
        code: "if (18 <= age <= 60)  // Always evaluates to TRUE for age = 80!",
        fix: "C evaluates left-to-right: (18 <= 80) is 1. Then (1 <= 60) is evaluated, which is always 1 (True)! Use logical AND (&&).",
        correct: "if (age >= 18 && age <= 60)"
      },
      {
        num: 13,
        title: "Assignment '=' Instead of Equality '==' in Conditions",
        code: "if (x = 5) { ... }  // Assigns 5 to x, then checks 5 != 0 (ALWAYS TRUE!)",
        fix: "A single '=' is assignment; '==' is comparison. Writing 'x = 5' produces 5, which C treats as non-zero (True) unconditionally.",
        correct: "if (x == 5) { ... }"
      },
      {
        num: 14,
        title: "Short-Circuit Side-Effect Evaluation in '&&' and '||'",
        code: "int a = 0, b = 5;\nif (a && ++b) ... // b is NOT incremented because a is 0!",
        fix: "In logical AND (&&), if the left operand is False (0), the right operand is completely skipped. In OR (||), if left is True, right is skipped.",
        correct: "Increment variables before the condition if you need the side effect to always happen."
      },
      {
        num: 15,
        title: "Assuming sizeof() Evaluates Runtime Expressions",
        code: "int x = 10;\nprintf(\"%zu\\n\", sizeof(x++)); // Prints 4\nprintf(\"%d\\n\", x);            // Prints 10, NOT 11!",
        fix: "sizeof is a compile-time operator that inspects operand types. The expression inside sizeof() is NEVER executed at runtime.",
        correct: "Do not place increment or assignment expressions inside sizeof()."
      },
      {
        num: 16,
        title: "C99 Modulus Sign Rule with Negative Operands",
        code: "int r1 = -17 % 5;  // Evaluates to -2\nint r2 = 17 % -5;   // Evaluates to +2",
        fix: "In standard C99, the result of a % b always shares the sign of the dividend (left operand a). The divisor's sign is ignored.",
        correct: "Always use abs() if non-negative remainder is required in algorithms."
      },
      {
        num: 17,
        title: "Compound Assignment Right-Hand Side Evaluation Order",
        code: "int x = 5, y = 3;\nx *= y + 2;  // Evaluates as x = x * (y + 2) = 25, NOT x * y + 2 = 17!",
        fix: "In compound assignment op=, the entire right-hand expression is wrapped in implicit parentheses before the arithmetic operation.",
        correct: "Be aware that x *= y + 2 is strictly equivalent to x = x * (y + 2)."
      },
      {
        num: 18,
        title: "Missing Semicolon After 'do-while' Loop Condition",
        code: "do {\n    printf(\"%d \", i++);\n} while (i <= 5)  // COMPILE ERROR! Missing semicolon",
        fix: "Unlike while and for loops, the do-while loop strictly requires a terminating semicolon after its while condition.",
        correct: "do { ... } while (i <= 5);"
      },
      {
        num: 19,
        title: "Preprocessor Macro Expansion Without Parentheses",
        code: "#define SQUARE(x) x * x\nint ans = SQUARE(2 + 3); // Expands to 2 + 3 * 2 + 3 = 11, NOT 25!",
        fix: "Macros perform raw textual substitution before compilation. Always wrap parameters and the entire macro body in parentheses.",
        correct: "#define SQUARE(x) ((x) * (x))"
      },
      {
        num: 20,
        title: "Modifying a Variable Multiple Times in a Single Expression",
        code: "int x = 5;\nprintf(\"%d %d\\n\", x++, ++x); // UNDEFINED BEHAVIOR!",
        fix: "Between sequence points, modifying a scalar object more than once produces Undefined Behavior (UB). Different compilers produce conflicting outputs.",
        correct: "Separate increments onto separate program statements with explicit sequence points."
      }
    ];

    mainCanvasEl.innerHTML = `
      <div class="content-header">
        <div class="content-badge">
          <span>High-Yield Revision</span>
          <span>•</span>
          <span>20 Exam Traps</span>
        </div>
        <h1 class="content-title">Top 20 Midterm Exam Traps & Common Gotchas</h1>
        <p class="content-lead">
          Students lose marks every semester on these exact 20 syntax and logic traps. Review them carefully to avoid losing marks on your midterm!
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1.5rem;">
        ${traps.map(t => `
          <div class="callout callout-warn" style="border-radius: var(--radius-lg); padding: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
              <span style="font-size: 1.2rem;">⚠️</span>
              <strong style="color: var(--accent-amber); font-size: 1rem; font-family: var(--font-heading);">
                ${t.num}. ${t.title}
              </strong>
            </div>
            <div style="margin-bottom: 0.75rem;">
              <pre class="code-pre" style="margin: 0; padding: 0.75rem; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); font-size: 0.85rem;"><code style="color: #fca5a5;">${escapeHtml(t.code)}</code></pre>
            </div>
            <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.6rem;">
              <strong>Why it's a Trap:</strong> ${t.fix}
            </div>
            <div style="font-size: 0.88rem; color: var(--accent-emerald);">
              <strong>Correct Code:</strong> <code style="background: rgba(16, 185, 129, 0.1); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--accent-emerald); font-family: var(--font-mono);">${escapeHtml(t.correct)}</code>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // --- RIGHT SIDEBAR & NAVBAR EXAM READINESS WIDGET ---
  function updateHeaderReadiness(percentage) {
    const percentageValue = Math.max(0, Math.min(100, Math.round(percentage)));
    const percentageElement = document.getElementById("headerReadinessPct");
    const progressBar = document.getElementById("headerReadinessBar");

    if (percentageElement) {
      percentageElement.textContent = `${percentageValue}%`;
    }
    if (progressBar) {
      progressBar.style.width = `${percentageValue}%`;
    }
  }
  window.updateHeaderReadiness = updateHeaderReadiness;

  function updateReadinessUI() {
    const m = Tracker.getMetrics();
    const pctText = document.getElementById('radialPctText');
    const radialBar = document.getElementById('radialProgressBar');
    const statusText = document.getElementById('readinessStatusText');
    const statTopics = document.getElementById('statTopics');
    const statProblems = document.getElementById('statProblems');
    const statQuiz = document.getElementById('statQuiz');

    updateHeaderReadiness(m.overallReadiness);

    if (pctText) pctText.textContent = `${m.overallReadiness}%`;
    if (statusText) {
      statusText.textContent = m.grade;
      statusText.style.color = m.gradeColor;
    }
    if (statTopics) statTopics.textContent = `${m.completedSyllabus}/${m.totalSyllabus}`;
    if (statProblems) statProblems.textContent = `${m.solvedProblemsCount}/${m.totalProblems}`;
    if (statQuiz) statQuiz.textContent = `${m.quizCorrectCount}/${m.totalQuiz}`;

    if (radialBar) {
      const offset = 251.2 - (251.2 * (m.overallReadiness / 100));
      radialBar.style.strokeDashoffset = offset;
    }
  }

  // --- TOP NAVBAR READINESS BADGE CLICK ---
  const navReadinessBadge = document.getElementById('navReadinessBadge');
  if (navReadinessBadge) {
    navReadinessBadge.addEventListener('click', () => {
      currentView = 'syllabus';
      setActiveNavTab('syllabus');
      renderSyllabusView();
      window.location.hash = 'syllabus';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- HASH ROUTING & DEEP LINKING ---
  function handleRoute() {
    const rawHash = (window.location.hash || '').replace(/^#\/?/, '').trim();
    if (!rawHash) return;

    if (rawHash.startsWith('problem/')) {
      const pid = rawHash.replace('problem/', '');
      if (currentView !== 'track-sheet') {
        currentView = 'track-sheet';
        setActiveNavTab('track-sheet');
        renderTrackSheetView();
      }
      openProblemPathModal(pid);
      return;
    }

    if (rawHash.startsWith('theory/')) {
      const tid = rawHash.replace('theory/', '');
      const topic = HandbookData.syllabus.find(t => t.id === tid);
      if (topic) {
        activeChapterId = topic.chapterId;
        Tracker.setActiveChapter(topic.chapterId);
        currentTopicId = topic.id;
      }
      currentView = 'theory';
      setActiveNavTab('theory');
      renderChapterSelector();
      renderSidebar();
      renderTheoryView();
      return;
    }

    const aliasMap = {
      'problems': 'track-sheet',
      'bank': 'track-sheet',
      'traps': 'mistakes',
      'exam-traps': 'mistakes',
      'output-prediction': 'prediction',
      'debugging': 'debuglab',
      'bug-lab': 'debuglab',
      'qa': 'theory-qa',
      'questions': 'theory-qa',
      'theory-questions': 'theory-qa',
      'flowchart': 'flowcharts',
      'patterns': 'flowcharts'
    };

    const targetView = aliasMap[rawHash] || rawHash;
    if (['syllabus', 'theory', 'track-sheet', 'roadmap', 'quiz', 'mistakes', 'prediction', 'debuglab', 'theory-qa', 'flowcharts'].includes(targetView)) {
      currentView = targetView;
      setActiveNavTab(targetView);
      renderCurrentView();
    }
  }

  window.addEventListener('hashchange', handleRoute);
  if (window.location.hash) {
    handleRoute();
  }

  // --- RUN MODAL ---
  function openRunModal() {
    if (runModalEl) runModalEl.classList.add('active');
  }

  if (closeRunModalBtn) {
    closeRunModalBtn.addEventListener('click', () => {
      runModalEl.classList.remove('active');
    });
  }

  if (runModalEl) {
    runModalEl.addEventListener('click', (e) => {
      if (e.target === runModalEl) runModalEl.classList.remove('active');
    });
  }

  // --- QUICK REVISION CHEAT SHEET MODAL ---
  const quickSheetBtn = document.getElementById('quickSheetBtn');
  const quickSheetModalOverlay = document.getElementById('quickSheetModalOverlay');
  const closeQuickSheetModal = document.getElementById('closeQuickSheetModal');

  if (quickSheetBtn) {
    quickSheetBtn.addEventListener('click', () => {
      if (quickSheetModalOverlay) {
        quickSheetModalOverlay.classList.add('active');
        quickSheetModalOverlay.setAttribute('aria-hidden', 'false');
      }
    });
  }

  if (closeQuickSheetModal) {
    closeQuickSheetModal.addEventListener('click', () => {
      if (quickSheetModalOverlay) {
        quickSheetModalOverlay.classList.remove('active');
        quickSheetModalOverlay.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (quickSheetModalOverlay) {
    quickSheetModalOverlay.addEventListener('click', (e) => {
      if (e.target === quickSheetModalOverlay) {
        quickSheetModalOverlay.classList.remove('active');
        quickSheetModalOverlay.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // --- TOAST NOTIFICATION ---
  function showToast(msg) {
    if (!toastContainerEl) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    toastContainerEl.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // =========================================================================
  // VIEW: OUTPUT PREDICTION LAB
  // =========================================================================
  function renderOutputPredictionView() {
    const labs = HandbookData.outputPredictionLab || [];
    const levelColors = { 1: 'var(--accent-emerald)', 2: 'var(--accent-cyan)', 3: 'var(--accent-amber)', 4: 'var(--accent-rose)' };
    const levelNames = { 1: '🟢 Basic', 2: '🔵 Intermediate', 3: '🔥 Exam', 4: '⚡ Tricky' };

    mainCanvasEl.innerHTML = `
      <div class="doc-article">
        <div class="content-badge-row" style="margin-bottom: 1.5rem;">
          <span class="content-badge" style="background: rgba(0,210,255,0.12); color: var(--accent-cyan);">🔮 Output Prediction Lab</span>
          <span class="content-badge">${labs.length} Questions</span>
        </div>
        <h1 class="content-title">C Output Prediction Master Lab</h1>
        <p class="content-lead">Trace each program mentally and predict the output <strong>before</strong> revealing the answer. This is the most effective exam preparation technique.</p>

        <div class="callout callout-tip" style="margin-bottom: 2rem;">
          <div class="callout-body">💡 <strong>How to use:</strong> Read the code, write your prediction on paper, then click "Reveal Answer" to check. Focus on understanding <em>why</em> the output is what it is.</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${labs.map((q, i) => `
            <div class="study-card" id="pred-${q.id}" style="border-left: 3px solid ${levelColors[q.level] || 'var(--accent-cyan)'}; padding: 1.5rem;">
              <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                <div>
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Question ${i + 1}</span>
                  <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin: 0.25rem 0 0;">${q.title}</h3>
                </div>
                <span class="content-badge" style="background: rgba(0,0,0,0.2); font-size: 0.72rem; white-space: nowrap;">${levelNames[q.level] || q.difficulty}</span>
              </div>

              <div class="code-block" style="margin-bottom: 1rem;">
                <div class="code-header"><span class="code-lang">C</span><span class="code-filename">predict.c</span></div>
                <div class="code-body"><pre class="code-pre"><code>${escapeHtml(q.code)}</code></pre></div>
              </div>

              <p style="font-size: 0.92rem; color: var(--text-secondary); font-style: italic; margin-bottom: 1rem;">❓ ${q.question}</p>

              <details style="border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.75rem 1rem;">
                <summary style="cursor: pointer; font-weight: 700; color: var(--accent-cyan); font-size: 0.9rem; user-select: none;">🔑 Reveal Answer</summary>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
                  <div style="margin-bottom: 0.75rem;">
                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Output:</span>
                    <pre style="background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); padding: 0.6rem 1rem; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-emerald); margin: 0.35rem 0 0; overflow-x: auto; max-width: 100%; white-space: pre-wrap; word-break: break-all;">${escapeHtml(q.answer)}</pre>
                  </div>
                  <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 0.6rem;">
                    <strong style="color: var(--text-primary);">Why:</strong> ${q.explanation}
                  </div>
                  <div class="callout callout-warn" style="padding: 0.65rem 0.9rem; margin-top: 0.5rem;">
                    <div class="callout-body" style="font-size: 0.85rem;">⚠️ <strong>Trap:</strong> ${q.trap}</div>
                  </div>
                </div>
              </details>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW: DEBUGGING LAB
  // =========================================================================
  function renderDebuggingLabView() {
    const bugs = HandbookData.debuggingLab || [];
    const catColors = {
      'Operators': 'var(--accent-amber)',
      'Input/Output': 'var(--accent-cyan)',
      'Preprocessor': 'var(--accent-indigo)',
      'Control Statements': 'var(--accent-rose)',
      'Loops': 'var(--accent-rose)',
      'Scoping': 'var(--text-muted)'
    };

    mainCanvasEl.innerHTML = `
      <div class="doc-article">
        <div class="content-badge-row" style="margin-bottom: 1.5rem;">
          <span class="content-badge" style="background: rgba(248,113,113,0.12); color: var(--accent-rose);">🐛 Debugging Lab</span>
          <span class="content-badge">${bugs.length} Bugs to Fix</span>
        </div>
        <h1 class="content-title">Find the Bug — C Debugging Lab</h1>
        <p class="content-lead">Each exercise shows a buggy program. Identify what is wrong and how to fix it. This is exactly what appears in university midterm exams.</p>

        <div style="display: flex; flex-direction: column; gap: 2rem; margin-top: 1.5rem;">
          ${bugs.map((bug, i) => `
            <div class="study-card" style="border-left: 3px solid ${catColors[bug.category] || 'var(--border-subtle)'}; padding: 1.5rem;">
              <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                <div>
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Bug ${i + 1}</span>
                  <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--accent-rose); margin: 0.25rem 0 0;">${bug.title}</h3>
                </div>
                <span class="content-badge" style="background: rgba(248,113,113,0.1); color: var(--accent-rose); font-size: 0.72rem;">${bug.category}</span>
              </div>

              <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.75rem;">❌ <strong>Broken Code:</strong></p>
              <div class="code-block" style="margin-bottom: 1.25rem;">
                <div class="code-body" style="border: 1px solid rgba(248,113,113,0.25);"><pre class="code-pre" style="color: #fca5a5;"><code>${escapeHtml(bug.brokenCode)}</code></pre></div>
              </div>

              <details style="border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.75rem 1rem;">
                <summary style="cursor: pointer; font-weight: 700; color: var(--accent-rose); font-size: 0.9rem; user-select: none;">🔍 Reveal: What is Wrong & Fix</summary>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.9rem;">
                  <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.65;">
                    <strong style="color: var(--accent-amber);">What is wrong:</strong> ${bug.whatIsWrong}
                  </div>
                  <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65;">
                    <strong style="color: var(--text-primary);">Why:</strong> ${bug.whyItIsWrong}
                  </div>
                  <div>
                    <p style="font-size: 0.88rem; color: var(--accent-emerald); margin-bottom: 0.4rem;">✅ <strong>Correct Code:</strong></p>
                    <div class="code-block"><div class="code-body" style="border: 1px solid rgba(16,185,129,0.25);"><pre class="code-pre" style="color: var(--accent-emerald);"><code>${escapeHtml(bug.correctCode)}</code></pre></div></div>
                  </div>
                  <div class="callout callout-tip" style="padding: 0.65rem 0.9rem;">
                    <div class="callout-body" style="font-size: 0.85rem;">💡 <strong>Lesson:</strong> ${bug.lessonLearned}</div>
                  </div>
                  <div style="font-size: 0.82rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 0.6rem;">⚠️ <strong>Trap:</strong> ${bug.trap}</div>
                </div>
              </details>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
