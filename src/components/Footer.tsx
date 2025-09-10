import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  Youtube, 
  Mail, 
  ArrowUp,
  Heart
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Android Publishing Guide</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Your complete resource for successfully publishing Android apps to Google Play Store.
            </p>
            <div className="flex space-x-3 mt-6">
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-background hover:bg-white/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-background hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-background hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-background hover:bg-white/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#prerequisites" className="text-background/80 hover:text-background transition-smooth">Prerequisites</a></li>
              <li><a href="#timeline" className="text-background/80 hover:text-background transition-smooth">Publishing Steps</a></li>
              <li><a href="#best-practices" className="text-background/80 hover:text-background transition-smooth">Best Practices</a></li>
              <li><a href="#resources" className="text-background/80 hover:text-background transition-smooth">Resources</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Google Play Console</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Android Studio</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Developer Docs</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Community</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">FAQ</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-smooth">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-sm text-background/80">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>for the Android developer community</span>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-background/80">
              © 2024 Android Publishing Guide. All rights reserved.
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-background/80 hover:text-background hover:bg-white/10"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;