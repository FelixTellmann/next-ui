import {Property} from "csstype";


type multiplier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type GenericThemeProps = {
  p?: (Property.Padding | multiplier) | any[]
  pt?: (Property.PaddingTop | multiplier) | (Property.PaddingTop | multiplier)[];
  pr?: (Property.PaddingRight | multiplier) | (Property.PaddingRight | multiplier)[];
  pb?: (Property.PaddingBottom | multiplier) | (Property.PaddingBottom | multiplier)[];
  pl?: (Property.PaddingLeft | multiplier) | (Property.PaddingLeft | multiplier)[];
  px?: ((Property.PaddingLeft & Property.PaddingRight) | multiplier) | ((Property.PaddingLeft & Property.PaddingRight) | multiplier)[];
  py?: ((Property.PaddingTop & Property.PaddingBottom) | multiplier) | ((Property.PaddingTop & Property.PaddingBottom) | multiplier)[];
  m?: (Property.Margin | multiplier) | (Property.Margin | multiplier)[];
  mt?: (Property.MarginTop | multiplier) | (Property.MarginTop | multiplier)[];
  mr?: (Property.MarginRight | multiplier) | (Property.MarginRight | multiplier)[];
  mb?: (Property.MarginBottom | multiplier) | (Property.MarginBottom | multiplier)[];
  ml?: (Property.MarginLeft | multiplier) | (Property.MarginLeft | multiplier)[];
  mx?: ((Property.MarginLeft & Property.MarginRight) | multiplier) | ((Property.MarginLeft & Property.MarginRight) | multiplier)[];
  my?: ((Property.MarginTop & Property.MarginBottom) | multiplier) | ((Property.MarginTop & Property.MarginBottom) | multiplier)[];
  top?: (Property.Top | multiplier) | (Property.Top | multiplier)[];
  right?: (Property.Right | multiplier) | (Property.Right | multiplier)[];
  bottom?: (Property.Bottom | multiplier) | (Property.Bottom | multiplier)[];
  left?: (Property.Left | multiplier) | (Property.Left | multiplier)[];
  pos?: Property.Position | Property.Position[];
  color?: Property.Color;
  bg?: Property.BackgroundColor | Property.BackgroundColor[];
  w?: (Property.Width | multiplier) | (Property.Width | multiplier)[];
  h?: (Property.Height | multiplier) | (Property.Height | multiplier)[];
  size?: ((Property.Height & Property.Width) | multiplier) | ((Property.Height & Property.Width) | multiplier)[];
  fs?: Property.FontSize | Property.FontSize[];
  weight?: Property.FontWeight | Property.FontWeight[];
  d?: Property.Display | Property.Display[]
};

type BreakpointProps = "mobile-up" | "tablet-up" | "small-up" | "desktop-up";

export const parseGenericThemePropsToStyledJSX = (input: GenericThemeProps, breakpoint: BreakpointProps) => {
  if (!input) return;
  switch (breakpoint) {
    case "mobile-up": {
      return Object.entries(input)
        .map(([key, value]) => (!Array.isArray(value) ? filterCSS(key, value) : value.length >= 1 ? (value[0] !== null ? filterCSS(key, value[0]) : "") : ""))
        .join("\n");
    }
    case "tablet-up": {
      return Object.entries(input)
        .map(([key, value]) => (Array.isArray(value) ? (value.length >= 2 ? (value[1] !== null ? filterCSS(key, value[1]) : "") : "") : ""))
        .join("\n");
    }
    case "small-up": {
      return Object.entries(input)
        .map(([key, value]) => (Array.isArray(value) ? (value.length >= 3 ? (value[2] !== null ? filterCSS(key, value[2]) : "") : "") : ""))
        .join("\n");
    }
    case "desktop-up": {
      return Object.entries(input)
        .map(([key, value]) => (Array.isArray(value) ? (value.length >= 4 ? (value[3] !== null ? filterCSS(key, value[3]) : "") : "") : ""))
        .join("\n");
    }
  }
};

function optimizeValue(input) {
  if (typeof input === "number") {
    switch (input) {
      case 0:
        return 0;
      case 1:
        return "0.4rem";
      case 2:
        return "0.8rem";
      case 3:
        return "1.6rem";
      case 4:
        return "3.2rem";
      case 5:
        return "6.4rem";
      case 6:
        return "12.8rem";
      case 7:
        return "25.6rem";
      case 8:
        return "51.2rem";
    }
  }

  if (typeof input === "string" && input.match(/(px)$/)) {
    return +input.replace("px", "") / 10 + "rem";
  }

  return input;
}

function filterCSS(key, val) {
  const value = optimizeValue(val);

  switch (key) {
    case "p": {
      return `padding: ${value};`;
    }
    case "pt": {
      return `padding-top: ${value};`;
    }
    case "pr": {
      return `padding-right: ${value};`;
    }
    case "pb": {
      return `padding-bottom: ${value};`;
    }
    case "pl": {
      return `padding-left: ${value};`;
    }
    case "px": {
      return `padding-right: ${value};\n padding-left: ${value};`;
    }
    case "py": {
      return `padding-top: ${value};\n padding-bottom: ${value};`;
    }
    case "m": {
      return `margin: ${value};`;
    }
    case "mt": {
      return `margin-top: ${value};`;
    }
    case "mr": {
      return `margin-right: ${value};`;
    }
    case "mb": {
      return `margin-bottom: ${value};`;
    }
    case "ml": {
      return `margin-left: ${value};`;
    }
    case "mx": {
      return `margin-right: ${value};\n margin-left: ${value};`;
    }
    case "my": {
      return `margin-top: ${value};\n margin-bottom: ${value};`;
    }
    case "pos": {
      return `position: ${value};`;
    }
    case "top": {
      return `top: ${value};`;
    }
    case "right": {
      return `right: ${value};`;
    }
    case "bottom": {
      return `bottom: ${value};`;
    }
    case "left": {
      return `left: ${value};`;
    }
    case "color": {
      return `color: ${value};`;
    }
    case "bg": {
      return `background-color: ${value};`;
    }
    case "w": {
      return `width: ${value};`;
    }
    case "h": {
      return `height: ${value};`;
    }
    case "size": {
      return `width: ${value};\n height: ${value};`;
    }
    case "fs": {
      return `font-size: ${value};`;
    }
    case "weight": {
      return `font-weight: ${value};`;
    }
    case "d": {
      return `display: ${value};`;
    }
  }
}
