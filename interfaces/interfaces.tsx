interface Size {
  mobileMax: string;
  tablet: string;
  smallDesktop: string;
  desktop: string;
  fullHD: string;
}

interface Device {
  mobile: string;
  tablet: string;
  smallDesktop: string;
  desktop: string;
  fullHD: string;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  contactPreference: string;
}

 export type { Size, Device, FormData };
