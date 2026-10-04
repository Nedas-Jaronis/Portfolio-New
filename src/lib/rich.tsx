import { Fragment, ReactNode } from "react";

/** Renders **bold** runs in a string as emphasised text, so resume highlights stand out. */
export const rich = (text: string): ReactNode =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#f5f5f7]">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
