"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Tryanyofourtools from '../../../components/includes/Tryanyofourtools';
import { ChevronDown } from 'lucide-react';  
interface Tool {
  name: string;
  icon: React.ReactNode;
  link: string;
}
export default function GitKrakenAI() {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-md uppercase font-semibold text-white-400 mb-2">
          GitKraken AI
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Meet the AI built to assist you—
          <br className="hidden md:block" />
          not replace you
        </h1>
        <p className="text-gray-400 mb-4">
          Say goodbye to tedious, repetitive Git tasks. GitKraken AI integrates
          directly into your workflows to help you move<br/> from idea to commit, and
          from PR to merge—faster and with less friction.
        </p>
        <p className="italic text-sm text-gray-400 mb-6">
          For detailed feature availability by plan, see our{' '}
          <Link href="/pricing">
            <span className="text-purple-400 underline hover:text-purple-300">
              pricing page
            </span>
          </Link>.
        </p>
          <Tryanyofourtools/>
     </div>
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center">
    {/* Left: Feature Text */}
  <div>
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      What's New: Advanced AI Capabilities </h3>
    <div className="bg-[#1A1A1A] rounded-lg p-6">
      <h4 className="font-semibold text-white mb-4">
        AI-Powered Merge Conflict Resolution </h4>
      <ul className="list-disc pl-6 text-gray-300 space-y-2">
        <li> Automatically resolve merge conflicts with AI-suggested solutions</li>
        <li> Get explanations and confidence levels for each conflict resolution </li>
        <li>Handle complex conflicts faster with intelligent assistance</li>
      </ul>
      <Link href="#">
        <p className="mt-4 text-sm text-purple-400 underline hover:text-purple-300">
          Check out the release notes for full details.
        </p>
      </Link>
    </div>
  </div>
  {/* Right: Image */}
  <div className="flex justify-center">
    <Image
      src="/images/logos/AI1.png" 
      alt="AI Merge Conflict Resolution Screenshot"
      width={600}
      height={400}
      className="rounded-lg object-contain" />
  </div>  
</div>
      {/* Commit Composer Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Commit Composer</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Organize your changes into logical, cohesive commits automatically</li>
            <li>Generate meaningful commit messages that tell clear stories</li>
            <li>Transform messy work-in-progress into clean, reviewable history</li>
          </ul>
          <Link href="#">
            <p className="mt-4 text-purple-400 underline hover:text-purple-300">
              Read more about how to use this feature on the Commit Composer Discussion.
            </p>
          </Link>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logos/AI5.png"  
            alt="Commit Composer Feature"
            width={600}
            height={400}
            className="rounded-lg object-contain"/>
        </div>
      </div>
      {/* Code Explanations Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Comprehensive code explanations</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Explain commits, branches, stashes, and working changes</li>
            <li>Understand what changed across entire branches or your current work</li>
            <li>Get AI-powered insights directly in your workflow</li>
          </ul>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logos/AI2.png"  
            alt="Comprehensive Code Explanations"
            width={600}
            height={400}
            className="rounded-lg object-contain"/>
        </div>
      </div>
      {/* Enhanced Content Generation Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Enhanced content generation</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Generate commit messages, stash messages, and PR titles/descriptions</li>
            <li>Create changelogs automatically from your commits</li>
            <li>Amend commit messages with AI assistance</li>
            <li>Generate content that adheres to your PR templates</li>
          </ul>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logos/AI3.png"  
            alt="Enhanced Content Generation"
            width={600}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>
      </div>  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
             {/* Text Left */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">
            Model Context Protocol (MCP) Integration
          </h2>
          <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
            <li>Connect GitKraken CLI to any AI agent (GitHub Copilot, Cursor, Windsurf, Claude)</li>
            <li> Surface real-time code insights and repository data directly in your AI tools</li>
            <li> Enable agentic workflows for PR management, issue tracking, and team collaboration</li>
            <li>Ask AI agents about your codebase, find subject matter experts, and <br/> automate repository maintenance</li>
          </ul>
          <Link
            href="#"
            className="inline-block mt-4 text-sm font-semibold text-[#a874ff] hover:underline">
            Read the blog post for workflow examples.
          </Link>
        </div>
        {/* Image Right */}
        <div className="flex-1 w-full">
          <Image
            src="/images/logos/AI4.png" 
            alt="GitKraken MCP"
            width={600}
            height={400}
            className="rounded-lg object-contain"          />
        </div>
      </div>      
<div className="max-w-4xl mx-auto text-center mt-10">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    Smarter AI, built into the tools you already use
  </h2>
  <p className="text-gray-400 leading-relaxed">
    No new tabs. No context switching. GitKraken AI lives inside the tools you rely on every day—
    GitKraken Desktop, GitLens, and GitKraken CLI—so you can stay focused and in flow.
    Whether you’re writing commits, reviewing PRs, or resolving conflicts, GitKraken AI is right
    there with you—making Git workflows faster, easier, and more intuitive.
  </p>
</div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    <div>
    <h3 className="text-xl md:text-2xl font-bold mb-4">
      Expanded AI provider support
    </h3>
    <p className="text-gray-400 mb-4">
      Choose from multiple AI providers and models:
    </p>
    <ul className="list-disc pl-6 text-gray-300 space-y-2">
      <li><span className="font-semibold text-white">OpenAI:</span> GPT-4.1, GPT-4.1-mini, GPT-4.1 nano, o3, o4 mini models</li>
      <li><span className="font-semibold text-white">Google Gemini:</span> Gemini 2.0 Flash, Gemini 2.5 Pro preview</li>
      <li><span className="font-semibold text-white">Anthropic Claude:</span> Claude 4 Opus and Claude 4 Sonnet</li>
      <li><span className="font-semibold text-white">Azure AI:</span> Self-hosted models for enterprise security</li>
      <li><span className="font-semibold text-white">Mistral Models:</span> Additional options for diverse use cases</li>
      <li><span className="font-semibold text-white">Ollama:</span> Local model support for privacy-focused teams</li>
      <li><span className="font-semibold text-white">OpenRouter:</span> Access to various model providers</li>
      <li><span className="font-semibold text-white">Custom APIs:</span> OpenAI-compatible endpoints for specialized setups</li>
    </ul>
  </div>
  <div className="flex justify-center">
    <Image
      src="/images/logos/AI6.png" 
      alt="AI Providers Logos"
      width={500}
      height={400}
      className="rounded-lg object-contain"/>
  </div>
</div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
   <div>
    <h3 className="text-xl md:text-2xl font-bold mb-4">
      Built-in AI usage that scales with your team
    </h3>
    <p className="text-gray-400 mb-4">
      Unlike generic coding assistants, GitKraken AI is built to support how real teams work.
      AI is structured into your Git workflows—visible, predictable, and manageable.
    </p>
    <ul className="list-disc pl-6 text-gray-300 space-y-2">
      <li>Weekly AI token allowances are built into every paid plan (250K–1M tokens)</li>
      <li>Advanced security controls for organizations to manage AI provider access</li>
      <li>Enforceable AI usage policies help teams maintain control</li>
      <li>Bring your own API keys for user-level or organization-level control</li>
      <li>No hidden magic—just AI you can trust and understand</li>
    </ul>
  </div>

  <div className="flex justify-center">
    <Image
      src="/images/logos/AI7.png"  
      alt="AI Usage Scaling Chart"
      width={500}
      height={400}
      className="rounded-lg object-contain" />
  </div>
</div>
 <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">      
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Save time, reduce toil, and stay in control
          </h3>
          <p className="text-gray-400 mb-4">
            GitKraken AI helps you write better commits, review code faster, and avoid common Git pitfalls.
            It’s like a co-pilot for your entire Git workflow—without ever giving up control.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-white">Automate what slows you down</span> – From conflict resolution to commit organization</li>
            <li><span className="font-semibold text-white">Streamline handoffs and collaboration</span> – Clear explanations and better commit history</li>
            <li><span className="font-semibold text-white">Gain time back to focus on solving real problems</span> – Less time on Git mechanics, more on code</li>
            <li><span className="font-semibold text-white">Maintain code quality</span> – AI-generated content follows best practices and templates</li>
            <li><span className="font-semibold text-white">Enhanced security</span> – Organization-level controls and private model support</li>
          </ul>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/logos/AI8.png" 
            alt="Save Time and Control"
            width={500}
            height={400}
            className="rounded-lg object-contain"   />
        </div>
      </div>
      {/* More Agentic Workflows Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            More agentic workflows (coming soon)
          </h3>
          <p className="text-gray-400 mb-4">
            We’re building toward a future where GitKraken AI does more than assist—it helps guide work from task creation to PR review, with full transparency and human oversight.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>From planning to code to review, GitKraken AI connects every phase</li>
            <li>Designed for developers and engineering leaders alike</li>
            <li>Built to drive measurable improvements in speed, quality, and collaboration</li>
          </ul>
        </div>        
        <div className="flex justify-center">
          <Image
            src="/images/logos/AI9.png" 
            alt="Agentic Workflows"
            width={500}
            height={400}
            className="rounded-lg object-contain"   />
        </div>
      </div>     
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4 mt-10">
          AI Across Every GitKraken Tool
        </h3>
        <p className="text-gray-400 mb-8">
          GitKraken AI is available wherever you work—in your IDE, terminal, desktop, or browser.
          Whether you’re using GitKraken Desktop, GitLens, or our CLI, AI is woven seamlessly into the tools you already use.
        </p>
         <Tryanyofourtools/>       
      </div>
    </section>
  );
}
