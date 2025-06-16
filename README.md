# React Filter List App

A simple React application that demonstrates filtering a list of items based on user input.

## What you'll learn

- Using `useState` to manage component state
- Using `useEffect` to respond to state changes
- Passing props between components
- Filtering arrays based on search terms
- Creating reusable components

## Project Structure

```
src/
├── App.jsx                    # Main app component
├── data/
│   └── people.json           # Sample data for the list
├── components/
│   ├── FilteredList.jsx       # Main filtering component
│   ├── SearchBar.jsx          # Search input component
│   └── ItemList.jsx           # Display filtered results
└── CSS files for each component
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

## How it works

### Step 1: Data Setup

The data is stored in `src/data/people.json` with an array of 10 people containing:

- id, name, email, category
- 1 Boss, 1 Leader, 6 Developers, 1 Designer, 1 Tester

The `App.jsx` component imports this JSON data and passes it to the FilteredList component.

### Step 2: State Management

The `FilteredList` component manages:

- `searchTerm` - what the user types
- `selectedCategory` - which category filter is selected
- `filteredItems` - the results after filtering
- `categories` - list of unique categories

### Step 3: Filtering Logic

When `searchTerm` or `selectedCategory` changes, `useEffect` runs and:

1. Starts with all items
2. Filters by search term (checks name and email)
3. Filters by category (if not "All")
4. Updates `filteredItems` state

### Step 4: Display Results

The filtered items are passed to `ItemList` which renders them as cards.
