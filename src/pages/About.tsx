import { Heart, Users, Target, Award, BookOpen, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    { name: "Team Member 1", role: "Project Lead", image: "👨‍💻" },
    { name: "Team Member 2", role: "ML Engineer", image: "👩‍💻" },
    { name: "Team Member 3", role: "Frontend Developer", image: "👨‍💻" },
    { name: "Team Member 4", role: "Data Analyst", image: "👩‍💻" },
  ];

  const milestones = [
    { title: "Research Phase", description: "Studied cardiovascular disease patterns and risk factors" },
    { title: "Data Collection", description: "Gathered and preprocessed medical datasets" },
    { title: "Model Development", description: "Trained and optimized ML prediction models" },
    { title: "System Integration", description: "Built user-friendly web interface" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              About Our Project
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empowering Health Through <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              HeartCare is a final year project aimed at leveraging machine learning to predict 
              heart disease risk, making preventive healthcare more accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Cardiovascular diseases are the leading cause of death globally, claiming millions of lives 
                each year. Our mission is to provide an accessible, easy-to-use tool that helps individuals 
                understand their heart disease risk and take preventive action.
              </p>
              <p className="text-muted-foreground">
                By combining medical knowledge with advanced machine learning algorithms, we aim to bridge 
                the gap between technology and healthcare, making early detection available to everyone, 
                regardless of their access to healthcare facilities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-hover border-border bg-card">
                <CardContent className="p-6 text-center">
                  <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">Prevention</h3>
                  <p className="text-sm text-muted-foreground mt-2">Early risk detection</p>
                </CardContent>
              </Card>
              <Card className="card-hover border-border bg-card">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">Accessibility</h3>
                  <p className="text-sm text-muted-foreground mt-2">Free for everyone</p>
                </CardContent>
              </Card>
              <Card className="card-hover border-border bg-card">
                <CardContent className="p-6 text-center">
                  <Stethoscope className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">Accuracy</h3>
                  <p className="text-sm text-muted-foreground mt-2">ML-powered analysis</p>
                </CardContent>
              </Card>
              <Card className="card-hover border-border bg-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">Privacy</h3>
                  <p className="text-sm text-muted-foreground mt-2">Data protection</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How Our <span className="gradient-text">System Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our prediction system uses a trained machine learning model to analyze various health 
              parameters and provide a risk assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Input Data", desc: "Enter your health parameters in the form" },
              { step: "02", title: "Processing", desc: "Our ML model analyzes your inputs" },
              { step: "03", title: "Prediction", desc: "Risk score is calculated based on patterns" },
              { step: "04", title: "Results", desc: "Receive your personalized risk assessment" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Project <span className="gradient-text">Milestones</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {index + 1}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-foreground text-lg">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground">The dedicated students behind this project</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover border-border bg-card text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.image}
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Technology <span className="gradient-text">Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["React", "TypeScript", "Tailwind CSS", "Machine Learning", "Python", "Scikit-learn", "REST API", "Vite"].map((tech, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-card border border-border text-center hover:border-primary transition-colors"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
