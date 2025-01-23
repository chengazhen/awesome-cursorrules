import { defineConfig } from 'vitepress'
import { cursorrules } from './cursorrules-plugin'

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
      { text: 'Guide', link: '/guide/' },
      { text: 'Rules', link: '/rules/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Why .cursorrules?', link: '/guide/why-cursorrules' },
          { text: 'How to Use', link: '/guide/how-to-use' },
          { text: 'Contributing', link: '/guide/contributing' },
          { text: 'Rules Format', link: '/guide/rules-format' }
        ]
      },
      {
        text: 'Rules',
        items: [
          { 
            text: 'Frontend Frameworks',
            items: [
              { text: 'Next.js 15 (React 19, Vercel AI)', link: 'rules/nextjs15-react19-vercelai-tailwind-cursorrules-prompt-file/README.md' },
              { text: 'Next.js App Router', link: 'rules/nextjs-app-router-cursorrules-prompt-file/README.md' },
              { text: 'Next.js Material UI', link: 'rules/nextjs-material-ui-tailwind-css-cursorrules-prompt/README.md' },
              { text: 'Next.js React Tailwind', link: 'rules/nextjs-react-tailwind-cursorrules-prompt-file/README.md' },
              { text: 'Next.js React TypeScript', link: 'rules/nextjs-react-typescript-cursorrules-prompt-file/README.md' },
              { text: 'Next.js SEO', link: 'rules/nextjs-seo-dev-cursorrules-prompt-file/README.md' },
              { text: 'Next.js Supabase shadcn/ui', link: 'rules/nextjs-supabase-shadcn-pwa-cursorrules-prompt-file/README.md' },
              { text: 'Next.js TypeScript', link: 'rules/nextjs-typescript-cursorrules-prompt-file/README.md' },
              { text: 'Next.js Vercel', link: 'rules/nextjs-vercel-typescript-cursorrules-prompt-file/README.md' },
              { text: 'Qwik Basic', link: 'rules/qwik-basic-cursorrules-prompt-file/README.md' },
              { text: 'Qwik Tailwind', link: 'rules/qwik-tailwind-cursorrules-prompt-file/README.md' },
              { text: 'React Components', link: 'rules/react-components-creation-cursorrules-prompt-file/README.md' },
              { text: 'React Next.js UI', link: 'rules/react-nextjs-ui-development-cursorrules-prompt-fil/README.md' },
              { text: 'SolidJS Basic', link: 'rules/solidjs-basic-cursorrules-prompt-file/README.md' },
              { text: 'SolidJS TypeScript', link: 'rules/solidjs-typescript-cursorrules-prompt-file/README.md' },
              { text: 'SolidJS Tailwind', link: 'rules/solidjs-tailwind-cursorrules-prompt-file/README.md' },
              { text: 'Svelte 5 vs 4', link: 'rules/svelte-5-vs-svelte-4-cursorrules-prompt-file/README.md' },
              { text: 'SvelteKit RESTful', link: 'rules/sveltekit-restful-api-tailwind-css-cursorrules-pro/README.md' },
              { text: 'SvelteKit TypeScript', link: 'rules/sveltekit-typescript-guide-cursorrules-prompt-file/README.md' },
              { text: 'Vue 3 Composition', link: 'rules/vue3-composition-api-cursorrules-prompt-file/README.md' },
              { text: 'Vue 3 Nuxt 3', link: 'rules/vue-3-nuxt-3-development-cursorrules-prompt-file/README.md' }
            ]
          },
          { 
            text: 'Backend and Full-Stack',
            items: [
              { text: 'Laravel PHP 8.3', link: 'rules/laravel-php-83-cursorrules-prompt-file/README.md' },
              { text: 'Laravel TALL Stack', link: 'rules/laravel-tall-stack-best-practices-cursorrules-prom/README.md' },
              { text: 'Node.js MongoDB', link: 'rules/nodejs-mongodb-cursorrules-prompt-file-tutorial/README.md' },
              { text: 'Node.js MongoDB JWT', link: 'rules/nodejs-mongodb-jwt-express-react-cursorrules-promp/README.md' },
              { text: 'Python Django', link: 'rules/python-django-best-practices-cursorrules-prompt-fi/README.md' },
              { text: 'Python FastAPI', link: 'rules/python-fastapi-cursorrules-prompt-file/README.md' },
              { text: 'Python FastAPI Best Practices', link: 'rules/python-fastapi-best-practices-cursorrules-prompt-f/README.md' },
              { text: 'Python Flask', link: 'rules/python-flask-json-guide-cursorrules-prompt-file/README.md' },
              { text: 'TypeScript NestJS', link: 'rules/typescript-nestjs-best-practices-cursorrules-promp/README.md' },
              { text: 'WordPress PHP', link: 'rules/wordpress-php-guzzle-gutenberg-cursorrules-prompt-/README.md' }
            ]
          },
          { 
            text: 'Mobile Development',
            items: [
              { text: 'React Native Expo', link: 'rules/react-native-expo-cursorrules-prompt-file/README.md' },
              { text: 'React Native Windows', link: 'rules/react-native-expo-router-typescript-windows-cursorrules-prompt-file/README.md' },
              { text: 'SwiftUI', link: 'rules/swiftui-guidelines-cursorrules-prompt-file/README.md' },
              { text: 'TypeScript Expo', link: 'rules/typescript-expo-jest-detox-cursorrules-prompt-file/README.md' }
            ]
          },
          { 
            text: 'CSS and Styling',
            items: [
              { text: 'React Chakra UI', link: 'rules/react-chakra-ui-cursorrules-prompt-file/README.md' },
              { text: 'React Styled Components', link: 'rules/react-styled-components-cursorrules-prompt-file/README.md' },
              { text: 'Tailwind React Firebase', link: 'rules/tailwind-react-firebase-cursorrules-prompt-file/README.md' },
              { text: 'Tailwind shadcn/ui', link: 'rules/tailwind-shadcn-ui-integration-cursorrules-prompt-/README.md' },
              { text: 'Tailwind Next.js', link: 'rules/tailwind-css-nextjs-guide-cursorrules-prompt-file/README.md' }
            ]
          },
          { 
            text: 'State Management',
            items: [
              { text: 'React GraphQL Apollo', link: 'rules/react-graphql-apollo-client-cursorrules-prompt-file/README.md' },
              { text: 'React MobX', link: 'rules/react-mobx-cursorrules-prompt-file/README.md' },
              { text: 'React Query', link: 'rules/react-query-cursorrules-prompt-file/README.md' },
              { text: 'React Redux', link: 'rules/react-redux-typescript-cursorrules-prompt-file/README.md' }
            ]
          },
          { 
            text: 'Database and API',
            items: [
              { text: 'Knative Istio', link: 'rules/knative-istio-typesense-gpu-cursorrules-prompt-fil/README.md' },
              { text: 'TypeScript Axios', link: 'rules/typescript-axios-cursorrules-prompt-file/README.md' }
            ]
          },
          { 
            text: 'Testing',
            items: [
              { text: 'TypeScript Jest Detox', link: 'rules/typescript-expo-jest-detox-cursorrules-prompt-file/README.md' }
            ]
          },
          { 
            text: 'Build Tools',
            items: [
              { text: 'Linux NVIDIA CUDA', link: 'rules/linux-nvidia-cuda-python-cursorrules-prompt-file/README.md' },
              { text: 'Python Containerization', link: 'rules/python-containerization-cursorrules-prompt-file/README.md' },
              { text: 'Python GitHub', link: 'rules/python-github-setup-cursorrules-prompt-file/README.md' },
              { text: 'TypeScript Convention', link: 'rules/typescript-code-convention-cursorrules-prompt-file/README.md' },
              { text: 'Web Optimization', link: 'rules/web-app-optimization-cursorrules-prompt-file/README.md' }
            ]
          },
          { 
            text: 'Language-Specific',
            items: [
              { text: 'Python Best Practices', link: 'rules/python-cursorrules-prompt-file-best-practices/README.md' },
              { text: 'Python Developer', link: 'rules/python-developer-cursorrules-prompt-file/README.md' },
              { text: 'Python LLM & ML', link: 'rules/python-llm-ml-workflow-cursorrules-prompt-file/README.md' },
              { text: 'Python Projects', link: 'rules/python-projects-guide-cursorrules-prompt-file/README.md' },
              { text: 'PyQt6 EEG', link: 'rules/pyqt6-eeg-processing-cursorrules-prompt-file/README.md' },
              { text: 'PyTorch scikit-learn', link: 'rules/pytorch-scikit-learn-cursorrules-prompt-file/README.md' },
              { text: 'Solidity Hardhat', link: 'rules/solidity-hardhat-cursorrules-prompt-file/README.md' },
              { text: 'Solidity React', link: 'rules/solidity-react-blockchain-apps-cursorrules-prompt-/README.md' },
              { text: 'TypeScript Clasp', link: 'rules/typescript-clasp-cursorrules-prompt-file/README.md' },
              { text: 'TypeScript LLM', link: 'rules/typescript-llm-tech-stack-cursorrules-prompt-file/README.md' },
              { text: 'TypeScript Next.js', link: 'rules/typescript-nextjs-cursorrules-prompt-file/README.md' },
              { text: 'TypeScript React', link: 'rules/typescript-react-cursorrules-prompt-file/README.md' },
              { text: 'TypeScript Vue.js', link: 'rules/typescript-vuejs-cursorrules-prompt-file/README.md' },
              { text: 'WebAssembly Z80', link: 'rules/webassembly-z80-cellular-automata-cursorrules-prom/README.md' }
            ]
          },
          { 
            text: 'Other',
            items: [
              { text: 'Unity C#', link: 'rules/unity-cursor-ai-c-cursorrules-prompt-file/README.md' },
              { text: 'Web App Optimization', link: 'rules/web-app-optimization-cursorrules-prompt-file/README.md' }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/awesome-cursorrules' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Awesome CursorRules'
    }
  }
}) 