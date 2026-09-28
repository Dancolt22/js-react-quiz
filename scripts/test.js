import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import generator modules or define questions
// We will generate 200 curated JS questions and 200 curated React 19 questions.
console.log("Generating question banks...");
