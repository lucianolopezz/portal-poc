import { fetchClientConfig } from "@/utils";

import MariliaHome from "../(brands)/marilia.sp.gov.br/home";
import PenapolisHome from "../(brands)/penapolis.sp.gov.br/home";

export async function generateMetadata() {
  const clientConfig = await fetchClientConfig();

  return {
    title: clientConfig.metaTitle,
    description: clientConfig.metaDescription,
    keywords: clientConfig.metaKeywords?.join(", "),
  };
}

export default async function Home() {
  const clientConfig = await fetchClientConfig();

  switch (clientConfig.domain) {
    case "marilia.sp.gov.br":
      return <MariliaHome />;
    case "penapolis.sp.gov.br":
      return <PenapolisHome />;
    default:
      return <h1>Página não encontrada</h1>;
  }
}

