# Star-Wars-Node

## Project Overview

**Project Name:** Star-Wars-Node

**Description:** This Node.js command-line application allows users to interact with a list of Star Wars characters. Users can add new characters, remove existing ones, or move characters within the array.

## Installation and Setup

### Requirements

- Node.js installed on your system
- Command Line Interface such as Terminal or Command Prompt

### Installation

1. Clone the repository to your local machine.
2. Navigate to the cloned directory.
3. Run `npm install` to install dependencies.

## Project Features

- **Character Array Manipulation:** Users can add or remove characters from an array.
- **Multiple Character Entry:** Allows adding multiple characters at once.
- **Index-based Operations:** Users can delete or move characters based on their index in the array.

### Usage Examples

Here’s how you can interact with the application:

```bash
# To start the application, run:
node Star.js

# Follow the command-line prompts to:
# Add a single character
# Add multiple characters
# Remove a character by index
# Move a character to a new index
# Remove multiple characters by name
```

## Project Structure

- **Directory Structure:**

  ```
  Star-Wars-Node/
  ├── node_modules/ (created after npm install)
  ├── .gitignore
  ├── Star.js (main application logic)
  ├── package-lock.json
  ├── package.json (project metadata and dependencies)
  └── README (this file)
  ```

- **Key File:**
  - `Star.js` - Contains the logic for character array manipulation.

## Technologies Used

- **Language:** JavaScript
- **Runtime Environment:** Node.js
- **Dependency:** prompt-sync (for synchronous command line input)

**Tips:**

- To add characters, simply type their names when prompted.
- To move or remove characters, you’ll need to know their index position in the array.
- Make sure to have Node.js installed before trying to run the application.
