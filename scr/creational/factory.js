class LiteMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandartMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MebershipFactory {
  static list = {
    lite: LiteMembership,
    standart: StandartMembership,
    premium: PremiumMembership,
  }

  create(name, type = lite) {
    const Membership = MebershipFactory.list[type] || MebershipFactory.list.standart;
    const member = new Membership(name);
    member.type = type;
    member.define = function() {
      console.log(member);
    };

    return member;
  }
}

const factory = new MembershipFactory();
const members = [
  factory.create('Rita', 'standart')
];