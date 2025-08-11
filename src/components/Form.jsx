import { useState } from "react";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    visible: false,
    message: "",
    type: "success", // 'success' or 'error'
  });

  const [loading, setLoading] = useState(false); // loader state

  const showNotification = (message, type = "success") => {
    setNotification({ visible: true, message, type });

    setTimeout(() => {
      setNotification({ visible: false, message: "", type: "success" });
    }, 3000);
  };

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("First Name", formDetails.firstName);
    formData.append("Last Name", formDetails.lastName);
    formData.append("Email", formDetails.email);
    formData.append("Phone", formDetails.phone);
    formData.append("Message", formDetails.message);
    formData.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/ajax/imaginesee.id@gmail.com", {
        method: "POST",
        body: formData,
      });

      showNotification(
        "Message sent! Thank you for contacting me. I'll get back to you soon.",
        "success"
      );

      setFormDetails({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      showNotification("Something went wrong! Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="py-20 text-white px-4 relative">
      {/* Notification */}
      {notification.visible && (
        <div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-md shadow-lg text-white text-center max-w-md w-full transition-all duration-300 ${
            notification.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div id="contact" className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 tracking-wide">
          Get In
          <span className="bg-gradient-to-r from-[#2e6bb1] to-[#F2BE5C] text-transparent bg-clip-text">
            Touch
          </span>
        </h2>

        {loading ? (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
            <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              we will get in touch soon
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={formDetails.fullName}
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
              required
              className="bg-neutral-800 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={formDetails.companyName}
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
              required
              className="bg-neutral-800 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              required
              className="bg-neutral-800 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formDetails.phone}
              onChange={(e) => onFormUpdate("phone", e.target.value)}
              required
              className="bg-neutral-800 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              rows="6"
              placeholder="Message"
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              required
              className="md:col-span-2 bg-neutral-800 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-orange-600 hover:bg-orange-700 transition-all py-3 rounded-md text-lg font-medium"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
