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
        {
            id: 'core-type',
            title: 'Core Type',
            category: 'Popular',
            desc: 'あなたの精神的・生活的な「軸」の現在地を判定。思考の癖を可視化します。',
            icon: 'target',
            colorClass: 'text-indigo-600',
            bgClass: 'bg-indigo-50',
            hoverClass: 'hover:bg-indigo-600',
            tag: 'Mental',
            tagColor: 'bg-indigo-500',
            link: 'diagnosis/core-type.html'
        },
        {
            id: 'style-identity',
            title: 'Style Identity',
            category: 'Identity',
            desc: '装いや自己表現の軸を判定。周囲に与える印象をコントロールする戦略を導きます。',
            icon: 'shirt',
            colorClass: 'text-amber-600',
            bgClass: 'bg-amber-50',
            hoverClass: 'hover:bg-amber-600',
            tag: 'Fashion',
            tagColor: 'bg-amber-500',
            link: 'diagnosis/style-identity.html'
        },
        {
            id: 'food-physical',
            title: 'Food & Physical',
            category: 'Body',
            desc: '身体的なパフォーマンスを支える「食」の軸を診断。持続可能な肉体管理を提案。',
            icon: 'zap',
            colorClass: 'text-emerald-600',
            bgClass: 'bg-emerald-50',
            hoverClass: 'hover:bg-emerald-600',
            tag: 'Life',
            tagColor: 'bg-emerald-500',
            link: 'diagnosis/food-physical.html'
        },
        {
            id: 'focus-productivity',
            title: 'Focus & Productivity',
            category: 'Efficiency',
            desc: '集中力と生産性の「軸」をチェック。ノイズを遮断し、目標に直結する習慣を導きます。',
            icon: 'brain',
            colorClass: 'text-sky-600',
            bgClass: 'bg-sky-50',
            hoverClass: 'hover:bg-sky-600',
            tag: 'Work',
            tagColor: 'bg-sky-500',
            link: 'diagnosis/focus-productivity.html'
        }
    ],

    // ==========================================
    // ユーティリティ: パス自動補正
    // ==========================================
    getPath(targetPath) {
        const pathParts = window.location.pathname.split('/');
        const isSubDir = pathParts.some(part => ['articles', 'diagnosis'].includes(part));
        return isSubDir ? '../' + targetPath : targetPath;
    },

    // ==========================================
    // コンポーネント生成
    // ==========================================
    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;

        nav.className = "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="${this.getPath('index.html')}" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <span class="text-white font-black text-xl italic">M</span>
                    </div>
                    <span class="text-xl font-black tracking-tighter text-slate-900 uppercase italic">Men I Core</span>
                </a>
                
                <div class="hidden md:flex items-center gap-12">
                    <a href="${this.getPath('concept.html')}" class="text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors uppercase">Concept</a>
                    <a href="${this.getPath('diagnosis.html')}" class="text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors uppercase">Diagnosis</a>
                    <a href="${this.getPath('articles.html')}" class="text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors uppercase">Editorial</a>
                    <div class="h-4 w-px bg-slate-200"></div>
                    <button class="text-slate-900 hover:scale-110 transition-transform"><i data-lucide="search" class="w-5 h-5"></i></button>
                </div>

                <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-900">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        `;
    },

    initMobileMenu() {
        const btn = document.getElementById('mobile-menu-btn');
        if (!btn) return;

        const menuOverlay = document.createElement('div');
        menuOverlay.id = 'mobile-menu-overlay';
        menuOverlay.className = "fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[60] hidden flex flex-col items-center justify-center transition-all duration-500 opacity-0";
        menuOverlay.innerHTML = `
            <button id="close-menu-btn" class="absolute top-8 right-8 text-white">
                <i data-lucide="x" class="w-10 h-10"></i>
            </button>
            <nav class="flex flex-col items-center gap-12">
                <a href="${this.getPath('index.html')}" class="text-3xl font-black text-white tracking-widest uppercase italic">Home</a>
                <a href="${this.getPath('concept.html')}" class="text-3xl font-black text-white tracking-widest uppercase italic">Concept</a>
                <a href="${this.getPath('diagnosis.html')}" class="text-3xl font-black text-white tracking-widest uppercase italic">Diagnosis</a>
                <a href="${this.getPath('articles.html')}" class="text-3xl font-black text-white tracking-widest uppercase italic">Editorial</a>
            </nav>
        `;
        document.body.appendChild(menuOverlay);

        btn.addEventListener('click', () => {
            menuOverlay.classList.remove('hidden');
            setTimeout(() => menuOverlay.classList.add('opacity-100'), 10);
        });

        document.getElementById('close-menu-btn').addEventListener('click', () => {
            menuOverlay.classList.remove('opacity-100');
            setTimeout(() => menuOverlay.classList.add('hidden'), 500);
        });
    },

    initFooter() {
        const footer = document.getElementById('common-footer');
        if (!footer) return;

        footer.className = "bg-slate-900 text-white pt-24 pb-12 px-6 overflow-hidden";
        footer.innerHTML = `
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div class="space-y-8">
                        <a href="${this.getPath('index.html')}" class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900">
                                <span class="font-black text-xl italic">M</span>
                            </div>
                            <span class="text-xl font-black tracking-tighter uppercase italic">Men I Core</span>
                        </a>
                        <p class="text-slate-400 text-sm leading-relaxed font-medium">
                            情報過多な時代に、揺るがない自分だけの「軸」を。身体、思考、表現。すべての起点を自分へ。
                        </p>
                    </div>
                    
                    <div class="space-y-6">
                        <h4 class="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">Menu</h4>
                        <ul class="space-y-4">
                            <li><a href="${this.getPath('concept.html')}" class="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Concept</a></li>
                            <li><a href="${this.getPath('diagnosis.html')}" class="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Diagnosis</a></li>
                            <li><a href="${this.getPath('articles.html')}" class="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Editorial</a></li>
                        </ul>
                    </div>

                    <div class="space-y-6">
                        <h4 class="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">Legal</h4>
                        <ul class="space-y-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>

                    <div class="space-y-6">
                        <h4 class="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">Newsletter</h4>
                        <div class="flex">
                            <input type="text" placeholder="Email Address" class="bg-white/5 border border-white/10 px-4 py-3 text-xs font-bold rounded-l-lg focus:outline-none w-full">
                            <button class="bg-white text-slate-900 px-4 py-3 rounded-r-lg hover:bg-indigo-500 hover:text-white transition-all">
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p class="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">© 2025 MEN I CORE. ALL RIGHTS RESERVED.</p>
                    <div class="flex gap-8 text-slate-500">
                        <i data-lucide="twitter" class="w-4 h-4 hover:text-white transition-colors cursor-pointer"></i>
                        <i data-lucide="instagram" class="w-4 h-4 hover:text-white transition-colors cursor-pointer"></i>
                        <i data-lucide="github" class="w-4 h-4 hover:text-white transition-colors cursor-pointer"></i>
                    </div>
                </div>
            </div>
        `;
    },

    createArticleCard(article, isStandard = true) {
        return `
            <a href="${this.getPath(article.link)}" class="group block space-y-5">
                <div class="relative aspect-[16/10] bg-slate-100 rounded-[2rem] overflow-hidden">
                    <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                    <div class="absolute top-6 left-6 flex gap-2">
                        <span class="px-3 py-1 bg-white/90 backdrop-blur-md text-[8px] font-black tracking-[0.2em] text-slate-900 rounded-full uppercase">${article.category}</span>
                    </div>
                </div>
                <div class="space-y-3 px-2">
                    <div class="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                        <span class="tracking-widest">${article.date}</span>
                        <span class="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <span class="tracking-widest">5 MIN READ</span>
                    </div>
                    <h3 class="text-xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2 uppercase italic">${article.title}</h3>
                </div>
            </a>
        `;
    },

    createDiagnosisCard(diag) {
        return `
            <div onclick="location.href='${this.getPath(diag.link)}'" class="diagnosis-card group cursor-pointer bg-white border border-slate-100 p-8 md:p-10 rounded-[3rem] hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-500 flex flex-col justify-between min-h-[400px]">
                <div class="space-y-8">
                    <div class="icon-box w-20 h-20 ${diag.bgClass} ${diag.colorClass} rounded-3xl flex items-center justify-center transition-all duration-500">
                        <i data-lucide="${diag.icon}" style="width:36px; height:36px;"></i>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-center gap-2">
                            <span class="px-3 py-1 ${diag.tagColor} text-[8px] font-black text-white rounded-full tracking-widest uppercase">${diag.tag}</span>
                            <span class="text-[8px] font-bold text-slate-300 tracking-[0.2em] uppercase">${diag.category}</span>
                        </div>
                        <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">${diag.title}</h2>
                        <p class="text-sm text-slate-500 font-medium leading-relaxed">${diag.desc}</p>
                    </div>
                </div>
                <div class="mt-10 flex items-center gap-3 text-slate-900 font-black text-xs tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform italic">
                    <span>Start Test</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </div>
            </div>
        `;
    },

    renderArticles() {
        const container = document.getElementById('recent-articles') || document.getElementById('article-grid');
        if (container) {
            const filtered = this.currentCategory === 'ALL' 
                ? this.articles 
                : this.articles.filter(a => a.category === this.currentCategory);
            
            const visible = filtered.slice(0, this.displayLimit);
            container.innerHTML = visible.map(a => this.createArticleCard(a)).join('');

            const moreButtonContainer = document.getElementById('more-button-container');
            if (moreButtonContainer) {
                if (filtered.length > this.displayLimit) {
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
        
        // ボタンのアクティブ状態更新
        document.querySelectorAll('.category-btn').forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('bg-slate-900', 'text-white');
                btn.classList.remove('bg-white', 'text-slate-600');
            } else {
                btn.classList.remove('bg-slate-900', 'text-white');
                btn.classList.add('bg-white', 'text-slate-600');
            }
        });
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
