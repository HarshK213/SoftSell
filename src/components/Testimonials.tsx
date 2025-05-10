import { motion } from "framer-motion";
import SpotlightCard from "../UI/SpotlightCard";
import { useTheme } from "../Context/ThemeProvider";

// Can add more testimonies
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechNova Inc.",
    content:
      "SoftSell made it incredibly easy to recover value from our unused enterprise licenses. Their valuation was fair and the payment was processed quickly. Highly recommended!",
    avatar: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="#ccc"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z" />
      </svg>
    ),
  },
  {
    name: "Ananya Sharma",
    role: "IT Manager",
    company: "Infotech India",
    content:
      "SoftSell provided a smooth process to sell our surplus software licenses. Their team was supportive and transparent throughout.",
    avatar: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="#ccc"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z" />
      </svg>
    ),
  },
  {
    name: "Michael Chen",
    role: "IT Director",
    company: "GlobalSoft Solutions",
    content:
      "As we transitioned to cloud-based solutions, we had dozens of unused licenses. SoftSell helped us convert these assets into capital that we reinvested in our cloud infrastructure.",
    avatar: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="#ccc"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z" />
      </svg>
    ),
  },
  {
    name: "Rajiv Menon",
    role: "Head of Procurement",
    company: "Bharat Digital",
    content:
      "We were able to monetize our unused licenses efficiently thanks to SoftSell. The experience was hassle-free and professional.",
    avatar: (
      <svg
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="#ccc"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z" />
      </svg>
    ),
  },
];

const Testimonials = () => {

  const { theme } = useTheme() as {
        theme: "light" | "dark";
      };

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it - hear from businesses that have
            successfully sold their licenses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (

            <SpotlightCard  
            className="bg-black/5 dark:bg-white/5" 
            spotlightColor={theme === "dark" ? "rgba(21, 101, 192, 0.5)" : "rgba(123, 162, 237,0.5)"} 
            >
              <motion.div
                key={index}
                className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6 gap-5">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="#ccc"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 14c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
