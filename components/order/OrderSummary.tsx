"use client";

import { useStore } from "@/src/store";
import ProductItems from "./ProductItems";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";

export default function OrderSummary() {
	const order = useStore((state) => state.order);

	const total = useMemo(
		() => order.reduce((total, item) => total + item.quantity * item.price, 0),
		[order]
	);

	return (
		<>
			<aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5 ">
				<h1 className="text-4xl text-center font-black">Mi Pedido</h1>

				{order.length === 0 ? (
					<p className="text-center my-10">El carrito esta vacio</p>
				) : (
					<div className="mt-5">
						{order.map((item) => (
							<ProductItems key={item.id} item={item} />
						))}

						<p className="text-2xl text-center mt-20">
							Total a pagar: {""}
							<span className="font-bold">{formatCurrency(total)}</span>
						</p>
					</div>
				)}
			</aside>
		</>
	);
}
