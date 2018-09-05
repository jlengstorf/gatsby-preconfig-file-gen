# Demo: generate temp files in `gatsby-config.js`

This is a quick demo to work through how a developer might generate data and save it to a temp file, then use that data in `gatsby-config.js`.

Because there's no "run this before `gatsby-config.js` is loaded" lifecycle hook, we need to do any "pre-config" work in `gatsby-config.js` itself.

In this example we:

1. Generate a temporary file path
2. Write some JavaScript to the temp file
3. Load the generated temp file into `gatsby-config.js`
4. Use the data to configure the site!

## Questions:

- Should we generate a known URL and check that the data used to generate it has been modified before regenerating (e.g. `fs.fstatSync()`)?
- Do we need to generate a file at all? Or could this be loaded into memory instead?
