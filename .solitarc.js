const path = require('path');
const programDir = path.join(__dirname, '..', 'programs/raffle-contract');
const idlDir = path.join(__dirname, 'idl');
const sdkDir = path.join(__dirname, 'src', 'generated');
const binaryInstallDir = path.join(__dirname, '.crates');

module.exports = {
  idlGenerator: 'anchor',
  programName: 'ugs_raffle',
  programId: 'HhxUeshYUCryZj9qAt43Xy5ws4CM7TMuKr9sSHdAfJtp',
  idlDir,
  sdkDir,
  binaryInstallDir,
  programDir,
};
