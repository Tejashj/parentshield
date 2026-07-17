import React, { useState } from 'react';
import {
  Shield, Eye, Smartphone, Zap, CheckCircle2, Lock, Menu, X, ArrowRight,
  TrendingUp, Phone, MessageSquare, Compass, Chrome, Image as ImageIcon,
  Folder, AppWindow, Users, Keyboard, AlertTriangle, Play, MapPin, Battery,
  HardDrive, Cpu, Wifi, RefreshCw, Star, ArrowUpRight, Check, DollarSign,
  Plus, Settings as SettingsIcon, LogOut, ChevronRight, Activity, Calendar,
  Bell, FileText, Send, Moon, Sun, LockKeyhole
} from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [view, setView] = useState('landing'); // 'landing' or 'dashboard'
  const [activeTab, setActiveTab] = useState('overview'); // dashboard sub-views
  const [selectedDevice, setSelectedDevice] = useState('Redmi Note 12');
  const [pricingCycle, setPricingCycle] = useState('monthly');
  const [alertFilter, setAlertFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom mock interactive states
  const [remoteLogs, setRemoteLogs] = useState([
    { id: 1, action: 'Locate Device', time: '10:30 AM', status: 'Success' },
    { id: 2, action: 'Clear Cache', time: 'Yesterday', status: 'Success' }
  ]);
  const [isRinging, setIsRinging] = useState(false);

  // Toggle Dark Mode on html element
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Trigger simulated remote command
  const runCommand = (commandName) => {
    if (commandName === 'Ring Device') {
      setIsRinging(true);
      setTimeout(() => setIsRinging(false), 5000);
    }
    const newLog = {
      id: Date.now(),
      action: commandName,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Success'
    };
    setRemoteLogs([newLog, ...remoteLogs]);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-[#09090b] text-zinc-50' : 'bg-zinc-50 text-zinc-900'}`}>
      
      {/* LANDING PAGE VIEW */}
      {view === 'landing' && (
        <div className="flex flex-col min-h-screen">
          
          {/* Header/Navbar */}
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0c0c0f]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
                <div className="bg-brand-600 p-2 rounded-lg text-white">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight font-sans text-brand-600 dark:text-brand-500">ParentShield</span>
              </div>
              
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                <a href="#features" className="hover:text-brand-600 dark:hover:text-brand-400">Features</a>
                <a href="#how-it-works" className="hover:text-brand-600 dark:hover:text-brand-400">How It Works</a>
                <a href="#pricing" className="hover:text-brand-600 dark:hover:text-brand-400">Pricing</a>
                <a href="#faq" className="hover:text-brand-600 dark:hover:text-brand-400">FAQ</a>
                <a href="#support" className="hover:text-brand-600 dark:hover:text-brand-400">Support</a>
              </nav>

              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => { setView('dashboard'); setActiveTab('overview'); }}
                  className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading and Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  <Shield className="w-3 h-3" /> All-in-One Parental Monitoring Solution
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
                  Stay Connected. <br/>
                  <span className="text-brand-600 dark:text-brand-500">Keep Your Kids Safe.</span>
                </h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl">
                  Monitor calls, messages, location, social media activities and more — all from your dashboard. Because their safety is your priority.
                </p>

                <div className="space-y-3">
                  {[
                    'Real-time Monitoring',
                    '100% Stealth Mode',
                    'Easy to Use Dashboard',
                    'Secure & Encrypted Data'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button 
                    onClick={() => { setView('dashboard'); setActiveTab('overview'); }}
                    className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    Get Started Now <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="w-full text-xs text-zinc-400 dark:text-zinc-500 italic mt-2">
                    🛡️ 30-Day Money Back Guarantee
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Image with Floating Cards */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f]">
                  <img 
                    src="./parentshield_hero_family_1784263846058.png" 
                    alt="Happy Family using smartphone" 
                    className="w-full h-auto object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Rating Card badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-xl shadow-lg flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-500">
                      <Star className="w-5 h-5 fill-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-950 dark:text-zinc-50">4.8/5 Rating</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">Trusted by 50,000+ parents</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20 bg-white dark:bg-[#0c0c0f] border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">How It Works</h2>
                <p className="text-zinc-500 dark:text-zinc-400">Get started in 3 simple steps</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '1',
                    icon: Users,
                    title: 'Create Account',
                    desc: 'Sign up and choose a plan that suits you.'
                  },
                  {
                    step: '2',
                    icon: Smartphone,
                    title: 'Install on Child\'s Device',
                    desc: 'Install the app on your child\'s device in minutes.'
                  },
                  {
                    step: '3',
                    icon: Eye,
                    title: 'Start Monitoring',
                    desc: 'Access all activities from your secure dashboard.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-6 bg-zinc-50 dark:bg-[#09090b] rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4 text-center">
                    <div className="absolute top-4 left-4 w-7 h-7 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 mx-auto bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">{item.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Stealth Mode highlight banner */}
              <div className="mt-12 bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-900/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-brand-900 dark:text-brand-300">100% Stealth Mode</h4>
                  <p className="text-sm text-brand-700 dark:text-brand-400 max-w-xl">
                    The app runs in invisible mode and does not show in the app list, ensuring discrete monitoring.
                  </p>
                </div>
                <div className="bg-brand-600 text-white p-3.5 rounded-xl shadow-md">
                  <Eye className="w-8 h-8" />
                </div>
              </div>

            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Powerful Features for Smart Parenting</h2>
                <p className="text-zinc-500 dark:text-zinc-400">Complete monitoring solutions to keep your kids safe online and offline.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Phone, title: 'Call Records', desc: 'Listen & view all incoming & outgoing calls.' },
                  { icon: MessageSquare, title: 'WhatsApp Monitor', desc: 'Read chats, view media, contacts & groups.' },
                  { icon: Users, title: 'Social Media Monitor', desc: 'Monitor Instagram, Facebook, Snapchat, LinkedIn & more.' },
                  { icon: Compass, title: 'Location Tracking', desc: 'Track real-time location & location history.' },
                  { icon: Chrome, title: 'Browser History', desc: 'View browsing history & searched keywords.' },
                  { icon: AppWindow, title: 'App Activity', desc: 'See installed apps & time spent on each app.' },
                  { icon: AlertTriangle, title: 'Alerts & Notifications', desc: 'Get notified about suspicious activities instantly.' },
                  { icon: Keyboard, title: 'Keylogger', desc: 'Record all typed words & keystrokes (Text Input).' }
                ].map((feature, idx) => (
                  <div key={idx} className="p-5 bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 text-brand-600 dark:text-brand-400 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-zinc-950 dark:text-zinc-50">{feature.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 bg-white dark:bg-[#0c0c0f] border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">Choose Your Plan</h2>
                <p className="text-zinc-500 dark:text-zinc-400">Simple, transparent pricing to safeguard your family.</p>
                
                {/* Billing toggle */}
                <div className="inline-flex items-center p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg mt-4">
                  <button 
                    onClick={() => setPricingCycle('monthly')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${pricingCycle === 'monthly' ? 'bg-white dark:bg-zinc-700 shadow-sm text-zinc-950 dark:text-zinc-50' : 'text-zinc-500'}`}
                  >
                    Monthly
                  </button>
                  <button 
                    onClick={() => setPricingCycle('yearly')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1.5 ${pricingCycle === 'yearly' ? 'bg-white dark:bg-zinc-700 shadow-sm text-zinc-950 dark:text-zinc-50' : 'text-zinc-500'}`}
                  >
                    Yearly <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">Save 20%</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                
                {/* Standard Plan */}
                <div className="p-8 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">Basic Plan</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Essential monitoring for 1 device.</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
                        {pricingCycle === 'monthly' ? '₹2,500' : '₹24,000'}
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">/ Month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                      {['1 Device License', 'Call Log Monitoring', 'SMS & WhatsApp Chats', 'Basic Location Tracker'].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => { setView('dashboard'); setActiveTab('overview'); }}
                    className="w-full mt-8 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold py-2.5 rounded-lg transition-colors"
                  >
                    Get Started
                  </button>
                </div>

                {/* Premium Plan (Featured) */}
                <div className="p-8 bg-brand-900 text-white rounded-2xl border-2 border-brand-500 relative flex flex-col justify-between shadow-xl transform scale-105">
                  <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">Premium Plan</h3>
                      <p className="text-sm text-brand-200 mt-1">Complete peace of mind for up to 3 devices.</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-white">
                        {pricingCycle === 'monthly' ? '₹5,500' : '₹52,800'}
                      </span>
                      <span className="text-sm text-brand-200">/ Month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-brand-100">
                      {[
                        'Up to 3 Devices Licensed',
                        'Call Logs & Screen Recording',
                        'Stealth Mode Keylogger',
                        'Real-time Live Location Maps',
                        'Social Media Chats (Instagram, Snap, FB)',
                        'Geofencing Alerts'
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => { setView('dashboard'); setActiveTab('overview'); }}
                    className="w-full mt-8 bg-white text-brand-900 hover:bg-brand-50 font-semibold py-3 rounded-lg transition-colors shadow-md"
                  >
                    Get Started Now
                  </button>
                </div>

                {/* Elite/Family Plan */}
                <div className="p-8 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">Ultimate Plan</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Infinite tracking capability for families.</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-zinc-950 dark:text-zinc-50">
                        {pricingCycle === 'monthly' ? '₹11,500' : '₹110,400'}
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">/ Month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                      {[
                        'Unlimited Devices Licensed',
                        'All Premium Features',
                        'Instant Remote Commands',
                        'Weekly/Monthly PDF Reports',
                        'Priority 24/7 Support Desk'
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => { setView('dashboard'); setActiveTab('overview'); }}
                    className="w-full mt-8 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold py-2.5 rounded-lg transition-colors"
                  >
                    Get Started
                  </button>
                </div>

              </div>

              {/* Secure Payment Footer bar */}
              <div className="mt-16 text-center text-xs text-zinc-400 dark:text-zinc-500 space-y-4">
                <p>Secure Payment | Cancel Anytime</p>
                <div className="flex justify-center gap-6 text-2xl font-bold text-zinc-300 dark:text-zinc-700">
                  <span>VISA</span>
                  <span>MasterCard</span>
                  <span>RuPay</span>
                  <span>UPI</span>
                </div>
              </div>

            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-20 border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
              <div className="text-brand-600 dark:text-brand-400 text-5xl">“</div>
              <blockquote className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed italic">
                ParentShield has given me peace of mind. I can now ensure my child is safe online and offline.
              </blockquote>
              <div className="space-y-1">
                <div className="font-bold text-zinc-950 dark:text-zinc-50">— Priya S., Mumbai</div>
                <div className="flex justify-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" /><Star className="w-4 h-4 fill-amber-500" /><Star className="w-4 h-4 fill-amber-500" /><Star className="w-4 h-4 fill-amber-500" /><Star className="w-4 h-4 fill-amber-500" />
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white dark:bg-[#0c0c0f] border-t border-zinc-200 dark:border-zinc-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-600" />
                <span className="font-bold text-zinc-950 dark:text-zinc-50">ParentShield</span>
              </div>
              <p>&copy; 2026 ParentShield. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-brand-600">Privacy Policy</a>
                <a href="#" className="hover:text-brand-600">Terms & Conditions</a>
              </div>
            </div>
          </footer>

        </div>
      )}

      {/* DASHBOARD VIEW */}
      {view === 'dashboard' && (
        <div className="flex min-h-screen">
          
          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className="w-64 bg-white dark:bg-[#0c0c0f] border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between flex-shrink-0">
            <div className="flex flex-col">
              
              {/* Brand Header */}
              <div className="h-16 flex items-center gap-2 px-6 border-b border-zinc-200 dark:border-zinc-800 justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
                  <Shield className="w-6 h-6 text-brand-600" />
                  <span className="font-bold text-lg tracking-tight text-brand-600 dark:text-brand-500">ParentShield</span>
                </div>
                <button 
                  onClick={toggleDarkMode}
                  className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
                </button>
              </div>

              {/* Sidebar Tabs */}
              <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-14rem)]">
                {[
                  { id: 'overview', label: 'Overview', icon: Activity },
                  { id: 'calls', label: 'Calls', icon: Phone, badge: 'New' },
                  { id: 'messages', label: 'SMS & Chats', icon: MessageSquare, badge: 'New' },
                  { id: 'location', label: 'Live Location', icon: Compass },
                  { id: 'browser', label: 'Browser History', icon: Chrome },
                  { id: 'media', label: 'Photos & Videos', icon: ImageIcon },
                  { id: 'apps', label: 'App Activity', icon: AppWindow },
                  { id: 'keylogger', label: 'Keylogger', icon: Keyboard },
                  { id: 'alerts', label: 'Alerts', icon: AlertTriangle, badge: '7' },
                  { id: 'remote', label: 'Remote Commands', icon: Zap },
                  { id: 'billing', label: 'Billing & Plans', icon: DollarSign },
                  { id: 'settings', label: 'Settings', icon: SettingsIcon },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400'
                          : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4.5 h-4.5" />
                        <span>{tab.label}</span>
                      </div>
                      {tab.badge && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                          tab.badge === 'New' 
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                            : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
                        }`}>
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

            </div>

            {/* User Profile / Logout section at bottom of sidebar */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-700 dark:text-zinc-300">
                  JD
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-950 dark:text-zinc-50">John Doe</div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400">john.doe@example.com</div>
                </div>
              </div>
              <button 
                onClick={() => setView('landing')}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout Session</span>
              </button>
            </div>

          </aside>

          {/* MAIN DASHBOARD CONTENT AREA */}
          <main className="flex-1 flex flex-col overflow-y-auto max-h-screen">
            
            {/* TOP HEADER */}
            <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0f] flex items-center justify-between px-6 flex-shrink-0">
              
              {/* Header Titles */}
              <div>
                <h1 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {activeTab === 'overview' && 'Dashboard Overview'}
                  {activeTab === 'calls' && 'Call Monitoring'}
                  {activeTab === 'messages' && 'SMS & Instant Messages'}
                  {activeTab === 'location' && 'Live Location Maps'}
                  {activeTab === 'browser' && 'Browser History & Search'}
                  {activeTab === 'media' && 'Photos & Videos Gallery'}
                  {activeTab === 'apps' && 'App Activity & Screen Time'}
                  {activeTab === 'keylogger' && 'Keylogger logs'}
                  {activeTab === 'alerts' && 'System alerts'}
                  {activeTab === 'remote' && 'Remote commands'}
                  {activeTab === 'billing' && 'Billing & Subscription Plans'}
                  {activeTab === 'settings' && 'Account Settings'}
                </h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {activeTab === 'overview' && 'Monitor your child\'s activity in real-time'}
                  {activeTab === 'calls' && 'View all incoming, outgoing and missed calls'}
                  {activeTab === 'messages' && 'SMS, WhatsApp, and social media message sync'}
                  {activeTab === 'location' && 'Real-time GPS tracker and Geofencing history'}
                  {activeTab === 'browser' && 'Web searches, visited websites, and download records'}
                  {activeTab === 'media' && 'Access photos, videos and files on device'}
                  {activeTab === 'apps' && 'Track application usage duration and screen locks'}
                  {activeTab === 'keylogger' && 'Keystroke logger for search inputs & chat logs'}
                  {activeTab === 'alerts' && 'Critical events like low battery, restart, geofence, etc.'}
                  {activeTab === 'remote' && 'Send instant device commands in stealth'}
                  {activeTab === 'billing' && 'Manage invoices, payment methods, and plans'}
                  {activeTab === 'settings' && 'Configure notification options and device permissions'}
                </p>
              </div>

              {/* Device Selector, Sync indicator, Search */}
              <div className="flex items-center gap-4">
                
                {/* Search Everywhere bar */}
                <div className="relative hidden sm:block">
                  <input
                    type="text"
                    placeholder="Search logs everywhere..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-4 py-1.5 text-xs bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-500 w-48"
                  />
                  <div className="absolute left-2.5 top-2.5 text-zinc-400">
                    {/* Minimal search icon represented textually or blank */}
                    🔎
                  </div>
                </div>

                {/* Device Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400">Child's Device:</span>
                  <select 
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                    className="text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg px-2.5 py-1.5 focus:outline-none text-zinc-800 dark:text-zinc-100"
                  >
                    <option value="Redmi Note 12">Redmi Note 12</option>
                    <option value="iPhone 14 Plus">iPhone 14 Plus</option>
                  </select>
                </div>

                {/* Sync Badge */}
                <button className="flex items-center gap-1.5 text-xs text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-2.5 py-1.5 rounded-lg font-medium hover:bg-brand-100 transition-all">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Sync Now</span>
                </button>
              </div>

            </header>

            {/* TAB CONTENTS CONTAINER */}
            <div className="flex-1 p-6 space-y-6">

              {/* 1. OVERVIEW VIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  
                  {/* KPI cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    {[
                      { title: 'Total Calls', value: '45', color: 'emerald', label: 'View Details', icon: Phone, tabId: 'calls' },
                      { title: 'Messages', value: '128', color: 'blue', label: 'View Details', icon: MessageSquare, tabId: 'messages' },
                      { title: 'WhatsApp Chats', value: '63', color: 'emerald', label: 'View Details', icon: MessageSquare, tabId: 'messages' },
                      { title: 'Social Media', value: '23', color: 'brand', label: 'View Details', icon: Users, tabId: 'messages' },
                      { title: 'Screen Time', value: '3h 45m', color: 'amber', label: 'View Details', icon: AppWindow, tabId: 'apps' },
                      { title: 'Alerts', value: '7', color: 'rose', label: 'View Details', icon: AlertTriangle, tabId: 'alerts' }
                    ].map((card, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl flex flex-col justify-between shadow-sm cursor-pointer hover:border-brand-500 transition-all"
                        onClick={() => setActiveTab(card.tabId)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{card.title}</span>
                          <card.icon className="w-4 h-4 text-zinc-400" />
                        </div>
                        <div className="mt-2 text-2xl font-extrabold text-zinc-950 dark:text-zinc-50">{card.value}</div>
                        <button className="mt-3 text-[10px] font-bold text-brand-600 dark:text-brand-400 flex items-center gap-0.5">
                          {card.label} <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Two Column Layout: Main tables & Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left Column: Recent Activity Feed Cards */}
                    <div className="lg:col-span-8 space-y-6">
                      
                      {/* Recent Calls & WhatsApp Chats Side by Side */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Recent Calls */}
                        <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                            <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Recent Calls</h3>
                            <button onClick={() => setActiveTab('calls')} className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-medium">View All</button>
                          </div>
                          <div className="space-y-3.5">
                            {[
                              { name: 'Rahul Kumar', phone: '+91 98765 43210', time: '10:30 AM', status: 'incoming' },
                              { name: 'Sneha Verma', phone: '+91 87654 32109', time: '09:15 AM', status: 'missed' },
                              { name: 'Aman Singh', phone: '+91 65432 10987', time: 'Yesterday', status: 'outgoing' }
                            ].map((call, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-700 dark:text-zinc-300">
                                    {call.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                    <div className="font-bold text-zinc-950 dark:text-zinc-50">{call.name}</div>
                                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">{call.phone}</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-zinc-500 dark:text-zinc-400 font-medium">{call.time}</div>
                                  <span className={`text-[9px] font-bold uppercase ${
                                    call.status === 'incoming' ? 'text-emerald-600' : call.status === 'missed' ? 'text-rose-600' : 'text-zinc-500'
                                  }`}>
                                    {call.status}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* WhatsApp Chats */}
                        <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                            <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">WhatsApp Activity</h3>
                            <button onClick={() => setActiveTab('messages')} className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-medium">View All</button>
                          </div>
                          <div className="space-y-3.5">
                            {[
                              { name: 'Best Friends Group', msg: 'Riya: Let\'s meet tomorrow 🌟', time: '10:20 AM', unread: 12 },
                              { name: 'Riya Sharma', msg: 'Sent a Photo', time: '09:45 AM', unread: 2 },
                              { name: 'Class 10th', msg: 'Arjun: Notes shared', time: 'Yesterday', unread: 0 }
                            ].map((chat, idx) => (
                              <div key={idx} className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center font-bold text-brand-600">
                                    💬
                                  </div>
                                  <div className="max-w-[120px]">
                                    <div className="font-bold text-zinc-950 dark:text-zinc-50 truncate">{chat.name}</div>
                                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">{chat.msg}</div>
                                  </div>
                                </div>
                                <div className="text-right flex flex-col items-end gap-1">
                                  <div className="text-zinc-500 dark:text-zinc-400">{chat.time}</div>
                                  {chat.unread > 0 && (
                                    <span className="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                                      {chat.unread}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Location Preview Card */}
                      <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                          <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Live Location</h3>
                          <button onClick={() => setActiveTab('location')} className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-medium">View on Map</button>
                        </div>
                        
                        {/* Map Simulator */}
                        <div className="bg-zinc-100 dark:bg-zinc-900/50 rounded-lg p-6 flex flex-col items-center justify-center border border-zinc-200 dark:border-zinc-800 relative min-h-[160px] overflow-hidden">
                          {/* Radial glowing rings simulating radar search */}
                          <div className="absolute w-24 h-24 bg-brand-500/10 rounded-full animate-ping"></div>
                          <div className="absolute w-12 h-12 bg-brand-500/20 rounded-full animate-pulse"></div>
                          
                          <MapPin className="w-10 h-10 text-brand-600 dark:text-brand-500 relative z-10 animate-bounce" />
                          <div className="relative z-10 text-center mt-3 space-y-1">
                            <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Current Position</p>
                            <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Connaught Place, New Delhi</p>
                            <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-full mt-1.5">
                              Accuracy: 10m | Updated 1m ago
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Right Column: Top Apps, Device stats, Recent Photos */}
                    <div className="lg:col-span-4 space-y-6">
                      
                      {/* Top Social Media Usage times */}
                      <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                        <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Top Social Media Activity</h3>
                        <div className="space-y-3">
                          {[
                            { name: 'Instagram', duration: '1h 20m', pct: 60, color: 'bg-pink-500' },
                            { name: 'YouTube', duration: '45m', pct: 40, color: 'bg-red-500' },
                            { name: 'Facebook', duration: '30m', pct: 30, color: 'bg-blue-600' },
                            { name: 'Snapchat', duration: '25m', pct: 25, color: 'bg-amber-400' }
                          ].map((item, idx) => (
                            <div key={idx} className="space-y-1.5 text-xs">
                              <div className="flex justify-between font-medium">
                                <span className="text-zinc-800 dark:text-zinc-200">{item.name}</span>
                                <span className="text-zinc-500 dark:text-zinc-400">{item.duration}</span>
                              </div>
                              <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Device Stats Card */}
                      <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                        <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Device Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="flex items-center gap-2">
                            <Battery className="w-4 h-4 text-emerald-500" />
                            <div>
                              <p className="text-zinc-400 text-[10px]">Battery</p>
                              <p className="font-bold text-zinc-800 dark:text-zinc-200">78% (Charging)</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-brand-500" />
                            <div>
                              <p className="text-zinc-400 text-[10px]">Network</p>
                              <p className="font-bold text-zinc-800 dark:text-zinc-200">JIO 5G Wifi</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <HardDrive className="w-4 h-4 text-amber-500" />
                            <div>
                              <p className="text-zinc-400 text-[10px]">Storage</p>
                              <p className="font-bold text-zinc-800 dark:text-zinc-200">45 GB / 128 GB</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-indigo-500" />
                            <div>
                              <p className="text-zinc-400 text-[10px]">Memory (RAM)</p>
                              <p className="font-bold text-zinc-800 dark:text-zinc-200">2.8 GB / 6.0 GB</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Photos Grid */}
                      <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                          <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Recent Photos</h3>
                          <button onClick={() => setActiveTab('media')} className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-medium">View All</button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <img src="./recent_photo_1_1784263861240.png" alt="Board game" className="w-full h-20 object-cover rounded-lg" />
                          <img src="./recent_photo_2_1784263879949.png" alt="Bicycle park" className="w-full h-20 object-cover rounded-lg" />
                          <img src="./recent_photo_3_1784263894646.png" alt="Lake reflection" className="w-full h-20 object-cover rounded-lg" />
                          <img src="./recent_photo_4_1784263909010.png" alt="Sunset beach" className="w-full h-20 object-cover rounded-lg" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* 2. CALLS VIEW */}
              {activeTab === 'calls' && (
                <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
                    <div>
                      <h3 className="font-bold text-base text-zinc-950 dark:text-zinc-50">Call Logs Logbook</h3>
                      <p className="text-xs text-zinc-400">Total duration recorded: 14h 25m</p>
                    </div>
                    <button className="text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg font-semibold hover:bg-zinc-200 transition-colors">
                      Export CSV
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-500">
                          <th className="py-3 font-semibold">Contact / Phone</th>
                          <th className="py-3 font-semibold">Type</th>
                          <th className="py-3 font-semibold">Duration</th>
                          <th className="py-3 font-semibold">Timestamp</th>
                          <th className="py-3 font-semibold">Recording</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Rahul Kumar', phone: '+91 98765 43210', type: 'Incoming', time: '10:30 AM, 17 July 2026', dur: '4m 32s', rec: 'play' },
                          { name: 'Sneha Verma', phone: '+91 87654 32109', type: 'Missed', time: '09:15 AM, 17 July 2026', dur: '--', rec: null },
                          { name: 'Aman Singh', phone: '+91 65432 10987', type: 'Outgoing', time: '06:12 PM, 16 July 2026', dur: '12m 04s', rec: 'play' },
                          { name: 'Papa', phone: '+91 54321 09876', type: 'Incoming', time: '04:10 PM, 16 July 2026', dur: '1m 15s', rec: 'play' }
                        ].map((call, idx) => (
                          <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                            <td className="py-3 font-bold">
                              <div>{call.name}</div>
                              <div className="text-[10px] text-zinc-400 font-normal">{call.phone}</div>
                            </td>
                            <td className="py-3">
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                                call.type === 'Incoming' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                call.type === 'Missed' ? 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400' :
                                'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300'
                              }`}>
                                {call.type}
                              </span>
                            </td>
                            <td className="py-3 text-zinc-600 dark:text-zinc-400 font-medium">{call.dur}</td>
                            <td className="py-3 text-zinc-500">{call.time}</td>
                            <td className="py-3">
                              {call.rec ? (
                                <button className="flex items-center gap-1 text-[10px] text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-2 py-1 rounded-md font-bold">
                                  <Play className="w-3 h-3 fill-brand-600" /> Listen
                                </button>
                              ) : '--'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* 3. MESSAGES VIEW */}
              {activeTab === 'messages' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column: Chat Threads */}
                  <div className="lg:col-span-4 bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm space-y-4">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Conversations</h3>
                    <div className="space-y-2">
                      {[
                        { name: 'Best Friends Group', type: 'WhatsApp', msg: 'Let\'s meet tomorrow 🌟', unread: true },
                        { name: 'Riya Sharma', type: 'WhatsApp', msg: 'Sent a Photo', unread: true },
                        { name: 'Rahul Kumar', type: 'SMS', msg: 'Did you check the task?', unread: false },
                        { name: 'Sneha Verma', type: 'Instagram', msg: 'Post shared with you', unread: false }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 bg-zinc-50 dark:bg-[#09090b] rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-brand-500 cursor-pointer flex justify-between items-center transition-all">
                          <div>
                            <div className="font-bold text-xs text-zinc-950 dark:text-zinc-50">{item.name}</div>
                            <div className="text-[10px] text-zinc-400 truncate max-w-[140px]">{item.msg}</div>
                          </div>
                          <div className="text-right">
                            <span className="text-[9px] bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-400 px-1.5 py-0.5 rounded font-bold">{item.type}</span>
                            {item.unread && (
                              <div className="w-2 h-2 bg-brand-600 rounded-full mt-1.5 ml-auto"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Open Chat Screen */}
                  <div className="lg:col-span-8 bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm flex flex-col justify-between min-h-[400px]">
                    
                    {/* Chat Header */}
                    <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                      <div>
                        <h4 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Best Friends Group</h4>
                        <p className="text-[10px] text-zinc-400">WhatsApp | 5 participants</p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Active Sync</span>
                    </div>

                    {/* Chat Feed */}
                    <div className="flex-1 py-4 space-y-3.5 overflow-y-auto">
                      {[
                        { sender: 'Riya Sharma', text: 'Hey guys, did you prepare for tomorrow\'s math test?', time: '10:15 AM' },
                        { sender: 'Arjun Verma', text: 'I am practicing chapter 5 right now.', time: '10:18 AM' },
                        { sender: 'Riya Sharma', text: 'Let\'s meet tomorrow 🌟', time: '10:20 AM' }
                      ].map((chat, idx) => (
                        <div key={idx} className="bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 p-3 rounded-lg max-w-sm space-y-1">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold text-brand-600">{chat.sender}</span>
                            <span className="text-zinc-400">{chat.time}</span>
                          </div>
                          <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed">{chat.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Send simulated reply from parent device option */}
                    <div className="flex items-center gap-2 border-t border-zinc-100 dark:border-zinc-800 pt-3">
                      <input 
                        type="text" 
                        placeholder="Send remote command message..." 
                        disabled
                        className="flex-1 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-xs focus:outline-none text-zinc-400 italic"
                      />
                      <button disabled className="bg-zinc-200 dark:bg-zinc-800 text-zinc-400 p-2 rounded-lg cursor-not-allowed">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              )}

              {/* 4. LOCATION VIEW */}
              {activeTab === 'location' && (
                <div className="space-y-6">
                  
                  {/* Google Map Simulator */}
                  <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                    <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-3">
                      <div>
                        <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">GPS Live Tracker</h3>
                        <p className="text-xs text-zinc-400">Current active device session: Redmi Note 12</p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Accuracy: 10m</span>
                    </div>

                    {/* Large Visual Map Simulator */}
                    <div className="h-96 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl relative overflow-hidden flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                      
                      {/* Grid representation to look like a map */}
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
                        {[...Array(36)].map((_, i) => (
                          <div key={i} className="border border-zinc-400 dark:border-zinc-600"></div>
                        ))}
                      </div>

                      {/* Floating address details on map */}
                      <div className="absolute top-4 left-4 bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-lg shadow-lg z-20 space-y-1">
                        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-50">📍 Connaught Place, New Delhi</div>
                        <div className="text-[10px] text-zinc-500">Speed: 0 km/h (Stopped)</div>
                        <div className="text-[10px] text-zinc-500">Last Sync: 1 min ago</div>
                      </div>

                      {/* Map Pins with Pulsing rings */}
                      <div className="relative flex flex-col items-center">
                        <div className="absolute w-24 h-24 bg-brand-500/10 rounded-full animate-ping"></div>
                        <div className="absolute w-12 h-12 bg-brand-500/20 rounded-full animate-pulse"></div>
                        <MapPin className="w-12 h-12 text-brand-600 dark:text-brand-500 relative z-10 animate-bounce" />
                        <span className="bg-brand-600 text-white font-bold text-[9px] px-2 py-0.5 rounded-full shadow mt-2 relative z-10">Child\'s Device</span>
                      </div>

                    </div>
                  </div>

                  {/* Geofence Rules Settings list */}
                  <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                    <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-3">
                      <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Geofence Boundaries</h3>
                      <button className="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-bold">
                        Add Geofence
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { name: 'Home Zone', radius: '200m', type: 'Safe Zone (Notify on exit)', active: true },
                        { name: 'Modern School Complex', radius: '500m', type: 'Safe Zone (Notify on arrival/exit)', active: true },
                        { name: 'Gaming Parlour Area', radius: '100m', type: 'Danger Zone (Notify on entry)', active: false }
                      ].map((fence, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg">
                          <div>
                            <div className="text-xs font-bold text-zinc-900 dark:text-zinc-50">{fence.name}</div>
                            <div className="text-[10px] text-zinc-400">Radius: {fence.radius} | {fence.type}</div>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            fence.active ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-200 text-zinc-600'
                          }`}>
                            {fence.active ? 'Active' : 'Disabled'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* 5. BROWSER HISTORY VIEW */}
              {activeTab === 'browser' && (
                <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                  <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-3">
                    <div>
                      <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Browser History Logs</h3>
                      <p className="text-xs text-zinc-400">Monitors Incognito & Standard search queries</p>
                    </div>
                    <button className="text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg font-semibold hover:bg-zinc-200">
                      Export CSV
                    </button>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { url: 'www.google.com/search?q=math+trigonometry+notes', type: 'Google Search', time: '10:15 AM' },
                      { url: 'www.youtube.com/watch?v=trig_identities', type: 'YouTube', time: '09:50 AM' },
                      { url: 'www.wikipedia.org/wiki/Trigonometry', type: 'Wikipedia', time: '09:20 AM' },
                      { url: 'www.instagram.com/p/Co-xyz', type: 'Social Media', time: 'Yesterday' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs py-2 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                        <div>
                          <div className="font-bold text-zinc-950 dark:text-zinc-50">{item.url}</div>
                          <div className="text-[10px] text-zinc-400">{item.type}</div>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. MEDIA GALLERY VIEW */}
              {activeTab === 'media' && (
                <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                  <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Photos & Videos Storage</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { img: './recent_photo_1_1784263861240.png', name: 'Board game family', time: '10:30 AM' },
                      { img: './recent_photo_2_1784263879949.png', name: 'Bicycle park ride', time: '09:15 AM' },
                      { img: './recent_photo_3_1784263894646.png', name: 'Mountain scenery', time: 'Yesterday' },
                      { img: './recent_photo_4_1784263909010.png', name: 'Sunset beach splash', time: 'Yesterday' }
                    ].map((photo, idx) => (
                      <div key={idx} className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden space-y-2">
                        <img src={photo.img} alt={photo.name} className="w-full h-32 object-cover" />
                        <div className="p-2 text-[10px]">
                          <div className="font-bold text-zinc-950 dark:text-zinc-50 truncate">{photo.name}</div>
                          <div className="text-zinc-400">{photo.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. APP ACTIVITY VIEW */}
              {activeTab === 'apps' && (
                <div className="space-y-6">
                  
                  {/* Screen Time breakdown card */}
                  <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">App Wise Screen Usage</h3>
                    
                    <div className="space-y-4">
                      {[
                        { name: 'Instagram', time: '1h 20m', color: 'bg-pink-500', limit: '2h limit set' },
                        { name: 'YouTube', time: '45m', color: 'bg-red-500', limit: '1h limit set' },
                        { name: 'WhatsApp', time: '35m', color: 'bg-emerald-500', limit: 'No Limit' },
                        { name: 'Subway Surfers', time: '30m', color: 'bg-amber-500', limit: '45m limit set' }
                      ].map((app, idx) => (
                        <div key={idx} className="space-y-1.5 text-xs">
                          <div className="flex justify-between font-bold">
                            <span className="text-zinc-900 dark:text-zinc-200">{app.name}</span>
                            <span className="text-zinc-500">{app.time} <span className="text-[10px] text-zinc-400">({app.limit})</span></span>
                          </div>
                          <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <div className={`h-full ${app.color} rounded-full`} style={{ width: app.name === 'Instagram' ? '70%' : app.name === 'YouTube' ? '45%' : app.name === 'WhatsApp' ? '30%' : '60%' }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* App Locks and Settings control */}
                  <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">App Blocking Control</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Tinder', category: 'Social/Dating', status: 'Blocked' },
                        { name: 'Discord', category: 'Chat/Gaming', status: 'Allowed' },
                        { name: 'Free Fire', category: 'Action Game', status: 'Blocked' }
                      ].map((app, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg">
                          <div>
                            <div className="text-xs font-bold text-zinc-900 dark:text-zinc-50">{app.name}</div>
                            <div className="text-[10px] text-zinc-400">{app.category}</div>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            app.status === 'Blocked' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {app.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* 8. KEYLOGGER VIEW */}
              {activeTab === 'keylogger' && (
                <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                  <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-3">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Keystroke Records</h3>
                    <span className="bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-400 text-[10px] font-bold px-2 py-0.5 rounded">Real-time capturing</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { app: 'WhatsApp', text: 'Hey guys let\'s meet tomorrow at the park', time: '10:20 AM' },
                      { app: 'Google Chrome', text: 'math trigonometry trigonometry formulas notes standard 10th', time: '10:15 AM' },
                      { app: 'Instagram', text: 'nice photo check dm', time: '09:44 AM' }
                    ].map((log, idx) => (
                      <div key={idx} className="p-3 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-brand-600">{log.app}</span>
                          <span className="text-zinc-400">{log.time}</span>
                        </div>
                        <p className="text-xs text-zinc-800 dark:text-zinc-200 font-mono bg-zinc-100 dark:bg-zinc-900 p-2 rounded border border-zinc-200 dark:border-zinc-800">
                          {log.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 9. ALERTS VIEW */}
              {activeTab === 'alerts' && (
                <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                  <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-3">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50">Critical Device & Activity Alerts</h3>
                    
                    {/* Alert filtering tabs */}
                    <div className="flex gap-2 text-xs">
                      {['all', 'critical', 'info'].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setAlertFilter(filter)}
                          className={`px-3 py-1 rounded-md font-medium uppercase text-[10px] ${
                            alertFilter === filter 
                              ? 'bg-brand-600 text-white' 
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: 'Low Battery Alert', desc: 'Child\'s device Redmi Note 12 battery is low: 15%', type: 'critical', time: '10 min ago' },
                      { title: 'New App Installed', desc: 'App "Subway Surfers" was installed from Play Store.', type: 'info', time: '1 hour ago' },
                      { title: 'Geofence Boundary Exited', desc: 'Redmi Note 12 exited boundary "Modern School Complex".', type: 'critical', time: '2 hours ago' },
                      { title: 'Phone Restarted', desc: 'Redmi Note 12 was rebooted successfully.', type: 'info', time: 'Yesterday' }
                    ]
                      .filter(alert => alertFilter === 'all' ? true : alert.type === alertFilter)
                      .map((alert, idx) => (
                        <div key={idx} className={`p-3 rounded-lg border flex gap-3 items-start ${
                          alert.type === 'critical' 
                            ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/30 text-rose-800 dark:text-rose-300' 
                            : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/30 text-blue-800 dark:text-blue-300'
                        }`}>
                          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 space-y-1">
                            <div className="flex justify-between items-center text-xs font-bold">
                              <span>{alert.title}</span>
                              <span className="text-[10px] font-normal text-zinc-400">{alert.time}</span>
                            </div>
                            <p className="text-xs leading-relaxed">{alert.desc}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* 10. REMOTE COMMANDS VIEW */}
              {activeTab === 'remote' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column: Command list */}
                  <div className="lg:col-span-8 bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Execute Device Command</h3>
                    
                    {isRinging && (
                      <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 text-emerald-800 dark:text-emerald-300 p-3.5 rounded-lg text-xs font-bold animate-pulse">
                        🔔 Command Executed: Ringing child\'s device Redmi Note 12...
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: 'Ring Device', desc: 'Play loud ringtone on target device even if it is on silent mode.' },
                        { name: 'Lock Device', desc: 'Instantly lock target screen requiring passcode.' },
                        { name: 'Locate Device', desc: 'Trigger high precision GPS locating query.' },
                        { name: 'Clear Cache', desc: 'Clear log caches on parentshield agent app.' }
                      ].map((cmd, idx) => (
                        <div key={idx} className="p-4 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg flex flex-col justify-between space-y-3">
                          <div>
                            <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-50">{cmd.name}</h4>
                            <p className="text-[10px] text-zinc-500 leading-relaxed mt-1">{cmd.desc}</p>
                          </div>
                          <button 
                            onClick={() => runCommand(cmd.name)}
                            className="bg-brand-600 hover:bg-brand-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-md self-start"
                          >
                            Send Command
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Execution History logs */}
                  <div className="lg:col-span-4 bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Command Logs</h3>
                    
                    <div className="space-y-3">
                      {remoteLogs.map((log) => (
                        <div key={log.id} className="p-3 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-lg flex justify-between items-center text-xs">
                          <div>
                            <div className="font-bold text-zinc-900 dark:text-zinc-50">{log.action}</div>
                            <div className="text-[10px] text-zinc-400">{log.time}</div>
                          </div>
                          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded">
                            {log.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* 11. BILLING & SUBSCRIPTIONS VIEW */}
              {activeTab === 'billing' && (
                <div className="space-y-6">
                  
                  {/* Active subscription card */}
                  <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2">
                      <span className="bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-400 text-[10px] font-bold px-2 py-0.5 rounded">Active Plan</span>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">Premium Plan (Monthly subscription)</h3>
                      <p className="text-xs text-zinc-500">Next renewal date: August 17, 2026 for ₹5,500</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        Cancel Subscription
                      </button>
                      <button className="text-xs bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg font-bold shadow transition-all">
                        Upgrade Plan
                      </button>
                    </div>
                  </div>

                  {/* Payment Invoices table */}
                  <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm space-y-4">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Billing History & Invoices</h3>
                    
                    <div className="space-y-3">
                      {[
                        { invoice: '#INV-4921', date: 'July 17, 2026', amount: '₹5,500', status: 'Paid' },
                        { invoice: '#INV-3829', date: 'June 17, 2026', amount: '₹5,500', status: 'Paid' }
                      ].map((inv, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs py-2.5 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                          <div>
                            <div className="font-bold text-zinc-900 dark:text-zinc-50">{inv.invoice}</div>
                            <div className="text-[10px] text-zinc-400">Issued on: {inv.date}</div>
                          </div>
                          <div className="text-right flex items-center gap-4">
                            <span className="font-bold text-zinc-900 dark:text-zinc-50">{inv.amount}</span>
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">{inv.status}</span>
                            <button className="text-[10px] text-brand-600 hover:underline">Download PDF</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* 12. ACCOUNT SETTINGS VIEW */}
              {activeTab === 'settings' && (
                <div className="bg-white dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm space-y-6 max-w-2xl">
                  
                  <div>
                    <h3 className="font-bold text-base text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Account Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-500">Parent Full Name</label>
                        <input type="text" defaultValue="John Doe" className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-900 dark:text-zinc-50 focus:outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-500">Email Address</label>
                        <input type="email" defaultValue="john.doe@example.com" disabled className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-500 cursor-not-allowed" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-zinc-950 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">Notification Options</h3>
                    <div className="space-y-3 pt-4 text-xs font-medium">
                      {[
                        { title: 'Low battery triggers', desc: 'Send email notification if battery falls below 15%' },
                        { title: 'Geofence Exit warnings', desc: 'Push alert to this dashboard instantly' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <div>
                            <p className="text-zinc-800 dark:text-zinc-200">{item.title}</p>
                            <p className="text-[10px] text-zinc-400 font-normal">{item.desc}</p>
                          </div>
                          <div className="w-9 h-5 bg-brand-600 rounded-full p-0.5 cursor-pointer flex justify-end">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>

          </main>

        </div>
      )}

    </div>
  );
}
