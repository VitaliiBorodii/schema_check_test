const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version') || 'latest';

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(`https://github.com/inigolabs/artifacts/releases/${version}/download/cli_linux_amd64.tar.gz`);

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
