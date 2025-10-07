export default async function Review({params}: {params:Promise<{productId: string}>}) {
    const {productId} = await params;
    return <h1>Review Page of product {productId}</h1>
}