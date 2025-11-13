import React, { useState } from "react";
import { FaRobot } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const faqData = {
  "Hi?": "Hello user ! welcome our website",
  "what is your menu?":
    "Our menu includes burgers 🍔, pizzas 🍕, sandwiches 🥪, fries 🍟, and fresh juices 🥤.",
  "do you offer home delivery?":
    "Yes! We provide home delivery across the city 🚚. Delivery time depends on your location — usually 30–45 minutes.",
  "what are your working hours?":
    "We’re open every day from 10:00 AM to 11:00 PM 🕒.",
  "how can i place an order?":
    "You can place an order directly on our website or call us at 📞 +91-98765-43210.",
  "do you have vegetarian options?":
    "Absolutely 🌱! We have veg pizzas, veggie burgers, and fruit juices for all vegetarian customers.",
  "do you offer online payment?":
    "Yes, we accept UPI, credit/debit cards, and cash on delivery 💳💵.",
  "can i customize my order?":
    "Of course! You can choose extra cheese, toppings, or remove ingredients while ordering 🧀🍅.",
  "what is your delivery area?":
    "We deliver across the main city area — check the delivery availability on our order page 📍.",
  "do you have any offers?":
    "Yes! Get 20% off on your first online order 🎉 and free fries on orders above ₹499.",
  "how long will it take to deliver my order?":
    "Usually 30–45 minutes, depending on traffic and distance 🚗💨.",
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there 👋! Welcome to cafehavana 🍔 — How can I help you today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMsg = { sender: "user", text: userInput };
    const botResponse =
      faqData[userInput.toLowerCase()] ||
      "Sorry, I’m not sure about that 😅. Try asking about our menu, delivery, or offers.";

    setMessages([...messages, userMsg, { sender: "bot", text: botResponse }]);
    setUserInput("");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className=" text-4xl bg-orange-600 text-white px-3 py-3 rounded-full"
          >
            <FaRobot />
          </button>
        )}

        {isOpen && (
          <div className="w-80 h-[80vh] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden">
            <div className="bg-orange-600 text-white font-bold p-3 flex justify-between items-center">
              <span>CafeHavana Bot</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-bold hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-orange-100 self-end ml-auto"
                      : "bg-gray-100 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-2 border-t flex gap-2 bg-white">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
                placeholder="Ask about menu, delivery...."
              />
              <button onClick={handleSend}>
                <IoMdSend className="text-3xl text-orange-600  " />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
