class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receice(message, from) {
    //
  }
}

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receice(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receice(message, from);
        } 
      })
    }
  }
}