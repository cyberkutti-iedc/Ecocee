import { CodeBlock } from '@/components/docs/code-block';

export default function ControlFlowPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Control Flow</h1>
      
      <h2>If-Else Statements</h2>
      <CodeBlock language="kode">
{`if (condition) {
    // executed when condition is true
} else if (otherCondition) {
    // executed when otherCondition is true
} else {
    // executed when all conditions are false
}

// Expression form (returns value)
let status = if (age >= 18) { "adult" } else { "minor" }`}
      </CodeBlock>
      
      <h3>Example</h3>
      <CodeBlock language="kode">
{`let age = 18

if (age >= 18) {
    print("You are an adult")
} else if (age >= 13) {
    print("You are a teenager")
} else {
    print("You are a child")
}`}
      </CodeBlock>
      
      <h2>While Loops</h2>
      <CodeBlock language="kode">
{`while (count <= 5) {
    print(count)
    count = count + 1
}

// Do-while loop
do {
    print(value)
    value = value + 1
} while (value < 10)`}
      </CodeBlock>
      
      <h2>For Loops</h2>
      <h3>C-style for loop</h3>
      <CodeBlock language="kode">
{`for (let i = 0; i < 5; i = i + 1) {
    print(i)
}
// 0 1 2 3 4`}
      </CodeBlock>
      
      <h3>For-in loop (iteration)</h3>
      <CodeBlock language="kode">
{`let fruits = ["apple", "banana", "cherry"]
for fruit in fruits {
    print(fruit)
}
// apple
// banana
// cherry`}
      </CodeBlock>
      
      <h3>For-each with index</h3>
      <CodeBlock language="kode">
{`for (let i, item in collection) {
    print("\${i}: \${item}")
}`}
      </CodeBlock>
      
      <h2>Break and Continue</h2>
      <CodeBlock language="kode">
{`for (let i = 0; i < 10; i = i + 1) {
    if (i == 3) {
        continue  // Skip this iteration
    }
    if (i == 7) {
        break     // Exit loop
    }
    print(i)
}
// 0 1 2 4 5 6`}
      </CodeBlock>
      
      <h2>Match Expression</h2>
      <CodeBlock language="kode">
{`let result = match (value) {
    1 => "one",
    2 => "two",
    3 => "three",
    _ => "other"  // default case
}

// With complex patterns
match (pair) {
    (0, y) => print("x is zero: \${y}"),
    (x, 0) => print("y is zero: \${x}"),
    (x, y) => print("both non-zero: \${x}, \${y}")
}`}
      </CodeBlock>
    </div>
  );
}
