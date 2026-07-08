import Link from "next/link";
import { GitBranch, ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        
        {/* Terminal/Error Mock */}
        <div className="gh-card p-6 mb-8 bg-[var(--bg-secondary)] border border-red-200 dark:border-red-900 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
              <GitBranch className="text-red-500" size={32} />
            </div>
          </div>
          
          <h1 className="text-[24px] font-bold text-[var(--text-primary)] mb-2 font-mono">
            404
          </h1>
          <p className="text-[16px] text-[var(--text-secondary)] font-mono">
            fatal: Branch not found.
          </p>
          
          <div className="mt-6 p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded text-left font-mono text-[12px] text-[var(--text-secondary)] overflow-x-auto">
            <code>
              <span className="text-green-600 dark:text-green-400">$</span> git checkout current-url<br />
              error: pathspec 'current-url' did not match any file(s) known to git
            </code>
          </div>
        </div>

        {/* Actions */}
        <p className="text-[14px] text-[var(--text-primary)] mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/" 
          className="gh-btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-[14px]"
        >
          Return to main branch
          <ChevronRight size={16} />
        </Link>

      </div>
    </div>
  );
}
