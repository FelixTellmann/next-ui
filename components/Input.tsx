import { Component, ComponentType, FC } from "react";
import { IconType } from "react-icons";
import { IconBaseProps } from "react-icons/src/iconBase";

type InputProps = {
  placeholder?: string;
  label?: string;
  icon?: any;
};

export const Input: FC<InputProps> = ({ label, placeholder, icon }) => {
  return (
    <>
      <div className="input-group">
        <input aria-label={label ? label : placeholder} placeholder={placeholder} />
        {icon}
      </div>
      <style jsx>{`
        .input-group {
          width: 100%;
          height: 4rem;
          display: flex;
          align-items: center;
          padding: 0 1.6rem;
          border: 1px solid var(--color-input-border);
          border-radius: var(--border-radius);
          background-color: var(--color-input);
          transition: all 0.2s;
          &:hover {
            border-color: var(--color-input-border-hover);
          }
          &:focus,
          &:active,
          &:focus-within {
            border-color: #3182ce;
            box-shadow: 0 0 0 1px #3182ce;
          }
        }
        input {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          border: 0;
          background-color: unset;
          color: inherit;
          font-family: inherit;
        }
      `}</style>
    </>
  );
};

export default Input;
