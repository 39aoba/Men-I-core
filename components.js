const components = {
    // ==========================================
    // 状態管理
    // ==========================================
    currentCategory: 'ALL',
    displayLimit: 6, // 最初に見せる数（テスト用に少なめに設定。後で9や12に変更可能）
    increment: 6,    // 「MORE」で増やす数

    // ==========================================
    // 記事データベース
    // ==========================================
    articles: [
        { id: 'post-04', date: '2025.02.06', category: 'STYLE', title: '自分に似合うを見つける。メンズスタイルの基本', link: 'articles/post-04.html' },
        { id: 'post-03', date: '2025.02.03', category: 'GUIDE', title: '続けられるから意味がある。三日坊主を防ぐ習慣化', link: 'articles/post-03.html' },
        { id: 'post-02', date: '2025.02.04', category: 'FOOD', title: '清潔感は食事から。今日から変えられる食事の選び方', link: 'articles/post-02.html' },
        { id: 'post-01', date: '2025.02.05', category: 'CORE', title: 'はじめての方向け。毎日の生活に「軸」を取り入れるコツ', link: 'articles/post-01.html' },
        // ダミーデータを増やすことで動作確認しやすくなります
        { id: 'post-05', date: '2025.02.07', category: 'CORE', title: '【デモ】5つ目の記事タイトル', link: '#' },
        { id: 'post-06', date: '2025.02.08', category: 'STYLE', title: '【デモ】6つ目の記事タイトル', link: '#' },
        { id: 'post-07', date: '2025.02.09', category: 'FOOD', title: '【デモ】7つ目の記事タイトル', link: '#' },
        { id: 'post-08', date: '2025.02.10', category: 'GUIDE', title: '【デモ】8つ目の記事タイトル', link: '#' }
    ],

    // ==========================================
    // 記事カードの生成
    // ==========================================
    createArticleCard(article, isNested = false) {
        const linkPath = isNested ? article.link.replace('articles/', '') : article.link;
        return `
            <div onclick="location.href='${linkPath}'" class="group cursor-pointer space-y-4 animate-in">
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
    // フィルタ & ページング処理
    // ==========================================
    filterArticles(category) {
        this.currentCategory = category;
        this.displayLimit = 6; // カテゴリを変えたら表示件数をリセット
        
        const buttons = document.querySelectorAll('.category-btn');
        buttons.forEach(btn => {
            const btnCat = btn.getAttribute('data-category');
            if (btnCat === category) {
                btn.classList.add('bg-indigo-600', 'text-white');
                btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-100');
            } else {
                btn.classList.remove('bg-indigo-600', 'text-white');
                btn.classList.add('bg-white', 'text-slate-600', 'border-slate-100');
            }
        });
        this.renderArticles();
    },

    loadMore() {
        this.displayLimit += this.increment;
        this.renderArticles();
    },

    // ==========================================
    // UIコンポーネント
    // ==========================================
    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;
        const isNested = window.location.pathname.includes('/articles/');
        const prefix = isNested ? '../' : '';
        nav.className = "fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-50 h-16 flex items-center";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                <a href="${prefix}index.html" class="flex items-center font-bold tracking-tight text-lg text-slate-900">
                    <span>MEN</span><span class="mx-1 text-indigo-600 font-black">I</span><span>CORE</span>
                </a>
                <button onclick="components.toggleMenu(true)" class="p-2 text-slate-400 hover:text-slate-900">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        `;
    },

    initMobileMenu() {
        if (document.getElementById('common-mobile-menu')) return;
        const path = window.location.pathname;
        const isNested = path.includes('/articles/');
        const prefix = isNested ? '../' : '';
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
               class="text-4xl font-bold tracking-tight transition-colors ${link.active ? 'text-indigo-600' : 'text-slate-900 hover:text-slate-400'} uppercase">
               ${link.label}
            </a>
        `).join('');
        menu.innerHTML = `
            <button onclick="components.toggleMenu(false)" class="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900"><i data-lucide="x"></i></button>
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
        footer.innerHTML = `<div class="flex flex-col items-center"><div class="flex items-center font-bold tracking-tight text-lg text-slate-900"><span>MEN</span><span class="mx-1 text-indigo-600 font-black">I</span><span>CORE</span></div><p class="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-4">© 2025 Men I Core. メニコア</p></div>`;
    },

    // ==========================================
    // 記事描画エンジン
    // ==========================================
    renderArticles() {
        const isNested = window.location.pathname.includes('/articles/');

        // 1. トップページ用（常に最新3件）
        const recentContainer = document.getElementById('recent-articles-grid');
        if (recentContainer) {
            recentContainer.innerHTML = this.articles
                .slice(0, 3)
                .map(article => this.createArticleCard(article, isNested))
                .join('');
        }

        // 2. 記事一覧ページ用
        const allArticlesContainer = document.getElementById('article-grid');
        const moreButtonContainer = document.getElementById('more-button-container');

        if (allArticlesContainer) {
            const filtered = this.currentCategory === 'ALL' 
                ? this.articles 
                : this.articles.filter(a => a.category === this.currentCategory);

            // 現在の表示制限に基づいて切り出し
            const visibleArticles = filtered.slice(0, this.displayLimit);

            if (visibleArticles.length === 0) {
                allArticlesContainer.innerHTML = `<p class="col-span-full text-center py-20 text-slate-400 font-bold">COMING SOON...</p>`;
            } else {
                allArticlesContainer.innerHTML = visibleArticles
                    .map(article => this.createArticleCard(article, isNested))
                    .join('');
            }

            // 「もっと見る」ボタンの表示制御
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

        if (window.lucide) window.lucide.createIcons();
    },

    render() {
        this.initNavbar();
        this.initMobileMenu();
        this.initFooter();
        this.renderArticles();
    }
};

window.addEventListener('DOMContentLoaded', () => components.render());

