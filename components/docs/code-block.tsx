"use client";

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CodeBlockProps {
  language: string;
  children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-t-lg">
        <Badge variant="secondary" className="bg-white/20 text-white border-0 font-mono text-xs">
          {language}
        </Badge>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-all"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="rounded-b-lg border-2 border-t-0 border-violet-300 dark:border-violet-700 bg-slate-950 p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-100">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}