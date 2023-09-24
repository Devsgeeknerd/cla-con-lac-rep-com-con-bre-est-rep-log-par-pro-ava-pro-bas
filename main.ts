// Break
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

// Continue
for (let a = 1; a <= 10; a = a + 1) {
  if (a == 5 || a == 7) {
    continue;
  }
  console.log(a);
}
