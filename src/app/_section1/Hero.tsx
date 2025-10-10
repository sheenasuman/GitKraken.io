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
     <main className="bg-[#1C1C1C] text-white">
          {/* HERO SECTION */}
        <section className="bg-[#1C1C1C] text-white px-4 md:px-8 py-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug md:leading-[72px]">
                Smarter Workflows. Built-In AI. Better Developer Experience.
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-300 ">
                GitKraken AI works for you to seamlessly orchestrate your workflows
              </p>  
             
                <Downloadbutton />
                <Video />
                <GitkrakenAI />        
    
              <h2 className="text-base sm:text-lg font-bold ">
                Not Just for Solo Devs. Solving Git Problems for 100K+ Dev Teams
              </h2>
            </div>
    
            <div className="mt-2">
              <Companylogos />
            </div>
    
            <div className="mt-2">
              <Featurecards />
            </div>
          </section>
             <Navbar />
     {/* VISUALIZATION SECTION */}
   <section id="visualise" className="px-4 md:px-8 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
         <div className="flex items-center gap-6 ">              
             <Image src="/images/e321.png" alt="Focus Icon" width={50} height={40}
               className="object-contain"/> 
                
          <div className="space-y-6 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold">
                   Enabling Developers to Quickly Visualize Complex Data, Code, and Progress
                </h2>
                <h3 className="text-sm font-semibold uppercase text-gray-300">Visualize</h3>
                <h2 className="text-3xl md:text-4xl font-bold max-w-3xl">
                   Visualizing complex data sets is a major time saver– and it's often a real life saver.
                </h2>
          </div>
          </div> 
      </div>
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
              <div className="mt-6 max-w-2xl mx-auto px-4 md:px-0">
                 <p className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed">
                    Our Commit Graph enables you to visualize complex Git history across your entire team in seconds
                  </p>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                   Available in{" "}
                   <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{" "}
                   <span className="text-purple-400 font-semibold">GitKraken CLI</span> or{" "}
                   <span className="text-purple-400 font-semibold">GitLens</span>.
                   </p>
              </div>
           
            
              <div className="bg-[#1C1C1C] text-white">
                   <div className="flex flex-col md:flex-row items-center md:items-center gap-6 max-w-5xl mx-auto">
                        <div className="flex items-end gap-6 ">   
                            <Image src="/images/E2.png" alt="Vertical Icon" width={50}height={20}
                            className="object-contain"/>
                           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-center md:text-left max-w-2xl my-20">
                            Being able to visualize what you’re doing (and what will happen) provides context,
                            safety, and peace of mind.</h1>
                        </div>
                  </div>
                  <div className="flex flex-col items-center justify-center max-w-5xl mx-auto ">
                                 <Image src="/images/fourth.png"alt="Visual File History"width={600}height={600}className="rounded-lg shadow-lg "/>
                            </div>         
                           <div className="mt-6 max-w-2xl mx-auto px-4 md:px-0">
                            <p className="text-base md:text-lg lg:text-xl text-[#BCB5BE] font-bold leading-relaxed">
                              Use Visual File History to see the entire history of any file, including: when changes were made, 
                              how large they were, and who made them.
                            </p>
                           <p className="mt-2 text-sm md:text-base text-gray-300">
                             Available in <span className="text-purple-400 font-semibold">GitLens</span>.
                                    </p>
                  </div>
    
              </div>
              <div className="text-white px-4 max-w-5xl mx-auto ">
                    <div className="flex items-end gap-6 ">                                     
                           <Image src="/images/E1.png" alt="Icon" width={50} height={30} className="object-contain" />  
                    <div className="max-w-5xl">
                       <span className="bg-[#1C1C1C] text-white text-md leading relaxed ">VISUALISE</span>
                       <h2 className="text-3xl md:text-4xl font-bold py-10">
                           GitKraken lives to make the complex simple – saving developers hours per
                           day with world-beating capabilities like our intuitive merge tools and interactive rebase.
                       </h2>
                   </div>
                   </div>          
              </div>
                <div className="relative h-[50vh] w-full overflow-hidden">
                          {/* Background Image */}
                          <Image src="/images/bg2.png" alt="Background" fill className="object-cover object-center z-0" />
                          {/* Foreground Image */}
                         <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                           <Image src="/images/c.png" alt="Foreground"  width={400} height={200}
                           className="rounded-lg shadow-2xl w-full max-w-2xl mt-35"/>
                         </div>
                </div>       
       
                <div className="mt-6 max-w-2xl mx-auto px-4 md:px-0">
                  <p className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed">
                    Our powerful merge tool enables you to easily visualize changes, so you can untangle and resolve conflicts faster
                  </p>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                     Available in{" "}
                   <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{" "}
                   <span className="text-purple-400 font-semibold">GitKraken CLI</span> or{" "}
                    <span className="text-purple-400 font-semibold">GitLens</span>.
                  </p>
                </div>

                <div className="bg-[#1C1C1C] text-white px-4 ">                                 
                          
                 <div className="flex flex-row items-center max-w-5xl mx-auto">
                  <div className="flex items-center gap-6 ">   
                        <Image src="/images/E1.png" alt="Vertical Icon"width={50} height={20} className="object-contain"/>
                       <div className="pt-2 px-8" >
                        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl py-10 ">And GitKraken’s legendary tools aren’t
                         just for devs. We cater to teams of allsizes – and help team leads and managers
                         focus on what’s most important.</h1>
                         <span className="text-sm text-purple-400 ">Explore Team Insights for Jira</span>
                     </div>
                     </div>
                   </div>
                </div> 
                 {/* Team Insights */}
                 <div className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto ">
                     <Image src="/images/d2.png" alt="Team Insights" width={600} height={400}className="rounded-lg "/>
                 </div>        
                
             <div className=" max-w-5xl mx-auto flex items-center justify-center gap-8">
                 {/* Left Side Icon */}  
                     <div className="flex items-end gap-6 ">                  
                      <Image src="/images/e11.png" alt="Vertical Icon" width={90} height={50} className="object-contain"/></div>
                   <div className="bg-[#1C1C1C] text-white max-w-5xl">
                      {/* Section Title */}
                              <p className="text-sm font-semibold text-gray-400 mb-2">Git Facts</p>  
                       <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 max-w-5xl">
                              <span className="text-4xl font-bold text-white whitespace-nowrap">1,000,000,000+</span>
                              <span className="text-2xl font-semibold text-white ">
                                 Commits Visualized (yeah, that’s a billion with a<br/> ‘B’) with the GitKraken Commit Graph</span>
                       </div>
                         {/* Supporting Text */}
                           <p className="text-md text-white mt-4">How did Lansweeper cut PR review time by over 50% with GitKraken Desktop?{' '}
                           <Link href="#" className="text-purple-300 hover:underline ml-1">
                            Read their dev team’s story </Link></p>
                </div>
            </div>
            
          <div className="relative bg-[#1C1C1C] text-white rounded-lg overflow-hidden shadow-md mx-4 md:mx-auto max-w-4xl">
          <div className="relative bg-[url('/images/bg5.png')] bg-cover bg-center h-46 md:h-62">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between max-w-5xl mx-auto px-4 md:px-8 h-full gap-4 md:gap-8">
           <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
             <Image
                src="/images/V.png"
                alt="git.kon"
                width={80}
                height={80}
                className="rounded-lg"/>
            <h2 className="text-white text-xl md:text-3xl font-bold leading-tight">Elevating developer experience
            </h2>
            <p className="text-gray-300 text-sm md:text-base">Join us on December 10–11, 2024</p>
        </div>

      {/* Right Section (CTA Button) */}
          <a  href="#"
          className="border border-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition font-semibold"
         >
         Watch on-demand
        </a>

         </div>
         </div>
         </div>

        

  </section>
  <section id="focus">           
       <div className=" flex items-center justify-center text-white px-4">
                  <div className="flex items-center gap-8 max-w-5xl">  
                     <div className="flex items-center gap-6 ">              
                            <Image src="/images/e29.png" alt="Focus Icon" width={60} height={50} className="object-contaim"/>
                      
                       <div>
                           <h2 className="text-xl font-bold max-w-5xl">Helping Developers Focus to Save Time, Minimize Distractions, & Avoid Interruptions
                           </h2>
                            <h3 className="text-md mt-5 font-semibold">Focus</h3>
                           <p className="text-3xl font-bold mt-4 max-w-2xl">
                              Distractions and interruptions reduce developer productivity,
                              not to mention their quality of code and quality of life.</p>
                       </div>
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
              <div className="mt-6 max-w-2xl mx-auto text-center text-gray-300">
                   <p className="text-xl text-white font-bold text-left max-w-2xl">Turn down the noise with our Launchpad,
                                   helping you find & extend your flow state</p>
                     <p className="text-white-400 text-left">Available in<span className="text-purple-400 text-left">
                            GitKraren CLI or Gitlens</span></p>
               </div>                        
       <div className="bg-#1C1C1C text-white px-5 py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4 py-8">
              <Image src="/images/e29.png" alt="Focus Icon" width={60}
               height={20} className="object-contain"/>    
               <div className='text-xl'>    
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-center md:text-left max-w-2xl">
                     GitKraken tools enable developers to find their
                     flow by helping track all open items without
                      being bombarded by noise. So you can avoid
                     interruptions, distractions, and rework.
                  </h1>
               </div>  
         </div>
          <div className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  <Image src="/images/eight .png" alt="Focus Tools" width={600} height={400}className="rounded-lg shadow-lg  "/>
                  <h4 className="text-xl text-[#BCB5BE] max-w-2xl mx-auto ">See the entire history of any line of code with a quick hover,
                                                                offering you context without distraction</h4>
                   <p className="text-white-400 text-left">Available in<span className="text-purple-400 text-sm text-left">Gitlens</span></p>
            </div>
        </div>       
         <div className="flex flex-col md:flex-row max-w-5xl mx-auto py-10 ">     
                     <div className="flex items-start gap-6 ">                     
                     <Image src="/images/e7.png" alt="Vertical Icon" width={60} height={20}className="object-contain"/>
                    
                     <div className="max-w-5xl mx-auto ">
                         <h1 className="text-3xl font-bold leading-tight">
                          What you measure matters.Until you can<br/>easily see what helps or hinders your<br/>
                          team’s pace, you can’t improve it.
                         </h1>   
                         <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 md:gap-6 text-center md:text-left"></div>           
                        <Image src="/images/gang.png"alt="Focus Tools"width={800}height={400} className="rounded-lg shadow-lg"/>
                        <p className="text-xl text-[#BCB5BE] font-bold max-w-2xl mx-auto"> Enabling everyone on a team (including managers & leads) 
                           to focus on what’s most important for their project with GitKraken Insights</p>
                        <h6 className="text-white-400 flex justify-center ">Available in<span className="text-purple-400"> GitKraken Desktop</span> and
                         <span className="text-purple-400 text-center"> GitKraken CLI→</span></h6>
                     </div>
               </div>
           </div>      
           
             <div className="text-white px-4 ">
                <div className="flex flex-col md:flex-row items-center  max-w-5xl mx-auto">
              <div className="flex items-center gap-4 ">   
                   <Image src="/images/e11.png"alt="Vertical Icon"width={90}height={60}
                       className="object-contain"/>           
                <div className="flex-1">
                <span className="text-md text-gray-400 font-semibold mb-2 gap-4 block"> Git Facts</span>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <h2 className="text-[35px] md:text-[40px] font-bold leading-none">4 out of 5</h2>
                <p className="text-white text-lg md:text-xl font-semibold mt-2 md:mt-0 max-w-2xl">
                   developers say that time lost to distraction & interruptions are
                   among their biggest work-related pain points
                </p>
             </div>
               <p className="mt-6 text-sm font-semibold">
               How did Johnson Controls improve their developer experience?{" "}
                <a href="#"
                 className="text-purple-400 hover:text-purple-300 underline transition-colors">
                 Read their dev team’s story </a> </p>
              </div>
               </div>
           </div>
   
         
              <div className=" flex flex-col md:flex-row items-center justify-center">
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
        </div>
          </div>
  </section>         
  </main>
    );
    }