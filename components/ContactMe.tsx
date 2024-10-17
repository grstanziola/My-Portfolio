import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || "service_7x4i2ik",
        process.env.REACT_APP_TEMPLATE_ID || "",
        e.target as HTMLFormElement,
        process.env.REACT_APP_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 md:px-8 lg:px-10 text-blacl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
          <p className="mb-2">Email: gabrielstanziola4@gmail.com</p>
          <p className="mb-4">Phone: (+39)&nbsp;3514730621 </p>
          <p className="mb-6 text-black">
            "I welcome the opportunity to connect. Feel free to reach out, and
            let's explore how we can collaborate."
          </p>
        </div>

        <form onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-white bg-transparent"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-white bg-transparent"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-32 p-2 border-b border-gray-300 focus:outline-none focus:border-white bg-transparent"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          {stateMessage && (
            <p className="text-center mt-4 text-green-500">{stateMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
