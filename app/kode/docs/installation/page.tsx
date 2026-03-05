import { CodeBlock } from '@/components/docs/code-block';

export default function InstallationPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Installation</h1>
      
      <h2>Prerequisites</h2>
      <p><strong>Go 1.21+</strong> is required to build from source.</p>
      
      <h2>Build from Source</h2>
      <CodeBlock language="bash">
{`git clone https://github.com/ecocee/kode-go
cd kode-go
go build -o kode ./cmd/kode`}
      </CodeBlock>
      
      <h2>Verify Installation</h2>
      <CodeBlock language="bash">
{`kode version
# Kode v0.3.3-dev
# Built with Go go1.21.x
# Platform: windows/amd64`}
      </CodeBlock>
      
      <h2>Platform Support</h2>
      <p>Kode works on:</p>
      <ul>
        <li>Windows (x86-64, ARM64)</li>
        <li>macOS (Intel, Apple Silicon)</li>
        <li>Linux (x86-64, ARM64)</li>
      </ul>
    </div>
  );
}
