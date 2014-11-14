This plugin needs a restoreRevision api function.
I made pull request to etherpad with this function.

Check if your version of etherpad contains restoreRevision() in <root_dir>/src/node/db/API.js:restoreRevision

If yes: all should work correctly.

If not: please apply the patch "core_change.patch"

