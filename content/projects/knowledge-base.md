# 知识库项目

## 项目介绍

基于 Nextra 4.x + Next.js 14 搭建的个人知识库，用于记录学习笔记和日常总结。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **文档引擎**: Nextra 4.x
- **主题**: nextra-theme-docs
- **部署**: Vercel / GitHub Pages

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 目录结构

```
knowledge-base/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首页
│   └── docs/[[...mdxPath]]/
│       └── page.tsx      # 文档页面
├── content/              # Markdown 文档
│   ├── _meta.ts          # 顶级导航配置
│   ├── index.mdx         # 文档首页
│   ├── notes/            # 学习笔记
│   ├── daily/            # 日常记录
│   └── projects/         # 项目文档
├── mdx-components.tsx    # MDX 组件配置
├── next.config.mjs       # Next.js 配置
└── package.json
```

## 如何添加文档

### 1. 创建 Markdown 文件

在 `content` 目录下创建 `.md` 或 `.mdx` 文件。

### 2. 配置导航

更新对应目录的 `_meta.ts`：

```ts
export default {
  'new-page': '新页面标题'
}
```

### 3. 预览效果

```bash
pnpm dev
```

访问 http://localhost:3000/docs 查看效果。

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成
