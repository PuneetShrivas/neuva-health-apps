import { Button } from "@/core/components/ui/button";
import { Card, CardContent, CardFooter } from "@/core/components/ui/card";
import { categories } from "@/lib/categories";

interface HomeSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HomeSlugPage({ params }: HomeSlugPageProps) {
  const { slug } = await params;

  const category = categories.find((cat) => cat.slug === slug);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col items-center p-10 md:p-20 gap-10 md:gap-20 max-w-screen-lg w-full mx-auto">
        <div className="flex flex-col items-center text-center w-full gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-medium w-full md:w-1/2 tracking-tight">
            {category?.heroSubTitle}
          </h1>
          <p className="text-sm md:text-base font-medium text-muted-foreground">
            {category?.heroDescription}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {category?.products.map((product, index) => (
            <Card
              key={index}
              className="p-0 gap-0 overflow-hidden w-40 md:w-60 lg:w-72 aspect-[3/4] bg-transparent"
            >
              <CardContent className="p-4 md:p-6 pb-0 flex flex-col h-full relative z-0">
                <div className="flex flex-col justify-between">
                  <h1 className="text-base md:text-xl">{product.title}</h1>
                  <h2 className="text-xs font-extralight">
                    Starting from {product.price}
                  </h2>
                </div>
                <div
                  className="h-full bg-contain bg-bottom bg-no-repeat"
                  style={{
                    backgroundImage: `url(${product.imageUrl})`,
                  }}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-stretch p-4 md:p-6">
                <Button>Buy now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col p-10 md:p-20 gap-10 md:gap-20 max-w-screen-lg w-full px-4 md:px-10 mx-auto">
        <div className="flex flex-col items-center text-center w-full gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-bold w-full md:w-1/2 tracking-tight">
            How does this medication work?
          </h1>
          <p className="text-sm md:text-base font-light text-muted-foreground">
            Daily treatments to help manage symptoms and improve wellbeing.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col h-48 md:h-96 bg-[#DEE3EC] rounded-xl" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <Button>Buy now</Button>
            <Button variant="outline">Is this right for me?</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
