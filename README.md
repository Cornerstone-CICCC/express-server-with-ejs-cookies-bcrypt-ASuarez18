 ### Project Requirements

1. **Setup Server with EJS:**
   - Configure your server to use EJS as the view engine.
   - Define the directories for static files and EJS templates.

2. **Create Home Page (/):**
   - Create a simple home page with links: 
     - `<a href="/login">Login</a>`
     - `<a href="/register">Register</a>`

3. **Create Login Page (/login):**
   - Design a login page with a form to collect user credentials:
     - Input fields for email and password.
     - Login button.
   - Apply basic CSS styles (optional).

4. **Create Register Page (/register):**
   - Design a registration page with a form to collect user credentials:
     - Input fields for email and password.
     - Register button.
   - Apply basic CSS styles (optional).

5. **Register User:**
   - Allow users to fill out the registration form (email and password).
   - Handle the form submission via a POST request.
   - Save the registered user object in server memory.
   - Redirect the user to the login page after successful registration.

6. **Login User:**
   - Allow users to fill out the login form (email and password).
   - Handle the form submission via a POST request.
   - Compare the provided credentials with the stored user data.
   - Redirect authenticated users to the home page.
   - Redirect unsuccessful login attempts back to the login page.

7. **Code Refactoring (DRY Principle):**
   - Refactor duplicated code to keep the codebase DRY (Don't Repeat Yourself).

8. **Secure User Passwords with Bcrypt:**
   - Use Bcrypt to hash and securely store user passwords.

9. **Remember Logged-in Users with Cookie-Session:**
   - Implement a cookie-session mechanism to remember logged-in users across requests.

---

**Note:** Ensure that your code is secure, handles edge cases, and provides appropriate error messages to users when necessary.
