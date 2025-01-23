import fs from 'fs'
import path from 'path'

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
          // 在文档末尾添加 .cursorrules 内容
          src += `\n\n## .cursorrules Content\n\`\`\`cursorrules\n${rulesContent}\n\`\`\`\n`
        }
      }
      
      return render.call(md, src, env)
    }
  }
} 