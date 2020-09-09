import { FC } from "react";

export type BadgeProps = {
  /**
   * Change the status of the badge.
   * @param status - is used for the status
   */
  status: "positive" | "negative" | "neutral" | "error" | "warning"
}
/**
 * This is a commnent
 * */
export const Badge: FC<BadgeProps> = ({ children, status = 'positive' }) => {
  return <>
    <span className={`badge ${status}`}>
      {children}
    </span>
    <style jsx>{`
      .badge {
        display: inline-block;
        vertical-align: top;
        font-family: sans-serif;
        font-size: 11px;
        line-height: 12px;
        padding: 4px 12px;
        border-radius: 3em;
        font-weight: 700;
        text-transform: uppercase;
        transition: box-shadow 0.2s ease-in-out;

        &:hover, &:focus {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }
      }

      .positive {
        color: #66bf3c;
        background: #e1ffd4;
      }

      .negative {
        color: #f40;
        background: #feded2;
      }

      .neutral {
        color: #666;
        background: #eee;
      }

      .error {
        color: #fff;
        background: #f40;
      }

      .warning {
        color: #e69d00;
        background: #fff5cf;
      }
    
    `}</style>
  </>;
};