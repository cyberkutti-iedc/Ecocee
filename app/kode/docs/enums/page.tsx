import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';

export default function EnumsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Enumerations
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Enums define a type with a fixed set of named variants.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Basic Enum</h2>
          <CodeBlock language="kode">
{`enum Color {
    Red,
    Green,
    Blue
}

enum Status {
    Active,
    Inactive,
    Pending
}`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Enum with Associated Values</h2>
        <CodeBlock language="kode">
{`enum Result {
    Success(value: int),
    Error(message: string),
    Pending
}

let outcome = Result.Success(42)
let error = Result.Error("Connection timeout")`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Pattern Matching with Enums</h2>
        <CodeBlock language="kode">
{`match (outcome) {
    Result.Success(value) => print("Got: \${value}"),
    Result.Error(msg) => print("Error: \${msg}"),
    Result.Pending => print("Still waiting...")
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Enum with Methods</h2>
        <CodeBlock language="kode">
{`enum Status {
    Active,
    Inactive,
    Pending
}

impl Status {
    fn isReady() -> bool {
        return this == Status.Active
    }
}

let status = Status.Active
if (status.isReady()) {
    print("Ready to go!")
}`}
        </CodeBlock>
      </div>
    </div>
  );
}
