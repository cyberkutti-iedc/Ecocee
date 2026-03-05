import { CodeBlock } from '@/components/docs/code-block';

export default function QuickStartPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Quick Start</h1>
      
      <h2>Your First Kode Program</h2>
      <p>Create a file named <code>hello.kode</code>:</p>
      
      <CodeBlock language="bash">
{`echo 'print("Hello, Kode!")' > hello.kode`}
      </CodeBlock>
      
      <h2>Run It</h2>
      <CodeBlock language="bash">
{`kode hello.kode
# Hello, Kode!`}
      </CodeBlock>
      
      <h2>Compile to Bytecode</h2>
      <CodeBlock language="bash">
{`kode build hello.kode     # produces hello.kbc
kode hello.kbc            # run the bytecode`}
      </CodeBlock>
      
      <h2>More Examples</h2>
      
      <h3>Variables and Functions</h3>
      <CodeBlock language="kode">
{`let name = "Kode"
let version = 3

func greet(lang: string) {
    print("Hello from \${lang}!")
}

greet(name)`}
      </CodeBlock>
      
      <h3>For Loop</h3>
      <CodeBlock language="kode">
{`for (let i = 0; i < 5; i++) {
    print(i)
}
// Output: 0 1 2 3 4`}
      </CodeBlock>
      
      <h3>Functions and Recursion</h3>
      <CodeBlock language="kode">
{`fn factorial(n: int) = if (n <= 1) { 1 } else { n * factorial(n - 1) }

print(factorial(5))    // 120`}
      </CodeBlock>
    </div>
  );
}
