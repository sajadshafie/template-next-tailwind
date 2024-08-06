import localFont from "next/font/local";

const faFont = localFont({
  src: [
    {
      path: "../../../../../../assets/fonts/vazirmatn/vazirmatn-light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../../../assets/fonts/vazirmatn/vazirmatn-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../../../assets/fonts/vazirmatn/vazirmatn-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../../../assets/fonts/vazirmatn/vazirmatn-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default faFont;
