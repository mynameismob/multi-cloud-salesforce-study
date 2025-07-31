/*
 * Script for the interview simulator. It defines a set of questions with
 * corresponding keywords and evaluates user responses based on keyword
 * matches. Feedback is rendered below each question, indicating which
 * topics were covered and quais pontos faltam.
 */

// Define the interview questions and expected keywords.
const interviewQuestions = [
  {
    id: 'q1',
    keywords: [
      'produtividade',
      'automação',
      'pipeline',
      'previsão',
      'inteligência artificial'
    ],
    prompt: 'Explique como o Sales Cloud pode aumentar a produtividade da equipe de vendas e melhorar o pipeline.'
  },
  {
    id: 'q2',
    keywords: [
      'omnichannel',
      'roteamento',
      'base de conhecimento',
      'satisfação',
      'ia'
    ],
    prompt: 'O que é o Omni‑Channel no Service Cloud e quais benefícios ele traz para o atendimento?' 
  },
  {
    id: 'q3',
    keywords: [
      'journey builder',
      'personalização',
      'multi‑canal',
      'analytics',
      'roi'
    ],
    prompt: 'Descreva como o Marketing Cloud ajuda a criar jornadas personalizadas e mensurar resultados.'
  },
  {
    id: 'q4',
    keywords: [
      'visão 360',
      'conformidade',
      'patrimônio',
      'automação',
      'ia'
    ],
    prompt: 'Cite uma funcionalidade do Financial Services Cloud que auxilia no cumprimento de normas e explique sua importância.'
  },
  {
    id: 'q5',
    keywords: [
      'real‑time',
      'batch',
      'bidirecional',
      'middleware',
      'api'
    ],
    prompt: 'Quais são os principais tipos de integração de dados no Salesforce e em que situações cada um é recomendado?'
  }
];

// Evaluates a single question based on its index in the array.
function evaluateQuestion(index) {
  const question = interviewQuestions[index];
  const textarea = document.getElementById(question.id);
  const feedbackEl = document.getElementById(`${question.id}-feedback`);
  const answer = textarea.value.toLowerCase();

  // Count keyword hits
  let hits = 0;
  const missing = [];
  question.keywords.forEach(keyword => {
    if (answer.includes(keyword)) {
      hits++;
    } else {
      missing.push(keyword);
    }
  });
  const score = Math.round((hits / question.keywords.length) * 100);

  // Build feedback message
  let message = `Cobertura de ${score}% dos pontos principais.`;
  if (missing.length > 0) {
    message += ` Você pode melhorar mencionando: ${missing.join(', ')}.`;
  } else {
    message += ' Excelente! Você abordou todos os tópicos importantes.';
  }
  // Render feedback
  feedbackEl.textContent = message;
  feedbackEl.style.display = 'block';
}

// Initialize the page by injecting prompts (optional)
function initInterview() {
  // If the prompts are being dynamically inserted you can handle here.
}

// On page load call initInterview if necessary
document.addEventListener('DOMContentLoaded', initInterview);