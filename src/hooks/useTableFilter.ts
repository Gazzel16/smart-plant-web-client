import { useState, useMemo } from "react"

export function useTableFilter<T extends Record<string, any>>(
  data: T[],
  initialFilters: Partial<Record<keyof T, string>>
) {
  const [filters, setFilters] = useState(initialFilters)

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true

        const fieldValue = String(item[key as keyof T]).toLowerCase()
        return fieldValue.includes(value.toLowerCase())
      })
    )
  }, [data, filters])

  const updateFilter = (key: keyof T, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return {
    filters,
    filteredData,
    updateFilter,
  }
}
