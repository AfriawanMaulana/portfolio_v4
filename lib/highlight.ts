import { createHighlighter } from "shiki";

export async function highlight(code: string, lang = "ts") {
  const highlighter = await createHighlighter({
    themes: ["andromeeda"],
    langs: [lang],
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: "andromeeda",
    transformers: [
      {
        pre(node) {
          node.properties.style = "background: transparent;";
        },
      },
    ],
  });
}
