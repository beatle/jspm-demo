import $ from "jquery";
import Handlebars from "handlebars";
import templateSource from "./templates/index.hbs!text";

$(() => {
    let template = Handlebars.compile(templateSource);
    document.body.innerHTML = template({name: 'Jspm'});
});
