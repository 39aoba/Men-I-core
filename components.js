const components = {
    // ==========================================
    // 状態管理
    // ==========================================
    currentCategory: 'ALL',
    displayLimit: 6,
    increment: 6,

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
        { id: 'core-type', title: 'Core Type', category: 'Popular', desc: 'あなたの思考の「核」となるタイプを診断。', icon: 'zap', color: 'bg-indigo-600', link: 'diagnosis/core-type.html' },
        { id: 'style-identity', title: 'Style Identity', category: 'Appearance', desc: '外見的な軸、自分に似合うスタイルを特定。', icon: 'user', color: 'bg-amber-500', link: 'diagnosis/style-identity.html' },
        { id: 'food-physical', title: 'Food & Physical', category: 'Health', desc: '食事と身体、パフォーマンスの土台を診断。', icon: 'activity', color: 'bg-emerald-500', link: 'diagnosis/food-physical.html' },
        { id: 'focus-productivity', title: 'Focus & Productivity', category: 'Work', desc: '集中力と生産性、時間の使い方の軸を診断。', icon: 'target', color: 'bg-sky-500', link: 'diagnosis/focus-productivity.html' }
    ],

    // ==========================================
    // ナビゲーション生成 (HOME追加)
    // ==========================================
    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;

        nav.className = "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="index.html" class="text-xl font-black tracking-tighter text-slate-900 uppercase italic">
                    Men I <span class="text-indigo-600">Core</span>
                </a>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center gap-10">
                    <a href="index.html" class="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors uppercase">Home</a>
                    <a href="concept.html" class="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors uppercase">Concept</a>
                    <a href="diagnosis.html" class="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors uppercase">Diagnosis</a>
                    <a href="articles.html" class="text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors uppercase">Editorial</a>
                </div>

                <!-- Mobile Toggle -->
                <button id="menu-toggle" class="md:hidden p-2 text-slate-900">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>

            <!-- Mobile Menu Overflow -->
            <div id="mobile-menu" class="fixed inset-0 bg-slate-900 z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 opacity-0 pointer-events-none translate-y-4">
                <button id="menu-close" class="absolute top-6 right-6 p-2 text-white/50">
                    <i data-lucide="x" class="w-8 h-8"></i>
                </button>
                <a href="index.html" class="text-4xl font-black text-white italic tracking-tighter hover:text-indigo-400 transition-colors uppercase">Home</a>
                <a href="concept.html" class="text-4xl font-black text-white italic tracking-tighter hover:text-indigo-400 transition-colors uppercase">Concept</a>
                <a href="diagnosis.html" class="text-4xl font-black text-white italic tracking-tighter hover:text-indigo-400 transition-colors uppercase">Diagnosis</a>
                <a href="articles.html" class="text-4xl font-black text-white italic tracking-tighter hover:text-indigo-400 transition-colors uppercase">Editorial</a>
            </div>
        `;
    },

    // ==========================================
    // モバイルメニュー制御 (修正済み)
    // ==========================================
    initMobileMenu() {
        const toggle = document.getElementById('menu-toggle');
        const close = document.getElementById('menu-close');
        const menu = document.getElementById('mobile-menu');

        if (!toggle || !menu || !close) return;

        toggle.addEventListener('click', () => {
            menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            menu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
        });

        close.addEventListener('click', () => {
            menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            menu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
        });
    },

    // ==========================================
    // フッター生成 (HOME追加)
    // ==========================================
    initFooter() {
        const footer = document.getElementById('common-footer');
        if (!footer) return;

        footer.className = "bg-white border-t border-slate-100 py-20 px-6";
        footer.innerHTML = `
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
                <div class="space-y-6">
                    <a href="index.html" class="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
                        Men I <span class="text-indigo-600">Core</span>
                    </a>
                    <p class="text-slate-400 text-xs font-medium leading-relaxed max-w-xs uppercase tracking-widest">
                        Stay focused on your core.<br>Build your own standard.
                    </p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div class="space-y-6">
                        <h4 class="text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase">Navigation</h4>
                        <ul class="space-y-4">
                            <li><a href="index.html" class="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Home</a></li>
                            <li><a href="concept.html" class="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Concept</a></li>
                            <li><a href="diagnosis.html" class="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Diagnosis</a></li>
                            <li><a href="articles.html" class="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Editorial</a></li>
                        </ul>
                    </div>
                    <div class="space-y-6">
                        <h4 class="text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase">Social</h4>
                        <ul class="space-y-4">
                            <li><a href="#" class="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Twitter (X)</a></li>
                            <li><a href="#" class="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-50 flex justify-between items-center">
                <p class="text-[10px] font-bold text-slate-300 tracking-widest uppercase">© 2025 Men I Core. All Rights Reserved.</p>
            </div>
        `;
    },

    // ==========================================
    // 記事カード生成
    // ==========================================
    createArticleCard(article) {
        return `
            <a href="${article.link}" class="group block space-y-6 animate-in">
                <div class="aspect-[16/10] bg-slate-100 rounded-[2rem] overflow-hidden relative">
                    <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-indigo-600/10 transition-colors duration-500"></div>
                    <div class="absolute top-6 left-6 px-4 py-1.5 bg-white rounded-full text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase shadow-sm">
                        ${article.category}
                    </div>
                </div>
                <div class="space-y-3 px-2">
                    <span class="text-[10px] font-black text-indigo-600/50 tracking-widest">${article.date}</span>
                    <h3 class="text-xl font-black text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                        ${article.title}
                    </h3>
                </div>
            </a>
        `;
    },

    renderArticles(containerId) {
        const targetId = containerId || (document.getElementById('recent-articles') ? 'recent-articles' : 'article-grid');
        const container = document.getElementById(targetId);
        if (!container) return;

        let list = this.articles;
        if (this.currentCategory !== 'ALL') {
            list = list.filter(a => a.category === this.currentCategory);
        }

        const isRecentOnly = targetId === 'recent-articles';
        const displayList = isRecentOnly ? list.slice(0, 3) : list.slice(0, this.displayLimit);

        container.innerHTML = displayList.map(a => this.createArticleCard(a)).join('');

        // フィルタボタンのアクティブ状態の同期 (修正済み)
        const buttons = document.querySelectorAll('.category-btn');
        buttons.forEach(btn => {
            const cat = btn.getAttribute('data-category');
            if (cat === this.currentCategory) {
                btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-100');
                btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
            } else {
                btn.classList.add('bg-white', 'text-slate-600', 'border-slate-100');
                btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
            }
        });

        // Load More ボタン制御
        if (!isRecentOnly) {
            const moreButtonContainer = document.getElementById('more-button-container');
            if (moreButtonContainer) {
                if (list.length > this.displayLimit) {
                    moreButtonContainer.innerHTML = `
                        <button onclick="components.loadMore()" class="group flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full font-black text-xs tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-xl shadow-slate-900/10 uppercase italic">
                            <span>Load More</span>
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
            diagContainer.innerHTML = this.diagnosisList.map(diag => `
                <a href="${diag.link}" class="diagnosis-card group p-10 bg-white border border-slate-100 rounded-[3rem] hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 animate-in">
                    <div class="space-y-8">
                        <div class="flex justify-between items-start">
                            <div class="icon-box w-16 h-16 ${diag.color} rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-500">
                                <i data-lucide="${diag.icon}"></i>
                            </div>
                            <span class="text-[10px] font-black tracking-widest text-slate-300 uppercase">${diag.category}</span>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-2xl font-black text-slate-900 tracking-tight uppercase italic">${diag.title}</h3>
                            <p class="text-slate-400 text-sm font-medium leading-relaxed">${diag.desc}</p>
                        </div>
                        <div class="pt-4 flex items-center gap-2 text-indigo-600 font-black text-[10px] tracking-[0.2em] uppercase">
                            Start Test <i data-lucide="arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </div>
                </a>
            `).join('');
        }
    },

    filterArticles(category) {
        this.currentCategory = category;
        this.displayLimit = 6;
        this.renderArticles();
    },

    loadMore() {
        this.displayLimit += this.increment;
        this.renderArticles();
    },

    render() {
        this.initNavbar();
        this.initMobileMenu();
        this.initFooter();
        this.renderArticles();
        this.renderDiagnosis();
        if (window.lucide) window.lucide.createIcons();
    }
};

window.addEventListener('DOMContentLoaded', () => components.render());
