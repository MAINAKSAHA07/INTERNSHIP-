import { run } from "tripetto-runner-autoscroll";
import { Export } from "tripetto-runner-foundation";
import Services from "tripetto-services";

let doc = 1;
if (window.location.pathname === '/getstarted') {
    doc = document.body;
}
else {
    doc = 1;
}


const { definition, styles, l10n, locale, translations, snapshot, attachments, onSubmit, onPause } = Services.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiejZqSjhMTFRONlJ4ZW95MmRBNFNjcnkzQytCaWpES2tTbTdNSnFmRUpKQT0iLCJkZWZpbml0aW9uIjoiWHUvZ0c5SkZ1aGNMY0xIR1A1TGQ2WU10VzY4cUZUcW03cUVOOWZ6Qy93dz0iLCJ0eXBlIjoiY29sbGVjdCJ9.n2GA2CLltkyfdUrJHtMpxdrTIf8-VzXwHoiDbSlCTKA"
});

run({
    element: doc,
    definition,
    styles,
    l10n,
    locale,
    translations,
    attachments,
    onSubmit
});