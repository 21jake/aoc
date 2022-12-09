import { generateDirsWithSumOfOverlappedDirs } from './first.js';

export default () => {
  // const lastIndexOfSlash = currentDir.lastIndexOf('/');
  // currentDir = currentDir.slice(0, lastIndexOfSlash);
  const data = generateDirsWithSumOfOverlappedDirs();
  const totalSpc = 70_000_000;
  const target = 30_000_000;

  const totalSpcUsed = data['/'];
  const totalSpc_avail = totalSpc - totalSpcUsed;
    const minimumSpcToDelete = target -  totalSpc_avail;

  let mininumSufficientFolderSize = Number.MAX_SAFE_INTEGER

    Object.keys(data).forEach((dir) => {
        const dirSize = data[dir];
        if (dirSize >= minimumSpcToDelete && dirSize < mininumSufficientFolderSize) {
            mininumSufficientFolderSize = dirSize;            
        }
    })
    console.log({mininumSufficientFolderSize});
    

//   console.log(data);
};
