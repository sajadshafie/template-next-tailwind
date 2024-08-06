import localFont from "next/font/local";

const enFont = localFont({
  src: [
    {
      path: "../../../../../../assets/fonts/roboto/roboto-light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../../../assets/fonts/roboto/roboto-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../../../assets/fonts/roboto/roboto-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../../../assets/fonts/roboto/roboto-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default enFont;
