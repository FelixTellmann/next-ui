import { CSSProperties, FC } from "react";

type HeadingProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: CSSProperties;
  className?: string;
};

export const Heading: FC<HeadingProps> = ({ children, className = "", h1 = true, h2, h3, h4, h5, h6, as, style = {}, ...props }) => {
  h6 && ((h1 = h2 = h3 = h4 = h5 = false), (className += " h6"), !as && (as = "h6"));
  h5 && ((h1 = h2 = h3 = h4 = h6 = false), (className += " h5"), !as && (as = "h5"));
  h4 && ((h1 = h2 = h3 = h5 = h6 = false), (className += " h4"), !as && (as = "h4"));
  h3 && ((h1 = h2 = h4 = h5 = h6 = false), (className += " h3"), !as && (as = "h3"));
  h2 && ((h1 = h3 = h4 = h5 = h6 = false), (className += " h2"), !as && (as = "h2"));
  h1 && ((h2 = h3 = h4 = h5 = h6 = false), (className += " h1"), !as && (as = "h1"));

  return (
    <>
      {as === "h1" && (
        <h1 className={className.trim()} style={style} {...props}>
          {children}
        </h1>
      )}
      {as === "h2" && (
        <h2 className={className.trim()} style={style} {...props}>
          {children}
        </h2>
      )}
      {as === "h3" && (
        <h3 className={className.trim()} style={style} {...props}>
          {children}
        </h3>
      )}
      {as === "h4" && (
        <h4 className={className.trim()} style={style} {...props}>
          {children}
        </h4>
      )}
      {as === "h5" && (
        <h5 className={className.trim()} style={style} {...props}>
          {children}
        </h5>
      )}
      {as === "h6" && (
        <h6 className={className.trim()} style={style} {...props}>
          {children}
        </h6>
      )}
      <style jsx global>{`
        .h1 {
          font-size: var(--h1);
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px 0;
        }

        .h2 {
          font-size: var(--h2);
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px 0;
        }

        .h3 {
          font-size: var(--h3);
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px 0;
        }

        .h4 {
          font-size: var(--h4);
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px 0;
        }

        .h5 {
          font-size: var(--h5);
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px 0;
        }

        .h6 {
          font-size: var(--h6);
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px 0;
        }
      `}</style>
    </>
  );
};

export default Heading;
