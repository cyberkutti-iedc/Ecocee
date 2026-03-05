import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';

export default function ErrorHandlingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Error Handling
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Handle runtime errors gracefully with try-catch blocks.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Try-Catch Blocks</h2>
          <CodeBlock language="kode">
{`try {
    let result = divide(10, 0)
    print(result)
} catch (e) {
    print("Error caught: \${e}")
}
// Error caught: division by zero`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Error Types</h2>
        <CodeBlock language="kode">
{`enum Error {
    DivisionByZero,
    InvalidInput(reason: string),
    NotFound(resource: string),
    Unknown(message: string)
}

fn divide(a: int, b: int) -> Result<int, Error> {
    if (b == 0) {
        return Result.Error(Error.DivisionByZero)
    }
    return Result.Success(a / b)
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Error Handling with Result Type</h2>
        <CodeBlock language="kode">
{`let result = divide(10, 2)

match (result) {
    Result.Success(value) => print("Result: \${value}"),
    Result.Error(error) => print("Error occurred")
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Safe Division Function</h2>
        <CodeBlock language="kode">
{`fn safeDivide(a: int, b: int) int {
    try {
        return a / b
    } catch (e) {
        print("Error: \${e}")
        return -1
    }
    return 0
}

print(safeDivide(10, 2))   // 5
print(safeDivide(10, 0))   // Error: division by zero  →  -1`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Defer Statement</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">defer</code> schedules cleanup code to run before function returns:
        </p>
        <CodeBlock language="kode">
{`fn riskyOp() {
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
