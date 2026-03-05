import { CodeBlock } from '@/components/docs/code-block';

export default function ConstantsPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Constants</h1>
      
      <p>Constants require an explicit type and cannot be reassigned after initialization.</p>
      
      <h2>Constant Declaration</h2>
      <CodeBlock language="kode">
{`const MAX: int = 100
const PI: float = 3.14159
const APP_NAME: string = "MyApp"
const DEBUG: bool = false`}
      </CodeBlock>
      
      <h2>Immutability</h2>
      <p>Once a constant is defined, attempting to reassign it will result in a compile-time error:</p>
      <CodeBlock language="kode">
{`const MAX: int = 100
MAX = 200       // ERROR: Cannot reassign constants`}
      </CodeBlock>
      
      <h2>Use Cases</h2>
      <p>Constants are ideal for:</p>
      <ul>
        <li>Configuration values</li>
        <li>Mathematical constants</li>
        <li>Fixed application settings</li>
        <li>Version numbers</li>
      </ul>
      

      <CodeBlock language="kode">
{`const VERSION: string = "0.3.1"
const MAX_RETRIES: int = 3
const TIMEOUT: float = 30.0
const ENABLED: bool = true`}
      </CodeBlock>
      
      <h2>Naming Convention</h2>
      <p>By convention, constants use UPPER_SNAKE_CASE:</p>
      <CodeBlock language="kode">
{`const MAX_CONNECTIONS: int = 100
const DEFAULT_TIMEOUT: float = 30.0
const APP_VERSION: string = "1.0.0"`}
      </CodeBlock>
      
      <h2>Constants vs Variables</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>const</th>
            <th>let</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type annotation</td>
            <td>Required</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>Reassignment</td>
            <td>Not allowed</td>
            <td>Allowed</td>
          </tr>
          <tr>
            <td>Type inference</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Use case</td>
            <td>Fixed values</td>
            <td>Mutable values</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
