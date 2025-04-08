# TO DO

## Login View

- [x] Hero image in Login page
- [x] Login page goes to either Artist View, Gallery View, or Painting View

## Gallery View

- [x] A list of gallery names, clickable
  - [x] Sorted by name
- [x] On click, list gallery name, native name, city, address, country, gallery url as working link
- [x] Add to favorites button
- [x] Map using latitude + longitude fields
- [x] Header gallery button goes to gallery
- [x] Header gallery disabled when on gallery view
- [x] Header favorites button disabled when favorites empty
- [x] Painting in each gallery displayed
  - [x] sorted by title
  - [x] Should have thumbnail, artist name, panting title, year
- [x] Changeable sorting order by artist name, painting title, and year
- [x] On click painting, display single painting modal dialog
- [x] Have an indicator/feedback when something is added to favorites

### Picky things for Gallery View

- [ ] Present labels and information in a better way (not everything should be label:value)

## Artist View

- [x] List of artist names
  - [x] Sorted by Last name
- [x] On click, displays artist info (first name last name nationality gender years (birth and death), details and working url)
- [x] Add to favorites button
- [x] image of artist
- [x] Header favorites button disabled when favorites empty
- [x] paintings for the selected artist
  - [x] changeable sorted by title
  - [x] change sort order between painting title and year
  - [x] displays thumbnail, painting title, year
- [x] On click painting, display single painting modal dialog
- [x] Have an indicator/feedback when something is added to favorites

## Genre View

- [x] List of genre names
  - [x] Sorted by name
- [x] On click, displays genre name, description, and working link
- [x] paintings for the selected genre
  - [x] Sorted by title
  - [x] Sort order between artist name, painting title, and year
  - [x] displays thumbnail, artist name, painting title, year
- [x] On click painting, display single painting modal dialog

## Painting View

- [x] title radio button
  - [ ] Has a text field that is disabled when title radio is not selected
- [x] Artist and gallery radio buttons
  - [ ] both have select fields that are disabled when the radio buttons not selected
- [x] Year radio button
  - [ ] text inputs for less and greater years, disabled when radio not selected
- [x] All paintings initially sorted by year
- [x] Displays painting thumbnail, artist name, painting title, year, gallery name, medium, width and height
- [ ] changeable sort order between artist name, painting title, gallery name, and year
- [x] On click painting, display single painting modal dialog
- [ ] Changing sort order must preserve current filter
- [x] Clear button removes all filters
  - [ ] resets the filter screen

## Details pop-up/ Modal Dialog

- [x] Painting image
- [x] Painting title
- [x] Artist name
- [x] Displays year of work, medium, width, height, copyright, gallery name, gallery city, working museum link, working wiki link, description, copyright text
- [x] Dominant colours
- [x] Close button
- [x] Add favorites button

## Favorites Pop-up/ Modal Dialog

- [x] Display 3 categories of favorites
  - [x] All favorited galleries
  - [x] All favorited artists
  - [x] All favorited paintings
- [x] Close button
- [x] Empty favorites button

### Picky details about favorites pop-up

- [x] Provide a way to remove individual items from the favorites

## Extras

- [ ] Write the README file
- [x] Display loading animation while data is being retrieved
- [ ] Cohesive design throughout the assignment

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
