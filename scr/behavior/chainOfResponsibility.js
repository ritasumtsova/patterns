class MySum {
  constructor(initValue = 42) {
    this.sum = initValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum = new MySum();
sum.add(6).add(67).add(5).sum;  // this one