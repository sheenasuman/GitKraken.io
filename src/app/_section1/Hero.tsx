"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Video from "../../components/includes/Video";
import GitkrakenAI from "../../components/includes/GitkrakenAI";
import Companylogos from "../../components/includes/Companylogos";
import Downloadbutton from "../../components/includes/Downloadbutton";
import Featurecards from "../../components/includes/Featurecards";
import Navbar from "../../components/includes/Navbar";
export default function GitKrakenHero() {
  return (
    <main className="bg-#1C1C1C text-white">
      {/* HERO SECTION */}
      <section className="bg-#1C1C1C text-white px-6 py-16">
                <h1 className="text-3xl sm:text-4xl md:text-[39px] font-bold leading-tight md:leading-[72px] flex justify-center item-center">
                       Smarter Workflows. Built-In AI. Better Developer Experience.
                </h1>
                 <p className="text-base md:text-lg font-bold text-gray-300 mt-4 flex justify-center item-center">
                       GitKraken AI works for you to seamlessly orchestrate your workflows
                 </p>
            <div className="mt-6 flex flex-col items-center gap-8">
              <Downloadbutton />
              <Video />
              <GitkrakenAI />
            </div>
            <h2 className="text-lg font-bold mt-10 flex justify-center item-center">
                   Not Just for Solo Devs. Solving Git Problems for 100K+ Dev Teams
            </h2>
            <Companylogos />
            <Featurecards />            
      </section>   
      <Navbar />
     {/* VISUALIZATION SECTION */}
    <section id="visualise">
         <section className="px-6 sm:px-6 py-10 max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8">
              <Image src="/images/e321.png" alt="Focus Icon" width={40} height={40} className="inline-block align-middle" />
              <div className="space-y-4">
                  <h2 className="text-2xl font-bold py-10"> Enabling Developers to Quickly Visualize Complex Data, Code, and Progress</h2>
                  <h3 className="text-sm font-semibold uppercase text-gray-300">Visualize</h3>
                  <h2 className="text-3xl md:text-4xl font-bold">Visualizing complex data sets is a major time saver<br/>- and it's often a real life saver.</h2>
              </div>
         </section>
         <div className="relative h-[50vh] w-full overflow-hidden">
                          {/* Background Image */}
                       <Image src="/images/bg1.png" alt="Background" fill className="object-cover object-center z-0" />
                          {/* Foreground Image */}
                      <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                           <Image src="/images/a.png" alt="Foreground" width={400} height={200}
                           className="rounded-lg shadow-2xl w-full max-w-2xl mt-35"/>
                      </div>
              </div>
        
              {/* Caption 1 */}
              <div className="mt-6 max-w-5xl mx-auto text-center text-gray-300">
                      <p className="text-xl text-[#BCB5BE] font-bold text-center">
                          Our Commit Graph enables you to visualize complex Git history<br/>across your entire team in seconds
                      </p>
                      <p className="mt-2 text-sm  text-center">Available in <span className="text-purple-400">GitKraken Desktop</span>,{" "}
                          <span className="text-purple-400">GitKraken CLI</span> or{" "}
                          <span className="text-purple-400">GitLens</span>.
                      </p>
              </div>
              
              <section className=" bg-#1C1C1C text-white flex items-center justify-flex-start">
                        <div className="flex flex-row items-center max-w-5xl mx-80 px-4">
                          {/* Image */}                         
                               <Image src="/images/E2.png"alt="Vertical Icon" width={50} height={20} className="inline-block align-middle"/>
                               <h1 className="text-3xl max-w-5xl font-bold  ">Being able to visualize what you’re doing<br/>
                               (and what will happen) provides context,<br/> safety, and peace of mind.</h1>
                         </div>
              </section>
                            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto ">
                                 <Image src="/images/fourth.png"alt="Visual File History"width={600}height={600}className="rounded-lg shadow-lg "/>
                            </div>         
                            <div className="mt-6 max-w-4xl mx-auto text-center text-gray-300">
                                 <p className="text-xl text-[#BCB5BE] font-bold ">
                                   Use Visual File History to see the entire history of any<br/> file, including: when changes were made, 
                                    how large they<br/> were, and who made them.</p>
                                 <p className="mt-2 text-sm">Available in <span className="text-purple-400 text-left">GitLens</span>.</p>
                            </div>    
              <section className="text-white px-6 py-10 flex items-center">
                    <div className="flex items-start gap-6 max-w-5xl mx-80">         
                                   
                           <Image src="/images/E1.png" alt="Icon" width={40} height={30} className="inline-block align-middle" />                  
                            
                   <div className="max-w-5xl">
                       <span className="bg-#1C1C1C text-white text-xl leading relaxed ">VISUALISE</span>
                       <h2 className="text-2xl md:text-3xl font-bold py-15">
                           GitKraken lives to make the complex simple – <br/>saving developers hours per
                           day with world-beating capabilities like our intuitive merge tools and interactive rebase.
                       </h2>
                   </div>
                   </div>          
              </section>
                <div className="relative h-[50vh] w-full overflow-hidden">
                          {/* Background Image */}
                          <Image src="/images/bg2.png" alt="Background" fill className="object-cover object-center z-0" />
                          {/* Foreground Image */}
                         <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                           <Image src="/images/c.png" alt="Foreground"  width={400} height={200}
                           className="rounded-lg shadow-2xl w-full max-w-2xl mt-35"/>
                         </div>
                </div>       
       
                <div className="mt-6 max-w-2xl mx-auto text-center text-gray-300">
                   <p className="text-xl text-white font-bold text-left">
                       Our powerful merge tool enables you to easily visualize changes, so<br/> you can untangle and resolve conflicts faster
                   </p>
                   <p className="mt-2 text-sm text-left text-center">Available in <span className="text-purple-400">GitKraken Desktop</span>,{" "}
                       <span className="text-purple-400">GitKraken CLI</span> or{" "}
                       <span className="text-purple-400">GitLens</span>.
                   </p>
               </div>
                <section className="bg-#1C1C1C text-white px-10 py-16">
                      <div className="flex flex-row items-center max-w-5xl mx-70">
                      {/* Image */}                   
                        <Image src="/images/E1.png" alt="Vertical Icon"width={50} height={50} className="inline-block align-middle"/>
                         
                   <div className="pt-2 px-8" >
                      <h1 className="text-3xl md:text-4xl font-bold ">And GitKraken’s legendary tools aren’t<br />
                         just for devs. We cater to teams of all<br />sizes – and help team leads and managers<br />
                         focus on what’s most important.</h1>
                         <span className="text-sm text-purple-400 ">Explore Team Insights for Jira</span>
                  </div>
                  </div>
                </section> 
                 {/* Team Insights */}
                 <div className="text-3xl md:text-4xl font-bold mx-100 ">
                     <Image src="/images/d2.png" alt="Team Insights" width={600} height={400}className="rounded-lg "/>
                 </div>        
                
             <section className="bg-#1C1C1C text-white mx-80 flex items-center justify-center gap-8">
                 {/* Left Side Icon */}
                 <div className="pt-2">
                      <Image src="/images/e11.png" alt="Vertical Icon" width={70} height={50} className="inline-block align-middle"/>
                 </div>     
                 <div className="bg-#1C1C1C text-white">
                      {/* Section Title */}
                              <p className="text-sm font-semibold text-gray-400 mb-2">Git Facts</p>  
                       <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                              <span className="text-5xl font-bold text-white whitespace-nowrap">1,000,000,000+</span>
                              <span className="text-2xl font-semibold text-white">
                                 Commits Visualized (yeah, that’s a billion with a<br/> ‘B’) with the GitKraken Commit Graph</span>
                       </div>
                         {/* Supporting Text */}
                           <p className="text-lg text-white mt-4">How did Lansweeper cut PR review time by over 50% with GitKraken Desktop?{' '}
                           <Link href="#" className="text-purple-300 hover:underline ml-1">
                            Read their dev team’s story </Link></p>
                </div>
            </section>
       
        <section className="relative w-50% bg-#1C1C1C text-white rounded-lg overflow-hidden shadow-md">
               <div className="bg-[url('/images/bg5.png')] bg-cover h-10% w-10% mt-10 max-w-4xl mx-90 ">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray/80 to-gray/50 h-20%" />
                     {/* Content */}
                        <div className="relative z-10 md:py-16 flex flex-col md:flex-row items-start md:items-center
                                        justify-between items-center max-w-5xl mx-10 h-150px">
                          <div className="px-30">
                             <Image src="/images/V.png"alt="git.kon"width={100} height={100} className="rounded-lg shadow-lg "/>
                             <h2 className="text-white text-2xl md:text-3xl leading-tight">Elevating developer experience</h2>
                             <p className="text-gray-300 mt-2 text-sm md:text-base">Join us on December 10–11, 2024</p>
                          </div> 
                              <a href="#"className="border border-purple-500 text-white px-2 py-2 rounded-lg 
                               hover:bg-purple-600 transition font-medium text-sm">Watch on-demand</a>
                        </div>
                   </div>
        </section>      
      </section>
       <section id="focus">
           {/* <Navbarfocus /> */}
       <div className=" flex items-center justify-center text-white px-4">
                  <div className="flex items-center gap-8 max-w-5xl">           
                      <div className="flex-shrink-0">
                            <Image src="/images/e29.png" alt="Focus Icon" width={60} height={50} className="inline-block align-middle"/>
                      </div>       
                       <div>
                           <h2 className="text-2xl font-semibold">Helping Developers Focus to Save Time, Minimize Distractions, & Avoid Interruptions
                           </h2>
                            <h3 className="text-md mt-5">Focus</h3>
                           <p className="text-4xl font-bold mt-4">
                              Distractions and interruptions reduce<br/> developer productivity,
                              not to mention<br/> their quality of code and quality of life.</p>
                       </div>
                  </div>
          </div>
        <div className="relative h-[50vh] w-full overflow-hidden">
                      {/* Background Image */}
                      <Image src="/images/bg3.png"alt="Background"fill className="object-cover object-center z-0"/>
                      {/* Foreground Image */}
               <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                  <Image src="/images/e.png" alt="Foreground"width={400}height={200}className="rounded-lg shadow-2xl w-full max-w-2xl mt-35"/>
               </div>
          </div>
              <div className="">
                     <p className="text-2xl text-white flex justify-center items-center ">Turn down the noise with our Launchpad,
                                   helping you find &<br/>extend your flow state</p>
                     <p className="text-white-400 flex justify-center text-left">Available in<span className="text-purple-400 text-left">
                            GitKraren CLI or Gitlens</span></p>
               </div>                        
       <div className="bg-#1C1C1C text-white px-5 py-10">
            <div className="max-w-6xl mx-80 flex">
              <div className=" pt-2"> 
               <Image
              src="/images/e29.png" alt="Focus Icon" width={50} height={20}className="align-middle "/> </div>            
              <h1 className="text-3xl font-bold ">        
              GitKraken tools enable developers to find their<br/> flow by helping track all open items
              without<br/> being bombarded by noise. So you can avoid<br/> interruptions, distractions, and
              rework.
          </h1> 
            </div>
          <div className="mx-100">
                  <Image src="/images/eight .png" alt="Focus Tools" width={600} height={400}className="rounded-lg shadow-lg  "/>
                  <h4 className="text-xl text-[#BCB5BE] ">See the entire history of any line of code with a quick hover,<br/>
                                                                offering you context without distraction</h4>
                   <p className="text-white-400 text-sm">Available in<span className="text-purple-400 text-sm">Gitlens</span></p>
            </div>
            </div>       
       <section className="flex flex-col md:flex-row  max-w-5xl mx-80 py-20 ">
              <div className="flex-shrink-0">
                     <Image src="/images/e7.png" alt="Vertical Icon" width={80} height={40}className="rounded-md"/>
              </div>    
              <div className="max-w-4xl text-left ">
                         <h1 className="text-4xl font-bold leading-tight">
                          What you measure matters.Until you can<br/>easily see what helps or hinders your<br/>
                          team’s pace, you can’t improve it.
                         </h1>              
                        <Image src="/images/gang.png"alt="Focus Tools"width={1200}height={800} className="rounded-lg shadow-lg"/>
                        <p className="text-2xl text-[#BCB5BE] font-bold"> Enabling everyone on a team (including managers & <br/>leads) 
                           to focus on what’s most important for their<br/>project with GitKraken Insights</p>
                        <p className="text-white-400 text-sm">Available in<span className="text-purple-400"> GitKraken Desktop</span> and
                         <span className="text-purple-400"> GitKraken CLI→</span></p>
              </div>
      </section>                  
      <section className="text-white px-4 py-16">
                    <div className="flex flex-col md:flex-row items-start gap-6 max-w-5xl mx-80">                       
                           <div className="shrink-0">
                              <Image src="/images/e11.png" alt="Vertical Icon" width={60} height={40} className="align-middle inline-block"/>
                           </div> 
                           <div className="flex-1  max-width-5xl">
                           <span className="text-md text-gray-400 font-semibold mb-2 block">Git Facts</span>
                              <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                                    <h2 className="text-[48px] md:text-[53px] font-bold leading-none">4 out of 5</h2>
                                    <p className="text-white text-lg md:text-xl font-semibold mt-2 md:mt-4">
                                     developers say that time lost to distraction & interruptions are<br />
                                     among their biggest work-related pain points</p>
                              </div>
                            <p className="mt-6 text-sm font-semibold">How did Johnson Controls improve their developer experience?{' '}
                            <a  href="#" className="text-purple-400 hover:text-purple-300 underline transition-colors">
                                       Read their dev team’s story</a></p>
                            </div>
                    </div>
      </section>
      <section className="text-white flex flex-col md:flex-row items-center justify-center">
                    <div className="rounded-lg shadow-lg ">
                          <Image src="/images/Group-19489.svg"alt="image" width={200} height={200} className="rounded-lg shadow-lg mt-20"/>
                          <p className="text-lg text-gray-300 leading-relaxed">
                               Peek behind the curtain with <span className="font-bold text-white">GitKraken Labs</span> <br />
                              See what our devs are building now & next – putting<br/>powerful AI at your fingertips.
                          </p>
                          <a href="#"className="mt-6 inline-block text-sm text-gray-300 hover:underline" >
                              Tour GitKraken Labs for the latest in <span className="text-purple-400 font-medium">Git Innovation</span>
                           </a>  
                   </div>
                          <Image src="/images/live.png"alt="image" width={400}height={400} className="rounded-lg shadow-lg mt-20"/>
      </section>
      </section>
      <section id="collaborate" >
      {/* <Navbarcol/> */}
       <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-80">
                       <div className="shrink-0">
                       <Image
                        src="/images/e9.png"alt="Git Icon" width={80}
                         height={20}
                         className="rounded-lg shadow-lg"/>
                       </div>
                       <div className="flex flex-col justify-center">
                           <h3 className="text-xl font-bold mb-4">Helping Distributed Dev Teams Collaborate Like 
                                   They’re All In The Same Room</h3>
                           <span className="text-2xl font-bold text-white mb-4">Collaborate</span>
                           <h1 className="text-4xl font-bold leading-tight mb-4">Share dozens (or hundreds or thousands) <br />
                                 of repos, with as many team members as <br />you want, in just a few clicks.</h1>
                            <span className="text-purple-400 mt-2">Check out GitKraken Workspaces</span>
                     </div>              
              </div> 
         </section>      
       </main>
    );
    }