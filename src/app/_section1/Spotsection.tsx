"use client";
import Image from "next/image";
import React from "react";

export default function Spotsection() {
  return (
    <main className="bg-[#1C1C1C] text-white px-4 py-8 ">
       <section id="collaborate" >   
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto"> 
                        <div className="flex items-start gap-6 ">                       
                            <Image src="/images/e9.png"alt="Git Icon" width={80} height={20}
                            className="object-contain "/> 
                        </div>
                       <div className="flex flex-col justify-center">
                           <h3 className="text-xl font-bold mb-8">Helping Distributed Dev Teams Collaborate Like 
                                   They’re All In The Same Room</h3>
                           <span className="text-2xl font-bold text-white mb-4">Collaborate</span>
                           <h1 className="text-3xl font-bold leading-tight max-w-2xl">Share dozens (or hundreds or thousands) 
                                 of repos, with as many team members as you want, in just a few clicks.</h1>
                            <span className="text-purple-400 mt-2">Check out GitKraken Workspaces</span>
                     </div>              
              </div>            
            <div className="flex flex-col items-center justify-center text-center px-4  text-white">
                <Image src="/images/Repository.png" alt="Repository Image"
                 width={900} height={600} className="object-cover object-center" /> 
                <h4 className="text-gray-400 text-2xl font-bold  max-w-2xl text-left">
                Share all the repos that matter to your team to keep everyone on the same page
                </h4>     
             <p className="text-lg text-gray-300 max-w-3xl">
                Available in{' '}
                   <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
                   <span className="text-purple-400 font-semibold">GitKraken CLI</span>, or{' '}
                   <span className="text-purple-400 font-semibold">GitLens→</span>
            </p>
          </div>
          <div className="bg-#1C1C1C text-white px-6 py-16">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10">
              <div className="flex items-start gap-6">
                 <Image src="/images/e99.png"alt="Vertical Icon"
                   width={60} height={20} className="object-contain" />
              </div>
              <div className="flex-1 space-y-10">        
                    <h1 className="text-3xl font-bold max-w-3xl">Among the many benefits of Workspaces is
                                  that you can onboard new devs to your team in
                                   minutes, not months.
                    </h1>       
                     <Image src="/images/z.png"alt="Workspace UI"
                          width={700} height={600}className="rounded-lg shadow-lg" />          
                    <h4 className="text-white-500 text-xl font-bold max-w-2xl">
                           Workspaces help you scale by enabling multi-repo Git
                           actions and easy onboarding of new team members.
                    </h4>
                     <p className="text-lg">
                          Available in{' '}
                         <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
                         <span className="text-purple-400 font-semibold">GitKraken CLI→</span>
                     </p>        
                     <h1 className="text-3xl font-bold max-w-2xl">
                         Staying aligned is tough when you’re trying to move fast — even more difficult
                         when your team is spread across zip codes, time zones & continents.
                    </h1>
               </div>
            </div>
              <div className="relative h-[50vh] w-full overflow-hidden">
                  <Image src="/images/bg7.png" alt="Background" fill
                   className="object-cover object-center z-0"  />
                {/* Foreground Image */}
                 <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                     <Image src="/images/7.png"  alt="Foreground"width={400} height={200}
                      className="rounded-lg shadow-2xl w-full max-w-2xl mt-35" />
                </div>
            </div>            
                <h4 className="text-white-500 text-xl font-bold max-w-2xl mx-auto text-center">Our Workspaces Team View becomes mission control for distributed dev teams </h4>
                <p className="flex justify-center items-center">Available in <span className="text-purple-400">GitKraken Desktop→</span></p>
            </div> 
          <div className="bg-[#1C1C1C] text-white px-6 py-15 max-w-5xl mx-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">      
                 <div className="flex flex-col items-center pt-4">                      
                         <Image src="/images/e112.png" alt="Icon" width={150} height={70}
                          className="object-contain" />
                 </div>                   
            <div className="flex-1 flex flex-col">
                    <h1 className="text-3xl font-bold leading-tight max-w-5xl text-left">Development is increasingly a team effort.And more than ever before, those teammates
                                  aren’t sitting right next to you.
                    </h1>         
                       <Image src="/images/l.png" alt="Conflict Screenshot" width={800} height={400}className="rounded-lg shadow-lg"/>        
          <div className="max-w-2xl">
               <h4 className="text-xl font-semibold text-gray-100 mb-4 text-center">
                   Avoid costly collisions – especially with distributed teams –
                   that can be the difference between success and failure.
               </h4>
                <p className="text-gray-400 text-center">Available in{' '}
                     <span className="text-purple-400 font-semibold hover:underline cursor-pointer">GitKraken Desktop →</span></p>
          </div>       
          <div className="bg-[#1C1C1C] p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
                          <p className="text-sm text-gray-400 font-semibold mb-2">Git Facts</p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                          <h2 className="text-5xl font-bold text-white">92%</h2>
                           <p className="text-xl text-white font-medium text-center md:text-left max-w-4xl">
                            of developers say they spend their days (and nights)<br />
                            working as part of a team.</p>
                 </div>
                            <p className="text-sm mt-4 text-gray-400">Monorepo or Multirepo? eBook: a guide for optimal workflows.{' '}
                              <a href="#" className="text-purple-400 hover:underline">
                               Get it free (no email or account) </a></p>
                 </div>
                 </div>
                 </div>
       </div>    
        <div className="bg-[#1C1C1C] text-white  ">
        <div className="flex-shrink-0">
            <Image src="/images/mean.png"alt="orbit illustration"
                width={200} height={100} className="rounded-lg shadow-lg py-10 mx-100"/>
        </div>
      <div className="flex flex-row md:flex-row  max-w-2xl mx-auto space-y-1 md:space-y-0 md:space-x-5">
          <div className="text-center md:text-left max-w-2xl  ">
               <p className="text-lg font-semibold mb-2">Part of a Dev Team?</p>
               <p className="text-md max-w-2xl">
                  Add multiple team members to try GitKraken Client as an org for 30 days – 100% free & no credit card.
               </p>
               <p className="text-purple-400 text-sm font-medium cursor-pointer hover:underline">
                      Add a Teammate(s) for a Free 30-Day Business Trial
               </p>
         </div>    
         <div className="flex-shrink-0">
             <Image src="/images/rocket.png"alt="rocket illustration"
              width={300} height={100}className="rounded-lg shadow-lg text-left py-5"/>
         </div>
       </div>
       </div>
   </section>
   <section id="connect">     
         <div className=" px-4 py-10 flex items-center justify-center">        
           <div className="flex flex-col md:flex-row items-start max-w-5xl mx-auto gap-10">
                <div className="flex items-start gap-6 ">              
                  <Image src="/images/e1122.png"alt="Vertical Icon" width={80} height={20}
                       className="object-contain" /></div>         
            <div className="flex-1">
              <h2 className="text-2xl font-bold mt-2">
                 Enabling Devs to Stay Connected – To Their Tech Stack and Their Workflow
             </h2>
              <h5 className="text-xl mt-4">Connect</h5>
              <h1 className="text-3xl font-bold mt-6 max-w-2xl mx-auto ">
                  Powerful integrations to GitHub, GitLab,
                  Bitbucket, Azure, Jira & more – so we fit
                  right in with your existing workflow & stack.
             </h1>
                 <Image src="/images/13.png"alt="Integration Illustration"width={600}height={400}
                       className="rounded-lg shadow-lg mt-12"/>
                <p className="text-md text-gray-400 mt-6 ">
                   Connect seamlessly with the Git hosting providers, planning
                   tools and other systems you use daily</p>
             </div>
           </div>
       </div>
       <div className="bg-[#1C1C1C] text-white px-6 py-10 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-start max-w-5xl mx-auto gap-10">   
            <div className="flex items-start gap-6 ">       
               <Image src="/images/e121213.png"alt="Vertical Icon" width={50} height={20} className="object-contain"/>
            </div>
         <div className="flex-1 space-y-12">
          <h1 className="text-3xl font-bold max-w-3xl text-left leading-tight">
            Continuity across our entire suite of dev tools,
            so when you do something in the Client, your
            IDE or CLI update in real time. That’s a magical
            developer experience!
          </h1>
          <div className="flex flex-col items-start space-y-6">
            <Image
              src="/images/14.png"alt="Dev Tools Sync"width={800} height={200}className="rounded-lg shadow-lg"/>
            <h4 className="text-white-500 text-xl font-bold flex align-center">
              Changes you make in one of our tools – show up in all our tools, in real time
            </h4>
            <p className="text-lg text-left">
              Available in{' '}
              <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
              <span className="text-purple-400 font-semibold">GitKraken CLI →</span>, and{' '}
              <span className="text-purple-400 font-semibold">GitLens →</span>
            </p>
           </div>
            <h1 className="text-3xl font-bold max-w-3xl text-left leading-tight">
                 Experience how easy it can be to manage tasks and keep your context intact. A
                 smoother, more efficient workflow is not just an aspiration, it's your new reality.
           </h1>
        </div>
      </div>
    </div>
           <div className="relative h-[60vh] w-full overflow-hidden">                      
                             <Image src="/images/bg7.png"alt="Background"fill className="object-cover object-center z-0"/>                       
                         <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                               <Image src="/images/15.png"alt="Foreground"width={400}height={200}
                                 className="rounded-lg shadow-2xl w-full max-w-2xl mt-35"/>
                        </div>
           </div>
          <div className='max-w-2xl mx-auto'>
             <h4 className="text-white-500 text-xl font-bold flex justify-center align-center">
                Seeing issues where you’re actually doing work saves time and minimizes annoying context switching</h4>
             <p className="text-lg flex justify-center align-center">Available in{' '}
             <span className="text-purple-400">GitKraken Desktop</span>,{' '}
             <span className="text-purple-400">GitKraken CLI →</span> </p>    
          </div>        
        <div className=" px-6 py-10 flex justify-center">
          <div className="flex items-center max-w-5xl mx-auto"> 
            <div className="flex items-start gap- ">                             
                     <Image src="/images/e888.png"alt="Vertical Icon"width={80}height={44}className="object-contain"/>
                  </div>
                   <p className="text-sm text-gray-400 font-semibold mb-10 block">Git Facts</p>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                     <h2 className="text-2xl md:text-3xl font-bold">ONLY 50%</h2>
                     <p className="text-xl text-white font-medium max-w-2xl mx-auto">of developers feel confident they have the tools and context
                        they need to work effectively on their company’s code.</p>
                 </div>
             </div>
          </div> 
         
      
       
        <div className=" text-white px-6 py-10 flex justify-center items-center">
             <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mx-20">
                <div className="flex-1 text-left">
                <h2 className="text-xl font-bold mb-6 max-w-4xl ">Oh, hey,we weren’t expecting you way down here!</h2>
                <h4 className="text-md font-bold text-gray-300 mb-4">
                       You’ve heard a lot from us. Now let our customers tell you in their own words{' '}
                        <span className="text-purple-400 font-semibold">why they rely on GitKraken dev tools.</span>
                </h4>
                <p className="text-lg font-normal">Accelerate your performance —{' '}
               <span className="text-purple-400 font-semibold">take any of our dev tools for a free spin.</span></p>
        </div>      
        <div className="flex-shrink-0">
           <Image src="/images/17.png" alt="Rocket Octopus" width={400} height={400}className="mt-8 md:mt-0 object-contain"/>
        </div>
      </div>
    </div>   
  </section>
</main>
  );
}