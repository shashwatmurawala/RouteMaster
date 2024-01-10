# RouteMaster

## Inspiration
RouteMaster was inspired by the difficulties students face during course selection, particularly in aligning with the requirements for their majors, specializations, or minors. Our team member Shashwat's challenges in navigating multiple specializations and minors highlighted the need for a streamlined solution.

## What It Does
RouteMaster is a comprehensive tool developed to simplify the course planning process, leveraging the Cockroachlab database. Initially tailored for the Bachelor of Mathematics program, it demonstrates the feasibility of extending this solution to other programs and universities.

### Features
- **Database Integration:** RouteMaster employs the Cockroachlab DB to manage math-related courses and their major requirements, supported by a sophisticated algorithm for course planning.
- **User Input:** Users can select their desired major/specialization and co-op sequence, with a vision to expand this feature to encompass more programs and universities.
- **Algorithmic Magic:** The core algorithm extracts necessary courses for a chosen major, organizes them based on prerequisites, and creates a personalized course path for optimized scheduling.

## How We Built It
RouteMaster was developed using a multi-tiered approach:

- **Backend:** Leveraging the Cockroachlab DB as the backbone, it houses data and the algorithm, crafted with JavaScript and SQL.
- **Frontend:** A blend of HTML, CSS, and JavaScript forms the user interface, seamlessly connected to the backend.
- **Data Collection:** The process began by scraping the math undergraduate calendar to extract vital course information.
- **Data Integration:** Scraped data was uploaded into Cockroach DB, forming the foundation for the algorithm.
- **Data Presentation:** The algorithm outputs course plans to a JSON file, read and displayed by the frontend.

## Challenges We Ran Into
- **Last-Minute Pivot:** Initially planned to work with ADHawk technologies, we shifted to this project due to hardware allocation issues.
- **Web Scraping Complexities:** Extracting detailed course data presented challenges, particularly for courses with intricate requirements.
- **Algorithmic Puzzles:** Developing an efficient algorithm for course assignment and optimal term planning was a significant challenge.

## Accomplishments That We're Proud Of
- **Tech Learning:** Successfully implemented Cockroach DB for data hosting.
- **Web Scraping Mastery:** Gained valuable experience in data extraction.
- **Automated Course Planning:** Developed an algorithm for automatic course calendar population.

## What We Learned
- **Database Management:** Skills in hosting data on an online database and utilizing SQL for integration.
- **Complex Algorithms:** Experience in designing efficient and comprehensive algorithms.

## What's Next for RouteMaster
- **Algorithm Refinement:** Continual improvement for better course load distribution.
- **Expansion:** Extending functionality to other universities and programs.
- **Frontend Enhancement:** Updating the UI to align with Figma mockups for improved user experience.

## Built With
- CockroachDB
- CSS
- HTML
- JavaScript
- Python
- SQL
- web-scrape-master
