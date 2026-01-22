# JavaScript 学习笔记

## 基础语法

### 变量声明

```javascript
// ES6+ 推荐使用 const 和 let
const name = '张三'
let age = 25

// var 存在变量提升，不推荐使用
var oldWay = 'not recommended'
```

### 数据类型

JavaScript 有 8 种数据类型：

| 类型 | 说明 | 示例 |
|------|------|------|
| String | 字符串 | `'hello'` |
| Number | 数字 | `42`, `3.14` |
| Boolean | 布尔值 | `true`, `false` |
| null | 空值 | `null` |
| undefined | 未定义 | `undefined` |
| Symbol | 符号 | `Symbol('id')` |
| BigInt | 大整数 | `9007199254740991n` |
| Object | 对象 | `{ name: 'test' }` |

## 常用方法

### 数组方法

```javascript
const arr = [1, 2, 3, 4, 5]

// map - 映射
const doubled = arr.map(x => x * 2)

// filter - 过滤
const evens = arr.filter(x => x % 2 === 0)

// reduce - 归约
const sum = arr.reduce((acc, cur) => acc + cur, 0)
```

### 字符串方法

```javascript
const str = 'Hello World'

str.toLowerCase()   // 'hello world'
str.toUpperCase()   // 'HELLO WORLD'
str.split(' ')      // ['Hello', 'World']
str.includes('World') // true
```

## 异步编程

### Promise

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 'success' })
    }, 1000)
  })
}

fetchData().then(res => console.log(res))
```

### Async/Await

```javascript
async function getData() {
  try {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 待补充

- [ ] 闭包
- [ ] 原型链
- [ ] Event Loop
- [ ] 模块化
