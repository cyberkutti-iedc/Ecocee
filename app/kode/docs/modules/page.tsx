import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';

export default function ModulesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Modules
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Organize code with Kode's module system for better reusability.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Creating Modules</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Create a module file <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">math.kode</code>:
          </p>
          <CodeBlock language="kode">
{`// math.kode
export fn add(a: int, b: int) -> int {
    return a + b
}

export fn multiply(a: int, b: int) -> int {
    return a * b
}

export const PI = 3.14159`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Importing Modules</h2>
        <CodeBlock language="kode">
{`// main.kode
import math from "./math.kode"

print(math.add(2, 3))        // 5
print(math.multiply(4, 5))   // 20
print(math.PI)               // 3.14159`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Named Imports</h2>
        <CodeBlock language="kode">
{`import { add, multiply, PI } from "./math.kode"

print(add(2, 3))        // 5
print(multiply(4, 5))   // 20
print(PI)               // 3.14159`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Namespace Imports</h2>
        <CodeBlock language="kode">
{`import * as mathUtils from "./math.kode"

print(mathUtils.add(10, 20))
print(mathUtils.PI)`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Module Structure</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Organize your project with modules:
        </p>
        <CodeBlock language="bash">
{`project/
├── main.kode
├── utils/
│   ├── math.kode
│   ├── string.kode
│   └── array.kode
└── lib/
    └── helpers.kode`}
        </CodeBlock>
        <p className="text-slate-600 dark:text-slate-400 mt-4">
          Import from subdirectories:
        </p>
        <CodeBlock language="kode">
{`import { add } from "./utils/math.kode"
import { capitalize } from "./utils/string.kode"`}
        </CodeBlock>
      </div>
    </div>
  );
}
