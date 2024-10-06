# Kasa - Prototype Apartment Rental Platform

## About This Project

This project is part of the OpenClassrooms program _'Développeur d'application JavaScript React'_ . The goal is to develop a modern web platform for **Kasa**, a fictional company that specializes in apartment rentals between individuals. The project involves creating a fully responsive web application using **React** and implementing specific features based on the provided **Figma** designs.

The prototype includes a home page, a profile page for each apartment. It was developed to meet Kasa’s new design and featuring dynamic data display using JSON files.

## Table of Contents

- [Key Features](#key-features)
- [Technical Stack](#technical-stack)
- [Design and Mockups](#design-and-mockups)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Challenges and Learnings](#challenges-and-learnings)

## Key Features

The application includes the following core features:

1. **Homepage**: Displays available apartment listings, following a responsive layout for both desktop and mobile devices.
1. **Apartment Details Page**: Provides detailed information about each apartment, including descriptions, location, amenities, and a photo gallery.
1. **Interactive Photo Gallery**: Allows users to scroll through apartment photos. Special functionalities include:

- When at the first image, clicking “Previous” will display the last image.
- When at the last image, clicking “Next” will display the first image.
- If there's only one image, navigation buttons and numbering won’t appear.
- The gallery height remains consistent as per the Figma designs, with images centered and cropped to fit.

1. **Dropdowns (Collapse)**: Information panels that can be opened and closed by the user. By default, they are closed when the page loads.
1. **Routing**: Includes navigation between pages using **React Router**.

## Technical Stack

- **React** for building the front-end application.
- **React Router** for handling navigation and routes.
- **Figma** for UI/UX design references.
- **JavaScript** for functionality.
- **CSS** for styling and ensuring a responsive layout.
- **Create React App** for bundling (depending on developer preference).

## Project Structure

The project follows a modular structure, with React components organized to ensure maintainability and scalability. Key components include:

- **Header**: Main navigation for the application.
- **Gallery**: Component for managing image galleries with responsive and interactive features.
- **Collapse**: Component for toggleable information panels.
- **Apartment Listings**: Component for displaying the list of available apartments.

## Project Structure

The project follows a modular structure, with React components organized to ensure maintainability and scalability. Key components include:

- **Header**: Main navigation for the application.
- **Gallery**: Component for managing image galleries with responsive and interactive features.
- **Collapse**: Component for toggleable information panels.
- **Apartment Listings**: Component for displaying the list of available apartments.

## Getting Started

To run the project locally:

1. Clone this repository:

```bash
git clone https://github.com/belaidSolene/kasa.git
```

2. Navigate to the project directory:

```bash
cd kasa
```

3. Install dependencies

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open http://localhost:3000 to view the project in your browser.

## Design and Mockups

The design for this project was provided through **Figma**, including the UI components, logos, icons, and layouts. The design follows a component-based logic, making it easier to integrate with React.

## Challenges and Learnings

This project required managing complex user interactions, particularly with the photo gallery and collapsible components, while maintaining a consistent and responsive design. By leveraging **React**’s component-based architecture, the project was able to meet the high demands for flexibility and reusability.
