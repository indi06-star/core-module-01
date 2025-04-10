![image broken](https://github.com/indi06-star/Images/blob/6da01dfb7420354fdbae47b41e9d9da764e454aa/login.png)

![image broken](https://github.com/indi06-star/Images/blob/6da01dfb7420354fdbae47b41e9d9da764e454aa/homepage.png)


A fully functional Hr system website built by Indiphile,Moesha, for the Module 2 assignment. ModernTech Solutions is a Hr System  where employees details are tracked that requires login details from the HR Staff to access. Our goal is to keep staff personal information confedential it is also to generate automated payslips ,track attendance as well as update personal information.
Table of Contents
Live Demo
Technologies Used
Setup Instructions
Key Features
Credits (If Applicable)
Author
Live Demo
Link to the live deployed website

# **Technologies Used**
Front-end: Vue
Styling: Custom CSS
Back-end: node
Database: MySQL
Setup Instructions
Follow these steps to run the system on your local development environment:

# **Prerequisites**:

MySQL Server installed and running
Clone the Repository:

git clone https://github.com/indi06-star/core-module-01.git
the above is the main branch then switch branch to Frontend
git clone Frontend https://github.com/indi06-star/core-module-01.git
put inside one Module-02 folder and run
cd Frontend -npm run serve 
cd Backend cd core-module-01 -node --watch index.js
Install Dependencies (if using Composer):
npm i
npm i sql2
npm i dotenv

# **Database Setup**:

Create a new database named moderntech_db in your MySQL server.
Run the UpdatedModernTechSolutionsDataBase.sql in workbench  to get the data and tables for ModerntechSolutions
// Example configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');
define('DB_NAME', 'moderntech_db');
?>
# **Web Server Configuration**:

Ensure your web server is configured to point to the project's public directory (or the main entry point of your application).
If using Apache, you might need to enable mod_rewrite and configure a .htaccess file (if provided).
Run the Development Server (Example using PHP's built-in server):

npm run serve for frontend
node --watch index.js for api 
Then, open your web browser and navigate to [http://localhost:8000.](http://localhost:8080/)

# **Key Features**
This  website implements the following key features:

User Login and Registration: Secure user registration and login functionality.
User Interface Design and UX/UI Principles: A user-friendly and visually appealing design adhering to UX/UI best practices.
Service Data Management: An administrative interface for adding, editing, and deleting employees and empoyees information.
Payment System Integration: Integration with a payment gateway (a simulated process)for employee payslips includiong leave requests and attendance records.
Overall System Integration (Front-end and Back-end): Seamless communication and data flow between the user interface and the server-side logic.
Credits 

Vue: [https://vuejs.org/]
MySql: [https://www.mysql.com/]
Node : [https://nodejs.org/en]
Author
Indiphile, Moesha, Tifanny 

https://github.com/indi06-star

