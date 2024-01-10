# artlife-react-app
Artlife application that uses Harvard Art Museums data from public [API](https://github.com/harvardartmuseums/api-docs?tab=readme-ov-file). Museum data encompasses the entire wealth of information a museum collects and digitizes. This includes but is not limited to information about artworks and artists in their collection, venue heatmaps, website traffic analytics, and publications about the museum.

### Must have
1. Multiple pages using React components and client-side routing: Home, Arts, Exhibitions, ArtList (to store the favorite arts).
2. Header will include logo and above mentioned pages. It will be seen on each page of the application.
3. Home page will have a search bar by Art classification name: paintings, drawings, photographs etc. 10 pieces of art in one fetch.
4. Clicking on any art work will lead to the details page with more information on the chosen art.
5. Arts page will have a sub header with 3 most popular classifications, for example: Prints, Paintings, Sculptures.
6. Exhibition page will fetch data about different exhibitions with short description.
7. ArtList page will contain the favorite art works that will be stored there after clicking the thumb up. Context API will be used here with add/delete methods.
8. Custom Hooks: useFetch hook will be created so it could be used for fetching different endpoints, loading and errors messages (to ensure that the app provides feedback to the user during data retrieval from the API).
9. Brand/colour palette: [Moco Museum](https://mocomuseum.com/)

### Nice-to-Have:
1. Showing all available classifications by clicking on ARTLIFE logo (a new page that fetches data).
2. Responsive functionality
3. Other custom hooks creation for reusability depending on functionality similarity during the project build
