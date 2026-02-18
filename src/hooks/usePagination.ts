import { useState, useMemo } from "react"

interface UsePaginationProps<T> {
  data: T[]
  pageSize: number
}

export function usePagination<T>({ data, pageSize }: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  )

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return data.slice(startIndex, startIndex + pageSize)
  }, [data, currentPage, pageSize])

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages))
  }

  return {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
  }
}
