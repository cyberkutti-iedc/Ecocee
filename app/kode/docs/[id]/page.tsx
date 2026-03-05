import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CodeBlock } from "@/components/Kode/CodeBlock";

// Documentation pages data
const docs = [
  { id: "getting-started", title: "Getting Started", section: "GettingStarted" },
  { id: "installation", title: "Installation", section: "Installation" },
  { id: "variables", title: "Variables & Constants", section: "Variables" },
  { id: "types", title: "Data Types", section: "Types" },
  { id: "operators", title: "Operators", section: "Operators" },
  { id: "functions", title: "Functions", section: "Functions" },
  { id: "control-flow", title: "Control Flow", section: "ControlFlow" },
  { id: "arrays", title: "Arrays & Collections", section: "Arrays" },
  { id: "structs", title: "Structs & Enums", section: "Structs" },
  { id: "error-handling", title: "Error Handling", section: "ErrorHandling" },
  { id: "modules", title: "Module System", section: "Modules" },
  { id: "builtins", title: "Built-in Functions", section: "BuiltIns" },
];

export async function generateStaticParams() {
  return docs.map((doc) => ({
    id: doc.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doc = docs.find((d) => d.id === id);
  return {
    title: `${doc?.title || "Documentation"} | Kode Docs`,
    description: `Learn about ${doc?.title?.toLowerCase() || "Kode programming language"}`,
  };
}

export default async function DocPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentIndex = docs.findIndex((d) => d.id === id);
  const currentDoc = docs[currentIndex];
  const prevDoc = currentIndex > 0 ? docs[currentIndex - 1] : null;
  const nextDoc = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  if (!currentDoc) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page not found</h1>
          <Link href="/kode/docs" className="text-blue-600 hover:underline">
            Back to docs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/kode/docs"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              All Docs
            </Link>
            <div className="flex-1 text-center">
              <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                {currentDoc.title}
              </h1>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose dark:prose-invert max-w-none">
          {currentDoc.section === "GettingStarted" && <GettingStartedContent />}
          {currentDoc.section === "Installation" && <InstallationContent />}
          {currentDoc.section === "Variables" && <VariablesContent />}
          {currentDoc.section === "Types" && <TypesContent />}
          {currentDoc.section === "Operators" && <OperatorsContent />}
          {currentDoc.section === "Functions" && <FunctionsContent />}
          {currentDoc.section === "ControlFlow" && <ControlFlowContent />}
          {currentDoc.section === "Arrays" && <ArraysContent />}
          {currentDoc.section === "Structs" && <StructsContent />}
          {currentDoc.section === "ErrorHandling" && <ErrorHandlingContent />}
          {currentDoc.section === "Modules" && <ModulesContent />}
          {currentDoc.section === "BuiltIns" && <BuiltInsContent />}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-4">
            {prevDoc ? (
              <Link
                href={`/kode/docs/${prevDoc.id}`}
                className="flex flex-col gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors group"
              >
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {prevDoc.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextDoc ? (
              <Link
                href={`/kode/docs/${nextDoc.id}`}
                className="flex flex-col gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors group text-right"
              >
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-end gap-1">
                  Next <ChevronRight className="w-4 h-4" />
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {nextDoc.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Content Components
function GettingStartedContent() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-600 dark:text-slate-400">
        Kode is a statically typed programming language with automatic type inference, a complete module system, and a bytecode VM. It's designed for clarity and performance.
      </p>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quick Example</h2>
        <CodeBlock language="bash">
          {`# Create a file
echo 'print("Hello, Kode!")' > hello.kode

# Run it
kode hello.kode
# Hello, Kode!`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
          <li>Static typing with type inference</li>
          <li>Complete lexer, parser, and bytecode compiler</li>
          <li>Stack-based virtual machine</li>
          <li>Full module system with imports/exports</li>
          <li>Closures and first-class functions</li>
          <li>Pattern matching and error handling</li>
          <li>Extensive built-in functions</li>
        </ul>
      </div>
    </div>
  );
}

function InstallationContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Prerequisites</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-2">Go 1.21+ is required to build from source.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Build from Source</h2>
        <CodeBlock language="bash">
          {`git clone https://github.com/ecocee/kode-go
cd kode-go
go build -o kode ./cmd/kode`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Verify Installation</h2>
        <CodeBlock language="bash">{`kode version
# Kode v0.3.3
# Platform: windows/amd64`}</CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">CLI Commands</h2>
        <CodeBlock language="bash">
          {`kode <file.kode>        Run a source file
kode build <file.kode> Compile to .kbc bytecode
kode <file.kbc>        Execute compiled bytecode
kode check <file.kode> Type-check without running
kode fmt <file.kode>   Format source files
kode version            Print version
kode env                Show compiler environment`}
        </CodeBlock>
      </div>
    </div>
  );
}

function VariablesContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Variables</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Use <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">let</code> to declare variables. Type inference works automatically.</p>
        <CodeBlock language="kode">
          {`let x = 10
let name = "Kode"
let pi = 3.14
let active = true

// Explicit type annotation
let count: int = 0
let message: string = "hello"

// Variables are mutable
x = x + 1
print(x)    // 11`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Constants</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Constants require an explicit type and cannot be reassigned.</p>
        <CodeBlock language="kode">
          {`const MAX: int = 100
const PI: float = 3.14159
const APP_NAME: string = "MyApp"`}
        </CodeBlock>
      </div>
    </div>
  );
}

function TypesContent() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 dark:text-slate-400">Kode supports several built-in data types:</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Type</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Examples</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: "int", examples: "0, 42, -7" },
              { type: "float", examples: "3.14, -0.5, 1.0" },
              { type: "string", examples: '"hello", "world"' },
              { type: "bool", examples: "true, false" },
              { type: "[]int", examples: "[1, 2, 3]" },
              { type: "[]string", examples: '["a", "b", "c"]' },
            ].map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-100 dark:border-slate-800"
              >
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">
                  {row.type}
                </td>
                <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                  {row.examples}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OperatorsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Arithmetic</h2>
        <CodeBlock language="kode">
          {`let a = 15, b = 4

a + b    // 19  addition
a - b    // 11  subtraction
a * b    // 60  multiplication
a / b    // 3   division
a % b    // 3   modulo`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Comparison & Logical</h2>
        <CodeBlock language="kode">
          {`print(10 == 10)   // true
print(10 != 5)    // true
print(10 > 5)     // true
print(10 < 5)     // false

true && false   // false  AND
true || false   // true   OR
!true           // false  NOT`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Bitwise</h2>
        <CodeBlock language="kode">
          {`let x = 12, y = 5

x & y      // 4    AND
x | y      // 13   OR
x ^ y      // 9    XOR
x << 2     // 48   left shift
x >> 1     // 6    right shift`}
        </CodeBlock>
      </div>
    </div>
  );
}

function FunctionsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Expression Body</h2>
        <CodeBlock language="kode">
          {`func add(a: int, b: int) = a + b
func square(x: int) = x * x
func isEven(n: int) = n % 2 == 0`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Block Body</h2>
        <CodeBlock language="kode">
          {`func greet(name: string) {
    print("Hello, ")
    print(name)
}

func power(base: int, exp: int) {
    let result = 1
    let i = 0
    while (i < exp) {
        result = result * base
        i = i + 1
    }
    return result
}`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Closures</h2>
        <CodeBlock language="kode">
          {`func makeAdder(n: int) {
    return fn(x: int) { return x + n }
}

let add5 = makeAdder(5)
print(add5(3))     // 8`}
        </CodeBlock>
      </div>
    </div>
  );
}

function ControlFlowContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">If / Else</h2>
        <CodeBlock language="kode">
          {`if (x > 5) {
    print("big")
} else {
    print("small")
}`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">For Loop</h2>
        <CodeBlock language="kode">
          {`for (let i = 0; i < 5; i++) {
    print(i)
}
// 0 1 2 3 4`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">While Loop</h2>
        <CodeBlock language="kode">
          {`let i = 5
while (i > 0) {
    print(i)
    i = i - 1
}
// 5 4 3 2 1`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">For-In Loop</h2>
        <CodeBlock language="kode">
          {`let fruits = ["apple", "banana", "cherry"]
for fruit in fruits {
    print(fruit)
}`}
        </CodeBlock>
      </div>
    </div>
  );
}

function ArraysContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Creating Arrays</h2>
        <CodeBlock language="kode">
          {`let nums = [1, 2, 3, 4, 5]
let words = ["hello", "world", "kode"]
let empty = []`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Array Operations</h2>
        <CodeBlock language="kode">
          {`let arr = [10, 20, 30, 40, 50]

print(arr[0])      // 10  index access
print(arr.len)     // 5   length
arr[1] = 99        // mutation
arr.push(60)       // append
let last = arr.pop() // remove last`}
        </CodeBlock>
      </div>
    </div>
  );
}

function StructsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Structs</h2>
        <CodeBlock language="kode">
          {`struct Point {
    x: int,
    y: int
}

let p = Point { x: 10, y: 20 }
print(p.x)  // 10
print(p.y)  // 20`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Enums</h2>
        <CodeBlock language="kode">
          {`enum Direction {
    North,
    South,
    East,
    West
}

enum Status {
    Active,
    Inactive,
    Pending
}`}
        </CodeBlock>
      </div>
    </div>
  );
}

function ErrorHandlingContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Try / Catch</h2>
        <CodeBlock language="kode">
          {`try {
    let result = 10 / 0
    print(result)
} catch (e) {
    print("Error caught: \${e}")
}
// Error caught: division by zero`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Defer</h2>
        <CodeBlock language="kode">
          {`func riskyOp() {
    defer { print("cleanup done") }
    print("doing work...")
}

riskyOp()
// doing work...
// cleanup done`}
        </CodeBlock>
      </div>
    </div>
  );
}

function ModulesContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Exporting Functions</h2>
        <CodeBlock language="kode">
          {`// math.kode
export func add(a: int, b: int) = a + b
export func subtract(a: int, b: int) = a - b
export const PI: float = 3.14159`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Importing Modules</h2>
        <CodeBlock language="kode">
          {`// Named import
import { add, subtract } from "math"
print(add(10, 5))       // 15

// Namespace import
import "math" as m

// Simple import
import "config"`}
        </CodeBlock>
      </div>
    </div>
  );
}

function BuiltInsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">I/O Functions</h2>
        <CodeBlock language="kode">
          {`print("hello")         // output
println("hello")       // alias
printf("Value: %d", 42) // formatted
input()                // read input`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Math Functions</h2>
        <CodeBlock language="kode">
          {`abs(-5)        // 5
sqrt(16)       // 4.0
pow(2, 8)      // 256
floor(3.7)     // 3
ceil(3.2)      // 4
round(3.5)     // 4
min(10, 5)     // 5
max(10, 5)     // 10`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">String Methods</h2>
        <CodeBlock language="kode">
          {`let s = "hello"
s.upper()          // "HELLO"
s.lower()          // "hello"
s.trim()           // strip whitespace
s.split(",")       // split to array
s.contains("ell")  // true
s.replace("l", "L") // "heLLo"`}
        </CodeBlock>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Array Functions</h2>
        <CodeBlock language="kode">
          {`let arr = [3, 1, 2]
sort(arr)      // [1, 2, 3]
reverse(arr)   // [2, 1, 3]
join(arr, ",") // "3,1,2"
has(arr, 1)    // true
range(5)       // [0, 1, 2, 3, 4]`}
        </CodeBlock>
      </div>
    </div>
  );
}
