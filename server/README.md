# pnyx-server-backend README

## Introduction

Welcome to the `pnyx-backend` project, the backbone of our innovative platform designed to streamline and enhance user interactions through efficient data handling and user management. Our goal is to provide a robust backend system that supports seamless authentication, user login user stories, and real-time data processing.

## Getting Started

This section guides you through setting up `pnyx-server` on your local environment, ensuring you have all the necessary tools and dependencies to run the application successfully.

### Prerequisites

Before you begin, ensure you have the following installed:
- Python (3.8 or later)
- pip (latest version)
- A web browser or API testing tool like Postman

### Installation

Follow these steps to get your `pnyx-backend` running:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ParthMiyani/pnyx-app.git
   cd pnyx-app/server
   ```

2. **Set Up a Virtual Environment**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**

   ```bash
   flask run
   ```

 # if using web browser/API testing tool  The server will start on `http://127.0.0.1:5000/`. You can access it using your browser or an API testing tool.

### Key Features

- **User Authentication**: Secure login/logout functionality, including a "forgot password" feature. 
# Both features to be implemented soon
- **Data Processing**: Real-time handling and storage of user data and preferences.

#### How to Use (Not yet Implemented)

- To **Login**, send a POST request to `/login` with username and password.
- To **Logout**, access `/logout`.
- Use `/forgot-password` to initiate a password reset.

### Demonstrations 

Insert screenshots, animations, or links to videos here that showcase your application in action. For example:

- **Login Flow**:
- **Reset Password**: 

### Deployment

Follow instructions above to deploy intial setup 

### Testing

To test the functionalities, you can use the above commands when implemented.

## Collaborators

This project is a collaborative effort by our dedicated backend team:
- **Rakan Alhamoury**  - Backend Team
- **Vidhi**  - Backend Team
