import RecipeCard from "./recipeCard";

export default function RecipeList() {
    return <div className="flex flex-wrap gap-4">
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
    </div>
}