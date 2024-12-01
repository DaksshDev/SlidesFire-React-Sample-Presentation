import { motion } from 'framer-motion';
import { 
  Scale, GraduationCap, Users, Building2, FileCheck, BookOpen, 
  Award, LineChart, Target, Briefcase, Shield, Heart, 
  HandHeart, Building, Gavel, ScrollText, UserCheck, Github 
} from 'lucide-react';
import { AnimatedList } from '@/components/Presentation/AnimatedList';
import { ParallaxImage } from '@/components/Presentation/ParallaxImage';
import { PieChart } from '@/components/Presentation/PieChart';
import { cn } from "@/lib/utils";
import confetti from 'canvas-confetti';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const scaleIn = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.8 }
};

// Update blob background component with slower animations
function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </motion.div>
    </div>
  );
}

function fireConfetti() {
  const count = 200;
  const defaults = {
    zIndex: 1000,
  };

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Left corner burst
  fire(0.25, {
    spread: 50,
    startVelocity: 45,
    origin: { x: 0, y: 1 },
    colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'],
  });

  // Right corner burst
  fire(0.25, {
    spread: 50,
    startVelocity: 45,
    origin: { x: 1, y: 1 },
    colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'],
  });

  // Center burst
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    origin: { x: 0.5, y: 1 },
    colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'],
  });
}

export const slides = [
  {
    id: 1,
    content: (
      <div className="text-center space-y-8">
        <motion.div {...scaleIn}>
          <Gavel className="w-24 h-24 mx-auto text-primary" />
        </motion.div>
        <motion.h1 {...fadeInUp} className="text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Laws for the Marginalized
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Understanding how our government protects and supports marginalized communities through special laws and policies
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 p-4 bg-primary/10 rounded-xl max-w-lg mx-auto backdrop-blur-sm border border-primary/20"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Fun Fact:</span> This presentation is built entirely with code using React & TypeScript - no PowerPoint needed! 🚀
          </p>
        </motion.div>
      </div>
    ),
    background: 'linear-gradient(to right, hsl(var(--background)), hsl(var(--card)))',
  },
  {
    id: 2,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          What are Special Laws?
        </motion.h2>
        <div className="grid grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <p className="text-lg leading-relaxed">
              Some people in our society didn't get fair chances in the past. To help them, our government makes special rules. These rules are mainly for Dalits, Adivasis, and other groups who need help.
            </p>
            <p className="text-lg leading-relaxed">
              These rules make sure they can go to good schools, get jobs, and live a better life just like everyone else.
            </p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg"
            >
              <HandHeart className="w-12 h-12 text-primary flex-shrink-0" />
              <p className="text-sm font-medium">
                When everyone gets equal chances, our whole society becomes better and stronger
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <Shield className="w-16 h-16 mb-6 text-primary mx-auto" />
            <h3 className="text-2xl font-semibold mb-6 text-center">How Do These Laws Help?</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, text: 'Free Education' },
                { icon: Briefcase, text: 'Job Chances' },
                { icon: Building, text: 'Better Homes' },
                { icon: Heart, text: 'Free Healthcare' },
                { icon: Users, text: 'Group Support' },
                { icon: Target, text: 'Special Help' }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-background/50 rounded-lg text-center"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Who Gets Help?
        </motion.h2>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <div className="space-y-4">
              {[
                { value: '27%', label: 'OBCs', desc: 'Other Backward Classes get 27 seats out of 100' },
                { value: '15%', label: 'SCs', desc: 'Scheduled Castes get 15 seats out of 100' },
                { value: '7.5%', label: 'STs', desc: 'Scheduled Tribes get 7.5 seats out of 100' },
                { value: '10%', label: 'Poor Families', desc: 'Poor families from other groups get 10 seats out of 100' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-background/50 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div>
                      <div className="font-medium">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl shadow-lg border border-border/50"
            >
              <GraduationCap className="w-16 h-16 mb-6 text-primary mx-auto" />
              <p className="text-lg text-center leading-relaxed">
                This policy helps create equal opportunities for communities that faced discrimination for centuries
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-primary/10 rounded-xl"
            >
              <h4 className="text-lg font-semibold mb-4 text-center">Impact Numbers</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '27%', label: 'OBC Reservation' },
                  { value: '15%', label: 'SC Reservation' },
                  { value: '7.5%', label: 'ST Reservation' },
                  { value: '10%', label: 'EWS Reservation' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Government Support Programs
        </motion.h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Education Support",
              desc: "Free hostels, scholarships, and special coaching for Dalit and Adivasi students",
              color: "from-blue-500/20 to-blue-600/20"
            },
            {
              icon: Building2,
              title: "Housing Programs",
              desc: "Special housing schemes and subsidies for marginalized communities",
              color: "from-green-500/20 to-green-600/20"
            },
            {
              icon: Heart,
              title: "Healthcare Access",
              desc: "Free medical services and health insurance coverage",
              color: "from-red-500/20 to-red-600/20"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(var(--primary), 0.3)",
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "p-6 rounded-2xl shadow-lg border border-border/50 cursor-pointer",
                "bg-gradient-to-br backdrop-blur-sm transition-all duration-300",
                item.color
              )}
            >
              <div className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-6 mx-auto">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
              <p className="text-base text-muted-foreground text-center">{item.desc}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6 p-3 bg-background/50 rounded-lg text-sm font-medium text-center cursor-pointer"
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Special Programs in Tribal Areas
        </motion.h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: Building,
              title: "Tribal Hostels",
              desc: "Free accommodation near schools to help tribal students access education easily",
              color: "from-purple-500/20 to-purple-600/20"
            },
            {
              icon: BookOpen,
              title: "Language Support",
              desc: "Special teachers who understand tribal languages to help students learn better",
              color: "from-blue-500/20 to-blue-600/20"
            },
            {
              icon: Users,
              title: "Community Centers",
              desc: "Places where tribal communities can learn new skills and preserve their culture",
              color: "from-green-500/20 to-green-600/20"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 25px rgba(var(--primary), 0.2)",
                transition: { duration: 0.3 }
              }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "p-6 rounded-2xl shadow-lg border border-border/50 cursor-pointer",
                "bg-gradient-to-br backdrop-blur-sm transition-all duration-300",
                item.color
              )}
            >
              <div className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-6 mx-auto">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
              <p className="text-base text-muted-foreground text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Implementation Process
        </motion.h2>
        <div className="space-y-8">
          <div className="grid grid-cols-5 gap-6">
            {[
              { 
                icon: FileCheck, 
                text: 'Identification', 
                desc: 'Officials check family background, income, and other details to find who needs help' 
              },
              { 
                icon: ScrollText, 
                text: 'Verification', 
                desc: 'All certificates and papers are carefully checked to prevent misuse' 
              },
              { 
                icon: Users, 
                text: 'Consultation', 
                desc: 'Local leaders and community members are asked for their input and suggestions' 
              },
              { 
                icon: Target, 
                text: 'Implementation', 
                desc: 'Benefits like school admission, job opportunities, or financial help are given' 
              },
              { 
                icon: LineChart, 
                text: 'Monitoring', 
                desc: 'Regular checks to see if the help is making a real difference' 
              }
            ].map((step, index) => (
              <motion.div
                key={step.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px -10px rgba(var(--primary), 0.3)",
                  transition: { duration: 0.2 }
                }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">{step.text}</h3>
                <p className="text-sm text-muted-foreground text-center">{step.desc}</p>
                {index < 4 && (
                  <motion.div
                    className="absolute -right-3 top-1/2 w-6 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground max-w-3xl mx-auto"
          >
            <p>
              This careful process helps make sure that government support reaches those who truly need it, 
              making our society more fair and equal for everyone.
            </p>
          </motion.div>
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 7,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Job Reservation Details
        </motion.h2>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Reserved Jobs</h3>
            <div className="h-[250px] relative pb-6">
              <PieChart
                data={[
                  { label: '', value: 27, color: 'hsl(217, 91%, 60%)' },
                  { label: '', value: 15, color: 'hsl(142, 71%, 45%)' },
                  { label: '', value: 7.5, color: 'hsl(262, 83%, 58%)' },
                  { label: '', value: 10, color: 'hsl(32, 95%, 44%)' }
                ]}
                className="w-full h-full"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[hsl(217,91%,60%)]" />
                <span>OBC - Other Backward Classes (27%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[hsl(142,71%,45%)]" />
                <span>SC - Scheduled Castes (15%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[hsl(262,83%,58%)]" />
                <span>ST - Scheduled Tribes (7.5%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[hsl(32,95%,44%)]" />
                <span>EWS - Poor Families (10%)</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Information</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Reserved', value: '49.5%' },
                { label: 'Open for All', value: '50.5%' },
                { label: 'Jobs Given', value: '85%' },
                { label: 'New Jobs/Year', value: '2L+' }
              ].map((stat) => (
                <div 
                  key={stat.label} 
                  className="text-center p-4 bg-background/50 rounded-lg border border-border/50"
                >
                  <p className="text-lg font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 8,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          How Special Laws Are Implemented
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Special laws need careful planning and execution to work effectively. Here's the step-by-step process:
        </motion.p>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              icon: ScrollText,
              title: "Law Creation",
              desc: "Government creates special laws after studying community needs",
              detail: "Laws are made after careful research and discussion"
            },
            {
              icon: FileCheck,
              title: "Verification",
              desc: "Checking eligibility through proper documents",
              detail: "Making sure help reaches the right people"
            },
            {
              icon: Building2,
              title: "Implementation",
              desc: "Schools, offices, and institutions follow these rules",
              detail: "Everyone must respect and follow these laws"
            },
            {
              icon: Target,
              title: "Monitoring",
              desc: "Regular checks to ensure rules are followed properly",
              detail: "Fixing problems if rules aren't followed"
            }
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(var(--primary), 0.3)",
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg text-center relative border border-border/50 cursor-pointer"
            >
              <step.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>
              <p className="text-xs text-muted-foreground">{step.detail}</p>
              {index < 3 && (
                <motion.div
                  className="absolute -right-3 top-1/2 w-6 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3 + 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground mt-4"
        >
          This process helps ensure that special laws actually make a difference in people's lives.
        </motion.div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 9,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Rights and Protections
        </motion.h2>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <ParallaxImage
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
              alt="Rights"
              className="rounded-xl shadow-xl h-[300px] object-cover w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <Shield className="w-16 h-16 mb-6 text-primary mx-auto" />
            <h3 className="text-2xl font-semibold mb-6 text-center">Protected Rights</h3>
            <AnimatedList
              items={[
                'Protection against discrimination',
                'Right to equal opportunities',
                'Right to preserve culture',
                'Special courts for faster justice',
                'Protection of traditional lands'
              ]}
            />
          </motion.div>
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 10,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
          Future Goals
        </motion.h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "100% Coverage",
              desc: "Reach every eligible person",
              color: "from-blue-500/20 to-blue-600/20"
            },
            {
              icon: Award,
              title: "Better Quality",
              desc: "Improve the quality of support",
              color: "from-green-500/20 to-green-600/20"
            },
            {
              icon: UserCheck,
              title: "Fair System",
              desc: "Make the process more transparent",
              color: "from-purple-500/20 to-purple-600/20"
            }
          ].map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "hsl(var(--primary) / 0.1)",
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 cursor-pointer transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-6 mx-auto">
                <goal.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{goal.title}</h3>
              <p className="text-base text-muted-foreground text-center">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <h3 className="text-2xl font-semibold mb-6">Progress Made</h3>
            <div className="space-y-4">
              {[
                { label: "Education Access", value: "75%" },
                { label: "Job Placements", value: "68%" },
                { label: "Healthcare Coverage", value: "82%" },
                { label: "Community Development", value: "70%" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span>{stat.label}</span>
                    <span className="font-medium">{stat.value}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <LineChart className="w-16 h-16 mb-6 text-primary mx-auto" />
            <h3 className="text-2xl font-semibold mb-6 text-center">Key Achievements</h3>
            <AnimatedList
              items={[
                'Increased literacy rates by 40%',
                'Doubled employment opportunities',
                'Better healthcare access in remote areas',
                'Preserved 50+ traditional art forms',
                'Improved living standards for millions'
              ]}
            />
          </motion.div>
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 11,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center">
          Community Development
        </motion.h2>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Development Programs</h3>
            <AnimatedList
              items={[
                'Village development schemes',
                'Clean water projects',
                'Road connectivity',
                'Digital literacy programs',
                'Skill training centers'
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[300px] rounded-xl overflow-hidden"
          >
            <ParallaxImage
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
              alt="Community Development"
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center">
          Cultural Preservation
        </motion.h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Language",
              desc: "Supporting tribal languages and dialects"
            },
            {
              icon: Users,
              title: "Traditions",
              desc: "Protecting traditional customs and practices"
            },
            {
              icon: Building,
              title: "Art Forms",
              desc: "Promoting traditional art and craft"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
              <p className="text-base text-muted-foreground text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <BlobBackground />
      </div>
    ),
  },
  {
    id: 13,
    content: (
      <div className="space-y-8">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center">
          Impact Statistics
        </motion.h2>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Progress Made</h3>
            <div className="space-y-4">
              {[
                { label: "Education Access", value: "75%" },
                { label: "Job Placements", value: "68%" },
                { label: "Healthcare Coverage", value: "82%" },
                { label: "Community Development", value: "70%" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ width: "0%" }}
                  animate={{ width: stat.value }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  className="space-y-2 cursor-pointer"
                >
                  <div className="flex justify-between text-sm">
                    <span>{stat.label}</span>
                    <span>{stat.value}</span>
                  </div>
                  <motion.div 
                    className="h-2 bg-muted rounded-full overflow-hidden"
                    whileHover={{
                      boxShadow: "0 0 10px rgba(var(--primary), 0.5)",
                    }}
                  >
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      style={{ width: stat.value }}
                      whileHover={{
                        filter: "brightness(1.2)",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-card rounded-xl shadow-lg"
          >
            <LineChart className="w-16 h-16 mb-4 text-primary mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center">Key Achievements</h3>
            <AnimatedList
              items={[
                'Increased literacy rates by 40%',
                'Doubled employment opportunities',
                'Better healthcare access in remote areas',
                'Preserved 50+ traditional art forms',
                'Improved living standards for millions'
              ]}
            />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    content: (
      <div className="text-center space-y-8 relative">
        <motion.div 
          {...scaleIn}
          onAnimationComplete={() => {
            fireConfetti();
          }}
        >
          <Heart className="w-24 h-24 mx-auto text-primary" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text"
        >
          Thank You
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-xl text-muted-foreground">
            Together we can build a more inclusive society
          </p>
          <div className="mt-12 space-y-2 text-lg text-muted-foreground">
            <p>Presentation created by</p>
            <p className="font-semibold text-foreground">Dakssh & Vaibhav</p>
            <p>Class VIII - Civics Project</p>
            <motion.a
              href="https://github.com/dakssh/civics-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              View source on GitHub
            </motion.a>
            <p className="text-xs mt-4">Made with ❤️ using React and Framer Motion</p>
          </div>
        </motion.div>
        <BlobBackground />
      </div>
    ),
    background: 'linear-gradient(to right, hsl(var(--background)), hsl(var(--card)))',
  },
];