import { CodeBlock } from '@/components/docs/code-block';

export default function OperatorsPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Operators</h1>
      
      <h2>Arithmetic Operators</h2>
      <CodeBlock language="kode">
{`let a = 10
let b = 3

let sum = a + b         // 13
let diff = a - b        // 7
let product = a * b     // 30
let quotient = a / b    // 3 (integer division)
let remainder = a % b   // 1`}
      </CodeBlock>
      
      <h2>Compound Assignment</h2>
      <CodeBlock language="kode">
{`let x = 10
x += 5    // x = 15
x -= 3    // x = 12
x *= 2    // x = 24
x /= 4    // x = 6
x %= 4    // x = 2`}
      </CodeBlock>
      
      <h2>Increment / Decrement</h2>
      <CodeBlock language="kode">
{`let n = 5
n++    // n = 6
n--    // n = 5`}
      </CodeBlock>
      
      <h2>Comparison Operators</h2>
      <CodeBlock language="kode">
{`let x = 5
let y = 10

x == y    // false (equal to)
x != y    // true (not equal to)
x > y     // false (greater than)
x < y     // true (less than)
x >= y    // false (greater than or equal)
x <= y    // true (less than or equal)`}
      </CodeBlock>
      
      <h2>Logical Operators</h2>
      <CodeBlock language="kode">
{`let a = true
let b = false

a && b    // false (AND)
a || b    // true (OR)
!a        // false (NOT)

// Integer truthy/falsy (0 is false, non-zero is true)
print(1 && 0)    // false
print(1 || 0)    // true
print(!0)        // true`}
      </CodeBlock>
      
      <h2>Bitwise Operators</h2>
      <CodeBlock language="kode">
{`let x = 12    // Binary: 1100
let y = 5     // Binary: 0101

x & y          // 4 (AND: 0100)
x | y          // 13 (OR: 1101)
x ^ y          // 9 (XOR: 1001)
x << 2         // 48 (Left shift by 2)
x >> 1         // 6 (Right shift by 1)
~y             // -6 (Bitwise NOT)`}
      </CodeBlock>
      
      <h2>String Operators</h2>
      <CodeBlock language="kode">
{`let first = "John"
let last = "Doe"
let full = first + " " + last     // "John Doe" (concatenation)
let repeat = "abc" * 3            // "abcabcabc" (repetition)

// String interpolation
let age = 30
let message = "I am \${age} years old"  // "I am 30 years old"`}
      </CodeBlock>
      
      <h2>Operator Precedence</h2>
      <p>From highest to lowest:</p>
      <ol>
        <li><code>~</code> <code>!</code> (unary)</li>
        <li><code>*</code> <code>/</code> <code>%</code></li>
        <li><code>+</code> <code>-</code></li>
        <li><code>&lt;&lt;</code> <code>&gt;&gt;</code></li>
        <li><code>&</code></li>
        <li><code>^</code></li>
        <li><code>|</code></li>
        <li><code>==</code> <code>!=</code> <code>&lt;</code> <code>&gt;</code> <code>&lt;=</code> <code>&gt;=</code></li>
        <li><code>&&</code></li>
        <li><code>||</code></li>
        <li><code>=</code> (assignment)</li>
      </ol>
    </div>
  );
}
