# TypeScript 学习笔记

## 基础类型

```typescript
// 基本类型
let name: string = '张三'
let age: number = 25
let isStudent: boolean = true

// 数组
let numbers: number[] = [1, 2, 3]
let strings: Array<string> = ['a', 'b', 'c']

// 元组
let tuple: [string, number] = ['hello', 42]

// 枚举
enum Color {
  Red,
  Green,
  Blue
}
```

## 接口与类型

### Interface

```typescript
interface User {
  id: number
  name: string
  email?: string  // 可选属性
  readonly createdAt: Date  // 只读属性
}

const user: User = {
  id: 1,
  name: '张三',
  createdAt: new Date()
}
```

### Type

```typescript
// 类型别名
type ID = string | number

// 联合类型
type Status = 'pending' | 'success' | 'error'

// 交叉类型
type Employee = User & {
  department: string
  salary: number
}
```

## 泛型

```typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg
}

// 泛型接口
interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

// 使用
const response: ApiResponse<User[]> = {
  code: 200,
  data: [{ id: 1, name: '张三', createdAt: new Date() }],
  message: 'success'
}
```

## 实用工具类型

```typescript
interface User {
  id: number
  name: string
  email: string
}

// Partial - 所有属性变为可选
type PartialUser = Partial<User>

// Required - 所有属性变为必需
type RequiredUser = Required<User>

// Pick - 选取部分属性
type UserBasic = Pick<User, 'id' | 'name'>

// Omit - 排除部分属性
type UserWithoutEmail = Omit<User, 'email'>

// Record - 键值对类型
type UserMap = Record<string, User>
```

## 在 React 中使用

```tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  )
}
```
