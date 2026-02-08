const components = {
    // ==========================================
    // 状態管理
    // ==========================================
    currentCategory: 'ALL',
    displayLimit: 6, // 一覧ページ用の初期表示数
    increment: 6,   // 「もっと見る」で増える数

    // ==========================================
    // 記事データベース
    // ==========================================
    articles: [
        { id: 'post-04', date: '2025.02.06', category: 'STYLE', title: '自分に似合うを見つける。メンズスタイルの基本', link: 'articles/post-04.html' },
        { id: 'post-03', date: '2025.02.03', category: 'GUIDE', title: '続けられるから意味がある。三日坊主を防ぐ習慣化', link: 'articles/post-03.html' },
        { id: 'post-02', date: '2025.02.04', category: 'FOOD', title: '清潔感は食事から。今日から変えられる食事の選び方', link: 'articles/post-02.html' },
        { id: 'post-01', date: '2025.02.05', category: 'CORE', title: 'はじめての方向け。毎日の生活に「軸」を取り入れるコツ', link: 'articles/post-01.html' }
    ],

    // ==========================================
    // 診断データベース
    // ==========================================
    diagnosisList: [
        {
            id: 'core-type',
            title: 'Core Type',
            category: 'Popular',
            desc: 'あなたの価値観の根源を特定し、目指すべき方向性を診断します。',
            icon: 'compass',
            color: 'indigo',
            link: 'diagnosis/core-type.html'
        },
        {
            id: 'style-identity',
            title: 'Style Identity',
            category: 'Visual',
            desc: '外見の印象を決定づける「装い」の最適解を導き出します。',
            icon: 'shirt',
            color: 'amber',
            link: 'diagnosis/style-identity.html'
        },
        {
            id: 'food-physical',
            title: 'Food & Physical',
            category: 'Condition',
            desc: '食事と運動習慣から、パフォーマンスを最大化する身体の状態を分析。',
            icon: 'apple',
            color: 'emerald',
            link: 'diagnosis/food-physical.html'
        },
        {
            id: 'focus-productivity',
            title: 'Focus & Productivity',
            category: 'Skill',
            desc: '集中力と時間管理の傾向を把握し、効率的なワークスタイルを提案。',
            icon: 'zap',
            color: 'sky',
            link: 'diagnosis/focus-productivity.html'
        }
    ],

    // ==========================================
    // 共通UI生成
    // ==========================================
    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;
        nav.className = "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent py-6 px-6 md:px-12";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <a href="index.html" class="text-xl font-black text-slate-900 tracking-tighter uppercase italic">
                    Men I <span class="text-indigo-600">Core</span>
                </a>
                <div class="hidden md:flex gap-12">
                    <a href="concept.html" class="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors uppercase">Concept</a>
                    <a href="diagnosis.html" class="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors uppercase">Diagnosis</a>
                    <a href="articles.html" class="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors uppercase">Editorial</a>
                </div>
                <button id="mobile-menu-btn" class="md:hidden text-slate-900">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        `;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white/80', 'backdrop-blur-md', 'border-slate-100', 'py-4');
                nav.classList.remove('py-6', 'border-transparent');
            } else {
                nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-slate-100', 'py-4');
                nav.classList.add('py-6', 'border-transparent');
            }
        });
    },

    initMobileMenu() {
        const btn = document.getElementById('mobile-menu-btn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            // モバイルメニュー（必要に応じて実装）
            console.log('Mobile menu toggled');
        });
    },

    initFooter() {
        const footer = document.getElementById('common-footer');
        if (!footer) return;
        footer.className = "bg-white border-t border-slate-50 py-20 px-6";
        footer.innerHTML = `
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <div class="space-y-8">
                    <h2 class="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Men I Core</h2>
                    <p class="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
                        自分という軸（CORE）を持つ。それは、情報の海に流されず、自分の価値観で選択し続ける力。
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-12">
                    <div class="space-y-6">
                        <p class="text-[10px] font-black tracking-widest text-slate-900 uppercase">Navigation</p>
                        <ul class="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <li><a href="concept.html" class="hover:text-indigo-600 transition-colors">Concept</a></li>
                            <li><a href="diagnosis.html" class="hover:text-indigo-600 transition-colors">Diagnosis</a></li>
                            <li><a href="articles.html" class="hover:text-indigo-600 transition-colors">Editorial</a></li>
                        </ul>
                    </div>
                    <div class="space-y-6">
                        <p class="text-[10px] font-black tracking-widest text-slate-900 uppercase">Legal</p>
                        <ul class="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <li><a href="#" class="hover:text-indigo-600 transition-colors">Privacy</a></li>
                            <li><a href="#" class="hover:text-indigo-600 transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-50 flex justify-between items-center">
                <p class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">&copy; 2025 Men I Core. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="text-slate-300 hover:text-indigo-600 transition-colors"><i data-lucide="instagram" class="w-4 h-4"></i></a>
                    <a href="#" class="text-slate-300 hover:text-indigo-600 transition-colors"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                </div>
            </div>
        `;
    },

    createArticleCard(article, showCategory = true) {
        return `
            <article class="article-card group">
                <a href="${article.link}" class="block space-y-5">
                    <div class="aspect-[16/10] bg-slate-100 rounded-[2rem] overflow-hidden relative">
                        <div class="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors duration-500"></div>
                        <div class="absolute top-6 left-6 flex gap-2">
                             ${showCategory ? `<span class="px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-black tracking-widest rounded-full shadow-sm">${article.category}</span>` : ''}
                        </div>
                    </div>
                    <div class="space-y-3 px-2">
                        <time class="text-[10px] font-bold text-slate-400 tracking-widest uppercase">${article.date}</time>
                        <h3 class="text-xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                            ${article.title}
                        </h3>
                    </div>
                </a>
            </article>
        `;
    },

    createDiagnosisCard(diag) {
        return `
            <a href="${diag.link}" class="diagnosis-card group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-indigo-200 transition-all">
                <div class="space-y-8 relative z-10">
                    <div class="flex justify-between items-start">
                        <div class="icon-box w-16 h-16 bg-${diag.color}-50 text-${diag.color}-600 rounded-2xl flex items-center justify-center transition-transform duration-500">
                            <i data-lucide="${diag.icon}" class="w-6 h-6"></i>
                        </div>
                        <span class="text-[10px] font-black tracking-widest text-slate-300 uppercase">${diag.category}</span>
                    </div>
                    <div class="space-y-3">
                        <h3 class="text-2xl font-black text-slate-900 uppercase italic tracking-tight">${diag.title}</h3>
                        <p class="text-slate-500 text-sm leading-relaxed font-medium">${diag.desc}</p>
                    </div>
                    <div class="flex items-center gap-2 text-[10px] font-black text-indigo-600 tracking-widest uppercase pt-2">
                        Start Test <i data-lucide="arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>
            </a>
        `;
    },

    renderArticles(containerId = 'article-grid') {
        const container = document.getElementById(containerId);
        if (!container) return;

        // カテゴリフィルタの適用
        let filtered = this.articles;
        if (this.currentCategory !== 'ALL') {
            filtered = this.articles.filter(a => a.category === this.currentCategory);
        }

        // HOMEの「最近の記事」セクションの場合は、常に最新3つに絞る
        let limit = this.displayLimit;
        if (containerId === 'recent-articles') {
            limit = 3;
        }

        const displayItems = filtered.slice(0, limit);
        
        container.innerHTML = displayItems
            .map(article => this.createArticleCard(article))
            .join('');

        // 「もっと見る」ボタンの制御
        const moreButtonContainer = document.getElementById('more-button-container');
        if (moreButtonContainer) {
            if (containerId === 'recent-articles') {
                moreButtonContainer.innerHTML = ''; // HOMEにはボタンを出さない
            } else {
                if (filtered.length > this.displayLimit) {
                    moreButtonContainer.innerHTML = `
                        <button onclick="components.loadMore()" class="group flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full font-black text-xs tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-xl shadow-slate-900/10">
                            <span>LOAD MORE</span>
                            <i data-lucide="plus" class="w-4 h-4 group-hover:rotate-90 transition-transform"></i>
                        </button>
                    `;
                } else {
                    moreButtonContainer.innerHTML = '';
                }
            }
        }
        if (window.lucide) window.lucide.createIcons();
    },

    renderDiagnosis() {
        const diagContainer = document.getElementById('diagnosis-grid');
        if (diagContainer) {
            diagContainer.innerHTML = this.diagnosisList
                .map(diag => this.createDiagnosisCard(diag))
                .join('');
        }
    },

    filterArticles(category) {
        this.currentCategory = category;
        this.displayLimit = 6;
        this.renderArticles();
        
        const btns = document.querySelectorAll('.category-btn');
        btns.forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
                btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-100');
            } else {
                btn.classList.remove('bg-slate-900', 'text-white', 'border-slate-900');
                btn.classList.add('bg-white', 'text-slate-600', 'border-slate-100');
            }
        });
    },

    loadMore() {
        this.displayLimit += this.increment;
        this.renderArticles();
    },

    render() {
        this.initNavbar();
        this.initFooter();
        this.renderArticles('recent-articles'); // index.html 用
        this.renderArticles('article-grid');    // articles.html 用
        this.renderDiagnosis();
        if (window.lucide) window.lucide.createIcons();
    }
};

window.addEventListener('DOMContentLoaded', () => components.render());
