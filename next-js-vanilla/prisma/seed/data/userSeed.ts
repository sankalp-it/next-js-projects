import bcrypt from "bcrypt";
import range from "lodash/range";
import { faker } from "@faker-js/faker";

import Seeder from "./seeder";

class UserSeed extends Seeder {
  constructor(count: number = 10) {
    super(count);
    this.count = count;
    this.createData();
  }

  createData() {
    range(this.count).forEach(() => {
      this._data.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync("12345678", 10),
      });
    });
  }
}

export default UserSeed;