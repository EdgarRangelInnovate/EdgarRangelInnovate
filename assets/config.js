
window.$docsify = {
    name: 'Master Edgar Rangel, Vida y obra',
    // repo: 'ingalejandrorangel/ingalejandrorangel',
    coverpage: true,
    relativePath: true,
    onlyCover: true,
    loadSidebar: true,
    loadNavbar: true,
    maxLevel: 6,
    subMaxLevel: 6,
    mergeNavbar: true,
    logo: './assets/img/app.png',
    nativeEmoji: true,
    pagination: {
        crossChapter: true,
        crossChapterText: true,
    },
    // gtag: 'G-EXDNT7EDBM',
    // https://github.com/zhengxiangqi/docsify-scroll-to-top
    scrollToTop: {
        auto: true,
        text: '↑',
        right: 15,
        bottom: 15,
        offset: 500,
    },
    // https://docsify-darklight-theme.boopathikumar.me/
    darklightTheme: {
        siteFont: 'PT Sans | Source Sans Pro',
        defaultTheme: 'light | dark',
        formatUpdated: '{YYYY}-{MM}-{DD}',
        formatUpdated(time) { return time; },
        codeFontFamily: 'Roboto Mono, Monaco, courier, monospace',
        dark: {
            accent: '#42b983',
            toogleBackground: '#ffffff',
            background: '#091a28',
            textColor: '#f7e2cb',
            codeTextColor: '#ffffff',
            codeBackgroundColor: '#0e2233',
            borderColor: '#0d2538',
            blockQuoteColor: '#858585',
            highlightColor: '#d22778',
            sidebarSublink: '#b4b4b4',
            codeTypeColor: '#ffffff',
            coverBackground: 'linear-gradient(to left bottom, hsl(48.97,95.77%,25%) 0%,hsl(194.55,100%,25%) 100%)',
            toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
        },
        light: {
            accent: '#42b983',
            toogleBackground: '#091a28',
            background: '#ffffff',
            textColor: '#34495e',
            codeTextColor: '#525252',
            codeBackgroundColor: '#f8f8f8',
            borderColor: 'rgba(0, 0, 0, 0.07)',
            blockQuoteColor: '#858585',
            highlightColor: '#d22778',
            sidebarSublink: '#b4b4b4',
            codeTypeColor: '#091a28',
            coverBackground: 'linear-gradient(to left bottom, hsl(194.55,100%,46.08%) 0%,hsl(48.97,95.77%,72.16%) 100%)',
            toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)'
        }
    },
    markdown: {
        sanitize: false,
        renderer: {
            code: function (code, lang) {
                if (lang === 'drawio') {
                    if (window.drawioConverter) {
                        console.log('drawio 转化中');
                        return window.drawioConverter(code);
                    } else {
                        return `<div class='drawio-code'>${code}</div>`;
                    }
                } else {
                    return this.origin.code.apply(this, arguments);
                }
            },
        },
    },
    vueComponents: {
        'contador-button': {
            template: `
              <button @click="count += 1">
                  Me has clicado {{ count }} veces
                </button>
              `,
            data() {
                return {
                    count: 0,
                };
            },
        },
    },
    mermaidConfig: {
        querySelector: ".mermaid",
    },
};
