import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          VM Architecture
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Deep dive into the Kode bytecode virtual machine.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Overview</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            The Kode VM is a stack-based bytecode interpreter with support for closures, first-class functions, and dynamic typing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-violet-200 dark:border-violet-800">
              <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-2">Stack-Based</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Push-pop operations for efficient execution
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-violet-200 dark:border-violet-800">
              <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-2">Bytecode</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Compiled to compact instruction format
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-violet-200 dark:border-violet-800">
              <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-2">Closures</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Full support for lexical scoping
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">VM Structure</h2>
        <Card className="border-violet-200 dark:border-violet-800">
          <CardContent className="p-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-slate-700 dark:text-slate-300">
{`┌─────────────────────────────────┐
│        Kode VM (v0.3.3)         │
├─────────────────────────────────┤
│  Instruction Pointer (IP)       │
│  Stack Pointer (SP)              │
│  Frame Pointer (FP)              │
├─────────────────────────────────┤
│         Value Stack             │
│  ┌───────────────────────┐      │
│  │  Value                │      │
│  │  Value                │      │
│  │  ...                  │      │
│  └───────────────────────┘      │
├─────────────────────────────────┤
│        Call Frames              │
│  ┌───────────────────────┐      │
│  │  Return Address       │      │
│  │  Local Variables      │      │
│  │  Closure Env          │      │
│  └───────────────────────┘      │
├─────────────────────────────────┤
│         Heap                    │
│  - Objects                      │
│  - Strings                      │
│  - Arrays                       │
│  - Closures                     │
└─────────────────────────────────┘`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Instruction Set</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          The VM supports 40+ bytecode instructions organized into categories:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Stack Operations</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">LOAD_CONST</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Push constant</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">LOAD_VAR</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Load variable</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">STORE_VAR</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Store variable</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">POP</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Pop stack top</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Arithmetic</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">ADD</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Addition</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">SUB</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Subtraction</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">MUL</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Multiplication</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">DIV</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Division</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Comparison</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">EQ</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Equal</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">NEQ</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Not equal</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">LT / GT</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Less/Greater than</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">LTE / GTE</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Less/Greater equal</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-violet-200 dark:border-violet-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">Control Flow</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">JUMP</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Unconditional jump</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">JUMP_IF_FALSE</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Conditional jump</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">CALL</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Function call</span>
                </div>
                <div className="flex justify-between">
                  <Badge variant="outline" className="border-violet-300 dark:border-violet-700">RETURN</Badge>
                  <span className="text-slate-600 dark:text-slate-400">Return from function</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Execution Model</h2>
        <CodeBlock language="kode">
{`fn add(a: int, b: int) -> int {
    return a + b
}

let result = add(10, 20)
print(result)`}
        </CodeBlock>
        <p className="text-slate-600 dark:text-slate-400 mt-4 mb-4">Compiles to bytecode:</p>
        <Card className="border-violet-200 dark:border-violet-800">
          <CardContent className="p-6">
            <pre className="text-sm font-mono text-slate-700 dark:text-slate-300">
{`0000  LOAD_CONST   0        // Load function 'add'
0002  STORE_VAR    add
0004  LOAD_VAR     add       // Prepare call
0006  LOAD_CONST   1         // Push arg: 10
0008  LOAD_CONST   2         // Push arg: 20
0010  CALL         2         // Call with 2 args
0012  STORE_VAR    result
0014  LOAD_VAR     print     // Built-in print
0016  LOAD_VAR     result
0018  CALL         1
0020  HALT`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Memory Management</h2>
        <Card className="border-violet-200 dark:border-violet-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-2">Stack Allocation</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Primitive values (int, float, bool) are allocated on the value stack for fast access.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-2">Heap Allocation</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Complex types (strings, arrays, objects, closures) are heap-allocated with reference counting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-violet-600 dark:text-violet-400 mb-2">Garbage Collection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Currently uses reference counting. Mark-and-sweep GC planned for v0.4.0.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Closure Implementation</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Closures capture their environment for lexical scoping:
        </p>
        <CodeBlock language="kode">
{`fn makeCounter() -> fn {
    let count = 0
    return fn() {
        count = count + 1
        return count
    }
}

let counter = makeCounter()
counter()  // 1
counter()  // 2`}
        </CodeBlock>
        <p className="text-slate-600 dark:text-slate-400 mt-4">
          The VM creates a <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">ClosureEnv</code> that holds captured variables, allowing the inner function to access and mutate <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded">count</code> across invocations.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Performance Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">Fast Operations</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Stack operations: O(1)</li>
                <li>• Local variable access: O(1)</li>
                <li>• Function calls: O(1)</li>
                <li>• Arithmetic operations: O(1)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-3">Slower Operations</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Array operations: O(n)</li>
                <li>• String concatenation: O(n)</li>
                <li>• Object property lookup: O(1) hash</li>
                <li>• Garbage collection: O(n)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
