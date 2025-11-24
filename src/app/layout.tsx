import "./global.css";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import Header from "./Header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const settings = await client.getSingle("header");

  return (
    <html lang="en">
      <body className="bg-[url('/Images/background.png')] bg-cover bg-top min-h-screen w-5xl px-12 mx-auto">
        <Header settings={settings} />
        <main>{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
