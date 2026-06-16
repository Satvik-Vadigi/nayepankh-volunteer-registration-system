"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VolunteerPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    skills: "",
    availability: "",
    motivation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/success");
      } else {
        setError(
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to the server. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Volunteer Registration
        </h1>

        <p className="text-gray-600 mb-6">
          Join NayePankh Foundation and contribute to
          meaningful social impact initiatives.
        </p>

        {error && (
          <div className="mb-6 rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />

          <input
            type="text"
            name="college"
            placeholder="College / Organization"
            value={formData.college}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />

          <textarea
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />

          <input
            type="text"
            name="availability"
            placeholder="Availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />

          <textarea
            name="motivation"
            placeholder="Why do you want to volunteer?"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </main>
  );
}