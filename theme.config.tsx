import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 'bold' }}>📚 我的知识库</span>,
  project: {
    link: 'https://github.com/your-username/knowledge-base',
  },
  chat: {
    link: 'https://discord.gg',
  },
  docsRepositoryBase: 'https://github.com/your-username/knowledge-base',
  footer: {
    text: '个人知识库 © 2026',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    title: '目录'
  },
  editLink: {
    text: '在 GitHub 上编辑此页'
  },
  feedback: {
    content: '有问题？给我们反馈 →',
    labels: 'feedback'
  },
  search: {
    placeholder: '搜索文档...'
  }
}

export default config