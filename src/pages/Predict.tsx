import { useState } from "react";
import { Heart, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  age: string;
  gender: string;
  chestPain: string;
  bloodPressure: string;
  cholesterol: string;
  bloodSugar: string;
  restingECG: string;
  maxHeartRate: string;
  exerciseAngina: string;
  smoking: string;
  diabetes: string;
  familyHistory: string;
}

const Predict = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    age: "",
    gender: "",
    chestPain: "",
    bloodPressure: "",
    cholesterol: "",
    bloodSugar: "",
    restingECG: "",
    maxHeartRate: "",
    exerciseAngina: "",
    smoking: "",
    diabetes: "",
    familyHistory: "",
  });
  const [result, setResult] = useState<{ risk: string; percentage: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredFields: (keyof FormData)[] = [
      "age", "gender", "chestPain", "bloodPressure", "cholesterol", 
      "bloodSugar", "maxHeartRate", "exerciseAngina", "smoking", "diabetes"
    ];
    
    for (const field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  const calculateRisk = () => {
    // Simulated risk calculation based on form inputs
    let riskScore = 0;
    
    // Age factor
    const age = parseInt(formData.age);
    if (age > 60) riskScore += 25;
    else if (age > 45) riskScore += 15;
    else if (age > 35) riskScore += 5;

    // Gender
    if (formData.gender === "male") riskScore += 5;

    // Chest pain
    if (formData.chestPain === "typical") riskScore += 20;
    else if (formData.chestPain === "atypical") riskScore += 10;

    // Blood pressure
    const bp = parseInt(formData.bloodPressure);
    if (bp > 140) riskScore += 15;
    else if (bp > 120) riskScore += 5;

    // Cholesterol
    const chol = parseInt(formData.cholesterol);
    if (chol > 240) riskScore += 15;
    else if (chol > 200) riskScore += 8;

    // Blood sugar
    if (formData.bloodSugar === "yes") riskScore += 10;

    // Max heart rate
    const hr = parseInt(formData.maxHeartRate);
    if (hr < 120) riskScore += 10;

    // Exercise angina
    if (formData.exerciseAngina === "yes") riskScore += 15;

    // Smoking
    if (formData.smoking === "yes") riskScore += 15;

    // Diabetes
    if (formData.diabetes === "yes") riskScore += 10;

    // Family history
    if (formData.familyHistory === "yes") riskScore += 10;

    // Normalize to 100
    const percentage = Math.min(riskScore, 100);
    
    let risk: string;
    if (percentage < 30) risk = "Low";
    else if (percentage < 60) risk = "Moderate";
    else risk = "High";

    return { risk, percentage };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const riskResult = calculateRisk();
      setResult(riskResult);
      setIsLoading(false);
      
      toast({
        title: "Assessment Complete",
        description: "Your heart disease risk has been calculated.",
      });
    }, 1500);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "text-accent";
      case "Moderate": return "text-yellow-500";
      case "High": return "text-destructive";
      default: return "text-foreground";
    }
  };

  const getRiskBgColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-accent/10 border-accent";
      case "Moderate": return "bg-yellow-500/10 border-yellow-500";
      case "High": return "bg-destructive/10 border-destructive";
      default: return "bg-muted border-border";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Heart Disease Risk Assessment
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Check Your <span className="gradient-text">Heart Health</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill in the form below with your health information to receive an instant risk assessment. 
            All data is processed locally and kept confidential.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Info className="w-5 h-5 text-primary" />
                  Health Information Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b border-border pb-2">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Enter your age"
                          value={formData.age}
                          onChange={(e) => handleInputChange("age", e.target.value)}
                          min="1"
                          max="120"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Gender *</Label>
                        <Select value={formData.gender} onValueChange={(v) => handleInputChange("gender", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b border-border pb-2">Medical Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Chest Pain Type *</Label>
                        <Select value={formData.chestPain} onValueChange={(v) => handleInputChange("chestPain", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="typical">Typical Angina</SelectItem>
                            <SelectItem value="atypical">Atypical Angina</SelectItem>
                            <SelectItem value="nonanginal">Non-Anginal Pain</SelectItem>
                            <SelectItem value="asymptomatic">Asymptomatic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bp">Resting Blood Pressure (mm Hg) *</Label>
                        <Input
                          id="bp"
                          type="number"
                          placeholder="e.g., 120"
                          value={formData.bloodPressure}
                          onChange={(e) => handleInputChange("bloodPressure", e.target.value)}
                          min="80"
                          max="200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cholesterol">Cholesterol (mg/dL) *</Label>
                        <Input
                          id="cholesterol"
                          type="number"
                          placeholder="e.g., 200"
                          value={formData.cholesterol}
                          onChange={(e) => handleInputChange("cholesterol", e.target.value)}
                          min="100"
                          max="400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxHR">Maximum Heart Rate *</Label>
                        <Input
                          id="maxHR"
                          type="number"
                          placeholder="e.g., 150"
                          value={formData.maxHeartRate}
                          onChange={(e) => handleInputChange("maxHeartRate", e.target.value)}
                          min="60"
                          max="220"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-3">
                        <Label>Fasting Blood Sugar &gt; 120 mg/dL? *</Label>
                        <RadioGroup
                          value={formData.bloodSugar}
                          onValueChange={(v) => handleInputChange("bloodSugar", v)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="bs-yes" />
                            <Label htmlFor="bs-yes" className="cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="bs-no" />
                            <Label htmlFor="bs-no" className="cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-3">
                        <Label>Exercise Induced Angina? *</Label>
                        <RadioGroup
                          value={formData.exerciseAngina}
                          onValueChange={(v) => handleInputChange("exerciseAngina", v)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="ea-yes" />
                            <Label htmlFor="ea-yes" className="cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="ea-no" />
                            <Label htmlFor="ea-no" className="cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {/* Lifestyle Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b border-border pb-2">Lifestyle & History</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-3">
                        <Label>Do you smoke? *</Label>
                        <RadioGroup
                          value={formData.smoking}
                          onValueChange={(v) => handleInputChange("smoking", v)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="sm-yes" />
                            <Label htmlFor="sm-yes" className="cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="sm-no" />
                            <Label htmlFor="sm-no" className="cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-3">
                        <Label>Do you have diabetes? *</Label>
                        <RadioGroup
                          value={formData.diabetes}
                          onValueChange={(v) => handleInputChange("diabetes", v)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="db-yes" />
                            <Label htmlFor="db-yes" className="cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="db-no" />
                            <Label htmlFor="db-no" className="cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-3">
                        <Label>Family history of heart disease?</Label>
                        <RadioGroup
                          value={formData.familyHistory}
                          onValueChange={(v) => handleInputChange("familyHistory", v)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="fh-yes" />
                            <Label htmlFor="fh-yes" className="cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="fh-no" />
                            <Label htmlFor="fh-no" className="cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-gradient w-full rounded-full py-6 text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 mr-2" />
                        Get Risk Assessment
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {result ? (
                <Card className={`border-2 ${getRiskBgColor(result.risk)} shadow-lg animate-slide-up`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-foreground">Your Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          className="stroke-muted"
                          strokeWidth="12"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          className={`${result.risk === "Low" ? "stroke-accent" : result.risk === "Moderate" ? "stroke-yellow-500" : "stroke-destructive"}`}
                          strokeWidth="12"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${result.percentage * 3.52} 352`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-3xl font-bold ${getRiskColor(result.risk)}`}>
                          {result.percentage}%
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Risk Level</p>
                      <p className={`text-2xl font-bold ${getRiskColor(result.risk)}`}>
                        {result.risk} Risk
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${result.risk === "Low" ? "bg-accent/20" : result.risk === "Moderate" ? "bg-yellow-500/20" : "bg-destructive/20"}`}>
                      {result.risk === "Low" && (
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground">
                            Great news! Your heart disease risk appears to be low. Continue maintaining a healthy lifestyle.
                          </p>
                        </div>
                      )}
                      {result.risk === "Moderate" && (
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground">
                            Your risk is moderate. Consider consulting a healthcare provider and improving lifestyle habits.
                          </p>
                        </div>
                      )}
                      {result.risk === "High" && (
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground">
                            Your risk level is high. Please consult a healthcare professional as soon as possible for proper evaluation.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border bg-card shadow-lg">
                  <CardContent className="p-8 text-center">
                    <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Results Will Appear Here</h3>
                    <p className="text-sm text-muted-foreground">
                      Fill in the health information form and click "Get Risk Assessment" to see your results.
                    </p>
                  </CardContent>
                </Card>
              )}

              <Card className="border-border bg-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      <strong>Disclaimer:</strong> This tool provides an estimate only and should not replace professional medical advice. 
                      Always consult a qualified healthcare provider for accurate diagnosis and treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
