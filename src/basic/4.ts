function showMessage(message: string): void {
  console.log(message);
}
showMessage('Hellow!');

function calc(num1: number, num2: number) {
  return num1 + num2;
}
console.log(calc(1, 2));

function customError(): never {
  throw new Error('Error');
}
