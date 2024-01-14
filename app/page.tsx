"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const year = new Date().getFullYear().toString();
    const [value, setValue] = useState("");

    const handleClick = () => {
        window.location.href = "/qr-code/" + value;
    };

    return (
        <main className="flex flex-col items-center justify-center h-full gap-12 md:w-[600px] mx-auto px-6">
            <Image
                src={"/assets/svg/logo-qr-generator.svg"}
                width={256}
                height={256}
                alt={"QR Code Generator"}
            />
            <form action={"/qr-code/"} method="get" className="relative w-full">
                <input
                    name="value"
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                    placeholder="Enter an url"
                    type="text"
                    className="border-2 border-[#3662E3] bg-black h-[70px] w-full px-6 rounded-2xl text-white placeholder-[#364153] focus:outline-none focus:border-[#3662E3]"
                />
                <div className="absolute right-0 top-0 h-full p-2">
                    <button
                        type="submit"
                        //onClick={handleClick}
                        className="h-full rounded-lg bg-[#3662E3] text-white px-6"
                    >
                        QR code
                    </button>
                </div>
            </form>
            <div className="h-full w-1/2 overflow-hidden absolute flex items-center justify-end -z-10">
                <Image
                    src={"/assets/svg/bg-illustration.svg"}
                    width={512}
                    height={512}
                    alt="Background artefacts"
                />
            </div>
            <div className="absolute bottom-0 border-t border-slate-800 w-full">
                <div className="w-2/3 flex items-center text-[#364153] mx-auto py-6">
                    <p>© Nassim LOUNADI {year} - Tous droits réservés</p>
                </div>
            </div>
        </main>
    );
}
