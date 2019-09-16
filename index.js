// For Node.js
const TurndownService = require('turndown')
const fs = require('fs');

let posts = fs.readdirSync('_posts')

var turndownService = new TurndownService()

for (let i = 0; i < posts.length; i++) {
    console.log(`_posts/${posts[i]}...`)
    let contents = fs.readFileSync(`_posts/${posts[i]}`)
    let contentString = contents.toString()
    let contentSplit = contentString.split('---')

    let frontmatter = contentSplit[1].split('\n')
    //console.log(frontmatter)
    let betterFrontmatter = []
    for(let j = 0; j < frontmatter.length; j++) {
        if(
            frontmatter[j].startsWith('layout') ||
            frontmatter[j].startsWith('title') ||
            frontmatter[j].startsWith('categories') ||
            frontmatter[j].startsWith('tags') ||
            frontmatter[j].startsWith('-') ||
            frontmatter[j].startsWith('author') ||
            frontmatter[j].startsWith('  login') ||
            frontmatter[j].startsWith('  email') ||
            frontmatter[j].startsWith('  display_name') ||
            frontmatter[j].startsWith('  first_name') ||
            frontmatter[j].startsWith('  last_name') )
        {
            betterFrontmatter.push(frontmatter[j])
        }
    }
    //console.log(betterFrontmatter.join('\n'))
    contentSplit[1] = '\n' + betterFrontmatter.join('\n') + '\n'
    //Changing content to markdown
    contentSplit[2] = '\n' + turndownService.turndown(contentSplit[2])
    let result = contentSplit.join('---')
    //console.log(result)
    console.log(`_posts/${posts[i]}`.split('.')[0] + '.md' + ' is done!')
    fs.writeFileSync(`_posts/${posts[i]}`.split('.')[0] + '.md', result)
}