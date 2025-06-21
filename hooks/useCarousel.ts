"use client"

import { useState, useEffect, useCallback } from "react"

interface UseCarouselProps {
  itemCount: number
  visibleItems: number
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function useCarousel({ itemCount, visibleItems, autoPlay = false, autoPlayInterval = 4000 }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [actualVisibleItems, setActualVisibleItems] = useState(visibleItems)

  // Responsive visible items
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setActualVisibleItems(window.innerWidth < 768 ? 1 : visibleItems)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [visibleItems])

  const maxIndex = Math.max(0, itemCount - actualVisibleItems)

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  const canGoNext = currentIndex < maxIndex
  const canGoPrev = currentIndex > 0

  // Reset index when visible items change
  useEffect(() => {
    setCurrentIndex(0)
  }, [actualVisibleItems])

  useEffect(() => {
    if (!isPlaying || !canGoNext) return

    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        next()
      } else {
        setIsPlaying(false)
      }
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPlaying, next, autoPlayInterval, currentIndex, maxIndex, canGoNext])

  const pause = () => setIsPlaying(false)
  const play = () => setIsPlaying(true)

  return {
    currentIndex,
    next,
    prev,
    pause,
    play,
    isPlaying,
    canGoNext,
    canGoPrev,
    visibleItems: actualVisibleItems,
  }
}
