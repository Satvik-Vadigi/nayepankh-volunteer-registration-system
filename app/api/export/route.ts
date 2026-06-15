import { prisma } from "@/lib/prisma";

export async function GET() {
  const volunteers = await prisma.volunteer.findMany();

  const csv =
    "Name,Email,Phone,College\n" +
    volunteers
      .map(
        (v) =>
          `${v.fullName},${v.email},${v.phone},${v.college}`
      )
      .join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition":
        "attachment; filename=volunteers.csv",
    },
  });
}