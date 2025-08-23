// src/pages/WorkshopRegistration.tsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  price: number;
  capacity: number;
  enrolled: number;
}

const sampleWorkshops: Workshop[] = [
  {
    id: "1",
    title: "Madhubani Folk Art Workshop",
    description: "Learn the beauty of Madhubani art with live guidance.",
    date: "2025-09-15",
    price: 1200,
    capacity: 20,
    enrolled: 12,
  },
  {
    id: "2",
    title: "Warli Painting Workshop",
    description: "Experience tribal art and storytelling through Warli painting.",
    date: "2025-10-01",
    price: 1000,
    capacity: 25,
    enrolled: 25,
  },
];

export default function WorkshopRegistration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const workshop = sampleWorkshops.find((w) => w.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
  });

  const [step, setStep] = useState<"form" | "payment" | "success">("form");

  if (!workshop) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Workshop not found!</h1>
      </div>
    );
  }

  const isFull = workshop.enrolled >= workshop.capacity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePayment = () => {
    setTimeout(() => {
      setStep("success");
    }, 1500); // simulate payment delay
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-lg w-full p-6">
        {step === "form" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Register for Workshop</h1>
            <div className="mb-4 p-4 bg-gray-100 rounded-xl">
              <h2 className="text-lg font-semibold">{workshop.title}</h2>
              <p className="text-gray-600">{workshop.description}</p>
              <p className="text-sm mt-2 text-gray-500">📅 {workshop.date}</p>
              <p className="text-sm text-gray-500">💰 ₹{workshop.price}</p>
              <p className="text-sm text-gray-500">
                Seats left: {workshop.capacity - workshop.enrolled}
              </p>
            </div>
            {isFull ? (
              <p className="text-red-500 font-medium">This workshop is full.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full border p-3 rounded-xl"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border p-3 rounded-xl"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full border p-3 rounded-xl"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl"
                >
                  Proceed to Payment
                </button>
              </form>
            )}
          </>
        )}

        {step === "payment" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Choose Payment Method</h1>
            <div className="space-y-3">
              {["UPI", "Credit Card", "Debit Card", "Net Banking"].map((m) => (
                <label
                  key={m}
                  className="flex items-center space-x-3 border p-3 rounded-xl cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                  />
                  <span>{m}</span>
                </label>
              ))}
            </div>
            <button
              onClick={handlePayment}
              disabled={!formData.paymentMethod}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl disabled:opacity-50"
            >
              Pay ₹{workshop.price}
            </button>
          </>
        )}

        {step === "success" && (
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-green-600">
              🎉 Payment Successful!
            </h1>
            <p>
              Thank you <span className="font-semibold">{formData.name}</span> for registering.
            </p>
            <p className="text-gray-600">
              A confirmation has been sent to <b>{formData.email}</b>.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
