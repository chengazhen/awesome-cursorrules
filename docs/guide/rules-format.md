# Rules Format

## Understanding .cursorrules Files

Each directory in the rules section contains a `.cursorrules` file that provides specific instructions and best practices for Cursor AI. These files are designed to enhance your development experience with Cursor AI by providing context-aware assistance.

## Viewing Rules Files

To view the contents of a `.cursorrules` file for any specific technology or framework:

1. Navigate to the specific rule in the sidebar
2. Click on the rule name to view its documentation
3. The `.cursorrules` file contents will be displayed along with any additional documentation

## File Structure

Each `.cursorrules` file follows this general structure:

```
// Project specific instructions
Instructions for how the project should be structured and developed

// Coding standards
Guidelines for code style and best practices

// Common patterns
Frequently used patterns and their implementations

// Dependencies
Information about required dependencies and versions

// Additional context
Any other relevant information for Cursor AI
```

## Example

Here's an example of how a `.cursorrules` file might look for a React TypeScript project:

```
// React TypeScript Project Guidelines
Use functional components with TypeScript
Implement proper type definitions for props and state
Follow React hooks best practices

// Code Organization
Components should be in src/components
Types should be in src/types
Utils should be in src/utils

// Naming Conventions
Components: PascalCase
Files: kebab-case
Functions: camelCase

// Dependencies
React 18+
TypeScript 4.5+
ESLint for React
```

## Contributing Rules

If you'd like to contribute new rules or improve existing ones, please check our [Contributing Guide](/guide/contributing) for more information. 