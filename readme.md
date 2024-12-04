# Documentator for Node.js Routes

This project is designed to process and document routes from a Node.js application by generating HTML documentation from Postman collections and route files.

## Overview

The script (`documentator.ipynb`) performs the following operations:

1. Extracts validation checks from Node.js route files:
   - Scans all `index.js` files recursively in the routes directory
   - Identifies route definitions using regex patterns
   - Extracts parameter validation rules (e.g., `check('email').isEmail()`)

2. Processes Postman collection data:
   - Reads a Postman collection export file from `json files/input.json`
   - Converts markdown links to HTML format
   - Maps extracted route parameters to corresponding Postman requests

3. Generates HTML documentation:
   - Uses Jinja2 templating engine
   - Combines route validation data with Postman collection information
   - Creates a formatted HTML output file

## Requirements

- Python 3.x
- Required Python packages:
  - jinja2
  - pathlib
  - re
  - json

## Project Structure

The project expects the following structure:

.
├── documentator.ipynb
├── json files/
│   └── input.json (Postman collection export)
├── routes/
│   └── **/*.js (Node.js route files)
└── templates/
    └── template.html (Jinja2 HTML template)


## Usage

1. Export your Postman collection and save it as `json files/input.json`
2. Ensure your Node.js route files are in the `routes` directory
3. Create a Jinja2 template file at `templates/template.html`
4. Run the Jupyter notebook `documentator.ipynb`
5. The script will generate `index.html` with the complete documentation

## License

This project is licensed under the MIT License.
