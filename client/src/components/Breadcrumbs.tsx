import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 py-4 text-xs font-sans text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-none">
      <Link href="/">
        <span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.item} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 opacity-50 shrink-0" />
            {isLast ? (
              <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                {item.name}
              </span>
            ) : (
              <Link href={item.item}>
                <span className="hover:text-primary transition-colors cursor-pointer truncate max-w-[150px] sm:max-w-none">
                  {item.name}
                </span>
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
