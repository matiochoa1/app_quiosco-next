import Image from "next/image";
import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<>
			<div className="border bg-white relative">
				<Image
					alt={`Imagen de ${product.name}`}
					src={`/products/${product.image}.jpg`}
					width={400}
					height={500}
				/>

				<div className="p-5">
					<h3 className="text-xl font-bold text-center border-b border-indigo-100">
						{product.name}
					</h3>

					<p className="m-5 font-black text-4xl text-amber-500 text-center">
						{formatCurrency(product.price)}
					</p>

					<AddProductButton product={product} />
				</div>
			</div>
		</>
	);
}
