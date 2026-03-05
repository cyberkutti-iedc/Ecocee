import { Metadata } from 'next';
import { CodeBlock } from '@/components/docs/code-block';

export const metadata: Metadata = {
  title: 'Functions | Kode Documentation',
  description: 'Learn about functions in Kode, including parameters, return values, and closures.',
};

export default function FunctionsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Functions</h1>

      <p>
        Functions in Kode are first-class citizens. They can be assigned to variables,
        passed as arguments, and returned from other functions.
      </p>

      <h2>Function Declaration</h2>

      <p>Functions are declared using the <code>fn</code> keyword:</p>

      <CodeBlock language="kode">
        {`fn greet(name: string) {
    print("Hello, " + name)
}

fn add(a: int, b: int) -> int {
    return a + b
}`}
      </CodeBlock>

      <h2>Parameters and Return Types</h2>

      <p>Function parameters specify their types, and return types are optional:</p>

      <CodeBlock language="kode">
        {`// No return type (returns void)
fn log(message: string) {
    print("[LOG] " + message)
}

// Explicit return type
fn multiply(x: int, y: int) -> int {
    return x * y
}

// Multiple parameters
fn calculate(a: int, b: int, operation: string) -> int {
    if operation == "add" {
        return a + b
    } else if operation == "multiply" {
        return a * b
    }
    return 0
}`}
      </CodeBlock>

      <h2>Function Calls</h2>

      <CodeBlock language="kode">
        {`greet("World")  // Prints: Hello, World

let result = add(5, 3)  // result = 8
print(result)  // Prints: 8

let calc = calculate(10, 5, "multiply")  // calc = 50`}
      </CodeBlock>

      <h2>Closures</h2>

      <p>Functions can capture variables from their surrounding scope:</p>

      <CodeBlock language="kode">
        {`fn makeAdder(x: int) -> fn(int) -> int {
    return fn(y: int) -> int {
        return x + y
    }
}

let add5 = makeAdder(5)
let add10 = makeAdder(10)

print(add5(3))   // Prints: 8
print(add10(3))  // Prints: 13`}
      </CodeBlock>

      <h2>Anonymous Functions</h2>

      <p>You can create anonymous functions without names:</p>

      <CodeBlock language="kode">
        {`let square = fn(x: int) -> int {
    return x * x
}

let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map(square)
// squares = [1, 4, 9, 16, 25]`}
      </CodeBlock>

      <h2>Recursion</h2>

      <p>Functions can call themselves recursively:</p>

      <CodeBlock language="kode">
        {`fn factorial(n: int) -> int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n - 1)
}

print(factorial(5))  // Prints: 120`}
      </CodeBlock>
    </div>
  );
}