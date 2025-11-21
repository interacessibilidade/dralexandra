
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const routeMap: Record<string, BreadcrumbItem[]> = {
  "/": [{ label: "Início" }],
  "/sobre": [
    { label: "Início", href: "/" },
    { label: "Sobre" }
  ],
  "/servicos": [
    { label: "Início", href: "/" },
    { label: "Serviços" }
  ],
  "/mentoria": [
    { label: "Início", href: "/" },
    { label: "Mentoria" }
  ],
  "/contato": [
    { label: "Início", href: "/" },
    { label: "Contato" }
  ],
};

export const SiteBreadcrumb = () => {
  const location = useLocation();
  const breadcrumbItems = routeMap[location.pathname] || [{ label: "Início", href: "/" }];

  // Don't show breadcrumb on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={index}>
                {index === breadcrumbItems.length - 1 ? (
                  <BreadcrumbPage className="text-primary font-medium">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink asChild>
                      <Link 
                        to={item.href!} 
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
};
