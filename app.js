// CareerPro Main Application Controller

// State Management
const state = {
  activeView: 'jobs',
  activePrepTab: 'aptitude',
  activeAptitudeCat: 'quant',
  activeTechSubject: 'os',
  activeDsaTopic: 'All Topics',
  activeCodeLang: 'cpp',
  currentModalDsaProblem: null,
  appliedJobs: JSON.parse(localStorage.getItem('careerpro_applied') || '[]'),
  bookmarkedJobs: JSON.parse(localStorage.getItem('careerpro_bookmarks') || '[]'),
  solvedDsaProblems: JSON.parse(localStorage.getItem('careerpro_solved_dsa') || '[]'),
  dsaNotes: JSON.parse(localStorage.getItem('careerpro_dsa_notes') || '{}'),
  quizScores: JSON.parse(localStorage.getItem('careerpro_quiz_scores') || '{}'),
  theme: localStorage.getItem('careerpro_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouting();
  renderAll();
  lucide.createIcons();
});

// Theme Management
function initTheme() {
  if (state.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('careerpro_theme', state.theme);
      if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      lucide.createIcons();
    });
  }
}

// SPA Routing
function initRouting() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Live search for jobs
  const jobSearch = document.getElementById('job-search-input');
  if (jobSearch) {
    jobSearch.addEventListener('input', renderJobs);
  }

  // Filter change listeners
  ['job-category-filter', 'job-exp-filter', 'job-type-filter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', renderJobs);
  });
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'jobs';
  const validViews = ['jobs', 'prep', 'companies', 'dsa-sheet', 'my-applications'];
  const view = validViews.includes(hash) ? hash : 'jobs';
  switchView(view);
}

function switchView(viewName) {
  state.activeView = viewName;

  // Toggle active class on navigation
  const navMap = {
    'jobs': 'nav-jobs',
    'prep': 'nav-prep',
    'companies': 'nav-companies',
    'dsa-sheet': 'nav-dsa',
    'my-applications': 'nav-applied'
  };

  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.remove('nav-tab-active', 'text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-50', 'dark:bg-indigo-950/40');
  });

  const activeNavEl = document.getElementById(navMap[viewName]);
  if (activeNavEl) {
    activeNavEl.classList.add('nav-tab-active', 'text-indigo-600', 'dark:text-indigo-400');
  }

  // Show/Hide Panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.add('hidden');
  });

  const activePanel = document.getElementById(`view-${viewName}`);
  if (activePanel) {
    activePanel.classList.remove('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function renderAll() {
  renderJobs();
  renderPrepModule();
  renderCompanies();
  renderDsaSheet();
  renderAppliedTracker();
  updateStats();
}

function updateStats() {
  const jobs = getAllJobs();
  const jobsCountEl = document.getElementById('stat-jobs-count');
  if (jobsCountEl) jobsCountEl.textContent = `${jobs.length}+`;

  const dsaCountEl = document.getElementById('stat-dsa-count');
  if (dsaCountEl) dsaCountEl.textContent = `${dsaSheetProblems.length} Problems`;

  const appliedNavBadge = document.getElementById('applied-count-nav');
  if (appliedNavBadge) appliedNavBadge.textContent = state.appliedJobs.length;

  updateDsaProgressStats();
}

// ==========================================
// 1. JOB PORTAL LOGIC
// ==========================================
function renderJobs() {
  const container = document.getElementById('jobs-container');
  if (!container) return;

  const searchQuery = (document.getElementById('job-search-input')?.value || '').toLowerCase().trim();
  const categoryFilter = document.getElementById('job-category-filter')?.value || 'all';
  const expFilter = document.getElementById('job-exp-filter')?.value || 'all';
  const typeFilter = document.getElementById('job-type-filter')?.value || 'all';

  const allJobs = getAllJobs();

  const filteredJobs = allJobs.filter(job => {
    // Search
    const matchesSearch = !searchQuery || 
      job.title.toLowerCase().includes(searchQuery) ||
      job.company.toLowerCase().includes(searchQuery) ||
      job.skills.some(s => s.toLowerCase().includes(searchQuery)) ||
      job.location.toLowerCase().includes(searchQuery);

    // Category
    const matchesCategory = categoryFilter === 'all' || job.category === categoryFilter;

    // Experience
    const matchesExp = expFilter === 'all' || job.experience.toLowerCase().includes(expFilter.toLowerCase());

    // Type
    const matchesType = typeFilter === 'all' || job.type === typeFilter;

    return matchesSearch && matchesCategory && matchesExp && matchesType;
  });

  const badgeEl = document.getElementById('job-count-badge');
  if (badgeEl) badgeEl.textContent = filteredJobs.length;

  if (filteredJobs.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">No jobs matched your criteria</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try resetting filters or searching with different keywords.</p>
        <button onclick="resetJobFilters()" class="mt-4 px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700">Reset Filters</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filteredJobs.map(job => {
    const isApplied = state.appliedJobs.some(a => a.jobId === job.id);
    const isBookmarked = state.bookmarkedJobs.includes(job.id);

    return `
      <div class="card-hover p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
        <div>
          <!-- Card Header -->
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/60 p-2 flex items-center justify-center border border-slate-200 dark:border-slate-600/50">
                <img src="${job.logo}" alt="${job.company}" class="w-7 h-7 object-contain" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3281/3281289.png'">
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white leading-tight line-clamp-1">${job.title}</h4>
                <div class="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  <span class="font-semibold text-slate-700 dark:text-slate-300">${job.company}</span>
                  <span>•</span>
                  <span>${job.type}</span>
                </div>
              </div>
            </div>
            
            <button onclick="toggleBookmark('${job.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Job'}">
              <i data-lucide="${isBookmarked ? 'bookmark-check' : 'bookmark'}" class="w-5 h-5 ${isBookmarked ? 'text-indigo-600 dark:text-indigo-400 fill-indigo-600 dark:fill-indigo-400' : ''}"></i>
            </button>
          </div>

          <!-- Badge & Category -->
          <div class="mt-3 flex flex-wrap items-center gap-1.5">
            ${job.badge ? `<span class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">${job.badge}</span>` : ''}
            <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">${job.category}</span>
            <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">${job.experience}</span>
          </div>

          <!-- Location & CTC -->
          <div class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <div class="flex items-center space-x-2">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
              <span class="truncate">${job.location}</span>
            </div>
            <div class="flex items-center space-x-2 font-semibold text-slate-800 dark:text-slate-200">
              <i data-lucide="wallet" class="w-3.5 h-3.5 text-emerald-500"></i>
              <span>${job.salary}</span>
            </div>
          </div>

          <!-- Skills tags -->
          <div class="mt-4 flex flex-wrap gap-1">
            ${job.skills.slice(0, 4).map(skill => `
              <span class="px-2 py-0.5 text-[11px] rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">${skill}</span>
            `).join('')}
            ${job.skills.length > 4 ? `<span class="px-1.5 py-0.5 text-[10px] text-slate-400">+${job.skills.length - 4}</span>` : ''}
          </div>
        </div>

        <!-- Card Footer -->
        <div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <button onclick="viewJobDetails('${job.id}')" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center space-x-1">
            <span>View Details</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>

          ${isApplied ? `
            <span class="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <i data-lucide="check" class="w-3.5 h-3.5"></i>
              <span>Applied</span>
            </span>
          ` : `
            <button onclick="openApplyModal('${job.id}')" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center space-x-1">
              <span>Quick Apply</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function resetJobFilters() {
  const searchInput = document.getElementById('job-search-input');
  if (searchInput) searchInput.value = '';
  document.getElementById('job-category-filter').value = 'all';
  document.getElementById('job-exp-filter').value = 'all';
  document.getElementById('job-type-filter').value = 'all';
  renderJobs();
}

function setJobQuickFilter(type) {
  if (type === 'FAANG') {
    document.getElementById('job-search-input').value = 'Google Amazon Microsoft Meta';
  } else if (type === 'Fresher') {
    document.getElementById('job-exp-filter').value = 'Fresher';
  } else if (type === 'Remote') {
    document.getElementById('job-type-filter').value = 'Remote';
  } else if (type === 'Unicorn') {
    document.getElementById('job-search-input').value = 'Razorpay Swiggy Zomato Flipkart';
  }
  renderJobs();
}

function toggleBookmark(jobId) {
  const idx = state.bookmarkedJobs.indexOf(jobId);
  if (idx > -1) {
    state.bookmarkedJobs.splice(idx, 1);
    showToast('Job removed from bookmarks', 'info');
  } else {
    state.bookmarkedJobs.push(jobId);
    showToast('Job saved to bookmarks!', 'success');
  }
  localStorage.setItem('careerpro_bookmarks', JSON.stringify(state.bookmarkedJobs));
  renderJobs();
  renderAppliedTracker();
}

function viewJobDetails(jobId) {
  const job = getAllJobs().find(j => j.id === jobId);
  if (!job) return;

  const contentEl = document.getElementById('modal-job-content');
  const isApplied = state.appliedJobs.some(a => a.jobId === job.id);

  contentEl.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-start space-x-4">
        <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-700/60 p-2.5 flex items-center justify-center border border-slate-200 dark:border-slate-600">
          <img src="${job.logo}" alt="${job.company}" class="w-9 h-9 object-contain" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3281/3281289.png'">
        </div>
        <div class="flex-1">
          <div class="flex items-center space-x-2">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">${job.title}</h3>
            ${job.badge ? `<span class="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">${job.badge}</span>` : ''}
          </div>
          <div class="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
            ${job.company} • ${job.location} • <span class="text-emerald-600 dark:text-emerald-400 font-semibold">${job.salary}</span>
          </div>
        </div>
      </div>

      <!-- Quick Metadata -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 text-xs">
        <div>
          <span class="text-slate-400 block">Experience</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200">${job.experience}</span>
        </div>
        <div>
          <span class="text-slate-400 block">Job Type</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200">${job.type}</span>
        </div>
        <div>
          <span class="text-slate-400 block">Category</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200">${job.category}</span>
        </div>
        <div>
          <span class="text-slate-400 block">Posted</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200">${job.postedDate || 'Recent'}</span>
        </div>
      </div>

      <!-- Overview -->
      <div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">Job Description</h4>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${job.description}</p>
      </div>

      <!-- Skills -->
      <div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">Required Tech Stack & Skills</h4>
        <div class="flex flex-wrap gap-1.5">
          ${job.skills.map(s => `<span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${s}</span>`).join('')}
        </div>
      </div>

      <!-- Requirements -->
      ${job.requirements ? `
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">Eligibility & Requirements</h4>
          <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
            ${job.requirements.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Responsibilities -->
      ${job.responsibilities ? `
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">Key Responsibilities</h4>
          <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
            ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Selection Rounds -->
      ${job.rounds ? `
        <div>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">Hiring Rounds</h4>
          <div class="space-y-2">
            ${job.rounds.map((round, idx) => `
              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-750 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center space-x-2">
                <span class="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 flex items-center justify-center font-bold">${idx + 1}</span>
                <span>${round}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Modal Action CTA -->
      <div class="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end space-x-3">
        <button onclick="closeModal('job-details-modal')" class="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">Close</button>
        ${isApplied ? `
          <button disabled class="px-5 py-2 rounded-xl text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 cursor-not-allowed">Application Submitted</button>
        ` : `
          <button onclick="closeModal('job-details-modal'); openApplyModal('${job.id}')" class="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md">Apply for this Role</button>
        `}
      </div>
    </div>
  `;

  openModal('job-details-modal');
  lucide.createIcons();
}

function openApplyModal(jobId) {
  const job = getAllJobs().find(j => j.id === jobId);
  if (!job) return;

  document.getElementById('apply-job-id').value = job.id;
  document.getElementById('apply-modal-title').textContent = `Apply for ${job.title}`;
  document.getElementById('apply-modal-company').textContent = `at ${job.company} (${job.location})`;

  openModal('job-apply-modal');
}

function handleApplySubmit(event) {
  event.preventDefault();
  const jobId = document.getElementById('apply-job-id').value;
  const job = getAllJobs().find(j => j.id === jobId);
  if (!job) return;

  const applicationData = {
    id: 'app_' + Date.now(),
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    appliedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Under Review',
    applicantName: document.getElementById('apply-name').value,
    email: document.getElementById('apply-email').value,
    phone: document.getElementById('apply-phone').value,
    experience: document.getElementById('apply-exp').value,
    resume: document.getElementById('apply-resume').value,
    notes: document.getElementById('apply-notes').value
  };

  state.appliedJobs.unshift(applicationData);
  localStorage.setItem('careerpro_applied', JSON.stringify(state.appliedJobs));

  // Also post to backend server if running
  fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(applicationData)
  }).catch(() => {/* offline fallback handled by localStorage */});

  closeModal('job-apply-modal');
  showToast(`Application successfully sent to ${job.company}!`, 'success');
  
  // Clear form
  document.getElementById('job-apply-form').reset();

  renderJobs();
  renderAppliedTracker();
  updateStats();
}

function openPostJobModal() {
  openModal('post-job-modal');
}

function handlePostJobSubmit(event) {
  event.preventDefault();
  const newJob = {
    id: 'job-custom-' + Date.now(),
    title: document.getElementById('post-title').value,
    company: document.getElementById('post-company').value,
    logo: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png',
    badge: 'Community',
    location: document.getElementById('post-location').value,
    type: 'Full-Time',
    experience: 'Fresher / Experienced',
    salary: document.getElementById('post-salary').value,
    category: document.getElementById('post-category').value,
    postedDate: 'Just now',
    skills: document.getElementById('post-skills').value.split(',').map(s => s.trim()).filter(Boolean),
    description: document.getElementById('post-description').value,
    requirements: ['Relevant industry background', 'Strong problem solving skills'],
    responsibilities: ['Build modern scalable software modules', 'Collaborate in agile engineering sprints'],
    rounds: ['Round 1: Screening Assessment', 'Round 2: Technical Interview', 'Round 3: Cultural Fit']
  };

  const customJobs = JSON.parse(localStorage.getItem('careerpro_custom_jobs') || '[]');
  customJobs.unshift(newJob);
  localStorage.setItem('careerpro_custom_jobs', JSON.stringify(customJobs));

  // Post to backend server if active
  fetch('/api/custom-jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJob)
  }).catch(() => {});

  closeModal('post-job-modal');
  document.getElementById('post-job-form').reset();
  showToast('Your job opening has been published!', 'success');

  renderJobs();
  updateStats();
}

// ==========================================
// 2. PREPARATION MODULE LOGIC
// ==========================================
function switchPrepTab(tabName) {
  state.activePrepTab = tabName;

  document.querySelectorAll('.prep-pill').forEach(btn => {
    btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
    btn.classList.add('text-slate-600', 'dark:text-slate-400');
  });

  const activeBtn = document.getElementById(`prep-tab-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
    activeBtn.classList.remove('text-slate-600', 'dark:text-slate-400');
  }

  document.querySelectorAll('.prep-panel').forEach(panel => panel.classList.add('hidden'));
  const activePanel = document.getElementById(`subpanel-${tabName}`);
  if (activePanel) activePanel.classList.remove('hidden');

  renderPrepModule();
  lucide.createIcons();
}

function renderPrepModule() {
  if (state.activePrepTab === 'aptitude') {
    renderAptitudeModule();
  } else if (state.activePrepTab === 'dsaCore') {
    renderDsaCoreModule();
  } else if (state.activePrepTab === 'technical') {
    renderTechnicalModule();
  } else if (state.activePrepTab === 'hr') {
    renderHrModule();
  }
}

// Aptitude Renderer
function renderAptitudeModule() {
  const catNav = document.getElementById('aptitude-category-nav');
  const content = document.getElementById('aptitude-content');
  if (!catNav || !content) return;

  const categories = prepData.aptitude.categories;

  // Render category buttons
  catNav.innerHTML = categories.map(cat => `
    <button onclick="setAptitudeCategory('${cat.id}')" class="px-4 py-2 rounded-xl text-sm font-semibold transition-all ${state.activeAptitudeCat === cat.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
      ${cat.name}
    </button>
  `).join('');

  const activeCatObj = categories.find(c => c.id === state.activeAptitudeCat) || categories[0];

  content.innerHTML = activeCatObj.topics.map((topic, tIdx) => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-5">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
          ${tIdx + 1}
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">${topic.title}</h3>
      </div>

      <!-- Notes with formulas -->
      <div class="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        ${topic.notes.replace(/### (.*)/g, '<h4 class="text-base font-bold text-slate-900 dark:text-white mt-2 mb-2">$1</h4>')
                     .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                     .replace(/\\n/g, '<br>')}
      </div>

      <!-- Interactive Practice Questions -->
      <div class="space-y-4 pt-3">
        <h4 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-2">
          <i data-lucide="help-circle" class="w-4 h-4 text-indigo-500"></i>
          <span>Interactive Practice Problems</span>
        </h4>

        ${topic.questions.map((q) => `
          <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 space-y-3" id="quiz-card-${q.id}">
            <p class="text-sm font-semibold text-slate-800 dark:text-slate-200">${q.question}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="options-group-${q.id}">
              ${q.options.map((opt, optIdx) => `
                <button onclick="checkAptitudeAnswer('${q.id}', ${optIdx}, ${q.correct}, '${encodeURIComponent(q.explanation)}')" 
                  class="option-btn-${q.id} text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-all">
                  <span class="font-bold text-slate-400 mr-2">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
                </button>
              `).join('')}
            </div>
            <div id="feedback-${q.id}" class="hidden p-3 rounded-xl text-xs sm:text-sm leading-relaxed"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function setAptitudeCategory(catId) {
  state.activeAptitudeCat = catId;
  renderAptitudeModule();
}

function checkAptitudeAnswer(qId, selectedIdx, correctIdx, explanationEncoded) {
  const explanation = decodeURIComponent(explanationEncoded);
  const feedbackEl = document.getElementById(`feedback-${qId}`);
  const optionButtons = document.querySelectorAll(`.option-btn-${qId}`);

  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300', 'font-bold');
    } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
      btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
    }
  });

  feedbackEl.classList.remove('hidden');
  if (selectedIdx === correctIdx) {
    feedbackEl.className = 'p-3 rounded-xl text-xs sm:text-sm bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200';
    feedbackEl.innerHTML = `<strong>Correct! 🎉</strong> ${explanation}`;
    showToast('Correct Answer! +10 Points', 'success');
  } else {
    feedbackEl.className = 'p-3 rounded-xl text-xs sm:text-sm bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200';
    feedbackEl.innerHTML = `<strong>Incorrect.</strong> ${explanation}`;
  }
}

// DSA Core Foundation Renderer
function renderDsaCoreModule() {
  const content = document.getElementById('dsa-core-content');
  if (!content) return;

  const topics = prepData.dsaCore.topics;
  content.innerHTML = topics.map((t, idx) => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
          ${idx + 1}
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">${t.title}</h3>
      </div>
      <div class="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto">
        ${formatMarkdownContent(t.content)}
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// Technical CS Module (OS, DBMS, CN, OOP)
function renderTechnicalModule() {
  const nav = document.getElementById('tech-subject-nav');
  const content = document.getElementById('technical-content');
  if (!nav || !content) return;

  const subjects = prepData.technical.subjects;

  nav.innerHTML = subjects.map(sub => `
    <button onclick="setTechSubject('${sub.id}')" class="px-4 py-2 rounded-xl text-sm font-semibold transition-all ${state.activeTechSubject === sub.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
      ${sub.name}
    </button>
  `).join('');

  const activeSub = subjects.find(s => s.id === state.activeTechSubject) || subjects[0];

  content.innerHTML = `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-6">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">${activeSub.badge}</span>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-2">${activeSub.name}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">${activeSub.summary}</p>
        </div>
      </div>

      <!-- Core Revision Notes -->
      <div class="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto">
        ${formatMarkdownContent(activeSub.notes)}
      </div>

      <!-- High Yield Interview Q&A -->
      <div class="space-y-3 pt-2">
        <h4 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Top Technical Interview Questions</h4>
        ${activeSub.qa.map((item, qIdx) => `
          <div class="border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
            <button onclick="toggleFaq('tech-faq-${activeSub.id}-${qIdx}')" class="w-full text-left p-4 font-semibold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 flex items-center justify-between">
              <span>Q${qIdx + 1}: ${item.q}</span>
              <i data-lucide="chevron-down" id="arrow-tech-faq-${activeSub.id}-${qIdx}" class="w-4 h-4 text-slate-400 transition-transform"></i>
            </button>
            <div id="tech-faq-${activeSub.id}-${qIdx}" class="hidden p-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/40">
              ${item.a}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  lucide.createIcons();
}

function setTechSubject(subId) {
  state.activeTechSubject = subId;
  renderTechnicalModule();
}

// HR & Behavioral Module
function renderHrModule() {
  const content = document.getElementById('hr-content');
  if (!content) return;

  const hr = prepData.hr;

  content.innerHTML = `
    <!-- STAR Method Guide Card -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200 dark:border-indigo-800/80 space-y-4">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
          ⭐
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">${hr.starMethod.title}</h3>
          <p class="text-xs text-slate-600 dark:text-slate-300">The gold standard framework for answering behavioral and situational questions.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        ${hr.starMethod.steps.map(step => `
          <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">${step.letter}</div>
            <div class="text-sm font-bold text-slate-900 dark:text-white mt-0.5">${step.word}</div>
            <p class="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">${step.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Top HR Interview Questions with High-Scoring Model Answers -->
    <div class="space-y-4">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">Top Behavioral & HR Questions with Sample Answers</h3>

      ${hr.questions.map((q, idx) => `
        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">Question ${idx + 1}</span>
              <h4 class="text-lg font-bold text-slate-900 dark:text-white mt-1.5">${q.question}</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1"><strong>Why interviewers ask:</strong> ${q.whyAsked}</p>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs text-indigo-900 dark:text-indigo-200">
            <strong>Winning Formula:</strong> ${q.formula}
          </div>

          <!-- Sample High-Score Answer -->
          <div>
            <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Sample High-Scoring Response:</h5>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
              "${q.sampleAnswer}"
            </div>
          </div>

          <!-- Dos and Don'ts -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div class="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
              <span class="font-bold text-emerald-800 dark:text-emerald-300 block mb-1 flex items-center space-x-1">
                <i data-lucide="check" class="w-3.5 h-3.5"></i>
                <span>Key Dos</span>
              </span>
              <ul class="space-y-1 text-emerald-900 dark:text-emerald-200 list-disc list-inside">
                ${q.dos.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
            <div class="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50">
              <span class="font-bold text-rose-800 dark:text-rose-300 block mb-1 flex items-center space-x-1">
                <i data-lucide="x" class="w-3.5 h-3.5"></i>
                <span>Pitfalls to Avoid</span>
              </span>
              <ul class="space-y-1 text-rose-900 dark:text-rose-200 list-disc list-inside">
                ${q.donts.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  lucide.createIcons();
}

function toggleFaq(id) {
  const el = document.getElementById(id);
  const arrow = document.getElementById(`arrow-${id}`);
  if (!el) return;
  el.classList.toggle('hidden');
  if (arrow) arrow.classList.toggle('rotate-180');
}

// Markdown helper for bold and tables
function formatMarkdownContent(raw) {
  return raw
    .replace(/^### (.*$)/gim, '<h4 class="text-base font-bold text-slate-900 dark:text-white mt-4 mb-2">$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim().length > 0);
      if (cells.some(c => c.includes('---'))) return '';
      return `<tr class="border-b border-slate-200 dark:border-slate-700">${cells.map(c => `<td class="py-2 px-3 border border-slate-200 dark:border-slate-700">${c.trim()}</td>`).join('')}</tr>`;
    });
}

// ==========================================
// 3. COMPANIES HIRING PROCESS LOGIC
// ==========================================
function renderCompanies() {
  const container = document.getElementById('companies-container');
  if (!container) return;

  const categoryFilter = document.getElementById('company-filter')?.value || 'all';

  const filtered = companiesData.filter(c => {
    return categoryFilter === 'all' || c.category === categoryFilter;
  });

  container.innerHTML = filtered.map(comp => `
    <div class="card-hover p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-6">
      <!-- Header -->
      <div class="flex items-start justify-between">
        <div class="flex items-center space-x-3.5">
          <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/60 p-2 flex items-center justify-center border border-slate-200 dark:border-slate-600">
            <img src="${comp.logo}" alt="${comp.name}" class="w-8 h-8 object-contain" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3281/3281289.png'">
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">${comp.name}</h3>
            <div class="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
              <span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold">${comp.category}</span>
              <span>•</span>
              <span>${comp.tier}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Packages / CTC Breakdown -->
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">Salary & Role Tiers</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          ${comp.packages.map(p => `
            <div class="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800 last:border-0">
              <span class="text-slate-600 dark:text-slate-300 font-medium">${p.role}:</span>
              <span class="font-bold text-emerald-600 dark:text-emerald-400">${p.ctc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Eligibility Criteria -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center space-x-1.5">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-indigo-500"></i>
          <span>Eligibility Criteria</span>
        </h4>
        <div class="space-y-1 text-xs text-slate-600 dark:text-slate-300">
          <div><strong>Academic Cutoff:</strong> ${comp.eligibility.percentage}</div>
          <div><strong>Degree/Branches:</strong> ${comp.eligibility.degree}</div>
          <div><strong>Backlog Rule:</strong> ${comp.eligibility.backlogs}</div>
          <div><strong>Gap Years:</strong> ${comp.eligibility.gapYears}</div>
        </div>
      </div>

      <!-- Selection Process Rounds -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center space-x-1.5">
          <i data-lucide="git-merge" class="w-3.5 h-3.5 text-cyan-500"></i>
          <span>Selection Rounds</span>
        </h4>
        <div class="space-y-2">
          ${comp.selectionProcess.map((round, rIdx) => `
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/60 text-xs">
              <div class="font-bold text-slate-800 dark:text-slate-200">${round.round} (${round.type})</div>
              <p class="text-slate-500 dark:text-slate-400 mt-0.5">${round.details}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Exam Pattern Table -->
      <div>
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-emerald-500"></i>
            <span>Exam Pattern (${comp.examPattern.totalDuration})</span>
          </h4>
          <span class="text-[11px] text-slate-400">${comp.examPattern.negativeMarking}</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border border-slate-200 dark:border-slate-700/80 rounded-lg overflow-hidden">
            <thead class="bg-slate-100 dark:bg-slate-750 text-slate-700 dark:text-slate-300 font-semibold">
              <tr>
                <th class="py-1.5 px-2.5">Section</th>
                <th class="py-1.5 px-2.5">Questions</th>
                <th class="py-1.5 px-2.5">Time</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
              ${comp.examPattern.sections.map(s => `
                <tr class="text-slate-600 dark:text-slate-300">
                  <td class="py-1.5 px-2.5">${s.section}</td>
                  <td class="py-1.5 px-2.5 font-medium">${s.questions} Q</td>
                  <td class="py-1.5 px-2.5 font-medium">${s.time}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Syllabus & Prep Strategy -->
      <div class="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs space-y-1.5">
        <div class="font-bold text-amber-900 dark:text-amber-200 flex items-center space-x-1">
          <i data-lucide="lightbulb" class="w-3.5 h-3.5"></i>
          <span>Proven Prep Strategy</span>
        </div>
        <p class="text-amber-800 dark:text-amber-300 leading-relaxed">${comp.prepStrategy}</p>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function filterCompanies() {
  renderCompanies();
}

// ==========================================
// 4. DEDICATED TOPIC-WISE DSA SHEET LOGIC
// ==========================================
function renderDsaSheet() {
  renderDsaTopicsNav();
  filterDsaProblems();
}

function renderDsaTopicsNav() {
  const nav = document.getElementById('dsa-topics-nav');
  if (!nav) return;

  nav.innerHTML = dsaTopics.map(topic => `
    <button onclick="setDsaTopic('${topic}')" class="whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${state.activeDsaTopic === topic ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
      ${topic}
    </button>
  `).join('');
}

function setDsaTopic(topic) {
  state.activeDsaTopic = topic;
  renderDsaTopicsNav();
  filterDsaProblems();
}

function filterDsaProblems() {
  const container = document.getElementById('dsa-problems-container');
  if (!container) return;

  const searchQuery = (document.getElementById('dsa-search-input')?.value || '').toLowerCase().trim();
  const diffFilter = document.getElementById('dsa-difficulty-filter')?.value || 'all';
  const statusFilter = document.getElementById('dsa-status-filter')?.value || 'all';

  const filtered = dsaSheetProblems.filter(prob => {
    // Topic
    const matchesTopic = state.activeDsaTopic === 'All Topics' || prob.topic === state.activeDsaTopic;

    // Search
    const matchesSearch = !searchQuery || 
      prob.title.toLowerCase().includes(searchQuery) ||
      prob.companies.some(c => c.toLowerCase().includes(searchQuery)) ||
      prob.topic.toLowerCase().includes(searchQuery);

    // Difficulty
    const matchesDiff = diffFilter === 'all' || prob.difficulty === diffFilter;

    // Status
    const isSolved = state.solvedDsaProblems.includes(prob.id);
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'solved' && isSolved) || 
      (statusFilter === 'unsolved' && !isSolved);

    return matchesTopic && matchesSearch && matchesDiff && matchesStatus;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <p class="text-sm font-semibold text-slate-500">No DSA problems match this filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((prob, idx) => {
    const isSolved = state.solvedDsaProblems.includes(prob.id);
    const hasNotes = !!state.dsaNotes[prob.id];

    return `
      <div class="card-hover p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center space-x-3.5">
          <!-- Checkbox -->
          <input type="checkbox" ${isSolved ? 'checked' : ''} onchange="toggleDsaSolved('${prob.id}')"
            class="w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 dark:border-slate-600 cursor-pointer">

          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-mono text-slate-400">#${prob.id.replace('dsa-', '')}</span>
              <a href="${prob.leetcodeUrl}" target="_blank" rel="noopener noreferrer" class="font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center space-x-1">
                <span class="${isSolved ? 'line-through text-slate-400 dark:text-slate-500' : ''}">${prob.title}</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-400"></i>
              </a>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap items-center gap-1.5 mt-1 text-xs">
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${prob.difficulty === 'Easy' ? 'badge-easy' : prob.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}">
                ${prob.difficulty}
              </span>
              <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                ${prob.topic}
              </span>
              <span class="text-slate-400 text-[11px] hidden sm:inline">•</span>
              <div class="hidden sm:flex items-center space-x-1 text-[11px] text-slate-500 dark:text-slate-400">
                <span>Asked at:</span>
                ${prob.companies.slice(0, 3).map(c => `<span class="font-semibold text-slate-700 dark:text-slate-300">${c}</span>`).join(', ')}
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-2 self-end md:self-auto">
          <button onclick="openDsaSolutionModal('${prob.id}')" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 transition-colors flex items-center space-x-1">
            <i data-lucide="code-2" class="w-3.5 h-3.5"></i>
            <span>Solution & Code</span>
          </button>
          
          <button onclick="openDsaSolutionModal('${prob.id}', true)" class="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" title="${hasNotes ? 'View Note' : 'Add Note'}">
            <i data-lucide="${hasNotes ? 'file-text' : 'pencil'}" class="w-4 h-4 ${hasNotes ? 'text-amber-500' : ''}"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function toggleDsaSolved(probId) {
  const idx = state.solvedDsaProblems.indexOf(probId);
  if (idx > -1) {
    state.solvedDsaProblems.splice(idx, 1);
  } else {
    state.solvedDsaProblems.push(probId);
    showToast('Problem marked as Solved! Keep going! 🚀', 'success');
  }
  localStorage.setItem('careerpro_solved_dsa', JSON.stringify(state.solvedDsaProblems));
  updateDsaProgressStats();
  filterDsaProblems();
}

function updateDsaProgressStats() {
  const total = dsaSheetProblems.length;
  const solved = state.solvedDsaProblems.length;
  const pct = total === 0 ? 0 : Math.round((solved / total) * 100);

  const solvedCountEl = document.getElementById('dsa-solved-count');
  if (solvedCountEl) solvedCountEl.textContent = solved;

  const totalCountEl = document.getElementById('dsa-total-count');
  if (totalCountEl) totalCountEl.textContent = total;

  const pctTextEl = document.getElementById('dsa-percentage-text');
  if (pctTextEl) pctTextEl.textContent = `${pct}% Completed`;

  const barEl = document.getElementById('dsa-progress-bar');
  if (barEl) barEl.style.width = `${pct}%`;

  const navBadge = document.getElementById('dsa-nav-badge');
  if (navBadge) navBadge.textContent = `${pct}%`;
}

function openDsaSolutionModal(probId, focusNotes = false) {
  const prob = dsaSheetProblems.find(p => p.id === probId);
  if (!prob) return;

  state.currentModalDsaProblem = prob;

  const header = document.getElementById('dsa-solution-header');
  header.innerHTML = `
    <div class="flex items-center space-x-2">
      <span class="px-2 py-0.5 rounded text-xs font-semibold ${prob.difficulty === 'Easy' ? 'badge-easy' : prob.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}">${prob.difficulty}</span>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white">${prob.title}</h3>
    </div>
    <div class="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
      <span>Topic: <strong>${prob.topic}</strong></span>
      <span>•</span>
      <span>Time: <code class="text-indigo-600 dark:text-indigo-400 font-mono font-bold">${prob.timeComplexity}</code></span>
      <span>•</span>
      <span>Space: <code class="text-indigo-600 dark:text-indigo-400 font-mono font-bold">${prob.spaceComplexity}</code></span>
    </div>
  `;

  const approachBox = document.getElementById('dsa-approach-box');
  approachBox.innerHTML = `
    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1 flex items-center space-x-1.5">
      <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-500"></i>
      <span>Optimal Approach & Intuition</span>
    </h4>
    <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${prob.approach}</p>
  `;

  // Render personal note
  const notesArea = document.getElementById('dsa-personal-notes');
  if (notesArea) {
    notesArea.value = state.dsaNotes[prob.id] || '';
  }

  selectCodeLanguage(state.activeCodeLang);
  openModal('dsa-solution-modal');
  lucide.createIcons();

  if (focusNotes && notesArea) {
    setTimeout(() => notesArea.focus(), 200);
  }
}

function selectCodeLanguage(lang) {
  state.activeCodeLang = lang;
  const prob = state.currentModalDsaProblem;
  if (!prob) return;

  ['cpp', 'java', 'python', 'javascript'].forEach(l => {
    const tab = document.getElementById(`lang-tab-${l}`);
    if (tab) {
      if (l === lang) {
        tab.className = 'px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-600 text-white';
      } else {
        tab.className = 'px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200';
      }
    }
  });

  const codeDisplay = document.getElementById('dsa-code-display');
  if (codeDisplay) {
    codeDisplay.textContent = prob.solutions[lang] || '// Solution not available in this language';
  }
}

function copyCurrentCode() {
  const codeDisplay = document.getElementById('dsa-code-display');
  if (!codeDisplay) return;

  navigator.clipboard.writeText(codeDisplay.textContent).then(() => {
    const btnText = document.getElementById('copy-btn-text');
    if (btnText) btnText.textContent = 'Copied!';
    showToast('Code copied to clipboard!', 'success');
    setTimeout(() => {
      if (btnText) btnText.textContent = 'Copy Code';
    }, 2000);
  });
}

function savePersonalNote() {
  const prob = state.currentModalDsaProblem;
  if (!prob) return;

  const note = document.getElementById('dsa-personal-notes')?.value || '';
  if (note.trim()) {
    state.dsaNotes[prob.id] = note.trim();
  } else {
    delete state.dsaNotes[prob.id];
  }

  localStorage.setItem('careerpro_dsa_notes', JSON.stringify(state.dsaNotes));
  showToast('Note saved successfully!', 'success');
  filterDsaProblems();
}

// ==========================================
// 5. APPLIED TRACKER & SAVED JOBS LOGIC
// ==========================================
function renderAppliedTracker() {
  const appliedContainer = document.getElementById('applied-jobs-list');
  const bookmarkedContainer = document.getElementById('bookmarked-jobs-list');
  const trackerCount = document.getElementById('tracker-count');

  if (trackerCount) trackerCount.textContent = state.appliedJobs.length;

  if (appliedContainer) {
    if (state.appliedJobs.length === 0) {
      appliedContainer.innerHTML = `
        <div class="p-8 text-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <i data-lucide="inbox" class="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600 mb-2"></i>
          <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">No applications submitted yet</p>
          <p class="text-xs text-slate-400 mt-1">Browse open roles in the Job Portal and apply directly.</p>
          <a href="#jobs" class="inline-block mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white">Browse Jobs</a>
        </div>
      `;
    } else {
      appliedContainer.innerHTML = state.appliedJobs.map(app => `
        <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm flex items-center justify-between">
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">${app.jobTitle}</h4>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              <span>${app.company}</span> • <span>Applied on ${app.appliedDate}</span>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            ${app.status || 'Under Review'}
          </span>
        </div>
      `).join('');
    }
  }

  if (bookmarkedContainer) {
    const allJobs = getAllJobs();
    const bookmarked = allJobs.filter(j => state.bookmarkedJobs.includes(j.id));

    if (bookmarked.length === 0) {
      bookmarkedContainer.innerHTML = `
        <p class="text-xs text-slate-400 text-center py-4">No bookmarked jobs.</p>
      `;
    } else {
      bookmarkedContainer.innerHTML = bookmarked.map(job => `
        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
          <div>
            <div class="font-bold text-slate-800 dark:text-slate-200">${job.title}</div>
            <div class="text-slate-400">${job.company} • ${job.salary}</div>
          </div>
          <button onclick="openApplyModal('${job.id}')" class="px-2.5 py-1 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700">Apply</button>
        </div>
      `).join('');
    }
  }

  lucide.createIcons();
}

// Modal Helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Toast notification helper
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  const icon = document.getElementById('toast-icon');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;

  if (type === 'success') {
    toast.className = 'fixed bottom-5 right-5 z-50 transition-all duration-300 flex items-center space-x-2 px-4 py-3 rounded-xl bg-emerald-900 text-emerald-100 shadow-xl border border-emerald-700 text-sm';
  } else if (type === 'info') {
    toast.className = 'fixed bottom-5 right-5 z-50 transition-all duration-300 flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-900 text-slate-100 shadow-xl border border-slate-700 text-sm';
  }

  toast.classList.remove('translate-y-20', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}
