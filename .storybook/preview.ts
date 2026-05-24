import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "ivory",
      values: [
        { name: "ivory", value: "#FFF8F0" },
        { name: "white", value: "#ffffff" },
        { name: "maroon", value: "#800020" },
      ],
    },
  },
};

export default preview;
