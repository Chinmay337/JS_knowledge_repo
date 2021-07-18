<!-- prettier-ignore -->
**Developer Setup**

- Settings > Search Default Formatter
- Install Prettier
- Configure Save on Format

**Configuring Prettier settings**

- In directory where we want to apply settings, create file .prettierrc
- Include JSON Object with settings:

```
{
    "singleQuote" : true
}
```

**User Snippets**

- Files > Preferences > User Snippets
- User Snippets > Create new Global Snippet
- Comment out existing snippet for console log and save
- Now we can use cl to print console.log()

**Live Server**

- Download Live Server Extension and then click Go Live to open live web server on Port 5000

**NodeJS**

- Install Node
- Install Live Server # npm install live-server -g
- cd to directory and run live-server in CMD, will open live web server on Port 5000

## Debugging

- console.warn()
- console.error()
- console.table(array)

Similar to console.log, but we get a yellow/ red formatting on the console.
Console.table() gives us a table view of all of the variables to be console logged

**Converting a prompt to a number**

```
const number_convert = Number(prompt("Enter a number"));

```

- **Debugging using Chrome Tools**
- Inspect element and go to Sources
- ![Chrome](/JS/Section3_DevSkills/img/2EEE1F725A48314B.png)
- We can click on the line number and it adds a BREAKPOINT. Execution will stop at the breakpoint.
