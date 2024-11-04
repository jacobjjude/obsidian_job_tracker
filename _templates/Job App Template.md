<%*
let company = await tp.system.prompt("Company Name")
let position = await tp.system.prompt("Position Title")
let date_applied = tp.date.now("MM-DD-YYYY")

let newFileName = company + " - " + position
let newFilePath = "job_apps/" + newFileName

await tp.file.move(newFilePath)

tR += `---
company: ${company}
position: ${position}
status: Applied
date applied: ${date_applied}
---`
%>

## Company

- (Company:: <% company %>)

## Position

- (Position:: <% position %>)

## Status

```meta-bind
INPUT[suggester(option(Applied), option(Rejected), option(Ghosted), option(Offer Sent), option(Offer Accepted)):status]
```

## Notes
- 