"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en"); // 'en' or 'fa'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const router = useRouter();

  // Texts for both languages
  const texts = {
    en: {
      navLinks: [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        
        { name: "Contact", href: "#contact" },
      ],
      heroTitle: "Hi, I'm <span>Sam Heidari</span>",
      heroSubtitle:
        "A passionate frontend developer creating beautiful and functional web experiences.",
      projectsTitle: "My <span>Projects</span>",
      projectsSubtitle:
        "Here are some of my recent works. Each project comes with its own challenges and learning opportunities.",
      aboutTitle: "About <span>Me</span>",
      aboutText1:
        "I'm a passionate frontend developer with over 1 years of experience creating modern and responsive web applications. I specialize in React, Next.js, and modern JavaScript frameworks.",
      aboutText2:
        "My approach combines technical expertise with an eye for design, ensuring that the applications I build are not only functional but also provide an exceptional user experience.",
      blogTitle: "Latest <span>Blog</span> Posts",
      blogSubtitle:
        "I occasionally write about web development, design, and other tech topics that interest me.",
      contactTitle: "Get In <span>Touch</span>",
      contactSubtitle:
        "Have a project in mind or want to discuss potential opportunities? Feel free to reach out!",
      formLabels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
      },
      skillsTitle: "Skills",
      toolsTitle: "Tools",
      learnMore: "Learn More About Me",
      viewWork: "View My Work",
      viewAllProjects: "View All Projects",
      viewProject: "View Project →",
      readMore: "Read More →",
    },
    fa: {
      navLinks: [
        { name: "خانه", href: "#home" },
        { name: "پروژه ها", href: "#projects" },
        { name: "درباره من", href: "#about" },
        { name: "بلاگ", href: "#blog" },
        { name: "تماس", href: "#contact" },
      ],
      heroTitle: "سلام، من <span>سام حیدری</span> هستم",
      heroSubtitle:
        "یک توسعه دهنده فرانت اند پرشور که تجربیات وب زیبا و کاربردی خلق می‌کند.",
      projectsTitle: "<span>پروژه</span> های من",
      projectsSubtitle:
        "در اینجا برخی از کارهای اخیر من آمده است. هر پروژه با چالش‌ها و فرصت‌های یادگیری خود همراه است.",
      aboutTitle: "درباره <span>من</span>",
      aboutText1:
        "من یک توسعه دهنده فرانت اند با بیش از 1 سال تجربه در ایجاد برنامه های وب مدرن و واکنش گرا هستم. من در React، Next.js و چارچوب‌های مدرن جاوااسکریپت تخصص دارم.",
      aboutText2:
        "رویکرد من ترکیبی از تخصص فنی با نگاهی به طراحی است که اطمینان حاصل می‌کند برنامه‌هایی که می‌سازم نه تنها کاربردی هستند بلکه تجربه کاربری استثنایی ارائه می‌دهند.",
      blogTitle: "آخرین <span>مطالب</span> بلاگ",
      blogSubtitle:
        "گاهی اوقات در مورد توسعه وب، طراحی و سایر موضوعات فناوری که مرا علاقه‌مند می‌کنند می‌نویسم.",
      contactTitle: "در <span>تماس</span> باشید",
      contactSubtitle:
        "آیا پروژه‌ای در ذهن دارید یا می‌خواهید در مورد فرصت‌های احتمالی بحث کنید؟ خوشحال می‌شوم پیام شما را دریافت کنم!",
      formLabels: {
        name: "نام",
        email: "ایمیل",
        subject: "موضوع",
        message: "پیام",
        submit: "ارسال پیام",
      },
      skillsTitle: "مهارت‌ها",
      toolsTitle: "ابزارها",
      learnMore: "اطلاعات بیشتر درباره من",
      viewWork: "مشاهده کارهای من",
      viewAllProjects: "مشاهده همه پروژه‌ها",
      viewProject: "مشاهده پروژه →",
      readMore: "ادامه مطلب →",
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  const projects = [
    {
      id: 1,
      title: language === "en" ? "Messenger App" : "اپلیکیشن پیام رسان",
      description:
        language === "en"
          ? "A comprehensive messaging application built with Next.js where you can create groups and channels, add/edit/delete contacts, and exchange messages with full functionality including forwarding, editing, deleting, replying to messages, and sending files."
          : "یک برنامه پیام‌رسان جامع ساخته شده با Next.js که در آن می‌توانید گروه‌ها و کانال‌ها ایجاد کنید، مخاطبان را اضافه/ویرایش/حذف کنید و پیام‌ها را با تمامی قابلیت‌ها از جمله فوروارد، ویرایش، حذف، پاسخ به پیام‌ها و ارسال فایل مبادله کنید.",
      image: "/image/mypr3.png",
      tags: ["Next.js", "Tailwind", "Framer Motion", "Firebase"],
    },
    {
      id: 2,
      title: language === "en" ? "Amazon-like UI" : "رابط کاربری شبیه آمازون",
      description:
        language === "en"
          ? "A responsive e-commerce UI inspired by Amazon, featuring product listings, shopping cart, and checkout process with smooth animations and transitions."
          : "یک رابط کاربری تجارت الکترونیک واکنش‌گرا الهام گرفته از آمازون، شامل لیست محصولات، سبد خرید و فرآیند پرداخت با انیمیشن‌ها و انتقال‌های روان.",
      image: "/image/mypr1.png",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      id: 3,
      title: language === "en" ? "Restaurant UI" : "رابط کاربری رستوران",
      description:
        language === "en"
          ? "A modern restaurant interface with menu browsing, table reservation system, and food ordering functionality, designed with attention to user experience."
          : "یک رابط مدرن رستوران با امکان مرور منو، سیستم رزرو میز و عملکرد سفارش غذا، طراحی شده با توجه به تجربه کاربری.",
      image: "/image/mypr2.png",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage("");

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    setSubmitMessage(
      language === 'en' 
        ? 'Message sent successfully!' 
        : 'پیام با موفقیت ارسال شد!'
    );
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  } catch (error) {
    setSubmitMessage(
      language === 'en' 
        ? `Error: ${error.message}` 
        : `خطا: ${error.message}`
    );
  } finally {
    setIsSubmitting(false);
  }
};

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  // Apply RTL for Farsi
  useEffect(() => {
    document.body.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  // Get current text based on language
  const t = texts[language];

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Hero Section */}
      <section
        id="home"
        className={`relative w-full h-screen flex items-center justify-center overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image/mainImage.jpg"
            alt="Background"
            fill
            className="object-cover opacity-70"
            quality={100}
            priority
          />
          <div
            className={`absolute inset-0 ${darkMode ? "bg-gradient-to-b from-black/70 to-black/30" : "bg-gradient-to-b from-white/70 to-white/30"}`}
          ></div>
        </div>

        {/* Navigation */}
        <nav
          className={`absolute top-0 left-0 right-0 py-6 px-4 sm:px-8 lg:px-12 z-20  `}
        >
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="/image/prlogo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === "en" ? "My Portfolio" : "نمونه کارهای من"}
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {t.navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium ${darkMode ? "hover:text-purple-400" : "hover:text-purple-600"} transition-colors`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded-md text-sm ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                {language === "en" ? "فارسی" : "English"}
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-800"}`}
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end">
                <span
                  className={`block h-0.5 w-6 ${darkMode ? "bg-white" : "bg-gray-900"} transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 ${darkMode ? "bg-white" : "bg-gray-900"} transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "w-5 mb-1.5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 ${darkMode ? "bg-white" : "bg-gray-900"} transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45" : "w-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`md:hidden absolute top-20 left-0 right-0 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg p-6 shadow-xl`}
            >
              <div className="flex flex-col space-y-4">
                {t.navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium ${darkMode ? "hover:text-purple-400" : "hover:text-purple-600"} transition-colors`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={toggleLanguage}
                    className={`px-3 py-1 rounded-md text-sm ${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    {language === "en" ? "فارسی" : "English"}
                  </button>

                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-800"}`}
                  >
                    {darkMode ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </button>
                </div>

                <button
                  className={`mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium ${darkMode ? "text-white" : "text-white"}`}
                >
                  {t.navLinks.find((link) => link.href === "#contact").name}
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Content */}
        <div
          className={`container mx-auto px-6 z-10 ${language === "fa" ? "text-right" : "text-left"}`}
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              alt="sadda"
              fill
              src="/image/mainImage.jpg"
              className="object-cover w-full h-full"
              quality={100}
              priority
            />
            <div
              className={`absolute inset-0 ${darkMode ? "bg-black/30" : "bg-white/30"}`}
            ></div>
          </div>

          <div
            className={`text-center relative z-10 pt-20 pb-20 ${language === "fa" ? "font-sans" : ""}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t.heroTitle }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {t.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium shadow-lg text-white"
              >
                {t.viewWork}
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div
          className={`container mx-auto px-6 ${language === "fa" ? "text-right" : "text-left"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t.projectsTitle }}
            />
            <p
              className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              {t.projectsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? "bg-gray-700" : "bg-white"}`}
              >
                <div className="relative xl:min-h-64 sm:min-h-42">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p
                    className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.title === "Messenger App" && (
                    <Link
                      href="http://localhost:3001"
                      className={`mt-4 text-sm font-medium ${darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-500"}`}
                      target="_blank" // Add this if you want to open in new tab
                      rel="noopener noreferrer" // Recommended for security with target="_blank"
                    >
                      {t.viewProject}
                    </Link>
                  )}
                    {project.title === 'Amazon-like UI' && (
                    <Link
                      href="http://localhost:3002"
                      className={`mt-4 text-sm font-medium ${darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-500"}`}
                      target="_blank" // Add this if you want to open in new tab
                      rel="noopener noreferrer" // Recommended for security with target="_blank"
                    >
                      {t.viewProject}
                    </Link>
                  )}      {project.title === 'Restaurant UI' && (
                    <Link
                      href="http://localhost:3003"
                      className={`mt-4 text-sm font-medium ${darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-500"}`}
                      target="_blank" // Add this if you want to open in new tab
                      rel="noopener noreferrer" // Recommended for security with target="_blank"
                    >
                      {t.viewProject}
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
       
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div
          className={`container mx-auto px-6 ${language === "fa" ? "text-right" : "text-left"}`}
        >
          <div
            className={`flex flex-col lg:flex-row items-center gap-12 justify-center ${language === "fa" ? "lg:flex-row-reverse" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, x: language === "fa" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-96 "
            >
              <div className="relative  h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/image/PROFILE.jpg"
                  alt={language === "en" ? "About Me" : "درباره من"}
                  fill
                  className="object-cover "
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: language === "fa" ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: t.aboutTitle }}
              />
              <p
                className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {t.aboutText1}
              </p>
              <p
                className={`mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {t.aboutText2}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="font-bold mb-2">{t.skillsTitle}</h3>
                  <ul
                    className={`space-y-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <li>React & Next.js</li>
                    <li>JavaScript & TypeScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS</li>
                    <li>Redux</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{t.toolsTitle}</h3>
                  <ul
                    className={`space-y-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Adobe Creative Suite</li>
                  </ul>
                </div>
              </div>

         
            </motion.div>
          </div>
        </div>
      </section>

   

      {/* Contact Section */}
      <section
        id="contact"
         className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div
          className={`container mx-auto px-6 ${language === "fa" ? "text-right" : "text-left"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t.contactTitle }}
            />
            <p
              className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              {t.contactSubtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, x: language === "fa" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {t.formLabels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${darkMode ? "bg-gray-800 border border-gray-700 text-white" : "bg-gray-100 border border-gray-300 text-gray-900"}`}
                  placeholder={language === "en" ? "Your Name" : "نام شما"}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: language === "fa" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {t.formLabels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${darkMode ? "bg-gray-800 border border-gray-700 text-white" : "bg-gray-100 border border-gray-300 text-gray-900"}`}
                  placeholder={
                    language === "en" ? "your.email@example.com" : "ایمیل شما"
                  }
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {t.formLabels.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${darkMode ? "bg-gray-800 border border-gray-700 text-white" : "bg-gray-100 border border-gray-300 text-gray-900"}`}
                  placeholder={language === "en" ? "Subject" : "موضوع"}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {t.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${darkMode ? "bg-gray-800 border border-gray-700 text-white" : "bg-gray-100 border border-gray-300 text-gray-900"}`}
                  placeholder={language === "en" ? "Your Message" : "پیام شما"}
                  required
                ></textarea>
              </motion.div>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`md:col-span-2 p-4 rounded-lg ${submitMessage.includes("Error") || submitMessage.includes("خطا") ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
                >
                  {submitMessage}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="md:col-span-2 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium shadow-lg text-white disabled:opacity-70"
                >
                  {isSubmitting
                    ? language === "en"
                      ? "Sending..."
                      : "در حال ارسال..."
                    : t.formLabels.submit}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-white border-t border-gray-200"} py-12`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src="/image/prlogo.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === "en" ? "My Portfolio" : "نمونه کارهای من"}
              </span>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              {t.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium ${darkMode ? "hover:text-purple-400" : "hover:text-purple-600"} transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex space-x-4">
              {["twitter", "github", "linkedin", "instagram"].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-800 hover:bg-purple-600" : "bg-gray-200 hover:bg-purple-200"} transition-colors`}
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div
            className={`mt-8 pt-8 border-t ${darkMode ? "border-gray-800" : "border-gray-200"} text-center text-sm ${darkMode ? "text-gray-500" : "text-gray-600"}`}
          >
            <p>
              © {new Date().getFullYear()}{" "}
              {language === "en" ? "My Portfolio" : "نمونه کارهای من"}.{" "}
              {language === "en"
                ? "All rights reserved."
                : "تمامی حقوق محفوظ است."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
