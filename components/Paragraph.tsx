import { CSSProperties, FC } from "react";

type ParagraphProps = {
  center?: boolean;
  noMargin?: boolean;
  className?: string;
  style?: CSSProperties;
};

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          font-size: var(--p);
          line-height: 1.6;
          margin: 0 0 15px 0;
          word-break: break-word;
        }
      `}</style>
    </>
  );
};

export const Text = Paragraph;
export const P = Paragraph;

export default Paragraph;
