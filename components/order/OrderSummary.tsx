"use client";

import { useStore } from "@/src/store";
import ProductItems from "./ProductItems";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";

export default function OrderSummary() {
	const order = useStore((state) => state.order);

	const total = useMemo(
		() => order.reduce((total, item) => total + item.quantity * item.price, 0),
		[order]
	);

	const handleCreateOrder = (formData: FormData) => {
		const data = {
			name: formData.get("name"),
		};

		const result = OrderSchema.safeParse(data);

		console.log(result);
		return;

		createOrder();
	};

	return (
		<>
			<aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5 ">
				<h1 className="text-4xl text-center font-black">Mi Pedido</h1>

				{order.length === 0 ? (
					<p className="text-center my-10">El pedido esta vacio</p>
				) : (
					<div className="mt-5">
						{order.map((item) => (
							<ProductItems key={item.id} item={item} />
						))}

						<p className="text-2xl text-center mt-20">
							Total a pagar: {""}
							<span className="font-bold">{formatCurrency(total)}</span>
						</p>

						<form className="space-y-5 mt-10 w-full" action={handleCreateOrder}>
							<input
								type="text"
								className="bg-white border border-gray-100 p-2 w-full"
								placeholder="Tu Nombre"
								name="name"
							/>

							<input
								type="submit"
								className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold hover:bg-gray-900"
								value="Confirmar pedido"
							/>
						</form>
					</div>
				)}
			</aside>
		</>
	);
}
