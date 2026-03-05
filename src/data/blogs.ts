export interface BlogPost {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    coverImage: string;
    tags: string[];
    content: string;
}

export const blogs: BlogPost[] = [
    {
        slug: "messy-truth-data-pipelines-at-scale",
        title: "The Messy Truth About Building Data Pipelines at Scale",
        category: "Data Engineering",
        date: "February 28, 2026",
        readTime: "7 min read",
        excerpt:
            "Nobody talks about the unglamorous middle part. The part where your pipeline works beautifully on your local machine, breaks entirely in production, and your phone starts buzzing at 2am. Here is what I actually learned building ETL at scale with Snowflake.",
        coverImage: "/blog-cover-pipelines.png",
        tags: ["Snowflake", "ETL", "Data Engineering", "Lessons Learned"],
        content: `<p>When people ask me what I do, I say I build data pipelines. And usually, their eyes glaze over. I totally get it because "data pipelines" sounds about as exciting as filing taxes. But here is the thing nobody warns you about: building data infrastructure at scale is equal parts architecture, firefighting, and staying deeply humble.</p>

<p>I have spent the last four years building data systems at <strong>Grow Indigo</strong>, an agritech startup serving over 2 million farmers across India. We process everything you can imagine. Soil health metrics, satellite imagery, payment logs, yield forecasts. At that scale, the difference between a decent pipeline and a messy one is not just performance. It is literally business continuity.</p>

<h3>The problem nobody warns you about: schema drift</h3>

<p>When I first joined, we had a handful of data sources feeding into Snowflake. They were clean, predictable, and well documented. Eighteen months later, we had over thirty upstream sources. Each one had its own team, its own release cycle, and very creative ideas about what a valid date format should look like.</p>

<p>Schema drift nearly took us down twice. The first time, a vendor silently renamed a column. Just renamed it without telling anyone. Our downstream aggregations started returning nulls on a core metric that drove daily business decisions. We only caught it six hours later. The second time, a field changed its data type from a string to a float, and our casting logic threw an exception that cascaded through three models before anyone noticed.</p>

<p>What finally saved us was not a fancy expensive tool. It was <strong>data contracts</strong>. We set up a simple, enforced agreement between the people producing data and the people consuming it. We agreed on what the schema looks like, what ranges are valid, and exactly who gets paged when something breaks. It is not glamorous. No vendor is giving a keynote on it. But it absolutely saved our nights and weekends.</p>

<h3>Writing Snowflake macros changed how I think about code reuse</h3>

<p>One of the best decisions we made was heavily investing in reusable <strong>Snowflake SQL macros</strong>. Before we started doing this, every analyst was writing their own version of the same business logic. Everyone had slightly different ways to handle edge cases, slightly different date truncation, and subtly inconsistent null handling. The result was data that looked correct on screen, but produced different numbers depending on who you asked.</p>

<p>Macros gave us a single source of truth. Things like converting an agricultural season code to a start and end date, or calculating a weighted average yield adjusted for land area. These are complex enough to get wrong but simple enough that everyone needs them. Once we centralised that logic, data discrepancies between teams dropped almost to zero. Query development time fell by around forty percent. And crucially, new team members could finally trust the numbers.</p>

<h3>Orchestration is where plans meet reality</h3>

<p>We orchestrate everything with scheduled tasks and dependency chains in Snowflake, with dbt handling the transformations. On paper, the architecture looks beautiful. In practice, there is always a job that runs slightly longer than expected, or a random network hiccup that causes a retry storm, or a massive surge in source data that breaks all your runtime assumptions.</p>

<p>My biggest takeaway here is to <strong>build for failure, not success</strong>. You have to assume jobs will fail, and they will usually fail at the worst possible time. Design your pipelines so that a failure is immediately obvious because of good alerting. Make sure it is recoverable by writing idempotent code. And ensure it is bounded so a crash in one place does not bring down the whole system. If you do those three things, you will sleep a lot better.</p>

<p>Stop optimising for the happy path. The architecture that looks incredibly elegant on a whiteboard will eventually meet real world chaos. Undocumented source changes, infrastructure outages, shifting requirements, and data volumes that triple overnight. So design for resilience instead of perfection. Document your decisions. And please, never trust a timestamp without checking the timezone.</p>`,
    },
    {
        slug: "what-2m-farmers-taught-me-about-software",
        title: "What 2M Farmers Taught Me About Building Software",
        category: "Product & Engineering",
        date: "February 15, 2026",
        readTime: "6 min read",
        excerpt:
            "Software built in air-conditioned offices for users who are out working in the field usually misses the point entirely. Spending four years in AgriTech completely shifted my perspective on what good software actually looks like.",
        coverImage: "/blog-cover-agritech.png",
        tags: ["AgriTech", "Product Thinking", "UX", "Scale"],
        content: `<p>The first time I saw our platform being used in the real world was incredibly eye opening. It was not in a controlled demo or a QA session. I watched a field agent trying to use our app on a patchy 4G connection in rural Maharashtra. I felt genuinely uncomfortable watching him struggle. Not because the app crashed, thankfully it did not. I felt uncomfortable because I suddenly realised how many assumptions we had baked into the design. Things that only make sense if you are sitting at a desk with gigabit internet.</p>

<p>That feeling of discomfort turned out to be one of the most valuable lessons of my career.</p>

<h3>Your user is not you</h3>

<p>I know this sounds incredibly obvious. Every product management book talks about it. But there is a massive difference between intellectually knowing a fact, and feeling the gap yourself when you watch someone actually try to use the thing you built.</p>

<p>Our users are field agents, farmers, and agronomy advisors. They operate in areas with terrible connectivity. They are almost always multitasking. They are talking to a farmer while filling in a digital form, switching between our app and their camera to take soil photos, and trying to navigate a touchscreen with one hand while standing in glaring direct sunlight. Features we designed under the assumption of a quiet, focused session became massive friction points in the real dirt-and-sweat world.</p>

<p>Realizing this drove a ton of changes that had nothing to do with writing better backend code and everything to do with empathy. We aggressively cut down the number of required fields in all our key forms. We added proper offline modes so agents could capture data anywhere. We stopped using abstract loading spinners and made error messages sound like actual human advice. They were small changes, but the impact was enormous.</p>

<h3>Scale forces you to be honest</h3>

<p>When your platform serves over two million users in 15 different states, there is nowhere you can hide. A bug that affects a tiny fraction of a percent of users is suddenly a bug affecting thousands of real people. That rare edge case you decided to ignore because it seemed too complex? Someone hits it every single day.</p>

<p>Agricultural data is incredibly messy. It is seasonal, deeply regional, very specific to certain crops, and full of legitimate exceptions. A farmer growing paddy in Punjab operates with entirely different soil, weather conditions, and market rates than a soybean farmer in Madhya Pradesh. Our data models had to somehow absorb all that complexity without completely breaking the user interface. Striking that balance between being flexible enough to work everywhere, and concrete enough to remain useful, is one of the hardest things we tackled.</p>

<h3>Data needs context, it cannot replace it</h3>

<p>One of the features we rely on most is a predictive analytics module that forecasts crop yields with roughly 92 percent accuracy. If you put that on a dashboard in a boardroom, it looks amazing. But when an advisor is having a real conversation with a farmer in the field, that number needs context. What assumptions is this model actually making? What happens to the forecast if the monsoon is two weeks late? What if there is a sudden pest outbreak?</p>

<p>Handing over raw predictions without explaining them just erodes trust. We had to learn how to display confidence intervals clearly. We started surfacing the specific input factors that caused the prediction to go up or down, giving our advisors the context they needed to actually explain the calculation rather than just reading a number off a screen. We realized that data literacy is not just about educating the user. It is about designing systems that are honest about their own limitations.</p>

<p>Building software for people whose daily reality looks nothing like your own is genuinely difficult. But it is also the best education in what building user-centered products actually means.</p>`,
    },
    {
        slug: "going-multi-tenant-lessons-from-rewriting-a-saas-platform",
        title: "Going Multi-Tenant: Lessons from Rewriting a SaaS Platform",
        category: "Architecture",
        date: "January 30, 2026",
        readTime: "8 min read",
        excerpt:
            "Migrating a live platform from a monolithic architecture to a multi-tenant SaaS model without causing downtime is basically controlled chaos. Here is what we did right, what we messed up, and what I would do differently next time.",
        coverImage: "/blog-cover-multitenant.png",
        tags: ["SaaS", "Architecture", "Multi-Tenant", "Engineering"],
        content: `<p>There is a very specific type of engineering anxiety that kicks in when you are asked to rewrite a system that millions of people are actively using. Every line of code you change is live. Every mistake you make has an immediate blast radius. Unlike starting a fresh new project, you cannot just turn the servers off for a weekend and swap the engine out. The platform has to keep humming while you rebuild it mid flight.</p>

<p>That is exactly what we faced at Grow Indigo when we started moving from our old monolithic platform to a proper multi-tenant architecture. I led the technical execution of this shift, and I can say it produced some of the most demanding and rewarding code I have ever written.</p>

<h3>Why monoliths actually fail at scale</h3>

<p>The tech industry loves the narrative that monoliths are inherently bad and microservices will magically fix everything. That is just not true. Our monolith was actually a fantastic piece of engineering. It survived rapid growth, multiple changes in business direction, and serious real-world scale. The architecture itself was not the problem. The deep coupling was.</p>

<p>As we started onboarding massive enterprise clients, the fact that we could not easily isolate their environments became a complete roadblock. We needed isolated data, configurations, billing cycles, and user roles. But one client's specific requirements kept bleeding into another client's experience. Our data boundaries were based on trust and implicit rules rather than hard enforced walls. Any customisation for a tenant required code changes, not just a config flip. That was the moment we knew we had to evolve.</p>

<h3>The decisions that actually mattered</h3>

<p><strong>Tenant isolation strategy:</strong> We decided on a hybrid approach. We shared the application layer, isolated the schemas per client inside Snowflake, and used row level security on our main operational database. This gave us the cost benefits of shared servers while keeping client data strictly walled off. Giving every single tenant their own full database would have been cleaner conceptually, but keeping that running at our scale would have been an operational nightmare.</p>

<p><strong>Strangler fig pattern:</strong> Instead of freezing all product development for months to do a massive rewrite, we routed all new features through the new architecture while leaving the old systems running. It was slower. It was definitely messier. But it meant we never experienced a catastrophic release day where everything broke at once.</p>

<p><strong>Feature flags everywhere:</strong> Every single tenant aware feature was put behind a toggle. This let us roll things out slowly. We would test it on internal users first, gather data, fix whatever broke, and only then enable it for paying clients. Writing feature flags adds overhead, but it gave us the safety net we desperately needed.</p>

<h3>What went wrong and what we learned</h3>

<p>Our biggest mistake was how we handled <strong>session context propagation</strong>. In a multi-tenant app, every time a service makes a call, it absolutely must know which tenant it belongs to. We built a very clean design for this in our main API layer, but we rushed the audit of our async jobs and background workers. Three months into the migration, we discovered that under high concurrency, certain background processes were saving data to the wrong tenant's database.</p>

<p>The root cause was a thread local variable that was getting lost across async boundaries. The code fix was actually tiny. Finding the bug, however, was incredibly humbling. It serves as a great reminder that distributed systems have a funny way of punishing the assumptions you didn't even know you were making.</p>

<h3>The massive cost cut nobody expected</h3>

<p>We saw an amazing unintended consequence of this rewrite. Once we finally had clear visibility into exactly how much compute each tenant was using, we realised a very small group of clients were causing almost all of our infrastructure costs. Under the old architecture, that data was totally invisible. With the new system, we started heavily optimising. We built dedicated compute tiers, cached specific heavy queries, and tailored our database access patterns. Within six months, our overall infrastructure bill dropped by 35 percent.</p>

<p>Sometimes the architecture you build just to make your product function better ends up being vastly cheaper to run. That is a very rare and very satisfying win.</p>`,
    },
    {
        slug: "why-every-developer-should-build-something-they-actually-use",
        title: "Why Every Developer Should Build Something They Actually Use",
        category: "Craft & Philosophy",
        date: "January 12, 2026",
        readTime: "5 min read",
        excerpt:
            "A lot of side projects fail because they are overambitious and try to solve problems the developer does not actually have. Building things I genuinely needed taught me more about product design than years of enterprise coding.",
        coverImage: "/blog-cover-sideprojects.png",
        tags: ["Side Projects", "Entrepreneurship", "Craft", "Developer Life"],
        content: `<p>Almost every software engineer I know has a graveyard folder on their computer full of abandoned side projects. Apps they got super excited about on a Friday night, started building, and then completely gave up on by Sunday afternoon when the reality of finishing it sank in. I absolutely have a few of those folders myself. But lately, I have stumbled onto something that actually works. Building software that I personally need, or that people I actually know need right now.</p>

<p><strong>TechFit Active</strong> started as a completely casual conversation. A friend of mine manages a gym, and he was losing his mind trying to track everything manually. He had equipment maintenance schedules on a spreadsheet, member follow ups in a WhatsApp group, and payment reminders stored purely in his head. He didn't want or need a massive enterprise fitness platform with a hundred features. He just needed a tool that worked exactly the way his brain worked.</p>

<h3>The feedback loop changes everything</h3>

<p>When you sit down to build something for yourself or a close friend, you cannot hide behind an abstract Jira ticket or user story. You are the user. When a screen feels clunky, you feel it immediately. When a form has one too many steps, you get annoyed. When an error message is unhelpful, you are the one getting stuck. The product feedback loop drops from taking weeks to taking hours.</p>

<p>In massive enterprise companies, the distance between the person writing the code and the person actually using the software is huge. Product managers look at user research, designers draw screens based on the research, and engineers write code based on the drawings. By the time the software ships, it barely resembles the original problem it was supposed to solve. When you build for yourself, all those layers vanish. Every point of friction is your own point of friction.</p>

<h3>Constraints force you to be creative</h3>

<p>At my day job, I have access to cloud infrastructure, a full dev ops team, strict code review policies, and a room full of brilliant colleagues to debate ideas with. When I work on a side project, I have a laptop, an internet connection, and maybe a few hours on a Saturday morning. I don't have time to overcomplicate things.</p>

<p>Do I write a custom authentication system from scratch or just plug in a third party library? In a corporate environment, we might spend a whole week writing a spec doc to evaluate options. On a side project, I just pick a library, write the code, and keep moving. Sometimes those fast decisions end up being the wrong ones. But learning how to make technical decisions quickly, and dealing with the consequences when they go wrong, is an amazing skill you just do not get to practice when every move has to be approved by a committee.</p>

<h3>You finally figure out what finished means</h3>

<p>Enterprise software literally never feels finished. There is always going to be another sprint, another bug fix ticket, and a massive backlog of user requests waiting for you on Monday. But side projects force you to define what finished actually means for yourself. It is way harder than it sounds. Is it finished when the code is clean? Finished when it solves the main problem? Finished when it looks pretty?</p>

<p>Working on things like TechFit, or Seventy Seven, or Zavlin Bookkeeping taught me a huge lesson. For every one of those projects, there was a moment where I had to say the app was good enough, stop tweaking the CSS, and actually hand it over to a real human being who was going to rely on it. Taking on that kind of responsibility entirely on your own makes your technical judgment so much sharper.</p>

<p>I would encourage any developer reading this to try and maintain at least one active side project. It is not about making passive income, though that is obviously nice. It is about remembering why you learned to code in the first place. Taking absolutely nothing, and turning it into something that solves a real problem.</p>

<p>Just start incredibly small. Build a tool you will actually use. Ship it before you think it is perfect. The rest of the lessons will follow on their own.</p>`,
    },
];
