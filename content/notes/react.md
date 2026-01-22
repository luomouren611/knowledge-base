# React 学习笔记

## 核心概念

### 组件

React 应用由组件构成，组件是独立、可复用的代码片段。

```jsx
// 函数组件（推荐）
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>
}

// 使用组件
<Welcome name="张三" />
```

### JSX

JSX 是 JavaScript 的语法扩展，让你在 JS 中编写类似 HTML 的代码。

```jsx
const element = (
  <div className="container">
    <h1>标题</h1>
    <p>内容</p>
  </div>
)
```

## Hooks

### useState

管理组件状态：

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      点击次数: {count}
    </button>
  )
}
```

### useEffect

处理副作用：

```jsx
import { useEffect, useState } from 'react'

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
    
    return () => {
      console.log('cleanup')
    }
  }, [userId])
  
  if (!user) return <div>加载中...</div>
  return <div>{user.name}</div>
}
```

### useCallback & useMemo

性能优化：

```jsx
// useCallback - 缓存函数
const handleClick = useCallback(() => {
  console.log('clicked')
}, [])

// useMemo - 缓存计算结果
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])
```

## 状态管理

### Context

跨组件共享状态：

```jsx
const ThemeContext = createContext('light')

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>按钮</button>
}
```

## 常用库

| 库 | 用途 |
|---|---|
| React Router | 路由管理 |
| Redux / Zustand | 状态管理 |
| React Query | 数据请求 |
| Framer Motion | 动画 |
