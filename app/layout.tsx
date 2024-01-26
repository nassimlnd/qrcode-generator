import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "QR Code Generator",
    description: "Generate QR codes for free.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <title>QR Code Generator</title>
                <meta name="description" content={metadata.description ? metadata.description : "Generate QR codes for free."} />
            </head>
            <body className={outfit.className + " bg-[#111729]"}>
                {children}
            </body>
        </html>
    );
}
