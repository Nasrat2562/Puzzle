const j = `const j = \`{0}\`;
const p = \`#!/usr/bin/env python3
import sys
print("""\${j.replace(/\\\\\\\\\\\\\\\\/g, '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\').replace(/"/g, '\\\\\\\\"').replace(/\\\\n/g, '\\\\\\\\n')}""")
\`;
console.log(p);`;
const p = `#!/usr/bin/env python3
import sys
print("""${j.replace(/\\\\/g, '\\\\\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}""")
`;
console.log(p);