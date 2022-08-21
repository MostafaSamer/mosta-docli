import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const fileName = req.body.fileName;

  const dirRelativeToApiFolder = 'commands'

  const dir = path.resolve('./pages/api', dirRelativeToApiFolder, fileName + '.json');

  const rawdata = fs.readFileSync(dir, 'utf-8');

  res.statusCode = 200
  res.json(JSON.parse(rawdata));
}