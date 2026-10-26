"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../utils/supabase/client";

type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image_url: string | null;
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setProducts((data ?? []) as Product[]);
      }

      setLoading(false);
    }

    loadProducts();
  }, []);

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#181715]">
      <header className="border-b border-[#d1b783]/40 px-6 py-5">
        <Link href="/" className="text-sm text-[#8d7040]">
          ← Back to Home
        </Link>

        <h1 className="mt-4 text-3xl font-light tracking-[0.2em]">
          HARUVIANA
        </h1>

        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#8d7040]">
          The Collection
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <h2 className="mb-2 text-2xl font-light">Shop All Products</h2>
        <p className="mb-8 text-sm text-gray-600">
          Handcrafted with love, made to feel special.
        </p>

        {loading && <p>Loading products...</p>}

        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="py-12 text-center text-gray-600">
            Our collection is coming soon. Stay tuned!
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden border border-[#d1b783]/30 bg-white"
            >
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />
              ) : (
                <div className="flex h-72 items-center justify-center bg-[#f5f0e7] text-sm text-gray-500">
                  Product image coming soon
                </div>
              )}

              <div className="p-4">
                <p className="text-xs uppercase tracking-widest text-[#9a7b45]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg">{product.name}</h3>

                {product.description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                )}

                <p className="mt-4 font-medium">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}