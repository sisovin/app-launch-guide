import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Book, 
  Video, 
  FileText, 
  Code, 
  Users,
  HelpCircle,
  Download
} from "lucide-react";

const resources = [
  {
    category: "Official Documentation",
    icon: Book,
    color: "primary",
    items: [
      {
        title: "Google Play Console Help",
        description: "Official guide for using Google Play Console",
        url: "https://support.google.com/googleplay/android-developer",
        type: "documentation"
      },
      {
        title: "Android Developer Docs",
        description: "Complete Android development documentation",
        url: "https://developer.android.com/docs",
        type: "documentation"
      },
      {
        title: "Play Policy Center",
        description: "Google Play Store policies and guidelines",
        url: "https://play.google.com/about/developer-content-policy/",
        type: "policy"
      }
    ]
  },
  {
    category: "Tools & Resources",
    icon: Code,
    color: "secondary",
    items: [
      {
        title: "Android Studio",
        description: "Official IDE for Android development",
        url: "https://developer.android.com/studio",
        type: "tool"
      },
      {
        title: "App Bundle Tool",
        description: "Command-line tool for Android App Bundles",
        url: "https://developer.android.com/studio/command-line/bundletool",
        type: "tool"
      },
      {
        title: "Material Design",
        description: "Design system for Android apps",
        url: "https://material.io/design",
        type: "design"
      }
    ]
  },
  {
    category: "Learning Resources",
    icon: Video,
    color: "accent",
    items: [
      {
        title: "Android Developers YouTube",
        description: "Official Android development tutorials",
        url: "https://www.youtube.com/c/AndroidDevelopers",
        type: "video"
      },
      {
        title: "Google Play Academy",
        description: "Free courses on app success",
        url: "https://playacademy.exceedlms.com/",
        type: "course"
      },
      {
        title: "Udacity Android Course",
        description: "Comprehensive Android development course",
        url: "https://www.udacity.com/course/android-developer-nanodegree--nd801",
        type: "course"
      }
    ]
  },
  {
    category: "Community & Support",
    icon: Users,
    color: "destructive",
    items: [
      {
        title: "Android Developers Community",
        description: "Connect with other Android developers",
        url: "https://developer.android.com/community",
        type: "community"
      },
      {
        title: "Stack Overflow",
        description: "Get help with development questions",
        url: "https://stackoverflow.com/questions/tagged/android",
        type: "community"
      },
      {
        title: "Reddit r/AndroidDev",
        description: "Android development community on Reddit",
        url: "https://www.reddit.com/r/androiddev/",
        type: "community"
      }
    ]
  }
];

const typeIcons = {
  documentation: FileText,
  policy: HelpCircle,
  tool: Download,
  design: Users,
  video: Video,
  course: Book,
  community: Users
};

const ResourcesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Additional Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Helpful links, tools, and resources to support your Android app development journey.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {resources.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <Card key={categoryIndex} className="bg-card border-0 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      category.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : category.color === 'secondary'
                        ? 'bg-secondary/10 text-secondary'
                        : category.color === 'destructive'
                        ? 'bg-destructive/10 text-destructive'
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      <CategoryIcon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const TypeIcon = typeIcons[item.type as keyof typeof typeIcons];
                      return (
                        <div key={itemIndex} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth group">
                          <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-smooth">
                            <TypeIcon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                              {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm" className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-smooth">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick links */}
        <div className="mt-12">
          <Card className="bg-gradient-hero border-0 shadow-elevation-2">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Quick Reference Links
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-smooth">
                  <FileText className="mr-2 h-4 w-4" />
                  Checklist PDF
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-smooth">
                  <Video className="mr-2 h-4 w-4" />
                  Video Tutorial
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-smooth">
                  <Code className="mr-2 h-4 w-4" />
                  Code Samples
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;