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
   git clone https://github.com/csc301-2024-s/25-pnyx.git
   cd deliverables/D2/D2-25.2
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
4. Define the DATABASE_URL variable in .env file 
5. **Run the Application**

   ```bash
   flask run
   ```


### Key Features



#### How to Use 
There are 8 APIs for handling users and their data, as well as artists

### 1. `/signup`
   - **Method:** POST
   - **Payload:** email, artist_id
   - **Returns:** userID
   - **Status code:** 
     - 200 on success
     - 400 on invalid data
     - 401 if user already exists

### 2. `/users/<userID>`
   - **Method:** GET
   - **Returns:** email, artist_id, views_left, view_count, purchase_count, purchased_songs (list of song ids), revealed_songs (list of song ids)
   - **Status code:** 
     - 200 on success
     - 404 if user doesn’t exist

### 3. `/users/<userID>`
   - **Method:** PUT
   - **Payload:** 
     - Required: email, artist_id, views_left, view_count, purchase_count, new_purchases (list of song ids), new_reveals (list of song ids)
   - **Status code:** 
     - 200 on success
     - 404 if user doesn’t exist
     - 401 on invalid data

### 4. `/users/<userID>`
   - **Method:** DELETE
   - **Status code:** 
     - 200 on success
     - 404 if user doesn’t exist

### 5. `/artists/<artist_id>`
   - **Method:** GET
   - **Returns:** name
   - **Status code:** 
     - 200 on success
     - 400 if artist doesn’t exist
 
### 6. `/users/<userID>/decrement-views-left`
   - **Method:** PUT
   - **Payload:** None
   - **Returns:** "Views left decremented successfully."
   - **Status code:** 
     - 200 on success
     - 404 if user doesn’t exist
     - 500 on server error

### 7. `/recommend`
   - **Method:** POST
   - **Payload:** 
     - song_names (list of strings): Names of the songs for which recommendations are requested
   - **Returns:** 
     - recommendations (list of strings): Recommended song titles
   - **Status code:** 
     - 200 on success
     - 400 if payload is missing or invalid
     - 404 if any song provided in the payload is not found in the dataset or if no recommendations are available
       
### 8. `/get_audio_url`
   - **Method:** POST
   - **Payload:** 
     - track_title (string): Title of the track for which the audio URL is requested
   - **Returns:** 
     - songList (string): Identifier for the list of songs containing the requested track
     - track (integer): Index of the requested track within the songList
   - **Status code:** 
     - 200 on success
     - 404 if the requested track title is not found in the audio data

### Demonstrations 

Find video demo in report.md

### Deployment

Deployed on Vercel at this link: https://25-pnyx-ozgq7kx1a-vidhip30s-projects.vercel.app/
To access the endpoints, add the specific API to the end of the link

### Testing

run tests.py
 ```bash
   pytest tests.py
   ```


## Collaborators

This project is a collaborative effort by our dedicated backend team:
- **Rakan Alhamoury**  - Backend Team
- **Vidhi**  - Backend Team
