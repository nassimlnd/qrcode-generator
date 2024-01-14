"use client";

import React from "react";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import { useParams, useSearchParams } from "next/navigation";

export default function CodePage() {
    const params = useSearchParams();
    const value = params.get("value");

    const downloadCode = () => {
        const canvas: HTMLCanvasElement = document.getElementById(
            "qrcode"
        ) as HTMLCanvasElement;
        console.log(canvas.toDataURL());

        if (canvas) {
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = `QRCODE-${value}.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    };

    return (
        <>
            <div className="w-3/4 mx-auto h-full">
                <div className="px-6 py-6">
                    <a href="/">
                        <Image
                            src="/assets/svg/logo-qr-generator.svg"
                            width={128}
                            height={128}
                            alt={"Logo"}
                        />
                    </a>
                </div>
                <div className="mt-48 flex flex-col items-center justify-center gap-12">
                    <div className="flex items-center justify-center">
                        <div className="rounded-full p-6 bg-[#4e80ee33]">
                            <div className="p-6 rounded-lg bg-white">
                                <QRCodeCanvas
                                    value={value || ""}
                                    size={196}
                                    id="qrcode"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <button
                            className="bg-[#3662E3] text-white px-6 py-4 rounded-xl"
                            onClick={downloadCode}
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
