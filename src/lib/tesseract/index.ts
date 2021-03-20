const exec = require('child_process').exec;

const log = console.debug;

export const recognize = (filename: string, config: any = {}) => {
  const options = getOptions(config);
  const binary = config.binary || 'tesseract';

  const command = [binary, `"${filename}"`, 'stdout', ...options].join(' ');
  if (config.debug) log('command', command);

  return new Promise((resolve, reject) => {
    exec(command, (error: Error, stdout: any, stderr: any) => {
      if (config.debug) log(stderr);
      if (error) reject(error);
      resolve(stdout);
    });
  });
};

const getOptions = (config: any) => {
  const ocrOptions = ['tessdata-dir', 'user-words', 'user-patterns', 'psm', 'oem', 'dpi'];

  return Object.entries(config)
    .map(([key, value]) => {
      if (['debug', 'presets', 'binary'].includes(key)) return;
      if (key === 'lang') return `-l ${value}`;
      if (ocrOptions.includes(key)) return `--${key} ${value}`;

      return `-c ${key}=${value}`;
    })
    .concat(config.presets)
    .filter(Boolean);
};
