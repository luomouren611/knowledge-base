import type { AppProps } from 'next/app'
import { Layout } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import themeConfig from '../theme.config'

export default function App({ Component, pageProps }: AppProps) {
  const pageMap = getPageMap()
  
  return (
    <Layout themeConfig={themeConfig} pageMap={pageMap} pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}