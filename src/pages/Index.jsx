import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <LatestNewsSection />
      <MarketDataSection />
      <OpinionSection />
    </div>
  );
};

const HeroSection = () => (
  <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
    <img src="/placeholder.svg" alt="Hero background" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Breaking Financial News
      </h1>
      <p className="text-xl text-white mb-6">
        Stay informed with the latest market trends and economic insights.
      </p>
      <Button size="lg">Subscribe Now</Button>
    </div>
  </div>
);

const LatestNewsSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Latest News</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i}>
          <img src="/placeholder.svg" alt={`News ${i}`} className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>Breaking News Headline {i}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A brief description of the news article goes here. This provides context for the headline.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const MarketDataSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Market Data</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['FTSE 100', 'S&P 500', 'Nasdaq', 'Nikkei 225'].map((index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{index}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {Math.floor(Math.random() * 30000)}
            </p>
            <p className={`text-sm ${Math.random() > 0.5 ? 'text-green-600' : 'text-red-600'}`}>
              {(Math.random() * 2 - 1).toFixed(2)}%
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const OpinionSection = () => (
  <section>
    <h2 className="text-3xl font-bold mb-6">Opinion</h2>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Opinion Article Title {i}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              A brief excerpt from the opinion article goes here. This provides a taste of the full piece.
            </p>
            <p className="text-sm font-medium">By Author Name</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Index;