import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  GraduationCap,
  FileText,
  Calendar,
  Users,
  Globe,
  TrendingUp,
  Clock,
  Award,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">ALOKBANSAL.COM</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#assessments" className="text-gray-700 hover:text-blue-600 transition-colors">
                Assessments
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-100 rounded-full opacity-25 animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                    Intelligent,
                  </span>
                  <br />
                  <span className="text-blue-600">AI-Driven</span>
                  <br />
                  <span className="text-gray-900">Career Guidance</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Discover your perfect career path with our advanced AI-powered assessments and personalized
                  recommendations
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Take Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Sample Report
                </Button>
              </div>
            </div>

            {/* Right Content - AI Assistant */}
            <div className="relative">
              {/* Floating Animation Container */}
              <div className="relative animate-float">
                {/* AI Assistant Card */}
                <Card className="bg-white shadow-2xl border-0 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                  <CardContent className="p-8">
                    {/* Header with AI Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 animate-bounce">AI Assistant</Badge>
                    </div>

                    {/* Owl Character */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block">
                        <div className="w-32 h-32 mx-auto mb-4 relative group">
                          {/* Owl Body */}
                          <div className="w-24 h-32 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full mx-auto relative transform group-hover:scale-110 transition-transform duration-300">
                            {/* Owl Eyes */}
                            <div className="absolute top-6 left-3 w-6 h-6 bg-white rounded-full">
                              <div className="w-4 h-4 bg-black rounded-full mt-1 ml-1 animate-pulse"></div>
                            </div>
                            <div className="absolute top-6 right-3 w-6 h-6 bg-white rounded-full">
                              <div className="w-4 h-4 bg-black rounded-full mt-1 ml-1 animate-pulse"></div>
                            </div>
                            {/* Owl Beak */}
                            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-orange-500"></div>
                            {/* Owl Wings */}
                            <div className="absolute top-10 -left-2 w-8 h-12 bg-amber-400 rounded-full transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
                            <div className="absolute top-10 -right-2 w-8 h-12 bg-amber-400 rounded-full transform rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
                            {/* Book in hands */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-blue-600 rounded-sm"></div>
                          </div>
                        </div>

                        {/* Floating particles around owl */}
                        <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                        <div className="absolute top-4 -left-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                        <div className="absolute bottom-2 right-0 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">BlirbalAI</h3>
                      <p className="text-gray-600 mb-4">Your AI Career Counselling Specialist</p>

                      <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-medium">Online & Ready to Help</span>
                      </div>
                    </div>

                    {/* AI Features */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                        <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm font-medium text-gray-700">Analyzes 200+ career parameters</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group">
                        <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm font-medium text-gray-700">Processes assessments in real-time</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors group">
                        <div className="w-3 h-3 bg-orange-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm font-medium text-gray-700">Personalized recommendations</span>
                      </div>
                    </div>

                    {/* Latest Interaction */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="text-xs text-gray-500 mb-1 font-medium">Latest Interaction:</div>
                      <div className="text-sm text-gray-700 italic">
                        "Based on your assessment, I recommend exploring Data Science. Your analytical skills score is
                        94%!"
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating Elements around the card */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-200 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-200 rounded-full opacity-50 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Services Section */}
      <div className="max-w-3xl mx-auto text-center py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Comprehensive Career Solutions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Empowering students, professionals, and institutions with intelligent
          career guidance tools
        </p>
      </div>

      <section className="py-16 bg-gray-50">
     
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Personalized Consultation & Guidance with Psychometric Test
                </h3>
                <p className="text-gray-600">
                  Expert guidance to choose the right academic stream that aligns with your interests, abilities, and
                  career goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Stream Selection Guidance</h3>
                <p className="text-gray-600">
                  Expert guidance to choose the right academic stream that aligns with your interests, abilities, and
                  career goals.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Profile Building & Mentoring (1 Year)</h3>
                <p className="text-gray-600">
                  Comprehensive profile development and strategic career planning with dedicated mentorship support.
                </p>
              </CardContent>
            </Card>

            {/* Postgraduate Admissions */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Postgraduate Admissions Study Abroad</h3>
                <p className="text-gray-600 mb-6">
                  Specialized guidance for masters and doctoral programs abroad with university selection and
                  application support.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            
            

            {/* MBA Admissions */}


            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                  <GraduationCap className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">MBA Admissions</h3>
                <p className="text-gray-600 mb-6">
                  Strategic MBA application guidance including GMAT/GRE preparation, essay writing, and interview
                  preparation.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            {/* Essay Editing */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <FileText className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Essay/SOP/LOR's Editing</h3>
                <p className="text-gray-600 mb-6">
                  Professional editing and review of essays, statements of purpose, and letters of recommendation for
                  applications.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Profile Building & Mentoring (2 Years)</h3>
                <p className="text-gray-600 mb-6">
                  Extended mentoring program for comprehensive skill development and strategic career planning over two
                  years.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <GraduationCap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Undergraduate Admissions India</h3>
                <p className="text-gray-600 mb-6">
                  Complete guidance for Indian undergraduate admissions including entrance exam preparation and college
                  selection.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            {/* Undergraduate Study Abroad */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Undergraduate Admissions Study Abroad</h3>
                <p className="text-gray-600 mb-6">
                  End-to-end support for international undergraduate admissions including application strategy and visa
                  guidance.
                </p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Students, Real Success Stories</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            See how our expert counseling and mentoring has helped students achieve their dreams of studying at world's
            top universities
          </p>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                20,000+
              </div>
              <div className="text-gray-600">Students Mentored</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-600">Top 50 University Admits</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                17+
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>

          {/* Testimonials */}
          
        </div>
      </section>

      {/* AI Assistant Section */}
    

      

      {/* Student Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Student Success Metrics</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
              <div className="text-gray-600">Find their ideal career within 6 months</div>
            </div>
            <div className="group">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-blue-600 mb-2">15 min</div>
              <div className="text-gray-600">Average assessment completion time</div>
            </div>
            <div className="group">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Countries where our students work</div>
            </div>
            <div className="group">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
              <div className="text-gray-600">Would recommend to friends</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career Journey?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of students and professionals who have discovered their perfect career path through our
            intelligent assessment platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Take Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Sample Report
            </Button>
          </div>
        </div>
      </section>

      {/* Final Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Kashish Attri",
                role: "International Student",
                university: "University of Guelph",
                before: "High School Graduate",
                after: "Student at University of Guelph",
                badge: "Top University Admission",
              },
              {
                name: "Srishti Gupta",
                role: "Graduate Student",
                university: "New York University",
                before: "Undergraduate Graduate",
                after: "Graduate Student at NYU",
                badge: "Ivy League Success",
              },
              {
                name: "Rahul Mehta",
                role: "Engineering Student",
                university: "Cornell University",
                before: "Aspiring Engineering Student",
                after: "Engineering Student at Cornell",
                badge: "World's Top 50 University",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-600">{testimonial.university}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div>
                      <div className="font-semibold">Before</div>
                      <div className="text-gray-600">{testimonial.before}</div>
                    </div>
                    <ArrowRight className="text-blue-600" />
                    <div>
                      <div className="font-semibold text-blue-600">After</div>
                      <div className="text-blue-600">{testimonial.after}</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{testimonial.badge}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Ready to write your own success story?</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Join 20,000+ students who achieved their study abroad dreams
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">ALOKBANSAL.COM</div>
              <p className="text-gray-400 mb-4">
                Empowering students and professionals with intelligent career guidance and educational consulting
                services.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Guidance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Study Abroad Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    MBA Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Essay Editing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Profile Building
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    University Rankings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Scholarship Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Free Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@alokbansal.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ALOKBANSAL.COM. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
