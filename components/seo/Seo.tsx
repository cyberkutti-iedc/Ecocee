import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  twitterHandle?: string;
  type?: string;
  siteName?: string;
  structuredData?: object;
  noIndex?: boolean;
}

export default function Seo({
  title,
  description,
  keywords = [],
  canonical,
  image = "https://ecocee.in/icon.jpg",
  twitterHandle = "@Ecocee",
  type = "website",
  siteName = "Ecocee",
  structuredData,
  noIndex = false,
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}
