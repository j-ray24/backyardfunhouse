import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} - ${formatPrice(max)}`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateCalendlyUrl(
  baseUrl: string,
  prefillData?: {
    name?: string
    email?: string
    service?: string
    city?: string
    budget?: string
    config?: string
  }
): string {
  if (!prefillData) return baseUrl

  const params = new URLSearchParams()
  
  if (prefillData.name) params.set('name', prefillData.name)
  if (prefillData.email) params.set('email', prefillData.email)
  if (prefillData.service) params.set('a1', prefillData.service)
  if (prefillData.city) params.set('a2', prefillData.city)
  if (prefillData.budget) params.set('a3', prefillData.budget)
  if (prefillData.config) params.set('a4', prefillData.config)

  return `${baseUrl}?${params.toString()}`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
