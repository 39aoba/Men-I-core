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
    // 診断データベース（ここに追加するだけで一覧に反映）
    // ==========================================
    diagnosisList: [
        {
            id: 'core-type',
            title: 'Core Type',
            category: 'Popular',
            desc: '内面の軸の状態を判定。あなたの思考の癖や精神的なタフさを知るための基本テストです。',
            icon: 'activity',
            link: 'diagnosis/core-type.html',
            color: 'indigo'
        },
        {
            id: 'food-body',
            title: 'Food & Body',
            category: 'Physical',
            desc: '日々の食事習慣から「身体の軸」をチェック。エネルギー効率を最大化するためのアクションを提案します。',
            icon: 'utensils',
            link: 'diagnosis/food-physical.html',
            color: 'emerald'
        },
        {
            id: 'style-identity',
            title: 'Style Identity',
            category: 'Identity',
            desc: '装いや自己表現の軸を判定。周囲に与える印象をコントロールし、自分らしさを視覚化する戦略を導きます。',
            icon: 'shirt',
            link: 'diagnosis/style-identity.html',
            color: 'amber'
        },
        {
            id: 'focus-productivity',
            title: 'Focus & Productivity',
            category: 'Performance',
            themeColor: 'sky',
            icon: 'zap',
            desc: 'あなたの集中力と生産性の現状を分析。脳のリソースを最適化し、高いパフォーマンスを維持するための戦略を導き出します。',
            link: 'diagnosis/focus-productivity.html'
        }
    ],

    // ==========================================
    // パス解決ユーティリティ (階層対策)
    // ==========================================
    getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/articles/') || path.includes('/diagnosis/')) {
            return '../';
        }
        return '';
    },

    // ==========================================
    // 診断カードの生成
    // ==========================================
    createDiagnosisCard(diag) {
        const prefix = this.getBasePath();
        const finalLink = prefix + diag.link;
        
        const colorClasses = {
            indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-600', shadow: 'hover:shadow-indigo-600/10' },
            emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', badge: 'bg-emerald-600', shadow: 'hover:shadow-emerald-600/10' },
            amber: { bg: 'bg-amber-50', text: 'text-amber-600', badge: 'bg-amber-500', shadow: 'hover:shadow-amber-600/10' }
        };
        const c = colorClasses[diag.color] || colorClasses.indigo;

        return `
            <div onclick="location.href='${finalLink}'" class="diagnosis-card group cursor-pointer bg-white border border-slate-100 p-8 rounded-[3rem] ${c.shadow} transition-all flex flex-col justify-between animate-in">
                <div class="space-y-6">
                    <div class="icon-box w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center ${c.text} transition-all duration-500">
                        <i data-lucide="${diag.icon}" style="width:32px; height:32px;"></i>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2 py-0.5 ${c.badge} text-[8px] font-black text-white rounded-full tracking-widest uppercase">${diag.category}</span>
                        </div>
                        <h2 class="text-2xl font-black text-slate-900 tracking-tight uppercase">${diag.title}</h2>
                        <p class="text-sm text-slate-500 font-medium leading-relaxed">${diag.desc}</p>
                    </div>
                </div>
                <div class="mt-8 flex items-center gap-2 text-slate-900 font-black text-xs tracking-widest uppercase group-hover:${c.text} transition-colors">
                    <span>Start Test</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </div>
            </div>
        `;
    },

    // ==========================================
    // 記事カードの生成
    // ==========================================
    createArticleCard(article) {
        const prefix = this.getBasePath();
        const cleanLink = article.link.startsWith('articles/') ? article.link : 'articles/' + article.link;
        const finalLink = prefix + cleanLink;
        
        return `
            <div onclick="location.href='${finalLink}'" class="group cursor-pointer space-y-4 animate-in">
                <div class="aspect-[16/10] bg-slate-50 rounded-[2rem] border border-slate-100 relative overflow-hidden">
                    <div class="absolute inset-0 group-hover:bg-indigo-600/5 transition-colors"></div>
                </div>
                <div class="space-y-2">
                    <h3 class="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">${article.title}</h3>
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">${article.date} / ${article.category}</p>
                </div>
            </div>
        `;
    },

    // ==========================================
    // UIコンポーネント初期化
    // ==========================================
    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;
        const prefix = this.getBasePath();

        nav.className = "fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-50 h-16 flex items-center";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                <a href="${prefix}index.html" class="flex items-center font-bold tracking-tight text-lg text-slate-900">
                    <span>MEN</span><span class="mx-1 text-indigo-600 font-black">I</span><span>CORE</span>
                </a>
                <button onclick="components.toggleMenu(true)" class="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        `;
    },

    initMobileMenu() {
        if (document.getElementById('common-mobile-menu')) return;
        const path = window.location.pathname;
        const prefix = this.getBasePath();

        const menuLinks = [
            { label: 'HOME', href: prefix + 'index.html', active: path.endsWith('index.html') || path.endsWith('/') },
            { label: 'DIAGNOSIS', href: prefix + 'diagnosis.html', active: path.includes('diagnosis.html') },
            { label: 'ARTICLE', href: prefix + 'articles.html', active: path.includes('articles.html') },
            { label: 'CONCEPT', href: prefix + 'concept.html', active: path.includes('concept.html') }
        ];

        const menu = document.createElement('div');
        menu.id = 'common-mobile-menu';
        menu.style.display = 'none';
        menu.className = "fixed inset-0 z-[60] bg-white p-8 flex flex-col items-center justify-center gap-8 animate-in";
        
        const linksHtml = menuLinks.map(link => `
            <a href="${link.href}" onclick="components.toggleMenu(false)"
               class="text-4xl font-bold tracking-tight transition-colors duration-300 ${link.active ? 'text-indigo-600' : 'text-slate-900 hover:text-slate-400'} uppercase">
               ${link.label}
            </a>
        `).join('');

        menu.innerHTML = `
            <button onclick="components.toggleMenu(false)" class="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900">
                <i data-lucide="x"></i>
            </button>
            <div class="flex flex-col gap-8 text-center">${linksHtml}</div>
        `;
        document.body.appendChild(menu);
    },

    toggleMenu(open) {
        const menu = document.getElementById('common-mobile-menu');
        if (menu) menu.style.display = open ? 'flex' : 'none';
        document.body.style.overflow = open ? 'hidden' : '';
    },

    initFooter() {
        const footer = document.getElementById('common-footer');
        if (!footer) return;
        footer.className = "py-12 border-t border-slate-50 bg-white text-center";
        footer.innerHTML = `
            <div class="flex flex-col items-center">
                <div class="flex items-center font-bold tracking-tight text-lg text-slate-900">
                    <span>MEN</span><span class="mx-1 text-indigo-600 font-black">I</span><span>CORE</span>
                </div>
                <p class="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-4">© 2025 Men I Core. メニコア</p>
            </div>
        `;
    },

    // ==========================================
    // 描画エンジン（記事 & 診断）
    // ==========================================
    renderArticles() {
        const recentContainer = document.getElementById('recent-articles-grid');
        if (recentContainer) {
            recentContainer.innerHTML = this.articles
                .slice(0, 3)
                .map(article => this.createArticleCard(article))
                .join('');
        }

        const allArticlesContainer = document.getElementById('article-grid');
        const moreButtonContainer = document.getElementById('more-button-container');

        if (allArticlesContainer) {
            const filtered = this.currentCategory === 'ALL' 
                ? this.articles 
                : this.articles.filter(a => a.category === this.currentCategory);

            const visibleArticles = filtered.slice(0, this.displayLimit);

            if (visibleArticles.length === 0) {
                allArticlesContainer.innerHTML = `<p class="col-span-full text-center py-20 text-slate-400 font-bold">COMING SOON...</p>`;
            } else {
                allArticlesContainer.innerHTML = visibleArticles
                    .map(article => this.createArticleCard(article))
                    .join('');
            }

            if (moreButtonContainer) {
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
        this.renderDiagnosis(); // 診断リストの描画を追加
        if (window.lucide) window.lucide.createIcons();
    }
};

window.addEventListener('DOMContentLoaded', () => components.render());
