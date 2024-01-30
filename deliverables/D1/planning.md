# PNYX/Team 7
> _Note:_ This document will evolve throughout your project. You commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What is the product?

 > Short (1 - 2 min' read)
 * Start with a single sentence, high-level description of the product.
 * Be clear - Describe the problem you are solving in simple terms.
 * Specify if you have a partner and who they are.
 * Be concrete. For example:
    * What are you planning to build? Is it a website, mobile app, browser extension, command-line app, etc.?      
    * When describing the problem/need, give concrete examples of common use cases.
    * Assume your the reader knows nothing about the partner or the problem domain and provide the necessary context. 
 * Focus on *what* your product does, and avoid discussing *how* you're going to implement it.      
   For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
 * **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.

 * The product is a web app and mobile app for PNYX that allows users to listen to music by building them a playlist based on their taste using machine learning. Users choose their favourite genres and artists and listen to music without seeing the artist or name of the song. They have 5 reveals per day, and they can purchase the song and get exclusive perks from the artist. Users can share their findings with their friends and list bought songs on the marketplace with their own price. This product helps support artists as it prioritizes meritocracy and offers them fair compensation.
mockup: https://www.youtube.com/watch?v=Xhmx9OsfqSk
![image](https://github.com/csc301-2024-s/deliverable-1-25-pnyx/assets/74018027/d9da5ba9-6767-4d91-a7ff-e854bfcd9428)


#### Q2: Who are your target users?

* Musical Artists who:
   -	Are looking for alternatives to popular music streaming apps (such as Spotify or Apple Music) as currently, they only earn around 12% of the industry revenue (as the rest goes to the aforementioned apps, and their labels etc.)
   -	Are looking to try out new genres of music outside of their usual output, whether that is due to a certain image they have built around them, or if their producers/label/managers want them to put out what is expected to be successful.
   -	Want to earn a 98% profit on anything they sell through the PNYX app.
   -	Want to be recognized only on the quality of music they create.
* Fans and “superfans” of artists who:
  -	Want to engage with music in a more gamified manner through a “blind audition” style.
  -	Want to engage purely with the music regardless of marketing and prior biases/knowledge (or lack thereof) of artists.
  -	Want access to exclusive perks such as (discord conversations, one on one conversations, meet and greets, tickets to concerts)
  -	Want to directly support artists.
  -	Want ownership of limited-edition versions of songs.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

> Short (1 - 2 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how and how much?)
    * Allow users to discover new information (which information? And, why couldn't they discover it before?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)
    * Does this application exist in another form? If so, how does your differ and provide value to the users?
    * How does this align with your partner's organization's values/mission/mandate?
  
    * This product allows users to listen to music in an unbiased way as they do not know the artist or the name of the song when listening. It also allows them to discover new and diverse music based on their music taste chosen by the ML algorithm and they are able to discover more music that they enjoy. Users also have access to unreleased and exclusive music and perks like exclusive merchandise, show tickets, or meet-and-greets. For artists, they would receive better compensation compared to other music platforms.  As of now, other people use Spotify, YouTube, and Apple Music for listening to and discovering music. Neither of these apps would give users the exclusive perks discussed or allow users to listen to music ‘blindly’ so users aren’t discovering music in an unbiased way. PNYX’s values are about supporting artists and changing the way we discover music, and this app does this by fairly compensating artists and by listening to music blindly.


#### Q4: What are the user stories that make up the Minumum Viable Product (MVP)?

**User Stories:**
1. User logs in. Program loads their account, preferences and other details, and user can start interacting with the program.
2. If the user is not logged in, they can register for an account. They can choose to be either creator or a listener (later mentioned as user). They can set up their profile - name, password, photo, connect to payment system, etc. Everything is secure (passwords are hashed, payments are processed by most reliable stakeholders, etc.
3. User wants to pick some new songs. They tap «start listening». Then they choose their favorite genres and artists (more options may be applied later), and a ML model extracts specific features and generates a playlist with songs that are expected to suit the user. After user starts listening to the playlist, songs are loaded anonymously, so they don’t know what they're listening to.
4. If user likes a song, they can either save it or reveal it. Saved songs are displayable in their account. There is limited amounts of reveals per day (to make user think before revealing).
5. User accesses and listens to their saved songs anytime while they are available (if it is still in stock), but they all look the same (don’t have name and all have similar icons).
6. If the user likes a song, they can purchase it. It is done via defi or secure payment, provided by reliable 3rd parties. There is a limited time to purchase the songs and there is also a limited number of copies of the song available for purchase. Scarcity also affects the price - the less available copies of the song, the higher the price becomes, and after every single copy of the song is purchased, users can’t access this song anymore. After the song is revealed, it becomes visible for the user in their saved tracks menu. After the song is purchased, it gets transferred into their collection/profile menu and they are also given access to some rewards (offline meeting, tickets, VIP, souvenirs, etc.)
7. Creators can upload new songs. While doing that, they can specify benefits for the buyer. Each time a sale goes through, the creator gets their money directly on their banking or blockchain account.

Proof of partner approval:
![image](https://github.com/csc301-2024-s/deliverable-1-25-pnyx/blob/main/deliverables/D1/proof1.PNG)
![image](https://github.com/csc301-2024-s/deliverable-1-25-pnyx/blob/main/deliverables/D1/proof2.PNG)

#### Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.

> Short (1-2 min' read max)
 * What is the technology stack? Specify languages, frameworks, libraries, PaaS products or tools to be used or being considered. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they?

 * We are deciding on using the languages HTML, CSS, JavaScript and the framework React for the front end. The backend is done in Python and Truffle development environment. The deployment will be done on .xyz domain of our partners (pnyx.xyx). The Stripe API is used for payment. We will be using clean architecture principles and design patterns. 


----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please ask on Piazza.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.
5. You will only reference the work you did in your resume, interviews, etc. You agree to not share the code or software in any capacity with anyone unless your partner has agreed to it.

**Your partner cannot ask you to sign any legal agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

Briefly describe which option you have agreed to:
Option 5 - We are allowed to mention this project in our resume, interviews and such but are unable to share any code with anyone without the consent of our partner.

----

## Teamwork Details

#### Q6: Have you met with your team?

* 3 Team Fun Facts:
  - Lance likes to collect sneakers.
  - Maroosh has been to 10 different schools throughout his life.
  - C++ was the first coding language that Andrew learned.
* For the team building activity, we played Scribl.io together (screenshot attached below) as a fun way to get to know each other. It was difficult to meet in person due to scheduling issues, so we decided that this was the best available option.
* ![image](https://github.com/csc301-2024-s/deliverable-1-25-pnyx/assets/76667567/9d2cb071-ef0c-4346-8aaa-0558ea3a3108)



#### Q7: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. One person may have multiple roles.  
 * Add role(s) to your Team-[Team_Number]-[Team_Name].csv file on the main folder.
 * At least one person must be identified as the dedicated partner liaison. They need to have great organization and communication skills.
 * Everyone must contribute to code. Students who don't contribute to code enough will receive a lower mark at the end of the term.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * Why did you choose them to take that role? Specify if they are interested in learning that part, experienced in it, or any other reasons. Do no make things up. This part is not graded but may be reviewed later.

 * The roles we have are partner liaison who is responsible for communication between the team and partner, project manager who is responsible for planning and managing the team, front-end developer who is responsible for developing the front-end features of the app, backend developer who will be helping with any backend work needed, and ML developer who will work on the music ML recommendation. Thomas is interested in frontend/backend developer because he wants to learn it since it is important in today’s job market. Andrew is interested in ML developer because he had previous projects, project manager because he has good communication skills and partner liaison. Rakan is interested in frontend and backend developer because he has past experience in backend from an internship and experience in ML. Maroosh is interested in frontend and backend developer because he wants to learn and gain more formal experience in this area to help secure internships and build connections within the industry. Lance is interested in partner liaison and interested in learning frontend and backend development. Vidhi is interested in frontend and backend development to learn new technologies and skills that would be helpful for an internship.



#### Q8: How will you work as a team?
  
   * Meet at least once a week (tentatively on Fridays) online through discord, open to meeting more if needed.
   * The purpose of meeting will be to discuss current progress, any issues that have arisen and how we want to proceed. If there is a deliverable due, we will discuss that as well – so a weekly sync meeting.
  
#### Q9: How will you organize your team?

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
 * We want to understand:
   * How do you keep track of what needs to get done? (You must grant your TA and partner access to systems you use to manage work)
   * **How do you prioritize tasks?**
   * How do tasks get assigned to team members?
   * How do you determine the status of work from inception to completion?
  
   * We will use a task board to organize all our tasks and determine the tasks that needs to be done, their deadlines and who is working on it. As tasks are being worked on, the status of the task can be updated to in progress by the member working on it and once it is done it can be updated to completed. We will have regular meetings and meeting minutes to document what we discussed in the meeting. During the meetings, we will discuss all our tasks and decide who wants to work on what task. To prioritize tasks, we will look at any dependences, the time sensitivity, impact, etc and then rank tasks based on their urgency. 


#### Q10: What are the rules regarding how your team works?

**Communications:**
 * What is the expected frequency? What methods/channels will be used? 
 * If you have a partner project, what is your process for communicating with your partner?
 
**Collaboration: (Share your responses to Q8 & Q9 from A1)**
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
 * How will you address the issue if one person doesn't contribute or is not responsive?

**Communications:**
* Meet team members at least once a week through Discord calls, but will be communicating through Discord text messages consistently (almost every day).
* Meet PNYX partners at least once a week through Zoom calls (tentatively every Friday), other communication through emails.

**Collaboration:**
* Roles of interest (Assignment 1, Q8):
  - Maroosh: Full-stack developer, Backend developer, Frontend developer, Database developer
  - Lance: Frontend developer, Backend developer, Team manager, Partner Liaison
  - Thomas: Frontend/Backend Developer
  - Vidhi: Frontend/Backend developer
  - Shakeeb: Frontend/Backend devloper
* What can each member contribute to the team? (Assignment 1, Q9):
  - Maroosh: I have experience in HTML, CSS, JavaScript, SQL (Postgres), Python, and Java (though I might need a refresher with Java). I am currently taking CSC309, so I should be helpful in web programming by learning React, Django, and RESTful APIs. I am also a highly motivated individual and work well in a team setting. I am open to communication and receptive to advice and suggestions.
  - Lance: Expertise in python, java, SQL, HTML, CSS, REST APIs. Looking forward to focusing more on working with the frontend and learning new technologies. I would also like to work with backend a bit in order to gain a well-rounded understanding of the entire project.
  - Thomas: Learning backend and frontend at the moment so I may be able to contribute more in those field for the team. Highly active online to receive and give feedback.
  - Vidhi: I have experience in Python, and HTML, CSS, Javascript, React, SQL and web dev so I can contribute to frontend, backend and database
  - Shakeeb: I possess a well-rounded background in both Frontend and Backend development. My expertise includes utilizing Python (+ Flask) and Java for Backend development, coupled with proficiency in HTML, CSS, ReactJS, and RESTful APIs for Frontend developemnt. Currently learning Django.
* How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
  - We will set consistent reminders, make discord events and make sure to communicate often to ensure that team members attend meetings.
* How will you address the issue if one person doesn't contribute or is not responsive?
  - At first, we will try to reach out and remind them that they are not contributing enough or are being unresponsive. The next step would be to have a discussion within the team, as well as directly with the person in question, to explain to them how their actions are negatively impacting the group, and remind them that further action will be taken unless they get back on track. If the issue still persists, we will contact our TA and report the issue directly.


## Organisation Details

#### Q11. How does your team fit within the overall team organisation of the partner?
* Given the team structure of your partner, what role do you think your team will play?
* Examples include product development that includes developing new features, or quality assurance that includes developing features that test the product reliability, or software maintenance that includes fixing crucial bugs in the product.
* Provide examples of why you think you fit this role.

* Our team will play the role of the front-end developers, implementing the interactive front-end features for the app. We think we fit this role because the backend is already mostly done, and the first priority is to have a front-end working so they have a MVP. As of now, there is no existing front-end so we believe that our team will be fitting in as the front-end development team.


#### Q12. How does your project fit within the overall product from the partner?
* Look at the big picture of the product and think about how your project fits into this product.
* Is your project the first step towards building this product? Is it the first prototype? Are you developing the frontend of a product whose backend is developed by the partner? Are you building the release pipelines for a product that is developed by the partner? Are you building a core feature set and take full ownership of these features?
* You should also provide details of who else is contributing to what parts of the product, if you have this information. This is more important if the project that you will be working on has strong coupling with parts that will be contributed to by members other than your team (e.g. from partner).
* You can be creative for these questions and even use a graphical or pictorial representation to demonstrate the fit.

* Our project’s priority will be do fully implement the frontend of the PNYX mobile app to have it ready to be tested within 2 months. Thus, we are essentially building the frontend for the first prototype in real user hands. The main functionality of the backend has already been developed by the partner, however there is room for additions, such as improving the ML models for song recommendation and user matching, as well as moving from Stripe API to a blockchain integration based approach for payment and transaction management. If tester feedback is given back while we are still on this project, we will be implementing that as well.
