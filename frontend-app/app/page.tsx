'use client';

import { useListContext } from "@/provider/CartProvider";
import { 
  ScrollableContainer, 
  ProductCard,
} from "@/components";
import { menuListType } from "@/types";

export default function Home() {
  const elements: menuListType[] = useListContext().values[0];

  return (
    <main
    id="main-page"
    className="page h-[70vh]"
    >
      <ScrollableContainer
      id="product-container-menu"
      className="scrollable-container flex flex-wrap gap-4 justify-center-safe"
      >
        {
          elements.map(
            (
              element: menuListType,
              idx: number,
            )=><ProductCard key={idx} id="product" className="product" title={element.name} stock={element.stock}/>
          )
        }
      </ScrollableContainer>
    </main>
  );
}
