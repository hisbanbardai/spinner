const timeout = function (string) {
  let time = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, (time += 200));
  }
};
timeout("|/-\\|/-\\|");
