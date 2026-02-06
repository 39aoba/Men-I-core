/**
 * Men I Core 共通コンポーネント管理スクリプト
 * デザイン指針（Core Blue, 2.5rem Rounded, Noto Sans JP）を完全に維持
 */

const components = {
    // ロゴのHTML構造
    logo: `
      <div class="flex flex-col items-start group">
          <div class="flex items-center font-bold tracking-tight text-xl text-slate-900">
              <span>MEN</span>
              <span class="mx-1 text-indigo-600 font-black text-2xl">I</span>
              <span>C</span>
              <span class="relative inline-flex items-center justify-center">
                  <span>O</span>
                  <span class="absolute w-1 h-1 bg-indigo-600 rounded-full mt-0.5"></span>
              </span>
              <span>RE</span>
          </div>
          <span class="block text-[8px] text-slate-400 font-bold tracking-[0.2em] -mt-1 ml-[1px]">メニコア</span>
      </div>
    `,

    // ナビゲーション（ヘッダー）の初期化
    initNavbar() {
        const nav = document.getElementById('common-navbar');
        if (!nav) return;

        nav.className = "fixed w-full z-50 transition-all duration-500 h-20 flex items-center";
        nav.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
                <a href="index.html" class="block">
                    ${this.logo}
                </a>
                <button onclick="components.toggleMenu(true)" class="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <i data-lucide="menu"></i>
                </button>
            </div>
        `;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.add('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-slate-100', 'h-16', 'shadow-sm');
                nav.classList.remove('h-20');
            } else {
                nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-slate-100', 'h-16', 'shadow-sm');
                nav.classList.add('h-20');
            }
        });
    },

    // モバイルメニュー（リンク先を .html に修正）
    initMobileMenu() {
        const existingMenu = document.getElementById('common-mobile-menu');
        if (existingMenu) existingMenu.remove();

        const menu = document.createElement('div');
        menu.id = 'common-mobile-menu';
        menu.style.display = 'none';
        menu.className = "fixed inset-0 z-[60] bg-white p-8 flex flex-col transition-all duration-300";
        
        menu.innerHTML = `
            <div class="flex justify-between items-center mb-16">
                <div class="flex flex-col items-start">
                    <div class="flex items-center font-bold tracking-tight text-xl text-slate-900">
                        <span>MEN</span><span class="mx-1 text-indigo-600 font-black text-2xl">I</span><span>CORE</span>
                    </div>
                </div>
                <button onclick="components.toggleMenu(false)" class="p-2 text-slate-400 hover:bg-slate-50 rounded-full">
                    <i data-lucide="x" style="width:32px; height:32px;"></i>
                </button>
            </div>
            <div class="flex flex-col gap-8 text-center">
                <a href="index.html" onclick="components.toggleMenu(false)" class="nav-link-home text-4xl font-black tracking-tighter hover:text-indigo-600 transition-colors uppercase">HOME</a>
                <a href="diagnosis.html" onclick="components.toggleMenu(false)" class="nav-link-diagnosis text-4xl font-black tracking-tighter hover:text-indigo-600 transition-colors uppercase">DIAGNOSIS</a>
                <a href="articles.html" onclick="components.toggleMenu(false)" class="nav-link-articles text-4xl font-black tracking-tighter hover:text-indigo-600 transition-colors uppercase">ARTICLE</a>
                <a href="concept.html" onclick="components.toggleMenu(false)" class="nav-link-concept text-4xl font-black tracking-tighter hover:text-indigo-600 transition-colors uppercase">CONCEPT</a>
            </div>
            <div class="mt-auto pb-12 text-center">
                <p class="text-[10px] text-slate-400 font-bold tracking-widest uppercase italic">Create your core.</p>
            </div>
        `;
        document.body.appendChild(menu);

        // アクティブ表示のロジック
        const path = window.location.pathname;
        if (path.includes('diagnosis.html')) {
            menu.querySelector('.nav-link-diagnosis').classList.add('text-indigo-600');
        } else if (path.includes('articles.html')) {
            menu.querySelector('.nav-link-articles').classList.add('text-indigo-600');
        } else if (path.includes('concept.html')) {
            menu.querySelector('.nav-link-concept').classList.add('text-indigo-600');
        } else if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
            menu.querySelector('.nav-link-home').classList.add('text-indigo-600');
        }
    },

    // フッターの初期化
    initFooter() {
        const footer = document.getElementById('common-footer');
        if (!footer) return;

        footer.className = "bg-white pt-20 pb-12 px-6 border-t border-slate-100 text-center mt-auto";
        footer.innerHTML = `
            <div class="max-w-7xl mx-auto flex flex-col items-center">
                <a href="index.html" class="mb-4">
                    ${this.logo}
                </a>
                <p class="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-4 mb-8 italic">
                    Build your own axis. Defeat the noise.
                </p>
                <div class="h-px bg-slate-50 w-full mb-8"></div>
                <p class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                    © 2025 Men I Core. メニコア
                </p>
            </div>
        `;
    },

    // メニュー開閉
    toggleMenu(open) {
        const menu = document.getElementById('common-mobile-menu');
        if (!menu) return;
        if (open) {
            menu.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            menu.style.display = 'none';
            document.body.style.overflow = '';
        }
    },

    // 全体のレンダリング
    render() {
        this.initNavbar();
        this.initMobileMenu();
        this.initFooter();
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
};

// 実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => components.render());
} else {
    components.render();
}

