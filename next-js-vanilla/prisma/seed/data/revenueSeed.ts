import bcrypt from "bcrypt";
import range from "lodash/range";
import { faker } from "@faker-js/faker";

import Seeder from "./seeder";

class RevenueSeed extends Seeder {
  constructor(count: number = 20) {
    super(count);
    this.count = count;
    this.createData();
  }

  createData() {
    range(this.count).forEach(() => {
      this._data.push({
        id: faker.string.uuid(),
        month: faker.date.month({ abbreviated: true }),
        revenue: faker.number.int({ min: 1000000, max: 9000000 }),
      });
    });
  }
}

export default RevenueSeed;