import hljs from "highlight.js/lib/core";
import "highlight.js/styles/tokyo-night-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import { FC } from "react";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);

export const Code: FC<{ lang: string; code: string }> = ({ lang, code }) => {
  const customHtml = hljs.highlight(code, {
    language: lang,
  }).value;
  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: customHtml }} />
    </pre>
  );
};
