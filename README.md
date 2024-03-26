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

Certainly! Structuring the usage instructions in a step-by-step format and incorporating some Markdown enhancements can improve clarity and visual appeal. Here's an updated version:

## How to Use

Follow these steps to interact with the Star-Wars-Node application:

1. **Start the Application:**
   ```bash
   node Star.js
   ```
   This command initiates the program and presents you with the command-line prompts.

2. **Add a Character:**
   - To add a single character, respond to the prompt:
     ```bash
     What character do you want to add?
     ```
   - To add multiple characters, continue entering names after each prompt until you press Enter twice to finish.

3. **Remove Characters:**
   - To remove a character by index:
     ```bash
     Delete a character by entering the index of it (0,1,2):
     ```
   - To remove multiple characters by name, input each name when prompted, and press Enter twice when done.

4. **Move a Character:**
   - To change the position of a character within the list:
     ```bash
     Enter the index of the character to move it:(0,1,2..)
     Enter the new index for the character:(0,1,2..)
     ```

This format lays out clear instructions and breaks down the interaction into simple, ordered steps that are easy to follow.

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
