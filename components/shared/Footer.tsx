import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="bg-white text-slate-800 border-t border-slate-200 relative z-10">
			<MaxWidthWrapper>
				<div className=" px-4 py-12">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{/* Brand and About */}
						<div className="space-y-4">
							<h2 className="text-2xl font-bold text-slate-900">
								Attar Malaki
							</h2>
							<p className="text-slate-600">
								Premium fragrances and essential oils crafted with tradition and
								excellence.
							</p>
						</div>

						{/* Quick Links */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-slate-900">
								Quick Links
							</h3>
							<ul className="space-y-2">
								<li>
									<Link href="/" className="hover:text-slate-900">
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/products?page=1&category="
										className="hover:text-slate-900">
										Products
									</Link>
								</li>
								<li>
									<Link href="/about" className="hover:text-slate-900">
										About Us
									</Link>
								</li>
								<li>
									<Link href="/contact" className="hover:text-slate-900">
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact Information */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-slate-900">
								Contact Us
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center">
									<Phone className="mr-2 h-5 w-5 shrink-0 text-slate-500" />
									<span>+91 86307 66188</span>
								</li>
								<li className="flex items-center">
									<Mail className="mr-2 h-5 w-5 shrink-0 text-slate-500" />
									<span>malakiattars@gmail.com</span>
								</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h3 className="text-lg font-semibold text-slate-900 flex items-center justify-start">
								Payment integration with
								<span>
									<Image
										src={"/svg/Stripe-Logo.svg"}
										alt="Stripe"
										width={50}
										height={12}
										className="inline-block ml-1"
									/>
								</span>
							</h3>
							<p className="text-slate-600">
								We accept all major credit and debit cards through Stripe for
								secure transactions.
							</p>
							<div className="grid grid-cols-3 place-items-start">
								<div className="flex items-center justify-start">
									<Image
										src={"/svg/visa.svg"}
										alt="Visa"
										width={80}
										height={24}
									/>
								</div>
								<div className="flex items-center justify-start">
									<Image
										src={"/svg/mastercard.svg"}
										alt="MasterCard"
										width={80}
										height={24}
									/>
								</div>
								<div className="flex items-center justify-start ">
									<Image
										src={"/svg/AmericanExpress.svg"}
										alt="American Express"
										className="p-1"
										width={80}
										height={10}
									/>
								</div>
							</div>
						</div>
					</div>

					<Separator className="my-8 bg-slate-200" />

					<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
						<p className="text-sm text-slate-500">
							© {new Date().getFullYear()} Attar Malaki. All rights reserved.
							<br />
							<span className="text-xs text-gray-500 text-center">
								*Note: This website is part of a college project and is not a
								real commercial store.
							</span>
						</p>
						<div className="flex space-x-6 text-sm">
							<Link
								href="/terms"
								className="text-slate-500 hover:text-slate-900">
								Terms of Service
							</Link>
							<Link
								href="/privacy"
								className="text-slate-500 hover:text-slate-900">
								Privacy Policy
							</Link>
							<Link
								href="/shipping"
								className="text-slate-500 hover:text-slate-900">
								Shipping Policy
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
}
