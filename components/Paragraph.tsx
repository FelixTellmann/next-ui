import { CSSProperties, FC } from "react";
import { GenericThemeProps, parseGenericThemePropsToStyledJSX } from "../lib/GenericThemeProps";

type ParagraphProps = GenericThemeProps & {
  center?: boolean;
  small?: boolean;
  noMargin?: boolean;
  secondary?: boolean;
  className?: string;
  style?: CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
};

export const Paragraph: FC<ParagraphProps> = ({ children, center, small, noMargin, secondary, style = {}, ...props }) => {
  return (
    <>
      {small ? (
        <p style={style} {...props}>
          <small>{children}</small>
        </p>
      ) : (
        <p style={style} {...props}>
          {children}
        </p>
      )}

      <style jsx>{`
        @import "styles/mixins";
        p {
          font-size: var(--p);
          line-height: 1.6;
          margin: 0 0 15px 0;
          word-break: break-word;
          color: var(--color-text);
          ${noMargin ? "margin: 0;" : ""}
          ${center ? "text-align: center;" : ""}
          ${secondary ? "color: var(--color-secondary);" : ""}
          
          small {
            font-size: var(--small);
          }
        }

        p {
          @include responsive-min(600px) {
            ${parseGenericThemePropsToStyledJSX(props, "tablet-up")}
          }
          @include responsive-min(900px) {
            ${parseGenericThemePropsToStyledJSX(props, "small-up")}
          }
          @include responsive-min(1200px) {
            ${parseGenericThemePropsToStyledJSX(props, "desktop-up")}
          }
          ${parseGenericThemePropsToStyledJSX(props, "mobile-up")}
        }
      `}</style>
    </>
  );
};

export const Text = Paragraph;
export const P = Paragraph;

export default Paragraph;
