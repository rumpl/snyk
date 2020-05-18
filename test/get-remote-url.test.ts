import { test } from 'tap';
import * as Proxyquire from 'proxyquire';
const proxyquire = Proxyquire.noPreserveCache();

test('getInfo returns null for isFromContainer=true', async (t) => {
  const {
    getInfo,
  } = require('../src/lib/project-metadata/target-builders/git');
  const gitInfo = await getInfo(null as any, null as any, true);
  t.same(gitInfo, null);
});

test('getInfo returns provided https remote url as http', async (t) => {
  const providedUrl = 'https://myserver.local/myproject.git';
  const { getInfo } = proxyquire(
    '../src/lib/project-metadata/target-builders/git',
    {
      '../../sub-process': {
        execute() {
          return providedUrl;
        },
      },
    },
  );
  const gitInfo = await getInfo(null as any, null as any, false);
  t.same(gitInfo.remoteUrl, 'http://myserver.local/myproject.git');
});

test('getInfo returns provided http remote url', async (t) => {
  const providedUrl = 'http://github.com/snyk/snyk.git';
  const { getInfo } = proxyquire(
    '../src/lib/project-metadata/target-builders/git',
    {
      '../../sub-process': {
        execute() {
          return providedUrl;
        },
      },
    },
  );
  const gitInfo = await getInfo(null as any, null as any, false);
  t.same(gitInfo.remoteUrl, providedUrl);
});

test('getInfo returns provided ssh remote url', async (t) => {
  const providedUrl = 'ssh://git@myserver.local/myproject.git';
  const { getInfo } = proxyquire(
    '../src/lib/project-metadata/target-builders/git',
    {
      '../../sub-process': {
        execute() {
          return providedUrl;
        },
      },
    },
  );
  const gitInfo = await getInfo(null as any, null as any, false);
  t.same(gitInfo.remoteUrl, 'http://myserver.local/myproject.git');
});
