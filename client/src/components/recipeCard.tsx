export default function RecipeCard() {
    return <div className="w-80 flex flex-col items-center bg-neutral-900 rounded-md overflow-hidden">
        <img src="https://picsum.photos/320/200" alt="" />
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold">Title</h2>
            <div className="flex gap-4 text-neutral-400 text-sm">
                <div>20m</div>
                <div>10p</div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia itaque repellendus enim velit eum, quod excepturi, asperiores accusamus, sunt quidem quisquam! Veritatis odio suscipit atque sint corporis autem officia sit?</p>
        </div>
        <button className="bg-blue-900 p-2 hover:bg-blue-600 cursor-pointer">View recipe</button>
    </div>
}