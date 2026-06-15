import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">

  <div>
    <h1 className="text-6xl font-bold mb-6">
      NayePankh Foundation
    </h1>

    <p className="text-xl mb-8">
      Empowering communities through education,
      volunteering and social impact initiatives.
    </p>

    <Link
      href="/volunteer"
      className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
    >
      Become a Volunteer
    </Link>
  </div>

  <div>
    <img
      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
      alt="Volunteers"
      className="rounded-2xl shadow-2xl"
    />
  </div>

</div>

      {/* About */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8 text-center">
            About NayePankh Foundation
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            NayePankh Foundation is committed to creating
            meaningful social change through education,
            youth empowerment, community development,
            and volunteer-driven initiatives.
          </p>

        </div>

      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-100">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-xl shadow text-center">
        <div className="text-5xl mb-4">👥</div>
        <h3 className="text-4xl font-bold">500+</h3>
        <p>Volunteers</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow text-center">
        <div className="text-5xl mb-4">📚</div>
        <h3 className="text-4xl font-bold">50+</h3>
        <p>Projects</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow text-center">
        <div className="text-5xl mb-4">❤️</div>
        <h3 className="text-4xl font-bold">1000+</h3>
        <p>Lives Impacted</p>
      </div>

    </div>

  </div>

</section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Volunteer With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 shadow rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Leadership
              </h3>

              <p>
                Develop leadership and communication
                skills through real-world projects.
              </p>
            </div>

            <div className="p-8 shadow rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Community Impact
              </h3>

              <p>
                Help improve lives through meaningful
                social initiatives and campaigns.
              </p>
            </div>

            <div className="p-8 shadow rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Networking
              </h3>

              <p>
                Connect with passionate volunteers and
                professionals from various fields.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Make an Impact?
        </h2>

        <Link
          href="/volunteer"
          className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
        >
          Register Today
        </Link>

      </section>

      <section className="py-20 bg-gray-100">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Volunteer Experiences
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-xl shadow">
        <p>
          "Volunteering with NayePankh helped me
          develop leadership and teamwork skills."
        </p>
        <h4 className="mt-4 font-bold">
          - Rahul Sharma
        </h4>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p>
          "A wonderful opportunity to contribute
          to meaningful social projects."
        </p>
        <h4 className="mt-4 font-bold">
          - Priya Singh
        </h4>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p>
          "The experience gave me confidence and
          practical exposure."
        </p>
        <h4 className="mt-4 font-bold">
          - Aman Verma
        </h4>
      </div>

    </div>

  </div>

</section>

<section className="py-16 bg-blue-700 text-white">

  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-4">
      Contact Us
    </h2>

    <p className="mb-2">
      Email: contact@nayepankh.com
    </p>

    <p>
      Phone: +91- 8318500748
    </p>

  </div>

</section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        Copyrights © 2026 NayePankh Foundation | Satvik | All Rights Reserved
      </footer>

    </main>
  );
}