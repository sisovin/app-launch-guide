import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Smartphone, 
  Code, 
  CreditCard, 
  FileText, 
  Shield,
  Users,
  Image as ImageIcon
} from "lucide-react";

const prerequisites = [
  {
    icon: Code,
    title: "Completed Android App",
    description: "Your app should be fully developed, tested, and ready for release.",
    status: "required"
  },
  {
    icon: Smartphone,
    title: "Android Device Testing",
    description: "Test your app on multiple Android devices and API levels.",
    status: "required"
  },
  {
    icon: CreditCard,
    title: "Developer Account",
    description: "Google Play Console developer account ($25 one-time registration fee).",
    status: "required"
  },
  {
    icon: FileText,
    title: "App Store Listing",
    description: "Prepare app description, screenshots, and promotional materials.",
    status: "required"
  },
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "Required if your app handles personal or sensitive user data.",
    status: "conditional"
  },
  {
    icon: Users,
    title: "Target Audience",
    description: "Define your target audience and content rating requirements.",
    status: "recommended"
  },
  {
    icon: ImageIcon,
    title: "Visual Assets",
    description: "App icon, feature graphic, screenshots in required dimensions.",
    status: "required"
  },
  {
    icon: CheckCircle,
    title: "Testing & QA",
    description: "Thorough testing including edge cases and different screen sizes.",
    status: "recommended"
  }
];

const PrerequisitesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Prerequisites Checklist
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Make sure you have everything ready before starting the publishing process.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {prerequisites.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="group hover:shadow-elevation-2 transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-smooth group-hover:scale-110 ${
                      item.status === 'required' 
                        ? 'bg-primary/10 text-primary' 
                        : item.status === 'conditional'
                        ? 'bg-secondary/10 text-secondary'
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === 'required' 
                            ? 'bg-primary/10 text-primary' 
                            : item.status === 'conditional'
                            ? 'bg-secondary/10 text-secondary'
                            : 'bg-accent text-accent-foreground'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrerequisitesSection;