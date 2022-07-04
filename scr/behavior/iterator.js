class Iterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          }
        } else {
          this.index = 0;
          return {
            value: null,
            done: true,
          }
        }
      },
    }
  }
}

const iterator = new Iterator([1, 2, 3]);

for (const val of iterator) {
  console.log(val);
}