class DB {
  constructor(data) {
    if (DB.exsists) {
      return DB.instance;
    }

    DB.instance = this;
    DB.exsists = true;
    this.data = data;
  }

  get data() {
    return this.data;
  }
}

const mongo = new DB('mongo');