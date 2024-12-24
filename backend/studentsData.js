const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Dummy students data
const studentData = [
  {
    Name: "Anjali Sharma",
    Cohort: "AY 2024-25",
    Courses: ["CBSE 9 Math"],
    DateJoined: "2024-01-15T11:30:00",
    LastLogin: "2024-12-10T09:45:00",
    Status: "Active",
  },
  {
    Name: "Rohan Verma",
    Cohort: "AY 2023-24",
    Courses: ["CBSE 9 Science"],
    DateJoined: "2023-06-20T14:15:00",
    LastLogin: "2024-11-29T16:30:00",
    Status: "Inactive",
  },
  {
    Name: "Ishita Gupta",
    Cohort: "AY 2024-25",
    Courses: ["CBSE 9th Physics"],
    DateJoined: "2024-03-12T10:00:00",
    LastLogin: "2024-12-14T18:00:00",
    Status: "Active",
  },
  {
    Name: "Aarav Nair",
    Cohort: "AY 2023-24",
    Courses: ["CBSE 9th Chemistry"],
    DateJoined: "2023-09-18T12:00:00",
    LastLogin: "2024-12-01T13:45:00",
    Status: "Active",
  },
  {
    Name: "Kavya Menon",
    Cohort: "AY 2024-25",
    Courses: ["CBSE 9 Math", "CBSE 9th Biology"],
    DateJoined: "2024-02-25T09:00:00",
    LastLogin: "2024-12-20T20:00:00",
    Status: "Active",
  },
  {
    Name: "Aditya Rao",
    Cohort: "AY 2023-24",
    Courses: ["CBSE 9 Science"],
    DateJoined: "2023-04-11T15:45:00",
    LastLogin: "2024-11-25T11:30:00",
    Status: "Inactive",
  },
  {
    Name: "Priya Jain",
    Cohort: "AY 2024-25",
    Courses: ["CBSE 9 Math"],
    DateJoined: "2024-08-05T10:30:00",
    LastLogin: "2024-12-15T21:15:00",
    Status: "Active",
  },
  {
    Name: "Vikram Singh",
    Cohort: "AY 2023-24",
    Courses: ["CBSE 9th Physics", "CBSE 9 Math"],
    DateJoined: "2023-02-17T11:15:00",
    LastLogin: "2024-10-19T16:00:00",
    Status: "Active",
  },
  {
    Name: "Meera Pillai",
    Cohort: "AY 2024-25",
    Courses: ["CBSE 9th Chemistry"],
    DateJoined: "2024-07-10T13:00:00",
    LastLogin: "2024-12-18T19:30:00",
    Status: "Active",
  },
  {
    Name: "Arjun Desai",
    Cohort: "AY 2023-24",
    Courses: ["CBSE 9th Biology"],
    DateJoined: "2023-05-30T14:00:00",
    LastLogin: "2024-11-22T10:00:00",
    Status: "Inactive",
  },
];

async function main() {
  console.log("Deleting all data from the database");
  await prisma.student.deleteMany();
  console.log("Seeding data into the database");

  for (const student of studentData) {
    await prisma.student.create({
      data: {
        Name: student.Name,
        Cohort: student.Cohort,
        Courses: student.Courses,
        Status: student.Status,
        DateJoined: student.DateJoined,
        LastLogin: student.LastLogin,
      },
    });
  }

  console.log("Data seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error in seeding data",e.message);
    await prisma.$disconnect();
  });
