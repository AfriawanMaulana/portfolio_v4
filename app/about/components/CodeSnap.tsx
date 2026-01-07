import { highlight } from "@/lib/highlight";
import AboutPage from "./AboutPage";

export default async function CodeSnap() {
  const code = `
const developer = {
  name: "Afriawan Maulana",
  role: "Fullstack Developer",
  focus: ["Web Development", "Software Development"],
  dream: "Becoming a skilled software developer"
};
`;

  const html = await highlight(code, "ts");

  return <AboutPage html={html} />;
}
