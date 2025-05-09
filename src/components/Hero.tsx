import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">


        <div className="flex flex-col md:flex-row items-center">

          {/* Left Side Part */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Unlock the Value of Your Unused Software
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Turn your idle software licenses into cash. Fast, secure, and
              hassle-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <motion.a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-center transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sell My Licenses
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-semibold py-3 px-8 rounded-lg text-center transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn How It Works
              </motion.a>

            </div>

          </motion.div>


          {/* Right Side Part */}
          <motion.div
            className="md:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* <img
              src="../facicon.svg"
              alt="Software license marketplace"
              className="w-full h-auto rounded-lg shadow-xl"
            /> */}
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="350px"
                  height="350px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#155dfc"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M19 16V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z" />
                  <path d="M5 19h14" />
                  <path d="m9 7 2 2 4-4" />
                </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
