var fs = require('fs');

function mergeValues(values, content) {
    //merge values with the content 
    //cycle over the keys 
    for (var key in values) {
        //replace all {{key}} with the value from the values object 
        content = content.replace('{{' + key + '}}', values[key]);
    }
    //return merged content 
    return content;
}

function view(templateName, values, response) {
    // read from the template files 
    var fileContent = fs.readFileSync('./views/' + templateName + '.html', { encoding: "utf8" });
    // insert values into the content 
    fileContent = mergeValues(values, fileContent);
    // write out to the response 
    response.write(fileContent);
};

module.exports.view = view; 