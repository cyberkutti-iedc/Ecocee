import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';

export default function PatternMatchingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Pattern Matching
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Pattern matching provides powerful ways to destructure and match data.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Simple Patterns</h2>
          <CodeBlock language="kode">
{`let value = 2

match (value) {
    1 => print("one"),
    2 => print("two"),
    3 => print("three"),
    _ => print("other")
}`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Identifier Binding</h2>
        <CodeBlock language="kode">
{`let x = 42

match (x) {
    0 => print("zero"),
    42 => print("the answer"),
    n => print("value: \${n}")
}

// Bind matched value to a name
fn describe(n: int) {
    match (n) {
        0 => print("zero"),
        1 => print("one"),
        n => print("many: \${n}")
    }
}

describe(0)    // zero
describe(5)    // many: 5`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Destructuring Patterns</h2>
        <CodeBlock language="kode">
{`let pair = (10, 20)

match (pair) {
    (a, b) => print("Pair: \${a}, \${b}")
}

let person = Person { name: "Alice", age: 30 }

match (person) {
    Person { name: n, age: a } => print("\${n} is \${a} years old")
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Enum Patterns</h2>
        <CodeBlock language="kode">
{`enum Message {
    Click(x: int, y: int),
    Hover(x: int, y: int),
    Quit
}

let msg = Message.Click(10, 20)

match (msg) {
    Message.Click(x, y) => print("Clicked at \${x}, \${y}"),
    Message.Hover(x, y) => print("Hovering at \${x}, \${y}"),
    Message.Quit => print("Quit")
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Guard Clauses</h2>
        <CodeBlock language="kode">
{`let value = 15

match (value) {
    x if x < 10 => print("small"),
    x if x < 20 => print("medium"),
    x if x >= 20 => print("large"),
    _ => print("unknown")
}`}
        </CodeBlock>
      </div>
    </div>
  );
}
