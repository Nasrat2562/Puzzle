# Puzzle

# JavaScript → Python → JavaScript Quine

![Quine Program](https://img.shields.io/badge/Type-Quine-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Python](https://img.shields.io/badge/Python-3.x-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Project Overview

This is a solution to the optional "quine" programming puzzle task. It demonstrates a **self-reproducing program** that outputs code in another language, which when executed, regenerates the original code.

**Language Pair**: JavaScript → Python → JavaScript

## 🎯 The Challenge

Write a single-file program in one language that:
1. Outputs valid code in another language
2. When that generated code is executed, it outputs the original source code
3. No file system access allowed (can't read own source code)
4. All code must be contained within a single file

## ✨ Solution

### **solution.js** - The Main Program

```javascript
// JavaScript -> Python -> JavaScript Quine
const jsCode = `// JavaScript -> Python -> JavaScript Quine
const jsCode = \\\`{0}\\\`;

const pythonCode = \\\`print("""\${jsCode.replace(/\\\\\\\\\\\\\\\\/g, '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\').replace(/"/g, '\\\\\\\\"').replace(/\\\\n/g, '\\\\\\\\n')}""")\\\`;

console.log(pythonCode);`;

const pythonCode = `print("""${jsCode.replace(/\\\\/g, '\\\\\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}""")`;

console.log(pythonCode);
