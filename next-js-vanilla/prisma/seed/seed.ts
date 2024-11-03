//import { Simulate } from "react-dom/test-utils";
//import error = Simulate.error;
import { PrismaClient } from "@prisma/client";
import UserSeed from "./data/userSeed";
// import RevenueSeed from "./data/revenueSeed";
import { revenueitems, customers, invoices } from "./data/seeder-data"

const prisma = new PrismaClient();

const main = async () => {
  try {
    //await prisma.post.deleteMany();
    await prisma.users.deleteMany();
    await prisma.revenue.deleteMany();

    //const posts = new PostSeed();
    const users = new UserSeed(10);
    // const revenueitems = new RevenueSeed(10);

    for (const user of users.data) {
      await prisma.users.create({
        data: {
          ...(user as any),
        },
      });
    }
    // for (const revenueitem of revenueitems.data) {
    //   await prisma.revenue.create({
    //     data: {
    //       ...(revenueitem as any),
    //     },
    //   });
    // }
    for (const customer of customers) {
      await prisma.customers.create({
        data: customer,
      });
    }

    for (const invoice of invoices) {
      await prisma.invoices.create({
        data: invoice,
      });
    }

    for (const revenueitem of revenueitems) {
      await prisma.revenue.create({
        data: revenueitem,
      });
    }
    console.log(`Database has been seeded. 🚀`);
} catch (e) {
  throw e;
}
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });