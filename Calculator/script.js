const displayEl = document.getElementById('display');
const historyEl = document.getElementById('history');

let current = '0';
let expression = '';
let justCalculated = false;

const symbolMap = {
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷'
};

const operatorMap = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/'
};

function render() {
  displayEl.textContent = current;
  historyEl.textContent = expression;
  displayEl.style.fontSize = current.length > 9 ? '28px' : '40px';
}

function inputDigit(digit) {
  if (justCalculated) {
    current = digit === '.' ? '0.' : digit;
    expression = '';
    justCalculated = false;
    render();
    return;
  }
  if (digit === '.' && current.includes('.')) return;
  current = current === '0' && digit !== '.' ? digit : current + digit;
  render();
}

function inputOperator(action) {
  justCalculated = false;
  expression = expression.replace(/[+\u2212\u00d7\u00f7]\s*$/, '');
  expression += current + ' ' + symbolMap[action] + ' ';
  current = '0';
  render();
}

function clearAll() {
  current = '0';
  expression = '';
  justCalculated = false;
  render();
}

function deleteLast() {
  current = current.length > 1 ? current.slice(0, -1) : '0';
  render();
}

function toPercent() {
  current = String(parseFloat(current) / 100);
  render();
}

function calculate() {
  const full = expression + current;
  const safeExp = full
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-');

  if (!/^[0-9+\-*/.\s]+$/.test(safeExp)) {
    current = 'Error';
    render();
    return;
  }

  try {
    const result = evaluateExpression(safeExp);
    expression = full + ' =';
    current = String(Number(result.toFixed(10)));
    justCalculated = true;
  } catch (err) {
    current = 'Error';
    expression = '';
  }
  render();
}

// Simple recursive-descent parser (avoids using eval)
function evaluateExpression(str) {
  let i = 0;

  function peek() { return str[i]; }
  function next() { return str[i++]; }

  function parseNumber() {
    let start = i;
    while (i < str.length && /[0-9.]/.test(peek())) i++;
    return parseFloat(str.slice(start, i));
  }

  function parseFactor() {
    while (peek() === ' ') i++;
    if (peek() === '-') { next(); return -parseFactor(); }
    if (peek() === '(') {
      next();
      const val = parseExpr();
      if (peek() === ')') next();
      return val;
    }
    return parseNumber();
  }

  function parseTerm() {
    let val = parseFactor();
    while (true) {
      while (peek() === ' ') i++;
      if (peek() === '*') { next(); val *= parseFactor(); }
      else if (peek() === '/') { next(); val /= parseFactor(); }
      else break;
    }
    return val;
  }

  function parseExpr() {
    let val = parseTerm();
    while (true) {
      while (peek() === ' ') i++;
      if (peek() === '+') { next(); val += parseTerm(); }
      else if (peek() === '-') { next(); val -= parseTerm(); }
      else break;
    }
    return val;
  }

  const result = parseExpr();
  if (!isFinite(result)) throw new Error('Math error');
  return result;
}

document.querySelectorAll('.key').forEach(btn => {
  btn.addEventListener('click', () => {
    const num = btn.dataset.num;
    const action = btn.dataset.action;

    if (num !== undefined) {
      inputDigit(num);
    } else if (action === 'clear') {
      clearAll();
    } else if (action === 'delete') {
      deleteLast();
    } else if (action === 'percent') {
      toPercent();
    } else if (action === 'calculate') {
      calculate();
    } else if (operatorMap[action]) {
      inputOperator(action);
    }
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9.]/.test(key)) inputDigit(key);
  else if (key === '+') inputOperator('add');
  else if (key === '-') inputOperator('subtract');
  else if (key === '*') inputOperator('multiply');
  else if (key === '/') { e.preventDefault(); inputOperator('divide'); }
  else if (key === 'Enter' || key === '=') calculate();
  else if (key === 'Backspace') deleteLast();
  else if (key === 'Escape') clearAll();
  else if (key === '%') toPercent();
});

render();
