import hljs from "highlight.js/lib/core";
import "highlight.js/styles/tokyo-night-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export const Terminal = () => {
  const customHtml = hljs.highlight("console.log('pls')", {
    language: "javascript",
  }).value;

  return (
    <div className="flex flex-col space-y-3 w-full md:max-w-lg lg:max-w-4xl mx-auto">
      <div className="bg-zinc-900 relative w-full h-96 rounded-md box">
        <div className="w-full h-[50px] left-2">
          <div className="bg-rose-500 w-3 h-3 inline-block rounded-full mx-1" />
          <div className="bg-yellow-500 w-3 h-3 inline-block rounded-full mx-1" />
          <div className="bg-green-500 w-3 h-3 inline-block rounded-full mx-1" />
        </div>
        <div className="p-5 font-mono w-full flex flex-col space-y-3 text-md md:text-lg lg:text-xl h-full">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: customHtml }} />
          </pre>
        </div>
      </div>
    </div>
  );
};
