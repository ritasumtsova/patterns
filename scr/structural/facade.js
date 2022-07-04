class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {

  }

  add(copmlaint) {
    this.complaints.push(copmlaint);
    return this.reply(copmlaint);
  }
}

class ProductComplaint extends Complaints {
  reply({ id, customer, details }) {
    return `Product ${id} ${customer} ${details}`;
  }
}

class ServiceComplaint extends Complaints {
  reply({ id, customer, details }) {
    return `Service ${id} ${customer} ${details}`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (complaint.type === 'service') {
      complaint = new ServiceComplaint();
    } else {
      complaint = new ProductComplaint();
    }

    return complaint.add({ id, customer, details });
  }
}