import { Size, Device } from "../../interfaces/interfaces";
export const size: Size = {
  mobileMax: "576px",
  tablet: "577px",
  smallDesktop: "769px",
  desktop: "993px",
  fullHD: "1201px",
};

export const device: Device = {
  mobile: `(max-width: ${size.mobileMax})`,
  tablet: `(min-width: ${size.tablet})`,
  smallDesktop: `(min-width: ${size.smallDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
  fullHD: `(min-width: ${size.fullHD})`,
};
