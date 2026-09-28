import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { jsPart1 } from './jsPart1.js';
import { jsPart2 } from './jsPart2.js';
import { jsPart3 } from './jsPart3.js';

import { reactPart1 } from './reactPart1.js';
import { reactPart2 } from './reactPart2.js';
import { reactPart3 } from './reactPart3.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allJsQuestions = [...jsPart1, ...jsPart2, ...jsPart3].slice(0, 200);
const allReactQuestions = [...reactPart1, ...reactPart2, ...reactPart3].slice(0, 200);

console.log(`\n========================================`);
console.log(`VALIDATING QUESTION BANKS`);
console.log(`========================================`);
console.log(`JavaScript Questions count: ${allJsQuestions.length} (Target: 200)`);
console.log(`React 19 Questions count: ${allReactQuestions.length} (Target: 200)`);

// Function to validate question bank
function validateBank(questions, bankName) {
  const ids = new Set();
  const topicCounts = {};

  questions.forEach((q, index) => {
    if (!q.id) throw new Error(`${bankName} item at index ${index} missing id`);
    if (ids.has(q.id)) throw new Error(`${bankName} duplicate id: ${q.id}`);
    ids.add(q.id);

    if (!q.topicId) throw new Error(`${bankName} ${q.id} missing topicId`);
    if (!q.topicName) throw new Error(`${bankName} ${q.id} missing topicName`);
    if (!q.question || q.question.trim().length === 0) throw new Error(`${bankName} ${q.id} empty question`);
    if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`${bankName} ${q.id} must have exactly 4 options`);
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      throw new Error(`${bankName} ${q.id} invalid correctAnswer: ${q.correctAnswer}`);
    }
    if (!q.explanation || q.explanation.trim().length === 0) throw new Error(`${bankName} ${q.id} empty explanation`);
    
    topicCounts[q.topicId] = (topicCounts[q.topicId] || 0) + 1;
  });

  console.log(`\n[${bankName}] Validation Passed! Total Unique: ${ids.size}`);
  console.log(`Topics covered in ${bankName}: ${Object.keys(topicCounts).length}`);
  return true;
}

validateBank(allJsQuestions, "JavaScript Bank");
validateBank(allReactQuestions, "React Bank");

// Output files
const jsDestPath = path.join(__dirname, '../src/data/javascriptQuestions.js');
const reactDestPath = path.join(__dirname, '../src/data/reactQuestions.js');

const jsContent = `// Evaluated JavaScript Question Bank (200 Comprehensive Questions)
// Strictly based on eligible sections from the course material.
export const JAVASCRIPT_QUESTIONS = ${JSON.stringify(allJsQuestions, null, 2)};
`;

const reactContent = `// Evaluated React 19 Question Bank (200 Comprehensive Questions)
// Strictly based on all 16 modules from the course material.
export const REACT_QUESTIONS = ${JSON.stringify(allReactQuestions, null, 2)};
`;

fs.writeFileSync(jsDestPath, jsContent, 'utf8');
fs.writeFileSync(reactDestPath, reactContent, 'utf8');

console.log(`\nSuccessfully wrote:`);
console.log(`- ${jsDestPath} (${allJsQuestions.length} questions)`);
console.log(`- ${reactDestPath} (${allReactQuestions.length} questions)`);
console.log(`========================================\n`);
