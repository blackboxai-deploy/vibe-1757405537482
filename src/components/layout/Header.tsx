"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="mr-2 px-2 md:hidden"
          onClick={onMenuToggle}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="sr-only">فتح القائمة</span>
        </Button>

        {/* Logo */}
        <div className="mr-6 flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg
              className="h-5 w-5 text-primary-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
              <path d="M8 17l2-6 3 3 3-5v8H8z"/>
            </svg>
          </div>
          <div className="hidden font-bold sm:inline-block">
            <span className="text-primary">مراقب الأسواق</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="relative w-full max-w-sm">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <Input
              type="search"
              placeholder="ابحث عن الأسهم أو العملات المشفرة..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2">
                {theme === 'dark' ? (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L13.09 8.26L20 9L14 14.74L15.18 21.02L10 17.77L4.82 21.02L6 14.74L0 9L6.91 8.26L10 2Z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-4 0 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                )}
                <span className="sr-only">تبديل المظهر</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                فاتح
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                مظلم
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                النظام
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="px-2">
            <div className="relative">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-3.405-3.405c-.377-.377-.59-.884-.59-1.414V9a6 6 0 10-12 0v3.181c0 .53-.213 1.037-.59 1.414L0 17h5m10 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></div>
            </div>
            <span className="sr-only">التنبيهات</span>
          </Button>

          {/* Portfolio Value */}
          <div className="hidden md:block text-sm">
            <div className="text-muted-foreground">المحفظة</div>
            <div className="font-semibold text-green-600">$125,432.50</div>
          </div>
        </div>
      </div>
    </header>
  );
}