import { highlight } from "@/lib/highlight";
import AboutPage from "./AboutPage";

export default async function CodeSnap() {
  const code = `
const developer = {
  name: "Afriawan Maulana",
  role: "Software Developer",
  focus: ["Web Development", "Software Engineering"],
  dream: "Becoming a skilled software developer"
};
`;

  const html = await highlight(code, "ts");

  return <AboutPage html={html} />;
}
