# 🚀 Mars Rover Mission

This project is an interactive simulation of a Mars rover mission. The rover can move on a map, avoid obstacles, and respond to specific commands. The application is developed in **React** and uses the **Atomic Desing** pattern to organize components.

___

## 📋 Features

- **Rover Control**: Set the initial position and direction of the rover.
- **Custom Commands**: Enter manual commands to move the rover (`F`, `L`, `R`).
- **Random Commands**: Generate random commands to test the rover's movement.
- **Obstacle Detection**: The rover will stop if it encounters an obstacle in its path.
- **Map Boundaries**: The rover cannot leave the map and will display an error message if it tries.
- **Visual Interface**: Displays the rover's current position and obstacles on a map.

---

## 🛠️ Project Structure

The project follows the **Atomic Design** pattern, dividing components into levels of abstraction:

src/
├── app/
│   └── page.tsx            # Main application page
├── components/
│   ├── atoms/              # Basic components (Input, Button, etc.)
│   ├── molecules/          # Combinations of atoms (ControlPanel, etc.)
│   ├── organisms/          # More complex components (MarsGrid, etc.)
│   └── templates/          # Layouts like MissionTemplate
├── utils/
│   └── utils.ts            # Utility functions
├── types/
│   └── types.ts            # Type definitions


---

## 🚀 How to Run the Project

### 1. Clone the Repository

git clone <REPOSITORY_URL>
cd pt-rover-mission


### 2. Install Dependencies
-  Make sure you have Node.js installed. Then, run:

npm install

### 3. Start the Development Server

npm run dev

- The application will be available at http://localhost:3000.

## 🧩 Main Components
- page.tsx
Controls the main state of the application, including the rover's position, commands, and error messages. Passes props to MissionTemplate.

- MissionTemplate.tsx
Organizes the interface layout. Contains the control panel, Mars map, and command input.

- ControlPanel.tsx
UI for setting the initial position and direction. Includes the "Start Mission" button.

- MarsGrid.tsx
Visually represents the Mars map, showing the rover and obstacles.

- utils.ts
Utility functions like:

 - generateObstacles()

 - turnLeft()

 - turnRight()

- types.ts
Type definitions:

 - Direction: N, S, E, W

 - RoverPosition: Position and direction

 - Obstacle: Obstacle coordinates


## 🕹️ How to Use the Application

### Configure the Rover:

- Set the initial position (X, Y) and direction (N, S, E, W).
- Click "Start Mission."

### Enter Commands:

- Write commands in the input field (F to move forward, L to turn left, R to turn right).
- Or click "Generate Random Command."

### Execute Commands:

- Click "Execute" to move the rover according to the commands.
- If the rover encounters an obstacle or reaches the map boundary, an error message will be displayed.

## 📚 Command Examples

- FFRLF: Move forward twice, turn right, move forward once, turn left, and move forward once.
- LFFR: Turn left, move forward twice, and turn right.

## 🛑 Error Messages

- Obstacle Found: If the rover encounters an obstacle in its path.
- End of Map: If the rover tries to leave the map.
