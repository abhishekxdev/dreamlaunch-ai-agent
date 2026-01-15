'use client';

import { ChevronDown, ArrowRight, Sparkles, Settings, Cpu, ShieldCheck, Menu, X, Factory, Coins, Truck, Users, Check } from 'lucide-react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white transform rotate-45"></div>
              </div>
              <span className="text-xl font-semibold text-black leading-tight">
             Dream<br/>Launch
              </span>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-8 text-sm text-gray-600">
              <button className="flex items-center gap-1 hover:text-black transition">
                Use Cases <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-black transition">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="hover:text-black transition">Why Us</a>
              <a href="#" className="hover:text-black transition">Pricing</a>
              <a href="#" className="hover:text-black transition">Blog ↗</a>
              <a href="#" className="hover:text-black transition">Docs ↗</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="hidden sm:block text-sm text-gray-600 hover:text-black transition">Login</a>
              <button className="hidden sm:block bg-black text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                Get a demo
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-6 border-t border-gray-200 mt-4">
              <div className="flex flex-col gap-4">
                <button className="flex items-center gap-1 text-gray-600 hover:text-black transition text-left">
                  Use Cases <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-black transition text-left">
                  Solutions <ChevronDown className="w-4 h-4" />
                </button>
                <a href="#" className="text-gray-600 hover:text-black transition">Why Basis Theory</a>
                <a href="#" className="text-gray-600 hover:text-black transition">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-black transition">Blog ↗</a>
                <a href="#" className="text-gray-600 hover:text-black transition">Docs ↗</a>
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  <a href="#" className="text-gray-600 hover:text-black transition">Login</a>
                  <button className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition w-full">
                    Get a demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-[1.1] mb-4 sm:mb-6`}>
              <div className="whitespace-nowrap animate-fade-in-up">We Build AI Agents</div>
              <div className="whitespace-nowrap animate-fade-in-up delay-100">That Enterprises Can</div>
              <div className="whitespace-nowrap animate-fade-in-up delay-200">Actually Deploy</div>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up delay-300">
              Launch intelligent co-pilots that streamline operations across manufacturing, finance, and logistics — without compromising compliance or transparency.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="flex items-center gap-2 animate-fade-in-up delay-400">
                <div className="w-5 h-5 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Explainable AI</span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-up delay-400">
                <div className="w-5 h-5 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <Settings className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Process Automation</span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-up delay-500">
                <div className="w-5 h-5 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Industry 4.0</span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in-up delay-500">
                <div className="w-5 h-5 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Compliance-First</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-600">
              <button className="bg-cyan-300 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl text-sm font-medium transition flex items-center justify-center gap-2 w-full sm:w-auto">
                Request a demo <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-black px-6 py-3 rounded-xl text-sm font-medium border border-gray-200 transition w-full sm:w-auto">
                Start implementing
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] order-1 lg:order-2 animate-scale-in delay-200">
            <Image
              src="/heroai.png"
              alt="Hero AI Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-zinc-900 py-8 sm:py-10">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Left Text */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm sm:text-base">
                  Innovative enterprises build with
                </p>
                <p className="text-white text-sm sm:text-base font-semibold">
                  the Dream Launch AI Platform
                </p>
              </div>

              {/* Right Logos */}
              <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 flex-wrap justify-center">
                <div className="text-white text-xl sm:text-2xl font-bold tracking-tight">Siemens</div>
                <div className="text-white text-xl sm:text-2xl font-bold tracking-tight">Boeing</div>
                <div className="text-white text-xl sm:text-2xl font-bold tracking-tight">Caterpillar</div>
                <div className="text-white text-xl sm:text-2xl font-bold tracking-tight">3M</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className={`${inter.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-black mb-12 sm:mb-16`}>
              Never miss an insight
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
              <div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  An enterprise-grade AI platform can integrate into<br/> any operational workflow without disrupting business.
                </p>
              </div>
              <div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Whether analyzing production data, optimizing supply chains, or automating financial processes, you can deploy intelligent agents that deliver actionable insights—while staying compliant with <span className="font-semibold text-gray-700">SOC 2, ISO 27001, GDPR,</span> and <span className="font-semibold text-gray-700">industry-specific</span> regulations.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Category Pills */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-gray-700">
                <Factory className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium">Manufacturing</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-gray-500">
                <Coins className="w-4 h-4" />
                <span className="text-sm font-medium">Finance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-gray-500">
                <Truck className="w-4 h-4" />
                <span className="text-sm font-medium">Logistics</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-gray-500">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Healthcare</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Feature 1 - Predictive Analytics */}
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 sm:mb-32 lg:mb-40">
            <div>
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mb-6">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Predictive Analytics</span>
              </div>

              <h3 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-8 leading-tight`}>
                Increase operational efficiency and reduce downtime by forecasting issues before they occur.
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Machine learning models trained on your data</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Real-time anomaly detection and alerts</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Automated recommendations for process optimization</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/card1.png"
                alt="Predictive Analytics Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          </ScrollReveal>

          {/* Feature 2 - Process Automation */}
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 sm:mb-32 lg:mb-40">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/card2.jpg"
                alt="Workflow Automation"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mb-6">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Automation</span>
              </div>

              <h3 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-8 leading-tight`}>
                Streamline workflows with intelligent automation, reducing manual tasks by up to 80%.
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Automate repetitive processes across departments</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Intelligent document processing and classification</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Built-in compliance checks at every step</span>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Feature 3 - Integration */}
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 sm:mb-32 lg:mb-40">
            <div>
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mb-6">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Integration</span>
              </div>

              <h3 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-8 leading-tight`}>
                Deploy seamlessly. Connect with your existing tech stack without disruption.
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Pre-built connectors for major ERP and CRM systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">API-first architecture for custom integrations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Zero downtime deployment with rollback capabilities</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">integrations.config.ts</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-gray-500">1</div>
                  <div className="text-gray-400">2  <span className="text-purple-400">import</span> <span className="text-white">connect</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;@dreamlaunch/integrations&apos;</span></div>
                  <div className="text-gray-500">3</div>
                  <div className="text-gray-400">4  <span className="text-purple-400">const</span> <span className="text-white">systems</span> = <span className="text-blue-400">connect</span>.<span className="text-yellow-300">multi</span>&#40;&#91;</div>
                  <div className="text-gray-400">5    &#123; <span className="text-white">name</span>: <span className="text-green-400">&apos;SAP&apos;</span>, <span className="text-white">version</span>: <span className="text-green-400">&apos;S/4HANA&apos;</span> &#125;,</div>
                  <div className="text-gray-400">6    &#123; <span className="text-white">name</span>: <span className="text-green-400">&apos;Salesforce&apos;</span>, <span className="text-white">type</span>: <span className="text-green-400">&apos;CRM&apos;</span> &#125;,</div>
                  <div className="text-gray-400">7    &#123; <span className="text-white">name</span>: <span className="text-green-400">&apos;Azure&apos;</span>, <span className="text-white">cloud</span>: <span className="text-orange-400">true</span> &#125;</div>
                  <div className="text-gray-400">8  &#93;&#41;;</div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Feature 4 - Security */}
          <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">security-config.ts</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-gray-500">1</div>
                  <div className="text-gray-400">2  <span className="text-purple-400">import</span> <span className="text-white">security</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;@dreamlaunch/secure&apos;</span></div>
                  <div className="text-gray-500">3</div>
                  <div className="text-gray-400">4  <span className="text-white">security</span>.<span className="text-yellow-300">configure</span>&#40;&#123;</div>
                  <div className="text-gray-400">5    <span className="text-white">encryption</span>: <span className="text-green-400">&apos;AES-256&apos;</span>,</div>
                  <div className="text-gray-400">6    <span className="text-white">compliance</span>: &#91;<span className="text-green-400">&apos;SOC2&apos;</span>, <span className="text-green-400">&apos;ISO27001&apos;</span>, <span className="text-green-400">&apos;GDPR&apos;</span>&#93;,</div>
                  <div className="text-gray-400">7    <span className="text-white">auditLog</span>: <span className="text-orange-400">true</span></div>
                  <div className="text-gray-400">8  &#125;&#41;;</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mb-6">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Security & Compliance</span>
              </div>

              <h3 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-8 leading-tight`}>
                Enterprise-grade security that meets the strictest regulatory requirements.
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">End-to-end encryption for all data in transit and at rest</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Comprehensive audit trails for full transparency</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600" />
                  </div>
                  <span className="text-gray-700">Regular penetration testing and security assessments</span>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-zinc-900 py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
          <blockquote className="text-xl sm:text-2xl lg:text-3xl text-gray-400 leading-relaxed mb-8">
            &quot;We needed a solution that we could <span className="text-white font-medium">implement quickly</span> and was <span className="text-white font-medium">not super operationally heavy</span>. It was clear to me that <span className="text-white font-medium">Dream Launch was what we needed</span> and I&apos;d be hard-pressed to think there&apos;s something more relevant to what we were trying to solve—which was to <span className="text-white font-medium">deploy AI with full transparency</span>.&quot;
          </blockquote>

          <div className="text-white font-medium mb-1">Sarah Mitchell</div>
          <div className="text-gray-400 text-sm">VP of Operations @ Precision Manufacturing</div>
        </div>
        </ScrollReveal>
      </section>

      {/* Developer Section */}
      <section className="bg-zinc-900 pb-16 sm:pb-20 lg:pb-24">
        <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-zinc-800 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Developer-First</span>
                </div>

                <h3 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight`}>
                  Deploying an AI agent platform
                </h3>

                <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                  Explore our APIs, SDKs, and docs to start building in minutes.
                </p>

                <button className="bg-cyan-300 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg text-sm font-medium transition flex items-center gap-2">
                  Developer Docs <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-lg"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64">
                    <div className="w-full h-full bg-zinc-700 rounded-lg transform rotate-45 flex items-center justify-center shadow-2xl">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 bg-cyan-400 rounded-lg -rotate-45 flex items-center justify-center">
                        <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-900" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Icons */}
                <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-8">
                  <div className="bg-zinc-700/50 rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Settings className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-gray-400">REST APIs</div>
                  </div>

                  <div className="bg-zinc-700/50 rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <ShieldCheck className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-gray-400">Secure SDK</div>
                  </div>

                  <div className="bg-zinc-700/50 rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-gray-400">AI Models</div>
                  </div>

                  <div className="bg-zinc-700/50 rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-gray-400">Webhooks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Security & Compliance Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="text-center mb-12 sm:mb-16">
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
                Built for developers, loved by security teams.
              </div>

              <h2 className={`${inter.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-6 leading-tight`}>
                Security and compliance<br />are built into our DNA
              </h2>

              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our AI agent platform is engineered with a security-first mindset, ensuring that every deployment is fortified with enterprise-grade protection and regulatory compliance from day one.
              </p>
            </div>

            {/* Compliance Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* PCI Card */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-gray-200 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-1">PCI</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Level 1</p>
              </div>

              {/* SOC 2 Card */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-gray-200 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-1">SOC 2</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Type II</p>
              </div>

              {/* HIPAA Card */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-gray-200 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-1">HIPAA</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Compliant</p>
              </div>

              {/* ISO Card */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-gray-200 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-300 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-1">ISO</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">27001</p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-700/10 to-transparent"></div>

            <div className="relative px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-white flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black transform rotate-45"></div>
                </div>
                <span className="text-xl font-semibold text-white leading-tight">
                  Dream<br/>Launch
                </span>
              </div>

              {/* Heading */}
              <h2 className={`${inter.className} text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight max-w-3xl`}>
                Deploy AI agents that enterprises trust.
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                Jump out to an early lead. Build, iterate, and scale intelligent automation faster than the competition.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-300 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2">
                  Talk to an expert <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-lg text-sm font-medium border border-white/20 hover:border-white/40 transition">
                  Get started for free
                </button>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 sm:py-16">
        <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white transform rotate-45"></div>
                </div>
                <span className="text-xl font-semibold text-black leading-tight">
                  Dream<br/>Launch
                </span>
              </div>
              <div className="inline-block bg-gradient-to-br from-amber-400 to-amber-500 rounded-full px-4 py-2 shadow-md">
                <span className="text-xs font-bold text-black uppercase tracking-wide">Top AI 2026</span>
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Use Cases</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition">Manufacturing</a></li>
                <li><a href="#" className="hover:text-black transition">Finance</a></li>
                <li><a href="#" className="hover:text-black transition">Logistics</a></li>
                <li><a href="#" className="hover:text-black transition">Healthcare</a></li>
                <li><a href="#" className="hover:text-black transition">Supply Chain</a></li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Developers</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition">Getting Started</a></li>
                <li><a href="#" className="hover:text-black transition">Documentation</a></li>
                <li><a href="#" className="hover:text-black transition">API Reference</a></li>
                <li><a href="#" className="hover:text-black transition">Github</a></li>
                <li><a href="#" className="hover:text-black transition">System Status</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Dream Launch</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition">Why Dream Launch?</a></li>
                <li><a href="#" className="hover:text-black transition">Add-Ons</a></li>
                <li><a href="#" className="hover:text-black transition">Pricing</a></li>
                <li><a href="#" className="hover:text-black transition">Contact</a></li>
                <li><a href="#" className="hover:text-black transition">Security</a></li>
                <li><a href="#" className="hover:text-black transition">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black transition">Master Services Agreement</a></li>
                <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-black transition">Cookie Settings</a></li>
              </ul>
            </div>

            {/* Compliance */}
            <div>
              <h3 className="text-sm font-semibold text-black mb-4">Compliance</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition">HIPAA Compliant</a></li>
                <li><a href="#" className="hover:text-black transition">PCI Level 1</a></li>
                <li><a href="#" className="hover:text-black transition">SOC 2 Type II</a></li>
                <li><a href="#" className="hover:text-black transition">ISO 27001</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2026 Dream Launch. All rights reserved.
            </p>
          </div>
        </div>
        </ScrollReveal>
      </footer>
    </div>
  );
}
