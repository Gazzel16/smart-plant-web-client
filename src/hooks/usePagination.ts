import { useMemo, useState } from "react"

interface UsePaginationProps<T> {
  data: T[]
  pageSize: number
  initialPage?: number
}


/**
 *  A custom React hook for managing pagination of data.
 * 
 * @param page - The page number to clamp (1-based index).
 * @param totalPages - The total number of pages available.
 * @returns The clamped page number.
 */
function clampPage(page: number, totalPages: number) {
  return Math.min(Math.max(page, 1), totalPages)
}

export function usePagination<T>({
  data,
  pageSize,
  initialPage = 1,
}: UsePaginationProps<T>) {
  const safePageSize = Math.max(1, pageSize)

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(data.length / safePageSize)),
    [data.length, safePageSize]
  )

  const [currentPage, setCurrentPage] = useState(() =>
    clampPage(initialPage, totalPages)
  )
  const clampedCurrentPage = clampPage(currentPage, totalPages)

  const paginatedData = useMemo(() => {
    const startIndex = (clampedCurrentPage - 1) * safePageSize
    return data.slice(startIndex, startIndex + safePageSize)
  }, [data, clampedCurrentPage, safePageSize])

  const nextPage = () => {
    setCurrentPage((prev) => clampPage(prev + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage((prev) => clampPage(prev - 1, totalPages))
  }

  const goToPage = (page: number) => {
    setCurrentPage(clampPage(page, totalPages))
  }

  return {
    currentPage: clampedCurrentPage,
    totalPages,
    paginatedData,
    pageSize: safePageSize,
    totalItems: data.length,
    canNextPage: currentPage < totalPages,
    canPrevPage: currentPage > 1,
    nextPage,
    prevPage,
    goToPage,
  }
}
