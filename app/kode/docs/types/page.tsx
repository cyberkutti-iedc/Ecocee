import { CodeBlock } from '@/components/docs/code-block';

export default function TypesPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Data Types</h1>
      
      <p>Kode has a comprehensive type system with both primitive and composite types.</p>
      
      <h2>Primitive Types</h2>
      
      <h3>Integer (int)</h3>
      <CodeBlock language="kode">
{`let age: int = 30
let negative: int = -15`}
      </CodeBlock>
      
      <h3>Float (float)</h3>
      <CodeBlock language="kode">
{`let pi: float = 3.14159
let temp: float = -2.5`}
      </CodeBlock>
      
      <h3>Boolean (bool)</h3>
      <CodeBlock language="kode">
{`let isActive: bool = true
let isDone: bool = false`}
      </CodeBlock>
      
      <h3>String (string)</h3>
      <CodeBlock language="kode">
{`let name: string = "John Smith"
let message: string = "Hello, world!"`}
      </CodeBlock>
      
      <h3>Null</h3>
      <CodeBlock language="kode">
{`let empty = null`}
      </CodeBlock>
      
      <h2>Composite Types</h2>
      
      <h3>Arrays</h3>
      <CodeBlock language="kode">
{`let numbers: [int] = [1, 2, 3, 4, 5]
let names: [string] = ["Alice", "Bob", "Charlie"]
let mixed: [any] = [1, "two", true, 4.5]`}
      </CodeBlock>
      
      <h3>Tuples</h3>
      <CodeBlock language="kode">
{`let pair: (int, string) = (42, "answer")
let triple: (int, float, bool) = (10, 3.14, true)`}
      </CodeBlock>
      
      <h3>Maps / Dictionaries</h3>
      <CodeBlock language="kode">
{`let person = {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com"
}

let scores: {string: int} = {
    "alice": 95,
    "bob": 87,
    "charlie": 92
}`}
      </CodeBlock>
      
      <h3>Function Types</h3>
      <CodeBlock language="kode">
{`let add: (int, int) -> int = fn(a, b) { return a + b }
let greet: (string) -> string = fn(name) { return "Hello, " + name }`}
      </CodeBlock>
      
      <h2>Generic Types</h2>
      <CodeBlock language="kode">
{`let container: Container<int> = makeContainer(42)
let list: List<string> = ["a", "b", "c"]
let result: Result<int, Error> = divide(10, 2)`}
      </CodeBlock>
      
      <h2>Type Checking</h2>
      <p>Use the <code>type()</code> built-in function to check types at runtime:</p>
      <CodeBlock language="kode">
{`let x = 42
print(type(x))        // "int"

let name = "Alice"
print(type(name))     // "string"

let arr = [1, 2, 3]
print(type(arr))      // "array"`}
      </CodeBlock>
      
      <h2>Type Conversions</h2>
      <p>Kode provides built-in functions for type conversion:</p>
      <CodeBlock language="kode">
{`let x = 42
let s = string(x)     // "42"
let f = float(x)      // 42.0

let s2 = "123"
let i = int(s2)       // 123

let b = bool(1)       // true`}
      </CodeBlock>
    </div>
  );
}
