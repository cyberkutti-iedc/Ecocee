import { CodeBlock } from '@/components/docs/code-block';

export default function CliCommandsPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>CLI Commands</h1>
      
      <p>Kode provides a comprehensive command-line interface for working with your programs.</p>
      
      <h2>Commands Overview</h2>
      
      <div className="not-prose">
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode &lt;file.kode&gt;</h3>
            <p className="text-muted-foreground mb-2">Run a source file directly</p>
            <CodeBlock language="bash">kode hello.kode</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode build &lt;file.kode&gt;</h3>
            <p className="text-muted-foreground mb-2">Compile to .kbc bytecode</p>
            <CodeBlock language="bash">kode build hello.kode    # produces hello.kbc</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode &lt;file.kbc&gt;</h3>
            <p className="text-muted-foreground mb-2">Execute compiled bytecode</p>
            <CodeBlock language="bash">kode hello.kbc</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode check &lt;file.kode&gt;</h3>
            <p className="text-muted-foreground mb-2">Type-check without running</p>
            <CodeBlock language="bash">kode check myprogram.kode</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode fmt &lt;file.kode&gt;</h3>
            <p className="text-muted-foreground mb-2">Format source files</p>
            <CodeBlock language="bash">kode fmt myprogram.kode</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode new &lt;name&gt;</h3>
            <p className="text-muted-foreground mb-2">Scaffold a new project</p>
            <CodeBlock language="bash">kode new my-project</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode clean</h3>
            <p className="text-muted-foreground mb-2">Remove build artifacts</p>
            <CodeBlock language="bash">kode clean</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode env</h3>
            <p className="text-muted-foreground mb-2">Show compiler environment info</p>
            <CodeBlock language="bash">kode env</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode doctor</h3>
            <p className="text-muted-foreground mb-2">Diagnose environment issues</p>
            <CodeBlock language="bash">kode doctor</CodeBlock>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold mb-2">kode version</h3>
            <p className="text-muted-foreground mb-2">Print version information</p>
            <CodeBlock language="bash">kode version</CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
