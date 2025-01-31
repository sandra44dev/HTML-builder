const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text.txt');

/* create wtite stream with 'a' flag which stands for 'Open file for appending' */
const output = fs.createWriteStream(filePath, { 'flags': 'a' });

stdout.write('Введите, пожалуйста, ваш текст:\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  output.write(data);
  /* watch file for real-time upgrade */
  fs.watch(filePath);
});

process.on('exit', () => stdout.write('Спасибо за проверку! Удачи!'));
process.on('SIGINT', process.exit);