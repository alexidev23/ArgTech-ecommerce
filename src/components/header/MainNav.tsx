"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubCategory {
  id: string
  name: string
  href: string
  subcategories?: SubCategory[]
}

interface Category {
  id: string
  name: string
  href: string
  subcategories?: SubCategory[]
}

// Datos de ejemplo - reemplaza con tus datos reales
const categories: Category[] = [
  {
    id: "1",
    name: "Componentes de PC",
    href: "/categoria/componentes-pc",
    subcategories: [
      { id: "1-1", name: "Discos Duros Mecánicos", href: "/categoria/discos-duros" },
      { id: "1-2", name: "Discos Sólidos SSD", href: "/categoria/ssd" },
      {
        id: "1-3",
        name: "Memorias Ram",
        href: "/categoria/memorias-ram",
        subcategories: [
          { id: "1-3-1", name: "Desktop", href: "/categoria/ram-desktop" },
          { id: "1-3-2", name: "Notebook", href: "/categoria/ram-notebook" },
        ],
      },
      { id: "1-4", name: "Microprocesadores", href: "/categoria/procesadores" },
      {
        id: "1-5",
        name: "Motherboards",
        href: "/categoria/motherboards",
        subcategories: [
          { id: "1-5-1", name: "Intel", href: "/categoria/motherboards-intel" },
          { id: "1-5-2", name: "AMD", href: "/categoria/motherboards-amd" },
        ],
      },
      { id: "1-6", name: "Placas de Video", href: "/categoria/placas-video" },
      { id: "1-7", name: "Gabinetes", href: "/categoria/gabinetes" },
      { id: "1-8", name: "Placas de Sonido", href: "/categoria/placas-sonido" },
      { id: "1-9", name: "Fuentes", href: "/categoria/fuentes" },
      { id: "1-10", name: "Pastas Térmicas", href: "/categoria/pastas-termicas" },
      { id: "1-11", name: "Placas de Red", href: "/categoria/placas-red" },
    ],
  },
  {
    id: "2",
    name: "PC de Escritorio",
    href: "/categoria/pc-escritorio",
    subcategories: [
      { id: "2-1", name: "Gaming", href: "/categoria/pc-gaming" },
      { id: "2-2", name: "Oficina", href: "/categoria/pc-oficina" },
      { id: "2-3", name: "Workstation", href: "/categoria/pc-workstation" },
    ],
  },
  {
    id: "3",
    name: "Notebooks",
    href: "/categoria/notebooks",
    subcategories: [
      { id: "3-1", name: "Gaming", href: "/categoria/notebooks-gaming" },
      { id: "3-2", name: "Ultrabooks", href: "/categoria/ultrabooks" },
      { id: "3-3", name: "Convertibles", href: "/categoria/convertibles" },
      { id: "3-4", name: "Chromebooks", href: "/categoria/chromebooks" },
    ],
  },
  {
    id: "4",
    name: "Monitores",
    href: "/categoria/monitores",
    subcategories: [
      { id: "4-1", name: "Gaming", href: "/categoria/monitores-gaming" },
      { id: "4-2", name: "Profesionales", href: "/categoria/monitores-profesionales" },
      { id: "4-3", name: "4K/UHD", href: "/categoria/monitores-4k" },
      { id: "4-4", name: "Ultrawide", href: "/categoria/monitores-ultrawide" },
    ],
  },
  {
    id: "5",
    name: "Periféricos",
    href: "/categoria/perifericos",
    subcategories: [
      { id: "5-1", name: "Teclados", href: "/categoria/teclados" },
      { id: "5-2", name: "Mouse", href: "/categoria/mouse" },
      { id: "5-3", name: "Auriculares", href: "/categoria/auriculares" },
      { id: "5-4", name: "Webcams", href: "/categoria/webcams" },
      { id: "5-5", name: "Parlantes", href: "/categoria/parlantes" },
    ],
  },
  {
    id: "6",
    name: "Conectividad y Redes",
    href: "/categoria/conectividad",
    subcategories: [
      { id: "6-1", name: "Routers", href: "/categoria/routers" },
      { id: "6-2", name: "Switches", href: "/categoria/switches" },
      { id: "6-3", name: "Access Points", href: "/categoria/access-points" },
      { id: "6-4", name: "Cables", href: "/categoria/cables" },
    ],
  },
  {
    id: "7",
    name: "Impresión y Scanners",
    href: "/categoria/impresion",
    subcategories: [
      { id: "7-1", name: "Impresoras Láser", href: "/categoria/impresoras-laser" },
      { id: "7-2", name: "Impresoras Tinta", href: "/categoria/impresoras-tinta" },
      { id: "7-3", name: "Multifuncionales", href: "/categoria/multifuncionales" },
      { id: "7-4", name: "Scanners", href: "/categoria/scanners" },
    ],
  },
  {
    id: "8",
    name: "Almacenamiento Portátil",
    href: "/categoria/almacenamiento",
    subcategories: [
      { id: "8-1", name: "Pendrives", href: "/categoria/pendrives" },
      { id: "8-2", name: "Discos Externos", href: "/categoria/discos-externos" },
      { id: "8-3", name: "Tarjetas de Memoria", href: "/categoria/tarjetas-memoria" },
    ],
  },
]

interface SubCategoryListProps {
  subcategories: SubCategory[]
  level?: number
}

function SubCategoryList({ subcategories, level = 0 }: SubCategoryListProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <ul className={cn("space-y-1", level > 0 && "ml-4 mt-2")}>
      {subcategories.map((subcategory) => (
        <li key={subcategory.id}>
          <div className="flex items-center">
            <Link
              href={subcategory.href}
              className={cn(
                "text-sm hover:text-blue-600 transition-colors flex-1",
                level === 0 ? "text-gray-700" : "text-gray-600",
              )}
            >
              {subcategory.name}
            </Link>
            {subcategory.subcategories && subcategory.subcategories.length > 0 && (
              <button onClick={() => toggleExpanded(subcategory.id)} className="ml-2 p-1 hover:bg-gray-100 rounded">
                <ChevronRight
                  className={cn(
                    "w-3 h-3 text-gray-400 transition-transform",
                    expandedItems.has(subcategory.id) && "rotate-90",
                  )}
                />
              </button>
            )}
          </div>
          {subcategory.subcategories && subcategory.subcategories.length > 0 && expandedItems.has(subcategory.id) && (
            <SubCategoryList subcategories={subcategory.subcategories} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  )
}

export function MainNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          {/* Botón de Categorías con dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 text-lg font-semibold text-white py-1 rounded transition-colors"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span>Productos</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Mega menú dropdown */}
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-xl rounded-lg z-50 w-[800px] max-h-[600px] overflow-y-auto"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="px-2.5 py-1.5">
                  <div className="grid grid-cols-3 gap-2">
                    {categories.map((category) => (
                      <div key={category.id} className="space-y-1.5">
                        <Link
                          href={category.href}
                          className="block text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-200 pb-2"
                        >
                          {category.name}
                        </Link>
                        {category.subcategories && category.subcategories.length > 0 && (
                          <SubCategoryList subcategories={category.subcategories} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Versión móvil */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <span>CATEGORÍAS</span>
            <ChevronDown className={cn("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180")} />
          </button>

          {isDropdownOpen && (
            <div className="pl-4 space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="space-y-2">
                  <Link
                    href={category.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {category.name}
                  </Link>
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="pl-4">
                      <SubCategoryList subcategories={category.subcategories} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
