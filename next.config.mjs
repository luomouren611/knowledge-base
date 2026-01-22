import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true,
  i18n: undefined,
  // 强制禁用缓存
  generateBuildId: () => Date.now().toString()
})
