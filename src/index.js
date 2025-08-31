module.exports = function toReadable(number) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const hundreds = [
    '',
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  const t = Math.floor(number / 10);
  const u = number % 10;
  const h = Math.floor(number / 100);
  const rest = number % 100;

  if (number < 20) {
    return words[number];
  }

  if (number < 100) {
    return `${tens[t]}${u > 0 ? ` ${words[u]}` : ''}`;
  }

  return `${hundreds[h]}${rest === 0 ? '' : ` ${toReadable(rest)}`}`;
};
