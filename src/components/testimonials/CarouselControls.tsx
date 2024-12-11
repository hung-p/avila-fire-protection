import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
    onPrevious: () => void;
    onNext: () => void;
    currentIndex: number;
    total: number;
}

export function CarouselControls({
    onPrevious,
    onNext,
    currentIndex,
    total,
}: CarouselControlsProps) {
    return (
        <div className="flex items-center justify-center space-x-4 mt-12">
            <button
                onClick={onPrevious}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Previous testimonials"
            >
                <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
                {[...Array(total)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
            <button
                onClick={onNext}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Next testimonials"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}