export default async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: 'query',              // Action: Perform a query.
    generator: 'search',         // Use the search generator.
    gsrsearch: searchTerm,       // Search term you're looking for.
    gsrlimit: '20',              // Limit the number of results to 20.
    prop: 'pageimages|extracts', // Retrieve page images and text extracts.
    exchars: '100',              // Limit the length of text extracts to 100 characters.
    exintro: 'true',             // Retrieve only introductory sections of articles.
    explaintext: 'true',         // Retrieve plain text instead of HTML.
    exlimit: 'max',              // No limit on the number of extracts.
    format: 'json',              // Request data in JSON format.
    origin: '*',                 // Allow requests from any origin.
  })
  
  // It will generate a URL that looks like this: https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=example&gsrlimit=20&prop=pageimages|extracts&exchars=100&exintro=true&explaintext=true&exlimit=max&format=json&origin=*
  const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams) //Each query parameter is separated by &, and the parameter name and its value are separated by =. This format is common in URL query strings

  return response.json()
}