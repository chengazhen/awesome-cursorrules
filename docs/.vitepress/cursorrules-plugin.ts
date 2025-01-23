import * as fs from 'node:fs'
import * as path from 'node:path'

function createDefaultReadme(dirPath: string, dirName: string) {
  const readmePath = path.join(dirPath, 'README.md')
  const defaultContent = `# ${dirName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

This is an auto-generated documentation for the .cursorrules file in this directory.

## Overview

This rule set provides guidelines for development with the specified technology stack.
`
  fs.writeFileSync(readmePath, defaultContent, 'utf-8')
}

function generateSidebar(rulesPath: string) {
  const categories = new Map()
  
  // 读取规则目录
  const rules = fs.readdirSync(rulesPath, { withFileTypes: true })
  
  rules.forEach(rule => {
    if (rule.isDirectory()) {
      const name = rule.name
      const dirPath = path.join(rulesPath, name)
      const readmePath = path.join(dirPath, 'README.md')
      
      // 如果没有 README.md，创建一个默认的
      if (!fs.existsSync(readmePath)) {
        createDefaultReadme(dirPath, name)
      }
      
      // 提取类别（例如：nextjs, react, vue 等）
      const category = name.split('-')[0].toLowerCase()
      
      if (!categories.has(category)) {
        categories.set(category, [])
      }
      
      categories.get(category).push({
        text: name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        link: `rules/${name}/README.md`
      })
    }
  })
  
  // 转换为 VitePress 侧边栏格式
  return Array.from(categories.entries()).map(([category, items]) => ({
    text: category.charAt(0).toUpperCase() + category.slice(1),
    items
  }))
}

export function cursorrules() {
  return (md: any) => {
    const render = md.render
    md.render = (...args: any[]) => {
      let [src, env] = args
      
      // 只处理 README.md 文件
      if (env?.path?.endsWith('README.md') && env.path.includes('/rules/')) {
        const dirPath = path.dirname(env.path)
        const rulesPath = path.join(dirPath, '.cursorrules')
        
        // 检查是否存在 .cursorrules 文件
        if (fs.existsSync(rulesPath)) {
          const rulesContent = fs.readFileSync(rulesPath, 'utf-8')
          // 在文档末尾添加 .cursorrules 内容，使用 yaml 语法高亮
          src += `\n\n## .cursorrules Content\n\`\`\`json\n${rulesContent}\n\`\`\`\n`
        }
      }
      
      return render.call(md, src, env)
    }
  }
}

export function getSidebar() {
  return generateSidebar(path.resolve(__dirname, '../rules'))
} 