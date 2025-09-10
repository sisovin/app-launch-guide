import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightbulb, 
  Star, 
  Search, 
  TrendingUp, 
  Shield, 
  Users,
  MessageSquare,
  BarChart3
} from "lucide-react";

const tips = [
  {
    icon: Star,
    title: "Optimize Your App Listing",
    description: "Use relevant keywords in your title and description to improve discoverability.",
    tips: [
      "Research competitor keywords",
      "Include main features in description",
      "Use compelling app title",
      "Add relevant tags and categories"
    ],
    color: "primary"
  },
  {
    icon: Search,
    title: "ASO (App Store Optimization)",
    description: "Implement best practices to rank higher in Google Play Store search results.",
    tips: [
      "Use keyword-rich descriptions",
      "Get positive reviews and ratings",
      "Regular app updates",
      "Localize for multiple languages"
    ],
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Monitor Performance",
    description: "Track your app's performance and user engagement metrics regularly.",
    tips: [
      "Use Google Play Console analytics",
      "Monitor crash reports",
      "Track user retention",
      "Analyze download conversion rates"
    ],
    color: "accent"
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Ensure your app complies with security standards and privacy regulations.",
    tips: [
      "Implement proper data encryption",
      "Follow GDPR compliance",
      "Regular security audits",
      "Clear privacy policy"
    ],
    color: "destructive"
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Focus on creating an intuitive and engaging user experience.",
    tips: [
      "Smooth onboarding process",
      "Responsive design for all screens",
      "Fast loading times",
      "Clear navigation structure"
    ],
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: "User Feedback",
    description: "Actively engage with user reviews and feedback to improve your app.",
    tips: [
      "Respond to user reviews",
      "Address common complaints",
      "Implement user suggestions",
      "Maintain active communication"
    ],
    color: "secondary"
  }
];

const BestPracticesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6">
            <Lightbulb className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Best Practices & Tips
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert tips to maximize your app's success on Google Play Store.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={index} className="group hover:shadow-elevation-2 transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-smooth group-hover:scale-110 ${
                    tip.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : tip.color === 'secondary'
                      ? 'bg-secondary/10 text-secondary'
                      : tip.color === 'destructive'
                      ? 'bg-destructive/10 text-destructive'
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  <ul className="space-y-2">
                    {tip.tips.map((item, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          tip.color === 'primary' 
                            ? 'bg-primary' 
                            : tip.color === 'secondary'
                            ? 'bg-secondary'
                            : tip.color === 'destructive'
                            ? 'bg-destructive'
                            : 'bg-accent-foreground'
                        }`}></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call-to-action */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-gradient-hero border-0 shadow-elevation-2">
            <CardContent className="p-8">
              <BarChart3 className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Ready to Launch Your App?
              </h3>
              <p className="text-white/90 mb-4">
                Follow our comprehensive guide and best practices for a successful launch.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesSection;