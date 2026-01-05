"use client";
import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import Header from "../components/Header";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Page() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields.", {
        position: "bottom-right",
      });
      return;
    }
    e.preventDefault();
    setIsSending(true);

    try {
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("contact_form_submit");
      }
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          "g-recaptcha-response": recaptchaToken,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        autoClose: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to send email:", err);
      toast.error("Failed to send mail!", {
        position: "bottom-right",
        autoClose: 5000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center space-y-6 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-40 absolute -z-10 rounded-full top-10 left-1/3 -translate-x-1/2 shadow-[0_0_200px_0] shadow-primary bg-primary/40 opacity-30"
      ></motion.div>
      <div className="text-center space-y-4">
        <Header
          name="~/contact"
          icon={<MessageSquare size={20} className="text-emerald" />}
        />

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-4xl md:text-6xl"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl text-white/50"
        >
          Feel free to reach out to me through any of the following channels:
        </motion.p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border border-primary/40 p-6 md:p-8 rounded-xl w-full lg:w-1/2 flex flex-col gap-4 hover:-translate-y-2 hover:scale-101 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white/70">name</label>
              <div className="relative">
                <User
                  size={16}
                  className="inline mr-2 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="py-2 pl-10 pr-4 w-full rounded-md border border-white/20"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/70">email</label>
              <div className="relative">
                <Mail
                  size={16}
                  className="inline mr-2 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  required
                  className="py-2 pl-10 pr-4 w-full rounded-md border border-white/20"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/70">subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Message Subject"
              required
              className="py-2 px-4 rounded-md border border-white/20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/70">message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="py-2 px-4 h-40 rounded-md border border-white/20"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-3 px-4 rounded-md hover:cursor-pointer hover:shadow-xl shadow-primary/30 transition-shadow duration-300 mt-4"
          >
            {!isSending ? (
              <p>
                <Send className="inline mr-2" /> Send Message
              </p>
            ) : (
              <p>
                <Loader2 className="inline mr-2 animate-spin" /> Sending...
              </p>
            )}
          </button>
        </motion.form>

        <div className="flex flex-col gap-6  w-full md:w-88">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border border-primary/40 p-6 md:p-8 rounded-xl space-y-2 hover:cursor-pointer hover:-translate-y-1 hover:scale-101 transition-all duration-300"
          >
            <h1>
              <Mail className="inline mr-2 text-primary" /> Contact Information
            </h1>
            <p className="text-sm text-white/80 flex items-center gap-4">
              <Mail className="p-1 bg-white/10 rounded-sm" />
              afriawanmaulana@gmail.com
            </p>
            <p className="text-sm text-white/80 flex items-center gap-4">
              <MapPin className="p-1 bg-white/10 rounded-sm" />
              Surabaya, Indonesia
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border border-primary/40 p-6 md:p-8 rounded-xl hover:cursor-pointer hover:-translate-y-1 hover:scale-101 transition-all duration-300"
          >
            <h1>
              <BriefcaseBusiness className="inline mr-2 text-primary" />{" "}
              Professional Networks
            </h1>
            <div className="grid grid-cols-2 w-full gap-4">
              <Link
                href="https://github.com/afriawanmaulana"
                target="_blank"
                className="bg-primary/10 p-2 text-sm inline-flex text-white/70 hover:text-white items-center rounded-md hover:bg-primary/20 transition-colors mt-4"
              >
                <Github size={20} className="inline mr-2" /> GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/afriawan-maulana-700582254/"
                target="_blank"
                className="bg-primary/10 p-2 text-sm inline-flex text-white/70 hover:text-white items-center rounded-md hover:bg-primary/20 transition-colors mt-4"
              >
                <Linkedin size={20} className="inline mr-2" /> LinkedIn
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border border-primary/40 p-6 md:p-8 rounded-xl hover:cursor-pointer hover:-translate-y-1 hover:scale-101 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-500 rounded-full w-2.5 h-2.5 relative">
                <span className="bg-green-500 w-2.5 h-2.5 rounded-full absolute animate-ping"></span>
              </div>
              <h1 className="text-primary font-semibold">
                Open to opportunities
              </h1>
            </div>
            <p className="text-sm text-white/70">
              I&apos;m open to internships, collaborative projects, and
              meaningful conversations about technology. I typically respond
              within 24-48 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
