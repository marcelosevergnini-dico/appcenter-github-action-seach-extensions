# diconium Cariad Actions
## AppCenter Extensions - Search for distributions
### Search for distributions on AppACenter based on the criteria input value, this action uses the distribution object attribute "short_version" to match the criteria input

## Inputs

## `criteria_value`

**Required** criteria input value. No Default ``.

## `appName`

**Required** App Name. no default.

## `token`

**Required** App access token. no default.
```
uses: actions/appcenter-github-action-delete-extensions@v1.0
with:
    criteria_value: 'TASK_NUMBER'
    appName: 'marcelosevergnini-dico/my_app_test'
    token: '******'
```