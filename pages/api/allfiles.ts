import fs from 'fs'
import path from 'path'

export default (req: any, res: any) => {
  const dirRelativeToApiFolder = 'commands'

  const dir = path.resolve('./pages/api', dirRelativeToApiFolder);

  const files = fs.readdirSync(dir, 'utf-8');

  const filesNames = files
  .map(fileName => fileName.split('.').slice(0, fileName.split('.').length-1))
  .flat()

  res.statusCode = 200
  res.json({name: filesNames});
}