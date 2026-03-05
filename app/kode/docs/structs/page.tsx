import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';

export default function StructsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Structs
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Structs group named fields into a single type.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Declaring a Struct</h2>
          <CodeBlock language="kode">
{`struct Person {
    name: string,
    age: int,
    email: string
}

struct Point {
    x: int,
    y: int
}`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Creating Instances</h2>
        <CodeBlock language="kode">
{`let person = Person {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
}

let point = Point { x: 10, y: 20 }`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Accessing Fields</h2>
        <CodeBlock language="kode">
{`print(person.name)     // "Alice"
print(person.age)      // 30
print(point.x)         // 10
print(point.y)         // 20`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Struct with Methods</h2>
        <CodeBlock language="kode">
{`struct Circle {
    radius: float
}

impl Circle {
    func area() -> float {
        return 3.14159 * this.radius * this.radius
    }
    
    func circumference() -> float {
        return 2 * 3.14159 * this.radius
    }
}

let circle = Circle { radius: 5.0 }
print(circle.area())           // 78.54
print(circle.circumference())  // 31.42`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Struct Introspection</h2>
        <CodeBlock language="kode">
{`let person = Person { name: "Bob", age: 25, email: "bob@test.com" }

// Get field names
let fieldNames = keys(person)
print(fieldNames)  // ["name", "age", "email"]

// Get field values
let fieldValues = values(person)
print(fieldValues)  // ["Bob", 25, "bob@test.com"]`}
        </CodeBlock>
      </div>
    </div>
  );
}
