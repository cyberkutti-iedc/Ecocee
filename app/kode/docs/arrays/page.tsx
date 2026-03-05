import { CodeBlock } from '@/components/docs/code-block';
import { Card, CardContent } from '@/components/ui/card';

export default function ArraysPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Arrays
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Arrays store ordered collections of the same type in Kode.
        </p>
      </div>

      <Card className="border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">Creating Arrays</h2>
          <CodeBlock language="kode">
{`let nums = [1, 2, 3, 4, 5]
let words = ["hello", "world", "kode"]
let empty = []`}
          </CodeBlock>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Reading Elements</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Arrays are zero-indexed:</p>
        <CodeBlock language="kode">
{`let arr = [10, 20, 30, 40, 50]
print(arr[0])   // 10
print(arr[2])   // 30
print(arr[4])   // 50

// Dynamic index
let i = 2
print(arr[i])       // 30
print(arr[i + 1])   // 40`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Array Length</h2>
        <CodeBlock language="kode">
{`let nums = [1, 2, 3, 4, 5]
print(nums.len)   // 5`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Iterating Over Arrays</h2>
        <CodeBlock language="kode">
{`let arr = [10, 20, 30, 40, 50]

for (let i = 0; i < arr.len; i++) {
    print(arr[i])
}

// For-in loop
for item in arr {
    print(item)
}`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Array Methods</h2>
        <CodeBlock language="kode">
{`let nums = [1, 2, 3]

// push: append an element
nums.push(4)
print(nums.len)   // 4

// pop: remove and return last element
let last = nums.pop()
print(last)       // 4
print(nums.len)   // 3

// Assignment
nums[1] = 99
print(nums[1])    // 99`}
        </CodeBlock>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Array Functions</h2>
        <CodeBlock language="kode">
{`let arr = [3, 1, 4, 1, 5]

// Built-in functions
len(arr)              // 5 (length)
sort(arr)             // [1, 1, 3, 4, 5]
reverse(arr)          // [5, 4, 3, 1, 1]
has(arr, 4)           // true
join(arr, ", ")       // "3, 1, 4, 1, 5"`}
        </CodeBlock>
      </div>
    </div>
  );
}
