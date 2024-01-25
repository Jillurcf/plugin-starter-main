# plugin-starter
This repo provides a starting for a create a plugin

## Steps

- Clone this repo in plugins folder of productgenie/plugins repo.
- Change the name from plugin-starter to desired plugin id.
- Update the same in package.json's name field.
- Remove the .git folder in plugin repo by doing `rm -rf .git` in the newly cloned plugin folder
- Above setup is necessary because plugins is a monorepo.
