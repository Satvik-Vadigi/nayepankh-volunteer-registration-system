"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VolunteerPage() {
  const router = useRouter();

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
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const response = await fetch("/api/volunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/success");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-6">
        Volunteer Registration
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="college"
          placeholder="College"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="availability"
          placeholder="Availability"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="motivation"
          placeholder="Why do you want to volunteer?"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Submit
        </button>

      </form>
      </div>

    </main>
  );
}