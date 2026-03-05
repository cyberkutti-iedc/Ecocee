import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Code Examples
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Practical examples demonstrating Kode's features.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
            Hello World
            <Badge className="ml-2 bg-gradient-to-r from-violet-500 to-purple-500">Basic</Badge>
          </h2>
          <CodeBlock language="kode">
{`fn main() {
    println("Hello, World!")
}`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Fibonacci Sequence</h2>
        <CodeBlock language="kode">
{`fn fib(n: int) -> int {
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

fn main() {
    for (let i = 0; i < 10; i++) {
        print(fib(i))
        print(" ")
    }
}
// Output: 0 1 1 2 3 5 8 13 21 34`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Factorial Calculator</h2>
        <CodeBlock language="kode">
{`fn factorial(n: int) -> int {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

fn main() {
    println(factorial(5))   // 120
    println(factorial(10))  // 3628800
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Array Manipulation</h2>
        <CodeBlock language="kode">
{`fn main() {
    let nums = [5, 2, 8, 1, 9]
    
    print("Original: ")
    println(nums)
    
    sort(nums)
    print("Sorted: ")
    println(nums)
    
    reverse(nums)
    print("Reversed: ")
    println(nums)
    
    println("Length: " + str(len(nums)))
}
// Output:
// Original: [5, 2, 8, 1, 9]
// Sorted: [1, 2, 5, 8, 9]
// Reversed: [9, 8, 5, 2, 1]
// Length: 5`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Higher-Order Functions</h2>
        <CodeBlock language="kode">
{`fn apply(f: fn, x: int) -> int {
    return f(x)
}

fn double(x: int) -> int {
    return x * 2
}

fn triple(x: int) -> int {
    return x * 3
}

fn main() {
    println(apply(double, 5))  // 10
    println(apply(triple, 5))  // 15
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Closures Example</h2>
        <CodeBlock language="kode">
{`fn makeCounter() -> fn {
    let count = 0
    return fn() {
        count = count + 1
        return count
    }
}

fn main() {
    let counter = makeCounter()
    println(counter())  // 1
    println(counter())  // 2
    println(counter())  // 3
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Struct with Methods</h2>
        <CodeBlock language="kode">
{`struct Rectangle {
    width: float,
    height: float
}

impl Rectangle {
    fn area() -> float {
        return this.width * this.height
    }
    
    fn perimeter() -> float {
        return 2 * (this.width + this.height)
    }
}

fn main() {
    let rect = Rectangle { width: 10.0, height: 5.0 }
    println("Area: " + str(rect.area()))           // 50.0
    println("Perimeter: " + str(rect.perimeter())) // 30.0
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Pattern Matching Example</h2>
        <CodeBlock language="kode">
{`enum Status {
    Success(value: int),
    Error(message: string),
    Pending
}

fn processStatus(status: Status) {
    match (status) {
        Status.Success(v) => println("Got value: " + str(v)),
        Status.Error(msg) => println("Error: " + msg),
        Status.Pending => println("Still waiting...")
    }
}

fn main() {
    processStatus(Status.Success(42))
    processStatus(Status.Error("Connection timeout"))
    processStatus(Status.Pending)
}
// Got value: 42
// Error: Connection timeout
// Still waiting...`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Simple Calculator</h2>
        <CodeBlock language="kode">
{`fn calculate(op: string, a: int, b: int) -> int {
    match (op) {
        "add" => return a + b,
        "sub" => return a - b,
        "mul" => return a * b,
        "div" => return a / b,
        _ => return 0
    }
}

fn main() {
    println(calculate("add", 10, 5))  // 15
    println(calculate("sub", 10, 5))  // 5
    println(calculate("mul", 10, 5))  // 50
    println(calculate("div", 10, 5))  // 2
}`}
        </CodeBlock>
      </div>
    </div>
  );
}
