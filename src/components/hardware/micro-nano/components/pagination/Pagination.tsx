"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaginationControlsProps {
  // The current active page number (1-based index).
  currentPage: number;
  // The total number of pages available.
  totalPages: number;
  // Callback function to handle page changes when a new page is selected.
  onPageChange: (page: number) => void;
  // Callback function to navigate to the next page.
  onNextPage: () => void;
  // Callback function to navigate to the previous page.
  onPrevPage: () => void;
  // Optional label for the previous page button (default: "Prev").
  prevLabel?: string;
  // Optional label for the next page button (default: "Next").
  nextLabel?: string;
  // Optional flag to hide pagination controls if there is only one page (default: false).
  hideIfSinglePage?: boolean;
  // Optional additional CSS classes for the pagination container.
  className?: string;
  // Optional additional CSS classes for the select dropdown.
  selectClassName?: string;
}

/**
 * Pagination
 * A reusable pagination control component with Previous and Next buttons
 * and a selectable page dropdown. Allows users to navigate between pages
 * efficiently and supports full customization of labels, visibility,
 * and styling.
 *
 * Example:
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={(page) => setPage(page)}
 *   onNextPage={() => setPage((prev) => prev + 1)}
 *   onPrevPage={() => setPage((prev) => prev - 1)}
 * />
 */

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPrevPage,
  prevLabel = "Prev",
  nextLabel = "Next",
  hideIfSinglePage = false,
  className = "flex items-center justify-end gap-4 mt-2",
  selectClassName = "w-44",
}: PaginationControlsProps) {
  if (hideIfSinglePage && totalPages <= 1) {
    return null;
  }

  return (
    <div className={className}>
      <Button onClick={onPrevPage} disabled={currentPage === 1}>
        {prevLabel}
      </Button>

      <Select
        value={currentPage.toString()}
        onValueChange={(value) => onPageChange(Number(value))}
      >
        <SelectTrigger className={selectClassName}>
          <SelectValue placeholder={`Page ${currentPage} of ${totalPages}`} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <SelectItem key={page} value={page.toString()}>
              Page {page} of {totalPages}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button onClick={onNextPage} disabled={currentPage === totalPages}>
        {nextLabel}
      </Button>
    </div>
  );
}

