"use client";

import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { EditorView } from "@codemirror/view";
import {
  syntaxHighlighting,
  defaultHighlightStyle,
  indentOnInput,
  bracketMatching,
  HighlightStyle,
} from "@codemirror/language";
import { tags } from "@lezer/highlight";
import { searchKeymap, search } from "@codemirror/search";
import { autocompletion, closeBrackets } from "@codemirror/autocomplete";
import { keymap, lineNumbers, highlightActiveLine } from "@codemirror/view";
import { highlightSelectionMatches } from "@codemirror/search";
import { defaultKeymap, historyKeymap } from "@codemirror/commands";
import { foldGutter } from "@codemirror/language";
import { vim, Vim } from "@replit/codemirror-vim";

type CodeEditorProps = {
  language: string;
  initialCode: string;
  onCodeChange?: (code: string) => void;
  onRunCode?: (code: string) => void;
  onSaveCode?: (code: string) => void;
  readonly?: boolean;
  className?: string;
  vimMode?: boolean;
};

const getLanguageExtension = (language: string) => {
  switch (language.toLowerCase()) {
    case "javascript":
    case "js":
      return javascript();
    case "python":
    case "py":
      return python();
    case "c":
    case "cpp":
    case "c++":
      return cpp();
    default:
      return javascript(); // fallback
  }
};

const getLanguageDisplayName = (language: string) => {
  switch (language.toLowerCase()) {
    case "javascript":
    case "js":
      return "JavaScript";
    case "python":
    case "py":
      return "Python";
    case "c":
      return "C";
    case "cpp":
    case "c++":
      return "C++";
    case "bash":
      return "Bash";
    default:
      return language;
  }
};

export function CodeEditor({
  language,
  initialCode,
  onCodeChange,
  onRunCode,
  onSaveCode,
  readonly = false,
  className = "",
  vimMode = false,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [isVimEnabled, setIsVimEnabled] = useState(vimMode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  // Configure Vim mode when enabled
  useEffect(() => {
    if (isVimEnabled) {
      // Add useful Vim mappings
      Vim.map("jj", "<Esc>", "insert"); // jj to escape insert mode
      Vim.map("jk", "<Esc>", "insert"); // jk to escape insert mode (alternative)

      // Define custom ex commands
      Vim.defineEx("write", "w", () => {
        // Save functionality could be added here
        console.log("Vim: File saved");
      });

      Vim.defineEx("quit", "q", () => {
        // Quit functionality - could blur the editor or similar
        console.log("Vim: Quit command");
      });
    }
  }, [isVimEnabled]);

  const handleCodeChange = (value: string) => {
    setCode(value);
    onCodeChange?.(value);
  };

  // Custom highlight style for better C syntax highlighting
  const customHighlightStyle = HighlightStyle.define([
    { tag: tags.keyword, color: "#569cd6" },
    { tag: tags.controlKeyword, color: "#c586c0" },
    { tag: tags.operatorKeyword, color: "#569cd6" },
    { tag: tags.typeName, color: "#4ec9b0" },
    { tag: tags.string, color: "#ce9178" },
    { tag: tags.comment, color: "#6a9955", fontStyle: "italic" },
    { tag: tags.number, color: "#b5cea8" },
    { tag: tags.function(tags.variableName), color: "#dcdcaa" },
    { tag: tags.variableName, color: "#9cdcfe" },
    { tag: tags.meta, color: "#9cdcfe" },
    { tag: tags.operator, color: "#d4d4d4" },
    { tag: tags.punctuation, color: "#d4d4d4" },
    { tag: tags.bracket, color: "#ffd700" },
    { tag: tags.definition(tags.variableName), color: "#4fc1ff" },
    {
      tag: tags.definition(tags.function(tags.variableName)),
      color: "#dcdcaa",
    },
  ]);

  const extensions = [
    // Vim mode (must be first if enabled)
    ...(isVimEnabled ? [vim()] : []),

    // Basic editor features
    lineNumbers(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    foldGutter(),

    // Language support with syntax highlighting
    getLanguageExtension(language),

    // Enhanced syntax highlighting
    syntaxHighlighting(customHighlightStyle, { fallback: true }),

    // Code editing features
    indentOnInput(),
    bracketMatching(),
    closeBrackets(),

    // Search functionality
    search({
      top: true,
    }),

    // Autocompletion
    autocompletion({
      activateOnTyping: true,
      selectOnOpen: false,
    }),

    // Key bindings (only add default keymaps if Vim is not enabled)
    ...(isVimEnabled
      ? []
      : [keymap.of([...defaultKeymap, ...historyKeymap, ...searchKeymap])]),

    // Custom theme
    EditorView.theme({
      "&": {
        fontSize: "14px",
      },
      ".cm-content": {
        padding: "16px",
        minHeight: "300px",
      },
      ".cm-focused": {
        outline: "none",
      },
      ".cm-editor": {
        borderRadius: "8px",
      },
      ".cm-scroller": {
        fontFamily:
          'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
      },
      // Enhanced syntax highlighting styles
      ".cm-selectionMatch": {
        backgroundColor: "rgba(38, 79, 120, 0.25)",
        outline: "1px solid rgba(38, 79, 120, 0.5)",
      },
      ".cm-selectionMatch-main": {
        backgroundColor: "rgba(38, 79, 120, 0.5)",
        outline: "1px solid rgba(38, 79, 120, 0.8)",
      },
      ".cm-activeLine": {
        backgroundColor: "rgba(42, 45, 46, 0.25)",
      },
      // Better syntax highlighting colors for dark theme (VS Code style)
      ".cm-editor.cm-focused": {
        outline: "none",
      },
      // C/C++ specific highlighting
      "&.cm-editor .cm-content": {
        caretColor: "#ffffff",
      },
      // Keywords (int, return, if, etc.)
      ".tok-keyword": {
        color: "#569cd6 !important",
        fontWeight: "normal",
      },
      // Control keywords (return, if, else, etc.)
      ".tok-controlKeyword": {
        color: "#c586c0 !important",
        fontWeight: "normal",
      },
      // Types (int, char, void, etc.)
      ".tok-typeName": {
        color: "#4ec9b0 !important",
      },
      // Strings
      ".tok-string": {
        color: "#ce9178 !important",
      },
      // Comments
      ".tok-comment": {
        color: "#6a9955 !important",
        fontStyle: "italic",
      },
      // Numbers
      ".tok-number": {
        color: "#b5cea8 !important",
      },
      // Functions
      ".tok-function": {
        color: "#dcdcaa !important",
      },
      // Variables
      ".tok-variableName": {
        color: "#9cdcfe !important",
      },
      // Preprocessor directives (#include, #define)
      ".tok-meta": {
        color: "#9cdcfe !important",
      },
      // Operators
      ".tok-operator": {
        color: "#d4d4d4 !important",
      },
      // Punctuation (brackets, semicolons)
      ".tok-punctuation": {
        color: "#d4d4d4 !important",
      },
      // Standard library functions (printf, scanf)
      ".tok-standard": {
        color: "#dcdcaa !important",
      },
    }),
  ];

  if (readonly) {
    extensions.push(EditorView.editable.of(false));
  }

  return (
    <div className={`flex h-full flex-col ${className} `}>
      {/* Vim Mode Toggle */}
      <div className="bg-muted/50 flex items-center justify-between border-b px-3 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-muted-foreground text-xs font-medium">
            {getLanguageDisplayName(language)}
          </span>
          {isVimEnabled && (
            <span className="bg-primary/10 text-primary rounded px-2 py-0.5 font-mono text-xs">
              VIM
            </span>
          )}
          {isVimEnabled && (
            <span className="text-muted-foreground text-xs">
              Press{" "}
              <kbd className="bg-muted rounded px-1 py-0.5 text-xs">Esc</kbd>{" "}
              for normal mode
            </span>
          )}
        </div>
        <button
          onClick={() => setIsVimEnabled(!isVimEnabled)}
          className="text-muted-foreground hover:text-foreground rounded px-2 py-1 text-xs transition-colors"
          title={isVimEnabled ? "Disable Vim mode" : "Enable Vim mode"}
        >
          {isVimEnabled ? "Disable Vim" : "Enable Vim"}
        </button>
      </div>

      {/* Code Editor */}
      <div className="flex flex-1 overflow-hidden">
        <CodeMirror
          className="w-full"
          height="100%"
          value={code}
          theme={vscodeDark}
          extensions={extensions}
          onChange={handleCodeChange}
          placeholder={`Write your ${getLanguageDisplayName(language)} code here...`}
          basicSetup={false}
        />
      </div>
    </div>
  );
}
