const components = {
    // ==========================================
    // GitHub Pages 用のベースパス設定
    // ==========================================
    basePath: '/Men-I-core/',

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
        { id: 'post-07', date: '2025.02.15', category: 'FOOD', title: '脳の霧を晴らす食事。仕事の質を最大化する朝の選択', link: 'articles/post-07.html' },
        { id: 'post-06', date: '2025.02.20', category: 'STYLE', title: '少ない服で最高の清潔感。ミニマリスト流・最強の3セット', link: 'articles/post-06.html'   },
        { id: 'post-05', date: '2025.02.15', category: 'CORE', title: '情報のデトックス。1日スマホを置くだけで「軸」が戻る理由', link: 'articles/post-05.html' },
        { id: 'post-04', date: '2025.02.06', category: 'STYLE', title: '自分に似合うを見つける。メンズスタイルの基本', link: 'articles/post-04.html' },
        { id: 'post-03', date: '2025.02.03', category: 'GUIDE', title: '続けられるから意味がある。三日坊主を防ぐ習慣化', link: 'articles/post-03.html' },
        { id: 'post-02', date: '2025.02.04', category: 'FOOD', title: '清潔感は食事から。今日から変えられる食事の選び方', link: 'articles/post-02.html' },
        { id: 'post-01', date: '2025.02.05', category: 'CORE', title: 'はじめての方向け。毎日の生活に「軸」を取り入れるコツ', link: 'articles/post-01.html' }
    ],

    // ==========================================
    // 診断データベース
    // ==========================================
    diagnosisList: [
        { id: 'core-type', title: 'Core Type', category: 'Popular', desc: 'あなたの思考の「核」となるタイプを診断。', icon: 'target', color: 'indigo', link: 'diagnosis/core-type.html' },
        { id: 'focus-productivity', title: 'Focus & Productivity', category: 'Mind', desc: '集中力と生産性の現状を分析。', icon: 'zap', color: 'sky', link: 'diagnosis/focus-productivity.html' },
        { id: 'food-physical', title: 'Food & Physical', category: 'Body', desc: '身体的パフォーマンスの土台をチェック。', icon: 'activity', color: 'emerald', link: 'diagnosis/food-physical.html' },
        { id: 'style-identity', title: 'Style Identity', category: 'Appearance', desc: '外見を一つの表現として捉える診断。', icon: 'user', color: 'amber', link: 'diagnosis/style-identity.html' }
    ],

    // ==========================================
    // ユーティリティ: 正しいパスを生成する
    // ==========================================
    getPath(relativeLink) {
        if (relativeLink.startsWith('http')) return relativeLink;
        return this.basePath + relativeLink.replace(/^\//, '');
    },

    // ==========================================
    // ナビゲーション生成 (修正版)
    // ==========================================
    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;

        nav.className = "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-white/80 backdrop-blur-md";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="${this.getPath('index.html')}" class="text-xl font-black text-slate-900 tracking-tighter uppercase italic">
                    Men I <span class="text-indigo-600">Core</span>
                </a>
                
                <!-- ナビゲーションを右側に配置 -->
                <div class="hidden md:flex items-center gap-12 ml-auto pr-8">
                    <a href="${this.getPath('concept.html')}" class="text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors uppercase italic">Concept</a>
                    <a href="${this.getPath('diagnosis.html')}" class="text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors uppercase italic">Diagnosis</a>
                    <a href="${this.getPath('articles.html')}" class="text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors uppercase italic">Editorial</a>
                </div>

                <div class="flex items-center">
                    <button id="mobile-menu-btn" class="md:hidden text-slate-900 p-2">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu (クリックで表示・非表示を切り替え) -->
            <div id="mobile-menu" class="hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-8 flex flex-col gap-8 shadow-xl">
                <a href="${this.getPath('concept.html')}" class="text-sm font-black tracking-[0.2em] text-slate-900 uppercase italic">Concept</a>
                <a href="${this.getPath('diagnosis.html')}" class="text-sm font-black tracking-[0.2em] text-slate-900 uppercase italic">Diagnosis</a>
                <a href="${this.getPath('articles.html')}" class="text-sm font-black tracking-[0.2em] text-slate-900 uppercase italic">Editorial</a>
            </div>
        `;
    },

    initMobileMenu() {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if (btn && menu) {
            btn.onclick = (e) => {
                e.stopPropagation();
                menu.classList.toggle('hidden');
            };
            // メニュー以外をクリックした時に閉じる
            document.addEventListener('click', () => {
                if (!menu.classList.contains('hidden')) menu.classList.add('hidden');
            });
            menu.onclick = (e) => e.stopPropagation();
        }
    },

    // ==========================================
    // フッター生成 (デザイン固定)
    // ==========================================
    initFooter() {
        const footer = document.getElementById('common-footer');
        if (!footer) return;

        footer.className = "bg-slate-900 pt-24 pb-12 px-6";
        footer.innerHTML = `
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div class="col-span-1 md:col-span-2 space-y-8">
                        <a href="${this.getPath('index.html')}" class="text-2xl font-black text-white tracking-tighter uppercase italic">
                            Men I <span class="text-indigo-500">Core</span>
                        </a>
                        <p class="max-w-sm text-slate-400 text-sm leading-relaxed font-medium">
                            自分という軸を創るための、メンズセルフケア・プラットフォーム。
                            本質的な情報と診断を通じて、揺るぎない自信を。
                        </p>
                        <div class="flex gap-6">
                            <a href="#" class="text-slate-500 hover:text-white transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                            <a href="#" class="text-slate-500 hover:text-white transition-colors"><i data-lucide="twitter" class="w-5 h-5"></i></a>
                        </div>
                    </div>
                    
                    <div class="space-y-8">
                        <h4 class="text-[10px] font-black tracking-[0.3em] text-white uppercase italic">Navigation</h4>
                        <ul class="space-y-4">
                            <li><a href="${this.getPath('concept.html')}" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium">Concept</a></li>
                            <li><a href="${this.getPath('diagnosis.html')}" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium">Diagnosis</a></li>
                            <li><a href="${this.getPath('articles.html')}" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium">Editorial</a></li>
                        </ul>
                    </div>

                    <div class="space-y-8">
                        <h4 class="text-[10px] font-black tracking-[0.3em] text-white uppercase italic">Contact</h4>
                        <ul class="space-y-4">
                            <li><a href="#" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium">About Us</a></li>
                            <li><a href="#" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium">Terms of Service</a></li>
                            <li><a href="#" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
                    <p class="text-[10px] font-bold text-slate-600 tracking-[0.2em] uppercase">© 2025 Men I Core. All rights reserved.</p>
                    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="text-[10px] font-black text-white tracking-[0.2em] uppercase italic flex items-center gap-2 hover:text-indigo-400 transition-colors">
                        Back to Top <i data-lucide="arrow-up" class="w-3 h-3"></i>
                    </button>
                </div>
            </div>
        `;
    },

    // ==========================================
    // 描画ロジック (トップページと一覧ページ両対応)
    // ==========================================
    renderArticles() {
        const gridContainer = document.getElementById('article-grid');
        const recentContainer = document.getElementById('recent-articles');

        const renderHtml = (list) => list.map(art => `
            <article class="group space-y-6 animate-in">
                <a href="${this.getPath(art.link)}" class="block aspect-[16/10] bg-slate-100 rounded-[2rem] overflow-hidden relative shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 opacity-50"></div>
                    <div class="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur rounded-full">
                        <span class="text-[10px] font-black tracking-widest text-indigo-600 uppercase">${art.category}</span>
                    </div>
                </a>
                <div class="space-y-4 px-2 text-left">
                    <time class="text-[10px] font-black text-slate-300 tracking-widest uppercase">${art.date}</time>
                    <h3 class="text-xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                        <a href="${this.getPath(art.link)}">${art.title}</a>
                    </h3>
                </div>
            </article>
        `).join('');

        // index.html用の「最新記事3つ」
        if (recentContainer) {
            recentContainer.innerHTML = renderHtml(this.articles.slice(0, 3));
        }

        // articles.html用の「記事一覧」
        if (gridContainer) {
            const filtered = this.currentCategory === 'ALL' 
                ? this.articles 
                : this.articles.filter(a => a.category === this.currentCategory);
            gridContainer.innerHTML = renderHtml(filtered.slice(0, this.displayLimit));
            this.updateFilterButtons();
        }
    },

    updateFilterButtons() {
        const buttons = document.querySelectorAll('.category-btn');
        buttons.forEach(btn => {
            const category = btn.getAttribute('data-category');
            if (category === this.currentCategory) {
                btn.className = "category-btn px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all uppercase italic bg-indigo-600 text-white border border-indigo-600 shadow-lg shadow-indigo-100";
            } else {
                btn.className = "category-btn px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all uppercase italic bg-white border border-slate-100 text-slate-400 hover:border-indigo-600";
            }
        });
    },

    renderDiagnosis() {
        const diagContainer = document.getElementById('diagnosis-grid');
        if (!diagContainer) return;
        
        const colorClasses = {
            indigo: 'bg-indigo-50 text-indigo-600',
            sky: 'bg-sky-50 text-sky-600',
            amber: 'bg-amber-50 text-amber-600',
            emerald: 'bg-emerald-50 text-emerald-600'
        };

        diagContainer.innerHTML = this.diagnosisList.map(diag => `
            <a href="${this.getPath(diag.link)}" class="diagnosis-card group p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-indigo-600 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-50 flex flex-col justify-between min-h-[320px] text-left">
                <div class="space-y-8">
                    <div class="flex justify-between items-start">
                        <div class="icon-box w-14 h-14 ${colorClasses[diag.color] || colorClasses.indigo} rounded-2xl flex items-center justify-center transition-transform">
                            <i data-lucide="${diag.icon}"></i>
                        </div>
                        <span class="text-[10px] font-black tracking-widest text-slate-300 uppercase">${diag.category}</span>
                    </div>
                    <div class="space-y-4">
                        <h3 class="text-2xl font-black text-slate-900 tracking-tight uppercase italic">${diag.title}</h3>
                        <p class="text-slate-400 text-sm font-medium leading-relaxed">${diag.desc}</p>
                    </div>
                </div>
                <div class="pt-4 flex items-center gap-2 text-indigo-600 font-black text-[10px] tracking-[0.2em] uppercase">
                    Start Test <i data-lucide="arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>
                </div>
            </a>
        `).join('');
    },

    filterArticles(category) {
        this.currentCategory = category;
        this.displayLimit = 6;
        this.renderArticles();
        if (window.lucide) window.lucide.createIcons();
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
