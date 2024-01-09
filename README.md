Inspiration
Our project was born out of the frustration experienced during course selections when students constantly worry about whether they are on the right track to graduate in their chosen major, specialization, or minor. Navigating the confusing and complex undergraduate course calendar, filled with courses having multiple prerequisites, anti-requisites, specific term offerings, and restricted sequences, can be a daunting task. One of our team members, Shashwat, faced an especially challenging journey as he pursued multiple specializations and minors, struggling to fully comprehend the requirements.

What it does
RouteMaster is a comprehensive solution that leverages the power of the Cockroachlab database to simplify the course planning process. Initially designed for the Bachelor of Mathematics program, it demonstrates the feasibility of our approach. Here's how it works:

Database Integration: RouteMaster utilizes the Cockroachlab DB to store math-related courses and their major requirements, hosting a sophisticated algorithm for course planning.

User Input: Users begin by selecting their desired major/specialization and co-op sequence. While our current implementation is tailored for the Bachelor of Mathematics program, our vision extends to other programs and universities.

Algorithmic Magic: Our algorithm extracts all the necessary courses for the chosen major, identifies their prerequisites from the extensive course list, and organizes a personalized course path. The system strives for an optimized schedule, often front-loading the workload and lightening it in later years.

How we built it
We employed a multi-tiered approach to build RouteMaster:

Backend: The Cockroachlab DB serves as the backbone, housing both data and the algorithm, which is crafted using JavaScript and SQL.

Frontend: The user interface is a blend of HTML, CSS, and JavaScript, seamlessly connected to the backend database.

Data Collection: We began by scraping the math undergraduate calendar, extracting vital information like course prerequisites, alternative prerequisites, specific degree requirements, and more.

Data Integration: This scraped data was then uploaded into Cockroach DB, forming the basis for our algorithm's operation.

Data Presentation: The algorithm outputs course plans to a JSON file, which the frontend reads and displays to the user.
