// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function GET(req: any) {
  const hostname = req.headers.get("host");

  const configs = {
    "marilia.sp.gov.br": {
      domain: "marilia.sp.gov.br",
      metaTitle: "Prefeitura de Marilia - Bem-vindo!",
      metaDescription: "Página inicial da Prefeitura de Marilia.",
      metaKeywords: ["prefeitura", "serviços", "diário oficial"],
      homeTitle: "Bem-vindo à Prefeitura de Marilia",
      homeContent: "Aqui você encontra notícias e serviços da nossa cidade.",
      theme: {
        primaryColor: "#123456",
        secondaryColor: "#abcdef",
        backgroundColor: "#f0f0f0",
      },
    },
    "penapolis.sp.gov.br": {
      domain: "penapolis.sp.gov.br",
      metaTitle: "Prefeitura de Penapolis - Serviços e Notícias",
      metaDescription: "Bem-vindo ao portal da Prefeitura de Penapolis.",
      metaKeywords: ["cidade", "prefeitura", "portal"],
      homeTitle: "Bem-vindo ao Portal da Prefeitura de Penapolis - Portal Oficial",
      homeContent: "Tudo o que você precisa saber sobre nossa cidade.",
      theme: {
        primaryColor: "#654321",
        secondaryColor: "#fedcba",
        backgroundColor: "#ffffff",
      },
    },
  };

  const config = configs["penapolis.sp.gov.br"];

  return new Response(JSON.stringify(config), {
    headers: { "Content-Type": "application/json" },
  });
}
