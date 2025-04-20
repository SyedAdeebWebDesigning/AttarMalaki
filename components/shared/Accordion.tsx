"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function FaqSection() {
	return (
		<section className="mt-12 px-4">
			<MaxWidthWrapper>
				<h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
				<Accordion
					type="single"
					defaultValue="item-1"
					collapsible
					className="w-full space-y-4">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-lg font-semibold cursor-pointer">
							What is Attar Malaki?
						</AccordionTrigger>
						<AccordionContent
							className="
                  overflow-hidden text-gray-600
                  data-[state=open]:animate-accordion-down
                  data-[state=closed]:animate-accordion-up
                ">
							Attar Malaki is a premium line of handcrafted Arabic perfumes,
							blending traditional ingredients like oud, rose, and amber to
							create timeless, luxurious fragrances.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="text-lg font-semibold cursor-pointer">
							How can I place an order?
						</AccordionTrigger>
						<AccordionContent
							className="
                  overflow-hidden text-gray-600
                  data-[state=open]:animate-accordion-down
                  data-[state=closed]:animate-accordion-up
                ">
							Simply browse our Store, add your favorite attars to the cart, and
							proceed to checkout. We accept major credit cards, UPI, and net
							banking.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger className="text-lg font-semibold cursor-pointer">
							What are your shipping options?
						</AccordionTrigger>
						<AccordionContent
							className="
                  overflow-hidden text-gray-600
                  data-[state=open]:animate-accordion-down
                  data-[state=closed]:animate-accordion-up
                ">
							We offer standard and express shipping across India. Orders over
							₹999 qualify for free standard delivery. International shipping is
							available to selected countries.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger className="text-lg font-semibold cursor-pointer">
							Are your perfumes alcohol-free?
						</AccordionTrigger>
						<AccordionContent
							className="
                  overflow-hidden text-gray-600
                  data-[state=open]:animate-accordion-down
                  data-[state=closed]:animate-accordion-up
                ">
							Yes—our attars are pure oil-based fragrances without any alcohol
							or synthetic additives, ensuring a long-lasting and authentic
							scent.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger className="text-lg font-semibold cursor-pointer">
							How do I get help or support?
						</AccordionTrigger>
						<AccordionContent
							className="
                  overflow-hidden text-gray-600
                  data-[state=open]:animate-accordion-down
                  data-[state=closed]:animate-accordion-up
                ">
							You can reach us via the Contact Us section in the footer, email
							us at{" "}
							<a href="mailto:malakiattars@gmail.com" className="underline">
								malakiattars@gmail.com
							</a>{" "}
							or call us at +91 86307 66188.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</MaxWidthWrapper>
		</section>
	);
}
