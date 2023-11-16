import Image from "next/image";
import Link from "next/link";
import local from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = local({
	src: "../public/fonts/font.woff2",
});

export const Logo = () => {
	return (
		<Link href="/">
			<div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
				<Image
					src="/logo.svg"
					alt="TaskRabbit"
					width={30}
					height={30}
				/>
				<p
					className={cn(
						"text-lg text-neutral-700",
						headingFont.className
					)}
				>
					TaskRabbit
				</p>
			</div>
		</Link>
	);
};
