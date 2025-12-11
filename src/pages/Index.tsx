import { Link } from "react-router-dom";
import { Heart, Shield, Activity, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Activity,
      title: "Quick Assessment",
      description: "Get instant risk analysis based on your health parameters in just minutes.",
    },
    {
      icon: Shield,
      title: "Accurate Predictions",
      description: "Our ML model is trained on thousands of medical records for reliable results.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Receive personalized recommendations based on your assessment results.",
    },
  ];

  const stats = [
    { value: "95%", label: "Accuracy Rate" },
    { value: "50K+", label: "Users Helped" },
    { value: "24/7", label: "Availability" },
    { value: "100%", label: "Data Privacy" },
  ];

  const riskFactors = [
    "High Blood Pressure",
    "High Cholesterol",
    "Diabetes",
    "Smoking",
    "Obesity",
    "Family History",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                AI-Powered Heart Health Analysis
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Predict Your{" "}
                <span className="gradient-text">Heart Disease</span>{" "}
                Risk Early
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Take control of your cardiovascular health with our advanced prediction system. 
                Early detection saves lives – get your risk assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/predict">
                  <Button size="lg" className="btn-gradient rounded-full px-8 w-full sm:w-auto">
                    Check Your Risk
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative animate-fade-in hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
                <div className="relative bg-card rounded-3xl shadow-2xl p-8 border border-border">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <Heart className="w-32 h-32 text-primary pulse-heart" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm text-muted-foreground">Heart Rate</span>
                      <span className="font-semibold text-primary">72 BPM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm text-muted-foreground">Blood Pressure</span>
                      <span className="font-semibold text-accent">120/80</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm text-muted-foreground">Risk Level</span>
                      <span className="font-semibold text-accent">Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">HeartCare</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced prediction system combines medical expertise with cutting-edge 
              machine learning to provide accurate heart disease risk assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-border bg-card">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Know Your <span className="gradient-text">Risk Factors</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Heart disease is influenced by various factors. Understanding these can help 
                you take preventive measures and maintain a healthy heart.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {riskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Health Check</h3>
              <p className="text-muted-foreground mb-6">
                Answer a few questions about your health and lifestyle to get an instant risk assessment.
              </p>
              <Link to="/predict">
                <Button className="btn-gradient w-full rounded-full">
                  Start Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNC0yIDQtMiA0LTItMi0yLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
            <div className="relative z-10">
              <Heart className="w-16 h-16 text-primary-foreground mx-auto mb-6 pulse-heart" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Take the First Step Today
              </h2>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                Early detection is key to preventing heart disease. Our prediction tool is free, 
                confidential, and takes only a few minutes to complete.
              </p>
              <Link to="/predict">
                <Button size="lg" variant="secondary" className="rounded-full px-8">
                  Get Your Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">HeartCare</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering individuals with AI-driven heart health predictions for a healthier tomorrow.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/predict" className="hover:text-primary transition-colors">Predict</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Heart Health Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                This tool provides risk assessment only and should not replace professional medical advice. 
                Always consult a healthcare provider.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 HeartCare. All rights reserved. Final Year Project.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
