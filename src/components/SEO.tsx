import { META } from "@/constants/metadata";
import { Metadata } from "next";
import Head from "next/head";

interface generateMetadataProps {
  url?: string;
  page_url?: string;
  title?: string | null | undefined;
  description?: string;
  keywords?: string[];
  icons?: {
    sizes: string;
    rel: string;
    url: string;
    type: string;
  }[];
  manifest?: string;
  twitter?: {
    card: string;
    site: string;
    creator: string;
    images: {
      url: string;
      alt: string;
    };
  };
  openGraph?: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
    };
  };
  googleVerification?: string,
  naverVerification?: string,
}

export const getMetadata = (metadataProps?: generateMetadataProps) => {
  const { title, description, openGraph } = metadataProps || {};
  const ogImage = openGraph?.images?.url;

  const TITLE = title ? `${title} | 반디부디` : META.title;
  const DESCRIPTION = description || META.description;
  const OG_IMAGE = ogImage || META.openGraph.images.url;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keywords],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: metadataProps?.page_url || META.page_url,
      images: {
        url: OG_IMAGE,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};


export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata({
    title: `반짝반짝 빛날 님의 인생지도`
  });
};