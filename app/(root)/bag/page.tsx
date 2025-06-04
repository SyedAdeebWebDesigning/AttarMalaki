import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { getUserBag } from "@/lib/actions/bag/bag.action";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { user } from "@/typings";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import {
	Trash2,
	Plus,
	Minus,
	ShoppingBag,
	Heart,
	ArrowLeft,
	Gift,
	Truck,
	Shield,
	Star,
} from "lucide-react";
import { getProductById } from "@/lib/actions/products/products.action";
import BackButton from "@/components/shared/BackButton";
import DeleteProductButton from "@/components/shared/DeleteProductButton";

const page = async () => {
	const clerkUser = await currentUser();
	const userId = clerkUser.id;
	const user = (await getUserByClerkId(userId)) as user;
	const bag = await getUserBag(user.id);

	console.log("User Bag:", bag);

	if (!bag || bag.length === 0) {
		return (
			<section>
				<div className="flex items-center flex-col justify-center h-[100vh] mx-2">
					<div className="relative size-36 mb-4">
						<Image src={"/svg/Bag.svg"} alt="bag" fill />
					</div>
					<h1 className="text-4xl font-bold text-center">Your Bag is Empty!</h1>
					<p className="text-lg text-gray-500 mt-2 text-center">
						Looks like you haven't added anything to your bag yet. Explore our
						products and start shopping!
					</p>
					<Button
						className="mt-4 font-semibold shadow-md hover:bg-white hover:shadow-lg text-md"
						variant="outline"
						size="lg">
						<Link href={"/products?page=1"}>Explore Products</Link>
					</Button>
				</div>
			</section>
		);
	}

	const subtotal = bag.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const shipping = subtotal > 3000 ? 0 : 199;
	const total = subtotal + shipping;

	return (
		<div className="pt-22">
			<div className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-10">
				<MaxWidthWrapper>
					<div className="py-4 px-3 md:px-0">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<BackButton />
								<h1 className="text-2xl font-bold text-black">Shopping Bag</h1>
							</div>
							<div className="flex items-center space-x-2 text-black">
								<ShoppingBag className="w-5 h-5" />
								<span className="font-medium">{bag.length} items</span>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>

			<MaxWidthWrapper>
				<div className="py-8 relative">
					<div className="absolute w-full bottom-8 h-10 z-10 bg-gradient-to-b from-transparent to-white"></div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2 space-y-6 overflow-y-scroll h-[44vh] relative">
							{bag.map(async (item, idx) => {
								const productId = item.productId;
								if (!productId) return null;

								const product = await getProductById(productId);
								if (!product) return null;

								return (
									<div
										key={item.id}
										className="bg-white rounded-2xl border border-black/10 shadow-md transition-all p-6 relative">
										<div className="absolute right-2 top-2">
											<DeleteProductButton
												userId={item.userId}
												cartId={item.id}
											/>
										</div>
										<div className="flex items-start space-x-4">
											<div className="relative size-28 flex-shrink-0 object-cover">
												<Image
													src={product.image}
													alt={product.name}
													fill
													className="object-cover rounded-lg"
												/>
											</div>
											<div className="flex-1">
												<div className="flex items-start justify-between">
													<div>
														<p className="text-sm text-gray-500">
															{product.category}
														</p>
														<h3 className="text-lg font-semibold text-gray-900">
															{idx + 1}. {product.name}
														</h3>
														<div className="text-sm text-gray-600 ml-1">
															<p>
																<span className="font-medium">Volume:</span>{" "}
																{item.size.replace("_", " ").replace("ML", "")}{" "}
																ML
															</p>
															<p>
																<span className="font-medium">Quantity:</span>{" "}
																{item.quantity}
															</p>
															<p>
																<span className="font-medium">Price:</span> ₹
																{(item.price * item.quantity).toLocaleString()}
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>

						<div className="lg:col-span-1">
							<div className="bg-white rounded-2xl shadow-md p-6 ">
								<h3 className="text-xl font-semibold text-gray-900 mb-6">
									Order Summary
								</h3>

								<div className="space-y-4 mb-6 text-gray-700">
									<div className="flex justify-between">
										<span>Subtotal ({bag.length} items)</span>
										<span>₹{subtotal.toLocaleString()}</span>
									</div>
									<div className="flex justify-between">
										<span>Shipping</span>
										<span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
									</div>
									<div className="border-t pt-4 font-semibold text-black flex justify-between text-lg">
										<span>Total</span>
										<span>₹{total.toLocaleString()}</span>
									</div>
								</div>

								{/* Replaced pink-purple gradient with solid UI */}
								<div className="bg-gray-50 rounded-xl p-4 mb-6">
									<div className="space-y-2 text-sm text-gray-700">
										<div className="flex items-center">
											<Truck className="w-4 h-4 mr-2" />
											<span>Free shipping on orders above ₹3,000</span>
										</div>
										<div className="flex items-center">
											<Shield className="w-4 h-4 mr-2" />
											<span>100% Authentic products</span>
										</div>
										<div className="flex items-center">
											<Heart className="w-4 h-4 mr-2" />
											<span>30-day return policy</span>
										</div>
									</div>
								</div>

								<Button
									className="w-full text-white py-4 rounded-xl font-semibold text-lg transition-all shadow hover:shadow-lg mb-3"
									size="lg">
									<Link href="/checkout">Proceed to Checkout</Link>
								</Button>

								<Button
									variant="outline"
									className="w-full border text-black py-3 rounded-xl font-medium hover:bg-gray-100 transition"
									size="lg">
									<Link href="/products">Continue Shopping</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default page;
