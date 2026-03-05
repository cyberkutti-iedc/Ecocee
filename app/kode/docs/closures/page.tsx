import { CodeBlock } from '@/components/docs/code-block';

export default function ClosuresPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Closures & Lambda</h1>
      
      <h2>Anonymous Functions (Lambda)</h2>
      <CodeBlock language="kode">
{`let square = func(x) { return x * x }
print(square(5))  // 25

let add = func(a, b) { return a + b }
print(add(3, 4))  // 7`}
      </CodeBlock>
      
      <h2>Closures with Captured Variables</h2>
      <CodeBlock language="kode">
{`func makeMultiplier(factor) {
    return func(x) { return x * factor }
}

let double = makeMultiplier(2)
let triple = makeMultiplier(3)

print(double(5))  // 10
print(triple(5))  // 15`}
      </CodeBlock>
      
      <h2>First-Class Functions</h2>
      <CodeBlock language="kode">
{`func applyTwice(f, x) {
    return f(f(x))
}

let increment = func(n) { return n + 1 }
print(applyTwice(increment, 5))  // 7`}
      </CodeBlock>
      
      <h2>Immediately Invoked Function Expressions (IIFE)</h2>
      <CodeBlock language="kode">
{`let result = (func() {
    let privateVar = 42
    return privateVar * 2
})()

print(result)  // 84`}
      </CodeBlock>
      
      <h2>Higher-Order Functions</h2>
      <CodeBlock language="kode">
{`func applyOperation(a, b, op) {
    return op(a, b)
}

applyOperation(5, 3, func(x, y) { return x + y })  // 8
applyOperation(5, 3, func(x, y) { return x * y })  // 15`}
      </CodeBlock>
      
      <h2>Closures Capturing Mutable State</h2>
      <CodeBlock language="kode">
{`func createCounter() {
    let count = 0
    return func() {
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
