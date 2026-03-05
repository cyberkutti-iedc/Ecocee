import { CodeBlock } from '@/components/docs/code-block';

export default function VariablesPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Variables</h1>
      
      <p>Variables in Kode are dynamically typed and declared using the <code>let</code> keyword. Type annotation is optional — Kode infers types automatically.</p>
      
      <h2>Variable Declaration with Type Inference</h2>
      <CodeBlock language="kode">
{`let name = "Alice"           // Inferred: string
let age = 30                 // Inferred: int
let score = 95.5             // Inferred: float
let isActive = true          // Inferred: bool
let values = [1, 2, 3]       // Inferred: [int]`}
      </CodeBlock>
      
      <h2>Variable Declaration with Explicit Types</h2>
      <CodeBlock language="kode">
{`let name: string = "Alice"
let age: int = 30
let score: float = 95.5
let isActive: bool = true
let values: [int] = [1, 2, 3]`}
      </CodeBlock>
      
      <h2>Reassignment</h2>
      <p>Variables declared with <code>let</code> are mutable and can be reassigned:</p>
      <CodeBlock language="kode">
{`let x = 10
x = 20          // Valid
x = "string"    // Type changes (duck typing)`}
      </CodeBlock>
      
      <h2>Variable Scope</h2>
      <p>Variables are block-scoped:</p>
      <CodeBlock language="kode">
{`let x = 10

if (true) {
    let x = 20  // Different variable
    print(x)    // 20
}

print(x)        // 10`}
      </CodeBlock>
      
      <h2>Naming Conventions</h2>
      <ul>
        <li>Variable names can contain letters, digits, and underscores</li>
        <li>Must start with a letter or underscore</li>
        <li>Case-sensitive</li>
        <li>Cannot use keywords as variable names</li>
      </ul>
      
      <CodeBlock language="kode">
{`let userName = "Alice"      // camelCase
let user_name = "Bob"       // snake_case
let _private = 42           // Starting with underscore
let value123 = 100          // With numbers`}
      </CodeBlock>
    </div>
  );
}
