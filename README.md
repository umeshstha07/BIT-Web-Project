# BIT Web Project – BMC Website

## 1. Introduction

This is my basic web development project, created as part of my learning as a student at BMC (Bhaktapur Multiple Campus), Nepal. The project is a simple, responsive website made using HTML, CSS, and JavaScript.

The main purpose of this project is to understand how a website is designed and developed. While working on it, I practised creating web pages, adding navigation between pages, designing layouts with CSS, and adding basic interactive features with JavaScript.

The website has three main pages: Home, About Us, and Contact. All three pages share a common navigation bar and footer, which makes the website easier to use and gives it a consistent design.

## 2. Project Objectives

The main objectives of this project are:

- To learn the basic structure of an HTML document.
- To understand how HTML, CSS, and JavaScript work together.
- To create multiple web pages and connect them through navigation links.
- To practise website styling using CSS.
- To use Flexbox and CSS Grid for arranging page content.
- To make the website responsive for smaller screens.
- To add simple user interactions using JavaScript.
- To gain practical experience by building a small website.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Used to create the structure and content of the web pages. |
| CSS3 | Used to style the website, arrange elements, and make the layout responsive. |
| JavaScript | Used to add mobile navigation and contact form interactions. |
| Font Awesome 6.4.0 | Used to display icons throughout the website. |
| Visual Studio Code or another code editor | Can be used to open and edit the project files. |
| Web Browser | Used to run and test the website. |

Font Awesome icons are loaded from a CDN, so an internet connection is needed for those icons to appear when they are not already cached.

## 4. Website Pages

### 4.1 Home Page (`index.html`)

The Home page is the first page visitors see when they open the website. It contains:

- A navigation bar with links to Home, About Us, and Contact.
- A welcome section with the heading “Welcome to BMC Website”.
- A short introduction to the website.
- A “Learn More” button that takes visitors to the About Us page.
- A features section with three cards:
  - **Fast:** Introduces the idea of speed and performance.
  - **Secure:** Presents security as a website feature.
  - **Responsive:** Highlights the aim of supporting different screen sizes.
- A footer at the bottom of the page.

### 4.2 About Us Page (`about.html`)

The About Us page provides information about the website, its mission, vision, values, and team members.

It includes:

- A short introduction.
- **Our Mission:** To simplify digital interactions through clean code and thoughtful design.
- **Our Vision:** A world where small businesses can access professional and affordable web solutions.
- **Our Values:** Transparency, innovation, and user-centred design.
- A team section containing the following names and roles:
  - Umesh Shrestha – Lead Developer
  - Unik Nepal – UI/UX Designer
  - Bikram Baniya – Project Manager

### 4.3 Contact Page (`contact.html`)

The Contact page contains a simple form through which visitors can enter their details and a message.

The form includes:

- Name field
- Email field
- Message field
- Send Message button
- A status area for displaying feedback

The fields are required, and the browser's built-in form validation is used for the required inputs and email format. JavaScript checks that the fields are not empty, displays a sending message, and then shows a thank-you message after a short delay.

**Note:** This is only a front-end demonstration. The form does not currently send an email, save information to a database, or connect to a server.

## 5. Main Features

1. **Three separate pages:** The website has Home, About Us, and Contact pages.
2. **Common navigation:** Visitors can move between the pages using the navigation bar.
3. **Responsive navigation:** On smaller screens, a hamburger menu is displayed and can be clicked to show or hide the navigation links.
4. **Responsive layout:** CSS media queries adjust parts of the layout for smaller screens.
5. **Feature cards:** The Home page presents information in separate cards.
6. **About section:** The About page displays the mission, vision, values, and team information.
7. **Contact form:** Visitors can enter their name, email, and message.
8. **Form feedback:** JavaScript displays validation feedback and a demonstration success message.
9. **Icons:** Font Awesome icons are used to make the interface easier to understand visually.
10. **Consistent design:** The pages share the same colour theme, navigation style, and footer.

## 6. Project Folder Structure

The project contains the following main files:

```text
BIT-Web-Project/
│
├── index.html       # Home page
├── about.html       # About Us page
├── contact.html     # Contact page
├── style.css        # Styles and responsive layout
├── script.js        # JavaScript interactions
└── README.md        # Project documentation
```

### Description of Files

- **index.html:** Contains the structure and content of the Home page.
- **about.html:** Contains the About Us section, including the mission, vision, values, and team members.
- **contact.html:** Contains the contact form and contact page content.
- **style.css:** Contains the website's colours, fonts, spacing, navigation styles, cards, form styles, and responsive design rules.
- **script.js:** Controls the hamburger navigation menu and the front-end contact form demonstration.
- **README.md:** Explains the project, its features, technologies, and instructions for running it.

## 7. How to Run the Project

This project does not require a database, server setup, or any package installation for basic use.

Follow these steps to run it:

1. Download or copy the project folder to your computer.
2. Extract the folder if it is downloaded as a ZIP file.
3. Open the project folder in Visual Studio Code or another code editor.
4. Make sure all the HTML, CSS, and JavaScript files are in the same folder.
5. Open the `index.html` file in a web browser.
6. Use the navigation bar to visit the Home, About Us, and Contact pages.

You can also use the **Live Server** extension in Visual Studio Code:

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click on `index.html`.
4. Select **Open with Live Server**.
5. The website will open in your default browser.

## 8. How the Website Works

The project uses three basic web technologies together:

- **HTML** provides the content and structure of each page. For example, headings, paragraphs, links, cards, and the contact form are written in HTML.
- **CSS** controls how the content looks. It sets the colours, fonts, spacing, alignment, and layout. Flexbox is used for the feature cards and navigation, while CSS Grid is used for the team section.
- **JavaScript** adds interaction. It waits until the page has loaded, handles clicks on the hamburger menu, and manages the contact form's demonstration response.

The three HTML pages are connected through ordinary links. Each page also links to the shared `style.css` and `script.js` files.

## 9. Responsive Design

I used CSS media queries to make the website more suitable for different screen sizes.

For screens with a width of 768 pixels or less:

- The normal navigation links are hidden initially.
- A hamburger menu becomes visible.
- Clicking the hamburger menu shows or hides the navigation links.
- The feature cards change from a horizontal layout to a vertical layout.

The team section also uses CSS Grid with an automatic column layout so that its cards can adjust according to the available space.

## 10. Learning Outcomes

By completing this project, I gained practical experience in basic front-end web development. Some of the things I learned include:

- Writing and organising HTML code.
- Connecting multiple HTML pages.
- Applying CSS to improve the appearance of a website.
- Using Flexbox and Grid for page layouts.
- Using media queries for responsive design.
- Adding icons with Font Awesome.
- Selecting HTML elements and handling click events with JavaScript.
- Performing basic form checks and displaying messages.
- Organising a small project into separate files.

This project helped me understand how the different parts of a basic website work together.

## 11. Limitations

This is a beginner-level front-end project, so it has some limitations:

- There is no backend or database.
- The contact form does not actually deliver messages.
- There is no user registration or login system.
- The website does not have an admin dashboard or content management system.
- Font Awesome icons depend on an external CDN.

These limitations are acceptable for the current learning project, but they can be addressed in future versions.

## 12. Future Improvements

In the future, I would like to improve this project by adding:

- A backend system to process contact form submissions.
- Database connectivity to store messages.
- Better form validation and error handling.
- More pages and useful website content.
- Improved accessibility and keyboard navigation.
- Additional responsive design improvements.
- More testing on different browsers and devices.
- A custom logo and more personalised design.

## 13. Conclusion

This BMC website project is a practical step in my journey of learning web development. Through this project, I was able to apply the basic concepts of HTML, CSS, and JavaScript to create a website with multiple pages and simple interactive features.

Although it is a small project, it has helped me improve my understanding of front-end development and given me more confidence to work on larger projects in the future.

I consider this project an important part of my learning experience as a student at BMC, Nepal.

## 14. Acknowledgement

I would like to express my gratitude to my teachers and everyone who supported me during the learning and development of this project. Their guidance and encouragement helped me understand the basic concepts of web development and complete this work.

---

**Project Name:** BIT-Web-Project 
**Student Name:** Umesh Shrestha
**Semester:** 4th semester
**Institution:** BMC (Bhaktapur Multiple Campus), Nepal  
**Project Type:** Academic / Learning Project  
**Technologies:** HTML5, CSS3, JavaScript