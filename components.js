/**
 * Men I Core 共通コンポーネント & 記事自動更新システム
 * このファイルの 'articles' リストを更新するだけで、全ページの表示が変わります。
 */

const components = {
    // ==========================================
    // 1. 記事データベース
    // 新しい記事を追加する際は、このリストの一番上に追加してください。
    // ==========================================
    articles: [
        {
            id: 'post-01',
            date: '2025.02.05',
            category: 'Core',
            categoryColor: 'text-indigo-600',
            title: 'はじめての方向け。毎日の生活に「軸」を取り入れるコツ',
            description: '「何から始めればいいかわからない」そんな迷いを解消し、日々のルーティンに自分らしさを組み込む方法を解説。',
            link: 'articles/post-01.html',
            imageIcon: 'image'
        },
        {
            id: 'post-02',
            date: '2025.02.04',
            category: 'Food',
            categoryColor: 'text-emerald-600',
            title: '清潔感は食事から。今日から変えられる食事の選び方',
            description: '外見のケアと同じくらい大切なインナーケア。肌荒れを防ぎ、活力を生むための食材選びの基本。',
            link: 'articles/post-02.html',
            imageIcon: 'utensils'
        },
        {
            id: 'post-03',
            date: '2025.02.03',
            category: 'Guide',
            categoryColor: 'text-amber-600',
            title: '続けられるから意味がある。三日坊主を防ぐ習慣化の科学',
            description: '気合いだけでは続かない。脳の仕組みを理解して、努力を「当たり前」に変えるステップ。',
            link: 'articles/post-03.html',
            imageIcon: 'zap'
        }
    ],

    // ==========================================
    // 2. 記事カードの生成（HTMLテンプレート）
    // ==========================================
    createArticleCard(article, isNested = false) {
        let linkPath = article.link;
        // 階層(articles/内かどうか)に応じてリンクを調整
        if (isNested) {
            linkPath = article.link.replace('articles/', '');
        }
        
        return `
            <article onclick="location.href='${linkPath}'" class="group cursor-pointer space-y-5">
                <div class="aspect-[16/10] bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all duration-500">
                    <div class="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors duration-500"></div>
                    <div class="w-full h-full flex items-center justify-center text-slate-200">
                         <i data-lucide="${article.imageIcon}" style="width:40px; height:40px;"></i>
                    </div>
                </div>
                <div class="space-y-3 px-2 text-left">
                    <div class="flex items-center gap-3">
                        <span class="text-[10px] font-black ${article.categoryColor} uppercase tracking-widest">${article.category}</span>
                        <span class="text-[10px] font-bold text-slate-300">${article.date}</span>
                    </div>
                    <h3 class="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">${article.title}</h3>
                    <p class="text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">${article.description}</p>
                </div>
            </article>
        `;
    },

    // ==========================================
    // 3. 表示実行ロジック
    // ==========================================
    
    // 記事一覧ページ用
    renderArticleList() {
        const container = document.getElementById('article-grid');
        if (!container) return;
        const isNested = window.location.pathname.includes('/articles/');
        container.innerHTML = this.articles.map(a => this.createArticleCard(a, isNested)).join('');
    },

    // トップページ用（最新3件）
    renderRecentArticles() {
        const container = document.getElementById('recent-articles-grid');
        if (!container) return;
        const recent = this.articles.slice(0, 3);
        container.innerHTML = recent.map(a => this.createArticleCard(a, false)).join('');
    },

    // ==========================================
    // 4. UIコンポーネント
    // ==========================================
    logo: `
      <div class="flex flex-col items-start group">
          <div class="flex items-center font-bold tracking-tight text-xl text-slate-900">
              <span>MEN</span><span class="mx-1 text-indigo-600 font-black text-2xl">I</span><span>CORE</span>
          </div>
          <span class="block text-[8px] text-slate-400 font-bold tracking-[0.2em] -mt-1 ml-[1px]">メニコア</span>
      </div>
    `,

    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;
        const isNested = window.location.pathname.includes('/articles/');
        const prefix = isNested ? '../' : '';
        nav.className = "fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20 flex items-center";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                <a href="${prefix}index.html" class="block">${this.logo}</a>
                <button onclick="components.toggleMenu(true)" class="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"><i data-lucide="menu"></i></button>
            </div>
        `;
    },

    initFooter() {
        const footer = document.getElementById('common-footer');
        if (!footer) return;
        footer.className = "bg-white pt-20 pb-12 px-6 border-t border-slate-100 text-center mt-auto";
        footer.innerHTML = `<div class="max-w-7xl mx-auto flex flex-col items-center">${this.logo}<p class="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-8">© 2025 Men I Core. メニコア</p></div>`;
    },

    toggleMenu(open) {
        const menu = document.getElementById('common-mobile-menu');
        if (!menu) return;
        menu.style.display = open ? 'flex' : 'none';
        document.body.style.overflow = open ? 'hidden' : '';
    },

    initMobileMenu() {
        if (document.getElementById('common-mobile-menu')) return;
        const menu = document.createElement('div');
        menu.id = 'common-mobile-menu';
        menu.style.display = 'none';
        menu.className = "fixed inset-0 z-[60] bg-white p-8 flex flex-col";
        const prefix = window.location.pathname.includes('/articles/') ? '../' : '';
        menu.innerHTML = `
            <div class="flex justify-between items-center mb-16">${this.logo}<button onclick="components.toggleMenu(false)"><i data-lucide="x" style="width:32px; height:32px;"></i></button></div>
            <div class="flex flex-col gap-8 text-center font-black text-4xl">
                <a href="${prefix}index.html" class="hover:text-indigo-600 transition-colors">HOME</a>
                <a href="${prefix}diagnosis.html" class="hover:text-indigo-600 transition-colors">DIAGNOSIS</a>
                <a href="${prefix}articles.html" class="hover:text-indigo-600 transition-colors">ARTICLE</a>
            </div>
        `;
        document.body.appendChild(menu);
    },

    render() {
        this.initNavbar();
        this.initMobileMenu();
        this.initFooter();
        this.renderArticleList();
        this.renderRecentArticles();
        if (window.lucide) window.lucide.createIcons();
    }
};

window.addEventListener('DOMContentLoaded', () => components.render());
