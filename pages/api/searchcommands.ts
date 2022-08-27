import fs from 'fs'
import path from 'path'

export default (req: any, res: any) => {
    const searchInput = req.body.searchInput.toLocaleLowerCase();

    // Get all Files
    const dirRelativeToApiFolder = 'commands'
    const dir = path.resolve('./pages/api', dirRelativeToApiFolder);
    const files = fs.readdirSync(dir, 'utf-8');

    // Search Files by name
    const filesNames = files
    .filter(fileName => {
        const fileDir = path.resolve('./pages/api', dirRelativeToApiFolder, fileName)
        const rawdata = fs.readFileSync(fileDir, 'utf-8');
        const fileData = JSON.parse(rawdata);
        return (
            fileData?.name.toLocaleLowerCase().includes(searchInput) ||
            fileData?.description.toLocaleLowerCase().includes(searchInput) ||
            fileData?.categories.join(" ").toLocaleLowerCase().includes(searchInput) ||
            fileData?.namespace.toLocaleLowerCase().includes(searchInput)
        )
    })
    .map(fileName => fileName.split('.').slice(0, fileName.split('.').length-1))
    .flat()

    res.statusCode = 200
    res.json({ name: filesNames });
}