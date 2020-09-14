import { CSSProperties, FC } from "react";

type ParagraphProps = {
  center?: boolean;
  noMargin?: boolean;
  secondary?: boolean
  className?: string;
  style?: CSSProperties;
};

export const Paragraph: FC<ParagraphProps> = ({ children, center, noMargin, secondary, style = {}, ...props }) => {
  return (
    <>
      <p style={style} {...props}>
        {children}
      </p>
      <style jsx>{`
        p {
          font-size: var(--p);
          line-height: 1.6;
          margin: 0 0 15px 0;
          word-break: break-word;
          ${noMargin ? "margin: 0;" : ""}
          ${center ? "text-align: center;" : ""}
          ${secondary ? "color: var(--color-secondary);" : ""}
        }
      `}</style>
    </>
  );
};

export const Text = Paragraph;
export const P = Paragraph;

export default Paragraph;
