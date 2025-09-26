"use client";
import Image from "next/image";
import React from "react";
import Navbar from "../../components/includes/Navbar"
export default function Spotsection() {
  return (
    <main className="bg-#1C1C1C text-white px-6 py-16 ">
        <section id="Colloborate">
             <Navbar /> 
           <div className="flex flex-col items-center justify-center text-center px-6 py-16  text-white">
              <Image src="/images/Repository.png" alt="Repository Image"
               width={900} height={600} className="object-cover object-center" /> 
             <h4 className="text-gray-400 text-2xl font-bold  max-w-3xl text-left">
                Share all the repos that matter to your team to keep<br/>everyone on the same page
             </h4>     
             <p className="text-lg text-gray-300 max-w-3xl">
                Available in{' '}
                   <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
                   <span className="text-purple-400 font-semibold">GitKraken CLI</span>, or{' '}
                   <span className="text-purple-400 font-semibold">GitLens→</span>
            </p>
          </div>
          <div className="bg-#1C1C1C text-white px-6 py-16">
            <div className="max-w-6xl mx-80 flex flex-col md:flex-row items-start gap-10">
              <div className="flex-shrink-0 pt-2">
                 <Image src="/images/e99.png"alt="Vertical Icon"
                   width={60} height={20} className="align-middle inline-block" />
              </div>
              <div className="flex-1 space-y-10">        
                    <h1 className="text-4xl font-bold">Among the many benefits of Workspaces is<br />
                                  that you can onboard new devs to your team in<br />
                                   minutes, not months.
                    </h1>       
                     <Image src="/images/z.png"alt="Workspace UI"
                          width={700} height={600}className="rounded-lg shadow-lg" />          
                    <h4 className="text-white-500 text-xl font-bold">
                           Workspaces help you scale by enabling multi-repo Git<br />
                           actions and easy onboarding of new team members.
                    </h4>
                     <p className="text-lg">
                          Available in{' '}
                         <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
                         <span className="text-purple-400 font-semibold">GitKraken CLI→</span>
                     </p>        
                     <h1 className="text-4xl font-bold max-w-4xl">
                         Staying aligned is tough when you’re<br />trying to move fast — even more difficult<br />
                         when your team is spread across zip<br />codes, time zones & continents.
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
                <h4 className="text-white-500 text-2xl font-bold flex justify-center items-center">Our Workspaces Team View becomes mission control for<br/>distributed dev teams </h4>
                <p className="flex justify-center">Available in <span className="text-purple-400">GitKraken Desktop→</span></p>
            </div> 
  <section className="bg-#1C1C1C text-white px-6 py-15 mx-70">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">      
                 <div className="flex flex-col items-center pt-4">
                     <div className="rounded-full ">
                         <Image src="/images/e112.png" alt="Icon" width={150} height={70} />
                     </div>
                </div>                   
            <div className="flex-1 flex flex-col">
                    <h1 className="text-4xl font-bold leading-tight max-w-5xl text-left">Development is increasingly a team effort.<br/>And more than ever before, those teammates<br />
                                  aren’t sitting right next to you.
                    </h1>         
                       <Image src="/images/l.png" alt="Conflict Screenshot" width={800} height={400}className="rounded-lg shadow-lg"/>        
          <div className="max-w-2xl">
               <h4 className="text-xl font-semibold text-gray-100 mb-4 text-center">
                   Avoid costly collisions – especially with distributed teams –<br />
                   that can be the difference between success and failure.
               </h4>
                <p className="text-gray-400 text-center">Available in{' '}
                     <span className="text-purple-400 font-semibold hover:underline cursor-pointer">GitKraken Desktop →</span></p>
          </div>       
          <div className="bg-[#1C1C1C] p-8 rounded-xl shadow-lg max-w-3xl w-full">
                          <p className="text-sm text-gray-400 font-semibold mb-2">Git Facts</p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                          <h2 className="text-5xl font-bold text-white">92%</h2>
                           <p className="text-2xl text-white font-medium text-center md:text-left">
                            of developers say they spend their days (and nights)<br />
                            working as part of a team.</p>
                 </div>
                            <p className="text-sm mt-4 text-gray-400">Monorepo or Multirepo? eBook: a guide for optimal workflows.{' '}
                              <a href="#" className="text-purple-400 hover:underline">
                               Get it free (no email or account) </a></p>
                 </div>
                 </div>
                 </div>
    </section>    
    <section className="bg-#1C1C1C text-white py-5 px-6">
        <div className="flex-shrink-0">
            <Image src="/images/mean.png"alt="orbit illustration"
                width={200} height={100} className="rounded-lg shadow-lg py-10 mx-100"/>
        </div>
      <div className="flex flex-row md:flex-row  max-w-6xl mx-100 space-y-1 md:space-y-0 md:space-x-10">
          <div className="text-center md:text-left max-w-5xl  ">
               <p className="text-lg font-semibold mb-2">Part of a Dev Team?</p>
               <p className="text-md m ">
                  Add multiple team members to try GitKraken Client as an <br/>org for 30 days – 100% free & no credit card.
               </p>
               <p className="text-purple-400 text-sm font-medium cursor-pointer hover:underline">
                      Add a Teammate(s) for a Free 30-Day Business Trial
               </p>
         </div>    
         <div className="flex-shrink-0">
             <Image src="/images/rocket.png"alt="rocket illustration"
              width={300} height={100}className="rounded-lg shadow-lg text-left py-20"/>
         </div>
       </div>
    </section>
    </section>
   <section id="connect">
        <Navbar/> 
         <section className=" px-6 py-16 flex items-center justify-center">        
           <div className="flex flex-col md:flex-row items-start max-w-6xl w-full gap-10">                  
            <div className="flex-shrink-0 pt-2">
                  <Image src="/images/e1122.png"alt="Vertical Icon" width={80} height={20}
                       className="align-middle" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mt-2">
                 Enabling Devs to Stay Connected – To Their Tech Stack and Their Workflow
             </h2>
              <h5 className="text-xl mt-4">Connect</h5>
              <h1 className="text-4xl font-bold mt-6 ">
                  Powerful integrations to GitHub, GitLab,<br />
                  Bitbucket, Azure, Jira & more – so we fit<br />
                  right in with your existing workflow &<br />stack.
             </h1>
                 <Image src="/images/13.png"alt="Integration Illustration"width={600}height={400}
                       className="rounded-lg shadow-lg mt-12"/>
                <p className="text-md text-gray-400 mt-6 ">
                   Connect seamlessly with the Git hosting providers, planning <br />
                   tools and other systems you use daily</p>
             </div>
           </div>
       </section>
       <section className="bg-#1C1C1C text-white px-6 py-16 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-start max-w-6xl w-full gap-10">        
          <div className="flex-shrink-0 pt-2">
            <Image src="/images/e121213.png"alt="Vertical Icon" width={50} height={20} className="align-middle"/>
         </div>       
         <div className="flex-1 space-y-12">
          <h1 className="text-3xl font-bold max-w-4xl text-left leading-tight">
            Continuity across our entire suite of dev tools,<br />
            so when you do something in the Client, your<br />
            IDE or CLI update in real time. That’s a magical<br />
            developer experience!
          </h1>
          <div className="flex flex-col items-start space-y-6">
            <Image
              src="/images/14.png"alt="Dev Tools Sync"width={800} height={200}className="rounded-lg shadow-lg"/>
            <h4 className="text-white-500 text-xl font-bold flex align-center">
              Changes you make in one of our tools – show up in<br/> all our tools, in real time
            </h4>
            <p className="text-lg text-left">
              Available in{' '}
              <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
              <span className="text-purple-400 font-semibold">GitKraken CLI →</span>, and{' '}
              <span className="text-purple-400 font-semibold">GitLens →</span>
            </p>
           </div>
            <h1 className="text-4xl font-bold max-w-4xl text-left leading-tight">
                 Experience how easy it can be to manage<br />tasks and keep your context intact. A <br />
                 smoother, more efficient workflow is not<br /> just an aspiration, it's your new reality.
           </h1>
        </div>
      </div>
    </section>
           <div className="relative h-[60vh] w-full overflow-hidden">                      
                             <Image src="/images/bg7.png"alt="Background"fill className="object-cover object-center z-0"/>                       
                         <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                               <Image src="/images/15.png"alt="Foreground"width={400}height={200}
                                 className="rounded-lg shadow-2xl w-full max-w-2xl mt-35"/>
                        </div>
           </div>
          <div>
             <h4 className="text-white-500 text-xl font-bold flex justify-center  align-center">
                Seeing issues where you’re actually doing work saves time and<br/> minimizes annoying context switching</h4>
             <p className="text-lg flex justify-center align-center">Available in{' '}
             <span className="text-purple-400">GitKraken Desktop</span>,{' '}
             <span className="text-purple-400">GitKraken CLI →</span> </p>    
          </div>        
        <section className=" px-6 py-20 flex justify-center">
          <div className="flex items-center gap-6 max-w-6xl w-full">      
              <div className="relative">    
                 <div className="absolute top-0 left-[28px] h-full w-[2px] "></div>      
                  <Image src="/images/e888.png"alt="Vertical Icon"width={80}height={44}className="align-middle"/>
                 </div>  
                 <div>
                  <p className="text-sm text-gray-400 font-semibold mb-2">Git Facts</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                     <h2 className="text-4xl md:text-6xl font-extrabold whitespace-nowrap">ONLY 50%</h2>
                     <p className="text-lg md:text-2xl font-semibold">of developers feel confident they have the tools and context<br />
                        they need to work effectively on their company’s code.</p>
                 </div>
             </div>
          </div>
       </section>
        <section className=" text-white px-6 py-10 flex justify-center items-center">
             <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 mx-20">
                <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold mb-6 ">Oh, hey,we weren’t expecting you way down here!</h2>
                <h4 className="text-lg font-bold text-gray-300 mb-4">
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
    </section>   
  </section>
</main>
  );
}