import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
  }
} 