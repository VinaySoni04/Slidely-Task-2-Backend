# SlidelyAI-Clone-Google-Form-Task Frontend Part

# Follow these steps to run the application:

1. Prerequisites
   1. Ensure you have Node.js installed on your machine. You can download it from nodejs.org.
   2. Clone the repository containing the backend code from GitHub.
   
2. Setup Dependencies
   1. Open your terminal or command prompt.
   2. Navigate to the directory where your backend code is located (where your package.json file is).

3. Install Node Modules
   1. Run the following command to install dependencies specified in package.json:

         npm install

4. Start the Server
   1. After installing dependencies, start the backend server by running:

         npm start
   
      This command will compile TypeScript files (*.ts), if necessary, and start the server defined in src/index.ts.

5. Verify Server is Running
   1. Once started, verify that the server is running correctly. You should see output indicating that the server has started and is listening on a specific port (often localhost:3000 by default).

6. Endpoints Overview
   The backend provides the following endpoints:
   1. /ping: GET request that always returns true. 
   2. /submit: POST request to submit data (name, email, phone, github_link, stopwatch_time) to the backend.
   3. /readAll: GET request with a query parameter index (0-index) to read a specific form submission.

7. Testing Endpoints
   1. Use tools like Postman or curl to test the API endpoints after starting the server.

8. Stopping the Server
   1. To stop the server, press Ctrl + C in the terminal where the server is running.
