
# Documentator for Node.js Routes

This project is designed to process and document routes from a Node.js application. 

## Overview

The main functionalities include:

- Loading and processing a JSON file, which is actually an Export Postman Collection located at `json files/input.json`.
- Extracting routes from `index.js` files within a specified folder.
- Replacing markdown links in the JSON data with HTML links for better presentation.
- Rendering the processed data into an HTML template using Jinja2.

## Requirements

- Python 3.x
- Jinja2 library

## Usage

1. Ensure that the JSON file is available at `json files/input.json`.
2. Place your `index.js` files in the designated routes folder.
3. Run the script to generate the documentation in `index.html`.

## License

This project is licensed under the MIT License.
