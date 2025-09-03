import { Star } from "lucide-react"

interface StarRatingProps {
    label?: string,
    count: number
}

export const StarRating = ({ label, count }: StarRatingProps) => {
    return (
        <div className="flex items-center space-x-2 mb-8">
            <div className="flex items-center space-x-1">
                {[...Array(count)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            {label && <span className="text-sm text-gray-600">{label}</span>}
        </div>
    )
}