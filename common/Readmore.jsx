import { useEffect, useState } from "react";

export default function ReadMoreLess({ html, wordLimit = 20 }) {
  const [text, setText] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const plain = div.textContent || div.innerText || "";
    setText(plain);
  }, [html]);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const displayText = isCollapsed
    ? text.split(" ").slice(0, wordLimit).join(" ") + "..."
    : text;

  return (
    <>
      <div className="lg:mb-[1.042vw] mb-4 lg:leading-[1.667vw] lg:text-[1vw] text-sm">
        {displayText}
      </div>
      {text.split(" ").length > wordLimit && (
        <p
          className="items-center flex gap-2 lg:mb-[1.042vw] mb-4 cursor-pointer"
          onClick={toggleCollapse}
        >
          <span>{isCollapsed ? "Read more" : "Read less"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M4.94978 7.00009L0 2.05032L1.41422 0.636108L7.77818 7.00009L1.41422 13.364L0 11.9498L4.94978 7.00009Z"
              fill="black"
            />
          </svg>
        </p>
      )}
    </>
  );
}
