const components = {
    // ==========================================
    // 記事データベース
    // 記事を新しく追加する場合は、この配列の先頭にオブジェクトを追加してください。
    // idはユニークな名前
    // dateは追加した日時
    // linkのパスは必ず articles/ファイル名.html という形式
    // category に入れる文字列
    // CORE（軸・マインド）
    // FOOD（食事）
    // STYLE（身だしなみ）
    // GUIDE（初心者向け）
    // ==========================================
    articles: [
        {
            id: 'post-03',
            date: '2025.02.03',
            category: 'GUIDE',
            title: '続けられるから意味がある。三日坊主を防ぐ習慣化',
            link: 'articles/post-03.html'
        },
        {
            id: 'post-02',
            date: '2025.02.04',
            category: 'FOOD',
            title: '清潔感は食事から。今日から変えられる食事の選び方',
            link: 'articles/post-02.html'
        },
        {
            id: 'post-01',
            date: '2025.02.05',
            category: 'CORE',
            title: 'はじめての方向け。毎日の生活に「軸」を取り入れるコツ',
            link: 'articles/post-01.html'
        }
    ],

    // ==========================================
    // 記事カードの生成 (HTML構造を完全同期)
    // ==========================================
    createArticleCard(article, isNested = false) {
        // 下層ページ(articles/)から読み込む場合は、リンクのパスを調整
        const linkPath = isNested ? article.link.replace('articles/', '') : article.link;
        
        return `
            <div onclick="location.href='${linkPath}'" class="group cursor-pointer space-y-4">
                <div class="aspect-[16/10] bg-slate-50 rounded-[2rem] border border-slate-100 relative overflow-hidden">
                    <div class="absolute inset-0 group-hover:bg-indigo-600/5 transition-colors"></div>
                </div>
                <h3 class="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">${article.title}</h3>
                <p class="text-xs text-slate-400 font-bold uppercase">${article.date} / ${article.category}</p>
            </div>
        `;
    },

    // ==========================================
    // 共通ナビゲーションの初期化
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

    // ==========================================
    // 共通フッターの初期化
    // ==========================================
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
    // モバイルメニューの制御
    // ==========================================
    toggleMenu(open) {
        const menu = document.getElementById('common-mobile-menu');
        if (menu) menu.style.display = open ? 'flex' : 'none';
        document.body.style.overflow = open ? 'hidden' : '';
    },

    initMobileMenu() {
        if (document.getElementById('common-mobile-menu')) return;
        
        const isNested = window.location.pathname.includes('/articles/');
        const prefix = isNested ? '../' : '';

        const menu = document.createElement('div');
        menu.id = 'common-mobile-menu';
        menu.style.display = 'none';
        menu.className = "fixed inset-0 z-[60] bg-white p-8 flex flex-col items-center justify-center gap-8 animate-in";
        menu.innerHTML = `
            <button onclick="components.toggleMenu(false)" class="absolute top-6 right-6 p-2 text-slate-400">
                <i data-lucide="x"></i>
            </button>
            <div class="flex flex-col gap-8 text-center font-bold text-3xl tracking-tight">
                <a href="${prefix}index.html">HOME</a>
                <a href="${prefix}diagnosis.html">DIAGNOSIS</a>
                <a href="${prefix}index.html#articles">ARTICLE</a>
                <a href="${prefix}concept.html">CONCEPT</a>
            </div>
        `;
        document.body.appendChild(menu);
    },

    // ==========================================
    // メインレンダリング処理
    // ==========================================
    render() {
        this.initNavbar();
        this.initMobileMenu();
        this.initFooter();
        
        // 記事一覧(グリッド)の描画
        const recentContainer = document.getElementById('recent-articles-grid');
        if (recentContainer) {
            const isNested = window.location.pathname.includes('/articles/');
            // 最新3件を表示
            recentContainer.innerHTML = this.articles
                .slice(0, 3)
                .map(article => this.createArticleCard(article, isNested))
                .join('');
        }

        // Lucideアイコンを適用
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
};

// DOMの読み込み完了時に実行
window.addEventListener('DOMContentLoaded', () => components.render());
