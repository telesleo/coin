import readline from 'readline';

class Console {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  input(label: string): Promise<string> {
    return new Promise((resolve) =>
      this.rl.question(label, (answer) => {
        resolve(answer);
        this.rl.pause();
      }),
    );
  }
}

export default new Console();
