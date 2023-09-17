# RouteMaster

## Inspiration

Our project was born out of the frustration experienced during course selections when students constantly worry about whether they are on the right track to graduate in their chosen major, specialization, or minor. Navigating the confusing and complex undergraduate course calendar, filled with courses having multiple prerequisites, anti-requisites, specific term offerings, and restricted sequences, can be a daunting task. One of our team members, Shashwat, faced an especially challenging journey as he pursued multiple specializations and minors, struggling to fully comprehend the requirements.

## What it does

RouteMaster is a comprehensive solution that leverages the power of the Cockroachlab database to simplify the course planning process. Initially designed for the Bachelor of Mathematics program, it demonstrates the feasibility of our approach. Here's how it works:

1. **Database Integration**: RouteMaster utilizes the Cockroachlab DB to store math-related courses and their major requirements, hosting a sophisticated algorithm for course planning.

2. **User Input**: Users begin by selecting their desired major/specialization and co-op sequence. While our current implementation is tailored for the Bachelor of Mathematics program, our vision extends to other programs and universities.

3. **Algorithmic Magic**: Our algorithm extracts all the necessary courses for the chosen major, identifies their prerequisites from the extensive course list, and organizes a personalized course path. The system strives for an optimized schedule, often front-loading the workload and lightening it in later years.

## How we built it

We employed a multi-tiered approach to build RouteMaster:

- **Backend**: The Cockroachlab DB serves as the backbone, housing both data and the algorithm, which is crafted using JavaScript and SQL.

- **Frontend**: The user interface is a blend of HTML, CSS, and JavaScript, seamlessly connected to the backend database.

- **Data Collection**: We began by scraping the math undergraduate calendar, extracting vital information like course prerequisites, alternative prerequisites, specific degree requirements, and more.

- **Data Integration**: This scraped data was then uploaded into Cockroach DB, forming the basis for our algorithm's operation.

- **Data Presentation**: The algorithm outputs course plans to a JSON file, which the frontend reads and displays to the user.

## Challenges we ran into

Our journey was marked by several challenges:

1. **Last-minute Pivot**: We initially planned to work with ADHawk technologies but faced uncertainty due to hardware allocation issues. This forced us to pivot and adapt swiftly to our second-choice project, which led to a successful outcome.

2. **Web Scraping Complexities**: Extracting data from the undergraduate calendar posed difficulties, particularly for courses with intricate descriptions. We had to carefully consider the input parameters for our web scraping extension to ensure accurate results.

3. **Algorithmic Puzzles**: Crafting an efficient algorithm to assign courses to students, determine the optimal term, and accommodate various co-op sequences presented significant challenges.

## Accomplishments that we're proud of

We take pride in our achievements:

1. **Tech Learning**: We successfully learned and implemented Cockroach DB for data hosting, expanding our technical skillset.

2. **Web Scraping Mastery**: Our experience with web scraping opened doors to future projects that involve data extraction.

3. **Automated Course Planning**: We developed an algorithm that can automatically populate a student's course calendar, simplifying the academic journey.

## What we learned

Our journey with RouteMaster taught us invaluable lessons:

1. **Database Management**: Setting up and hosting data on an online database and utilizing SQL queries for project integration.

2. **Complex Algorithms**: We gained expertise in designing algorithms that factor in efficiency, duplicates, and various considerations.

## What's next for RouteMaster

The journey doesn't end here. We have exciting plans for RouteMaster's future:

1. **Algorithm Refinement**: Continuously improving the algorithm to achieve better course load distribution per term based on user input.

2. **Expansion**: Extending RouteMaster's functionality to cater to other universities, programs, and diverse academic considerations.

3. **Frontend Enhancement**: Revamping the frontend to align with the Figma mockup, offering an even more user-friendly experience.

