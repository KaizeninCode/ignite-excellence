"use client";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formState, setFormState] = useState({
    parentGuardianName: "",
    parentGuardianPhone: "",
    childName: "",
    religion: "",
    childAllergies: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  });
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("https://ignite-excellence.onrender.com/submit", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      if (json.result === "success") {
        setStatus("");
        setFormState({
          parentGuardianName: "",
          parentGuardianPhone: "",
          childName: "",
          religion: "",
          childAllergies: "",
          emergencyContactName: "",
          emergencyContactPhone: "",
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };
  return (
    <form className="shadow-xl rounded-xl p-8 mt-8 max-w-lg mx-auto" onSubmit={handleSubmit}>
      {showToast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 transition-all">
          Response recorded successfully!
        </div>
      )}
      <h2 className="text-3xl text-red-800 mb-8">Register your child here</h2>
      <div className="space-y-4">
        <div className="grid ">
          <label htmlFor="childName">Child's Name</label>
          <input
            id="childName"
            type="text"
            placeholder="Enter your child's full name"
            required={true}
            className="border-b text-red-800 p-1"
            onChange={(e) =>
              setFormState({ ...formState, childName: e.target.value })
            }
            value={formState.childName}
          />
        </div>
        <div className="grid ">
          <label htmlFor="parentGuardianName">Parent/Guardian Name</label>
          <input
            id="parentGuardianName"
            type="text"
            placeholder="Enter your full name"
            required={true}
            className="border-b text-red-800  p-1"
            onChange={(e) =>
              setFormState({ ...formState, parentGuardianName: e.target.value })
            }
            value={formState.parentGuardianName}
          />
        </div>
        <div className="grid ">
          <label htmlFor="parentGuardianPhone">Parent/Guardian Phone</label>
          <input
            id="parentGuardianPhone"
            type="phone"
            placeholder="07xx xxx xxx"
            required={true}
            className="border-b text-red-800  p-1"
            onChange={(e) =>
              setFormState({
                ...formState,
                parentGuardianPhone: e.target.value,
              })
            }
            value={formState.parentGuardianPhone}
          />
        </div>

        <div className="grid ">
          <label htmlFor="religion">Religion</label>
          <input
            id="religion"
            type="text"
            placeholder="Christian, Muslim, etc."
            required={true}
            className="border-b text-red-800  p-1"
            onChange={(e) =>
              setFormState({ ...formState, religion: e.target.value })
            }
            value={formState.religion}
          />
        </div>
        <div className="grid ">
          <label htmlFor="emergencyContact">Emergency Contact Name</label>
          <input
            id="emergencyConact"
            type="text"
            placeholder="Enter your emergency contact's full name"
            required={true}
            className="border-b text-red-800  p-1"
            onChange={(e) =>
              setFormState({
                ...formState,
                emergencyContactName: e.target.value,
              })
            }
            value={formState.emergencyContactName}
          />
        </div>
        <div className="grid ">
          <label htmlFor="emergencyContactPhone">Emergency Contact Phone</label>
          <input
            id="emergencyContactPhone"
            type="phone"
            placeholder="07xx xxx xxx"
            required={true}
            className="border-b text-red-800 p-1"
            onChange={(e) =>
              setFormState({
                ...formState,
                emergencyContactPhone: e.target.value,
              })
            }
            value={formState.emergencyContactPhone}
          />
        </div>
        <div className="grid ">
          <label htmlFor="childAllergies">Child Allergies (if any)</label>
          <textarea
            id="childAllergies"
            required={false}
            className="border-b p-1 text-red-800"
            onChange={(e) =>
              setFormState({ ...formState, childAllergies: e.target.value })
            }
            value={formState.childAllergies}
          />
        </div>
        <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="p-2 mt-4 mx-auto border rounded-xl transition duration-500 ease-in-out hover:bg-red-800 hover:text-white cursor-pointer"
            >
              Submit Response
            </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
