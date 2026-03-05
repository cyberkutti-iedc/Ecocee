import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CodeBlock } from '@/components/docs/code-block';

export const metadata: Metadata = {
  title: 'Getting Started | Kode Documentation',
  description: 'Learn the basics of Kode and set up your development environment.',
};

const content = `
# Getting Started

Welcome to Kode! This guide will help you get started with the Kode programming language.

## What is Kode?

Kode is a modern, statically-typed programming language designed for clarity and performance. It features:

- **Static typing** with automatic type inference
- **Clean syntax** inspired by modern languages
- **Fast compilation** to bytecode
- **Rich standard library**
- **Cross-platform** support

## Installation

### Prerequisites

- Go 1.21+ (for building from source)

### Build from Source

\`\`\`bash
# Clone the repository
git clone https://github.com/cyberkutti-iedc/Ecocee.git
cd Ecocee

# Build the compiler
go build -o kode ./cmd/kode
\`\`\`

### Verify Installation

\`\`\`bash
# Check version
./kode version

# Should output:
# Kode v0.3.3
# Platform: windows/amd64
\`\`\`

## Your First Program

Create a file called \`hello.kode\` with the following content:

<CodeBlock language="kode">
{`func main() {
    print("Hello, Kode!")
}`}
</CodeBlock>

Run it with:

\`\`\`bash
./kode hello.kode
\`\`\`

You should see: \`Hello, Kode!\`

## Next Steps

- Learn about [language syntax](/docs/language-syntax)
- Explore [functions](/docs/functions)
- Check out the [standard library](/docs/standard-library)
`;

export default function GettingStartedPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote
        source={content}
        components={{
          CodeBlock,
        }}
      />
    </div>
  );
}