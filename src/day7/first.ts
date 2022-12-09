import input from './input.js';

const parsed = input.split('\n').filter((e) => Boolean(e));
const checkFileName = (command: string) => {
  const [fileSize, _] = command.split(' ');
  return Boolean(Number(fileSize));
};

const generateRawDir = () => {
  const changeDirectoryRegex = new RegExp(/^\$\ cd(?: )[a-zA-Z0-9]{0,}$/);
  const dirs = {};
  let currentDir = '/';

  for (let index = 0; index < parsed.length; index++) {
    const line = parsed[index];
    if (changeDirectoryRegex.test(line)) {
      const [_, dirName] = line.replace('$ ', '').split(' ');
      const isHome = currentDir === '/';
      if (!isHome) {
        currentDir = currentDir.concat('/');
      }
      currentDir = currentDir.concat(dirName);
    } else if (line.includes('cd ..')) {
      const lastIndexOfSlash = currentDir.lastIndexOf('/');
      currentDir = currentDir.slice(0, lastIndexOfSlash);
      if (!currentDir) currentDir = '/';
    } else if (checkFileName(line)) {
      const [fileSize, _] = line.split(' ');
      dirs[currentDir]
        ? (dirs[currentDir] += Number(fileSize))
        : (dirs[currentDir] = Number(fileSize));
    }
  }

  Object.keys(dirs).forEach((element) => {
    const getParentDir = (dir) => {
      const lastIndexOfSlash = dir.lastIndexOf('/');
      const parentDir = dir.slice(0, lastIndexOfSlash);
      if (parentDir) {
        if (!dirs[parentDir]) {
          dirs[parentDir] = 0;
        }
        getParentDir(parentDir);
      }
    };
    getParentDir(element);
  });
  return dirs;
};

export const generateDirsWithSumOfOverlappedDirs = () => {
  const rawDirs = generateRawDir();
  const dirsWithSumOfOverlappedDirs = { ...rawDirs };

  const dirsKeys = Object.keys(rawDirs);

  for (const property in rawDirs) {
    for (let i = 0; i < dirsKeys.length; i++) {
      const element = dirsKeys[i];
      if (property !== element && property.includes(element)) {
        dirsWithSumOfOverlappedDirs[element] += rawDirs[property];
      }
    }
  }
  return dirsWithSumOfOverlappedDirs;
};

const filterDirsBySize = (maxSize: 100_000) => {
  let output = 0;
  let dirWIthSizeLessThanMaxSize = {};
  const dirsWithSumOfOverlappedDirs = generateDirsWithSumOfOverlappedDirs();

  Object.keys(dirsWithSumOfOverlappedDirs).forEach((dir) => {
    const dirSize = dirsWithSumOfOverlappedDirs[dir];
    if (dirSize < maxSize) {
      dirWIthSizeLessThanMaxSize[dir] = dirSize;
      output += dirSize;
    }
  });
  return { output, dirWIthSizeLessThanMaxSize };
};

export default () => {
  // const lastIndexOfSlash = currentDir.lastIndexOf('/');
  // currentDir = currentDir.slice(0, lastIndexOfSlash);
  const { output } = filterDirsBySize(100_000);
  console.log({
    // dirs,
    output,
  });
};
