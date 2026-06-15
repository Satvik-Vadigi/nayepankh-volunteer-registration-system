import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const volunteers = await prisma.volunteer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Admin Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg text-gray-600">
            Total Volunteers
          </h2>

          <p className="text-4xl font-bold text-blue-600">
            {volunteers.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <a
  href="/api/export"
  className="inline-block mb-6 bg-green-600 text-white px-6 py-3 rounded-lg"
>
  Export CSV Report
</a>
          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

                <th className="p-4 text-left">
                  College
                </th>

                <th className="p-4 text-left">
                  Skills
                </th>
              </tr>

            </thead>

            <tbody>

              {volunteers.map((volunteer) => (
                <tr
                  key={volunteer.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    {volunteer.fullName}
                  </td>

                  <td className="p-4">
                    {volunteer.email}
                  </td>

                  <td className="p-4">
                    {volunteer.phone}
                  </td>

                  <td className="p-4">
                    {volunteer.college}
                  </td>

                  <td className="p-4">
                    {volunteer.skills}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}