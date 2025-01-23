import { defineConfig } from 'vitepress'
import { cursorrules, getSidebar } from './cursorrules-plugin'

export default defineConfig({
  title: "Awesome CursorRules",
  description: "A curated list of awesome .cursorrules files for enhancing Cursor AI experience",
  markdown: {
    config: (md) => {
      md.use(cursorrules())
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/cursor-ai-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Original Repo', link: 'https://github.com/PatrickJS/awesome-cursorrules' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Why .cursorrules?', link: '/guide/why-cursorrules' },
          { text: 'How to Use', link: '/guide/how-to-use' },
        ]
      },
      {
        text: 'Rules',
        items: getSidebar()
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chengazhen/awesome-cursorrules' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Awesome CursorRules'
    }
  }
}) 