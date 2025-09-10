import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Upload, 
  Settings, 
  FileCheck, 
  Eye, 
  Rocket,
  ChevronRight
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Developer Account",
    description: "Sign up for Google Play Console and pay the $25 registration fee.",
    duration: "5-10 minutes",
    details: [
      "Visit Google Play Console",
      "Sign in with Google account",
      "Pay one-time $25 fee",
      "Verify your identity"
    ]
  },
  {
    icon: Upload,
    title: "Upload Your APK/AAB",
    description: "Upload your app bundle or APK file to the Play Console.",
    duration: "10-15 minutes",
    details: [
      "Generate signed APK/AAB",
      "Navigate to App releases",
      "Upload your app file",
      "Configure release details"
    ]
  },
  {
    icon: Settings,
    title: "Configure App Details",
    description: "Set up your app's store listing, pricing, and distribution.",
    duration: "30-45 minutes",
    details: [
      "Add app title and description",
      "Upload screenshots and graphics",
      "Set pricing and availability",
      "Configure app categories"
    ]
  },
  {
    icon: FileCheck,
    title: "Content Rating & Policies",
    description: "Complete content rating questionnaire and policy compliance.",
    duration: "15-20 minutes",
    details: [
      "Fill content rating form",
      "Add privacy policy URL",
      "Review Google Play policies",
      "Confirm compliance"
    ]
  },
  {
    icon: Eye,
    title: "Review & Test",
    description: "Review all information and test your app listing preview.",
    duration: "10-15 minutes",
    details: [
      "Preview store listing",
      "Test download links",
      "Verify all information",
      "Check for policy violations"
    ]
  },
  {
    icon: Rocket,
    title: "Publish App",
    description: "Submit your app for review and publishing to Google Play Store.",
    duration: "1-3 days review",
    details: [
      "Submit for review",
      "Wait for Google approval",
      "Monitor review status",
      "App goes live after approval"
    ]
  }
];

const TimelineSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Step-by-Step Publishing Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to successfully publish your Android app to Google Play Store.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6 pb-8">
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
                  )}
                  
                  {/* Step number and icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-elevation-1">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-secondary-foreground">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 min-w-0">
                    <Card className="bg-card border-0 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-muted-foreground">
                              {step.description}
                            </p>
                            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                              {step.duration}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="ml-4">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="mt-4 pl-4 border-l-2 border-border">
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;