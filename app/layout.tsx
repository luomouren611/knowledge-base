import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: '我的知识库',
  description: '个人学习笔记与知识整理',
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 'bold' }}>📚 我的知识库</span>}
  />
)

const footer = <Footer>个人知识库 © {new Date().getFullYear()}</Footer>

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/your-username/knowledge-base"
          editLink="在 GitHub 上编辑此页"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ title: '目录' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}