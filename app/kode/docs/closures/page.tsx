import { CodeBlock } from '@/components/docs/code-block';

export default function ClosuresPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Closures & Lambda</h1>
      
      <h2>Anonymous Functions (Lambda)</h2>
      <CodeBlock language="kode">
{`let square = fn(x) { return x * x }
print(square(5))  // 25

let add = fn(a, b) { return a + b }
print(add(3, 4))  // 7`}
      </CodeBlock>
      
      <h2>Closures with Captured Variables</h2>
      <CodeBlock language="kode">
{`fn makeMultiplier(factor) {
    return fn(x) { return x * factor }
}

let double = makeMultiplier(2)
let triple = makeMultiplier(3)

print(double(5))  // 10
print(triple(5))  // 15`}
      </CodeBlock>
      
      <h2>First-Class Functions</h2>
      <CodeBlock language="kode">
{`fn applyTwice(f, x) {
    return f(f(x))
}

let increment = fn(n) { return n + 1 }
print(applyTwice(increment, 5))  // 7`}
      </CodeBlock>
      
      <h2>Immediately Invoked Function Expressions (IIFE)</h2>
      <CodeBlock language="kode">
{`let result = (fn() {
    let privateVar = 42
    return privateVar * 2
})()

print(result)  // 84`}
      </CodeBlock>
      
      <h2>Higher-Order Functions</h2>
      <CodeBlock language="kode">
{`fn applyOperation(a, b, op) {
    return op(a, b)
}

applyOperation(5, 3, fn(x, y) { return x + y })  // 8
applyOperation(5, 3, fn(x, y) { return x * y })  // 15`}
      </CodeBlock>
      
      <h2>Closures Capturing Mutable State</h2>
      <CodeBlock language="kode">
{`fn createCounter() {
    let count = 0
    return fn() {
        count = count + 1
        return count
    }
}

let counter = createCounter()
print(counter())  // 1
print(counter())  // 2
print(counter())  // 3`}
      </CodeBlock>
    </div>
  );
}
