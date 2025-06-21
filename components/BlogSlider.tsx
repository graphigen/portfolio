"use client"

import { ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCarousel } from "@/hooks/useCarousel"
import type { BlogPost } from "@/types"

interface BlogSliderProps {
  posts: BlogPost[]
}

export function BlogSlider({ posts }: BlogSliderProps) {
  const { currentIndex, next, prev, pause, play, canGoNext, canGoPrev, visibleItems } = useCarousel({
    itemCount: posts.length,
    visibleItems: 3,
    autoPlay: false,
  })

  return (
    <div className="relative" onMouseEnter={pause} onMouseLeave={play}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className={`flex-shrink-0 px-2 sm:px-3 lg:px-4 ${visibleItems === 1 ? "w-full" : "w-full sm:w-1/2 lg:w-1/3"}`}
            >
              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow h-full">
                <div className="aspect-[7/4] overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-3 sm:p-4 lg:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-xs text-gray-500 dark:text-white flex-wrap">
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="hidden sm:inline">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight text-sm sm:text-base">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-white text-xs sm:text-sm line-clamp-2 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 text-xs sm:text-sm"
                  >
                    Devamını Oku →
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {canGoPrev && (
        <Button
          variant="outline"
          size="sm"
          onClick={prev}
          className="absolute left-0 sm:left-2 lg:-left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 shadow-lg border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 z-10 w-8 h-8 sm:w-10 sm:h-10"
          aria-label="Önceki blog yazıları"
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 dark:text-white" />
        </Button>
      )}

      {canGoNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={next}
          className="absolute right-0 sm:right-2 lg:-right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 shadow-lg border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 z-10 w-8 h-8 sm:w-10 sm:h-10"
          aria-label="Sonraki blog yazıları"
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 dark:text-white" />
        </Button>
      )}
    </div>
  )
}
