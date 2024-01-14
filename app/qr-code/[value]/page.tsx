import { QRCodeSVG } from "qrcode.react";
import React, { useEffect } from "react";
import Image from "next/image";

export default function QrCodePage({ params }: { params: { value: string } }) {
    const downloadCode = () => {
        const canvas: any = document.getElementById("qrcode");
        if (canvas) {
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = `your_name.png`;
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
                                <QRCodeSVG
                                    value={params.value}
                                    className="w-48 h-48"
                                    id="qrcode"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <button className="bg-[#3662E3] text-white px-6 py-4 rounded-xl">
                            Download
                        </button>
                        <button className="bg-[#3662E3] text-white px-6 py-4 rounded-xl">
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
