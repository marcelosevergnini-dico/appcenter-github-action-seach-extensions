const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
    let appName = core.getInput('appName');  // application name
    let token = core.getInput('token'); // your token that you copied;
    let criteriaValue = core.getInput('criteria_value'); // by which release number to delete
    let targetSearchCriteriaType = "short_version"

    let requestInfo = {
        method: "GET",
        headers: { "X-API-TOKEN": token }
    };

    (async function() {
        let url = `https://api.appcenter.ms/v0.1/apps/${appName}/releases/`;
        try {
            const response = await fetch(url, requestInfo);
            const body = await response.text();
            const output = []

            let result = JSON.parse(body).filter(release => release[targetSearchCriteriaType].includes(criteriaValue))
            result.forEach(release => {
                if (release[targetSearchCriteriaType].includes(criteriaValue)){
                    const { id } = release;
                    output.push(id)
                }
            });
            core.setOutput("output_list", output);
        } catch (err) {
            console.log(err);
        }
    })();

} catch (error) {
  core.setFailed(error.message);
}
