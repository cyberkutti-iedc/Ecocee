import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BuiltInsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Built-in Functions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Kode provides 40+ built-in functions for common operations.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">I/O Functions</h2>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">print</Badge>
              <span className="text-slate-600 dark:text-slate-400">Print to stdout</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">println</Badge>
              <span className="text-slate-600 dark:text-slate-400">Print with newline</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">input</Badge>
              <span className="text-slate-600 dark:text-slate-400">Read from stdin</span>
            </div>
          </div>
          <CodeBlock language="kode">
{`print("Hello")
println("World")
let name = input("Enter your name: ")
print("Hello, \${name}!")`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Type Conversion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Badge variant="outline" className="border-violet-300 dark:border-violet-700">int(x)</Badge>
            <p className="text-sm text-slate-600 dark:text-slate-400">Convert to integer</p>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="border-violet-300 dark:border-violet-700">float(x)</Badge>
            <p className="text-sm text-slate-600 dark:text-slate-400">Convert to float</p>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="border-violet-300 dark:border-violet-700">str(x)</Badge>
            <p className="text-sm text-slate-600 dark:text-slate-400">Convert to string</p>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="border-violet-300 dark:border-violet-700">bool(x)</Badge>
            <p className="text-sm text-slate-600 dark:text-slate-400">Convert to boolean</p>
          </div>
        </div>
        <CodeBlock language="kode">
{`int("42")       // 42
float("3.14")   // 3.14
str(123)        // "123"
bool(1)         // true`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Math Functions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">abs(x)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">pow(x, y)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">sqrt(x)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">floor(x)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">ceil(x)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">round(x)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">min(a, b)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">max(a, b)</Badge>
          <Badge className="bg-gradient-to-r from-violet-500 to-purple-500">random()</Badge>
        </div>
        <CodeBlock language="kode">
{`abs(-5)         // 5
pow(2, 3)       // 8
sqrt(16)        // 4.0
floor(3.7)      // 3
ceil(3.2)       // 4
round(3.5)      // 4
min(5, 10)      // 5
max(5, 10)      // 10
random()        // 0.0 to 1.0`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">String Functions</h2>
        <CodeBlock language="kode">
{`len("hello")                // 5
upper("hello")              // "HELLO"
lower("HELLO")              // "hello"
split("a,b,c", ",")         // ["a", "b", "c"]
join(["a", "b", "c"], ",")  // "a,b,c"
trim("  hello  ")           // "hello"
replace("hello", "l", "r")  // "herro"
starts_with("hello", "he")  // true
ends_with("hello", "lo")    // true
contains("hello", "ell")    // true`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Array Functions</h2>
        <CodeBlock language="kode">
{`let arr = [1, 2, 3, 4, 5]

len(arr)            // 5
push(arr, 6)        // [1, 2, 3, 4, 5, 6]
pop(arr)            // 6 (removes last)
has(arr, 3)         // true
reverse(arr)        // [5, 4, 3, 2, 1]
sort(arr)           // [1, 2, 3, 4, 5]`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">File I/O</h2>
        <CodeBlock language="kode">
{`// Read file
let content = readFile("data.txt")
print(content)

// Write file
writeFile("output.txt", "Hello, World!")

// Append to file
appendFile("log.txt", "New entry\\n")`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Utility Functions</h2>
        <CodeBlock language="kode">
{`type_of(42)          // "int"
type_of("hello")     // "string"
type_of([1, 2, 3])   // "array"

clock()              // Current timestamp
sleep(1000)          // Sleep 1 second (ms)

assert(1 == 1)       // No-op
assert(1 == 2)       // Runtime error`}
        </CodeBlock>
      </div>
    </div>
  );
}
