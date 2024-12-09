import { Box } from "@/app/components/Box";
import { Columns } from "@/app/components/Columns";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Logos } from "@/app/components/Logos";
import { News } from "@/app/components/News";
import { Text } from "@/app/components/Text";
import type { Config } from "@measured/puck";

export const config: Config = {
  categories: {
    layout: {
      components: ["Columns"],
    },
    typography: {
      components: ["Text"],
    },
  },
  components: {
    Columns,
    Text,
    Box,
    Logos,
    News,
    Header,
    Footer
  },
};