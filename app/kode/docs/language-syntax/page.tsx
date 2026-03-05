import { Metadata } from 'next';
import { CodeBlock } from '@/components/docs/code-block';

export const metadata: Metadata = {
  title: 'Language Syntax | Kode Documentation',
  description: 'Learn about Kode\'s syntax, types, and language features.',
};

export default function LanguageSyntaxPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Language Syntax</h1>

      <p>
        Kode has a clean, readable syntax inspired by modern programming languages.
        This guide covers the basic syntax elements.
      </p>

      <h2>Variables and Constants</h2>

      <p>Use <code>let</code> to declare mutable variables:</p>

      <CodeBlock language="kode">
        {`let x = 10
let name = "Kode"
let active = true`}
      </CodeBlock>

      <p>Use <code>const</code> for immutable constants:</p>

      <CodeBlock language="kode">
        {`const PI = 3.14159
const APP_NAME = "My App"`}
      </CodeBlock>

      <h2>Data Types</h2>

      <p>Kode supports several built-in types:</p>

      <ul>
        <li><code>int</code> - Integer numbers</li>
        <li><code>float</code> - Floating-point numbers</li>
        <li><code>string</code> - Text strings</li>
        <li><code>bool</code> - Boolean values (true/false)</li>
        <li><code>[]T</code> - Arrays of type T</li>
      </ul>

      <h2>Functions</h2>

      <p>Functions are declared with the <code>func</code> keyword:</p>

      <CodeBlock language="kode">
        {`func add(a: int, b: int) -> int {
    return a + b
}

func greet(name: string) {
    print("Hello, " + name)
}`}
      </CodeBlock>

      <h2>Control Flow</h2>

      <h3>If Statements</h3>

      <CodeBlock language="kode">
        {`if x > 10 {
    print("x is greater than 10")
} else if x > 5 {
    print("x is greater than 5")
} else {
    print("x is 5 or less")
}`}
      </CodeBlock>

      <h3>For Loops</h3>

      <CodeBlock language="kode">
        {`for let i = 0; i < 10; i++ {
    print(i)
}`}
      </CodeBlock>

      <h3>While Loops</h3>

      <CodeBlock language="kode">
        {`let i = 0
while i < 10 {
    print(i)
    i++
}`}
      </CodeBlock>

      <h2>Arrays</h2>

      <CodeBlock language="kode">
        {`let numbers = [1, 2, 3, 4, 5]
let names = ["Alice", "Bob", "Charlie"]

// Access elements
let first = numbers[0]

// Add elements
numbers.push(6)

// Get length
let len = numbers.length`}
      </CodeBlock>

      <h2>Comments</h2>

      <CodeBlock language="kode">
        {`// This is a single-line comment

/*
This is a multi-line comment
that spans multiple lines
*/`}
      </CodeBlock>
    </div>
  );
}