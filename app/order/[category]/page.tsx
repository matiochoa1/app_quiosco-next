export default function OrderPage({
	params,
}: {
	params: { category: string };
}) {
	console.log(params.category);
	return (
		<>
			<h1>Order Page</h1>
		</>
	);
}
