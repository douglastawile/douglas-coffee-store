import { getCoffeeById, coffees } from "@/data/coffees";
import { CoffeeDetailClient } from "@/components/coffee/CoffeeDetailClient";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return coffees.map((coffee) => ({
    id: coffee.id,
  }));
}

export default async function CoffeeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const coffee = getCoffeeById(id);

  if (!coffee) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold mb-4">
              Coffee not found
            </h1>
            <Link href="/coffees">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg">
                Back to Shop
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        <CoffeeDetailClient coffee={coffee} />
      </main>
      <Footer />
    </div>
  );
}
