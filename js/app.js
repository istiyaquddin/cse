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
  const uiIcon = (name, className = 'ui-icon') =>
    `<svg class="${className}" aria-hidden="true" focusable="false"><use href="#icon-${name}"></use></svg>`;
  const cleanIconPrefix = value => String(value || '').replace(/^[^\p{L}\p{N}]+/u, '').trim();

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
  let currentView = 'syllabus'; // 'syllabus' | 'theory' | 'track-sheet'
  let currentTopicId = 'ch1_1';
  let activeChapterId = Tracker.getActiveChapter() || 1;
  let activeProblemFilter = 'all';

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
      const iconEl = document.getElementById('themeToggleIcon');
      if (iconEl) iconEl.innerHTML = uiIcon(theme === 'dark' ? 'sun' : 'moon');
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
      // Close mobile sidebar if open
      document.body.classList.remove('sidebar-open');
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
        // Close mobile sidebar drawer
        document.body.classList.remove('sidebar-open');
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
    } else {
      currentView = 'syllabus';
      setActiveNavTab('syllabus');
      renderSyllabusView();
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

        showToast(newState ? "Marked topic as mastered!" : "Topic reset to uncompleted");
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
            <div class="study-objective-tag">${uiIcon('target')} OBJECTIVE</div>
            <p class="study-objective-text">${topic.objective || topic.overview || 'Master foundational understanding and practical application.'}</p>
          </div>
          <div class="study-what-is-it-box">
            <div class="study-what-tag">${uiIcon('lightbulb')} WHAT IS THIS TOPIC?</div>
            <p class="study-what-text">${topic.whatIsIt || topic.overview || 'Fundamental programming concept in ANSI C.'}</p>
          </div>
        </div>

        <!-- 2. Key Concept in 3 Lines -->
        <div class="study-card study-card-concept">
          <div class="study-card-header">
            <span class="study-icon">${uiIcon('bolt')}</span>
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
              <span class="study-icon">${uiIcon('path')}</span>
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
            <span class="study-icon">${uiIcon('code')}</span>
            <h3 class="study-card-title">Clear Working Example</h3>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button class="code-copy-btn" id="studyCopyCodeBtn">
                <span>${uiIcon('clipboard')} Copy Code</span>
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
            <span class="study-icon">${uiIcon('warning')}</span>
            <h3 class="study-card-title">Most Common Exam Trap</h3>
            <span class="study-card-tag trap-tag">Watch Out!</span>
          </div>
          <div class="trap-body">
            <div class="trap-box">
              <strong>${uiIcon('warning')} The Pitfall:</strong> ${topic.commonMistake ? topic.commonMistake.trap : (topic.examTraps || 'Pay close attention to semicolon placement and boundary conditions.')}
            </div>
            ${topic.commonMistake ? `
              <div class="trap-why-box">
                <strong>Why it fails:</strong> ${topic.commonMistake.why}
              </div>
              <div class="trap-fix-box">
                <strong>How to fix it:</strong> ${topic.commonMistake.fix}
              </div>
            ` : ''}
          </div>
        </div>

        <!-- 6. Quick Memory Trick Card -->
        ${topic.memoryTrick ? `
          <div class="study-card study-card-memory">
            <div class="study-card-header">
              <span class="study-icon">${uiIcon('brain')}</span>
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
              <span class="study-icon">${uiIcon('note')}</span>
              <h3 class="study-card-title">Target Midterm Practice</h3>
              <span class="study-card-tag practice-tag">Self-Test</span>
            </div>
            <div class="practice-body">
              <div class="practice-question">${topic.practiceQuestion.q}</div>
              <details class="practice-hint-details">
                <summary class="practice-hint-summary">${uiIcon('lightbulb')} Reveal Solution Logic & Hint</summary>
                <div class="practice-hint-content">${topic.practiceQuestion.hint}</div>
              </details>
            </div>
          </div>
        ` : ''}

        <!-- 8. Advanced Exploration & Memory Architecture (Collapsible) -->
        ${(topic.diagram || topic.techTable || topic.overview) ? `
          <details class="study-card-deepdive">
            <summary class="deepdive-summary">
              <span>${uiIcon('search')} Advanced Exploration, Memory Architecture & Tech Specs (Optional Deep-Dive)</span>
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
              <span class="study-icon">${uiIcon('bolt')}</span>
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
                    <span>${uiIcon('path')} Solve & View Path</span>
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
              <span class="study-icon">${uiIcon('target')}</span>
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
                    <span class="diff-pill ${p.levelClass || 'diff-basic'}">${cleanIconPrefix(p.level || 'Practice')}</span>
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
            ${uiIcon('clipboard')} Back to Syllabus Track Sheet
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
          showToast("Code copied to clipboard!");
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
      showToast(Tracker.isSyllabusTopicCompleted(topic.id) ? "Marked as mastered!" : "Topic reset");
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
          Every single problem has an explicit <strong>Curriculum Pathway</strong>. Click any problem or <strong>[Path & Code]</strong> to view step-by-step logic, sample I/O, and verified C solutions.
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
        statusLabel = 'In Progress';
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
            ${uiIcon('book')} ${pathText}
          </button>
        </td>
        <td><span class="diff-pill ${diffClass}">${diffLabel}</span></td>
        <td>
          <button class="btn-open-path" data-open-modal="${p.id}" title="Open specific pathway & C solution">
            ${uiIcon('search')} Path & Code
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
      statusLabel = 'In Progress';
      statusClass = 'practicing';
    } else if (status === 'solved') {
      statusLabel = '✓ Solved';
      statusClass = 'solved';
    }

    problemModalBody.innerHTML = `
      <!-- Curriculum Pathway Banner -->
      <div class="pm-pathway-banner">
        <div class="pm-pathway-info">
          <div class="pm-pathway-label">${uiIcon('book')} Official Curriculum Pathway</div>
          <div class="pm-pathway-title">
            <span>${p.chapterName || 'Chapter'}</span>
            <span>➔</span>
            <span style="color: var(--accent-cyan);">${p.topicTitle || p.curriculumPath}</span>
          </div>
        </div>
        <button class="pm-jump-theory-btn" id="pmJumpTheoryBtn" data-target-topic="${p.topicId}">
          <span>${uiIcon('book')} Jump to Theory Lesson</span>
        </button>
      </div>

      <!-- Problem Title & Meta Info -->
      <div class="pm-title-block">
        <h2 class="pm-title">P-${p.num.toString().padStart(2, '0')}: ${p.title}</h2>
        <div class="pm-meta-row">
          <span class="diff-pill ${p.difficultyClass}">${p.difficultyLabel}</span>
          <span class="pm-pill">${uiIcon('note')} ${p.estTime}</span>
          <span class="pm-pill">${uiIcon('target')} Focus: ${p.focus}</span>
        </div>
      </div>

      <!-- Concept Card -->
      <div class="pm-section-card">
        <div class="pm-section-title">
          <span>${uiIcon('brain')} Core Concept & Syllabus Objective</span>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
          ${p.concept || 'Algorithmic implementation and standard C language mechanics.'}
        </p>
      </div>

      <!-- Step-by-Step Logic Pathway -->
      <div class="pm-section-card">
        <div class="pm-section-title">
          <span>${uiIcon('bolt')} Algorithmic Thinking & Execution Pathway</span>
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
            ${uiIcon('code')} C (C99 / C11 Standard - GCC Verified)
          </span>
          <button class="pm-copy-btn" id="pmCopyCodeBtn">
            <span>${uiIcon('clipboard')} Copy Code</span>
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
          showToast('C Solution copied to clipboard!');
          setTimeout(() => {
            copyBtn.innerHTML = `<span>${uiIcon('clipboard')} Copy Code</span>`;
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

  // Keyboard Escape to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (problemModalOverlay && problemModalOverlay.classList.contains('active')) {
        closeProblemPathModal();
      }
      if (readinessModalOverlay && readinessModalOverlay.classList.contains('active')) {
        closeReadinessModalFn();
      }
      if (quickSheetModalOverlay && quickSheetModalOverlay.classList.contains('active')) {
        quickSheetModalOverlay.classList.remove('active');
        quickSheetModalOverlay.setAttribute('aria-hidden', 'true');
      }
      if (browseAllOverlay && browseAllOverlay.classList.contains('active')) {
        closeBrowseAllFn();
      }
    }
  });

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

    updateHeaderReadiness(m.overallReadiness);

    if (pctText) pctText.textContent = `${m.overallReadiness}%`;
    if (statusText) {
      statusText.textContent = m.grade;
      statusText.style.color = m.gradeColor;
    }
    if (statTopics) statTopics.textContent = `${m.completedSyllabus}/${m.totalSyllabus}`;
    if (statProblems) statProblems.textContent = `${m.solvedProblemsCount}/${m.totalProblems}`;

    if (radialBar) {
      const offset = 251.2 - (251.2 * (m.overallReadiness / 100));
      radialBar.style.strokeDashoffset = offset;
    }

    // --- Sync nav tab live progress data ---
    const syllabusCount   = document.getElementById('navSyllabusCount');
    const syllabusFill    = document.getElementById('navSyllabusFill');
    const notesCount      = document.getElementById('navNotesCount');
    const notesFill       = document.getElementById('navNotesFill');
    const practiceCount   = document.getElementById('navPracticeCount');
    const practiceFill    = document.getElementById('navPracticeFill');

    const sylPct  = m.totalSyllabus > 0 ? Math.round((m.completedSyllabus / m.totalSyllabus) * 100) : 0;
    const probPct = m.totalProblems > 0 ? Math.round((m.solvedProblemsCount / m.totalProblems) * 100) : 0;

    if (syllabusCount) syllabusCount.textContent  = `${m.completedSyllabus}/${m.totalSyllabus}`;
    if (syllabusFill)  syllabusFill.style.width   = `${sylPct}%`;
    if (notesCount)    notesCount.textContent      = `${m.completedSyllabus}/${m.totalSyllabus}`;
    if (notesFill)     notesFill.style.width       = `${sylPct}%`;
    if (practiceCount) practiceCount.textContent   = `${m.solvedProblemsCount}/${m.totalProblems}`;
    if (practiceFill)  practiceFill.style.width    = `${probPct}%`;

    // Color the mini fill bars based on progress
    [syllabusFill, notesFill].forEach(el => {
      if (!el) return;
      el.style.background = sylPct >= 100 ? 'var(--accent-emerald)' :
                            sylPct >= 60  ? 'var(--accent-cyan)'    :
                            sylPct >= 30  ? 'var(--accent-amber)'   : 'rgba(148,163,184,0.5)';
    });
    if (practiceFill) {
      practiceFill.style.background = probPct >= 100 ? 'var(--accent-emerald)' :
                                      probPct >= 60  ? 'var(--accent-indigo)'  :
                                      probPct >= 30  ? 'var(--accent-amber)'   : 'rgba(148,163,184,0.5)';
    }
  }


  // --- READINESS BADGE (NAV / MOBILE) ---
  const navReadinessBadge = document.getElementById('navReadinessBadge');
  const readinessModalOverlay = document.getElementById('readinessModalOverlay');
  const closeReadinessModal = document.getElementById('closeReadinessModal');
  const modalGoSyllabusBtn = document.getElementById('modalGoSyllabusBtn');
  const modalGoPracticeBtn = document.getElementById('modalGoPracticeBtn');

  function openReadinessModal() {
    if (!readinessModalOverlay) return;
    // Sync stats
    const m = Tracker.getMetrics();
    const mPct = document.getElementById('modalRadialPctText');
    const mStatus = document.getElementById('modalReadinessStatusText');
    const mTopics = document.getElementById('modalStatTopics');
    const mProblems = document.getElementById('modalStatProblems');
    const mBar = document.getElementById('modalRadialProgressBar');
    if (mPct) mPct.textContent = `${m.overallReadiness}%`;
    if (mStatus) { mStatus.textContent = m.grade; mStatus.style.color = m.gradeColor; }
    if (mTopics) mTopics.textContent = `${m.completedSyllabus}/${m.totalSyllabus}`;
    if (mProblems) mProblems.textContent = `${m.solvedProblemsCount}/${m.totalProblems}`;
    if (mBar) {
      const offset = 251.2 - (251.2 * (m.overallReadiness / 100));
      mBar.style.strokeDashoffset = offset;
    }
    readinessModalOverlay.classList.add('active');
    readinessModalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeReadinessModalFn() {
    if (!readinessModalOverlay) return;
    readinessModalOverlay.classList.remove('active');
    readinessModalOverlay.setAttribute('aria-hidden', 'true');
  }

  if (navReadinessBadge) {
    navReadinessBadge.addEventListener('click', () => {
      openReadinessModal();
    });
  }

  if (closeReadinessModal) {
    closeReadinessModal.addEventListener('click', closeReadinessModalFn);
  }

  if (readinessModalOverlay) {
    readinessModalOverlay.addEventListener('click', (e) => {
      if (e.target === readinessModalOverlay) closeReadinessModalFn();
    });
  }

  if (modalGoSyllabusBtn) {
    modalGoSyllabusBtn.addEventListener('click', () => {
      closeReadinessModalFn();
      currentView = 'syllabus';
      setActiveNavTab('syllabus');
      renderSyllabusView();
      window.location.hash = 'syllabus';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (modalGoPracticeBtn) {
    modalGoPracticeBtn.addEventListener('click', () => {
      closeReadinessModalFn();
      currentView = 'track-sheet';
      setActiveNavTab('track-sheet');
      renderTrackSheetView();
      window.location.hash = 'track-sheet';
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
      'notes': 'theory',
      'practice': 'track-sheet',
      'problems': 'track-sheet',
      'bank': 'track-sheet'
    };

    const targetView = aliasMap[rawHash] || rawHash;
    if (['syllabus', 'theory', 'track-sheet'].includes(targetView)) {
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
        renderQuickSheetContent('15min');
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

  // --- BROWSE ALL: 34 TOPICS + 50 PROBLEMS INDEX MODAL ---
  const browseAllBtn = document.getElementById('browseAllBtn');
  const browseAllOverlay = document.getElementById('browseAllOverlay');
  const closeBrowseAll = document.getElementById('closeBrowseAll');
  const browseAllBody = document.getElementById('browseAllBody');
  const browseSearchInput = document.getElementById('browseSearchInput');
  const browseResultCount = document.getElementById('browseResultCount');
  let browseFilter = 'all';
  let browseQuery = '';

  function openBrowseAll() {
    if (!browseAllOverlay) return;
    browseQuery = '';
    browseFilter = 'all';
    if (browseSearchInput) browseSearchInput.value = '';
    document.querySelectorAll('[data-browse-filter]').forEach(b => {
      b.classList.toggle('active', b.dataset.browseFilter === 'all');
    });
    renderBrowseAll();
    browseAllOverlay.classList.add('active');
    browseAllOverlay.setAttribute('aria-hidden', 'false');
    if (browseSearchInput) setTimeout(() => browseSearchInput.focus(), 150);
  }

  function closeBrowseAllFn() {
    if (!browseAllOverlay) return;
    browseAllOverlay.classList.remove('active');
    browseAllOverlay.setAttribute('aria-hidden', 'true');
  }

  function renderBrowseAll() {
    if (!browseAllBody) return;
    const q = browseQuery.toLowerCase().trim();
    const chapters = HandbookData.chapters;
    const topics = HandbookData.syllabus;
    const problems = HandbookData.problems || [];

    let sections = [];

    // --- Build TOPICS sections ---
    if (browseFilter === 'all' || browseFilter === 'topics' ||
        browseFilter === 'ch1' || browseFilter === 'ch2' || browseFilter === 'ch3') {

      const chFilterId = browseFilter === 'ch1' ? 1 : browseFilter === 'ch2' ? 2 : browseFilter === 'ch3' ? 3 : null;

      chapters.forEach(ch => {
        if (chFilterId && ch.id !== chFilterId) return;
        const chTopics = topics.filter(t => t.chapterId === ch.id);
        const filtered = q ? chTopics.filter(t =>
          t.title.toLowerCase().includes(q) ||
          (t.badge || '').toLowerCase().includes(q) ||
          `ch${ch.id}`.includes(q)
        ) : chTopics;

        if (filtered.length === 0) return;

        const chColors = ['var(--accent-cyan)', 'var(--accent-indigo)', 'var(--accent-emerald)'];
        const color = chColors[ch.id - 1] || 'var(--accent-cyan)';

        const rows = filtered.map(t => {
          const isDone = Tracker.isSyllabusTopicCompleted(t.id);
          const path = `#theory/${t.id}`;
          return `
            <a href="${path}" class="browse-item-link" data-browse-nav="theory" data-topic-id="${t.id}">
              <span class="browse-item-num">${t.number}</span>
              <span class="browse-item-main">
                <span class="browse-item-title">${t.title}</span>
                ${t.badge ? `<span class="browse-item-badge">${t.badge}</span>` : ''}
              </span>
              <span class="browse-item-path">${path}</span>
              ${isDone ? '<span class="browse-item-done">✓</span>' : ''}
            </a>
          `;
        }).join('');

        sections.push(`
          <div class="browse-section">
            <div class="browse-section-header" style="border-color:${color}; color:${color};">
              <span class="browse-section-icon">${uiIcon('book')}</span>
              <span>${ch.name}</span>
              <span class="browse-section-count">${filtered.length} topics</span>
            </div>
            <div class="browse-items-list">${rows}</div>
          </div>
        `);
      });
    }

    // --- Build PROBLEMS section ---
    if (browseFilter === 'all' || browseFilter === 'problems') {
      let filteredProbs = problems;
      if (q) {
        filteredProbs = problems.filter(p =>
          p.title.toLowerCase().includes(q) ||
          (p.focus || '').toLowerCase().includes(q) ||
          (p.curriculumPath || '').toLowerCase().includes(q) ||
          (p.id || '').toLowerCase().includes(q) ||
          (p.num || '').toString().includes(q)
        );
      }

      if (filteredProbs.length > 0) {
        const diffColors = { 1: 'var(--accent-emerald)', 2: 'var(--accent-amber)', 3: 'var(--accent-rose)' };
        const diffLabels = { 1: 'Level 1: Very Basic', 2: 'Level 2: Basic', 3: 'Level 3: Exam Level' };

        const rows = filteredProbs.map(p => {
          const status = Tracker.getProblemStatus(p.id);
          const numStr = p.num ? p.num.toString().padStart(2, '0') : p.id;
          const path = `#problem/${p.id}`;
          const diff = p.difficulty || p.level || 1;
          const dColor = diffColors[diff] || 'var(--text-muted)';
          const dLabel = diffLabels[diff] || '';
          const isSolved = status === 'solved';
          return `
            <a href="${path}" class="browse-item-link browse-problem-link" data-browse-nav="problem" data-problem-id="${p.id}">
              <span class="browse-item-num" style="color:var(--text-muted);">#${numStr}</span>
              <span class="browse-item-main">
                <span class="browse-item-title">${p.title}</span>
                <span class="browse-item-badge" style="color:${dColor}; border-color:${dColor}33; background:${dColor}10;">${dLabel}</span>
              </span>
              <span class="browse-item-path">${p.curriculumPath || ''}</span>
              ${isSolved ? '<span class="browse-item-done">✓ Solved</span>' : ''}
            </a>
          `;
        }).join('');

        sections.push(`
          <div class="browse-section">
            <div class="browse-section-header" style="border-color:var(--accent-rose); color:var(--accent-rose);">
              <span class="browse-section-icon">${uiIcon('bolt')}</span>
              <span>50-Problem Practice Bank</span>
              <span class="browse-section-count">${filteredProbs.length} problems</span>
            </div>
            <div class="browse-items-list">${rows}</div>
          </div>
        `);
      }
    }

    // Render
    const totalShown = sections.reduce((acc, s) => {
      const countMatch = s.match(/(\d+) (topics|problems)/);
      return acc + (countMatch ? parseInt(countMatch[1]) : 0);
    }, 0);

    if (browseResultCount) {
      browseResultCount.textContent = q
        ? `${totalShown} result${totalShown !== 1 ? 's' : ''} for "${browseQuery}"`
        : `Showing all ${totalShown} items`;
    }

    browseAllBody.innerHTML = sections.length > 0
      ? sections.join('')
      : `<div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <div style="font-size:2.5rem; margin-bottom:0.75rem;">${uiIcon('search')}</div>
          <div style="font-size:1rem; font-weight:600;">No results for "${browseQuery}"</div>
          <div style="font-size:0.85rem; margin-top:0.35rem;">Try a topic name, badge, or problem number</div>
        </div>`;

    // Bind nav links
    browseAllBody.querySelectorAll('.browse-item-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const nav = link.dataset.browseNav;
        if (nav === 'theory') {
          const tid = link.dataset.topicId;
          const topic = HandbookData.syllabus.find(t => t.id === tid);
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
        } else if (nav === 'problem') {
          const pid = link.dataset.problemId;
          if (currentView !== 'track-sheet') {
            currentView = 'track-sheet';
            setActiveNavTab('track-sheet');
            renderTrackSheetView();
          }
          openProblemPathModal(pid);
          window.location.hash = `problem/${pid}`;
        }
        closeBrowseAllFn();
      });
    });
  }

  // Browse All event bindings
  if (browseAllBtn) browseAllBtn.addEventListener('click', openBrowseAll);
  if (closeBrowseAll) closeBrowseAll.addEventListener('click', closeBrowseAllFn);
  if (browseAllOverlay) {
    browseAllOverlay.addEventListener('click', (e) => {
      if (e.target === browseAllOverlay) closeBrowseAllFn();
    });
  }

  if (browseSearchInput) {
    browseSearchInput.addEventListener('input', () => {
      browseQuery = browseSearchInput.value;
      renderBrowseAll();
    });
  }

  document.querySelectorAll('[data-browse-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-browse-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      browseFilter = btn.dataset.browseFilter;
      renderBrowseAll();
    });
  });

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

  // Helper function to render dynamic Quick Revision modal content
  function renderQuickSheetContent(tier = '15min') {
    const qr = HandbookData.quickRevision || {};
    const modalBody = document.querySelector('#quickSheetModalOverlay .problem-modal-body');
    if (!modalBody) return;

    let contentHtml = `
      <!-- Modal Navigation Tabs -->
      <div class="quick-modal-tabs" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
        <button class="filter-pill ${tier === '15min' ? 'active' : ''}" data-qr-tier="15min">${uiIcon('bolt')} 15-Minute Flash Card</button>
        <button class="filter-pill ${tier === '1hour' ? 'active' : ''}" data-qr-tier="1hour">${uiIcon('note')} 1-Hour Traps & Flow</button>
        <button class="filter-pill ${tier === '3hour' ? 'active' : ''}" data-qr-tier="3hour">${uiIcon('book')} 3-Hour Core Traces</button>
        <button class="filter-pill ${tier === '1day' ? 'active' : ''}" data-qr-tier="1day">${uiIcon('clipboard')} 1-Day Full Drill</button>
      </div>
    `;

    if (tier === '15min') {
      const card = qr.fifteenMinCard || { title: '15-Minute Flash Truths', items: [] };
      contentHtml += `
        <div class="study-card" style="margin: 0; padding: 1.25rem;">
          <div style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.75rem;">
            ${uiIcon('bolt')} ${card.title} (10 Absolute Truths)
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${(card.items || []).map((item, i) => `
              <div style="padding: 0.65rem 0.85rem; background: rgba(56, 189, 248, 0.06); border-left: 3px solid var(--accent-sky); border-radius: 4px; font-size: 0.88rem;">
                <strong style="color: var(--accent-cyan);">${i + 1}.</strong> ${item}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tier === '1hour') {
      const items = qr.oneHourChecklist || [];
      contentHtml += `
        <div class="study-card" style="margin: 0; padding: 1.25rem;">
          <div style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--accent-sky); margin-bottom: 0.75rem;">
            ${uiIcon('note')} 1-Hour Exam Traps & Flow Check
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${items.map((item, i) => `
              <div style="padding: 0.65rem 0.85rem; background: rgba(99, 102, 241, 0.06); border-left: 3px solid var(--accent-indigo); border-radius: 4px; font-size: 0.88rem;">
                <strong style="color: var(--accent-indigo);">${i + 1}.</strong> ${item}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tier === '3hour') {
      const items = qr.threeHourChecklist || [];
      contentHtml += `
        <div class="study-card" style="margin: 0; padding: 1.25rem;">
          <div style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--accent-indigo); margin-bottom: 0.75rem;">
            ${uiIcon('book')} 3-Hour Core Traces & Skeletons Drill
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${items.map((item, i) => `
              <div style="padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.06); border-left: 3px solid var(--accent-emerald); border-radius: 4px; font-size: 0.88rem;">
                <strong style="color: var(--accent-emerald);">${i + 1}.</strong> ${item}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tier === '1day') {
      const items = qr.oneDayChecklist || [];
      contentHtml += `
        <div class="study-card" style="margin: 0; padding: 1.25rem;">
          <div style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.75rem;">
            ${uiIcon('clipboard')} 1-Day Full Syllabus Master Drill
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${items.map((item, i) => `
              <div style="padding: 0.65rem 0.85rem; background: rgba(245, 158, 11, 0.06); border-left: 3px solid var(--accent-amber); border-radius: 4px; font-size: 0.88rem;">
                <strong style="color: var(--accent-amber);">${i + 1}.</strong> ${item}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    modalBody.innerHTML = contentHtml;

    modalBody.querySelectorAll('[data-qr-tier]').forEach(btn => {
      btn.addEventListener('click', () => {
        renderQuickSheetContent(btn.dataset.qrTier);
      });
    });
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
